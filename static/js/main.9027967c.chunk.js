(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(30),i=n.n(r),s=(n(40),n.p,n(41),n(12)),j=n(7),o=n(16),l=n.n(o),u="http://localhost:8080/Bank-Widgets/client/src/utils",b={getRate:function(){return l()({method:"GET",url:u+"/API/getRate.php"})},getPrice:function(e){return l()({method:"POST",url:u+"/API/getPrice.php",data:e})}},d=n(1);var h=function(e){return console.log("here",e),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(j.a.Body,{children:[Object(d.jsxs)(j.a.Title,{children:["Principle and Interest: $",e.data.principalAndInterest]}),Object(d.jsxs)(j.a.Title,{children:["Taxes: $",e.data.taxes]}),Object(d.jsxs)(j.a.Title,{children:["Home Insurance: $",e.data.homeInsurance]}),Object(d.jsxs)(j.a.Title,{children:["Mortgage Insurance: $",e.data.mortgageInsurance]})]})})})},O=n(31),x=n(17),g=n(20);var m=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(c.useState)(),m=Object(s.a)(u,2),p=m[0],f=m[1],y=Object(c.useState)(),v=Object(s.a)(y,2),P=v[0],S=v[1],T=Object(c.useState)(),I=Object(s.a)(T,2),C=I[0],k=I[1],F=Object(c.useState)(),R=Object(s.a)(F,2),w=R[0],B=R[1],L=Object(c.useState)("primary"),M=Object(s.a)(L,2),$=M[0],A=M[1],E=Object(c.useState)("secondary"),W=Object(s.a)(E,2),D=W[0],G=W[1],H=Object(c.useState)(),J=Object(s.a)(H,2),N=J[0],z=J[1],q=Object(c.useCallback)((function(){b.getRate().then((function(e){console.log("api call:",e.data),a(e.data),f(e.data/100/12)}),2e3)}),[]);return Object(c.useEffect)((function(){q()}),[q]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(O.a,{className:"d-flex justify-content-between",children:[Object(d.jsx)(x.a,{children:Object(d.jsx)(j.a,{style:{width:"18rem"},children:Object(d.jsxs)(j.a.Body,{children:[Object(d.jsxs)(j.a.Title,{children:["How much is the home you are looking to purchase?",Object(d.jsx)("input",{type:"number",onChange:function(e){return t=e.target.value,l(.2*t),B(t),void S("");var t}})]}),Object(d.jsxs)(j.a.Title,{children:["Down Payment Percentage:",Object(d.jsx)("input",{type:"number",maxLength:"2",onInput:function(e){e.target.value.length>e.target.maxLength&&(e.target.value=e.target.value.slice(0,e.target.maxLength))},onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(j.a.Title,{children:["Fixed Rate Length:",Object(d.jsx)("br",{}),Object(d.jsx)(g.a,{variant:$,style:{margin:"1rem"},onClick:function(){return k(15),A("primary"),void G("secondary")},children:"15"}),Object(d.jsx)(g.a,{variant:D,style:{margin:"1rem"},onClick:function(){return k(30),A("secondary"),void G("primary")},children:"30"})]}),Object(d.jsxs)(j.a.Title,{children:["Monthly Payment: ",P]}),Object(d.jsx)("button",{onClick:function(){var e={homePrice:w,downPayment:o,interestRate:p,fixedRate:C};b.getPrice(e).then((function(e){console.log(e.data),z(e.data)}))},children:"See Results"}),Object(d.jsxs)("p",{children:["Current Mortgage Rate: ",n,"%"]})]})})}),Object(d.jsx)(x.a,{children:N&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h,{data:N})})})]})})},p=n(32),f=n(33);var y=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.a,{className:"text-center",children:Object(d.jsx)("h1",{children:"Welcome to Gringotts Wizarding Bank!"})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(m,{})})]})},v=n(34),P=n(4);n(61);var S=function(){return Object(d.jsx)(v.a,{children:Object(d.jsxs)(P.c,{children:[Object(d.jsx)(P.a,{exact:!0,path:"/",component:y}),Object(d.jsx)(P.a,{exact:!0,path:"/home",component:y})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),T()}},[[67,1,2]]]);
//# sourceMappingURL=main.9027967c.chunk.js.map