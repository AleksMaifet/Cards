(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{13:function(e,n,t){e.exports={red:"SuperButton_red__OiowA",default:"SuperButton_default__wL_k0"}},14:function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__3gQJZ",spanClassName:"SuperCheckbox_spanClassName__38bao"}},17:function(e,n,t){e.exports={range:"SuperRange_range__3pcXO"}},24:function(e,n,t){},25:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(10),s=t.n(a),j=(t(24),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))}),i=(t(25),t(7)),o=t(2),b=t(1),l=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},d=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:"NewPassPage"})})},u=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:"ProfilePage"})})},h=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:"RecoveryPage"})})},x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:"RegistrationPage"})})},O=t(6),p=t(5),g=t(9),v=t.n(g),m=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,j=e.spanClassName,i=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(v.a.error," ").concat(j||""),l="".concat(v.a.input," ").concat(a?v.a.errorInput:v.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(O.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:l},i)),a&&Object(b.jsx)("span",{className:o,children:a})]})},f=t(13),C=t.n(f),y=function(e){var n=e.red,t=e.className,c=Object(p.a)(e,["red","className"]),r="".concat(n?C.a.red:C.a.default," ").concat(t);return Object(b.jsx)("button",Object(O.a)({className:r},c))},_=t(14),N=t.n(_),P=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(N.a.checkbox," ").concat(c||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:s},a)),r&&Object(b.jsx)("span",{className:N.a.spanClassName,children:r})]})},k=function(e){var n=e.options,t=e.onChange,c=e.onChangeOption,r=Object(p.a)(e,["options","onChange","onChangeOption"]),a=n?n.map((function(e,n){return Object(b.jsx)("option",{value:e,children:e},e+"-"+n)})):[];return Object(b.jsx)("select",Object(O.a)(Object(O.a)({onChange:function(e){t&&t(e),c&&c(e.currentTarget.value)}},r),{},{children:a}))},T=function(e){e.type;var n=e.name,t=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=(Object(p.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),a&&a(e.currentTarget.value)}),j=t?t.map((function(e,t){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",onChange:s,checked:e===c,value:e,name:n}),e]},n+"-"+t)})):[];return Object(b.jsx)(b.Fragment,{children:j})},w=t(17),I=t.n(w),S=function(e){e.type;var n=e.onChange,t=e.onChangeRange,c=e.className,r=Object(p.a)(e,["type","onChange","onChangeRange","className"]),a="".concat(I.a.range," ").concat(c||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(O.a)({type:"range",onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)},className:a,value:r.value1},r))})},F=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:{marginBottom:"20px"},children:"TestPage"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(m,{})}),Object(b.jsx)("div",{children:Object(b.jsx)(y,{children:"Send"})}),Object(b.jsx)("div",{children:Object(b.jsx)(P,{})}),Object(b.jsx)("div",{children:Object(b.jsx)(k,{})}),Object(b.jsx)("div",{children:Object(b.jsx)(T,{})}),Object(b.jsx)("div",{children:Object(b.jsx)(S,{})})]})]})},B=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:"LoginPage"})})},R="/login",E="/new_pass",L="/profile",J="/recovery",K="/regist",A="/test",V=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",element:Object(b.jsx)(o.a,{to:R})}),Object(b.jsx)(o.b,{path:R,element:Object(b.jsx)(B,{})}),Object(b.jsx)(o.b,{path:E,element:Object(b.jsx)(d,{})}),Object(b.jsx)(o.b,{path:L,element:Object(b.jsx)(u,{})}),Object(b.jsx)(o.b,{path:J,element:Object(b.jsx)(h,{})}),Object(b.jsx)(o.b,{path:K,element:Object(b.jsx)(x,{})}),Object(b.jsx)(o.b,{path:A,element:Object(b.jsx)(F,{})}),Object(b.jsx)(o.b,{path:"*",element:Object(b.jsx)(l,{})})]})})},Z=function(){return Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(b.jsx)("div",{style:{margin:"20px"},children:Object(b.jsx)(i.b,{to:R,children:"login"})}),Object(b.jsx)("div",{style:{margin:"20px"},children:Object(b.jsx)(i.b,{to:E,children:"newPass"})}),Object(b.jsx)("div",{style:{margin:"20px"},children:Object(b.jsx)(i.b,{to:L,children:"profile"})}),Object(b.jsx)("div",{style:{margin:"20px"},children:Object(b.jsx)(i.b,{to:J,children:"revovery"})}),Object(b.jsx)("div",{style:{margin:"20px"},children:Object(b.jsx)(i.b,{to:K,children:"registration"})}),Object(b.jsx)("div",{style:{margin:"20px"},children:Object(b.jsx)(i.b,{to:A,children:"test"})})]})},D=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(Z,{}),Object(b.jsx)(V,{})]})},H=t(19),M=t(16),Q={},U=Object(M.a)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"":default:return e}}}),X=Object(M.b)(U);window.store=X,s.a.render(Object(b.jsx)(i.a,{children:Object(b.jsx)(H.a,{store:X,children:Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(D,{})})})}),document.getElementById("root")),j()},9:function(e,n,t){e.exports={errorInput:"SuperInputText_errorInput__1CjPV",error:"SuperInputText_error__2xhsU",superInput:"SuperInputText_superInput__3HwVZ"}}},[[33,1,2]]]);
//# sourceMappingURL=main.35cc9754.chunk.js.map