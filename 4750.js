(self.webpackChunkplantilla_visor_react=self.webpackChunkplantilla_visor_react||[]).push([[4750],{4750:(e,t,n)=>{!function(e){"use strict";e.defineMode("go",(function(t){var n,r=t.indentUnit,i={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0},a={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},o=/[+\-*&^%:=<>!|\/]/;function c(e,t){var r,u=e.next();if('"'==u||"'"==u||"`"==u)return t.tokenize=(r=u,function(e,t){for(var n,i=!1,a=!1;null!=(n=e.next());){if(n==r&&!i){a=!0;break}i=!i&&"`"!=r&&"\\"==n}return(a||!i&&"`"!=r)&&(t.tokenize=c),"string"}),t.tokenize(e,t);if(/[\d\.]/.test(u))return"."==u?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==u?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(u))return n=u,null;if("/"==u){if(e.eat("*"))return t.tokenize=l,l(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(o.test(u))return e.eatWhile(o),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var f=e.current();return i.propertyIsEnumerable(f)?("case"!=f&&"default"!=f||(n="case"),"keyword"):a.propertyIsEnumerable(f)?"atom":"variable"}function l(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=c;break}r="*"==n}return"comment"}function u(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function f(e,t,n){return e.context=new u(e.indented,t,n,null,e.context)}return{startState:function(e){return{tokenize:null,context:new u((e||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context;if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"case"==r.type&&(r.type="}")),e.eatSpace())return null;n=null;var i=(t.tokenize||c)(e,t);return"comment"==i||(null==r.align&&(r.align=!0),"{"==n?f(t,e.column(),"}"):"["==n?f(t,e.column(),"]"):"("==n?f(t,e.column(),")"):"case"==n?r.type="case":("}"==n&&"}"==r.type||n==r.type)&&function(e){if(e.context.prev){var t=e.context.type;")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}}(t),t.startOfLine=!1),i},indent:function(t,n){if(t.tokenize!=c&&null!=t.tokenize)return e.Pass;var i=t.context,a=n&&n.charAt(0);if("case"==i.type&&/^(?:case|default)\b/.test(n))return t.context.type="}",i.indented;var o=a==i.type;return i.align?i.column+(o?0:1):i.indented+(o?0:r)},electricChars:"{}):",closeBrackets:"()[]{}''\"\"``",fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}})),e.defineMIME("text/x-go","go")}(n(4631))}}]);
//# sourceMappingURL=4750.js.map