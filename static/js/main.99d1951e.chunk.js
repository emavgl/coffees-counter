(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),i=(a(15),a(4)),s=a(5),l=a(7),u=a(6),m=a(8),f=a(1),d=(a(17),a(18),function(e){function t(e){var a;Object(i.a)(this,t);return(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={coffees:[{name:"Liscio",counter:0},{name:"Lungo",counter:0},{name:"Macchiato",counter:0},{name:"Brutto",counter:0},{name:"Orzo",counter:0},{name:"Macchiatone",counter:0},{name:"Orzo Macchiato",counter:0},{name:"Cappuccino",counter:0},{name:"Liscio Deca",counter:0},{name:"Lungo Deca",counter:0},{name:"Macchiato Deca",counter:0},{name:"Brutto Deca",counter:0},{name:"Cappuccino Deca",counter:0},{name:"Caff\xe8 al ginseng",counter:0},{name:"Orange Juice",counter:0}]},a.increase=a.increase.bind(Object(f.a)(Object(f.a)(a))),a.decrease=a.decrease.bind(Object(f.a)(Object(f.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"increase",value:function(e){var t=this.state.coffees.slice();t.find(function(t){return t.name===e}).counter++,this.setState({coffees:t})}},{key:"decrease",value:function(e){var t=this.state.coffees.slice();t.find(function(t){return t.name===e}).counter>0&&t.find(function(t){return t.name===e}).counter--,this.setState({coffees:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",{className:"list-group"},this.state.coffees.map(function(t){return c.a.createElement("div",{key:t.name},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:" text-center col-2 pr-0"},c.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action",onClick:function(){return e.decrease(t.name)}},c.a.createElement("span",null,"-"))),c.a.createElement("div",{className:"col-8"},c.a.createElement("li",{className:"list-group-item"},t.name,c.a.createElement("span",{className:"badge badge-primary badge-pill ml-2"},t.counter))),c.a.createElement("div",{className:"text-center col-2 pl-0"},c.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action",onClick:function(){return e.increase(t.name)}},c.a.createElement("span",null,"+")))))})))),c.a.createElement("div",{className:"row mt-3"},c.a.createElement("div",{className:"col-12 alert alert-primary"},c.a.createElement("h3",null,"Total coffees: ",this.state.coffees.reduce(function(e,t){return e+t.counter},0)),c.a.createElement("ul",null,this.state.coffees.filter(function(e){return e.counter>0}).map(function(e){return c.a.createElement("li",{key:e.name},c.a.createElement("span",null,e.name,": ",e.counter))}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20);o.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.99d1951e.chunk.js.map