var h,aa=aa||{},m=this;function ba(a,b){a=a.split(".");b=b||m;for(var c;c=a.shift();)if(b[c])b=b[c];else return null;return b}function n(){}
function q(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function ca(a){var b=q(a);return b=="array"||b=="object"&&typeof a.length=="number"}function r(a){return typeof a=="string"}function da(a){return q(a)=="function"}function ea(a){a=q(a);return a=="object"||a=="array"||a=="function"}function s(a){if(a.hasOwnProperty&&a.hasOwnProperty(t))return a[t];a[t]||(a[t]=++ga);return a[t]}var t="closure_hashCode_"+Math.floor(Math.random()*2147483648).toString(36),ga=0;
function ha(a){var b=q(a);if(b=="object"||b=="array"){if(a.v)return a.v.call(a);b=b=="array"?[]:{};for(var c in a)b[c]=ha(a[c]);return b}return a}function ia(a,b){var c=b||m;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(c,f)}}else return function(){return a.apply(c,arguments)}}
function ja(a){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}}var ka=Date.now||function(){return+new Date};function u(a,b){function c(){}c.prototype=b.prototype;a.n=b.prototype;a.prototype=new c};var v=Array.prototype,w=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=c==null?0:c<0?Math.max(0,a.length+c):c;if(r(a)){if(!r(b)||b.length!=1)return-1;return a.indexOf(b,c)}for(c=c;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=r(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};function la(a,b){b=w(a,b);var c;if(c=b>=0)v.splice.call(a,b,1);return c}
function ma(a){if(q(a)=="array")return a.concat();else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}};var na;function y(a,b){this.x=a!==undefined?a:0;this.y=b!==undefined?b:0}y.prototype.v=function(){return new y(this.x,this.y)};y.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function z(a,b){this.width=a;this.height=b}z.prototype.v=function(){return new z(this.width,this.height)};z.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};z.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};z.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function A(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function oa(a){var b=[],c=0;for(var d in a)b[c++]=a[d];return b}function pa(a){var b=[],c=0;for(var d in a)b[c++]=d;return b}var qa=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];function ra(a){for(var b,c,d=1;d<arguments.length;d++){c=arguments[d];for(b in c)a[b]=c[b];for(var f=0;f<qa.length;f++){b=qa[f];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]}}};function sa(a,b){if(b)return a.replace(ta,"&amp;").replace(ua,"&lt;").replace(va,"&gt;").replace(wa,"&quot;");else{if(!xa.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ta,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(ua,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(va,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(wa,"&quot;");return a}}var ta=/&/g,ua=/</g,va=/>/g,wa=/\"/g,xa=/[&<>\"]/;
function ya(a,b){var c=0;a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");b=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");for(var d=Math.max(a.length,b.length),f=0;c==0&&f<d;f++){var e=a[f]||"",g=b[f]||"",i=new RegExp("(\\d*)(\\D*)","g"),j=new RegExp("(\\d*)(\\D*)","g");do{var k=i.exec(e)||["","",""],l=j.exec(g)||["","",""];if(k[0].length==0&&l[0].length==0)break;c=za(k[1].length==0?0:parseInt(k[1],10),l[1].length==0?0:parseInt(l[1],10))||za(k[2].length==0,l[2].length==0)||
za(k[2],l[2])}while(c==0)}return c}function za(a,b){if(a<b)return-1;else if(a>b)return 1;return 0}ka();var B,Aa,Ba,Ca,Da,Ea;function Fa(){return m.navigator?m.navigator.userAgent:null}function Ga(){return m.navigator}Da=Ca=Ba=Aa=B=false;var Ha;if(Ha=Fa()){var Ia=Ga();B=Ha.indexOf("Opera")==0;Aa=!B&&Ha.indexOf("MSIE")!=-1;Ca=(Ba=!B&&Ha.indexOf("WebKit")!=-1)&&Ha.indexOf("Mobile")!=-1;Da=!B&&!Ba&&Ia.product=="Gecko"}var Ja=B,C=Aa,D=Da,Ka=Ba,La=Ca,Ma=Ga();Ea=(Ma&&Ma.platform||"").indexOf("Mac")!=-1;var Na=!!Ga()&&(Ga().appVersion||"").indexOf("X11")!=-1,Oa,Pa="",Qa;
if(Ja&&m.opera){var Ra=m.opera.version;Pa=typeof Ra=="function"?Ra():Ra}else{if(D)Qa=/rv\:([^\);]+)(\)|;)/;else if(C)Qa=/MSIE\s+([^\);]+)(\)|;)/;else if(Ka)Qa=/WebKit\/(\S+)/;if(Qa){var Sa=Qa.exec(Fa());Pa=Sa?Sa[1]:""}}Oa=Pa;var Ta={};function E(a){return Ta[a]||(Ta[a]=ya(Oa,a)>=0)};function F(a){return r(a)?document.getElementById(a):a}
function Ua(a,b,c,d){d=d||a;b=b&&b!="*"?b.toLowerCase():"";if(d.querySelectorAll&&(b||c)&&(!Ka||a.compatMode=="CSS1Compat"||E("528")))return d.querySelectorAll(b+(c?"."+c:""));if(c&&d.getElementsByClassName){a=d.getElementsByClassName(c);if(b){d={};for(var f=0,e=0,g;g=a[e];e++)if(b==g.nodeName.toLowerCase())d[f++]=g;d.length=f;return d}else return a}a=d.getElementsByTagName(b||"*");if(c){d={};for(e=f=0;g=a[e];e++){b=g.className;if(typeof b.split=="function"&&w(b.split(" "),c)>=0)d[f++]=g}d.length=
f;return d}else return a}function Va(a,b){A(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in Wa)a.setAttribute(Wa[d],c);else a[d]=c})}var Wa={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"};
function Xa(a){var b=a.document;if(Ka&&!E("500")&&!La){if(typeof a.innerHeight=="undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new z(a.innerWidth,b)}a=b.compatMode=="CSS1Compat"&&(!Ja||Ja&&E("9.50"))?b.documentElement:b.body;return new z(a.clientWidth,a.clientHeight)}function Ya(a){a=!Ka&&a.compatMode=="CSS1Compat"?a.documentElement:a.body;return new y(a.scrollLeft,a.scrollTop)}function Za(){return $a(document,arguments)}
function $a(a,b){var c=b[0],d=b[1];if(C&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',sa(d.name),'"');if(d.type){c.push(' type="',sa(d.type),'"');d=ha(d);delete d.type}c.push(">");c=c.join("")}var f=a.createElement(c);if(d)if(r(d))f.className=d;else Va(f,d);if(b.length>2){d=function(g){if(g)f.appendChild(r(g)?a.createTextNode(g):g)};for(c=2;c<b.length;c++){var e=b[c];ca(e)&&!(ea(e)&&e.nodeType>0)?x(ab(e)?ma(e):e,d):d(e)}}return f}
function bb(a){return a.nodeType==9?a:a.ownerDocument||a.document}function ab(a){if(a&&typeof a.length=="number")if(ea(a))return typeof a.item=="function"||typeof a.item=="string";else if(da(a))return typeof a.item=="function";return false}function G(a){this.f=a||m.document||document}G.prototype.createElement=function(a){return this.f.createElement(a)};G.prototype.createTextNode=function(a){return this.f.createTextNode(a)};G.prototype.appendChild=function(a,b){a.appendChild(b)};function H(){}H.prototype.ma=false;H.prototype.H=function(){if(!this.ma){this.ma=true;this.e()}};H.prototype.e=function(){};function I(a,b){this.type=a;this.currentTarget=this.target=b}u(I,H);I.prototype.e=function(){delete this.type;delete this.target;delete this.currentTarget};I.prototype.B=false;I.prototype.D=true;I.prototype.preventDefault=function(){this.D=false};function J(a,b){a&&this.R(a,b)}u(J,I);var cb=[1,4,2];h=J.prototype;h.target=null;h.relatedTarget=null;h.offsetX=0;h.offsetY=0;h.clientX=0;h.clientY=0;h.screenX=0;h.screenY=0;h.button=0;h.keyCode=0;h.charCode=0;h.ctrlKey=false;h.altKey=false;h.shiftKey=false;h.metaKey=false;h.I=null;
h.R=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(D)try{b=b.nodeName&&b}catch(d){b=null}}else if(c=="mouseover")b=a.fromElement;else if(c=="mouseout")b=a.toElement;this.relatedTarget=b;this.offsetX=a.offsetX!==undefined?a.offsetX:a.layerX;this.offsetY=a.offsetY!==undefined?a.offsetY:a.layerY;this.clientX=a.clientX!==undefined?a.clientX:a.pageX;this.clientY=a.clientY!==undefined?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=
a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.I=a;delete this.D;delete this.B};var db=C&&!E("8");J.prototype.preventDefault=function(){this.D=false;var a=this.I;if(a.preventDefault)a.preventDefault();else{a.returnValue=false;if(db)try{if(a.ctrlKey||a.keyCode>=112&&a.keyCode<=123)a.keyCode=-1}catch(b){}}};
J.prototype.e=function(){J.n.e.call(this);this.relatedTarget=this.currentTarget=this.target=this.I=null};function eb(){}var fb=0;h=eb.prototype;h.key=0;h.C=false;h.ia=false;h.R=function(a,b,c,d,f,e){if(da(a))this.qa=true;else if(a&&a.handleEvent&&da(a.handleEvent))this.qa=false;else throw Error("Invalid listener argument");this.M=a;this.Aa=b;this.src=c;this.type=d;this.capture=!!f;this.ca=e;this.ia=false;this.key=++fb;this.C=false};h.handleEvent=function(a){if(this.qa)return this.M.call(this.ca||this.src,a);return this.M.handleEvent.call(this.M,a)};function K(a,b){this.xa=b;this.r=[];if(a>this.xa)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(b=0;b<a;b++)this.r.push(this.h?this.h():{})}u(K,H);K.prototype.h=null;K.prototype.la=null;function L(a){if(a.r.length)return a.r.pop();return a.h?a.h():{}}function M(a,b){a.r.length<a.xa?a.r.push(b):gb(a,b)}function gb(a,b){if(a.la)a.la(b);else if(da(b.H))b.H();else for(var c in b)delete b[c]}
K.prototype.e=function(){K.n.e.call(this);for(var a=this.r;a.length;)gb(this,a.pop());delete this.r};var hb;var ib=(hb="ScriptEngine"in m&&m.ScriptEngine()=="JScript")?m.ScriptEngineMajorVersion()+"."+m.ScriptEngineMinorVersion()+"."+m.ScriptEngineBuildVersion():"0";var jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb;
(function(){function a(){return{d:0,g:0}}function b(){return[]}function c(){function o(Cc){return g.call(o.src,o.key,Cc)}return o}function d(){return new eb}function f(){return new J}var e=hb&&!(ya(ib,"5.7")>=0),g;ob=function(o){g=o};if(e){jb=function(){return L(i)};kb=function(o){M(i,o)};lb=function(){return L(j)};mb=function(o){M(j,o)};nb=function(){return L(k)};pb=function(){M(k,c())};qb=function(){return L(l)};rb=function(o){M(l,o)};sb=function(){return L(p)};tb=function(o){M(p,o)};var i=new K(0,
600);i.h=a;var j=new K(0,600);j.h=b;var k=new K(0,600);k.h=c;var l=new K(0,600);l.h=d;var p=new K(0,600);p.h=f}else{jb=a;kb=n;lb=b;mb=n;nb=c;pb=n;qb=d;rb=n;sb=f;tb=n}})();var N={},O={},P={},ub={};
function Q(a,b,c,d,f){if(b)if(q(b)=="array"){for(var e=0;e<b.length;e++)Q(a,b[e],c,d,f);return null}else{d=!!d;var g=O;b in g||(g[b]=jb());g=g[b];if(!(d in g)){g[d]=jb();g.d++}g=g[d];var i=s(a),j;g.g++;if(g[i]){j=g[i];for(e=0;e<j.length;e++){g=j[e];if(g.M==c&&g.ca==f){if(g.C)break;return j[e].key}}}else{j=g[i]=lb();g.d++}e=nb();e.src=a;g=qb();g.R(c,e,a,b,d,f);c=g.key;e.key=c;j.push(g);N[c]=g;P[i]||(P[i]=lb());P[i].push(g);if(a.addEventListener){if(a==m||!a.ka)a.addEventListener(b,e,d)}else a.attachEvent(vb(b),
e);return c}else throw Error("Invalid event type");}function wb(a,b,c,d,f){if(q(b)=="array"){for(var e=0;e<b.length;e++)wb(a,b[e],c,d,f);return null}d=!!d;a:{e=O;if(b in e){e=e[b];if(d in e){e=e[d];a=s(a);if(e[a]){a=e[a];break a}}}a=null}if(!a)return false;for(e=0;e<a.length;e++)if(a[e].M==c&&a[e].capture==d&&a[e].ca==f)return R(a[e].key);return false}
function R(a){if(!N[a])return false;var b=N[a];if(b.C)return false;var c=b.src,d=b.type,f=b.Aa,e=b.capture;if(c.removeEventListener){if(c==m||!c.ka)c.removeEventListener(d,f,e)}else c.detachEvent&&c.detachEvent(vb(d),f);c=s(c);f=O[d][e][c];if(P[c]){var g=P[c];la(g,b);g.length==0&&delete P[c]}b.C=true;f.ya=true;xb(d,e,c,f);delete N[a];return true}
function xb(a,b,c,d){if(!d.S)if(d.ya){for(var f=0,e=0;f<d.length;f++)if(d[f].C){var g=d[f].Aa;g.src=null;pb(g);rb(d[f])}else{if(f!=e)d[e]=d[f];e++}d.length=e;d.ya=false;if(e==0){mb(d);delete O[a][b][c];O[a][b].d--;if(O[a][b].d==0){kb(O[a][b]);delete O[a][b];O[a].d--}if(O[a].d==0){kb(O[a]);delete O[a]}}}}
function yb(a,b,c){var d=0,f=a==null,e=b==null,g=c==null;c=!!c;if(f)A(P,function(j){for(var k=j.length-1;k>=0;k--){var l=j[k];if((e||b==l.type)&&(g||c==l.capture)){R(l.key);d++}}});else{a=s(a);if(P[a]){a=P[a];for(f=a.length-1;f>=0;f--){var i=a[f];if((e||b==i.type)&&(g||c==i.capture)){R(i.key);d++}}}}return d}function vb(a){if(a in ub)return ub[a];return ub[a]="on"+a}
function zb(a,b,c,d,f){var e=1;b=s(b);if(a[b]){a.g--;a=a[b];if(a.S)a.S++;else a.S=1;try{for(var g=a.length,i=0;i<g;i++){var j=a[i];if(j&&!j.C)e&=Ab(j,f)!==false}}finally{a.S--;xb(c,d,b,a)}}return Boolean(e)}function Ab(a,b){b=a.handleEvent(b);a.ia&&R(a.key);return b}
ob(function(a,b){if(!N[a])return true;a=N[a];var c=a.type,d=O;if(!(c in d))return true;d=d[c];var f,e;if(C){f=b||ba("window.event");b=true in d;var g=false in d;if(b){if(f.keyCode<0||f.returnValue!=undefined)return true;a:{var i=false;if(f.keyCode==0)try{f.keyCode=-1;break a}catch(j){i=true}if(i||f.returnValue==undefined)f.returnValue=true}}i=sb();i.R(f,this);f=true;try{if(b){for(var k=lb(),l=i.currentTarget;l;l=l.parentNode)k.push(l);e=d[true];e.g=e.d;for(var p=k.length-1;!i.B&&p>=0&&e.g;p--){i.currentTarget=
k[p];f&=zb(e,k[p],c,true,i)}if(g){e=d[false];e.g=e.d;for(p=0;!i.B&&p<k.length&&e.g;p++){i.currentTarget=k[p];f&=zb(e,k[p],c,false,i)}}}else f=Ab(a,i)}finally{if(k){k.length=0;mb(k)}i.H();tb(i)}return f}e=new J(b,this);try{f=Ab(a,e)}finally{e.H()}return f});function S(a){this.Oa=a}u(S,H);var Bb=new K(0,100);S.prototype.t=function(a,b,c,d,f){if(q(b)=="array")for(var e=0;e<b.length;e++)this.t(a,b[e],c,d,f);else{a=Q(a,b,c||this,d||false,f||this.Oa||this);if(this.a)this.a[a]=true;else if(this.J){this.a=L(Bb);this.a[this.J]=true;this.J=null;this.a[a]=true}else this.J=a}return this};S.prototype.Ba=function(){if(this.a){for(var a in this.a){R(a);delete this.a[a]}M(Bb,this.a);this.a=null}else this.J&&R(this.J)};S.prototype.e=function(){S.n.e.call(this);this.Ba()};
S.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Cb(){}u(Cb,H);h=Cb.prototype;h.ka=true;h.ea=null;h.addEventListener=function(a,b,c,d){Q(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){wb(this,a,b,c,d)};
h.dispatchEvent=function(a){a=a;if(r(a))a=new I(a,this);else if(a instanceof I)a.target=a.target||this;else{var b=a;a=new I(a.type,this);ra(a,b)}b=1;var c,d=a.type,f=O;if(d in f){f=f[d];d=true in f;var e;if(d){c=[];for(e=this;e;e=e.ea)c.push(e);e=f[true];e.g=e.d;for(var g=c.length-1;!a.B&&g>=0&&e.g;g--){a.currentTarget=c[g];b&=zb(e,c[g],a.type,true,a)&&a.D!=false}}if(false in f){e=f[false];e.g=e.d;if(d)for(g=0;!a.B&&g<c.length&&e.g;g++){a.currentTarget=c[g];b&=zb(e,c[g],a.type,false,a)&&a.D!=false}else for(c=
this;!a.B&&c&&e.g;c=c.ea){a.currentTarget=c;b&=zb(e,c,a.type,false,a)&&a.D!=false}}a=Boolean(b)}else a=true;return a};h.e=function(){Cb.n.e.call(this);yb(this);this.ea=null};function Db(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}Db.prototype.v=function(){return new Db(this.left,this.top,this.width,this.height)};Db.prototype.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};function T(a,b,c){this.target=a;this.handle=b||a;this.ua=c||new Db(NaN,NaN,NaN,NaN);this.f=bb(a);this.i=new S(this);Q(this.handle,"mousedown",this.Da,false,this)}u(T,Cb);var Eb=C||D&&E("1.9.3");h=T.prototype;h.screenX=0;h.screenY=0;h.Ea=0;h.Fa=0;h.F=0;h.G=0;h.q=true;h.k=false;h.oa=0;h.Sa=0;h.Pa=false;function Fb(a){a.preventDefault()}T.prototype.e=function(){T.n.e.call(this);wb(this.handle,"mousedown",this.Da,false,this);this.i.H();delete this.target;delete this.handle;delete this.i};
T.prototype.Da=function(a){if(this.q&&!this.k&&(a.type!="mousedown"||(C?a.type=="click"?true:!!(a.I.button&cb[0]):a.I.button==0))){if(this.oa==0){Gb(this,a);if(this.k)a.preventDefault();else return}else a.preventDefault();var b=this.f,c=b.documentElement,d=!Eb;this.i.t(b,"mousemove",this.Ta,d);this.i.t(b,"mouseup",this.O,d);if(Eb){c.setCapture(false);this.i.t(c,"losecapture",this.O)}else this.i.t(b?b.parentWindow||b.defaultView:window,"blur",this.O);C&&this.Pa&&this.i.t(b,"dragstart",Fb);this.Ya&&
this.i.t(this.Ya,"scroll",this.Wa,d);this.screenX=this.Ea=a.screenX;this.screenY=this.Fa=a.screenY;this.F=this.target.offsetLeft;this.G=this.target.offsetTop;a=this.f?new G(bb(this.f)):na||(na=new G);this.N=Ya(a.f);this.Sa=ka()}};function Gb(a,b){if(a.dispatchEvent(new Hb("start",a,b.clientX,b.clientY,b))!==false)a.k=true}
T.prototype.O=function(a,b){this.i.Ba();Eb&&this.f.releaseCapture();if(this.k){this.k=false;this.dispatchEvent(new Hb("end",this,a.clientX,a.clientY,a,Ib(this,this.F),Jb(this,this.G),b))}};
T.prototype.Ta=function(a){if(this.q){var b=a.screenX-this.screenX,c=a.screenY-this.screenY;this.screenX=a.screenX;this.screenY=a.screenY;if(!this.k){var d=this.Ea-this.screenX,f=this.Fa-this.screenY;if(d*d+f*f>this.oa){Gb(this,a);if(!this.k){this.O(a);return}}}c=Kb(this,b,c);b=c.x;c=c.y;if(this.k)if(this.dispatchEvent(new Hb("beforedrag",this,a.clientX,a.clientY,a,b,c))!==false){Lb(this,a,b,c,false);a.preventDefault()}}};
function Kb(a,b,c){var d;d=a.f?new G(bb(a.f)):na||(na=new G);d=Ya(d.f);b+=d.x-a.N.x;c+=d.y-a.N.y;a.N=d;a.F+=b;a.G+=c;return new y(Ib(a,a.F),Jb(a,a.G))}T.prototype.Wa=function(a){var b=Kb(this,0,0);a.clientX=this.N.x-this.screenX;a.clientY=this.N.x-this.screenY;Lb(this,a,b.x,b.y,true)};function Lb(a,b,c,d){a.target.style.left=c+"px";a.target.style.top=d+"px";a.dispatchEvent(new Hb("drag",a,b.clientX,b.clientY,b,c,d))}
function Ib(a,b){var c=a.ua;a=!isNaN(c.left)?c.left:null;c=!isNaN(c.width)?c.width:0;return Math.min(a!=null?a+c:Infinity,Math.max(a!=null?a:-Infinity,b))}function Jb(a,b){var c=a.ua;a=!isNaN(c.top)?c.top:null;c=!isNaN(c.height)?c.height:0;return Math.min(a!=null?a+c:Infinity,Math.max(a!=null?a:-Infinity,b))}function Hb(a,b,c,d,f,e,g,i){I.call(this,a);this.clientX=c;this.clientY=d;this.$a=f;this.left=e!==undefined?e:b.F;this.top=g!==undefined?g:b.G;this.bb=b;this.ab=!!i}u(Hb,I);function Mb(a,b,c){r(b)?Nb(a,c,b):A(b,ja(Nb,a))}function Nb(a,b,c){a.style[Ob(c)]=b}function Pb(a,b,c){var d,f=D&&(Ea||Na)&&E("1.9");if(b instanceof y){d=b.x;b=b.y}else{d=b;b=c}if(d<0){d=0;}if(b<30){b=0;}a.style.left=typeof d=="number"?(f?Math.round(d):d)+"px":d;a.style.top=typeof b=="number"?(f?Math.round(b):b)+"px":b}
function Qb(a,b,c){if(b instanceof z){c=b.height;b=b.width}else{if(c==undefined)throw Error("missing height argument");c=c}a.style.width=typeof b=="number"?Math.round(b)+"px":b;a.style.height=typeof c=="number"?Math.round(c)+"px":c}var Rb={};function Ob(a){return Rb[a]||(Rb[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};function Sb(a){if(a.tagName==="A")a.href="javascript:;"};function Tb(a,b){if(a.indexOf(b)==-1)return null;return a.split(b)[1]};function Ub(a){var b="?cb=";if(a.indexOf("?")>-1)b="&cb=";return[a,b,(new Date).getTime()].join("")};function Vb(){var a=this;a.element=Za("DIV");Mb(a.element,{position:"absolute",top:0,left:0});function b(){a.update.apply(a,arguments)}a.element.show=function(){a.update.apply(a,arguments);a.show.apply(a,arguments);Q(window,"resize",b)};a.element.l=function(){a.l.apply(a,arguments);wb(window,"resize",b)};return a.element}Vb.prototype.show=function(){this.element.style.display="block"};Vb.prototype.l=function(){this.element.style.display="none"};
Vb.prototype.update=function(){var a=this,b=Xa(window);Qb(a.element,b.width,b.height);function c(){var d=new z,f=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);if(C)f-=document.body.offsetWidth-document.body.clientWidth;d.width=f;d.height=e;Qb(a.element,d.width,d.height)}if(C){if(!window.fa)window.fa=-1;clearTimeout(window.fa);window.fa=setTimeout(c,100)}else c()};var Wb=m.window;function Xb(a){if(typeof a.P=="function")return a.P();if(r(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return oa(a)}function Yb(a,b,c){if(typeof a.forEach=="function")a.forEach(b,c);else if(ca(a)||r(a))x(a,b,c);else{var d;if(typeof a.ba=="function")d=a.ba();else if(typeof a.P!="function")if(ca(a)||r(a)){d=[];for(var f=a.length,e=0;e<f;e++)d.push(e);d=d}else d=pa(a);else d=void 0;f=Xb(a);e=f.length;for(var g=0;g<e;g++)b.call(c,f[g],d&&d[g],a)}};function U(a){this.A={};this.a=[];var b=arguments.length;if(b>1){if(b%2)throw Error("Uneven number of arguments");for(var c=0;c<b;c+=2)Zb(this,arguments[c],arguments[c+1])}else a&&this.Ja(a)}h=U.prototype;h.d=0;h.Ga=0;h.P=function(){$b(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.A[this.a[b]]);return a};h.ba=function(){$b(this);return this.a.concat()};h.clear=function(){this.A={};this.Ga=this.d=this.a.length=0};
function $b(a){if(a.d!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];if(Object.prototype.hasOwnProperty.call(a.A,d))a.a[c++]=d;b++}a.a.length=c}if(a.d!=a.a.length){var f={};for(c=b=0;b<a.a.length;){d=a.a[b];if(!Object.prototype.hasOwnProperty.call(f,d)){a.a[c++]=d;f[d]=1}b++}a.a.length=c}}function Zb(a,b,c){if(!Object.prototype.hasOwnProperty.call(a.A,b)){a.d++;a.a.push(b);a.Ga++}a.A[b]=c}
U.prototype.Ja=function(a){var b;if(a instanceof U){b=a.ba();a=a.P()}else{b=pa(a);a=oa(a)}for(var c=0;c<b.length;c++)Zb(this,b[c],a[c])};U.prototype.v=function(){return new U(this)};function ac(a){return bc(a||arguments.callee.caller,[])}
function bc(a,b){var c=[];if(w(b,a)>=0)c.push("[...circular reference...]");else if(a&&b.length<50){c.push(cc(a)+"(");for(var d=a.arguments,f=0;f<d.length;f++){f>0&&c.push(", ");var e;e=d[f];switch(typeof e){case "object":e=e?"object":"null";break;case "string":e=e;break;case "number":e=String(e);break;case "boolean":e=e?"true":"false";break;case "function":e=(e=cc(e))?e:"[fn]";break;case "undefined":default:e=typeof e;break}if(e.length>40)e=e.substr(0,40)+"...";c.push(e)}b.push(a);c.push(")\n");
try{c.push(bc(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")}function cc(a){a=String(a);if(!dc[a]){var b=/function ([^\(]+)/.exec(a);dc[a]=b?b[1]:"[Anonymous]"}return dc[a]}var dc={};function ec(a,b,c,d,f){this.gb=typeof f=="number"?f:fc++;this.hb=d||ka();this.w=a;this.fb=b;this.eb=c}ec.prototype.Ma=null;ec.prototype.La=null;var fc=0;ec.prototype.Ca=function(a){this.w=a};function V(a){this.Ua=a;this.U=null;this.Ka={};this.na=[]}V.prototype.w=null;function W(a,b){this.name=a;this.value=b}W.prototype.toString=function(){return this.name};var gc=new W("SEVERE",1E3),hc=new W("WARNING",900),ic=new W("CONFIG",700),jc=new W("FINE",500),kc=new W("FINEST",300);V.prototype.Ca=function(a){this.w=a};function lc(a,b){if(a.w)return b.value>=a.w.value;if(a.U)return lc(a.U,b);return false}V.prototype.log=function(a,b,c){lc(this,a)&&mc(this,this.Na(a,b,c))};
V.prototype.Na=function(a,b,c){var d=new ec(a,String(b),this.Ua);if(c){d.Ma=c;var f;var e=arguments.callee.caller;try{var g,i=ba("window.location.href");g=typeof c=="string"?{message:c,name:"Unknown error",lineNumber:"Not available",fileName:i,stack:"Not available"}:!c.lineNumber||!c.fileName||!c.stack?{message:c.message,name:c.name,lineNumber:c.lineNumber||c.db||"Not available",fileName:c.fileName||c.filename||c.sourceURL||i,stack:c.stack||"Not available"}:c;f="Message: "+sa(g.message)+'\nUrl: <a href="view-source:'+
g.fileName+'" target="_new">'+g.fileName+"</a>\nLine: "+g.lineNumber+"\n\nBrowser stack:\n"+sa(g.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+sa(ac(e)+"-> ")}catch(j){f="Exception trying to expose exception! You win, we lose. "+j}d.La=f}return d};function X(a,b,c){a.log(jc,b,c)}function mc(a,b){if(lc(a,b.w))for(a=a;a;){for(var c=a,d=0;d<c.na.length;d++)c.na[d](b);a=a.U}}var nc={},oc=null;function pc(a){if(!oc){oc=new V("");nc[""]=oc;oc.Ca(ic)}return a in nc?nc[a]:qc(a)}
function qc(a){var b=new V(a),c=a.split("."),d=c[c.length-1];c.length-=1;c=pc(c.join("."));c.Ka[d]=b;b.U=c;return nc[a]=b};/\uffff/.test("\uffff");function rc(){return sc()}var sc=null,tc=null,uc=null;sc=function(){var a=vc();return a?new ActiveXObject(a):new XMLHttpRequest};tc=function(){var a={};if(vc()){a[wc]=true;a[xc]=true}return a};uc=null;var wc=0,xc=1,yc=null;
function vc(){if(!yc&&typeof XMLHttpRequest=="undefined"&&typeof ActiveXObject!="undefined"){for(var a=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],b=0;b<a.length;b++){var c=a[b];try{new ActiveXObject(c);return yc=c}catch(d){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return yc};function zc(){if(D){this.p={};this.Z={};this.V=[]}}zc.prototype.c=pc("goog.net.xhrMonitor");zc.prototype.q=D;function Ac(a,b){if(a.q){var c=r(b)?b:ea(b)?s(b):"";a.c.log(kc,"Pushing context: "+b+" ("+c+")",void 0);a.V.push(c)}}function Bc(a){if(a.q){var b=a.V.pop();a.c.log(kc,"Popping context: "+b,void 0);Dc(a,b)}}function Ec(a,b){if(a.q){b=s(b);X(a.c,"Opening XHR : "+b);for(var c=0;c<a.V.length;c++){var d=a.V[c];Fc(a,a.p,d,b);Fc(a,a.Z,b,d)}}}
function Dc(a,b){var c=a.Z[b],d=a.p[b];if(c&&d){a.c.log(kc,"Updating dependent contexts",void 0);x(c,function(f){x(d,function(e){Fc(this,this.p,f,e);Fc(this,this.Z,e,f)},this)},a)}}function Fc(a,b,c,d){b[c]||(b[c]=[]);w(b[c],d)>=0||b[c].push(d)}var Y=new zc;function Z(){this.headers=new U}u(Z,Cb);h=Z.prototype;h.c=pc("goog.net.XhrIo");h.j=false;h.b=null;h.Y=null;h.ta="";h.sa="";h.K=0;h.L="";h.aa=false;h.Q=false;h.da=false;h.s=false;h.X=0;h.u=null;
h.send=function(a,b,c,d){if(this.j)throw Error("[goog.net.XhrIo] Object is active with another request");b=b||"GET";this.ta=a;this.L="";this.K=0;this.sa=b;this.aa=false;this.j=true;this.b=new rc;this.Y=uc||(uc=tc());Ec(Y,this.b);this.b.onreadystatechange=ia(this.za,this);try{X(this.c,$(this,"Opening Xhr"));this.da=true;this.b.open(b,a,true);this.da=false}catch(f){X(this.c,$(this,"Error opening Xhr: "+f.message));Gc(this,5,f);return}a=c||"";var e=this.headers.v();d&&Yb(d,function(i,j){Zb(e,j,i)});
b=="POST"&&!Object.prototype.hasOwnProperty.call(e.A,"Content-Type")&&Zb(e,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");Yb(e,function(i,j){this.b.setRequestHeader(j,i)},this);try{if(this.u){Wb.clearTimeout(this.u);this.u=null}if(this.X>0){X(this.c,$(this,"Will abort after "+this.X+"ms if incomplete"));this.u=Wb.setTimeout(ia(this.Za,this),this.X)}X(this.c,$(this,"Sending request"));this.Q=true;this.b.send(a);this.Q=false}catch(g){X(this.c,$(this,"Send error: "+g.message));Gc(this,
5,g)}};h.dispatchEvent=function(a){if(this.b){Ac(Y,this.b);try{return Z.n.dispatchEvent.call(this,a)}finally{Bc(Y)}}else return Z.n.dispatchEvent.call(this,a)};h.Za=function(){if(typeof aa!="undefined")if(this.b){this.L="Timed out after "+this.X+"ms, aborting";this.K=8;X(this.c,$(this,this.L));this.dispatchEvent("timeout");this.abort(8)}};function Gc(a,b,c){a.j=false;if(a.b){a.s=true;a.b.abort();a.s=false}a.L=c;a.K=b;Hc(a);Ic(a)}
function Hc(a){if(!a.aa){a.aa=true;a.dispatchEvent("complete");a.dispatchEvent("error")}}Z.prototype.abort=function(a){if(this.b){X(this.c,$(this,"Aborting"));this.j=false;this.s=true;this.b.abort();this.s=false;this.K=a||7;this.dispatchEvent("complete");this.dispatchEvent("abort");Ic(this)}};Z.prototype.e=function(){if(this.b){if(this.j){this.j=false;this.s=true;this.b.abort();this.s=false}Ic(this,true)}Z.n.e.call(this)};Z.prototype.za=function(){!this.da&&!this.Q&&!this.s?this.Va():Jc(this)};
Z.prototype.Va=function(){Jc(this)};
function Jc(a){if(a.j)if(typeof aa!="undefined")if(a.Y[xc]&&Kc(a)==4&&Lc(a)==2)X(a.c,$(a,"Local request error detected and ignored"));else if(a.Q&&Kc(a)==4)Wb.setTimeout(ia(a.za,a),0);else{a.dispatchEvent("readystatechange");if(Kc(a)==4){X(a.c,$(a,"Request complete"));a.j=false;var b;a:switch(Lc(a)){case 0:case 200:case 204:case 304:b=true;break a;default:b=false;break a}if(b){a.dispatchEvent("complete");a.dispatchEvent("success")}else{a.K=6;a.L=Mc(a)+" ["+Lc(a)+"]";Hc(a)}Ic(a)}}}
function Ic(a,b){if(a.b){var c=a.b,d=a.Y[wc]?n:null;a.b=null;a.Y=null;if(a.u){Wb.clearTimeout(a.u);a.u=null}if(!b){Ac(Y,c);a.dispatchEvent("ready");Bc(Y)}if(Y.q){b=s(c);X(Y.c,"Closing XHR : "+b);delete Y.Z[b];for(var f in Y.p){la(Y.p[f],b);Y.p[f].length==0&&delete Y.p[f]}}try{c.onreadystatechange=d}catch(e){a.c.log(gc,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}function Kc(a){return a.b?a.b.readyState:0}
function Lc(a){try{return Kc(a)>2?a.b.status:-1}catch(b){a.c.log(hc,"Can not get status: "+b.message,void 0);return-1}}function Mc(a){try{return Kc(a)>2?a.b.statusText:""}catch(b){X(a.c,"Can not get status: "+b.message);return""}}function $(a,b){return b+" ["+a.sa+" "+a.ta+" "+Lc(a)+"]"};function Nc(){var a=this;a.pa=false;a.Qa=false;a.ga=new Z;a.$=new Function;a.element=Za("DIV");a.wa=Za("DIV");a.element.appendChild(a.wa);Mb(a.wa,{width:"100%",height:"100%","background-repeat":"no-repeat","background-position":"center"});a.element.load=function(){a.load.apply(a,arguments)};a.element.va=function(){a.va.apply(a,arguments)};a.element.reset=function(){a.reset.apply(a,arguments)};Q(a.ga,"complete",function(){a.Ra.apply(a,arguments)});return a.element}
Nc.prototype.load=function(a,b){if(b!=undefined)this.$=b;this.ga.send(a)};Nc.prototype.va=function(a,b){this.pa=true;if(b!=undefined)this.$=b;this.ga.send(a)};Nc.prototype.Ra=function(a){var b=this;b.element.innerHTML=a.target.b?a.target.b.responseText:"";this.pa&&Oc(this);b.Qa=true;b.$(a)};function Oc(a){a=a.element.getElementsByTagName("script");if(a.length!==0)for(var b=0;b<a.length;b++)eval(a[b].innerHTML)}Nc.prototype.reset=function(){this.element.innerHTML=""};function Pc(){this.z={}}Pc.prototype.add=function(a,b){this.z[a]={element:b,hasRender:false}};function Qc(a,b){if(b===undefined)A(a.z,function(c){if(!c.hasRender){c.hasRender=true;document.body.appendChild(c.element)}});else{a.z[b].cb=true;document.body.appendChild(a.z[b].element)}}function Rc(a,b){b.show!=undefined?b.show():(b.style.display="block")}function Sc(a,b){b.show!=undefined?b.l():(b.style.display="none")}
Pc.prototype.show=function(){var a=this,b=arguments;A(a.z,function(c,d){if(b.length>0)w(b,d)>=0&&Rc(a,c.element);else Rc(a,c.element)})};Pc.prototype.l=function(){var a=this,b=arguments;A(a.z,function(c,d){if(b.length>0)w(b,d)>=0&&Sc(a,c.element);else Sc(a,c.element)})};var Tc={en:"Back Space",ja:"Back Space",fr:"Retour",de:"R\u00fcckstelltaste"},Uc={en:"Clear",ja:"Clear",fr:"Effacer",de:"L\u00f6schen"};function Vc(){var a=F("_swk"),b={};x(Tb(a.src,"?").split("&"),function(c){c=c.split("=");b[c[0]]=c[1]});return b}
function Wc(a,b){this.o=new Pc;this.Ia="overlay";this.Ha="ajax";this.Xa=new Vb;this.ha=new Nc;this.o.add(this.Ia,this.Xa);this.o.add(this.Ha,this.ha);Qc(this.o);this.o.l();this.y=this.x=0;this.lang=a;this.url=b;this.ra=false;this.target=null;this.T=new Function;this.W=null}
Wc.prototype.show=function(a){var b=this;if(this.ra){Pb(b.W,b.x,b.y);this.o.show()}else{this.o.show();this.ha.load(Ub(a),function(){Xc(b);b.W=F("_swkContainer");b.W.style.backgroundImage=["url(",b.url,"/image/swk.gif)"].join("");Pb(b.W,b.x,b.y)});this.ra=true}};Wc.prototype.l=function(){this.o.l()};
function Xc(a){var b=F("_swkDragHandle");new T(F("_swkContainer"),b);Q(F("_swkHideButton"),"click",function(){a.l()});x(Ua(document,"A","_swkKeyButton",void 0),function(c){(new Yc(c)).m=function(d){a.T(d)}});b=F("_swkBSButton");b.innerHTML=Tc[a.lang];Q(b,"click",function(){a.T(Zc)});b=F(_swkClearButton);b.innerHTML=Uc[a.lang];Q(b,"click",function(){a.T($c)})}function Yc(a){var b=this;this.key=a.innerHTML;this.m=new Function;Sb(a);Q(a,"click",function(){b.m(b.key)})}var Zc="BS",$c="Clear";
function ad(){this.target=null}ad.prototype.write=function(a){switch(a){case "&amp;":a="&";break;case "&lt;":a="<";break;case "&gt;":a=">";break}this.target.value=[this.target.value,a].join("")};ad.prototype.clear=function(){this.target.value=""};
function bd(a,b){Mb(a,{display:"inline",width:"17px",height:"17px","font-size":"1px"});this.y=this.x=0;this.target=cd(this,a.rel);this.m=new Function;var c=this;Sb(a);Q(a,"click",function(d){c.m(d)})}
function cd(a,b){if(b.indexOf("(")!=-1&&b.indexOf(")")!=-1){var c;c=b.indexOf("(")+1;var d=b.indexOf(")",c);if(d<0)d=b.length;c=b.substring(c,d);if(c.indexOf(",")!=-1){a.x=Number(c.split(",")[0]);a.y=Number(c.split(",")[1])}else a.x=a.y=Number(c);return F(b.indexOf("(")!=-1?b.split("(")[0]:null)}else return F(b)}
function dd(a,b){Mb(a,{display:"block",width:"17px",height:"17px","font-size":"1px","background-image":["url(",b,"/image/help.gif)"].join("")});this.m=new Function;var c=this;Sb(a);Q(a,"click",function(d){c.m(d)})}
Q(window,"load",function(){var a=Vc(),b=new ad,c=new Wc(a.lang,a.src);c.T=function(f){switch(f){case Zc:b.target.value=b.target.value.substring(0,b.target.value.length-1);break;case $c:b.clear();break;default:var e=b.target.getAttribute("maxlength");(b.target.value.length<e||e===null)&&b.write(f);break}};var d=Ua(document,"A","showSwkKeyboard",void 0);x(d,function(f){(new bd(f,a.src)).m=function(e){b.target=this.target;var t=this.target.getBoundingClientRect();var g=t.left+window.pageXOffset;e=t.top+window.pageYOffset+30;c.x=g;c.y=e;c.show(a.src+"/keyboard.html")}});x(Ua(document,"A","showSwkHelp",void 0),function(f){(new dd(f,a.src)).m=function(){window.open(["/general/swk/help_",a.lang,".html"].join(""))}})});