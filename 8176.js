(self.webpackChunkplantilla_visor_react=self.webpackChunkplantilla_visor_react||[]).push([[8176],{8176:(e,t,r)=>{!function(e){"use strict";e.defineMode("haskell",(function(e,t){function r(e,t,r){return t(r),r(e,t)}var n=/[a-z_]/,a=/[A-Z]/,i=/\d/,o=/[0-9A-Fa-f]/,l=/[0-7]/,u=/[a-z_A-Z0-9'\xa1-\uffff]/,s=/[-!#$%&*+.\/<=>?@\\^|~:]/,f=/[(),;[\]`{}]/,c=/[ \t\v\f]/;function d(e,t){if(e.eatWhile(c))return null;var d=e.next();if(f.test(d)){if("{"==d&&e.eat("-")){var p="comment";return e.eat("#")&&(p="meta"),r(e,t,m(p,1))}return null}if("'"==d)return e.eat("\\"),e.next(),e.eat("'")?"string":"string error";if('"'==d)return r(e,t,h);if(a.test(d))return e.eatWhile(u),e.eat(".")?"qualifier":"variable-2";if(n.test(d))return e.eatWhile(u),"variable";if(i.test(d)){if("0"==d){if(e.eat(/[xX]/))return e.eatWhile(o),"integer";if(e.eat(/[oO]/))return e.eatWhile(l),"number"}return e.eatWhile(i),p="number",e.match(/^\.\d+/)&&(p="number"),e.eat(/[eE]/)&&(p="number",e.eat(/[-+]/),e.eatWhile(i)),p}return"."==d&&e.eat(".")?"keyword":s.test(d)?"-"==d&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(s))?(e.skipToEnd(),"comment"):(p="variable",":"==d&&(p="variable-2"),e.eatWhile(s),p):"error"}function m(e,t){return 0==t?d:function(r,n){for(var a=t;!r.eol();){var i=r.next();if("{"==i&&r.eat("-"))++a;else if("-"==i&&r.eat("}")&&0==--a)return n(d),e}return n(m(e,a)),e}}function h(e,t){for(;!e.eol();){var r=e.next();if('"'==r)return t(d),"string";if("\\"==r){if(e.eol()||e.eat(c))return t(p),"string";e.eat("&")||e.next()}}return t(d),"string error"}function p(e,t){return e.eat("\\")?r(e,t,h):(e.next(),t(d),"error")}var g=function(){var e={};function r(t){return function(){for(var r=0;r<arguments.length;r++)e[arguments[r]]=t}}r("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),r("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),r("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),r("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),r("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3");var n=t.overrideKeywords;if(n)for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a]);return e}();return{startState:function(){return{f:d}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return g.hasOwnProperty(n)?g[n]:r},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}})),e.defineMIME("text/x-haskell","haskell")}(r(4631))}}]);
//# sourceMappingURL=8176.js.map