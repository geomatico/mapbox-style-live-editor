(self.webpackChunkplantilla_visor_react=self.webpackChunkplantilla_visor_react||[]).push([[6690],{6690:(e,t,n)=>{!function(e){"use strict";e.defineMode("smalltalk",(function(e){var t=/[+\-\/\\*~<>=@%|&?!.,:;^]/,n=/true|false|nil|self|super|thisContext/,a=function(e,t){this.next=e,this.parent=t},i=function(e,t,n){this.name=e,this.context=t,this.eos=n},r=function(){this.context=new a(s,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};r.prototype.userIndent=function(t){this.userIndentationDelta=t>0?t/e.indentUnit-this.indentation:0};var s=function(e,r,s){var h=new i(null,r,!1),x=e.next();return'"'===x?h=o(e,new a(o,r)):"'"===x?h=l(e,new a(l,r)):"#"===x?"'"===e.peek()?(e.next(),h=u(e,new a(u,r))):e.eatWhile(/[^\s.{}\[\]()]/)?h.name="string-2":h.name="meta":"$"===x?("<"===e.next()&&(e.eatWhile(/[^\s>]/),e.next()),h.name="string-2"):"|"===x&&s.expectVariable?h.context=new a(c,r):/[\[\]{}()]/.test(x)?(h.name="bracket",h.eos=/[\[{(]/.test(x),"["===x?s.indentation++:"]"===x&&(s.indentation=Math.max(0,s.indentation-1))):t.test(x)?(e.eatWhile(t),h.name="operator",h.eos=";"!==x):/\d/.test(x)?(e.eatWhile(/[\w\d]/),h.name="number"):/[\w_]/.test(x)?(e.eatWhile(/[\w\d_]/),h.name=s.expectVariable?n.test(e.current())?"keyword":"variable":null):h.eos=s.expectVariable,h},o=function(e,t){return e.eatWhile(/[^"]/),new i("comment",e.eat('"')?t.parent:t,!0)},l=function(e,t){return e.eatWhile(/[^']/),new i("string",e.eat("'")?t.parent:t,!1)},u=function(e,t){return e.eatWhile(/[^']/),new i("string-2",e.eat("'")?t.parent:t,!1)},c=function(e,t){var n=new i(null,t,!1);return"|"===e.next()?(n.context=t.parent,n.eos=!0):(e.eatWhile(/[^|]/),n.name="variable"),n};return{startState:function(){return new r},token:function(e,t){if(t.userIndent(e.indentation()),e.eatSpace())return null;var n=t.context.next(e,t.context,t);return t.context=n.context,t.expectVariable=n.eos,n.name},blankLine:function(e){e.userIndent(0)},indent:function(t,n){var a=t.context.next===s&&n&&"]"===n.charAt(0)?-1:t.userIndentationDelta;return(t.indentation+a)*e.indentUnit},electricChars:"]"}})),e.defineMIME("text/x-stsrc",{name:"smalltalk"})}(n(4631))}}]);
//# sourceMappingURL=6690.js.map