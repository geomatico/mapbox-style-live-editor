(self.webpackChunkplantilla_visor_react=self.webpackChunkplantilla_visor_react||[]).push([[7922],{7922:(e,t,n)=>{!function(e){"use strict";function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}e.defineMode("asn.1",(function(e,t){var n,r=e.indentUnit,i=t.keywords||{},a=t.cmipVerbs||{},s=t.compareTypes||{},E=t.status||{},o=t.tags||{},I=t.storage||{},T=t.modifier||{},l=t.accessTypes||{},S=t.multiLineStrings,u=!1!==t.indentStatements,c=/[\|\^]/;function A(e,t){var r,u=e.next();if('"'==u||"'"==u)return t.tokenize=(r=u,function(e,t){for(var n,i=!1,a=!1;null!=(n=e.next());){if(n==r&&!i){var s=e.peek();s&&("b"!=(s=s.toLowerCase())&&"h"!=s&&"o"!=s||e.next()),a=!0;break}i=!i&&"\\"==n}return(a||!i&&!S)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(/[\[\]\(\){}:=,;]/.test(u))return n=u,"punctuation";if("-"==u&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if(c.test(u))return e.eatWhile(c),"operator";e.eatWhile(/[\w\-]/);var A=e.current();return i.propertyIsEnumerable(A)?"keyword":a.propertyIsEnumerable(A)?"variable cmipVerbs":s.propertyIsEnumerable(A)?"atom compareTypes":E.propertyIsEnumerable(A)?"comment status":o.propertyIsEnumerable(A)?"variable-3 tags":I.propertyIsEnumerable(A)?"builtin storage":T.propertyIsEnumerable(A)?"string-2 modifier":l.propertyIsEnumerable(A)?"atom accessTypes":"variable"}function p(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function N(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new p(r,t,n,null,e.context)}function O(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new p((e||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context;if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;n=null;var i=(t.tokenize||A)(e,t);if("comment"==i)return i;if(null==r.align&&(r.align=!0),";"!=n&&":"!=n&&","!=n||"statement"!=r.type)if("{"==n)N(t,e.column(),"}");else if("["==n)N(t,e.column(),"]");else if("("==n)N(t,e.column(),")");else if("}"==n){for(;"statement"==r.type;)r=O(t);for("}"==r.type&&(r=O(t));"statement"==r.type;)r=O(t)}else n==r.type?O(t):u&&(("}"==r.type||"top"==r.type)&&";"!=n||"statement"==r.type&&"newstatement"==n)&&N(t,e.column(),"statement");else O(t);return t.startOfLine=!1,i},electricChars:"{}",lineComment:"--",fold:"brace"}})),e.defineMIME("text/x-ttcn-asn",{name:"asn.1",keywords:t("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:t("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:t("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:t("current deprecated mandatory obsolete"),tags:t("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:t("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:t("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:t("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0})}(n(4631))}}]);
//# sourceMappingURL=7922.js.map