(this["webpackJsonpdcard-image"]=this["webpackJsonpdcard-image"]||[]).push([[3],{96:function(e,t,n){"use strict";n.r(t);var o=n(39),r=n(17),a=n(18),i=n(20),l=n(19),c=n(22),s=n(0),d=n.n(s),p=n(21),u={container:{display:"flex",width:"85vw",height:"90vh",flexWrap:"wrap",margin:"auto",justifyContent:"space-around",overflowY:"auto"},loading:{color:"pink",display:"flex",alignItems:"center",fontSize:"50px",fontWeight:"bold"},postContainer:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:"white",margin:"2%",borderRadius:"25px",width:"100%",":hover":{boxShadow:"-5px 9px 14px 0px black"}},postTitle:{width:"inherit",textAlign:"center",margin:"2%",color:"darkred",fontSize:"150%",fontFamily:"\u5fae\u8edf\u6b63\u9ed1\u9ad4",fontWeight:"bold",cursor:"pointer",":hover":{color:"black"},"@media only screen and (max-width: 550px)":{fontSize:"110%"}},school:{width:"fit-content",color:"black",margin:"2%",fontStyle:"italic ",fontSize:"70%",fontFamily:"inherit",fontWeight:"bold",display:"inline-flex","@media only screen and (max-width: 550px)":{fontSize:"40%"}},imageDiv:{margin:"0 0 8%",width:"auto",height:"auto",overflow:"hidden",":hover":{boxShadow:"-5px 9px 14px 0px black"},"@media only screen and (max-width: 550px)":{width:"auto",height:"auto"}},imageContainer:{width:"auto",maxWidth:"60vw",height:"auto",maxHeight:"35vh",margin:"auto",objectFit:"contain",borderRadius:"25px","@media only screen and (max-width: 550px)":{maxWidth:"60vw",maxheight:"65vh"}},postExcerpt:{margin:"0 5% 5% 5%",fontSize:"125%",fontFamily:"\u5fae\u8edf\u6b63\u9ed1\u9ad4",fontWeight:"bold","@media only screen and (max-width: 550px)":{fontSize:"95%"}}};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var h=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).getExcerpt=function(e){var t=e.target.parentElement.parentElement.parentElement.childNodes[2];console.log(t);var n=e.clientX+document.body.scrollLeft+20,o=e.clientY+document.body.scrollTop-5;t.style.left=n+"px",t.style.top=o+"px",t.style.display="block"},n.outExcerpt=function(e){e.target.parentElement.parentElement.parentElement.childNodes[2].style.display="none"},n.getDcardAPIPost=function(e){n.setState((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{items:[],error:null,loading:!0})}));var t="https://script.google.com/macros/s/AKfycbxsSAtVNsiUD1W8tVVqwhxrHesDxBJlm4aXYkEnIHKyAZRIc68s/exec?url=https://www.dcard.tw/_api/forums/".concat(e,"/posts?popular=true");"home"===e&&(t="https://script.google.com/macros/s/AKfycbxsSAtVNsiUD1W8tVVqwhxrHesDxBJlm4aXYkEnIHKyAZRIc68s/exec?url=https://www.dcard.tw/_api/posts?popular=true"),console.log(t),fetch(t,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){var t=n.state.items;t.push(e),n.setState({loading:!1,items:t})}),(function(e){n.setState({loading:!1,error:e})}))},n.loaded=function(e){e.style.background="none"},n.handleImageLoad=function(e){e.target.addEventListener("load",n.loaded(e.target)),e.target.addEventListener("error",(function(){alert("error")}))},n.getGenderStyle=function(e){var t={width:"25px",display:"inline-block",borderRadius:"50px"};return"F"===e?Object.assign(t,{background:"pink"}):Object.assign(t,{background:"blue",color:"white"}),t},n.state={error:null,loading:!0,items:[]},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.getDcardAPIPost(e.type)}},{key:"componentDidMount",value:function(){if("/"===window.location.pathname)this.getDcardAPIPost("home");else{var e=window.location.pathname.replace(/\//g,"");this.getDcardAPIPost(e)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,o=t.loading,r=t.items;return console.log(r),d.a.createElement("div",{style:u.container},o&&d.a.createElement("div",{style:u.loading},"Loading..."),!o&&this.props.type&&d.a.createElement("div",{style:u.loading},this.props.type),!o&&!this.props.type&&d.a.createElement("div",{style:u.loading},"\u5373\u6642\u71b1\u9580\u6587\u7ae0"),!o&&n&&d.a.createElement("div",null,"Error: ",n.message),!o&&!n&&r&&!r[0].error&&r[0].map((function(t){return d.a.createElement("div",{style:u.postContainer,key:t.createdAt},d.a.createElement("div",{style:u.postTitle,key:t.id,onClick:function(){return window.open("https://www.dcard.tw/f/".concat(t.forumAlias,"/p/").concat(t.id))},target:"_blank"},d.a.createElement("div",{style:e.getGenderStyle(t.gender)},t.gender),t.title,d.a.createElement("div",{style:u.school,key:"Name_"+t.id},window.innerWidth<600&&d.a.createElement("br",null),!1===t.anonymousSchool&&t.school," ",!1===t.anonymousDepartment&&t.department,d.a.createElement("div",{style:{color:"red",fontStyle:"normal"},key:"love_"+t.id}," ","\u3000"+t.likeCount," \u2764 "))),t.media.map((function(t,n){return d.a.createElement("div",{key:n+1},d.a.createElement("div",{key:t.url+n,style:u.imageDiv},d.a.createElement("a",{style:{display:"flex"},href:t.url,target:"_blank"},d.a.createElement("img",{style:u.imageContainer,alt:"",src:t.url,onLoad:function(t){return e.handleImageLoad(t)}}))))})),!1===t.withImages&&0!=t.excerpt&&d.a.createElement("div",{style:u.postExcerpt},t.excerpt,"... ",d.a.createElement("div",{style:{color:"red"},onClick:function(){return alert("\u9a19\u4f60\u7684\uff0c\u4f60\u8981\u9ede\u6a19\u984c")}},"(\u95b1\u89bd\u5168\u90e8)")))})))}}]),t}(s.Component);t.default=Object(p.a)(h)}}]);
//# sourceMappingURL=3.4f4948b9.chunk.js.map