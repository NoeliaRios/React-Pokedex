(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},121:function(e,t,c){},123:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},255:function(e,t,c){},257:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(29),s=c.n(r),i=(c(118),c(119),c(5)),l=c.n(i),j=c(14),o=c(9),b=c(22),d=(c(121),c(0));var u=function(e){var t=e.pokemon;return Object(d.jsxs)("div",{className:"card-body-wrapper",children:[Object(d.jsxs)("div",{className:"card-name",children:[Object(d.jsx)("h4",{children:t.name}),Object(d.jsxs)("span",{children:["#",t.id]})]}),Object(d.jsx)("div",{className:"card-img",children:Object(d.jsx)("div",{className:"sprite-wrapper",children:Object(d.jsx)("img",{className:"sprite_img",src:t.sprites.other["official-artwork"].front_default,alt:""})})})]})},p=c(272),h=(c(123),c.p+"static/media/pokeball.e57f7ae6.svg");var x=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{container:!0,direction:"row",alignItems:"center",justify:"center",className:"nav-wrapper",children:Object(d.jsxs)(b.b,{to:"/",className:"logo-link",children:[Object(d.jsx)(p.a,{maxWidth:30,m:1,className:"logo-wrapper",children:Object(d.jsx)("img",{src:h,alt:"",className:"logo-img"})}),Object(d.jsxs)(p.a,{children:[" ",Object(d.jsx)("h2",{className:"logo-h2",children:"Pokedex"})]})]})})})};function O(e){var t=e.url;return new Promise((function(e,c){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))}))}function m(e){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(128);var v=c(270),g=c(273),k=c(76),N=c.n(k),w=c(42),y=c.n(w);var _=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],h=s[1],f=Object(a.useState)(""),k=Object(o.a)(f,2),w=k[0],_=k[1],S=Object(a.useState)(!0),C=Object(o.a)(S,2),F=C[0],P=C[1],A="https://pokeapi.co/api/v2/pokemon";Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(A);case 2:return t=e.sent,h(t.next),_(t.previous),e.next=7,L(t.results);case 7:P(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var M=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,m(i);case 3:return t=e.sent,e.next=6,L(t.results);case 6:h(t.next),_(t.previous),P(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return P(!0),e.next=5,m(w);case 5:return t=e.sent,e.next=8,L(t.results);case 8:h(t.next),_(t.previous),P(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(j.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:c=e.sent,n(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(v.a,{children:F?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(p.a,{children:[Object(d.jsx)(g.a,{variant:"outlined",color:"primary",onClick:B,children:Object(d.jsx)(y.a,{})}),Object(d.jsx)(g.a,{variant:"outlined",color:"primary",onClick:M,children:Object(d.jsx)(N.a,{})})]}),Object(d.jsx)("div",{className:"grid-home",children:c.map((function(e,t){return Object(d.jsx)("div",{m:2,className:"box-wrapper",children:Object(d.jsx)(b.b,{to:"/".concat(e.name),className:"link-title",children:Object(d.jsx)(u,{url:e.url,pokemon:e,className:"card-wrapper"},t)})},t)}))}),Object(d.jsxs)(p.a,{children:[Object(d.jsx)(g.a,{variant:"outlined",color:"primary",onClick:B,children:Object(d.jsx)(y.a,{})}),Object(d.jsx)(g.a,{variant:"outlined",color:"primary",onClick:M,children:Object(d.jsx)(N.a,{})})]})]})})]})},S=(c(129),{bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"}),C=c(4),F=c(39);c(255);var P=function(){var e=document.querySelector(".about-text").innerHTML;console.log(e),e.replace(/\u00AD/g," ")};var A=function(){var e=Object(C.f)(),t=Object(C.h)().pokename,c=(Object(C.g)(),Object(a.useState)([])),n=Object(o.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)([]),b=Object(o.a)(i,2),u=b[0],h=b[1],x=Object(a.useState)(""),O=Object(o.a)(x,2),f=O[0],v=O[1],k=Object(F.usePalette)(f),N=k.data,w=(k.error,Object(a.useState)(!0)),_=Object(o.a)(w,2),A=_[0],M=_[1],B=Object(a.useState)([]),L=Object(o.a)(B,2),V=(L[0],L[1]),E=Object(a.useState)([]),H=Object(o.a)(E,2),I=(H[0],H[1],"https://pokeapi.co/api/v2/pokemon/".concat(t)),T="https://pokeapi.co/api/v2/pokemon-species/".concat(t);Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(I);case 2:return t=e.sent,s(t),v(t.sprites.other.dream_world.front_default),e.next=7,m(T);case 7:return c=e.sent,h(c),e.next=11,m(c.evolution_chain.url);case 11:return a=e.sent,V(a.chain),M(!1),e.next=16,P();case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log("color",N),"linear-gradient(to right, ".concat(N.vibrant,", ").concat(N.darkVibrant,")");var D={background:"".concat(N.vibrant)};return Object(d.jsx)("div",{className:"container-wrapper",style:D,children:A?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(g.a,{variant:"outlined",color:"primary",className:"backButton",onClick:function(){e.goBack()},children:Object(d.jsx)(y.a,{})})}),Object(d.jsx)("div",{style:{background:N.darkMuted},children:"darkMuted"}),Object(d.jsx)("div",{style:{background:N.darkVibrant},children:"darkVibrant"}),Object(d.jsx)("div",{style:{background:N.lightMuted},children:"lightMuted"}),Object(d.jsx)("div",{style:{background:N.lightVibrant},children:"lightVibrant"}),Object(d.jsx)("div",{style:{background:N.muted},children:"muted"}),Object(d.jsx)("div",{style:{background:N.vibrant},children:"vibrant"}),Object(d.jsxs)(p.a,{className:"item-bod",children:[Object(d.jsxs)(p.a,{className:"detail-bod",children:[Object(d.jsxs)(p.a,{className:"detail-name",children:[Object(d.jsxs)(p.a,{className:"box-name",children:[Object(d.jsx)("p",{children:r.name}),Object(d.jsxs)("span",{children:["#",r.id]})]}),Object(d.jsx)(p.a,{children:Object(d.jsx)("div",{className:"Card__types",children:r.types.map((function(e,t){return Object(d.jsx)("div",{className:"Card__type",style:{backgroundColor:S[e.type.name]},children:e.type.name},t)}))})})]}),Object(d.jsx)(p.a,{className:"front-sprite-wrapper",children:Object(d.jsx)("img",{src:r.sprites.other["official-artwork"].front_default,alt:""})}),Object(d.jsxs)(p.a,{className:"weight-data",children:[Object(d.jsxs)("div",{className:"table-wrapper",children:[Object(d.jsx)("div",{className:"table-title",children:Object(d.jsx)("span",{children:"Height"})}),Object(d.jsx)("div",{className:"table-content",children:Object(d.jsxs)("p",{children:[r.height,"m "]})})]}),Object(d.jsxs)("div",{className:"table-wrapper",children:[Object(d.jsx)("div",{className:"table-title",children:Object(d.jsx)("span",{children:"Weight"})}),Object(d.jsxs)("div",{className:"table-content",children:[r.weight,"kg"]})]}),Object(d.jsxs)("div",{className:"table-wrapper",children:[Object(d.jsx)("div",{className:"table-title",children:Object(d.jsx)("span",{children:"Egg Groups"})}),Object(d.jsx)("div",{className:"table-content",children:u.egg_groups.map((function(e,t){return Object(d.jsxs)("p",{className:"table-content abilities",children:[e.name,t<u.egg_groups.length-1?",\xa0":""]},t)}))})]}),Object(d.jsxs)("div",{className:"table-wrapper",children:[Object(d.jsx)("div",{className:"table-title",children:Object(d.jsx)("span",{children:"Base Hapiness"})}),Object(d.jsx)("div",{className:"table-content",children:Object(d.jsx)("p",{children:u.base_happiness})})]}),Object(d.jsxs)("div",{className:"table-wrapper",children:[Object(d.jsx)("div",{className:"table-title",children:Object(d.jsx)("span",{children:"Habitat"})}),Object(d.jsx)("div",{className:"table-content",children:Object(d.jsx)("p",{className:"table-content abilities",children:u.habitat.name})})]}),Object(d.jsxs)("div",{className:"table-wrapper",children:[Object(d.jsx)("div",{className:"table-title",children:Object(d.jsx)("span",{children:"Abilities"})}),r.abilities.map((function(e,t){return Object(d.jsxs)("p",{className:"table-content abilities",children:[e.ability.name,t<r.abilities.length-1?",\xa0":""]},t)}))]})]})]}),Object(d.jsxs)(p.a,{className:"statistics-bod",children:[Object(d.jsxs)(p.a,{className:"description-wrapper",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsx)("p",{className:"about-text",children:u.flavor_text_entries[0].flavor_text})]}),Object(d.jsxs)(p.a,{children:[Object(d.jsx)("h2",{children:"Stats"}),r.stats.map((function(e,t){return Object(d.jsxs)("div",{className:"stat-box",children:[e.stat.name,": ",e.base_stat]},t)}))]})]})]})]})})};var M=function(){return Object(d.jsx)(b.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(C.c,{children:[Object(d.jsx)(C.a,{path:"/",exact:!0,component:_}),Object(d.jsx)(C.a,{path:"/:pokename",exact:!0,component:A})]})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,276)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),B()}},[[257,1,2]]]);
//# sourceMappingURL=main.09a4532a.chunk.js.map