(window["webpackJsonpmonsters-gallery"]=window["webpackJsonpmonsters-gallery"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),l=n(4),i=n(6),u=n(5),m=n(7),h=(n(14),n(15),n(16),n(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=180x180")}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))},f=(n(18),function(e){var t=e.placeholder,n=e.changeHandler;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).changeHandler=function(t){e.setState({searchValue:t.target.value})},e.state={monsters:[],searchValue:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchValue,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"MonstersApp"},r.a.createElement("h1",null,"Monsters Gallery"),r.a.createElement(f,{placeholder:"E.g. Glen",changeHandler:this.changeHandler}),r.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4296c0b4.chunk.js.map