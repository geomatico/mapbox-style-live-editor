(self.webpackChunkplantilla_visor_react=self.webpackChunkplantilla_visor_react||[]).push([[1149],{1149:(e,t,n)=>{!function(e){"use strict";e.defineMode("shell",(function(){var t={};function n(e,n){for(var r=0;r<n.length;r++)t[n[r]]=e}var r=["true","false"],s=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],i=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function o(e,n){if(e.eatSpace())return null;var r,s=e.sol(),i=e.next();if("\\"===i)return e.next(),null;if("'"===i||'"'===i||"`"===i)return n.tokens.unshift(u(i,"`"===i?"quote":"string")),f(e,n);if("#"===i)return s&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment");if("$"===i)return n.tokens.unshift(a),f(e,n);if("+"===i||"="===i)return"operator";if("-"===i)return e.eat("-"),e.eatWhile(/\w/),"attribute";if("<"==i){if(e.match("<<"))return"operator";var o=e.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(o)return n.tokens.unshift((r=o[1],function(e,t){return e.sol()&&e.string==r&&t.tokens.shift(),e.skipToEnd(),"string-2"})),"string-2"}if(/\d/.test(i)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number";e.eatWhile(/[\w-]/);var l=e.current();return"="===e.peek()&&/\w+/.test(l)?"def":t.hasOwnProperty(l)?t[l]:null}function u(e,t){var n="("==e?")":"{"==e?"}":e;return function(r,s){for(var i,o=!1;null!=(i=r.next());){if(i===n&&!o){s.tokens.shift();break}if("$"===i&&!o&&"'"!==e&&r.peek()!=n){o=!0,r.backUp(1),s.tokens.unshift(a);break}if(!o&&e!==n&&i===e)return s.tokens.unshift(u(e,t)),f(r,s);if(!o&&/['"]/.test(i)&&!/['"]/.test(e)){s.tokens.unshift(l(i,"string")),r.backUp(1);break}o=!o&&"\\"===i}return t}}function l(e,t){return function(n,r){return r.tokens[0]=u(e,t),n.next(),f(n,r)}}e.registerHelper("hintWords","shell",r.concat(s,i)),n("atom",r),n("keyword",s),n("builtin",i);var a=function(e,t){t.tokens.length>1&&e.eat("$");var n=e.next();return/['"({]/.test(n)?(t.tokens[0]=u(n,"("==n?"quote":"{"==n?"def":"string"),f(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),"def")};function f(e,t){return(t.tokens[0]||o)(e,t)}return{startState:function(){return{tokens:[]}},token:function(e,t){return f(e,t)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}})),e.defineMIME("text/x-sh","shell"),e.defineMIME("application/x-sh","shell")}(n(4631))}}]);
//# sourceMappingURL=1149.js.map