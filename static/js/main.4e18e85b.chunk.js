(this["webpackJsonpReact-Pokedex"]=this["webpackJsonpReact-Pokedex"]||[]).push([[0],{119:function(e,t,c){},120:function(e,t,c){},122:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},258:function(e,t,c){},259:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(29),s=c.n(r),i=(c(119),c(120),c(4)),o=c.n(i),j=c(10),l=c(6),u=c(18),b=(c(122),c(1));var d=function(e){var t=e.pokemon;return Object(b.jsxs)("div",{className:"card-body-wrapper",children:[Object(b.jsxs)("div",{className:"card-name",children:[Object(b.jsx)("h4",{children:t.name}),Object(b.jsxs)("span",{children:["#",t.id]})]}),Object(b.jsx)("div",{className:"card-img",children:Object(b.jsx)("div",{className:"sprite-wrapper",children:Object(b.jsx)("img",{className:"sprite_img",src:t.sprites.other["official-artwork"].front_default,alt:""})})})]})},p=c(275),h=(c(124),c.p+"static/media/pokeball.e57f7ae6.svg"),x=(c(125),c(107)),O=c.n(x);var f=function(){var e=Object(a.useState)("initialState"),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(),s=Object(l.a)(r,2);return s[0],s[1],Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{container:!0,className:"search-wrapper",children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{placeholder:"Search by name...",onChange:function(e){n(e.target.value)}})}),Object(b.jsx)("div",{className:"search-logo",children:Object(b.jsx)(u.b,{to:"/".concat(c),children:Object(b.jsx)("button",{children:Object(b.jsx)(O.a,{})})})})]})})};var m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{container:!0,className:"nav-wrapper",children:[Object(b.jsxs)(u.b,{to:"/",className:"logo-link",children:[Object(b.jsx)(p.a,{maxWidth:30,m:1,className:"logo-wrapper",children:Object(b.jsx)("img",{src:h,alt:"",className:"logo-img"})}),Object(b.jsxs)(p.a,{children:[" ",Object(b.jsx)("h2",{className:"logo-h2",children:"Pokedex"})]})]}),Object(b.jsx)(f,{})]})})};function v(e){var t=e.url;return new Promise((function(e,c){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))}))}function g(e){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(130);var N=c(273),w=c(276),y=c(79),S=c.n(y),_=c(42),C=c.n(_),F=(c(131),c.p+"static/media/slowpoke-loading.3384d576.gif");var P=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(p.a,{className:"loadingBox",height:"100vh",children:Object(b.jsx)(p.a,{className:"loadingWrapper",children:Object(b.jsx)("img",{src:F,alt:"",className:"loading-img"})})})})};var B=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],h=s[1],x=Object(a.useState)(""),O=Object(l.a)(x,2),f=O[0],k=O[1],y=Object(a.useState)(!0),_=Object(l.a)(y,2),F=_[0],B=_[1],A="https://pokeapi.co/api/v2/pokemon";Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(A);case 2:return t=e.sent,h(t.next),k(t.previous),e.next=7,R(t.results);case 7:B(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.next=3,g(i);case 3:return t=e.sent,e.next=6,R(t.results);case 6:h(t.next),k(t.previous),B(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=2;break}return e.abrupt("return");case 2:return B(!0),e.next=5,g(f);case 5:return t=e.sent,e.next=8,R(t.results);case 8:h(t.next),k(t.previous),B(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:c=e.sent,n(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(N.a,{children:F?Object(b.jsx)(P,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(p.a,{children:[Object(b.jsx)(w.a,{variant:"outlined",color:"primary",onClick:L,children:Object(b.jsx)(C.a,{})}),Object(b.jsx)(w.a,{variant:"outlined",color:"primary",onClick:E,children:Object(b.jsx)(S.a,{})})]}),Object(b.jsx)("div",{className:"grid-home",children:c.map((function(e,t){return Object(b.jsx)("div",{m:2,className:"box-wrapper",children:Object(b.jsx)(u.b,{to:"/".concat(e.name),className:"link-title",children:Object(b.jsx)(d,{url:e.url,pokemon:e,className:"card-wrapper"},t)})},t)}))}),Object(b.jsxs)(p.a,{children:[Object(b.jsx)(w.a,{variant:"outlined",color:"primary",onClick:L,children:Object(b.jsx)(C.a,{})}),Object(b.jsx)(w.a,{variant:"outlined",color:"primary",onClick:E,children:Object(b.jsx)(S.a,{})})]})]})})]})},A=(c(132),{bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4",psychic:"#7b398d"}),E=c(5),L=c(39);c(258);var R=function(){document.querySelector(".about-text").innerHTML.replace(/\u00AD/g," ")};var T=function(){var e=Object(E.f)(),t=Object(E.h)().pokename,c=(Object(E.g)(),Object(a.useState)([])),n=Object(l.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)([]),u=Object(l.a)(i,2),d=u[0],h=u[1],x=Object(a.useState)(""),O=Object(l.a)(x,2),f=O[0],m=O[1],v=Object(L.usePalette)(f),k=v.data,N=(v.error,Object(a.useState)(!0)),y=Object(l.a)(N,2),S=y[0],_=y[1],F=Object(a.useState)([]),B=Object(l.a)(F,2),T=(B[0],B[1]),W=Object(a.useState)([]),D=Object(l.a)(W,2),H=(D[0],D[1],"https://pokeapi.co/api/v2/pokemon/".concat(t)),I="https://pokeapi.co/api/v2/pokemon-species/".concat(t);Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(H);case 2:return t=e.sent,s(t),m(t.sprites.other.dream_world.front_default),e.next=7,g(I);case 7:return c=e.sent,h(c),e.next=11,g(c.evolution_chain.url);case 11:return a=e.sent,T(a.chain),_(!1),e.next=16,R();case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),"linear-gradient(to right, ".concat(k.vibrant,", ").concat(k.darkVibrant,")"),"".concat(k.vibrant);var J={background:"linear-gradient(130deg, rgba(255,255,255,0.5130427170868348) -3%, ".concat(k.vibrant," 50%, ").concat(k.vibrant," 5%")};return Object(b.jsx)("div",{className:"container-wrapper",style:J,children:S?Object(b.jsx)(P,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p.a,{children:Object(b.jsx)(w.a,{variant:"outlined",color:"primary",className:"backButton",onClick:function(){e.goBack()},children:Object(b.jsx)(C.a,{})})}),Object(b.jsxs)(p.a,{className:"item-bod",children:[Object(b.jsxs)(p.a,{className:"detail-bod",height:"100%",children:[Object(b.jsx)(p.a,{className:"detail-name",children:Object(b.jsxs)(p.a,{className:"box-name",children:[Object(b.jsx)("p",{children:r.name}),Object(b.jsxs)("span",{children:["#",r.id]})]})}),Object(b.jsxs)(p.a,{className:"weight-data",children:[Object(b.jsxs)("p",{children:["Height: ",Object(b.jsxs)("span",{children:[10*r.height," cm "]})]}),Object(b.jsxs)("p",{children:["Weight: ",Object(b.jsxs)("span",{children:[r.weight/10," kg"]})]})]})]}),Object(b.jsx)(p.a,{className:"picture-bod",children:Object(b.jsx)(p.a,{className:"front-sprite-wrapper",children:Object(b.jsx)("img",{src:r.sprites.other["official-artwork"].front_default,alt:""})})}),Object(b.jsxs)(p.a,{className:"statistics-bod",children:[Object(b.jsx)(p.a,{children:Object(b.jsx)("div",{className:"Card__types",children:r.types.map((function(e,t){return Object(b.jsx)("div",{className:"Card__type",style:{backgroundColor:A[e.type.name]},children:e.type.name},t)}))})}),Object(b.jsxs)(p.a,{className:"description-wrapper",children:[Object(b.jsx)("h2",{children:"About"}),Object(b.jsx)("p",{className:"about-text",children:d.flavor_text_entries[0].flavor_text})]}),Object(b.jsxs)(p.a,{className:"stats-name",children:[Object(b.jsx)("h2",{children:"Base Stats"}),r.stats.map((function(e,t){return Object(b.jsxs)("div",{className:"stat-box",children:[e.stat.name,": ",e.base_stat]},t)}))]})]})]})]})})};var W=function(){return Object(b.jsx)(u.a,{basename:"/React-Pokedex",children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(E.c,{children:[Object(b.jsx)(E.a,{path:"/",exact:!0,component:B}),Object(b.jsx)(E.a,{path:"/:pokename",exact:!0,component:T}),Object(b.jsx)(E.a,{path:"/",exact:!0,component:P})]})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,279)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),D()}},[[259,1,2]]]);
//# sourceMappingURL=main.4e18e85b.chunk.js.map