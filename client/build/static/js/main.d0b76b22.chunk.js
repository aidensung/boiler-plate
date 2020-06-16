(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=(a(43),a(15)),i=a(2),u=a(11),s=a.n(u);var m=Object(i.f)((function(e){return Object(n.useEffect)((function(){s.a.get("/api/hello").then((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}},r.a.createElement("h2",null,"Landing Page"),r.a.createElement("button",{onClick:function(){s.a.get("/api/users/logout").then((function(t){t.data.logoutSuccess?e.history.push("/login"):alert("Failed to log out")}))}},"Logout"))})),p=a(13),d=a(7),E=a(14),f=a.n(E),h=a(19),b=a(20),g=a(9),v={LOGIN_USER:"LOGIN_USER",REGISTER_USER:"REGISTER_USER",AUTH_USER:"AUTH_USER"};function y(e){var t=s.a.post("/api/users/login",e).then((function(e){return e.data}));return{type:v.LOGIN_USER,payload:t}}function w(e){var t=s.a.post("/api/users/register",e).then((function(e){return e.data}));return{type:v.REGISTER_USER,payload:t}}function O(){var e=s.a.get("/api/users/auth").then((function(e){return e.data}));return{type:v.AUTH_USER,payload:e}}var j=Object(i.f)((function(e){var t=Object(g.b)(),a=Object(n.useState)({email:"",password:""}),l=Object(b.a)(a,2),o=l[0],c=l[1],i=o.email,u=o.password,s=function(){var a=Object(h.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),t(y(o)).then((function(t){t.payload.loginSuccess?e.history.push("/"):alert("Error")}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),m=function(e){var t=e.target,a=t.name,n=t.value;c(Object(d.a)(Object(d.a)({},o),{},Object(p.a)({},a,n)))};return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}},r.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:s},r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",type:"email",value:i,onChange:m,label:"email",required:!0}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",value:u,onChange:m,label:"email",required:!0}),r.a.createElement("br",null),r.a.createElement("button",null,"Login")))}));var S=Object(i.f)((function(e){var t=Object(g.b)(),a=Object(n.useState)({name:"",email:"",password:"",confirmPassword:""}),l=Object(b.a)(a,2),o=l[0],c=l[1],i=o.name,u=o.email,s=o.password,m=o.confirmPassword,E=function(){var a=Object(h.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),s===m){a.next=3;break}return a.abrupt("return",alert("Passwords do not match!"));case 3:t(w(o)).then((function(t){t.payload.registerSuccess?e.history.push("/login"):alert("Failed to register")}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),v=function(e){var t=e.target,a=t.name,n=t.value;c(Object(d.a)(Object(d.a)({},o),{},Object(p.a)({},a,n)))};return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}},r.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:E},r.a.createElement("label",null,"Name"),r.a.createElement("input",{name:"name",type:"text",value:i,onChange:v,label:"name",required:!0}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",type:"email",value:u,onChange:v,label:"email",required:!0}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",value:s,onChange:v,label:"email",required:!0}),r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{name:"confirmPassword",type:"password",value:m,onChange:v,label:"confirmPassword",required:!0}),r.a.createElement("br",null),r.a.createElement("button",null,"Register")))})),_=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function n(n){return Object(g.b)()(O()).then((function(e){console.log(e),e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&n.history.push("/"):t&&n.history.push("/login")})),r.a.createElement(e,null)}return n};var R=function(){return r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:_(m,null)}),r.a.createElement(i.a,{exact:!0,path:"/login",component:_(j,!1)}),r.a.createElement(i.a,{exact:!0,path:"/register",component:_(S,!1)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(10),x=a(36),I=a.n(x),T=a(37),C=Object(U.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.LOGIN_USER:return Object(d.a)(Object(d.a)({},e),{},{loginSuccess:t.payload});case v.REGISTER_USER:return Object(d.a)(Object(d.a)({},e),{},{register:t.payload});case v.AUTH_USER:return Object(d.a)(Object(d.a)({},e),{},{userData:t.payload});default:return e}}}),D=(a(71),[I.a,T.a]),L=U.a.apply(void 0,D)(U.d)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{store:L},r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.d0b76b22.chunk.js.map