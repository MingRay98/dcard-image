(this["webpackJsonpdcard-image"]=this["webpackJsonpdcard-image"]||[]).push([[0],{78:function(e,t,n){e.exports=n(95)},83:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(46),c=n.n(o),i=(n(83),n(40)),l=n(17),u=n(18),s=n(20),m=n(19),p=n(22),d=n(36),g=n(21),f=n(9),v=n(34),y=n(47),h=Object(y.asyncComponent)({resolve:function(){return n.e(3).then(n.bind(null,96))}}),b={container:{display:"flex",width:"100vw",height:"10vw",maxHeight:"10vh",flexWrap:"wrap",margin:"auto",fontSize:"40px",justifyContent:"center",alignItems:"center",backgroundColor:"pink",color:"midnightblue",fontWeight:"bold",boxShadow:"inset 0px 0px 7px 1px","@media only screen and (max-width: 550px)":{fontSize:"24px"}}},E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:b.container},r.a.createElement("div",null,"Dcard-Image Reader"),r.a.createElement("label",{style:{fontSize:"12px"}},r.a.createElement("input",{type:"radio",name:"color1",value:"blue"}),"\u71b1\u9580"),r.a.createElement("label",{style:{fontSize:"12px"}},r.a.createElement("input",{type:"radio",name:"color1",value:"blue"}),"\u6700\u65b0"))}}]),t}(a.Component),N=Object(g.a)(E);n(93);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).getHomePage=function(){return r.a.createElement(N,null)},n.getPages=function(){return r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/".concat(n.state.type,"/popular"),render:function(e){return r.a.createElement(h,Object.assign({},e,{type:n.state.type}))}}))},n.getTypes=function(e){n.setState((function(t){return k({},t,{type:e,redirect:!0})}))},n.openMenu=function(){console.log(n.ref),!0===n.menuOpened?(n.menuOpened=!1,n.ref.style.display="none",document.getElementById("openButton").style.display="block"):(n.menuOpened=!0,n.ref.style.display="flex",document.getElementById("openButton").style.display="none")},n.getRedirect=function(){if(n.state.redirect)return r.a.createElement(f.a,{to:"/".concat(n.state.type,"/popular")})},n.handleSubmit=function(e){e.preventDefault(),("2000"===e.target.querySelector("input").value||"sex"===e.target.querySelector("input").value)&&n.setState((function(e){return k({},e,{car:!0})}),alert("\u958b\u8eca\u6210\u529f"))},n.fbShare=function(){window.FB.ui({method:"share_open_graph",action_type:"og.shares",action_properties:JSON.stringify({object:{"og:url":"https://mingray98.github.io/dcard-image/","og:title":"OG Title","og:description":"OG Description","og:image":"https://mingray98.github.io/dcard-image/static/media/back.8613756e.png","og:image:width":"512","og:image:height":"512","og:image:type":"image/png"}})},(function(e){e&&!e.error_message?alert("successfully posted. Status id : "+e.post_id):alert("Something went error.")}))},n.getNavbar=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"openButton",className:"closeButton",style:{transform:"rotate(180deg)",left:"0px",top:"48vh",display:"none"},onClick:function(){return n.openMenu()}}),r.a.createElement("div",{className:"NavBar",ref:function(e){return n.ref=e}},r.a.createElement("div",{className:"closeButton",onClick:function(){return n.openMenu()}}),r.a.createElement("div",{className:"NavButton",style:{marginTop:"65%"},onClick:function(){return n.getTypes("pet")}},"\u5bf5\u7269"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("show_cats")}},"\u66ec\u8c93"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("meme")}},"Meme"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("travel")}},"\u65c5\u904a"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("mood")}},"\u5fc3\u60c5"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("acg")}},"\u52d5\u6f2b"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("illustration")}},"\u63d2\u756b"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("cosplay")}},"COS"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("makeup")}},"\u7f8e\u599d"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("dressup")}},"\u7a7f\u642d"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("otokonoko")}},"\u507d\u5a18"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("photography")}},"\u651d\u5f71"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("food")}},"\u98df\u7269"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("entertainer")}},"\u8ffd\u661f"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("trending")}},"\u6642\u4e8b"),r.a.createElement("div",{className:"NavButton",onClick:function(){return n.fbShare()}},"666"),n.state.car&&r.a.createElement("div",{className:"NavButton",onClick:function(){return n.getTypes("sex")}},"\u897f\u65af"),r.a.createElement("form",{onSubmit:n.handleSubmit},r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:n.state.value,onChange:n.handleChange,style:{width:"10vw",maxWidth:"80px",margin:"2%",borderRadius:"10px"}})),r.a.createElement("button",{className:"NavButton",type:"submit"},"GO"))))},n.state={type:"",redirect:!1,car:!1},n.menuOpened=!0,n.ref=null,n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"topContainer"},r.a.createElement(N,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"NavContainer"},this.getNavbar()),this.getRedirect(),this.getPages()))))}}]),t}(a.Component),C=Object(g.a)(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.c3a98d61.chunk.js.map