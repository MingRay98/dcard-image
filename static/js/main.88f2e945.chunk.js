(this["webpackJsonpdcard-image"]=this["webpackJsonpdcard-image"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),i=n.n(o),s=(n(13),n(3)),c=n(4),u=n(6),d=n(5),l=n(7),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.dcard.tw/_api/forums/pet/posts?popular=true",{mode:"cors"}).then((function(e){return e.json()})).then((function(t){var n=e.state.items;n.push(t),e.setState({isLoaded:!0,items:n})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded;e.items;if(t)return a.a.createElement("div",null,"Error: ",t.message);if(n){var r=this.state.items;return a.a.createElement("div",null,r[0].map((function(e){return e.media.map((function(e){return a.a.createElement("img",{alt:"",src:e.url})}))})))}return a.a.createElement("div",null,"Loading...")}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.88f2e945.chunk.js.map