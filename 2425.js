(self.webpackChunkplantilla_visor_react=self.webpackChunkplantilla_visor_react||[]).push([[2425,9047,9589],{4146:(t,e,n)=>{!function(t){"use strict";t.overlayMode=function(e,n,i){return{startState:function(){return{base:t.startState(e),overlay:t.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(i){return{base:t.copyState(e,i.base),overlay:t.copyState(n,i.overlay),basePos:i.basePos,baseCur:null,overlayPos:i.overlayPos,overlayCur:null}},token:function(t,r){return(t!=r.streamSeen||Math.min(r.basePos,r.overlayPos)<t.start)&&(r.streamSeen=t,r.basePos=r.overlayPos=t.start),t.start==r.basePos&&(r.baseCur=e.token(t,r.base),r.basePos=t.pos),t.start==r.overlayPos&&(t.pos=t.start,r.overlayCur=n.token(t,r.overlay),r.overlayPos=t.pos),t.pos=Math.min(r.basePos,r.overlayPos),null==r.overlayCur?r.baseCur:null!=r.baseCur&&r.overlay.combineTokens||i&&null==r.overlay.combineTokens?r.baseCur+" "+r.overlayCur:r.overlayCur},indent:e.indent&&function(t,n,i){return e.indent(t.base,n,i)},electricChars:e.electricChars,innerMode:function(t){return{state:t.base,mode:e}},blankLine:function(t){var r,a;return e.blankLine&&(r=e.blankLine(t.base)),n.blankLine&&(a=n.blankLine(t.overlay)),null==a?r:i&&null!=r?r+" "+a:a}}}}(n(4631))},2425:(t,e,n)=>{!function(t){"use strict";var e=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;t.defineMode("gfm",(function(n,i){var r=0;var a={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(t){return{code:t.code,codeBlock:t.codeBlock,ateSpace:t.ateSpace}},token:function(t,n){if(n.combineTokens=null,n.codeBlock)return t.match(/^```+/)?(n.codeBlock=!1,null):(t.skipToEnd(),null);if(t.sol()&&(n.code=!1),t.sol()&&t.match(/^```+/))return t.skipToEnd(),n.codeBlock=!0,null;if("`"===t.peek()){t.next();var a=t.pos;t.eatWhile("`");var o=1+t.pos-a;return n.code?o===r&&(n.code=!1):(r=o,n.code=!0),null}if(n.code)return t.next(),null;if(t.eatSpace())return n.ateSpace=!0,null;if((t.sol()||n.ateSpace)&&(n.ateSpace=!1,!1!==i.gitHubSpice)){if(t.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/))return n.combineTokens=!0,"link";if(t.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return n.combineTokens=!0,"link"}return t.match(e)&&"]("!=t.string.slice(t.start-2,t.start)&&(0==t.start||/\W/.test(t.string.charAt(t.start-1)))?(n.combineTokens=!0,"link"):(t.next(),null)},blankLine:function(t){return t.code=!1,null}},o={taskLists:!0,strikethrough:!0,emoji:!0};for(var u in i)o[u]=i[u];return o.name="markdown",t.overlayMode(t.getMode(n,o),a)}),"markdown"),t.defineMIME("text/x-gfm","gfm")}(n(4631),n(9047),n(4146))},9047:(t,e,n)=>{!function(t){"use strict";t.defineMode("markdown",(function(e,n){var i=t.getMode(e,"text/html"),r="null"==i.name;void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.taskLists&&(n.taskLists=!1),void 0===n.strikethrough&&(n.strikethrough=!1),void 0===n.emoji&&(n.emoji=!1),void 0===n.fencedCodeBlockHighlighting&&(n.fencedCodeBlockHighlighting=!0),void 0===n.fencedCodeBlockDefaultMode&&(n.fencedCodeBlockDefaultMode="text/plain"),void 0===n.xml&&(n.xml=!0),void 0===n.tokenTypeOverrides&&(n.tokenTypeOverrides={});var a={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var o in a)a.hasOwnProperty(o)&&n.tokenTypeOverrides[o]&&(a[o]=n.tokenTypeOverrides[o]);var u=/^([*\-_])(?:\s*\1){2,}\s*$/,l=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,s=/^\[(x| )\](?=\s)/i,c=n.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,m=/^ {0,3}(?:\={1,}|-{2,})\s*$/,g=/^[^#!\[\]*_\\<>` "'(~:]+/,h=/^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,d=/^\s*\[[^\]]+?\]:.*$/,f=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/;function k(t,e,n){return e.f=e.inline=n,n(t,e)}function p(t,e,n){return e.f=e.block=n,n(t,e)}function F(e){if(e.linkTitle=!1,e.linkHref=!1,e.linkText=!1,e.em=!1,e.strong=!1,e.strikethrough=!1,e.quote=0,e.indentedCode=!1,e.f==x){var n=r;if(!n){var a=t.innerMode(i,e.htmlState);n="xml"==a.mode.name&&null===a.state.tagStart&&!a.state.context&&a.state.tokenize.isInText}n&&(e.f=S,e.block=D,e.htmlState=null)}return e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.prevLine=e.thisLine,e.thisLine={stream:null},null}function D(i,r){var o,g=i.column()===r.indentation,f=!(o=r.prevLine.stream)||!/\S/.test(o.string),p=r.indentedCode,F=r.prevLine.hr,D=!1!==r.list,x=(r.listStack[r.listStack.length-1]||0)+3;r.indentedCode=!1;var C=r.indentation;if(null===r.indentationDiff&&(r.indentationDiff=r.indentation,D)){for(r.list=null;C<r.listStack[r.listStack.length-1];)r.listStack.pop(),r.listStack.length?r.indentation=r.listStack[r.listStack.length-1]:r.list=!1;!1!==r.list&&(r.indentationDiff=C-r.listStack[r.listStack.length-1])}var S=!(f||F||r.prevLine.header||D&&p||r.prevLine.fencedCodeEnd),E=(!1===r.list||F||f)&&r.indentation<=x&&i.match(u),A=null;if(r.indentationDiff>=4&&(p||r.prevLine.fencedCodeEnd||r.prevLine.header||f))return i.skipToEnd(),r.indentedCode=!0,a.code;if(i.eatSpace())return null;if(g&&r.indentation<=x&&(A=i.match(c))&&A[1].length<=6)return r.quote=0,r.header=A[1].length,r.thisLine.header=!0,n.highlightFormatting&&(r.formatting="header"),r.f=r.inline,b(r);if(r.indentation<=x&&i.eat(">"))return r.quote=g?1:r.quote+1,n.highlightFormatting&&(r.formatting="quote"),i.eatSpace(),b(r);if(!E&&!r.setext&&g&&r.indentation<=x&&(A=i.match(l))){var y=A[1]?"ol":"ul";return r.indentation=C+i.current().length,r.list=!0,r.quote=0,r.listStack.push(r.indentation),r.em=!1,r.strong=!1,r.code=!1,r.strikethrough=!1,n.taskLists&&i.match(s,!1)&&(r.taskList=!0),r.f=r.inline,n.highlightFormatting&&(r.formatting=["list","list-"+y]),b(r)}return g&&r.indentation<=x&&(A=i.match(h,!0))?(r.quote=0,r.fencedEndRE=new RegExp(A[1]+"+ *$"),r.localMode=n.fencedCodeBlockHighlighting&&function(n){if(t.findModeByName){var i=t.findModeByName(n);i&&(n=i.mime||i.mimes[0])}var r=t.getMode(e,n);return"null"==r.name?null:r}(A[2]||n.fencedCodeBlockDefaultMode),r.localMode&&(r.localState=t.startState(r.localMode)),r.f=r.block=v,n.highlightFormatting&&(r.formatting="code-block"),r.code=-1,b(r)):r.setext||!(S&&D||r.quote||!1!==r.list||r.code||E||d.test(i.string))&&(A=i.lookAhead(1))&&(A=A.match(m))?(r.setext?(r.header=r.setext,r.setext=0,i.skipToEnd(),n.highlightFormatting&&(r.formatting="header")):(r.header="="==A[0].charAt(0)?1:2,r.setext=r.header),r.thisLine.header=!0,r.f=r.inline,b(r)):E?(i.skipToEnd(),r.hr=!0,r.thisLine.hr=!0,a.hr):"["===i.peek()?k(i,r,T):k(i,r,r.inline)}function x(e,n){var a=i.token(e,n.htmlState);if(!r){var o=t.innerMode(i,n.htmlState);("xml"==o.mode.name&&null===o.state.tagStart&&!o.state.context&&o.state.tokenize.isInText||n.md_inside&&e.current().indexOf(">")>-1)&&(n.f=S,n.block=D,n.htmlState=null)}return a}function v(t,e){var i,r=e.listStack[e.listStack.length-1]||0,o=e.indentation<r,u=r+3;return e.fencedEndRE&&e.indentation<=u&&(o||t.match(e.fencedEndRE))?(n.highlightFormatting&&(e.formatting="code-block"),o||(i=b(e)),e.localMode=e.localState=null,e.block=D,e.f=S,e.fencedEndRE=null,e.code=0,e.thisLine.fencedCodeEnd=!0,o?p(t,e,e.block):i):e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),a.code)}function b(t){var e=[];if(t.formatting){e.push(a.formatting),"string"==typeof t.formatting&&(t.formatting=[t.formatting]);for(var i=0;i<t.formatting.length;i++)e.push(a.formatting+"-"+t.formatting[i]),"header"===t.formatting[i]&&e.push(a.formatting+"-"+t.formatting[i]+"-"+t.header),"quote"===t.formatting[i]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=t.quote?e.push(a.formatting+"-"+t.formatting[i]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(t.linkHref?e.push(a.linkHref,"url"):(t.strong&&e.push(a.strong),t.em&&e.push(a.em),t.strikethrough&&e.push(a.strikethrough),t.emoji&&e.push(a.emoji),t.linkText&&e.push(a.linkText),t.code&&e.push(a.code),t.image&&e.push(a.image),t.imageAltText&&e.push(a.imageAltText,"link"),t.imageMarker&&e.push(a.imageMarker)),t.header&&e.push(a.header,a.header+"-"+t.header),t.quote&&(e.push(a.quote),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=t.quote?e.push(a.quote+"-"+t.quote):e.push(a.quote+"-"+n.maxBlockquoteDepth)),!1!==t.list){var r=(t.listStack.length-1)%3;r?1===r?e.push(a.list2):e.push(a.list3):e.push(a.list1)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function C(t,e){if(t.match(g,!0))return b(e)}function S(e,r){var o=r.text(e,r);if(void 0!==o)return o;if(r.list)return r.list=null,b(r);if(r.taskList)return" "===e.match(s,!0)[1]?r.taskOpen=!0:r.taskClosed=!0,n.highlightFormatting&&(r.formatting="task"),r.taskList=!1,b(r);if(r.taskOpen=!1,r.taskClosed=!1,r.header&&e.match(/^#+$/,!0))return n.highlightFormatting&&(r.formatting="header"),b(r);var u=e.next();if(r.linkTitle){r.linkTitle=!1;var l=u;"("===u&&(l=")");var c="^\\s*(?:[^"+(l=(l+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1"))+"\\\\]+|\\\\\\\\|\\\\.)"+l;if(e.match(new RegExp(c),!0))return a.linkHref}if("`"===u){var m=r.formatting;n.highlightFormatting&&(r.formatting="code"),e.eatWhile("`");var g=e.current().length;if(0!=r.code||r.quote&&1!=g){if(g==r.code){var h=b(r);return r.code=0,h}return r.formatting=m,b(r)}return r.code=g,b(r)}if(r.code)return b(r);if("\\"===u&&(e.next(),n.highlightFormatting)){var d=b(r),k=a.formatting+"-escape";return d?d+" "+k:k}if("!"===u&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return r.imageMarker=!0,r.image=!0,n.highlightFormatting&&(r.formatting="image"),b(r);if("["===u&&r.imageMarker&&e.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return r.imageMarker=!1,r.imageAltText=!0,n.highlightFormatting&&(r.formatting="image"),b(r);if("]"===u&&r.imageAltText){n.highlightFormatting&&(r.formatting="image");d=b(r);return r.imageAltText=!1,r.image=!1,r.inline=r.f=A,d}if("["===u&&!r.image)return r.linkText&&e.match(/^.*?\]/)||(r.linkText=!0,n.highlightFormatting&&(r.formatting="link")),b(r);if("]"===u&&r.linkText){n.highlightFormatting&&(r.formatting="link");d=b(r);return r.linkText=!1,r.inline=r.f=e.match(/\(.*?\)| ?\[.*?\]/,!1)?A:S,d}if("<"===u&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=E,n.highlightFormatting&&(r.formatting="link"),(d=b(r))?d+=" ":d="",d+a.linkInline;if("<"===u&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=E,n.highlightFormatting&&(r.formatting="link"),(d=b(r))?d+=" ":d="",d+a.linkEmail;if(n.xml&&"<"===u&&e.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var F=e.string.indexOf(">",e.pos);if(-1!=F){var D=e.string.substring(e.start,F);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(D)&&(r.md_inside=!0)}return e.backUp(1),r.htmlState=t.startState(i),p(e,r,x)}if(n.xml&&"<"===u&&e.match(/^\/\w*?>/))return r.md_inside=!1,"tag";if("*"===u||"_"===u){for(var v=1,C=1==e.pos?" ":e.string.charAt(e.pos-2);v<3&&e.eat(u);)v++;var y=e.peek()||" ",T=!/\s/.test(y)&&(!f.test(y)||/\s/.test(C)||f.test(C)),w=!/\s/.test(C)&&(!f.test(C)||/\s/.test(y)||f.test(y)),M=null,B=null;if(v%2&&(r.em||!T||"*"!==u&&w&&!f.test(C)?r.em!=u||!w||"*"!==u&&T&&!f.test(y)||(M=!1):M=!0),v>1&&(r.strong||!T||"*"!==u&&w&&!f.test(C)?r.strong!=u||!w||"*"!==u&&T&&!f.test(y)||(B=!1):B=!0),null!=B||null!=M)return n.highlightFormatting&&(r.formatting=null==M?"strong":null==B?"em":"strong em"),!0===M&&(r.em=u),!0===B&&(r.strong=u),h=b(r),!1===M&&(r.em=!1),!1===B&&(r.strong=!1),h}else if(" "===u&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return b(r);e.backUp(1)}if(n.strikethrough)if("~"===u&&e.eatWhile(u)){if(r.strikethrough)return n.highlightFormatting&&(r.formatting="strikethrough"),h=b(r),r.strikethrough=!1,h;if(e.match(/^[^\s]/,!1))return r.strikethrough=!0,n.highlightFormatting&&(r.formatting="strikethrough"),b(r)}else if(" "===u&&e.match("~~",!0)){if(" "===e.peek())return b(r);e.backUp(2)}if(n.emoji&&":"===u&&e.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){r.emoji=!0,n.highlightFormatting&&(r.formatting="emoji");var L=b(r);return r.emoji=!1,L}return" "===u&&(e.match(/^ +$/,!1)?r.trailingSpace++:r.trailingSpace&&(r.trailingSpaceNewLine=!0)),b(r)}function E(t,e){if(">"===t.next()){e.f=e.inline=S,n.highlightFormatting&&(e.formatting="link");var i=b(e);return i?i+=" ":i="",i+a.linkInline}return t.match(/^[^>]+/,!0),a.linkInline}function A(t,e){if(t.eatSpace())return null;var i,r=t.next();return"("===r||"["===r?(e.f=e.inline=(i="("===r?")":"]",function(t,e){if(t.next()===i){e.f=e.inline=S,n.highlightFormatting&&(e.formatting="link-string");var r=b(e);return e.linkHref=!1,r}return t.match(y[i]),e.linkHref=!0,b(e)}),n.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,b(e)):"error"}var y={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/};function T(t,e){return t.match(/^([^\]\\]|\\.)*\]:/,!1)?(e.f=w,t.next(),n.highlightFormatting&&(e.formatting="link"),e.linkText=!0,b(e)):k(t,e,S)}function w(t,e){if(t.match("]:",!0)){e.f=e.inline=M,n.highlightFormatting&&(e.formatting="link");var i=b(e);return e.linkText=!1,i}return t.match(/^([^\]\\]|\\.)+/,!0),a.linkText}function M(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,!0),e.f=e.inline=S,a.linkHref+" url")}var B={startState:function(){return{f:D,prevLine:{stream:null},thisLine:{stream:null},block:D,htmlState:null,indentation:0,inline:S,text:C,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(e){return{f:e.f,prevLine:e.prevLine,thisLine:e.thisLine,block:e.block,htmlState:e.htmlState&&t.copyState(i,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkText:e.linkText,linkTitle:e.linkTitle,linkHref:e.linkHref,code:e.code,em:e.em,strong:e.strong,strikethrough:e.strikethrough,emoji:e.emoji,header:e.header,setext:e.setext,hr:e.hr,taskList:e.taskList,list:e.list,listStack:e.listStack.slice(0),quote:e.quote,indentedCode:e.indentedCode,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside,fencedEndRE:e.fencedEndRE}},token:function(t,e){if(e.formatting=!1,t!=e.thisLine.stream){if(e.header=0,e.hr=!1,t.match(/^\s*$/,!0))return F(e),null;if(e.prevLine=e.thisLine,e.thisLine={stream:t},e.taskList=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,!e.localState&&(e.f=e.block,e.f!=x)){var n=t.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length;if(e.indentation=n,e.indentationDiff=null,n>0)return null}}return e.f(t,e)},innerMode:function(t){return t.block==x?{state:t.htmlState,mode:i}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:B}},indent:function(e,n,r){return e.block==x&&i.indent?i.indent(e.htmlState,n,r):e.localState&&e.localMode.indent?e.localMode.indent(e.localState,n,r):t.Pass},blankLine:F,getType:b,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return B}),"xml"),t.defineMIME("text/markdown","markdown"),t.defineMIME("text/x-markdown","markdown")}(n(4631),n(9589),n(2539))},9589:(t,e,n)=>{!function(t){"use strict";var e={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};t.defineMode("xml",(function(i,r){var a,o,u=i.indentUnit,l={},s=r.htmlMode?e:n;for(var c in s)l[c]=s[c];for(var c in r)l[c]=r[c];function m(t,e){function n(n){return e.tokenize=n,n(t,e)}var i=t.next();return"<"==i?t.eat("!")?t.eat("[")?t.match("CDATA[")?n(h("atom","]]>")):null:t.match("--")?n(h("comment","--\x3e")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),n(d(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),e.tokenize=h("meta","?>"),"meta"):(a=t.eat("/")?"closeTag":"openTag",e.tokenize=g,"tag bracket"):"&"==i?(t.eat("#")?t.eat("x")?t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):t.eatWhile(/[\d]/)&&t.eat(";"):t.eatWhile(/[\w\.\-:]/)&&t.eat(";"))?"atom":"error":(t.eatWhile(/[^&<]/),null)}function g(t,e){var n,i,r=t.next();if(">"==r||"/"==r&&t.eat(">"))return e.tokenize=m,a=">"==r?"endTag":"selfcloseTag","tag bracket";if("="==r)return a="equals",null;if("<"==r){e.tokenize=m,e.state=F,e.tagName=e.tagStart=null;var o=e.tokenize(t,e);return o?o+" tag error":"tag error"}return/[\'\"]/.test(r)?(e.tokenize=(n=r,(i=function(t,e){for(;!t.eol();)if(t.next()==n){e.tokenize=g;break}return"string"}).isInAttribute=!0,i),e.stringStartCol=t.column(),e.tokenize(t,e)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function h(t,e){return function(n,i){for(;!n.eol();){if(n.match(e)){i.tokenize=m;break}n.next()}return t}}function d(t){return function(e,n){for(var i;null!=(i=e.next());){if("<"==i)return n.tokenize=d(t+1),n.tokenize(e,n);if(">"==i){if(1==t){n.tokenize=m;break}return n.tokenize=d(t-1),n.tokenize(e,n)}}return"meta"}}function f(t,e,n){this.prev=t.context,this.tagName=e||"",this.indent=t.indented,this.startOfLine=n,(l.doNotIndent.hasOwnProperty(e)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function k(t){t.context&&(t.context=t.context.prev)}function p(t,e){for(var n;;){if(!t.context)return;if(n=t.context.tagName,!l.contextGrabbers.hasOwnProperty(n)||!l.contextGrabbers[n].hasOwnProperty(e))return;k(t)}}function F(t,e,n){return"openTag"==t?(n.tagStart=e.column(),D):"closeTag"==t?x:F}function D(t,e,n){return"word"==t?(n.tagName=e.current(),o="tag",C):l.allowMissingTagName&&"endTag"==t?(o="tag bracket",C(t,0,n)):(o="error",D)}function x(t,e,n){if("word"==t){var i=e.current();return n.context&&n.context.tagName!=i&&l.implicitlyClosed.hasOwnProperty(n.context.tagName)&&k(n),n.context&&n.context.tagName==i||!1===l.matchClosing?(o="tag",v):(o="tag error",b)}return l.allowMissingTagName&&"endTag"==t?(o="tag bracket",v(t,0,n)):(o="error",b)}function v(t,e,n){return"endTag"!=t?(o="error",v):(k(n),F)}function b(t,e,n){return o="error",v(t,0,n)}function C(t,e,n){if("word"==t)return o="attribute",S;if("endTag"==t||"selfcloseTag"==t){var i=n.tagName,r=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==t||l.autoSelfClosers.hasOwnProperty(i)?p(n,i):(p(n,i),n.context=new f(n,i,r==n.indented)),F}return o="error",C}function S(t,e,n){return"equals"==t?E:(l.allowMissing||(o="error"),C(t,0,n))}function E(t,e,n){return"string"==t?A:"word"==t&&l.allowUnquoted?(o="string",C):(o="error",C(t,0,n))}function A(t,e,n){return"string"==t?A:C(t,0,n)}return m.isInText=!0,{startState:function(t){var e={tokenize:m,state:F,indented:t||0,tagName:null,tagStart:null,context:null};return null!=t&&(e.baseIndent=t),e},token:function(t,e){if(!e.tagName&&t.sol()&&(e.indented=t.indentation()),t.eatSpace())return null;a=null;var n=e.tokenize(t,e);return(n||a)&&"comment"!=n&&(o=null,e.state=e.state(a||n,t,e),o&&(n="error"==o?n+" error":o)),n},indent:function(e,n,i){var r=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+u;if(r&&r.noIndent)return t.Pass;if(e.tokenize!=g&&e.tokenize!=m)return i?i.match(/^(\s*)/)[0].length:0;if(e.tagName)return!1!==l.multilineTagIndentPastTag?e.tagStart+e.tagName.length+2:e.tagStart+u*(l.multilineTagIndentFactor||1);if(l.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var a=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(a&&a[1])for(;r;){if(r.tagName==a[2]){r=r.prev;break}if(!l.implicitlyClosed.hasOwnProperty(r.tagName))break;r=r.prev}else if(a)for(;r;){var o=l.contextGrabbers[r.tagName];if(!o||!o.hasOwnProperty(a[2]))break;r=r.prev}for(;r&&r.prev&&!r.startOfLine;)r=r.prev;return r?r.indent+u:e.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:l.htmlMode?"html":"xml",helperType:l.htmlMode?"html":"xml",skipAttribute:function(t){t.state==E&&(t.state=C)},xmlCurrentTag:function(t){return t.tagName?{name:t.tagName,close:"closeTag"==t.type}:null},xmlCurrentContext:function(t){for(var e=[],n=t.context;n;n=n.prev)e.push(n.tagName);return e.reverse()}}})),t.defineMIME("text/xml","xml"),t.defineMIME("application/xml","xml"),t.mimeModes.hasOwnProperty("text/html")||t.defineMIME("text/html",{name:"xml",htmlMode:!0})}(n(4631))}}]);
//# sourceMappingURL=2425.js.map