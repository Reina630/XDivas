/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
//flickity.pkgd.js
//custom.js 
// PhotoSwipe - v4.1.3 - 2019-01-08  http://photoswipe.com
// PhotoSwipe Default UI - 4.1.3 - 2019-01-08 http://photoswipe.com
//Owl Carousel v2.3.4

!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

(function(window,factory){if(typeof define=='function'&&define.amd){define('jquery-bridget/jquery-bridget',['jquery'],function(jQuery){return factory(window,jQuery);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('jquery'));}else{window.jQueryBridget=factory(window,window.jQuery);}}(window,function factory(window,jQuery){'use strict';var arraySlice=Array.prototype.slice;var console=window.console;var logError=typeof console=='undefined'?function(){}:function(message){console.error(message);};function jQueryBridget(namespace,PluginClass,$){$=$||jQuery||window.jQuery;if(!$){return;}
if(!PluginClass.prototype.option){PluginClass.prototype.option=function(opts){if(!$.isPlainObject(opts)){return;}
this.options=$.extend(true,this.options,opts);};}
$.fn[namespace]=function(arg0){if(typeof arg0=='string'){var args=arraySlice.call(arguments,1);return methodCall(this,arg0,args);}
plainCall(this,arg0);return this;};function methodCall($elems,methodName,args){var returnValue;var pluginMethodStr='$().'+namespace+'("'+methodName+'")';$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(!instance){logError(namespace+' not initialized. Cannot call methods, i.e. '+pluginMethodStr);return;}
var method=instance[methodName];if(!method||methodName.charAt(0)=='_'){logError(pluginMethodStr+' is not a valid method');return;}
var value=method.apply(instance,args);returnValue=returnValue===undefined?value:returnValue;});return returnValue!==undefined?returnValue:$elems;}
function plainCall($elems,options){$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(instance){instance.option(options);instance._init();}else{instance=new PluginClass(elem,options);$.data(elem,namespace,instance);}});}
updateJQuery($);}
function updateJQuery($){if(!$||($&&$.bridget)){return;}
$.bridget=jQueryBridget;}
updateJQuery(jQuery||window.jQuery);return jQueryBridget;}));(function(global,factory){if(typeof define=='function'&&define.amd){define('ev-emitter/ev-emitter',factory);}else if(typeof module=='object'&&module.exports){module.exports=factory();}else{global.EvEmitter=factory();}}(typeof window!='undefined'?window:this,function(){function EvEmitter(){}
var proto=EvEmitter.prototype;proto.on=function(eventName,listener){if(!eventName||!listener){return;}
var events=this._events=this._events||{};var listeners=events[eventName]=events[eventName]||[];if(listeners.indexOf(listener)==-1){listeners.push(listener);}
return this;};proto.once=function(eventName,listener){if(!eventName||!listener){return;}
this.on(eventName,listener);var onceEvents=this._onceEvents=this._onceEvents||{};var onceListeners=onceEvents[eventName]=onceEvents[eventName]||{};onceListeners[listener]=true;return this;};proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}
var index=listeners.indexOf(listener);if(index!=-1){listeners.splice(index,1);}
return this;};proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}
listeners=listeners.slice(0);args=args||[];var onceListeners=this._onceEvents&&this._onceEvents[eventName];for(var i=0;i<listeners.length;i++){var listener=listeners[i]
var isOnce=onceListeners&&onceListeners[listener];if(isOnce){this.off(eventName,listener);delete onceListeners[listener];}
listener.apply(this,args);}
return this;};proto.allOff=function(){delete this._events;delete this._onceEvents;};return EvEmitter;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('get-size/get-size',factory);}else if(typeof module=='object'&&module.exports){module.exports=factory();}else{window.getSize=factory();}})(window,function factory(){'use strict';function getStyleSize(value){var num=parseFloat(value);var isValid=value.indexOf('%')==-1&&!isNaN(num);return isValid&&num;}
function noop(){}
var logError=typeof console=='undefined'?noop:function(message){console.error(message);};var measurements=['paddingLeft','paddingRight','paddingTop','paddingBottom','marginLeft','marginRight','marginTop','marginBottom','borderLeftWidth','borderRightWidth','borderTopWidth','borderBottomWidth'];var measurementsLength=measurements.length;function getZeroSize(){var size={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];size[measurement]=0;}
return size;}
function getStyle(elem){var style=getComputedStyle(elem);if(!style){logError('Style returned '+style+'. Are you running this code in a hidden iframe on Firefox? '+'See https://bit.ly/getsizebug1');}
return style;}
var isSetup=false;var isBoxSizeOuter;function setup(){if(isSetup){return;}
isSetup=true;var div=document.createElement('div');div.style.width='200px';div.style.padding='1px 2px 3px 4px';div.style.borderStyle='solid';div.style.borderWidth='1px 2px 3px 4px';div.style.boxSizing='border-box';var body=document.body||document.documentElement;body.appendChild(div);var style=getStyle(div);isBoxSizeOuter=Math.round(getStyleSize(style.width))==200;getSize.isBoxSizeOuter=isBoxSizeOuter;body.removeChild(div);}
function getSize(elem){setup();if(typeof elem=='string'){elem=document.querySelector(elem);}
if(!elem||typeof elem!='object'||!elem.nodeType){return;}
var style=getStyle(elem);if(style.display=='none'){return getZeroSize();}
var size={};size.width=elem.offsetWidth;size.height=elem.offsetHeight;var isBorderBox=size.isBorderBox=style.boxSizing=='border-box';for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];var value=style[measurement];var num=parseFloat(value);size[measurement]=!isNaN(num)?num:0;}
var paddingWidth=size.paddingLeft+size.paddingRight;var paddingHeight=size.paddingTop+size.paddingBottom;var marginWidth=size.marginLeft+size.marginRight;var marginHeight=size.marginTop+size.marginBottom;var borderWidth=size.borderLeftWidth+size.borderRightWidth;var borderHeight=size.borderTopWidth+size.borderBottomWidth;var isBorderBoxSizeOuter=isBorderBox&&isBoxSizeOuter;var styleWidth=getStyleSize(style.width);if(styleWidth!==false){size.width=styleWidth+(isBorderBoxSizeOuter?0:paddingWidth+borderWidth);}
var styleHeight=getStyleSize(style.height);if(styleHeight!==false){size.height=styleHeight+(isBorderBoxSizeOuter?0:paddingHeight+borderHeight);}
size.innerWidth=size.width-(paddingWidth+borderWidth);size.innerHeight=size.height-(paddingHeight+borderHeight);size.outerWidth=size.width+marginWidth;size.outerHeight=size.height+marginHeight;return size;}
return getSize;});(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define('desandro-matches-selector/matches-selector',factory);}else if(typeof module=='object'&&module.exports){module.exports=factory();}else{window.matchesSelector=factory();}}(window,function factory(){'use strict';var matchesMethod=(function(){var ElemProto=window.Element.prototype;if(ElemProto.matches){return'matches';}
if(ElemProto.matchesSelector){return'matchesSelector';}
var prefixes=['webkit','moz','ms','o'];for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var method=prefix+'MatchesSelector';if(ElemProto[method]){return method;}}})();return function matchesSelector(elem,selector){return elem[matchesMethod](selector);};}));(function(window,factory){if(typeof define=='function'&&define.amd){define('fizzy-ui-utils/utils',['desandro-matches-selector/matches-selector'],function(matchesSelector){return factory(window,matchesSelector);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('desandro-matches-selector'));}else{window.fizzyUIUtils=factory(window,window.matchesSelector);}}(window,function factory(window,matchesSelector){var utils={};utils.extend=function(a,b){for(var prop in b){a[prop]=b[prop];}
return a;};utils.modulo=function(num,div){return((num%div)+div)%div;};var arraySlice=Array.prototype.slice;utils.makeArray=function(obj){if(Array.isArray(obj)){return obj;}
if(obj===null||obj===undefined){return[];}
var isArrayLike=typeof obj=='object'&&typeof obj.length=='number';if(isArrayLike){return arraySlice.call(obj);}
return[obj];};utils.removeFrom=function(ary,obj){var index=ary.indexOf(obj);if(index!=-1){ary.splice(index,1);}};utils.getParent=function(elem,selector){while(elem.parentNode&&elem!=document.body){elem=elem.parentNode;if(matchesSelector(elem,selector)){return elem;}}};utils.getQueryElement=function(elem){if(typeof elem=='string'){return document.querySelector(elem);}
return elem;};utils.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};utils.filterFindElements=function(elems,selector){elems=utils.makeArray(elems);var ffElems=[];elems.forEach(function(elem){if(!(elem instanceof HTMLElement)){return;}
if(!selector){ffElems.push(elem);return;}
if(matchesSelector(elem,selector)){ffElems.push(elem);}
var childElems=elem.querySelectorAll(selector);for(var i=0;i<childElems.length;i++){ffElems.push(childElems[i]);}});return ffElems;};utils.debounceMethod=function(_class,methodName,threshold){threshold=threshold||100;var method=_class.prototype[methodName];var timeoutName=methodName+'Timeout';_class.prototype[methodName]=function(){var timeout=this[timeoutName];clearTimeout(timeout);var args=arguments;var _this=this;this[timeoutName]=setTimeout(function(){method.apply(_this,args);delete _this[timeoutName];},threshold);};};utils.docReady=function(callback){var readyState=document.readyState;if(readyState=='complete'||readyState=='interactive'){setTimeout(callback);}else{document.addEventListener('DOMContentLoaded',callback);}};utils.toDashed=function(str){return str.replace(/(.)([A-Z])/g,function(match,$1,$2){return $1+'-'+$2;}).toLowerCase();};var console=window.console;utils.htmlInit=function(WidgetClass,namespace){utils.docReady(function(){var dashedNamespace=utils.toDashed(namespace);var dataAttr='data-'+dashedNamespace;var dataAttrElems=document.querySelectorAll('['+dataAttr+']');var jsDashElems=document.querySelectorAll('.js-'+dashedNamespace);var elems=utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));var dataOptionsAttr=dataAttr+'-options';var jQuery=window.jQuery;elems.forEach(function(elem){var attr=elem.getAttribute(dataAttr)||elem.getAttribute(dataOptionsAttr);var options;try{options=attr&&JSON.parse(attr);}catch(error){if(console){console.error('Error parsing '+dataAttr+' on '+elem.className+': '+error);}
return;}
var instance=new WidgetClass(elem,options);if(jQuery){jQuery.data(elem,namespace,instance);}});});};return utils;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/cell',['get-size/get-size'],function(getSize){return factory(window,getSize);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('get-size'));}else{window.Flickity=window.Flickity||{};window.Flickity.Cell=factory(window,window.getSize);}}(window,function factory(window,getSize){function Cell(elem,parent){this.element=elem;this.parent=parent;this.create();}
var proto=Cell.prototype;proto.create=function(){this.element.style.position='absolute';this.element.setAttribute('aria-hidden','true');this.x=0;this.shift=0;};proto.destroy=function(){this.unselect();this.element.style.position='';var side=this.parent.originSide;this.element.style[side]='';};proto.getSize=function(){this.size=getSize(this.element);};proto.setPosition=function(x){this.x=x;this.updateTarget();this.renderPosition(x);};proto.updateTarget=proto.setDefaultTarget=function(){var marginProperty=this.parent.originSide=='left'?'marginLeft':'marginRight';this.target=this.x+this.size[marginProperty]+this.size.width*this.parent.cellAlign;};proto.renderPosition=function(x){var side=this.parent.originSide;this.element.style[side]=this.parent.getPositionValue(x);};proto.select=function(){this.element.classList.add('is-selected');this.element.removeAttribute('aria-hidden');};proto.unselect=function(){this.element.classList.remove('is-selected');this.element.setAttribute('aria-hidden','true');};proto.wrapShift=function(shift){this.shift=shift;this.renderPosition(this.x+this.parent.slideableWidth*shift);};proto.remove=function(){this.element.parentNode.removeChild(this.element);};return Cell;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/slide',factory);}else if(typeof module=='object'&&module.exports){module.exports=factory();}else{window.Flickity=window.Flickity||{};window.Flickity.Slide=factory();}}(window,function factory(){'use strict';function Slide(parent){this.parent=parent;this.isOriginLeft=parent.originSide=='left';this.cells=[];this.outerWidth=0;this.height=0;}
var proto=Slide.prototype;proto.addCell=function(cell){this.cells.push(cell);this.outerWidth+=cell.size.outerWidth;this.height=Math.max(cell.size.outerHeight,this.height);if(this.cells.length==1){this.x=cell.x;var beginMargin=this.isOriginLeft?'marginLeft':'marginRight';this.firstMargin=cell.size[beginMargin];}};proto.updateTarget=function(){var endMargin=this.isOriginLeft?'marginRight':'marginLeft';var lastCell=this.getLastCell();var lastMargin=lastCell?lastCell.size[endMargin]:0;var slideWidth=this.outerWidth-(this.firstMargin+lastMargin);this.target=this.x+this.firstMargin+slideWidth*this.parent.cellAlign;};proto.getLastCell=function(){return this.cells[this.cells.length-1];};proto.select=function(){this.cells.forEach(function(cell){cell.select();});};proto.unselect=function(){this.cells.forEach(function(cell){cell.unselect();});};proto.getCellElements=function(){return this.cells.map(function(cell){return cell.element;});};return Slide;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/animate',['fizzy-ui-utils/utils'],function(utils){return factory(window,utils);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('fizzy-ui-utils'));}else{window.Flickity=window.Flickity||{};window.Flickity.animatePrototype=factory(window,window.fizzyUIUtils);}}(window,function factory(window,utils){var proto={};proto.startAnimation=function(){if(this.isAnimating){return;}
this.isAnimating=true;this.restingFrames=0;this.animate();};proto.animate=function(){this.applyDragForce();this.applySelectedAttraction();var previousX=this.x;this.integratePhysics();this.positionSlider();this.settle(previousX);if(this.isAnimating){var _this=this;requestAnimationFrame(function animateFrame(){_this.animate();});}};proto.positionSlider=function(){var x=this.x;if(this.options.wrapAround&&this.cells.length>1){x=utils.modulo(x,this.slideableWidth);x=x-this.slideableWidth;this.shiftWrapCells(x);}
this.setTranslateX(x,this.isAnimating);this.dispatchScrollEvent();};proto.setTranslateX=function(x,is3d){x+=this.cursorPosition;x=this.options.rightToLeft?-x:x;var translateX=this.getPositionValue(x);this.slider.style.transform=is3d?'translate3d('+translateX+',0,0)':'translateX('+translateX+')';};proto.dispatchScrollEvent=function(){var firstSlide=this.slides[0];if(!firstSlide){return;}
var positionX=-this.x-firstSlide.target;var progress=positionX/this.slidesWidth;this.dispatchEvent('scroll',null,[progress,positionX]);};proto.positionSliderAtSelected=function(){if(!this.cells.length){return;}
this.x=-this.selectedSlide.target;this.velocity=0;this.positionSlider();};proto.getPositionValue=function(position){if(this.options.percentPosition){return(Math.round((position/this.size.innerWidth)*10000)*0.01)+'%';}else{return Math.round(position)+'px';}};proto.settle=function(previousX){if(!this.isPointerDown&&Math.round(this.x*100)==Math.round(previousX*100)){this.restingFrames++;}
if(this.restingFrames>2){this.isAnimating=false;delete this.isFreeScrolling;this.positionSlider();this.dispatchEvent('settle',null,[this.selectedIndex]);}};proto.shiftWrapCells=function(x){var beforeGap=this.cursorPosition+x;this._shiftCells(this.beforeShiftCells,beforeGap,-1);var afterGap=this.size.innerWidth-(x+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,afterGap,1);};proto._shiftCells=function(cells,gap,shift){for(var i=0;i<cells.length;i++){var cell=cells[i];var cellShift=gap>0?shift:0;cell.wrapShift(cellShift);gap-=cell.size.outerWidth;}};proto._unshiftCells=function(cells){if(!cells||!cells.length){return;}
for(var i=0;i<cells.length;i++){cells[i].wrapShift(0);}};proto.integratePhysics=function(){this.x+=this.velocity;this.velocity*=this.getFrictionFactor();};proto.applyForce=function(force){this.velocity+=force;};proto.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?'freeScrollFriction':'friction'];};proto.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor());};proto.applyDragForce=function(){if(!this.isDraggable||!this.isPointerDown){return;}
var dragVelocity=this.dragX-this.x;var dragForce=dragVelocity-this.velocity;this.applyForce(dragForce);};proto.applySelectedAttraction=function(){var dragDown=this.isDraggable&&this.isPointerDown;if(dragDown||this.isFreeScrolling||!this.slides.length){return;}
var distance=this.selectedSlide.target*-1-this.x;var force=distance*this.options.selectedAttraction;this.applyForce(force);};return proto;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/flickity',['ev-emitter/ev-emitter','get-size/get-size','fizzy-ui-utils/utils','./cell','./slide','./animate'],function(EvEmitter,getSize,utils,Cell,Slide,animatePrototype){return factory(window,EvEmitter,getSize,utils,Cell,Slide,animatePrototype);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('ev-emitter'),require('get-size'),require('fizzy-ui-utils'),require('./cell'),require('./slide'),require('./animate'));}else{var _Flickity=window.Flickity;window.Flickity=factory(window,window.EvEmitter,window.getSize,window.fizzyUIUtils,_Flickity.Cell,_Flickity.Slide,_Flickity.animatePrototype);}}(window,function factory(window,EvEmitter,getSize,utils,Cell,Slide,animatePrototype){var jQuery=window.jQuery;var getComputedStyle=window.getComputedStyle;var console=window.console;function moveElements(elems,toElem){elems=utils.makeArray(elems);while(elems.length){toElem.appendChild(elems.shift());}}
var GUID=0;var instances={};function Flickity(element,options){var queryElement=utils.getQueryElement(element);if(!queryElement){if(console){console.error('Bad element for Flickity: '+(queryElement||element));}
return;}
this.element=queryElement;if(this.element.flickityGUID){var instance=instances[this.element.flickityGUID];instance.option(options);return instance;}
if(jQuery){this.$element=jQuery(this.element);}
this.options=utils.extend({},this.constructor.defaults);this.option(options);this._create();}
Flickity.defaults={accessibility:true,cellAlign:'center',freeScrollFriction:0.075,friction:0.28,namespaceJQueryEvents:true,percentPosition:true,resize:true,selectedAttraction:0.025,setGallerySize:true};Flickity.createMethods=[];var proto=Flickity.prototype;utils.extend(proto,EvEmitter.prototype);proto._create=function(){var id=this.guid=++GUID;this.element.flickityGUID=id;instances[id]=this;this.selectedIndex=0;this.restingFrames=0;this.x=0;this.velocity=0;this.originSide=this.options.rightToLeft?'right':'left';this.viewport=document.createElement('div');this.viewport.className='flickity-viewport';this._createSlider();if(this.options.resize||this.options.watchCSS){window.addEventListener('resize',this);}
for(var eventName in this.options.on){var listener=this.options.on[eventName];this.on(eventName,listener);}
Flickity.createMethods.forEach(function(method){this[method]();},this);if(this.options.watchCSS){this.watchCSS();}else{this.activate();}};proto.option=function(opts){utils.extend(this.options,opts);};proto.activate=function(){if(this.isActive){return;}
this.isActive=true;this.element.classList.add('flickity-enabled');if(this.options.rightToLeft){this.element.classList.add('flickity-rtl');}
this.getSize();var cellElems=this._filterFindCellElements(this.element.children);moveElements(cellElems,this.slider);this.viewport.appendChild(this.slider);this.element.appendChild(this.viewport);this.reloadCells();if(this.options.accessibility){this.element.tabIndex=0;this.element.addEventListener('keydown',this);}
this.emitEvent('activate');this.selectInitialIndex();this.isInitActivated=true;this.dispatchEvent('ready');};proto._createSlider=function(){var slider=document.createElement('div');slider.className='flickity-slider';slider.style[this.originSide]=0;this.slider=slider;};proto._filterFindCellElements=function(elems){return utils.filterFindElements(elems,this.options.cellSelector);};proto.reloadCells=function(){this.cells=this._makeCells(this.slider.children);this.positionCells();this._getWrapShiftCells();this.setGallerySize();};proto._makeCells=function(elems){var cellElems=this._filterFindCellElements(elems);var cells=cellElems.map(function(cellElem){return new Cell(cellElem,this);},this);return cells;};proto.getLastCell=function(){return this.cells[this.cells.length-1];};proto.getLastSlide=function(){return this.slides[this.slides.length-1];};proto.positionCells=function(){this._sizeCells(this.cells);this._positionCells(0);};proto._positionCells=function(index){index=index||0;this.maxCellHeight=index?this.maxCellHeight||0:0;var cellX=0;if(index>0){var startCell=this.cells[index-1];cellX=startCell.x+startCell.size.outerWidth;}
var len=this.cells.length;for(var i=index;i<len;i++){var cell=this.cells[i];cell.setPosition(cellX);cellX+=cell.size.outerWidth;this.maxCellHeight=Math.max(cell.size.outerHeight,this.maxCellHeight);}
this.slideableWidth=cellX;this.updateSlides();this._containSlides();this.slidesWidth=len?this.getLastSlide().target-this.slides[0].target:0;};proto._sizeCells=function(cells){cells.forEach(function(cell){cell.getSize();});};proto.updateSlides=function(){this.slides=[];if(!this.cells.length){return;}
var slide=new Slide(this);this.slides.push(slide);var isOriginLeft=this.originSide=='left';var nextMargin=isOriginLeft?'marginRight':'marginLeft';var canCellFit=this._getCanCellFit();this.cells.forEach(function(cell,i){if(!slide.cells.length){slide.addCell(cell);return;}
var slideWidth=(slide.outerWidth-slide.firstMargin)+(cell.size.outerWidth-cell.size[nextMargin]);if(canCellFit.call(this,i,slideWidth)){slide.addCell(cell);}else{slide.updateTarget();slide=new Slide(this);this.slides.push(slide);slide.addCell(cell);}},this);slide.updateTarget();this.updateSelectedSlide();};proto._getCanCellFit=function(){var groupCells=this.options.groupCells;if(!groupCells){return function(){return false;};}else if(typeof groupCells=='number'){var number=parseInt(groupCells,10);return function(i){return(i%number)!==0;};}
var percentMatch=typeof groupCells=='string'&&groupCells.match(/^(\d+)%$/);var percent=percentMatch?parseInt(percentMatch[1],10)/100:1;return function(i,slideWidth){return slideWidth<=(this.size.innerWidth+1)*percent;};};proto._init=proto.reposition=function(){this.positionCells();this.positionSliderAtSelected();};proto.getSize=function(){this.size=getSize(this.element);this.setCellAlign();this.cursorPosition=this.size.innerWidth*this.cellAlign;};var cellAlignShorthands={center:{left:0.5,right:0.5},left:{left:0,right:1},right:{right:0,left:1}};proto.setCellAlign=function(){var shorthand=cellAlignShorthands[this.options.cellAlign];this.cellAlign=shorthand?shorthand[this.originSide]:this.options.cellAlign;};proto.setGallerySize=function(){if(this.options.setGallerySize){var height=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=height+'px';}};proto._getWrapShiftCells=function(){if(!this.options.wrapAround){return;}
this._unshiftCells(this.beforeShiftCells);this._unshiftCells(this.afterShiftCells);var gapX=this.cursorPosition;var cellIndex=this.cells.length-1;this.beforeShiftCells=this._getGapCells(gapX,cellIndex,-1);gapX=this.size.innerWidth-this.cursorPosition;this.afterShiftCells=this._getGapCells(gapX,0,1);};proto._getGapCells=function(gapX,cellIndex,increment){var cells=[];while(gapX>0){var cell=this.cells[cellIndex];if(!cell){break;}
cells.push(cell);cellIndex+=increment;gapX-=cell.size.outerWidth;}
return cells;};proto._containSlides=function(){if(!this.options.contain||this.options.wrapAround||!this.cells.length){return;}
var isRightToLeft=this.options.rightToLeft;var beginMargin=isRightToLeft?'marginRight':'marginLeft';var endMargin=isRightToLeft?'marginLeft':'marginRight';var contentWidth=this.slideableWidth-this.getLastCell().size[endMargin];var isContentSmaller=contentWidth<this.size.innerWidth;var beginBound=this.cursorPosition+this.cells[0].size[beginMargin];var endBound=contentWidth-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(slide){if(isContentSmaller){slide.target=contentWidth*this.cellAlign;}else{slide.target=Math.max(slide.target,beginBound);slide.target=Math.min(slide.target,endBound);}},this);};proto.dispatchEvent=function(type,event,args){var emitArgs=event?[event].concat(args):args;this.emitEvent(type,emitArgs);if(jQuery&&this.$element){type+=this.options.namespaceJQueryEvents?'.flickity':'';var $event=type;if(event){var jQEvent=jQuery.Event(event);jQEvent.type=type;$event=jQEvent;}
this.$element.trigger($event,args);}};proto.select=function(index,isWrap,isInstant){if(!this.isActive){return;}
index=parseInt(index,10);this._wrapSelect(index);if(this.options.wrapAround||isWrap){index=utils.modulo(index,this.slides.length);}
if(!this.slides[index]){return;}
var prevIndex=this.selectedIndex;this.selectedIndex=index;this.updateSelectedSlide();if(isInstant){this.positionSliderAtSelected();}else{this.startAnimation();}
if(this.options.adaptiveHeight){this.setGallerySize();}
this.dispatchEvent('select',null,[index]);if(index!=prevIndex){this.dispatchEvent('change',null,[index]);}
this.dispatchEvent('cellSelect');};proto._wrapSelect=function(index){var len=this.slides.length;var isWrapping=this.options.wrapAround&&len>1;if(!isWrapping){return index;}
var wrapIndex=utils.modulo(index,len);var delta=Math.abs(wrapIndex-this.selectedIndex);var backWrapDelta=Math.abs((wrapIndex+len)-this.selectedIndex);var forewardWrapDelta=Math.abs((wrapIndex-len)-this.selectedIndex);if(!this.isDragSelect&&backWrapDelta<delta){index+=len;}else if(!this.isDragSelect&&forewardWrapDelta<delta){index-=len;}
if(index<0){this.x-=this.slideableWidth;}else if(index>=len){this.x+=this.slideableWidth;}};proto.previous=function(isWrap,isInstant){this.select(this.selectedIndex-1,isWrap,isInstant);};proto.next=function(isWrap,isInstant){this.select(this.selectedIndex+1,isWrap,isInstant);};proto.updateSelectedSlide=function(){var slide=this.slides[this.selectedIndex];if(!slide){return;}
this.unselectSelectedSlide();this.selectedSlide=slide;slide.select();this.selectedCells=slide.cells;this.selectedElements=slide.getCellElements();this.selectedCell=slide.cells[0];this.selectedElement=this.selectedElements[0];};proto.unselectSelectedSlide=function(){if(this.selectedSlide){this.selectedSlide.unselect();}};proto.selectInitialIndex=function(){var initialIndex=this.options.initialIndex;if(this.isInitActivated){this.select(this.selectedIndex,false,true);return;}
if(initialIndex&&typeof initialIndex=='string'){var cell=this.queryCell(initialIndex);if(cell){this.selectCell(initialIndex,false,true);return;}}
var index=0;if(initialIndex&&this.slides[initialIndex]){index=initialIndex;}
this.select(index,false,true);};proto.selectCell=function(value,isWrap,isInstant){var cell=this.queryCell(value);if(!cell){return;}
var index=this.getCellSlideIndex(cell);this.select(index,isWrap,isInstant);};proto.getCellSlideIndex=function(cell){for(var i=0;i<this.slides.length;i++){var slide=this.slides[i];var index=slide.cells.indexOf(cell);if(index!=-1){return i;}}};proto.getCell=function(elem){for(var i=0;i<this.cells.length;i++){var cell=this.cells[i];if(cell.element==elem){return cell;}}};proto.getCells=function(elems){elems=utils.makeArray(elems);var cells=[];elems.forEach(function(elem){var cell=this.getCell(elem);if(cell){cells.push(cell);}},this);return cells;};proto.getCellElements=function(){return this.cells.map(function(cell){return cell.element;});};proto.getParentCell=function(elem){var cell=this.getCell(elem);if(cell){return cell;}
elem=utils.getParent(elem,'.flickity-slider > *');return this.getCell(elem);};proto.getAdjacentCellElements=function(adjCount,index){if(!adjCount){return this.selectedSlide.getCellElements();}
index=index===undefined?this.selectedIndex:index;var len=this.slides.length;if(1+(adjCount*2)>=len){return this.getCellElements();}
var cellElems=[];for(var i=index-adjCount;i<=index+adjCount;i++){var slideIndex=this.options.wrapAround?utils.modulo(i,len):i;var slide=this.slides[slideIndex];if(slide){cellElems=cellElems.concat(slide.getCellElements());}}
return cellElems;};proto.queryCell=function(selector){if(typeof selector=='number'){return this.cells[selector];}
if(typeof selector=='string'){if(selector.match(/^[#\.]?[\d\/]/)){return;}
selector=this.element.querySelector(selector);}
return this.getCell(selector);};proto.uiChange=function(){this.emitEvent('uiChange');};proto.childUIPointerDown=function(event){if(event.type!='touchstart'){event.preventDefault();}
this.focus();};proto.onresize=function(){this.watchCSS();this.resize();};utils.debounceMethod(Flickity,'onresize',150);proto.resize=function(){if(!this.isActive){return;}
this.getSize();if(this.options.wrapAround){this.x=utils.modulo(this.x,this.slideableWidth);}
this.positionCells();this._getWrapShiftCells();this.setGallerySize();this.emitEvent('resize');var selectedElement=this.selectedElements&&this.selectedElements[0];this.selectCell(selectedElement,false,true);};proto.watchCSS=function(){var watchOption=this.options.watchCSS;if(!watchOption){return;}
var afterContent=getComputedStyle(this.element,':after').content;if(afterContent.indexOf('flickity')!=-1){this.activate();}else{this.deactivate();}};proto.onkeydown=function(event){var isNotFocused=document.activeElement&&document.activeElement!=this.element;if(!this.options.accessibility||isNotFocused){return;}
var handler=Flickity.keyboardHandlers[event.keyCode];if(handler){handler.call(this);}};Flickity.keyboardHandlers={37:function(){var leftMethod=this.options.rightToLeft?'next':'previous';this.uiChange();this[leftMethod]();},39:function(){var rightMethod=this.options.rightToLeft?'previous':'next';this.uiChange();this[rightMethod]();},};proto.focus=function(){var prevScrollY=window.pageYOffset;this.element.focus({preventScroll:true});if(window.pageYOffset!=prevScrollY){window.scrollTo(window.pageXOffset,prevScrollY);}};proto.deactivate=function(){if(!this.isActive){return;}
this.element.classList.remove('flickity-enabled');this.element.classList.remove('flickity-rtl');this.unselectSelectedSlide();this.cells.forEach(function(cell){cell.destroy();});this.element.removeChild(this.viewport);moveElements(this.slider.children,this.element);if(this.options.accessibility){this.element.removeAttribute('tabIndex');this.element.removeEventListener('keydown',this);}
this.isActive=false;this.emitEvent('deactivate');};proto.destroy=function(){this.deactivate();window.removeEventListener('resize',this);this.allOff();this.emitEvent('destroy');if(jQuery&&this.$element){jQuery.removeData(this.element,'flickity');}
delete this.element.flickityGUID;delete instances[this.guid];};utils.extend(proto,animatePrototype);Flickity.data=function(elem){elem=utils.getQueryElement(elem);var id=elem&&elem.flickityGUID;return id&&instances[id];};utils.htmlInit(Flickity,'flickity');if(jQuery&&jQuery.bridget){jQuery.bridget('flickity',Flickity);}
Flickity.setJQuery=function(jq){jQuery=jq;};Flickity.Cell=Cell;Flickity.Slide=Slide;return Flickity;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('unipointer/unipointer',['ev-emitter/ev-emitter'],function(EvEmitter){return factory(window,EvEmitter);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('ev-emitter'));}else{window.Unipointer=factory(window,window.EvEmitter);}}(window,function factory(window,EvEmitter){function noop(){}
function Unipointer(){}
var proto=Unipointer.prototype=Object.create(EvEmitter.prototype);proto.bindStartEvent=function(elem){this._bindStartEvent(elem,true);};proto.unbindStartEvent=function(elem){this._bindStartEvent(elem,false);};proto._bindStartEvent=function(elem,isAdd){isAdd=isAdd===undefined?true:isAdd;var bindMethod=isAdd?'addEventListener':'removeEventListener';var startEvent='mousedown';if(window.PointerEvent){startEvent='pointerdown';}else if('ontouchstart'in window){startEvent='touchstart';}
elem[bindMethod](startEvent,this);};proto.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};proto.getTouch=function(touches){for(var i=0;i<touches.length;i++){var touch=touches[i];if(touch.identifier==this.pointerIdentifier){return touch;}}};proto.onmousedown=function(event){var button=event.button;if(button&&(button!==0&&button!==1)){return;}
this._pointerDown(event,event);};proto.ontouchstart=function(event){this._pointerDown(event,event.changedTouches[0]);};proto.onpointerdown=function(event){this._pointerDown(event,event);};proto._pointerDown=function(event,pointer){if(event.button||this.isPointerDown){return;}
this.isPointerDown=true;this.pointerIdentifier=pointer.pointerId!==undefined?pointer.pointerId:pointer.identifier;this.pointerDown(event,pointer);};proto.pointerDown=function(event,pointer){this._bindPostStartEvents(event);this.emitEvent('pointerDown',[event,pointer]);};var postStartEvents={mousedown:['mousemove','mouseup'],touchstart:['touchmove','touchend','touchcancel'],pointerdown:['pointermove','pointerup','pointercancel'],};proto._bindPostStartEvents=function(event){if(!event){return;}
var events=postStartEvents[event.type];events.forEach(function(eventName){window.addEventListener(eventName,this);},this);this._boundPointerEvents=events;};proto._unbindPostStartEvents=function(){if(!this._boundPointerEvents){return;}
this._boundPointerEvents.forEach(function(eventName){window.removeEventListener(eventName,this);},this);delete this._boundPointerEvents;};proto.onmousemove=function(event){this._pointerMove(event,event);};proto.onpointermove=function(event){if(event.pointerId==this.pointerIdentifier){this._pointerMove(event,event);}};proto.ontouchmove=function(event){var touch=this.getTouch(event.changedTouches);if(touch){this._pointerMove(event,touch);}};proto._pointerMove=function(event,pointer){this.pointerMove(event,pointer);};proto.pointerMove=function(event,pointer){this.emitEvent('pointerMove',[event,pointer]);};proto.onmouseup=function(event){this._pointerUp(event,event);};proto.onpointerup=function(event){if(event.pointerId==this.pointerIdentifier){this._pointerUp(event,event);}};proto.ontouchend=function(event){var touch=this.getTouch(event.changedTouches);if(touch){this._pointerUp(event,touch);}};proto._pointerUp=function(event,pointer){this._pointerDone();this.pointerUp(event,pointer);};proto.pointerUp=function(event,pointer){this.emitEvent('pointerUp',[event,pointer]);};proto._pointerDone=function(){this._pointerReset();this._unbindPostStartEvents();this.pointerDone();};proto._pointerReset=function(){this.isPointerDown=false;delete this.pointerIdentifier;};proto.pointerDone=noop;proto.onpointercancel=function(event){if(event.pointerId==this.pointerIdentifier){this._pointerCancel(event,event);}};proto.ontouchcancel=function(event){var touch=this.getTouch(event.changedTouches);if(touch){this._pointerCancel(event,touch);}};proto._pointerCancel=function(event,pointer){this._pointerDone();this.pointerCancel(event,pointer);};proto.pointerCancel=function(event,pointer){this.emitEvent('pointerCancel',[event,pointer]);};Unipointer.getPointerPoint=function(pointer){return{x:pointer.pageX,y:pointer.pageY};};return Unipointer;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('unidragger/unidragger',['unipointer/unipointer'],function(Unipointer){return factory(window,Unipointer);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('unipointer'));}else{window.Unidragger=factory(window,window.Unipointer);}}(window,function factory(window,Unipointer){function Unidragger(){}
var proto=Unidragger.prototype=Object.create(Unipointer.prototype);proto.bindHandles=function(){this._bindHandles(true);};proto.unbindHandles=function(){this._bindHandles(false);};proto._bindHandles=function(isAdd){isAdd=isAdd===undefined?true:isAdd;var bindMethod=isAdd?'addEventListener':'removeEventListener';var touchAction=isAdd?this._touchActionValue:'';for(var i=0;i<this.handles.length;i++){var handle=this.handles[i];this._bindStartEvent(handle,isAdd);handle[bindMethod]('click',this);if(window.PointerEvent){handle.style.touchAction=touchAction;}}};proto._touchActionValue='none';proto.pointerDown=function(event,pointer){var isOkay=this.okayPointerDown(event);if(!isOkay){return;}
this.pointerDownPointer=pointer;event.preventDefault();this.pointerDownBlur();this._bindPostStartEvents(event);this.emitEvent('pointerDown',[event,pointer]);};var cursorNodes={TEXTAREA:true,INPUT:true,SELECT:true,OPTION:true,};var clickTypes={radio:true,checkbox:true,button:true,submit:true,image:true,file:true,};proto.okayPointerDown=function(event){var isCursorNode=cursorNodes[event.target.nodeName];var isClickType=clickTypes[event.target.type];var isOkay=!isCursorNode||isClickType;if(!isOkay){this._pointerReset();}
return isOkay;};proto.pointerDownBlur=function(){var focused=document.activeElement;var canBlur=focused&&focused.blur&&focused!=document.body;if(canBlur){focused.blur();}};proto.pointerMove=function(event,pointer){var moveVector=this._dragPointerMove(event,pointer);this.emitEvent('pointerMove',[event,pointer,moveVector]);this._dragMove(event,pointer,moveVector);};proto._dragPointerMove=function(event,pointer){var moveVector={x:pointer.pageX-this.pointerDownPointer.pageX,y:pointer.pageY-this.pointerDownPointer.pageY};if(!this.isDragging&&this.hasDragStarted(moveVector)){this._dragStart(event,pointer);}
return moveVector;};proto.hasDragStarted=function(moveVector){return Math.abs(moveVector.x)>3||Math.abs(moveVector.y)>3;};proto.pointerUp=function(event,pointer){this.emitEvent('pointerUp',[event,pointer]);this._dragPointerUp(event,pointer);};proto._dragPointerUp=function(event,pointer){if(this.isDragging){this._dragEnd(event,pointer);}else{this._staticClick(event,pointer);}};proto._dragStart=function(event,pointer){this.isDragging=true;this.isPreventingClicks=true;this.dragStart(event,pointer);};proto.dragStart=function(event,pointer){this.emitEvent('dragStart',[event,pointer]);};proto._dragMove=function(event,pointer,moveVector){if(!this.isDragging){return;}
this.dragMove(event,pointer,moveVector);};proto.dragMove=function(event,pointer,moveVector){event.preventDefault();this.emitEvent('dragMove',[event,pointer,moveVector]);};proto._dragEnd=function(event,pointer){this.isDragging=false;setTimeout(function(){delete this.isPreventingClicks;}.bind(this));this.dragEnd(event,pointer);};proto.dragEnd=function(event,pointer){this.emitEvent('dragEnd',[event,pointer]);};proto.onclick=function(event){if(this.isPreventingClicks){event.preventDefault();}};proto._staticClick=function(event,pointer){if(this.isIgnoringMouseUp&&event.type=='mouseup'){return;}
this.staticClick(event,pointer);if(event.type!='mouseup'){this.isIgnoringMouseUp=true;setTimeout(function(){delete this.isIgnoringMouseUp;}.bind(this),400);}};proto.staticClick=function(event,pointer){this.emitEvent('staticClick',[event,pointer]);};Unidragger.getPointerPoint=Unipointer.getPointerPoint;return Unidragger;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/drag',['./flickity','unidragger/unidragger','fizzy-ui-utils/utils'],function(Flickity,Unidragger,utils){return factory(window,Flickity,Unidragger,utils);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('./flickity'),require('unidragger'),require('fizzy-ui-utils'));}else{window.Flickity=factory(window,window.Flickity,window.Unidragger,window.fizzyUIUtils);}}(window,function factory(window,Flickity,Unidragger,utils){utils.extend(Flickity.defaults,{draggable:'>1',dragThreshold:3,});Flickity.createMethods.push('_createDrag');var proto=Flickity.prototype;utils.extend(proto,Unidragger.prototype);proto._touchActionValue='pan-y';var isTouch='createTouch'in document;var isTouchmoveScrollCanceled=false;proto._createDrag=function(){this.on('activate',this.onActivateDrag);this.on('uiChange',this._uiChangeDrag);this.on('deactivate',this.onDeactivateDrag);this.on('cellChange',this.updateDraggable);if(isTouch&&!isTouchmoveScrollCanceled){window.addEventListener('touchmove',function(){});isTouchmoveScrollCanceled=true;}};proto.onActivateDrag=function(){this.handles=[this.viewport];this.bindHandles();this.updateDraggable();};proto.onDeactivateDrag=function(){this.unbindHandles();this.element.classList.remove('is-draggable');};proto.updateDraggable=function(){if(this.options.draggable=='>1'){this.isDraggable=this.slides.length>1;}else{this.isDraggable=this.options.draggable;}
if(this.isDraggable){this.element.classList.add('is-draggable');}else{this.element.classList.remove('is-draggable');}};proto.bindDrag=function(){this.options.draggable=true;this.updateDraggable();};proto.unbindDrag=function(){this.options.draggable=false;this.updateDraggable();};proto._uiChangeDrag=function(){delete this.isFreeScrolling;};proto.pointerDown=function(event,pointer){if(!this.isDraggable){this._pointerDownDefault(event,pointer);return;}
var isOkay=this.okayPointerDown(event);if(!isOkay){return;}
this._pointerDownPreventDefault(event);this.pointerDownFocus(event);if(document.activeElement!=this.element){this.pointerDownBlur();}
this.dragX=this.x;this.viewport.classList.add('is-pointer-down');this.pointerDownScroll=getScrollPosition();window.addEventListener('scroll',this);this._pointerDownDefault(event,pointer);};proto._pointerDownDefault=function(event,pointer){this.pointerDownPointer={pageX:pointer.pageX,pageY:pointer.pageY,};this._bindPostStartEvents(event);this.dispatchEvent('pointerDown',event,[pointer]);};var focusNodes={INPUT:true,TEXTAREA:true,SELECT:true,};proto.pointerDownFocus=function(event){var isFocusNode=focusNodes[event.target.nodeName];if(!isFocusNode){this.focus();}};proto._pointerDownPreventDefault=function(event){var isTouchStart=event.type=='touchstart';var isTouchPointer=event.pointerType=='touch';var isFocusNode=focusNodes[event.target.nodeName];if(!isTouchStart&&!isTouchPointer&&!isFocusNode){event.preventDefault();}};proto.hasDragStarted=function(moveVector){return Math.abs(moveVector.x)>this.options.dragThreshold;};proto.pointerUp=function(event,pointer){delete this.isTouchScrolling;this.viewport.classList.remove('is-pointer-down');this.dispatchEvent('pointerUp',event,[pointer]);this._dragPointerUp(event,pointer);};proto.pointerDone=function(){window.removeEventListener('scroll',this);delete this.pointerDownScroll;};proto.dragStart=function(event,pointer){if(!this.isDraggable){return;}
this.dragStartPosition=this.x;this.startAnimation();window.removeEventListener('scroll',this);this.dispatchEvent('dragStart',event,[pointer]);};proto.pointerMove=function(event,pointer){var moveVector=this._dragPointerMove(event,pointer);this.dispatchEvent('pointerMove',event,[pointer,moveVector]);this._dragMove(event,pointer,moveVector);};proto.dragMove=function(event,pointer,moveVector){if(!this.isDraggable){return;}
event.preventDefault();this.previousDragX=this.dragX;var direction=this.options.rightToLeft?-1:1;if(this.options.wrapAround){moveVector.x=moveVector.x%this.slideableWidth;}
var dragX=this.dragStartPosition+moveVector.x*direction;if(!this.options.wrapAround&&this.slides.length){var originBound=Math.max(-this.slides[0].target,this.dragStartPosition);dragX=dragX>originBound?(dragX+originBound)*0.5:dragX;var endBound=Math.min(-this.getLastSlide().target,this.dragStartPosition);dragX=dragX<endBound?(dragX+endBound)*0.5:dragX;}
this.dragX=dragX;this.dragMoveTime=new Date();this.dispatchEvent('dragMove',event,[pointer,moveVector]);};proto.dragEnd=function(event,pointer){if(!this.isDraggable){return;}
if(this.options.freeScroll){this.isFreeScrolling=true;}
var index=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var restingX=this.getRestingPosition();this.isFreeScrolling=-restingX>this.slides[0].target&&-restingX<this.getLastSlide().target;}else if(!this.options.freeScroll&&index==this.selectedIndex){index+=this.dragEndBoostSelect();}
delete this.previousDragX;this.isDragSelect=this.options.wrapAround;this.select(index);delete this.isDragSelect;this.dispatchEvent('dragEnd',event,[pointer]);};proto.dragEndRestingSelect=function(){var restingX=this.getRestingPosition();var distance=Math.abs(this.getSlideDistance(-restingX,this.selectedIndex));var positiveResting=this._getClosestResting(restingX,distance,1);var negativeResting=this._getClosestResting(restingX,distance,-1);var index=positiveResting.distance<negativeResting.distance?positiveResting.index:negativeResting.index;return index;};proto._getClosestResting=function(restingX,distance,increment){var index=this.selectedIndex;var minDistance=Infinity;var condition=this.options.contain&&!this.options.wrapAround?function(d,md){return d<=md;}:function(d,md){return d<md;};while(condition(distance,minDistance)){index+=increment;minDistance=distance;distance=this.getSlideDistance(-restingX,index);if(distance===null){break;}
distance=Math.abs(distance);}
return{distance:minDistance,index:index-increment};};proto.getSlideDistance=function(x,index){var len=this.slides.length;var isWrapAround=this.options.wrapAround&&len>1;var slideIndex=isWrapAround?utils.modulo(index,len):index;var slide=this.slides[slideIndex];if(!slide){return null;}
var wrap=isWrapAround?this.slideableWidth*Math.floor(index/len):0;return x-(slide.target+wrap);};proto.dragEndBoostSelect=function(){if(this.previousDragX===undefined||!this.dragMoveTime||new Date()-this.dragMoveTime>100){return 0;}
var distance=this.getSlideDistance(-this.dragX,this.selectedIndex);var delta=this.previousDragX-this.dragX;if(distance>0&&delta>0){return 1;}else if(distance<0&&delta<0){return-1;}
return 0;};proto.staticClick=function(event,pointer){var clickedCell=this.getParentCell(event.target);var cellElem=clickedCell&&clickedCell.element;var cellIndex=clickedCell&&this.cells.indexOf(clickedCell);this.dispatchEvent('staticClick',event,[pointer,cellElem,cellIndex]);};proto.onscroll=function(){var scroll=getScrollPosition();var scrollMoveX=this.pointerDownScroll.x-scroll.x;var scrollMoveY=this.pointerDownScroll.y-scroll.y;if(Math.abs(scrollMoveX)>3||Math.abs(scrollMoveY)>3){this._pointerDone();}};function getScrollPosition(){return{x:window.pageXOffset,y:window.pageYOffset};}
return Flickity;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/prev-next-button',['./flickity','unipointer/unipointer','fizzy-ui-utils/utils'],function(Flickity,Unipointer,utils){return factory(window,Flickity,Unipointer,utils);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('./flickity'),require('unipointer'),require('fizzy-ui-utils'));}else{factory(window,window.Flickity,window.Unipointer,window.fizzyUIUtils);}}(window,function factory(window,Flickity,Unipointer,utils){'use strict';var svgURI='http://www.w3.org/2000/svg';function PrevNextButton(direction,parent){this.direction=direction;this.parent=parent;this._create();}
PrevNextButton.prototype=Object.create(Unipointer.prototype);PrevNextButton.prototype._create=function(){this.isEnabled=true;this.isPrevious=this.direction==-1;var leftDirection=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==leftDirection;var element=this.element=document.createElement('button');element.className='flickity-button flickity-prev-next-button';element.className+=this.isPrevious?' previous':' next';element.setAttribute('type','button');this.disable();element.setAttribute('aria-label',this.isPrevious?'Previous':'Next');var svg=this.createSVG();element.appendChild(svg);this.parent.on('select',this.update.bind(this));this.on('pointerDown',this.parent.childUIPointerDown.bind(this.parent));};PrevNextButton.prototype.activate=function(){this.bindStartEvent(this.element);this.element.addEventListener('click',this);this.parent.element.appendChild(this.element);};PrevNextButton.prototype.deactivate=function(){this.parent.element.removeChild(this.element);this.unbindStartEvent(this.element);this.element.removeEventListener('click',this);};PrevNextButton.prototype.createSVG=function(){var svg=document.createElementNS(svgURI,'svg');svg.setAttribute('class','flickity-button-icon');svg.setAttribute('viewBox','0 0 100 100');var path=document.createElementNS(svgURI,'path');var pathMovements=getArrowMovements(this.parent.options.arrowShape);path.setAttribute('d',pathMovements);path.setAttribute('class','arrow');if(!this.isLeft){path.setAttribute('transform','translate(100, 100) rotate(180) ');}
svg.appendChild(path);return svg;};function getArrowMovements(shape){if(typeof shape=='string'){return shape;}
return'M '+shape.x0+',50'+' L '+shape.x1+','+(shape.y1+50)+' L '+shape.x2+','+(shape.y2+50)+' L '+shape.x3+',50 '+' L '+shape.x2+','+(50-shape.y2)+' L '+shape.x1+','+(50-shape.y1)+' Z';}
PrevNextButton.prototype.handleEvent=utils.handleEvent;PrevNextButton.prototype.onclick=function(){if(!this.isEnabled){return;}
this.parent.uiChange();var method=this.isPrevious?'previous':'next';this.parent[method]();};PrevNextButton.prototype.enable=function(){if(this.isEnabled){return;}
this.element.disabled=false;this.isEnabled=true;};PrevNextButton.prototype.disable=function(){if(!this.isEnabled){return;}
this.element.disabled=true;this.isEnabled=false;};PrevNextButton.prototype.update=function(){var slides=this.parent.slides;if(this.parent.options.wrapAround&&slides.length>1){this.enable();return;}
var lastIndex=slides.length?slides.length-1:0;var boundIndex=this.isPrevious?0:lastIndex;var method=this.parent.selectedIndex==boundIndex?'disable':'enable';this[method]();};PrevNextButton.prototype.destroy=function(){this.deactivate();this.allOff();};utils.extend(Flickity.defaults,{prevNextButtons:true,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}});Flickity.createMethods.push('_createPrevNextButtons');var proto=Flickity.prototype;proto._createPrevNextButtons=function(){if(!this.options.prevNextButtons){return;}
this.prevButton=new PrevNextButton(-1,this);this.nextButton=new PrevNextButton(1,this);this.on('activate',this.activatePrevNextButtons);};proto.activatePrevNextButtons=function(){this.prevButton.activate();this.nextButton.activate();this.on('deactivate',this.deactivatePrevNextButtons);};proto.deactivatePrevNextButtons=function(){this.prevButton.deactivate();this.nextButton.deactivate();this.off('deactivate',this.deactivatePrevNextButtons);};Flickity.PrevNextButton=PrevNextButton;return Flickity;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/page-dots',['./flickity','unipointer/unipointer','fizzy-ui-utils/utils'],function(Flickity,Unipointer,utils){return factory(window,Flickity,Unipointer,utils);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('./flickity'),require('unipointer'),require('fizzy-ui-utils'));}else{factory(window,window.Flickity,window.Unipointer,window.fizzyUIUtils);}}(window,function factory(window,Flickity,Unipointer,utils){function PageDots(parent){this.parent=parent;this._create();}
PageDots.prototype=Object.create(Unipointer.prototype);PageDots.prototype._create=function(){this.holder=document.createElement('ol');this.holder.className='flickity-page-dots';this.dots=[];this.handleClick=this.onClick.bind(this);this.on('pointerDown',this.parent.childUIPointerDown.bind(this.parent));};PageDots.prototype.activate=function(){this.setDots();this.holder.addEventListener('click',this.handleClick);this.bindStartEvent(this.holder);this.parent.element.appendChild(this.holder);};PageDots.prototype.deactivate=function(){this.holder.removeEventListener('click',this.handleClick);this.unbindStartEvent(this.holder);this.parent.element.removeChild(this.holder);};PageDots.prototype.setDots=function(){var delta=this.parent.slides.length-this.dots.length;if(delta>0){this.addDots(delta);}else if(delta<0){this.removeDots(-delta);}};PageDots.prototype.addDots=function(count){var fragment=document.createDocumentFragment();var newDots=[];var length=this.dots.length;var max=length+count;for(var i=length;i<max;i++){var dot=document.createElement('li');dot.className='dot';dot.setAttribute('aria-label','Page dot '+(i+1));fragment.appendChild(dot);newDots.push(dot);}
this.holder.appendChild(fragment);this.dots=this.dots.concat(newDots);};PageDots.prototype.removeDots=function(count){var removeDots=this.dots.splice(this.dots.length-count,count);removeDots.forEach(function(dot){this.holder.removeChild(dot);},this);};PageDots.prototype.updateSelected=function(){if(this.selectedDot){this.selectedDot.className='dot';this.selectedDot.removeAttribute('aria-current');}
if(!this.dots.length){return;}
this.selectedDot=this.dots[this.parent.selectedIndex];this.selectedDot.className='dot is-selected';this.selectedDot.setAttribute('aria-current','step');};PageDots.prototype.onTap=PageDots.prototype.onClick=function(event){var target=event.target;if(target.nodeName!='LI'){return;}
this.parent.uiChange();var index=this.dots.indexOf(target);this.parent.select(index);};PageDots.prototype.destroy=function(){this.deactivate();this.allOff();};Flickity.PageDots=PageDots;utils.extend(Flickity.defaults,{pageDots:true});Flickity.createMethods.push('_createPageDots');var proto=Flickity.prototype;proto._createPageDots=function(){if(!this.options.pageDots){return;}
this.pageDots=new PageDots(this);this.on('activate',this.activatePageDots);this.on('select',this.updateSelectedPageDots);this.on('cellChange',this.updatePageDots);this.on('resize',this.updatePageDots);this.on('deactivate',this.deactivatePageDots);};proto.activatePageDots=function(){this.pageDots.activate();};proto.updateSelectedPageDots=function(){this.pageDots.updateSelected();};proto.updatePageDots=function(){this.pageDots.setDots();};proto.deactivatePageDots=function(){this.pageDots.deactivate();};Flickity.PageDots=PageDots;return Flickity;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/player',['ev-emitter/ev-emitter','fizzy-ui-utils/utils','./flickity'],function(EvEmitter,utils,Flickity){return factory(EvEmitter,utils,Flickity);});}else if(typeof module=='object'&&module.exports){module.exports=factory(require('ev-emitter'),require('fizzy-ui-utils'),require('./flickity'));}else{factory(window.EvEmitter,window.fizzyUIUtils,window.Flickity);}}(window,function factory(EvEmitter,utils,Flickity){function Player(parent){this.parent=parent;this.state='stopped';this.onVisibilityChange=this.visibilityChange.bind(this);this.onVisibilityPlay=this.visibilityPlay.bind(this);}
Player.prototype=Object.create(EvEmitter.prototype);Player.prototype.play=function(){if(this.state=='playing'){return;}
var isPageHidden=document.hidden;if(isPageHidden){document.addEventListener('visibilitychange',this.onVisibilityPlay);return;}
this.state='playing';document.addEventListener('visibilitychange',this.onVisibilityChange);this.tick();};Player.prototype.tick=function(){if(this.state!='playing'){return;}
var time=this.parent.options.autoPlay;time=typeof time=='number'?time:3000;var _this=this;this.clear();this.timeout=setTimeout(function(){_this.parent.next(true);_this.tick();},time);};Player.prototype.stop=function(){this.state='stopped';this.clear();document.removeEventListener('visibilitychange',this.onVisibilityChange);};Player.prototype.clear=function(){clearTimeout(this.timeout);};Player.prototype.pause=function(){if(this.state=='playing'){this.state='paused';this.clear();}};Player.prototype.unpause=function(){if(this.state=='paused'){this.play();}};Player.prototype.visibilityChange=function(){var isPageHidden=document.hidden;this[isPageHidden?'pause':'unpause']();};Player.prototype.visibilityPlay=function(){this.play();document.removeEventListener('visibilitychange',this.onVisibilityPlay);};utils.extend(Flickity.defaults,{pauseAutoPlayOnHover:true});Flickity.createMethods.push('_createPlayer');var proto=Flickity.prototype;proto._createPlayer=function(){this.player=new Player(this);this.on('activate',this.activatePlayer);this.on('uiChange',this.stopPlayer);this.on('pointerDown',this.stopPlayer);this.on('deactivate',this.deactivatePlayer);};proto.activatePlayer=function(){if(!this.options.autoPlay){return;}
this.player.play();this.element.addEventListener('mouseenter',this);};proto.playPlayer=function(){this.player.play();};proto.stopPlayer=function(){this.player.stop();};proto.pausePlayer=function(){this.player.pause();};proto.unpausePlayer=function(){this.player.unpause();};proto.deactivatePlayer=function(){this.player.stop();this.element.removeEventListener('mouseenter',this);};proto.onmouseenter=function(){if(!this.options.pauseAutoPlayOnHover){return;}
this.player.pause();this.element.addEventListener('mouseleave',this);};proto.onmouseleave=function(){this.player.unpause();this.element.removeEventListener('mouseleave',this);};Flickity.Player=Player;return Flickity;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/add-remove-cell',['./flickity','fizzy-ui-utils/utils'],function(Flickity,utils){return factory(window,Flickity,utils);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('./flickity'),require('fizzy-ui-utils'));}else{factory(window,window.Flickity,window.fizzyUIUtils);}}(window,function factory(window,Flickity,utils){function getCellsFragment(cells){var fragment=document.createDocumentFragment();cells.forEach(function(cell){fragment.appendChild(cell.element);});return fragment;}
var proto=Flickity.prototype;proto.insert=function(elems,index){var cells=this._makeCells(elems);if(!cells||!cells.length){return;}
var len=this.cells.length;index=index===undefined?len:index;var fragment=getCellsFragment(cells);var isAppend=index==len;if(isAppend){this.slider.appendChild(fragment);}else{var insertCellElement=this.cells[index].element;this.slider.insertBefore(fragment,insertCellElement);}
if(index===0){this.cells=cells.concat(this.cells);}else if(isAppend){this.cells=this.cells.concat(cells);}else{var endCells=this.cells.splice(index,len-index);this.cells=this.cells.concat(cells).concat(endCells);}
this._sizeCells(cells);this.cellChange(index,true);};proto.append=function(elems){this.insert(elems,this.cells.length);};proto.prepend=function(elems){this.insert(elems,0);};proto.remove=function(elems){var cells=this.getCells(elems);if(!cells||!cells.length){return;}
var minCellIndex=this.cells.length-1;cells.forEach(function(cell){cell.remove();var index=this.cells.indexOf(cell);minCellIndex=Math.min(index,minCellIndex);utils.removeFrom(this.cells,cell);},this);this.cellChange(minCellIndex,true);};proto.cellSizeChange=function(elem){var cell=this.getCell(elem);if(!cell){return;}
cell.getSize();var index=this.cells.indexOf(cell);this.cellChange(index);};proto.cellChange=function(changedCellIndex,isPositioningSlider){var prevSelectedElem=this.selectedElement;this._positionCells(changedCellIndex);this._getWrapShiftCells();this.setGallerySize();var cell=this.getCell(prevSelectedElem);if(cell){this.selectedIndex=this.getCellSlideIndex(cell);}
this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex);this.emitEvent('cellChange',[changedCellIndex]);this.select(this.selectedIndex);if(isPositioningSlider){this.positionSliderAtSelected();}};return Flickity;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/lazyload',['./flickity','fizzy-ui-utils/utils'],function(Flickity,utils){return factory(window,Flickity,utils);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('./flickity'),require('fizzy-ui-utils'));}else{factory(window,window.Flickity,window.fizzyUIUtils);}}(window,function factory(window,Flickity,utils){'use strict';Flickity.createMethods.push('_createLazyload');var proto=Flickity.prototype;proto._createLazyload=function(){this.on('select',this.lazyLoad);};proto.lazyLoad=function(){var lazyLoad=this.options.lazyLoad;if(!lazyLoad){return;}
var adjCount=typeof lazyLoad=='number'?lazyLoad:0;var cellElems=this.getAdjacentCellElements(adjCount);var lazyImages=[];cellElems.forEach(function(cellElem){var lazyCellImages=getCellLazyImages(cellElem);lazyImages=lazyImages.concat(lazyCellImages);});lazyImages.forEach(function(img){new LazyLoader(img,this);},this);};function getCellLazyImages(cellElem){if(cellElem.nodeName=='IMG'){var lazyloadAttr=cellElem.getAttribute('data-flickity-lazyload');var srcAttr=cellElem.getAttribute('data-flickity-lazyload-src');var srcsetAttr=cellElem.getAttribute('data-flickity-lazyload-srcset');if(lazyloadAttr||srcAttr||srcsetAttr){return[cellElem];}}
var lazySelector='img[data-flickity-lazyload], '+'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';var imgs=cellElem.querySelectorAll(lazySelector);return utils.makeArray(imgs);}
function LazyLoader(img,flickity){this.img=img;this.flickity=flickity;this.load();}
LazyLoader.prototype.handleEvent=utils.handleEvent;LazyLoader.prototype.load=function(){this.img.addEventListener('load',this);this.img.addEventListener('error',this);var src=this.img.getAttribute('data-flickity-lazyload')||this.img.getAttribute('data-flickity-lazyload-src');var srcset=this.img.getAttribute('data-flickity-lazyload-srcset');this.img.src=src;if(srcset){this.img.setAttribute('srcset',srcset);}
this.img.removeAttribute('data-flickity-lazyload');this.img.removeAttribute('data-flickity-lazyload-src');this.img.removeAttribute('data-flickity-lazyload-srcset');};LazyLoader.prototype.onload=function(event){this.complete(event,'flickity-lazyloaded');};LazyLoader.prototype.onerror=function(event){this.complete(event,'flickity-lazyerror');};LazyLoader.prototype.complete=function(event,className){this.img.removeEventListener('load',this);this.img.removeEventListener('error',this);var cell=this.flickity.getParentCell(this.img);var cellElem=cell&&cell.element;this.flickity.cellSizeChange(cellElem);this.img.classList.add(className);this.flickity.dispatchEvent('lazyLoad',event,cellElem);};Flickity.LazyLoader=LazyLoader;return Flickity;}));(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity/js/index',['./flickity','./drag','./prev-next-button','./page-dots','./player','./add-remove-cell','./lazyload'],factory);}else if(typeof module=='object'&&module.exports){module.exports=factory(require('./flickity'),require('./drag'),require('./prev-next-button'),require('./page-dots'),require('./player'),require('./add-remove-cell'),require('./lazyload'));}})(window,function factory(Flickity){return Flickity;});(function(window,factory){if(typeof define=='function'&&define.amd){define('flickity-as-nav-for/as-nav-for',['flickity/js/index','fizzy-ui-utils/utils'],factory);}else if(typeof module=='object'&&module.exports){module.exports=factory(require('flickity'),require('fizzy-ui-utils'));}else{window.Flickity=factory(window.Flickity,window.fizzyUIUtils);}}(window,function factory(Flickity,utils){Flickity.createMethods.push('_createAsNavFor');var proto=Flickity.prototype;proto._createAsNavFor=function(){this.on('activate',this.activateAsNavFor);this.on('deactivate',this.deactivateAsNavFor);this.on('destroy',this.destroyAsNavFor);var asNavForOption=this.options.asNavFor;if(!asNavForOption){return;}
var _this=this;setTimeout(function initNavCompanion(){_this.setNavCompanion(asNavForOption);});};proto.setNavCompanion=function(elem){elem=utils.getQueryElement(elem);var companion=Flickity.data(elem);if(!companion||companion==this){return;}
this.navCompanion=companion;var _this=this;this.onNavCompanionSelect=function(){_this.navCompanionSelect();};companion.on('select',this.onNavCompanionSelect);this.on('staticClick',this.onNavStaticClick);this.navCompanionSelect(true);};proto.navCompanionSelect=function(isInstant){var companionCells=this.navCompanion&&this.navCompanion.selectedCells;if(!companionCells){return;}
var selectedCell=companionCells[0];var firstIndex=this.navCompanion.cells.indexOf(selectedCell);var lastIndex=firstIndex+companionCells.length-1;var selectIndex=Math.floor(lerp(firstIndex,lastIndex,this.navCompanion.cellAlign));this.selectCell(selectIndex,false,isInstant);this.removeNavSelectedElements();if(selectIndex>=this.cells.length){return;}
var selectedCells=this.cells.slice(firstIndex,lastIndex+1);this.navSelectedElements=selectedCells.map(function(cell){return cell.element;});this.changeNavSelectedClass('add');};function lerp(a,b,t){return(b-a)*t+a;}
proto.changeNavSelectedClass=function(method){this.navSelectedElements.forEach(function(navElem){navElem.classList[method]('is-nav-selected');});};proto.activateAsNavFor=function(){this.navCompanionSelect(true);};proto.removeNavSelectedElements=function(){if(!this.navSelectedElements){return;}
this.changeNavSelectedClass('remove');delete this.navSelectedElements;};proto.onNavStaticClick=function(event,pointer,cellElement,cellIndex){if(typeof cellIndex=='number'){this.navCompanion.selectCell(cellIndex);}};proto.deactivateAsNavFor=function(){this.removeNavSelectedElements();};proto.destroyAsNavFor=function(){if(!this.navCompanion){return;}
this.navCompanion.off('select',this.onNavCompanionSelect);this.off('staticClick',this.onNavStaticClick);delete this.navCompanion;};return Flickity;}));(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define('imagesloaded/imagesloaded',['ev-emitter/ev-emitter'],function(EvEmitter){return factory(window,EvEmitter);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('ev-emitter'));}else{window.imagesLoaded=factory(window,window.EvEmitter);}})(typeof window!=='undefined'?window:this,function factory(window,EvEmitter){var $=window.jQuery;var console=window.console;function extend(a,b){for(var prop in b){a[prop]=b[prop];}
return a;}
var arraySlice=Array.prototype.slice;function makeArray(obj){if(Array.isArray(obj)){return obj;}
var isArrayLike=typeof obj=='object'&&typeof obj.length=='number';if(isArrayLike){return arraySlice.call(obj);}
return[obj];}
function ImagesLoaded(elem,options,onAlways){if(!(this instanceof ImagesLoaded)){return new ImagesLoaded(elem,options,onAlways);}
var queryElem=elem;if(typeof elem=='string'){queryElem=document.querySelectorAll(elem);}
if(!queryElem){console.error('Bad element for imagesLoaded '+(queryElem||elem));return;}
this.elements=makeArray(queryElem);this.options=extend({},this.options);if(typeof options=='function'){onAlways=options;}else{extend(this.options,options);}
if(onAlways){this.on('always',onAlways);}
this.getImages();if($){this.jqDeferred=new $.Deferred();}
setTimeout(this.check.bind(this));}
ImagesLoaded.prototype=Object.create(EvEmitter.prototype);ImagesLoaded.prototype.options={};ImagesLoaded.prototype.getImages=function(){this.images=[];this.elements.forEach(this.addElementImages,this);};ImagesLoaded.prototype.addElementImages=function(elem){if(elem.nodeName=='IMG'){this.addImage(elem);}
if(this.options.background===true){this.addElementBackgroundImages(elem);}
var nodeType=elem.nodeType;if(!nodeType||!elementNodeTypes[nodeType]){return;}
var childImgs=elem.querySelectorAll('img');for(var i=0;i<childImgs.length;i++){var img=childImgs[i];this.addImage(img);}
if(typeof this.options.background=='string'){var children=elem.querySelectorAll(this.options.background);for(i=0;i<children.length;i++){var child=children[i];this.addElementBackgroundImages(child);}}};var elementNodeTypes={1:true,9:true,11:true};ImagesLoaded.prototype.addElementBackgroundImages=function(elem){var style=getComputedStyle(elem);if(!style){return;}
var reURL=/url\((['"])?(.*?)\1\)/gi;var matches=reURL.exec(style.backgroundImage);while(matches!==null){var url=matches&&matches[2];if(url){this.addBackground(url,elem);}
matches=reURL.exec(style.backgroundImage);}};ImagesLoaded.prototype.addImage=function(img){var loadingImage=new LoadingImage(img);this.images.push(loadingImage);};ImagesLoaded.prototype.addBackground=function(url,elem){var background=new Background(url,elem);this.images.push(background);};ImagesLoaded.prototype.check=function(){var _this=this;this.progressedCount=0;this.hasAnyBroken=false;if(!this.images.length){this.complete();return;}
function onProgress(image,elem,message){setTimeout(function(){_this.progress(image,elem,message);});}
this.images.forEach(function(loadingImage){loadingImage.once('progress',onProgress);loadingImage.check();});};ImagesLoaded.prototype.progress=function(image,elem,message){this.progressedCount++;this.hasAnyBroken=this.hasAnyBroken||!image.isLoaded;this.emitEvent('progress',[this,image,elem]);if(this.jqDeferred&&this.jqDeferred.notify){this.jqDeferred.notify(this,image);}
if(this.progressedCount==this.images.length){this.complete();}
if(this.options.debug&&console){console.log('progress: '+message,image,elem);}};ImagesLoaded.prototype.complete=function(){var eventName=this.hasAnyBroken?'fail':'done';this.isComplete=true;this.emitEvent(eventName,[this]);this.emitEvent('always',[this]);if(this.jqDeferred){var jqMethod=this.hasAnyBroken?'reject':'resolve';this.jqDeferred[jqMethod](this);}};function LoadingImage(img){this.img=img;}
LoadingImage.prototype=Object.create(EvEmitter.prototype);LoadingImage.prototype.check=function(){var isComplete=this.getIsImageComplete();if(isComplete){this.confirm(this.img.naturalWidth!==0,'naturalWidth');return;}
this.proxyImage=new Image();this.proxyImage.addEventListener('load',this);this.proxyImage.addEventListener('error',this);this.img.addEventListener('load',this);this.img.addEventListener('error',this);this.proxyImage.src=this.img.src;};LoadingImage.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth;};LoadingImage.prototype.confirm=function(isLoaded,message){this.isLoaded=isLoaded;this.emitEvent('progress',[this,this.img,message]);};LoadingImage.prototype.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};LoadingImage.prototype.onload=function(){this.confirm(true,'onload');this.unbindEvents();};LoadingImage.prototype.onerror=function(){this.confirm(false,'onerror');this.unbindEvents();};LoadingImage.prototype.unbindEvents=function(){this.proxyImage.removeEventListener('load',this);this.proxyImage.removeEventListener('error',this);this.img.removeEventListener('load',this);this.img.removeEventListener('error',this);};function Background(url,element){this.url=url;this.element=element;this.img=new Image();}
Background.prototype=Object.create(LoadingImage.prototype);Background.prototype.check=function(){this.img.addEventListener('load',this);this.img.addEventListener('error',this);this.img.src=this.url;var isComplete=this.getIsImageComplete();if(isComplete){this.confirm(this.img.naturalWidth!==0,'naturalWidth');this.unbindEvents();}};Background.prototype.unbindEvents=function(){this.img.removeEventListener('load',this);this.img.removeEventListener('error',this);};Background.prototype.confirm=function(isLoaded,message){this.isLoaded=isLoaded;this.emitEvent('progress',[this,this.element,message]);};ImagesLoaded.makeJQueryPlugin=function(jQuery){jQuery=jQuery||window.jQuery;if(!jQuery){return;}
$=jQuery;$.fn.imagesLoaded=function(options,callback){var instance=new ImagesLoaded(this,options,callback);return instance.jqDeferred.promise($(this));};};ImagesLoaded.makeJQueryPlugin();return ImagesLoaded;});(function(window,factory){if(typeof define=='function'&&define.amd){define(['flickity/js/index','imagesloaded/imagesloaded'],function(Flickity,imagesLoaded){return factory(window,Flickity,imagesLoaded);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('flickity'),require('imagesloaded'));}else{window.Flickity=factory(window,window.Flickity,window.imagesLoaded);}}(window,function factory(window,Flickity,imagesLoaded){'use strict';Flickity.createMethods.push('_createImagesLoaded');var proto=Flickity.prototype;proto._createImagesLoaded=function(){this.on('activate',this.imagesLoaded);};proto.imagesLoaded=function(){if(!this.options.imagesLoaded){return;}
var _this=this;function onImagesLoadedProgress(instance,image){var cell=_this.getParentCell(image.img);_this.cellSizeChange(cell&&cell.element);if(!_this.options.freeScroll){_this.positionSliderAtSelected();}}
imagesLoaded(this.slider).on('progress',onImagesLoadedProgress);};return Flickity;}));
//-------------fin flickity.pkgd.js
//custom.js
$(document).ready(function(){var a=$("[data-toggle=collapse-side]"),b=a.attr("data-target"),c=a.attr("data-target-2");a.click(function(a){$(b).toggleClass("in"),$(c).toggleClass("out")})});
/*! lazysizes - v5.2.2 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
//fin custom.js
(function (root, factory) {
if (typeof define==='function' && define.amd) {
define(factory);} else if (typeof exports==='object') {
module.exports=factory();
} else {root.PhotoSwipe=factory();
}})(this, function () {
'use strict';
var PhotoSwipe=function(template, UiClass, items, options){
var framework={
features: null,
bind: function(target, type, listener, unbind) {
var methodName=(unbind ? 'remove' : 'add')+'EventListener';
type=type.split(' ');for(var i=0; i < type.length; i++) {
if(type[i]) {
target[methodName]( type[i], listener, false);
}}},
isArray: function(obj) {
return (obj instanceof Array);
},
createEl: function(classes, tag) {
var el=document.createElement(tag || 'div');
if(classes) {el.className=classes;}
return el;},getScrollY: function() {var yOffset=window.pageYOffset;
return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
},unbind: function(target, type, listener) {framework.bind(target,type,listener,true);
},removeClass: function(el, className) {var reg=new RegExp('(\\s|^)'+className+'(\\s|$)');
el.className=el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
},addClass: function(el, className) {
if( !framework.hasClass(el,className) ) {
el.className+=(el.className ? ' ' : '')+className;
}},hasClass: function(el, className) {
return el.className && new RegExp('(^|\\s)'+className+'(\\s|$)').test(el.className);
},getChildByClass: function(parentEl, childClassName) {
var node=parentEl.firstChild;
while(node) {
if( framework.hasClass(node, childClassName) ) {
return node;
}node=node.nextSibling;}},
arraySearch: function(array, value, key) {
var i=array.length;
while(i--) {
if(array[i][key]===value) {
return i;}}
return -1;},
extend: function(o1, o2, preventOverwrite) {
for (var prop in o2) {
if (o2.hasOwnProperty(prop)) {
if(preventOverwrite && o1.hasOwnProperty(prop)) {
continue;
}o1[prop]=o2[prop];
}}},easing: {
sine: {
out: function(k) {
return Math.sin(k * (Math.PI / 2));
},
inOut: function(k) {
return - (Math.cos(Math.PI * k) - 1) / 2;
}},cubic: {
out: function(k) {
return --k * k * k+1;
}}},detectFeatures: function() {
if(framework.features) {return framework.features;}var helperEl=framework.createEl(),
helperStyle=helperEl.style,
vendor='',
features={};
features.oldIE=document.all && !document.addEventListener;
features.touch='ontouchstart' in window;
if(window.requestAnimationFrame) {
features.raf=window.requestAnimationFrame;
features.caf=window.cancelAnimationFrame;
}
features.pointerEvent=!!(window.PointerEvent) || navigator.msPointerEnabled;
if(!features.pointerEvent) {
var ua=navigator.userAgent;
if (/iP(hone|od)/.test(navigator.platform)) {
var v=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
if(v && v.length > 0) {
v=parseInt(v[1], 10);
if(v >= 1 && v < 8 ) {
features.isOldIOSPhone=true;
}}}
var match=ua.match(/Android\s([0-9\.]*)/);
var androidversion= match ? match[1] : 0;
androidversion=parseFloat(androidversion);
if(androidversion >= 1 ) {
if(androidversion < 4.4) {features.isOldAndroid=true;}features.androidVersion=androidversion;
}features.isMobileOpera=/opera mini|opera mobi/i.test(ua);
}
var styleChecks=['transform', 'perspective', 'animationName'],
vendors=['', 'webkit','Moz','ms','O'],
styleCheckItem,
styleName;
for(var i=0; i < 4; i++) {
vendor=vendors[i];
for(var a=0; a < 3; a++) {
styleCheckItem=styleChecks[a];
styleName=vendor+(vendor ?
styleCheckItem.charAt(0).toUpperCase()+styleCheckItem.slice(1) :
styleCheckItem);
if(!features[styleCheckItem] && styleName in helperStyle ) {
features[styleCheckItem]=styleName;
}}
if(vendor && !features.raf) {
vendor=vendor.toLowerCase();
features.raf=window[vendor+'RequestAnimationFrame'];
if(features.raf) {
features.caf=window[vendor+'CancelAnimationFrame'] ||
window[vendor+'CancelRequestAnimationFrame'];
}}}
if(!features.raf) {
var lastTime=0;
features.raf=function(fn) {
var currTime=new Date().getTime();
var timeToCall=Math.max(0, 16 - (currTime - lastTime));
var id=window.setTimeout(function() { fn(currTime+timeToCall); }, timeToCall);
lastTime=currTime+timeToCall;
return id;
};
features.caf=function(id) { clearTimeout(id); };
}
features.svg=!!document.createElementNS &&
!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
framework.features=features;
return features;
}};
framework.detectFeatures();
if(framework.features.oldIE) {
framework.bind=function(target, type, listener, unbind) {
type=type.split(' ');
var methodName=(unbind ? 'detach' : 'attach')+'Event',
evName,
_handleEv=function() {
listener.handleEvent.call(listener);
};
for(var i=0; i < type.length; i++) {
evName=type[i];
if(evName) {if(typeof listener==='object' && listener.handleEvent) {
if(!unbind) {
listener['oldIE'+evName]=_handleEv;
} else {
if(!listener['oldIE'+evName]) {return false;}}
target[methodName]( 'on'+evName, listener['oldIE'+evName]);
} else {
target[methodName]( 'on'+evName, listener);
}}}};}
var self=this;
var DOUBLE_TAP_RADIUS=25,
NUM_HOLDERS=3;
var _options={
allowPanToNext:true,
spacing: 0.12,
bgOpacity: 1,
mouseUsed: false,
loop: true,
pinchToClose: true,
closeOnScroll: true,
closeOnVerticalDrag: true,
verticalDragRange: 0.75,
hideAnimationDuration: 333,
showAnimationDuration: 333,
showHideOpacity: false,
focus: true,
escKey: true,
arrowKeys: true,
mainScrollEndFriction: 0.35,
panEndFriction: 0.35,
isClickableElement: function(el) {
return el.tagName==='A';},getDoubleTapZoom: function(isMouseClick, item) {
if(isMouseClick) {return 1;} else {return item.initialZoomLevel < 0.7 ? 1 : 1.33;}},
maxSpreadZoom: 1.33,
modal: true,
scaleMode: 'fit'
};
framework.extend(_options, options);
var _getEmptyPoint=function() {
return {x:0,y:0};
};
var _isOpen,_isDestroying,_closedByScroll,_currentItemIndex,_containerStyle,_containerShiftIndex,_currPanDist=_getEmptyPoint(),_startPanOffset=_getEmptyPoint(),_panOffset=_getEmptyPoint(),_upMoveEvents,_downEvents,_globalEventHandlers,_viewportSize={},_currZoomLevel,_startZoomLevel,_translatePrefix,_translateSufix,_updateSizeInterval,_itemsNeedUpdate,_currPositionIndex=0,_offset={},_slideSize=_getEmptyPoint(),_itemHolders,_prevItemIndex,_indexDiff=0,_dragStartEvent,_dragMoveEvent,_dragEndEvent,_dragCancelEvent,_transformKey,_pointerEventEnabled,_isFixedPosition=true,_likelyTouchDevice,_modules=[],_requestAF,_cancelAF,_initalClassName,_initalWindowScrollY,_oldIE,_currentWindowScrollY,
_features,_windowVisibleSize={},_renderMaxResolution=false,_orientationChangeTimeout,_registerModule=function(name, module) {framework.extend(self, module.publicMethods);_modules.push(name);},
_getLoopedId=function(index) {
var numSlides=_getNumItems();
if(index > numSlides - 1) {return index - numSlides;} else  if(index < 0) {return numSlides+index;}return index;},
_listeners={},_listen=function(name, fn) {if(!_listeners[name]) {_listeners[name]=[];}return _listeners[name].push(fn);
},_shout=function(name) {var listeners=_listeners[name];if(listeners) {var args=Array.prototype.slice.call(arguments);args.shift();
for(var i=0; i < listeners.length; i++) {listeners[i].apply(self, args);}}},
_getCurrentTime=function() {return new Date().getTime();},
_applyBgOpacity=function(opacity) {
_bgOpacity=opacity;
self.bg.style.opacity=opacity * _options.bgOpacity;
},
_applyZoomTransform=function(styleObj,x,y,zoom,item) {
if(!_renderMaxResolution || (item && item !== self.currItem) ) {
zoom=zoom / (item ? item.fitRatio : self.currItem.fitRatio);
}

styleObj[_transformKey]=_translatePrefix+x+'px, '+y+'px'+_translateSufix+' scale('+zoom+')';
},
_applyCurrentZoomPan=function( allowRenderResolution ) {
if(_currZoomElementStyle) {
if(allowRenderResolution) {
if(_currZoomLevel > self.currItem.fitRatio) {
if(!_renderMaxResolution) {
_setImageSize(self.currItem, false, true);
_renderMaxResolution=true;
}
} else {
if(_renderMaxResolution) {
_setImageSize(self.currItem);
_renderMaxResolution=false;
}}}_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
}},_applyZoomPanToItem=function(item) {
if(item.container) {
_applyZoomTransform(item.container.style,
item.initialPosition.x,item.initialPosition.y,item.initialZoomLevel,item);
}},_setTranslateX=function(x, elStyle) {
elStyle[_transformKey]=_translatePrefix+x+'px, 0px'+_translateSufix;
},
_moveMainScroll=function(x, dragging) {
if(!_options.loop && dragging) {
var newSlideIndexOffset=_currentItemIndex+(_slideSize.x * _currPositionIndex - x) / _slideSize.x,
delta=Math.round(x - _mainScrollPos.x);
if( (newSlideIndexOffset < 0 && delta > 0) ||
(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
x=_mainScrollPos.x+delta * _options.mainScrollEndFriction;
}}_mainScrollPos.x=x;
_setTranslateX(x, _containerStyle);
},
_calculatePanOffset=function(axis, zoomLevel) {
var m=_midZoomPoint[axis] - _offset[axis];
return _startPanOffset[axis]+_currPanDist[axis]+m - m * ( zoomLevel / _startZoomLevel );
},
_equalizePoints=function(p1, p2) {
p1.x=p2.x;p1.y=p2.y;if(p2.id) {
p1.id=p2.id;}},_roundPoint=function(p) {
p.x=Math.round(p.x);p.y=Math.round(p.y);},
_mouseMoveTimeout=null,
_onFirstMouseMove=function() {
if(_mouseMoveTimeout ) {
framework.unbind(document, 'mousemove', _onFirstMouseMove);
framework.addClass(template, 'pswp--has_mouse');
_options.mouseUsed=true;
_shout('mouseUsed');
}
_mouseMoveTimeout=setTimeout(function() {
_mouseMoveTimeout=null;
}, 100);
},
_bindEvents=function() {
framework.bind(document, 'keydown', self);
if(_features.transform) {
framework.bind(self.scrollWrap, 'click', self);
}
if(!_options.mouseUsed) {
framework.bind(document, 'mousemove', _onFirstMouseMove);
}
framework.bind(window, 'resize scroll orientationchange', self);
_shout('bindEvents');
},
_unbindEvents=function() {
framework.unbind(window, 'resize scroll orientationchange', self);
framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
framework.unbind(document, 'keydown', self);
framework.unbind(document, 'mousemove', _onFirstMouseMove);
if(_features.transform) {
framework.unbind(self.scrollWrap, 'click', self);
}
if(_isDragging) {
framework.unbind(window, _upMoveEvents, self);
}
clearTimeout(_orientationChangeTimeout);
_shout('unbindEvents');
},
_calculatePanBounds=function(zoomLevel, update) {
var bounds=_calculateItemSize( self.currItem, _viewportSize, zoomLevel );
if(update) {
_currPanBounds=bounds;
}
return bounds;
},
_getMinZoomLevel=function(item) {
if(!item) {
item=self.currItem;
}
return item.initialZoomLevel;
},
_getMaxZoomLevel=function(item) {
if(!item) {
item=self.currItem;
}
return item.w > 0 ? _options.maxSpreadZoom : 1;
},
_modifyDestPanOffset=function(axis, destPanBounds, destPanOffset, destZoomLevel) {
if(destZoomLevel===self.currItem.initialZoomLevel) {
destPanOffset[axis]=self.currItem.initialPosition[axis];
return true;
} else {
destPanOffset[axis]=_calculatePanOffset(axis, destZoomLevel);

if(destPanOffset[axis] > destPanBounds.min[axis]) {
destPanOffset[axis]=destPanBounds.min[axis];
return true;
} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
destPanOffset[axis]=destPanBounds.max[axis];
return true;
}
}
return false;
},
_setupTransforms=function() {
if(_transformKey) {
var allow3dTransform=_features.perspective && !_likelyTouchDevice;
_translatePrefix='translate'+(allow3dTransform ? '3d(' : '(');
_translateSufix=_features.perspective ? ', 0px)' : ')';
return;
}
_transformKey='left';
framework.addClass(template, 'pswp--ie');
_setTranslateX=function(x, elStyle) {
elStyle.left=x+'px';
};
_applyZoomPanToItem=function(item) {
var zoomRatio=item.fitRatio > 1 ? 1 : item.fitRatio,
s=item.container.style,
w=zoomRatio * item.w,
h=zoomRatio * item.h;
s.width=w+'px';
s.height=h+'px';
s.left=item.initialPosition.x+'px';
s.top=item.initialPosition.y+'px';
};
_applyCurrentZoomPan=function() {
if(_currZoomElementStyle) {
var s=_currZoomElementStyle,
item=self.currItem,
zoomRatio=item.fitRatio > 1 ? 1 : item.fitRatio,
w=zoomRatio * item.w,
h=zoomRatio * item.h;
s.width=w+'px';
s.height=h+'px';
s.left=_panOffset.x+'px';
s.top=_panOffset.y+'px';
}
};
},
_onKeyDown=function(e) {
var keydownAction='';
if(_options.escKey && e.keyCode===27) {
keydownAction='close';
} else if(_options.arrowKeys) {
if(e.keyCode===37) {
keydownAction='prev';
} else if(e.keyCode===39) {
keydownAction='next';
}
}
if(keydownAction) {
if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
if(e.preventDefault) {
e.preventDefault();
} else {
e.returnValue=false;
}
self[keydownAction]();
}
}
},
_onGlobalClick=function(e) {
if(!e) {return;}
if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
e.preventDefault();
e.stopPropagation();
}
},
_updatePageScrollOffset=function() {
self.setScrollOffset(0, framework.getScrollY());
};
var _animations={},
_numAnimations=0,
_stopAnimation=function(name) {
if(_animations[name]) {
if(_animations[name].raf) {
_cancelAF( _animations[name].raf );
}
_numAnimations--;
delete _animations[name];
}
},
_registerStartAnimation=function(name) {
if(_animations[name]) {
_stopAnimation(name);
}
if(!_animations[name]) {
_numAnimations++;
_animations[name]={};
}
},
_stopAllAnimations=function() {
for (var prop in _animations) {
if( _animations.hasOwnProperty( prop ) ) {_stopAnimation(prop);}
}
},
_animateProp=function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
var startAnimTime=_getCurrentTime(), t;
_registerStartAnimation(name);

var animloop=function(){
if ( _animations[name] ) {
t=_getCurrentTime() - startAnimTime;
if ( t >= d ) {
_stopAnimation(name);
onUpdate(endProp);
if(onComplete) {
onComplete();
}
return;
}
onUpdate( (endProp - b) * easingFn(t/d)+b );
_animations[name].raf=_requestAF(animloop);
}
};
animloop();
};
var publicMethods={
shout: _shout,
listen: _listen,
viewportSize: _viewportSize,
options: _options,
isMainScrollAnimating: function() {return _mainScrollAnimating;},
getZoomLevel: function() {return _currZoomLevel;},
getCurrentIndex: function() {return _currentItemIndex;},
isDragging: function() {return _isDragging;},
isZooming: function() {return _isZooming;},
setScrollOffset: function(x,y) {
_offset.x=x;
_currentWindowScrollY=_offset.y=y;
_shout('updateScrollOffset', _offset);
},
applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
_panOffset.x=panX;
_panOffset.y=panY;
_currZoomLevel=zoomLevel;
_applyCurrentZoomPan( allowRenderResolution );
},
init: function() {
if(_isOpen || _isDestroying) {
return;
}

var i;
self.framework=framework;
self.template=template;
self.bg=framework.getChildByClass(template, 'pswp__bg');
_initalClassName=template.className;
_isOpen=true;
_features=framework.detectFeatures();
_requestAF=_features.raf;
_cancelAF=_features.caf;
_transformKey=_features.transform;
_oldIE=_features.oldIE;
self.scrollWrap=framework.getChildByClass(template, 'pswp__scroll-wrap');
self.container=framework.getChildByClass(self.scrollWrap, 'pswp__container');
_containerStyle=self.container.style;
self.itemHolders=_itemHolders=[
{el:self.container.children[0] , wrap:0, index: -1},
{el:self.container.children[1] , wrap:0, index: -1},
{el:self.container.children[2] , wrap:0, index: -1}
];
_itemHolders[0].el.style.display=_itemHolders[2].el.style.display='none';
_setupTransforms();
_globalEventHandlers={
resize: self.updateSize,
orientationchange: function() {
clearTimeout(_orientationChangeTimeout);
_orientationChangeTimeout=setTimeout(function() {
if(_viewportSize.x !== self.scrollWrap.clientWidth) {
self.updateSize();
}
}, 500);
},
scroll: _updatePageScrollOffset,
keydown: _onKeyDown,
click: _onGlobalClick
};
var oldPhone=_features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
if(!_features.animationName || !_features.transform || oldPhone) {
_options.showAnimationDuration=_options.hideAnimationDuration=0;
}
for(i=0; i < _modules.length; i++) {
self['init'+_modules[i]]();
}
if(UiClass) {
var ui=self.ui=new UiClass(self, framework);
ui.init();
}
_shout('firstUpdate');
_currentItemIndex=_currentItemIndex || _options.index || 0;
if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
_currentItemIndex=0;
}
self.currItem=_getItemAt( _currentItemIndex );
if(_features.isOldIOSPhone || _features.isOldAndroid) {
_isFixedPosition=false;
}
template.setAttribute('aria-hidden', 'false');
if(_options.modal) {
if(!_isFixedPosition) {template.style.position='absolute';template.style.top=framework.getScrollY()+'px';} else {template.style.position='fixed';}}
if(_currentWindowScrollY===undefined) {_shout('initialLayout');_currentWindowScrollY=_initalWindowScrollY=framework.getScrollY();}
var rootClasses='pswp--open ';
if(_options.mainClass) {rootClasses+=_options.mainClass+' ';}
if(_options.showHideOpacity) {rootClasses+='pswp--animate_opacity ';}
rootClasses+=_likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
rootClasses+=_features.animationName ? ' pswp--css_animation' : '';
rootClasses+=_features.svg ? ' pswp--svg' : '';
framework.addClass(template, rootClasses);
self.updateSize();
_containerShiftIndex=-1;
_indexDiff=null;
for(i=0; i < NUM_HOLDERS; i++) {
_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
}
if(!_oldIE) {framework.bind(self.scrollWrap, _downEvents, self);}
_listen('initialZoomInEnd', function() {
self.setContent(_itemHolders[0], _currentItemIndex-1);
self.setContent(_itemHolders[2], _currentItemIndex+1);
_itemHolders[0].el.style.display=_itemHolders[2].el.style.display='block';
if(_options.focus) {template.focus();}
_bindEvents();
});
self.setContent(_itemHolders[1], _currentItemIndex);
self.updateCurrItem();
_shout('afterInit');
if(!_isFixedPosition) {
_updateSizeInterval=setInterval(function() {
if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel===self.currItem.initialZoomLevel)  ) {
self.updateSize();}}, 1000);}
framework.addClass(template, 'pswp--visible');},
close: function() {if(!_isOpen) {return;}
_isOpen=false;
_isDestroying=true;
_shout('close');
_unbindEvents();
_showOrHide(self.currItem, null, true, self.destroy);
},
destroy: function() {_shout('destroy');if(_showOrHideTimeout) {clearTimeout(_showOrHideTimeout);}
template.setAttribute('aria-hidden', 'true');
template.className=_initalClassName;
if(_updateSizeInterval) {clearInterval(_updateSizeInterval);}
framework.unbind(self.scrollWrap, _downEvents, self);
framework.unbind(window, 'scroll', self);
_stopDragUpdateLoop();
_stopAllAnimations();
_listeners=null;
},
panTo: function(x,y,force) {
if(!force) {
if(x > _currPanBounds.min.x) {x=_currPanBounds.min.x;} else if(x < _currPanBounds.max.x) {x=_currPanBounds.max.x;}
if(y > _currPanBounds.min.y) {y=_currPanBounds.min.y;} else if(y < _currPanBounds.max.y) {y=_currPanBounds.max.y;}
}
_panOffset.x=x;_panOffset.y=y;_applyCurrentZoomPan();
},
handleEvent: function (e) {e=e || window.event;if(_globalEventHandlers[e.type]) {_globalEventHandlers[e.type](e);}},
goTo: function(index) {

index=_getLoopedId(index);

var diff=index - _currentItemIndex;
_indexDiff=diff;
_currentItemIndex=index;
self.currItem=_getItemAt( _currentItemIndex );
_currPositionIndex -= diff;
_moveMainScroll(_slideSize.x * _currPositionIndex);
_stopAllAnimations();
_mainScrollAnimating=false;
self.updateCurrItem();
},
next: function() {
self.goTo( _currentItemIndex+1);
},
prev: function() {
self.goTo( _currentItemIndex - 1);
},
updateCurrZoomItem: function(emulateSetContent) {
if(emulateSetContent) {
_shout('beforeChange', 0);
}
if(_itemHolders[1].el.children.length) {
var zoomElement=_itemHolders[1].el.children[0];
if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
_currZoomElementStyle=zoomElement.style;
} else {
_currZoomElementStyle=null;
}
} else {
_currZoomElementStyle=null;
}

_currPanBounds=self.currItem.bounds;
_startZoomLevel=_currZoomLevel=self.currItem.initialZoomLevel;

_panOffset.x=_currPanBounds.center.x;
_panOffset.y=_currPanBounds.center.y;

if(emulateSetContent) {
_shout('afterChange');
}
},
invalidateCurrItems: function() {
_itemsNeedUpdate=true;
for(var i=0; i < NUM_HOLDERS; i++) {
if( _itemHolders[i].item ) {
_itemHolders[i].item.needsUpdate=true;
}
}
},

updateCurrItem: function(beforeAnimation) {

if(_indexDiff===0) {
return;
}

var diffAbs=Math.abs(_indexDiff),
tempHolder;

if(beforeAnimation && diffAbs < 2) {
return;
}


self.currItem=_getItemAt( _currentItemIndex );
_renderMaxResolution=false;

_shout('beforeChange', _indexDiff);

if(diffAbs >= NUM_HOLDERS) {
_containerShiftIndex+=_indexDiff+(_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
diffAbs=NUM_HOLDERS;
}
for(var i=0; i < diffAbs; i++) {
if(_indexDiff > 0) {
tempHolder=_itemHolders.shift();
_itemHolders[NUM_HOLDERS-1]=tempHolder;

_containerShiftIndex++;
_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
self.setContent(tempHolder, _currentItemIndex - diffAbs+i+1+1);
} else {
tempHolder=_itemHolders.pop();
_itemHolders.unshift( tempHolder );

_containerShiftIndex--;
_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
self.setContent(tempHolder, _currentItemIndex+diffAbs - i - 1 - 1);
}}
if(_currZoomElementStyle && Math.abs(_indexDiff)===1) {
var prevItem=_getItemAt(_prevItemIndex);
if(prevItem.initialZoomLevel !== _currZoomLevel) {
_calculateItemSize(prevItem , _viewportSize );
_setImageSize(prevItem);
_applyZoomPanToItem( prevItem );
}}
_indexDiff=0;
self.updateCurrZoomItem();
_prevItemIndex=_currentItemIndex;
_shout('afterChange');
},
updateSize: function(force) {
if(!_isFixedPosition && _options.modal) {
var windowScrollY=framework.getScrollY();
if(_currentWindowScrollY !== windowScrollY) {
template.style.top=windowScrollY+'px';
_currentWindowScrollY=windowScrollY;
}
if(!force && _windowVisibleSize.x===window.innerWidth && _windowVisibleSize.y===window.innerHeight) {
return;
}
_windowVisibleSize.x=window.innerWidth;
_windowVisibleSize.y=window.innerHeight;
template.style.height=_windowVisibleSize.y+'px';
}
_viewportSize.x=self.scrollWrap.clientWidth;
_viewportSize.y=self.scrollWrap.clientHeight;
_updatePageScrollOffset();
_slideSize.x=_viewportSize.x+Math.round(_viewportSize.x * _options.spacing);
_slideSize.y=_viewportSize.y;
_moveMainScroll(_slideSize.x * _currPositionIndex);
_shout('beforeResize');
if(_containerShiftIndex !== undefined) {
var holder,item,hIndex;
for(var i=0; i < NUM_HOLDERS; i++) {
holder=_itemHolders[i];
_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);
hIndex=_currentItemIndex+i-1;
if(_options.loop && _getNumItems() > 2) {
hIndex=_getLoopedId(hIndex);
}
item=_getItemAt( hIndex );
if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {
self.cleanSlide( item );
self.setContent( holder, hIndex );
if(i===1) {
self.currItem=item;
self.updateCurrZoomItem(true);
}
item.needsUpdate=false;
} else if(holder.index===-1 && hIndex >= 0) {
self.setContent( holder, hIndex );
}
if(item && item.container) {
_calculateItemSize(item, _viewportSize);
_setImageSize(item);
_applyZoomPanToItem( item );
}}
_itemsNeedUpdate=false;
}
_startZoomLevel=_currZoomLevel=self.currItem.initialZoomLevel;
_currPanBounds=self.currItem.bounds;
if(_currPanBounds) {
_panOffset.x=_currPanBounds.center.x;
_panOffset.y=_currPanBounds.center.y;
_applyCurrentZoomPan( true );
}
_shout('resize');
},
zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
if(centerPoint) {
_startZoomLevel=_currZoomLevel;
_midZoomPoint.x=Math.abs(centerPoint.x) - _panOffset.x ;
_midZoomPoint.y=Math.abs(centerPoint.y) - _panOffset.y ;
_equalizePoints(_startPanOffset, _panOffset);
}
var destPanBounds=_calculatePanBounds(destZoomLevel, false),
destPanOffset={};
_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);
var initialZoomLevel=_currZoomLevel;
var initialPanOffset={
x: _panOffset.x,
y: _panOffset.y
};
_roundPoint(destPanOffset);
var onUpdate=function(now) {
if(now===1) {
_currZoomLevel=destZoomLevel;
_panOffset.x=destPanOffset.x;
_panOffset.y=destPanOffset.y;
} else {
_currZoomLevel=(destZoomLevel - initialZoomLevel) * now+initialZoomLevel;
_panOffset.x=(destPanOffset.x - initialPanOffset.x) * now+initialPanOffset.x;
_panOffset.y=(destPanOffset.y - initialPanOffset.y) * now+initialPanOffset.y;
}
if(updateFn) {updateFn(now);}
_applyCurrentZoomPan( now===1 );
};
if(speed) {
_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
} else {
onUpdate(1);
}}};
var MIN_SWIPE_DISTANCE=30,
DIRECTION_CHECK_OFFSET=10;
var _gestureStartTime,
_gestureCheckSpeedTime,
p={},
p2={},
delta={},
_currPoint={},
_startPoint={},
_currPointers=[],
_startMainScrollPos={},
_releaseAnimData,
_posPoints=[],
_tempPoint={},
_isZoomingIn,
_verticalDragInitiated,
_oldAndroidTouchEndTimeout,
_currZoomedItemIndex=0,
_centerPoint=_getEmptyPoint(),
_lastReleaseTime=0,
_isDragging,
_isMultitouch,
_zoomStarted,
_moved,
_dragAnimFrame,
_mainScrollShifted,
_currentPoints,
_isZooming,
_currPointsDistance,
_startPointsDistance,
_currPanBounds,
_mainScrollPos=_getEmptyPoint(),
_currZoomElementStyle,
_mainScrollAnimating,
_midZoomPoint=_getEmptyPoint(),
_currCenterPoint=_getEmptyPoint(),
_direction,
_isFirstMove,
_opacityChanged,
_bgOpacity,
_wasOverInitialZoom,
_isEqualPoints=function(p1, p2) {
return p1.x===p2.x && p1.y===p2.y;
},
_isNearbyPoints=function(touch0, touch1) {
return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
},
_calculatePointsDistance=function(p1, p2) {
_tempPoint.x=Math.abs( p1.x - p2.x );
_tempPoint.y=Math.abs( p1.y - p2.y );
return Math.sqrt(_tempPoint.x * _tempPoint.x+_tempPoint.y * _tempPoint.y);
},
_stopDragUpdateLoop=function() {
if(_dragAnimFrame) {
_cancelAF(_dragAnimFrame);
_dragAnimFrame=null;
}},
_dragUpdateLoop=function() {
if(_isDragging) {
_dragAnimFrame=_requestAF(_dragUpdateLoop);
_renderMovement();
}},
_canPan=function() {
return !(_options.scaleMode==='fit' && _currZoomLevel=== self.currItem.initialZoomLevel);
},
_closestElement=function(el, fn) {
if(!el || el===document) {
return false;
}
if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
return false;
}
if( fn(el) ) {return el;}
return _closestElement(el.parentNode, fn);
},
_preventObj={},
_preventDefaultEventBehaviour=function(e, isDown) {
_preventObj.prevent=!_closestElement(e.target, _options.isClickableElement);
_shout('preventDragEvent', e, isDown, _preventObj);
return _preventObj.prevent;
},
_convertTouchToPoint=function(touch, p) {
p.x=touch.pageX;
p.y=touch.pageY;
p.id=touch.identifier;
return p;
},
_findCenterOfPoints=function(p1, p2, pCenter) {
pCenter.x=(p1.x+p2.x) * 0.5;
pCenter.y=(p1.y+p2.y) * 0.5;
},
_pushPosPoint=function(time, x, y) {
if(time - _gestureCheckSpeedTime > 50) {
var o=_posPoints.length > 2 ? _posPoints.shift() : {};
o.x=x;o.y=y;
_posPoints.push(o);
_gestureCheckSpeedTime=time;
}},
_calculateVerticalDragOpacityRatio=function() {
var yOffset=_panOffset.y - self.currItem.initialPosition.y;
return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
},
_ePoint1={},
_ePoint2={},
_tempPointsArr=[],
_tempCounter,
_getTouchPoints=function(e) {
while(_tempPointsArr.length > 0) {
_tempPointsArr.pop();
}
if(!_pointerEventEnabled) {
if(e.type.indexOf('touch') > -1) {
if(e.touches && e.touches.length > 0) {
_tempPointsArr[0]=_convertTouchToPoint(e.touches[0], _ePoint1);
if(e.touches.length > 1) {
_tempPointsArr[1]=_convertTouchToPoint(e.touches[1], _ePoint2);
}}} else {
_ePoint1.x=e.pageX;
_ePoint1.y=e.pageY;
_ePoint1.id='';
_tempPointsArr[0]=_ePoint1;
}} else {
_tempCounter=0;
_currPointers.forEach(function(p) {
if(_tempCounter===0) {
_tempPointsArr[0]=p;
} else if(_tempCounter===1) {
_tempPointsArr[1]=p;
}_tempCounter++;
});}
return _tempPointsArr;
},
_panOrMoveMainScroll=function(axis, delta) {
var panFriction,
overDiff=0,
newOffset=_panOffset[axis]+delta[axis],
startOverDiff,
dir=delta[axis] > 0,
newMainScrollPosition=_mainScrollPos.x+delta.x,
mainScrollDiff=_mainScrollPos.x - _startMainScrollPos.x,
newPanPos,
newMainScrollPos;
if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
panFriction=_options.panEndFriction;
} else {panFriction=1;}
newOffset=_panOffset[axis]+delta[axis] * panFriction;
if(_options.allowPanToNext || _currZoomLevel===self.currItem.initialZoomLevel) {
if(!_currZoomElementStyle) {
newMainScrollPos=newMainScrollPosition;
} else if(_direction==='h' && axis==='x' && !_zoomStarted ) {
if(dir) {
if(newOffset > _currPanBounds.min[axis]) {
panFriction=_options.panEndFriction;
overDiff=_currPanBounds.min[axis] - newOffset;
startOverDiff=_currPanBounds.min[axis] - _startPanOffset[axis];
}
if( (startOverDiff<=0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
newMainScrollPos=newMainScrollPosition;
if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
newMainScrollPos=_startMainScrollPos.x;
}} else {if(_currPanBounds.min.x !== _currPanBounds.max.x) {newPanPos=newOffset;}}
} else {
if(newOffset < _currPanBounds.max[axis] ) {
panFriction =_options.panEndFriction;
overDiff=newOffset - _currPanBounds.max[axis];
startOverDiff=_startPanOffset[axis] - _currPanBounds.max[axis];
}if( (startOverDiff<=0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
newMainScrollPos=newMainScrollPosition;
if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
newMainScrollPos=_startMainScrollPos.x;}} else {
if(_currPanBounds.min.x !== _currPanBounds.max.x) {
newPanPos=newOffset;
}}}}
if(axis==='x') {
if(newMainScrollPos !== undefined) {
_moveMainScroll(newMainScrollPos, true);
if(newMainScrollPos===_startMainScrollPos.x) {_mainScrollShifted=false;} else {_mainScrollShifted=true;}}
if(_currPanBounds.min.x !== _currPanBounds.max.x) {
if(newPanPos !== undefined) {_panOffset.x=newPanPos;} else if(!_mainScrollShifted) {_panOffset.x+=delta.x * panFriction;}}
return newMainScrollPos !== undefined;
}}
if(!_mainScrollAnimating) {
if(!_mainScrollShifted) {
if(_currZoomLevel > self.currItem.fitRatio) {_panOffset[axis]+=delta[axis] * panFriction;}}
}},
_onDragStart=function(e) {
if(e.type==='mousedown' && e.button > 0  ) {return;}
if(_initialZoomRunning) {e.preventDefault();return;}
if(_oldAndroidTouchEndTimeout && e.type==='mousedown') {return;}
if(_preventDefaultEventBehaviour(e, true)) {e.preventDefault();}
_shout('pointerDown');
if(_pointerEventEnabled) {
var pointerIndex=framework.arraySearch(_currPointers, e.pointerId, 'id');
if(pointerIndex < 0) {pointerIndex=_currPointers.length;}
_currPointers[pointerIndex]={x:e.pageX, y:e.pageY, id: e.pointerId};
}
var startPointsList=_getTouchPoints(e),
numPoints=startPointsList.length;
_currentPoints=null;
_stopAllAnimations();
if(!_isDragging || numPoints===1) {_isDragging=_isFirstMove=true;framework.bind(window, _upMoveEvents, self);
_isZoomingIn =
_wasOverInitialZoom =
_opacityChanged =
_verticalDragInitiated =
_mainScrollShifted =
_moved =
_isMultitouch =
_zoomStarted=false;
_direction=null;
_shout('firstTouchStart', startPointsList);
_equalizePoints(_startPanOffset, _panOffset);
_currPanDist.x=_currPanDist.y=0;
_equalizePoints(_currPoint, startPointsList[0]);
_equalizePoints(_startPoint, _currPoint);
_startMainScrollPos.x=_slideSize.x * _currPositionIndex;
_posPoints=[{x: _currPoint.x,y: _currPoint.y}];
_gestureCheckSpeedTime=_gestureStartTime=_getCurrentTime();
_calculatePanBounds( _currZoomLevel, true );
_stopDragUpdateLoop();
_dragUpdateLoop();
}
if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
_startZoomLevel=_currZoomLevel;
_zoomStarted=false;
_isZooming=_isMultitouch=true;
_currPanDist.y=_currPanDist.x=0;
_equalizePoints(_startPanOffset, _panOffset);
_equalizePoints(p, startPointsList[0]);
_equalizePoints(p2, startPointsList[1]);
_findCenterOfPoints(p, p2, _currCenterPoint);
_midZoomPoint.x=Math.abs(_currCenterPoint.x) - _panOffset.x;
_midZoomPoint.y=Math.abs(_currCenterPoint.y) - _panOffset.y;
_currPointsDistance=_startPointsDistance=_calculatePointsDistance(p, p2);
}},
_onDragMove=function(e) {
e.preventDefault();
if(_pointerEventEnabled) {
var pointerIndex=framework.arraySearch(_currPointers, e.pointerId, 'id');
if(pointerIndex > -1) {var p=_currPointers[pointerIndex];p.x=e.pageX;p.y=e.pageY;}
}
if(_isDragging) {
var touchesList=_getTouchPoints(e);
if(!_direction && !_moved && !_isZooming) {
if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
_direction='h';
} else {
var diff=Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
_direction=diff > 0 ? 'h' : 'v';
_currentPoints=touchesList;}}} else {_currentPoints=touchesList;}}},
_renderMovement= function() {
if(!_currentPoints) {
return;
}
var numPoints=_currentPoints.length;
if(numPoints===0) {
return;
}
_equalizePoints(p, _currentPoints[0]);
delta.x=p.x - _currPoint.x;
delta.y=p.y - _currPoint.y;
if(_isZooming && numPoints > 1) {
_currPoint.x=p.x;
_currPoint.y=p.y;
if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
return;
}
_equalizePoints(p2, _currentPoints[1]);
if(!_zoomStarted) {
_zoomStarted=true;
_shout('zoomGestureStarted');
}
var pointsDistance=_calculatePointsDistance(p,p2);
var zoomLevel=_calculateZoomLevel(pointsDistance);
if(zoomLevel > self.currItem.initialZoomLevel+self.currItem.initialZoomLevel / 15) {
_wasOverInitialZoom=true;
}
var zoomFriction=1,
minZoomLevel=_getMinZoomLevel(),
maxZoomLevel=_getMaxZoomLevel();

if ( zoomLevel < minZoomLevel ) {

if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel<=self.currItem.initialZoomLevel) {
var minusDiff=minZoomLevel - zoomLevel;
var percent=1 - minusDiff / (minZoomLevel / 1.2);
_applyBgOpacity(percent);
_shout('onPinchClose', percent);
_opacityChanged=true;
} else {
zoomFriction=(minZoomLevel - zoomLevel) / minZoomLevel;
if(zoomFriction > 1) {
zoomFriction=1;
}
zoomLevel=minZoomLevel - zoomFriction * (minZoomLevel / 3);
}
} else if ( zoomLevel > maxZoomLevel ) {
zoomFriction=(zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
if(zoomFriction > 1) {
zoomFriction=1;
}
zoomLevel=maxZoomLevel+zoomFriction * minZoomLevel;
}
if(zoomFriction < 0) {
zoomFriction=0;
}
_currPointsDistance=pointsDistance;
_findCenterOfPoints(p, p2, _centerPoint);
_currPanDist.x+=_centerPoint.x - _currCenterPoint.x;
_currPanDist.y+=_centerPoint.y - _currCenterPoint.y;
_equalizePoints(_currCenterPoint, _centerPoint);
_panOffset.x=_calculatePanOffset('x', zoomLevel);
_panOffset.y=_calculatePanOffset('y', zoomLevel);
_isZoomingIn=zoomLevel > _currZoomLevel;
_currZoomLevel=zoomLevel;
_applyCurrentZoomPan();
} else {
if(!_direction) {
return;
}
if(_isFirstMove) {
_isFirstMove=false;
if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
delta.x -= _currentPoints[0].x - _startPoint.x;
}

if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
delta.y -= _currentPoints[0].y - _startPoint.y;
}
}

_currPoint.x=p.x;
_currPoint.y=p.y;
if(delta.x===0 && delta.y===0) {
return;
}

if(_direction==='v' && _options.closeOnVerticalDrag) {
if(!_canPan()) {
_currPanDist.y+=delta.y;
_panOffset.y+=delta.y;

var opacityRatio=_calculateVerticalDragOpacityRatio();

_verticalDragInitiated=true;
_shout('onVerticalDrag', opacityRatio);

_applyBgOpacity(opacityRatio);
_applyCurrentZoomPan();
return ;
}
}
_pushPosPoint(_getCurrentTime(), p.x, p.y);
_moved=true;
_currPanBounds=self.currItem.bounds;
var mainScrollChanged=_panOrMoveMainScroll('x', delta);
if(!mainScrollChanged) {
_panOrMoveMainScroll('y', delta);

_roundPoint(_panOffset);
_applyCurrentZoomPan();
}
}
},
_onDragRelease=function(e) {
if(_features.isOldAndroid ) {
if(_oldAndroidTouchEndTimeout && e.type==='mouseup') {
return;
}
if( e.type.indexOf('touch') > -1 ) {
clearTimeout(_oldAndroidTouchEndTimeout);
_oldAndroidTouchEndTimeout=setTimeout(function() {
_oldAndroidTouchEndTimeout=0;
}, 600);
}

}

_shout('pointerUp');

if(_preventDefaultEventBehaviour(e, false)) {
e.preventDefault();
}

var releasePoint;

if(_pointerEventEnabled) {
var pointerIndex=framework.arraySearch(_currPointers, e.pointerId, 'id');

if(pointerIndex > -1) {
releasePoint=_currPointers.splice(pointerIndex, 1)[0];

if(navigator.msPointerEnabled) {
var MSPOINTER_TYPES={
4: 'mouse',
2: 'touch',
3: 'pen'
};
releasePoint.type=MSPOINTER_TYPES[e.pointerType];

if(!releasePoint.type) {
releasePoint.type=e.pointerType || 'mouse';
}
} else {
releasePoint.type=e.pointerType || 'mouse';
}

}
}

var touchList=_getTouchPoints(e),
gestureType,
numPoints=touchList.length;

if(e.type==='mouseup') {
numPoints=0;
}
if(numPoints===2) {
_currentPoints=null;
return true;
}
if(numPoints===1) {
_equalizePoints(_startPoint, touchList[0]);
}
if(numPoints===0 && !_direction && !_mainScrollAnimating) {
if(!releasePoint) {
if(e.type==='mouseup') {
releasePoint={x: e.pageX, y: e.pageY, type:'mouse'};
} else if(e.changedTouches && e.changedTouches[0]) {
releasePoint={x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
}
}

_shout('touchRelease', e, releasePoint);
}
var releaseTimeDiff=-1;
if(numPoints===0) {
_isDragging=false;
framework.unbind(window, _upMoveEvents, self);
_stopDragUpdateLoop();
if(_isZooming) {
releaseTimeDiff=0;
} else if(_lastReleaseTime !== -1) {
releaseTimeDiff=_getCurrentTime() - _lastReleaseTime;
}
}
_lastReleaseTime=numPoints===1 ? _getCurrentTime() : -1;

if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
gestureType='zoom';
} else {
gestureType='swipe';
}

if(_isZooming && numPoints < 2) {
_isZooming=false;
if(numPoints===1) {
gestureType='zoomPointerUp';
}
_shout('zoomGestureEnded');
}
_currentPoints=null;
if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
return;
}
_stopAllAnimations();
if(!_releaseAnimData) {_releaseAnimData=_initDragReleaseAnimationData();}
_releaseAnimData.calculateSwipeSpeed('x');
if(_verticalDragInitiated) {
var opacityRatio=_calculateVerticalDragOpacityRatio();
if(opacityRatio < _options.verticalDragRange) {
self.close();
} else {
var initalPanY=_panOffset.y,
initialBgOpacity=_bgOpacity;
_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
_panOffset.y=(self.currItem.initialPosition.y - initalPanY) * now+initalPanY;
_applyBgOpacity(  (1 - initialBgOpacity) * now+initialBgOpacity );
_applyCurrentZoomPan();
});
_shout('onVerticalDrag', 1);
}
return;
}
if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints===0) {
var itemChanged=_finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
if(itemChanged) {return;}
gestureType='zoomPointerUp';
}
if(_mainScrollAnimating) {return;}
if(gestureType !== 'swipe') {_completeZoomGesture();return;}
if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
_completePanGesture(_releaseAnimData);
}
},
_initDragReleaseAnimationData =function() {
var lastFlickDuration,
tempReleasePos;
var s={
lastFlickOffset: {},lastFlickDist: {},lastFlickSpeed: {},slowDownRatio:  {},slowDownRatioReverse:  {},
speedDecelerationRatio:  {},speedDecelerationRatioAbs:  {},distanceOffset:  {},
backAnimDestination: {},
backAnimStarted: {},
calculateSwipeSpeed: function(axis) {
if( _posPoints.length > 1) {lastFlickDuration=_getCurrentTime() - _gestureCheckSpeedTime+50;
tempReleasePos=_posPoints[_posPoints.length-2][axis];
} else {
lastFlickDuration=_getCurrentTime() - _gestureStartTime;
tempReleasePos=_startPoint[axis];
}
s.lastFlickOffset[axis]=_currPoint[axis] - tempReleasePos;
s.lastFlickDist[axis]=Math.abs(s.lastFlickOffset[axis]);
if(s.lastFlickDist[axis] > 20) {
s.lastFlickSpeed[axis]=s.lastFlickOffset[axis] / lastFlickDuration;
} else {
s.lastFlickSpeed[axis]=0;
}
if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
s.lastFlickSpeed[axis]=0;
}
s.slowDownRatio[axis]=0.95;
s.slowDownRatioReverse[axis]=1 - s.slowDownRatio[axis];
s.speedDecelerationRatio[axis]=1;
},
calculateOverBoundsAnimOffset: function(axis, speed) {
if(!s.backAnimStarted[axis]) {
if(_panOffset[axis] > _currPanBounds.min[axis]) {
s.backAnimDestination[axis]=_currPanBounds.min[axis];
} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
s.backAnimDestination[axis]=_currPanBounds.max[axis];
}
if(s.backAnimDestination[axis] !== undefined) {
s.slowDownRatio[axis]=0.7;
s.slowDownRatioReverse[axis]=1 - s.slowDownRatio[axis];
if(s.speedDecelerationRatioAbs[axis] < 0.05) {
s.lastFlickSpeed[axis]=0;
s.backAnimStarted[axis]=true;
_animateProp('bounceZoomPan'+axis,_panOffset[axis],
s.backAnimDestination[axis],
speed || 300,
framework.easing.sine.out,
function(pos) {
_panOffset[axis]=pos;
_applyCurrentZoomPan();
});}}}},
calculateAnimOffset: function(axis) {
if(!s.backAnimStarted[axis]) {
s.speedDecelerationRatio[axis]=s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
s.slowDownRatioReverse[axis] -
s.slowDownRatioReverse[axis] * s.timeDiff / 10);
s.speedDecelerationRatioAbs[axis]=Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
s.distanceOffset[axis]=s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
_panOffset[axis]+=s.distanceOffset[axis];
}},panAnimLoop: function() {
if ( _animations.zoomPan ) {
_animations.zoomPan.raf=_requestAF(s.panAnimLoop);
s.now=_getCurrentTime();
s.timeDiff=s.now - s.lastNow;
s.lastNow=s.now;
s.calculateAnimOffset('x');
s.calculateAnimOffset('y');
_applyCurrentZoomPan();
s.calculateOverBoundsAnimOffset('x');
s.calculateOverBoundsAnimOffset('y');
if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
_panOffset.x=Math.round(_panOffset.x);
_panOffset.y=Math.round(_panOffset.y);
_applyCurrentZoomPan();_stopAnimation('zoomPan');
return;}}}};return s;},_completePanGesture=function(animData) {
animData.calculateSwipeSpeed('y');
_currPanBounds=self.currItem.bounds;
animData.backAnimDestination={};
animData.backAnimStarted={};
if(Math.abs(animData.lastFlickSpeed.x)<=0.05 && Math.abs(animData.lastFlickSpeed.y)<=0.05 ) {
animData.speedDecelerationRatioAbs.x=animData.speedDecelerationRatioAbs.y=0;
animData.calculateOverBoundsAnimOffset('x');
animData.calculateOverBoundsAnimOffset('y');
return true;
}
_registerStartAnimation('zoomPan');animData.lastNow=_getCurrentTime();animData.panAnimLoop();
},
_finishSwipeMainScrollGesture=function(gestureType, _releaseAnimData) {
var itemChanged;if(!_mainScrollAnimating) {_currZoomedItemIndex=_currentItemIndex;}
var itemsDiff;
if(gestureType==='swipe') {
var totalShiftDist=_currPoint.x - _startPoint.x,
isFastLastFlick=_releaseAnimData.lastFlickDist.x < 10;
if(totalShiftDist > MIN_SWIPE_DISTANCE &&
(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
itemsDiff=-1;
} else if(totalShiftDist < -MIN_SWIPE_DISTANCE &&
(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
itemsDiff=1;}}
var nextCircle;
if(itemsDiff) {_currentItemIndex+=itemsDiff;if(_currentItemIndex < 0) {_currentItemIndex=_options.loop ? _getNumItems()-1 : 0;
nextCircle=true;
} else if(_currentItemIndex >= _getNumItems()) {_currentItemIndex=_options.loop ? 0 : _getNumItems()-1;nextCircle=true;}
if(!nextCircle || _options.loop) {_indexDiff+=itemsDiff;_currPositionIndex -= itemsDiff;itemChanged=true;}}
var animateToX=_slideSize.x * _currPositionIndex;
var animateToDist=Math.abs( animateToX - _mainScrollPos.x );
var finishAnimDuration;
if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
finishAnimDuration=333;} else {finishAnimDuration=Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
333;
finishAnimDuration=Math.min(finishAnimDuration, 400);
finishAnimDuration=Math.max(finishAnimDuration, 250);
}if(_currZoomedItemIndex===_currentItemIndex) {itemChanged=false;}
_mainScrollAnimating=true;
_shout('mainScrollAnimStart');
_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
_moveMainScroll,
function() {
_stopAllAnimations();
_mainScrollAnimating=false;
_currZoomedItemIndex=-1;
if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {self.updateCurrItem();}
_shout('mainScrollAnimComplete');});if(itemChanged) {self.updateCurrItem(true);}
return itemChanged;
},
_calculateZoomLevel=function(touchesDistance) {
return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
},
_completeZoomGesture=function() {
var destZoomLevel=_currZoomLevel,
minZoomLevel=_getMinZoomLevel(),
maxZoomLevel=_getMaxZoomLevel();

if ( _currZoomLevel < minZoomLevel ) {
destZoomLevel=minZoomLevel;
} else if ( _currZoomLevel > maxZoomLevel ) {
destZoomLevel=maxZoomLevel;
}
var destOpacity=1,
onUpdate,
initialOpacity=_bgOpacity;
if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
self.close();
return true;
}
if(_opacityChanged) {
onUpdate=function(now) {
_applyBgOpacity(  (destOpacity - initialOpacity) * now+initialOpacity );
};
}
self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
return true;
};
_registerModule('Gestures', {
publicMethods: {
initGestures: function() {
var addEventNames=function(pref, down, move, up, cancel) {
_dragStartEvent=pref+down;
_dragMoveEvent=pref+move;
_dragEndEvent=pref+up;
if(cancel) {
_dragCancelEvent=pref+cancel;
} else {
_dragCancelEvent='';
}
};
_pointerEventEnabled=_features.pointerEvent;
if(_pointerEventEnabled && _features.touch) {
_features.touch=false;
}if(_pointerEventEnabled) {
if(navigator.msPointerEnabled) {
addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
} else {addEventNames('pointer', 'down', 'move', 'up', 'cancel');
}} else if(_features.touch) {
addEventNames('touch', 'start', 'move', 'end', 'cancel');
_likelyTouchDevice=true;
} else {
addEventNames('mouse', 'down', 'move', 'up');
}
_upMoveEvents=_dragMoveEvent+' '+_dragEndEvent +' '+ _dragCancelEvent;
_downEvents=_dragStartEvent;
if(_pointerEventEnabled && !_likelyTouchDevice) {
_likelyTouchDevice=(navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
}
self.likelyTouchDevice=_likelyTouchDevice;
_globalEventHandlers[_dragStartEvent]=_onDragStart;
_globalEventHandlers[_dragMoveEvent]=_onDragMove;
_globalEventHandlers[_dragEndEvent]=_onDragRelease; // the Kraken
if(_dragCancelEvent) {
_globalEventHandlers[_dragCancelEvent]=_globalEventHandlers[_dragEndEvent];
}
if(_features.touch) {
_downEvents+=' mousedown';
_upMoveEvents+=' mousemove mouseup';
_globalEventHandlers.mousedown=_globalEventHandlers[_dragStartEvent];
_globalEventHandlers.mousemove=_globalEventHandlers[_dragMoveEvent];
_globalEventHandlers.mouseup=_globalEventHandlers[_dragEndEvent];
}
if(!_likelyTouchDevice) {_options.allowPanToNext=false;}}}});
var _showOrHideTimeout,_showOrHide=function(item, img, out, completeFn) {if(_showOrHideTimeout) {clearTimeout(_showOrHideTimeout);
}_initialZoomRunning=true;_initialContentSet=true;var thumbBounds;if(item.initialLayout) {
thumbBounds=item.initialLayout;
item.initialLayout=null;
} else {thumbBounds=_options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);}
var duration=out ? _options.hideAnimationDuration : _options.showAnimationDuration;
var onComplete=function() {_stopAnimation('initialZoom');
if(!out) {
_applyBgOpacity(1);
if(img) {img.style.display='block';}
framework.addClass(template, 'pswp--animated-in');
_shout('initialZoom'+(out ? 'OutEnd' : 'InEnd'));
} else {self.template.removeAttribute('style');self.bg.removeAttribute('style');}
if(completeFn) {completeFn();}
_initialZoomRunning=false;
};
if(!duration || !thumbBounds || thumbBounds.x===undefined) {
_shout('initialZoom'+(out ? 'Out' : 'In') );
_currZoomLevel=item.initialZoomLevel;
_equalizePoints(_panOffset,  item.initialPosition );
_applyCurrentZoomPan();template.style.opacity=out ? 0 : 1;_applyBgOpacity(1);if(duration) {
setTimeout(function() {onComplete();}, duration);} else {onComplete();}return;}
var startAnimation=function() {
var closeWithRaf=_closedByScroll,
fadeEverything=!self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
if(item.miniImg) {item.miniImg.style.webkitBackfaceVisibility='hidden';}
if(!out) {
_currZoomLevel=thumbBounds.w / item.w;
_panOffset.x=thumbBounds.x;
_panOffset.y=thumbBounds.y - _initalWindowScrollY;
self[fadeEverything ? 'template' : 'bg'].style.opacity=0.001;
_applyCurrentZoomPan();
}
_registerStartAnimation('initialZoom');
if(out && !closeWithRaf) {framework.removeClass(template, 'pswp--animated-in');}
if(fadeEverything) {if(out) {framework[ (closeWithRaf ? 'remove' : 'add')+'Class' ](template, 'pswp--animate_opacity');
} else {setTimeout(function() {framework.addClass(template, 'pswp--animate_opacity');}, 30);}}
_showOrHideTimeout=setTimeout(function() {
_shout('initialZoom'+(out ? 'Out' : 'In') );
if(!out) {
_currZoomLevel=item.initialZoomLevel;
_equalizePoints(_panOffset,  item.initialPosition );
_applyCurrentZoomPan();
_applyBgOpacity(1);
if(fadeEverything) {template.style.opacity=1;} else {_applyBgOpacity(1);}
_showOrHideTimeout=setTimeout(onComplete, duration+20);
} else {
var destZoomLevel=thumbBounds.w / item.w,
initialPanOffset={x: _panOffset.x,y: _panOffset.y},
initialZoomLevel=_currZoomLevel,
initalBgOpacity=_bgOpacity,
onUpdate=function(now) {
if(now===1) {
_currZoomLevel=destZoomLevel;
_panOffset.x=thumbBounds.x;
_panOffset.y=thumbBounds.y  - _currentWindowScrollY;
} else {
_currZoomLevel=(destZoomLevel - initialZoomLevel) * now+initialZoomLevel;
_panOffset.x=(thumbBounds.x - initialPanOffset.x) * now+initialPanOffset.x;
_panOffset.y=(thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now+initialPanOffset.y;
}
_applyCurrentZoomPan();
if(fadeEverything) {
template.style.opacity=1 - now;
} else {_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
}};
if(closeWithRaf) {
_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
} else {
onUpdate(1);
_showOrHideTimeout=setTimeout(onComplete, duration+20);
}}}, out ? 25 : 90);};
startAnimation();
};
var _items,
_tempPanAreaSize={},
_imagesToAppendPool=[],
_initialContentSet,
_initialZoomRunning,
_controllerDefaultOptions={
index: 0,
errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
forceProgressiveLoading: false, // TODO
preload: [1,1],
getNumItemsFn: function() {return _items.length;}};
var _getItemAt,_getNumItems,_initialIsLoop,_getZeroBounds=function() {
return {center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}};
},
_calculateSingleItemPanBounds=function(item, realPanElementW, realPanElementH ) {
var bounds=item.bounds;
bounds.center.x=Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
bounds.center.y=Math.round((_tempPanAreaSize.y - realPanElementH) / 2)+item.vGap.top;
bounds.max.x=(realPanElementW > _tempPanAreaSize.x) ?
Math.round(_tempPanAreaSize.x - realPanElementW) :
bounds.center.x;
bounds.max.y=(realPanElementH > _tempPanAreaSize.y) ?
Math.round(_tempPanAreaSize.y - realPanElementH)+item.vGap.top :
bounds.center.y;
bounds.min.x=(realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
bounds.min.y=(realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
},
_calculateItemSize=function(item, viewportSize, zoomLevel) {
if (item.src && !item.loadError) {
var isInitial=!zoomLevel;
if(isInitial) {if(!item.vGap) {item.vGap={top:0,bottom:0};}
_shout('parseVerticalMargin', item);
}
_tempPanAreaSize.x=viewportSize.x;
_tempPanAreaSize.y=viewportSize.y - item.vGap.top - item.vGap.bottom;
if (isInitial) {
var hRatio=_tempPanAreaSize.x / item.w;
var vRatio=_tempPanAreaSize.y / item.h;
item.fitRatio=hRatio < vRatio ? hRatio : vRatio;
var scaleMode=_options.scaleMode;
if (scaleMode==='orig') {zoomLevel=1;} else if (scaleMode==='fit') {zoomLevel=item.fitRatio;}
if (zoomLevel > 1) {zoomLevel=1;}
item.initialZoomLevel=zoomLevel;
if(!item.bounds) {item.bounds=_getZeroBounds();}}
if(!zoomLevel) {return;}
_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);
if (isInitial && zoomLevel===item.initialZoomLevel) {item.initialPosition=item.bounds.center;}
return item.bounds;
} else {item.w=item.h=0;
item.initialZoomLevel=item.fitRatio=1;
item.bounds=_getZeroBounds();
item.initialPosition=item.bounds.center;
return item.bounds;
}},_appendImage=function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
if(item.loadError) {return;}
if(img) {item.imageAppended=true;_setImageSize(item, img, (item===self.currItem && _renderMaxResolution) );
baseDiv.appendChild(img);
if(keepPlaceholder) {
setTimeout(function() {
if(item && item.loaded && item.placeholder) {
item.placeholder.style.display='none';
item.placeholder=null;
}}, 500);}}},
_preloadImage=function(item) {
item.loading=true;
item.loaded=false;
var img=item.img=framework.createEl('pswp__img', 'img');
var onComplete=function() {item.loading=false;item.loaded=true;if(item.loadComplete) {item.loadComplete(item);} else {item.img=null;}
img.onload=img.onerror=null;
img=null;};
img.onload=onComplete;img.onerror=function() {item.loadError=true;
onComplete();};img.src=item.src;return img;
},
_checkForError=function(item, cleanUp) {
if(item.src && item.loadError && item.container) {
if(cleanUp) {item.container.innerHTML='';}
item.container.innerHTML=_options.errorMsg.replace('%url%',  item.src );return true;}},
_setImageSize=function(item, img, maxRes) {if(!item.src) {return;}if(!img) {img=item.container.lastChild;}
var w=maxRes ? item.w : Math.round(item.w * item.fitRatio),
h=maxRes ? item.h : Math.round(item.h * item.fitRatio);
if(item.placeholder && !item.loaded) {
item.placeholder.style.width=w+'px';
item.placeholder.style.height=h+'px';
}
img.style.width=w+'px';
img.style.height=h+'px';
},
_appendImagesPool=function() {
if(_imagesToAppendPool.length) {
var poolItem;
for(var i=0; i < _imagesToAppendPool.length; i++) {
poolItem=_imagesToAppendPool[i];
if( poolItem.holder.index===poolItem.index ) {
_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
}}_imagesToAppendPool=[];}};
_registerModule('Controller', {
publicMethods: {
lazyLoadItem: function(index) {index=_getLoopedId(index);var item=_getItemAt(index);
if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {return;}
_shout('gettingData', index, item);
if (!item.src) {return;}
_preloadImage(item);},initController: function() {framework.extend(_options, _controllerDefaultOptions, true);self.items=_items=items;_getItemAt=self.getItemAt;_getNumItems=_options.getNumItemsFn;
_initialIsLoop=_options.loop;
if(_getNumItems() < 3) {_options.loop=false;}_listen('beforeChange', function(diff) {
var p=_options.preload,
isNext=diff===null ? true : (diff >= 0),preloadBefore=Math.min(p[0], _getNumItems() ),
preloadAfter=Math.min(p[1], _getNumItems() ),i;
for(i=1; i<=(isNext ? preloadAfter : preloadBefore); i++) {self.lazyLoadItem(_currentItemIndex+i);}
for(i=1; i<=(isNext ? preloadBefore : preloadAfter); i++) {self.lazyLoadItem(_currentItemIndex-i);}
});
_listen('initialLayout', function() {self.currItem.initialLayout=_options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
});
_listen('mainScrollAnimComplete', _appendImagesPool);_listen('initialZoomInEnd', _appendImagesPool);_listen('destroy', function() {
var item;
for(var i=0; i < _items.length; i++) {
item=_items[i];if(item.container) {item.container=null;}if(item.placeholder) {item.placeholder=null;}if(item.img) {item.img=null;}if(item.preloader) {item.preloader=null;}if(item.loadError) {item.loaded=item.loadError=false;}
}_imagesToAppendPool=null;});},
getItemAt: function(index) {if (index >= 0) {return _items[index] !== undefined ? _items[index] : false;}
return false;},allowProgressiveImg: function() {
return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
},setContent: function(holder, index) {
if(_options.loop) {index=_getLoopedId(index);}
var prevItem=self.getItemAt(holder.index);
if(prevItem) {prevItem.container=null;}
var item=self.getItemAt(index),
img;if(!item) {
holder.el.innerHTML='';
return;
}
_shout('gettingData', index, item);holder.index=index;holder.item=item;
var baseDiv=item.container=framework.createEl('pswp__zoom-wrap');
if(!item.src && item.html) {
if(item.html.tagName) {baseDiv.appendChild(item.html);} else {baseDiv.innerHTML=item.html;}
}_checkForError(item);
_calculateItemSize(item, _viewportSize);
if(item.src && !item.loadError && !item.loaded) {
item.loadComplete=function(item) {
if(!_isOpen) {
return;}
if(holder && holder.index===index ) {
if( _checkForError(item, true) ) {item.loadComplete=item.img=null;_calculateItemSize(item, _viewportSize);_applyZoomPanToItem(item);
if(holder.index===_currentItemIndex) {self.updateCurrZoomItem();}
return;
}
if( !item.imageAppended ) {
if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
_imagesToAppendPool.push({
item:item,baseDiv:baseDiv,img:item.img,index:index,holder:holder,clearPlaceholder:true
});
} else {
_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
}
} else {
if(!_initialZoomRunning && item.placeholder) {item.placeholder.style.display='none';item.placeholder=null;
}}}
item.loadComplete=null;
item.img=null;
_shout('imageLoadComplete', index, item);
};
if(framework.features.transform) {
var placeholderClassName='pswp__img pswp__img--placeholder';
placeholderClassName+=(item.msrc ? '' : ' pswp__img--placeholder--blank');
var placeholder=framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
if(item.msrc) {
placeholder.src=item.msrc;
}
_setImageSize(item, placeholder);
baseDiv.appendChild(placeholder);
item.placeholder=placeholder;
}
if(!item.loading) {_preloadImage(item);}
if( self.allowProgressiveImg() ) {
if(!_initialContentSet && _features.transform) {
_imagesToAppendPool.push({
item:item,baseDiv:baseDiv,img:item.img,index:index,holder:holder});
} else {_appendImage(index, item, baseDiv, item.img, true, true);}}
} else if(item.src && !item.loadError) {
img=framework.createEl('pswp__img', 'img');
img.style.opacity=1;
img.src=item.src;
_setImageSize(item, img);
_appendImage(index, item, baseDiv, img, true);
}
if(!_initialContentSet && index===_currentItemIndex) {
_currZoomElementStyle=baseDiv.style;
_showOrHide(item, (img ||item.img) );
} else {_applyZoomPanToItem(item);}
holder.el.innerHTML='';
holder.el.appendChild(baseDiv);
},
cleanSlide: function( item ) {
if(item.img ) {item.img.onload=item.img.onerror=null;}
item.loaded=item.loading=item.img=item.imageAppended=false;
}}});
var tapTimer,
tapReleasePoint={},
_dispatchTapEvent=function(origEvent, releasePoint, pointerType) {
var e=document.createEvent( 'CustomEvent' ),
eDetail={
origEvent:origEvent,
target:origEvent.target,
releasePoint: releasePoint,
pointerType:pointerType || 'touch'
};
e.initCustomEvent( 'pswpTap', true, true, eDetail );
origEvent.target.dispatchEvent(e);
};
_registerModule('Tap', {
publicMethods: {
initTap: function() {
_listen('firstTouchStart', self.onTapStart);
_listen('touchRelease', self.onTapRelease);
_listen('destroy', function() {
tapReleasePoint={};
tapTimer=null;
});},
onTapStart: function(touchList) {
if(touchList.length > 1) {
clearTimeout(tapTimer);
tapTimer=null;}},
onTapRelease: function(e, releasePoint) {
if(!releasePoint) {return;}
if(!_moved && !_isMultitouch && !_numAnimations) {
var p0=releasePoint;
if(tapTimer) {
clearTimeout(tapTimer);
tapTimer=null;
if ( _isNearbyPoints(p0, tapReleasePoint) ) {
_shout('doubleTap', p0);
return;
}}
if(releasePoint.type==='mouse') {
_dispatchTapEvent(e, releasePoint, 'mouse');
return;}
var clickedTagName=e.target.tagName.toUpperCase();
if(clickedTagName==='BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
_dispatchTapEvent(e, releasePoint);
return;}
_equalizePoints(tapReleasePoint, p0);
tapTimer=setTimeout(function() {
_dispatchTapEvent(e, releasePoint);
tapTimer=null;
}, 300);}}}});
var _wheelDelta;
_registerModule('DesktopZoom', {
publicMethods: {
initDesktopZoom: function() {
if(_oldIE) {return;}
if(_likelyTouchDevice) {
_listen('mouseUsed', function() {
self.setupDesktopZoom();
});
} else {
self.setupDesktopZoom(true);
}
},
setupDesktopZoom: function(onInit) {
_wheelDelta={};
var events='wheel mousewheel DOMMouseScroll';
_listen('bindEvents', function() {
framework.bind(template, events,  self.handleMouseWheel);
});
_listen('unbindEvents', function() {
if(_wheelDelta) {framework.unbind(template, events, self.handleMouseWheel);}
});
self.mouseZoomedIn=false;
var hasDraggingClass,
updateZoomable=function() {
if(self.mouseZoomedIn) {
framework.removeClass(template, 'pswp--zoomed-in');
self.mouseZoomedIn=false;
}
if(_currZoomLevel < 1) {framework.addClass(template, 'pswp--zoom-allowed');} else {framework.removeClass(template, 'pswp--zoom-allowed');}
removeDraggingClass();
},
removeDraggingClass=function() {if(hasDraggingClass) {framework.removeClass(template, 'pswp--dragging');hasDraggingClass=false;}};
_listen('resize' , updateZoomable);
_listen('afterChange' , updateZoomable);
_listen('pointerDown', function() {
if(self.mouseZoomedIn) {hasDraggingClass=true;framework.addClass(template, 'pswp--dragging');}
});
_listen('pointerUp', removeDraggingClass);
if(!onInit) {updateZoomable();}
},
handleMouseWheel: function(e) {
if(_currZoomLevel<=self.currItem.fitRatio) {
if( _options.modal ) {
if (!_options.closeOnScroll || _numAnimations || _isDragging) {
e.preventDefault();
} else if(_transformKey && Math.abs(e.deltaY) > 2) {
_closedByScroll=true;
self.close();}}
return true;
}
e.stopPropagation();
_wheelDelta.x=0;
if('deltaX' in e) {
if(e.deltaMode===1 ) {_wheelDelta.x=e.deltaX * 18;_wheelDelta.y=e.deltaY * 18;
} else {_wheelDelta.x=e.deltaX;_wheelDelta.y=e.deltaY;}
} else if('wheelDelta' in e) {
if(e.wheelDeltaX) {_wheelDelta.x=-0.16 * e.wheelDeltaX;}
if(e.wheelDeltaY) {_wheelDelta.y=-0.16 * e.wheelDeltaY;} else {_wheelDelta.y=-0.16 * e.wheelDelta;}
} else if('detail' in e) {_wheelDelta.y=e.detail;} else {return;}
_calculatePanBounds(_currZoomLevel, true);
var newPanX=_panOffset.x - _wheelDelta.x,
newPanY=_panOffset.y - _wheelDelta.y;
if (_options.modal ||
(
newPanX<=_currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
newPanY<=_currPanBounds.min.y && newPanY >= _currPanBounds.max.y
) ) {e.preventDefault();}
self.panTo(newPanX, newPanY);
},
toggleDesktopZoom: function(centerPoint) {
centerPoint=centerPoint || {x:_viewportSize.x/2+_offset.x, y:_viewportSize.y/2+_offset.y };
var doubleTapZoomLevel=_options.getDoubleTapZoom(true, self.currItem);
var zoomOut=_currZoomLevel===doubleTapZoomLevel;
self.mouseZoomedIn=!zoomOut;
self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
framework[ (!zoomOut ? 'add' : 'remove')+'Class'](template, 'pswp--zoomed-in');
}}});
var _historyDefaultOptions={history: true,galleryUID: 1};
var _historyUpdateTimeout,_hashChangeTimeout,_hashAnimCheckTimeout,_hashChangedByScript,_hashChangedByHistory,_hashReseted,_initialHash,_historyChanged,_closedFromURL,
_urlChangedOnce,_windowLoc,_supportsPushState,
_getHash=function() {return _windowLoc.hash.substring(1);},
_cleanHistoryTimeouts=function() {
if(_historyUpdateTimeout) {clearTimeout(_historyUpdateTimeout);}
if(_hashAnimCheckTimeout) {clearTimeout(_hashAnimCheckTimeout);}
},
_parseItemIndexFromURL=function() {var hash=_getHash(),params={};
if(hash.length < 5) {return params;}
var i, vars=hash.split('&');
for (i=0; i < vars.length; i++) {if(!vars[i]) {continue;}var pair=vars[i].split('=');if(pair.length < 2) {continue;}
params[pair[0]]=pair[1];
}
if(_options.galleryPIDs) {var searchfor=params.pid;
params.pid=0;
for(i=0; i < _items.length; i++) {
if(_items[i].pid===searchfor) {params.pid=i;
break;}}} else {params.pid=parseInt(params.pid,10)-1;}
if( params.pid < 0 ) {params.pid=0;}
return params;
},
_updateHash=function() {
if(_hashAnimCheckTimeout) {clearTimeout(_hashAnimCheckTimeout);}
if(_numAnimations || _isDragging) {_hashAnimCheckTimeout=setTimeout(_updateHash, 500);return;}
if(_hashChangedByScript) {
clearTimeout(_hashChangeTimeout);
} else {
_hashChangedByScript=true;
}
var pid=(_currentItemIndex+1);
var item=_getItemAt( _currentItemIndex );
if(item.hasOwnProperty('pid')) {
pid=item.pid;}
var newHash=_initialHash+'&' + 'gid='+_options.galleryUID+'&'+'pid='+pid;
if(!_historyChanged) {
if(_windowLoc.hash.indexOf(newHash)===-1) {_urlChangedOnce=true;}}
var newURL=_windowLoc.href.split('#')[0]+'#'+ newHash;
if( _supportsPushState ) {
if('#'+newHash !== window.location.hash) {history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);}} else {
if(_historyChanged) {
_windowLoc.replace( newURL );
} else {_windowLoc.hash=newHash;}}
_historyChanged=true;
_hashChangeTimeout=setTimeout(function() {
_hashChangedByScript=false;
}, 60);};
_registerModule('History', {
publicMethods: {initHistory: function() {framework.extend(_options, _historyDefaultOptions, true);
if( !_options.history ) {return;}
_windowLoc=window.location;
_urlChangedOnce=false;
_closedFromURL=false;
_historyChanged=false;
_initialHash=_getHash();
_supportsPushState=('pushState' in history);
if(_initialHash.indexOf('gid=') > -1) {
_initialHash=_initialHash.split('&gid=')[0];
_initialHash=_initialHash.split('?gid=')[0];
}
_listen('afterChange', self.updateURL);
_listen('unbindEvents', function() {
framework.unbind(window, 'hashchange', self.onHashChange);
});
var returnToOriginal=function() {
_hashReseted=true;
if(!_closedFromURL) {if(_urlChangedOnce) {history.back();} else {if(_initialHash) {_windowLoc.hash=_initialHash;} else {
if (_supportsPushState) {history.pushState('', document.title,  _windowLoc.pathname+_windowLoc.search );
} else {_windowLoc.hash='';}}}}
_cleanHistoryTimeouts();
};
_listen('unbindEvents', function() {if(_closedByScroll) {returnToOriginal();}});
_listen('destroy', function() {if(!_hashReseted) {returnToOriginal();}});
_listen('firstUpdate', function() {_currentItemIndex=_parseItemIndexFromURL().pid;});
var index=_initialHash.indexOf('pid=');
if(index > -1) {_initialHash=_initialHash.substring(0, index);
if(_initialHash.slice(-1)==='&') {_initialHash=_initialHash.slice(0, -1);}}
setTimeout(function() {if(_isOpen) {framework.bind(window, 'hashchange', self.onHashChange);}}, 40);},
onHashChange: function() {
if(_getHash()===_initialHash) {_closedFromURL=true;self.close();return;}
if(!_hashChangedByScript) {_hashChangedByHistory=true;
self.goTo( _parseItemIndexFromURL().pid );_hashChangedByHistory=false;}
},
updateURL: function() {
_cleanHistoryTimeouts();if(_hashChangedByHistory) {return;}
if(!_historyChanged) {_updateHash();} else {_historyUpdateTimeout=setTimeout(_updateHash, 800);}}}});
framework.extend(self, publicMethods); };
return PhotoSwipe;
});
(function (root, factory) {
if (typeof define==='function' && define.amd) {
define(factory);
} else if (typeof exports==='object') {
module.exports=factory();
} else {
root.PhotoSwipeUI_Default=factory();
}})(this, function () {
'use strict';
var PhotoSwipeUI_Default =
function(pswp, framework) {
var ui=this;
var _overlayUIUpdated=false,
_controlsVisible=true,
_fullscrenAPI,_controls,_captionContainer,_fakeCaptionContainer,_indexIndicator,_shareButton,_shareModal,_shareModalHidden=true,
_initalCloseOnScrollValue,_isIdle,_listen,_loadingIndicator,_loadingIndicatorHidden,_loadingIndicatorTimeout,_galleryHasOneSlide,
_options,_defaultUIOptions={
barsSize: {top:44, bottom:'auto'},
closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
timeToIdle: 4000,
timeToIdleOutside: 1000,
loadingIndicatorDelay: 1000, // 2s
addCaptionHTMLFn: function(item, captionEl) {
if(!item.title) {
captionEl.children[0].innerHTML='';
return false;
}
captionEl.children[0].innerHTML=item.title;
return true;
},
closeEl:true,
captionEl: true,
fullscreenEl: true,
zoomEl: true,
shareEl: true,
counterEl: true,
arrowEl: true,
preloaderEl: true,
tapToClose: false,
tapToToggleControls: true,
clickToCloseNonZoomable: true,
shareButtons: [
{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
'?url={{url}}&media={{image_url}}&description={{text}}'},
{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
],
getImageURLForShare: function( ) {
return pswp.currItem.src || '';
},
getPageURLForShare: function( ) {
return window.location.href;
},
getTextForShare: function( ) {
return pswp.currItem.title || '';
},
indexIndicatorSep: ' / ',
fitControlsWidth: 1200
},_blockControlsTap,_blockControlsTapTimeout;
var _onControlsTap=function(e) {
if(_blockControlsTap) {
return true;
}
e=e || window.event;
if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
_onIdleMouseMove();
}
var target=e.target || e.srcElement,
uiElement,
clickedClass=target.getAttribute('class') || '',
found;
for(var i=0; i < _uiElements.length; i++) {
uiElement=_uiElements[i];
if(uiElement.onTap && clickedClass.indexOf('pswp__'+uiElement.name ) > -1 ) {
uiElement.onTap();
found=true;
}
}
if(found) {
if(e.stopPropagation) {
e.stopPropagation();
}
_blockControlsTap=true;
var tapDelay=framework.features.isOldAndroid ? 600 : 30;
_blockControlsTapTimeout=setTimeout(function() {
_blockControlsTap=false;
}, tapDelay);
}
},
_fitControlsInViewport=function() {
return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
},
_togglePswpClass=function(el, cName, add) {
framework[ (add ? 'add' : 'remove')+'Class' ](el, 'pswp__'+cName);
},
_countNumItems=function() {
var hasOneSlide=(_options.getNumItemsFn()===1);
if(hasOneSlide !== _galleryHasOneSlide) {
_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
_galleryHasOneSlide=hasOneSlide;
}
},
_toggleShareModalClass=function() {
_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
},
_toggleShareModal=function() {
_shareModalHidden=!_shareModalHidden;
if(!_shareModalHidden) {
_toggleShareModalClass();
setTimeout(function() {
if(!_shareModalHidden) {
framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
}
}, 30);
} else {
framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
setTimeout(function() {
if(_shareModalHidden) {
_toggleShareModalClass();
}
}, 300);
}
if(!_shareModalHidden) {
_updateShareURLs();
}
return false;
},

_openWindowPopup=function(e) {
e=e || window.event;
var target=e.target || e.srcElement;

pswp.shout('shareLinkClick', e, target);

if(!target.href) {
return false;
}

if( target.hasAttribute('download') ) {
return true;
}

window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
'location=yes,width=550,height=420,top=100,left=' +
(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

if(!_shareModalHidden) {
_toggleShareModal();
}

return false;
},
_updateShareURLs=function() {
var shareButtonOut='',
shareButtonData,
shareURL,
image_url,
page_url,
share_text;

for(var i=0; i < _options.shareButtons.length; i++) {
shareButtonData=_options.shareButtons[i];

image_url=_options.getImageURLForShare(shareButtonData);
page_url=_options.getPageURLForShare(shareButtonData);
share_text=_options.getTextForShare(shareButtonData);

shareURL=shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
.replace('{{image_url}}', encodeURIComponent(image_url) )
.replace('{{raw_image_url}}', image_url )
.replace('{{text}}', encodeURIComponent(share_text) );

shareButtonOut+='<a href="'+shareURL+'" target="_blank" '+
'class="pswp__share--'+shareButtonData.id+'"' +
(shareButtonData.download ? 'download' : '')+'>' +
shareButtonData.label+'</a>';

if(_options.parseShareButtonOut) {
shareButtonOut=_options.parseShareButtonOut(shareButtonData, shareButtonOut);
}
}
_shareModal.children[0].innerHTML=shareButtonOut;
_shareModal.children[0].onclick=_openWindowPopup;

},
_hasCloseClass=function(target) {
for(var  i=0; i < _options.closeElClasses.length; i++) {
if( framework.hasClass(target, 'pswp__'+_options.closeElClasses[i]) ) {
return true;
}
}
},
_idleInterval,
_idleTimer,
_idleIncrement=0,
_onIdleMouseMove=function() {
clearTimeout(_idleTimer);
_idleIncrement=0;
if(_isIdle) {
ui.setIdle(false);
}},_onMouseLeaveWindow=function(e) {
e=e ? e : window.event;
var from=e.relatedTarget || e.toElement;
if (!from || from.nodeName==='HTML') {
clearTimeout(_idleTimer);
_idleTimer=setTimeout(function() {
ui.setIdle(true);
}, _options.timeToIdleOutside);
}},_setupFullscreenAPI=function() {
if(_options.fullscreenEl && !framework.features.isOldAndroid) {
if(!_fullscrenAPI) {
_fullscrenAPI=ui.getFullscreenAPI();
}if(_fullscrenAPI) {
framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
ui.updateFullscreen();
framework.addClass(pswp.template, 'pswp--supports-fs');
} else {
framework.removeClass(pswp.template, 'pswp--supports-fs');
}
}
},
_setupLoadingIndicator=function() {
if(_options.preloaderEl) {
_toggleLoadingIndicator(true);
_listen('beforeChange', function() {
clearTimeout(_loadingIndicatorTimeout);
_loadingIndicatorTimeout=setTimeout(function() {
if(pswp.currItem && pswp.currItem.loading) {
if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
_toggleLoadingIndicator(false);
}} else {_toggleLoadingIndicator(true);
}}, _options.loadingIndicatorDelay);
});
_listen('imageLoadComplete', function(index, item) {
if(pswp.currItem===item) {
_toggleLoadingIndicator(true);
}});}},_toggleLoadingIndicator=function(hide) {
if( _loadingIndicatorHidden !== hide ) {
_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
_loadingIndicatorHidden=hide;
}},_applyNavBarGaps=function(item) {
var gap=item.vGap;
if( _fitControlsInViewport() ) {
var bars=_options.barsSize;
if(_options.captionEl && bars.bottom==='auto') {
if(!_fakeCaptionContainer) {
_fakeCaptionContainer=framework.createEl('pswp__caption pswp__caption--fake');
_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
framework.addClass(_controls, 'pswp__ui--fit');
}
if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {
var captionSize=_fakeCaptionContainer.clientHeight;
gap.bottom=parseInt(captionSize,10) || 44;
} else {gap.bottom=bars.top;}} else {gap.bottom=bars.bottom==='auto' ? 0 : bars.bottom;
}gap.top=bars.top;} else {gap.top=gap.bottom=0;
}
},
_setupIdle=function() {
if(_options.timeToIdle) {
_listen('mouseUsed', function() {
framework.bind(document, 'mousemove', _onIdleMouseMove);
framework.bind(document, 'mouseout', _onMouseLeaveWindow);
_idleInterval=setInterval(function() {
_idleIncrement++;
if(_idleIncrement===2) {
ui.setIdle(true);
}}, _options.timeToIdle / 2);
});
}},
_setupHidingControlsDuringGestures=function() {
_listen('onVerticalDrag', function(now) {
if(_controlsVisible && now < 0.95) {
ui.hideControls();
} else if(!_controlsVisible && now >= 0.95) {
ui.showControls();
}
});
var pinchControlsHidden;
_listen('onPinchClose' , function(now) {
if(_controlsVisible && now < 0.9) {
ui.hideControls();
pinchControlsHidden=true;
} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
ui.showControls();
}
});
_listen('zoomGestureEnded', function() {
pinchControlsHidden=false;
if(pinchControlsHidden && !_controlsVisible) {
ui.showControls();
}});
};
var _uiElements=[
{name: 'caption',option: 'captionEl',onInit: function(el) {_captionContainer=el;}},{name: 'share-modal',option: 'shareEl',
onInit: function(el) {
_shareModal=el;
},onTap: function() {
_toggleShareModal();
}},{
name: 'button--share',
option: 'shareEl',
onInit: function(el) {
_shareButton=el;
},onTap: function() {
_toggleShareModal();
}},{
name: 'button--zoom',
option: 'zoomEl',
onTap: pswp.toggleDesktopZoom
},{
name: 'counter',
option: 'counterEl',
onInit: function(el) {
_indexIndicator=el;
}},{
name: 'button--close',
option: 'closeEl',
onTap: pswp.close
},{
name: 'button--arrow--left',
option: 'arrowEl',
onTap: pswp.prev
},{
name: 'button--arrow--right',
option: 'arrowEl',
onTap: pswp.next
},{
name: 'button--fs',
option: 'fullscreenEl',
onTap: function() {
if(_fullscrenAPI.isFullscreen()) {
_fullscrenAPI.exit();
} else {
_fullscrenAPI.enter();
}}},{
name: 'preloader',
option: 'preloaderEl',
onInit: function(el) {
_loadingIndicator=el;
}}];
var _setupUIElements=function() {
var item,
classAttr,
uiElement;
var loopThroughChildElements=function(sChildren) {
if(!sChildren) {return;}
var l=sChildren.length;
for(var i=0; i < l; i++) {
item=sChildren[i];
classAttr=item.className;
for(var a=0; a < _uiElements.length; a++) {
uiElement=_uiElements[a];
if(classAttr.indexOf('pswp__'+uiElement.name) > -1  ) {
if( _options[uiElement.option] ) {
framework.removeClass(item, 'pswp__element--disabled');
if(uiElement.onInit) {
uiElement.onInit(item);
}
} else {
framework.addClass(item, 'pswp__element--disabled');
}}}}};
loopThroughChildElements(_controls.children);
var topBar= framework.getChildByClass(_controls, 'pswp__top-bar');
if(topBar) {
loopThroughChildElements( topBar.children );
}
};
ui.init=function() {
framework.extend(pswp.options, _defaultUIOptions, true);
_options=pswp.options;
_controls=framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');
_listen=pswp.listen;
_setupHidingControlsDuringGestures();
_listen('beforeChange', ui.update);
_listen('doubleTap', function(point) {
var initialZoomLevel=pswp.currItem.initialZoomLevel;
if(pswp.getZoomLevel() !== initialZoomLevel) {
pswp.zoomTo(initialZoomLevel, point, 333);
} else {
pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
}
});
_listen('preventDragEvent', function(e, isDown, preventObj) {
var t=e.target || e.srcElement;
if(
t &&
t.getAttribute('class') && e.type.indexOf('mouse') > -1 &&
( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) )
) {
preventObj.prevent=false;
}
});
_listen('bindEvents', function() {
framework.bind(_controls, 'pswpTap click', _onControlsTap);
framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
if(!pswp.likelyTouchDevice) {
framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
}
});
_listen('unbindEvents', function() {
if(!_shareModalHidden) {
_toggleShareModal();
}
if(_idleInterval) {
clearInterval(_idleInterval);
}
framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
framework.unbind(document, 'mousemove', _onIdleMouseMove);
framework.unbind(_controls, 'pswpTap click', _onControlsTap);
framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
if(_fullscrenAPI) {
framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
if(_fullscrenAPI.isFullscreen()) {
_options.hideAnimationDuration=0;
_fullscrenAPI.exit();
}
_fullscrenAPI=null;
}
});
_listen('destroy', function() {
if(_options.captionEl) {
if(_fakeCaptionContainer) {
_controls.removeChild(_fakeCaptionContainer);
}
framework.removeClass(_captionContainer, 'pswp__caption--empty');
}
if(_shareModal) {
_shareModal.children[0].onclick=null;
}
framework.removeClass(_controls, 'pswp__ui--over-close');
framework.addClass( _controls, 'pswp__ui--hidden');
ui.setIdle(false);
});
if(!_options.showAnimationDuration) {
framework.removeClass( _controls, 'pswp__ui--hidden');
}
_listen('initialZoomIn', function() {
if(_options.showAnimationDuration) {
framework.removeClass( _controls, 'pswp__ui--hidden');
}
});
_listen('initialZoomOut', function() {
framework.addClass( _controls, 'pswp__ui--hidden');
});
_listen('parseVerticalMargin', _applyNavBarGaps);
_setupUIElements();
if(_options.shareEl && _shareButton && _shareModal) {
_shareModalHidden=true;
}
_countNumItems();
_setupIdle();
_setupFullscreenAPI();
_setupLoadingIndicator();
};
ui.setIdle=function(isIdle) {
_isIdle=isIdle;
_togglePswpClass(_controls, 'ui--idle', isIdle);
};
ui.update=function() {
if(_controlsVisible && pswp.currItem) {
ui.updateIndexIndicator();
if(_options.captionEl) {
_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);
_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
}
_overlayUIUpdated=true;
} else {
_overlayUIUpdated=false;
}
if(!_shareModalHidden) {
_toggleShareModal();
}
_countNumItems();
};
ui.updateFullscreen=function(e) {
if(e) {
setTimeout(function() {
pswp.setScrollOffset( 0, framework.getScrollY() );
}, 50);
}
framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove')+'Class' ](pswp.template, 'pswp--fs');
};

ui.updateIndexIndicator=function() {
if(_options.counterEl) {
_indexIndicator.innerHTML=(pswp.getCurrentIndex()+1) +
_options.indexIndicatorSep +
_options.getNumItemsFn();
}
};
ui.onGlobalTap=function(e) {
e=e || window.event;
var target=e.target || e.srcElement;
if(_blockControlsTap) {
return;
}
if(e.detail && e.detail.pointerType==='mouse') {
if(_hasCloseClass(target)) {
pswp.close();return;}
if(framework.hasClass(target, 'pswp__img')) {
if(pswp.getZoomLevel()===1 && pswp.getZoomLevel()<=pswp.currItem.fitRatio) {
if(_options.clickToCloseNonZoomable) {
pswp.close();
}} else {pswp.toggleDesktopZoom(e.detail.releasePoint);}}
} else {
if(_options.tapToToggleControls) {
if(_controlsVisible) {ui.hideControls();} else {ui.showControls();}}
if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
pswp.close();
return;}}};
ui.onMouseOver=function(e) {
e=e || window.event;
var target=e.target || e.srcElement;
_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
};
ui.hideControls=function() {
framework.addClass(_controls,'pswp__ui--hidden');
_controlsVisible=false;
};
ui.showControls=function() {
_controlsVisible=true;
if(!_overlayUIUpdated) {
ui.update();
}framework.removeClass(_controls,'pswp__ui--hidden');
};
ui.supportsFullscreen=function() {
var d=document;
return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
};
ui.getFullscreenAPI=function() {
var dE=document.documentElement,
api,
tF='fullscreenchange';
if (dE.requestFullscreen) {
api={
enterK: 'requestFullscreen',
exitK: 'exitFullscreen',
elementK: 'fullscreenElement',
eventK: tF
};
} else if(dE.mozRequestFullScreen ) {
api={
enterK: 'mozRequestFullScreen',
exitK: 'mozCancelFullScreen',
elementK: 'mozFullScreenElement',
eventK: 'moz'+tF
};
} else if(dE.webkitRequestFullscreen) {
api={
enterK: 'webkitRequestFullscreen',
exitK: 'webkitExitFullscreen',
elementK: 'webkitFullscreenElement',
eventK: 'webkit'+tF
};
} else if(dE.msRequestFullscreen) {
api={
enterK: 'msRequestFullscreen',
exitK: 'msExitFullscreen',
elementK: 'msFullscreenElement',
eventK: 'MSFullscreenChange'
};}
if(api) {
api.enter=function() {
_initalCloseOnScrollValue=_options.closeOnScroll;
_options.closeOnScroll=false;
if(this.enterK==='webkitRequestFullscreen') {
pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
} else {return pswp.template[this.enterK]();
}};api.exit=function() {
_options.closeOnScroll=_initalCloseOnScrollValue;
return document[this.exitK]();
};
api.isFullscreen=function() { return document[this.elementK]; };
}return api;
};};
return PhotoSwipeUI_Default;
});
/**
* Owl Carousel v2.3.4
* Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
*/
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);