(self.webpackChunkplantilla_visor_react=self.webpackChunkplantilla_visor_react||[]).push([[7713],{7713:(t,e,n)=>{!function(t){"use strict";t.defineMode("q",(function(t){var e,n=t.indentUnit,r=new RegExp("^("+["abs","acos","aj","aj0","all","and","any","asc","asin","asof","atan","attr","avg","avgs","bin","by","ceiling","cols","cor","cos","count","cov","cross","csv","cut","delete","deltas","desc","dev","differ","distinct","div","do","each","ej","enlist","eval","except","exec","exit","exp","fby","fills","first","fkeys","flip","floor","from","get","getenv","group","gtime","hclose","hcount","hdel","hopen","hsym","iasc","idesc","if","ij","in","insert","inter","inv","key","keys","last","like","list","lj","load","log","lower","lsq","ltime","ltrim","mavg","max","maxs","mcount","md5","mdev","med","meta","min","mins","mmax","mmin","mmu","mod","msum","neg","next","not","null","or","over","parse","peach","pj","plist","prd","prds","prev","prior","rand","rank","ratios","raze","read0","read1","reciprocal","reverse","rload","rotate","rsave","rtrim","save","scan","select","set","setenv","show","signum","sin","sqrt","ss","ssr","string","sublist","sum","sums","sv","system","tables","tan","til","trim","txf","type","uj","ungroup","union","update","upper","upsert","value","var","view","views","vs","wavg","where","where","while","within","wj","wj1","wsum","xasc","xbar","xcol","xcols","xdesc","xexp","xgroup","xkey","xlog","xprev","xrank"].join("|")+")$"),o=/[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;function i(t,n){var a=t.sol(),u=t.next();if(e=null,a){if("/"==u)return(n.tokenize=s)(t,n);if("\\"==u)return t.eol()||/\s/.test(t.peek())?(t.skipToEnd(),/^\\\s*$/.test(t.current())?(n.tokenize=c)(t):n.tokenize=i,"comment"):(n.tokenize=i,"builtin")}if(/\s/.test(u))return"/"==t.peek()?(t.skipToEnd(),"comment"):"whitespace";if('"'==u)return(n.tokenize=l)(t,n);if("`"==u)return t.eatWhile(/[A-Za-z\d_:\/.]/),"symbol";if("."==u&&/\d/.test(t.peek())||/\d/.test(u)){var d=null;return t.backUp(1),t.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/)||t.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/)||t.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/)||t.match(/^\d+[ptuv]{1}/)?d="temporal":(t.match(/^0[NwW]{1}/)||t.match(/^0x[\da-fA-F]*/)||t.match(/^[01]+[b]{1}/)||t.match(/^\d+[chijn]{1}/)||t.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/))&&(d="number"),!d||(u=t.peek())&&!o.test(u)?(t.next(),"error"):d}return/[A-Za-z]|\./.test(u)?(t.eatWhile(/[A-Za-z._\d]/),r.test(t.current())?"keyword":"variable"):/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(u)||/[{}\(\[\]\)]/.test(u)?null:"error"}function s(t,e){return t.skipToEnd(),/\/\s*$/.test(t.current())?(e.tokenize=a)(t,e):e.tokenize=i,"comment"}function a(t,e){var n=t.sol()&&"\\"==t.peek();return t.skipToEnd(),n&&/^\\\s*$/.test(t.current())&&(e.tokenize=i),"comment"}function c(t){return t.skipToEnd(),"comment"}function l(t,e){for(var n,r=!1,o=!1;n=t.next();){if('"'==n&&!r){o=!0;break}r=!r&&"\\"==n}return o&&(e.tokenize=i),"string"}function u(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function d(t){t.indent=t.context.indent,t.context=t.context.prev}return{startState:function(){return{tokenize:i,context:null,indent:0,col:0}},token:function(t,n){t.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=t.indentation());var r=n.tokenize(t,n);if("comment"!=r&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==e)u(n,")",t.column());else if("["==e)u(n,"]",t.column());else if("{"==e)u(n,"}",t.column());else if(/[\]\}\)]/.test(e)){for(;n.context&&"pattern"==n.context.type;)d(n);n.context&&e==n.context.type&&d(n)}else"."==e&&n.context&&"pattern"==n.context.type?d(n):/atom|string|variable/.test(r)&&n.context&&(/[\}\]]/.test(n.context.type)?u(n,"pattern",t.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=t.column()));return r},indent:function(t,e){var r=e&&e.charAt(0),o=t.context;if(/[\]\}]/.test(r))for(;o&&"pattern"==o.type;)o=o.prev;var i=o&&r==o.type;return o?"pattern"==o.type?o.col:o.align?o.col+(i?0:1):o.indent+(i?0:n):0}}})),t.defineMIME("text/x-q","q")}(n(4631))}}]);
//# sourceMappingURL=7713.js.map