(this["webpackJsonpmet-art-app"]=this["webpackJsonpmet-art-app"]||[]).push([[0],{52:function(t,n,e){},53:function(t,n,e){},59:function(t,n,e){"use strict";e.r(n);var a=e(4),r=e(1),i=e.n(r),c=e(19),o=e.n(c),s=(e(52),e(53),e(7)),l=e(5),u=e(34);function d(){var t=Object(s.a)(["\n\tmax-width: 20%;\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n\twidth: auto;\n\tmax-height: 100px;\n\t&:nth-child(4) {\n\t\tmargin-right: 0;\n\t}\n"]);return d=function(){return t},t}function b(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-wrap: wrap;\n\twidth: 100%;\n"]);return b=function(){return t},t}function f(){var t=Object(s.a)(["\n\twidth: 100%;\n"]);return f=function(){return t},t}function j(){var t=Object(s.a)(["\n\tfont-family: Arial, Helvetica, sans-serif;\n"]);return j=function(){return t},t}function p(){var t=Object(s.a)(["\n\tfont-family: Arial, Helvetica, sans-serif;\n"]);return p=function(){return t},t}function m(){var t=Object(s.a)(["\n\tfont-family: Arial, Helvetica, sans-serif;\n"]);return m=function(){return t},t}function h(){var t=Object(s.a)(["\t    \n\t/* screen width is less than 768px (medium) */\n\twidth: 90%;\n\t"]);return h=function(){return t},t}function g(){var t=Object(s.a)(["\n\tposition: relative; \n\twidth: 30%;\n\tleft: 50%;\n\ttransform: translate(-50%, 0);\n\tmargin-bottom: 20px;\n\t","\n"]);return g=function(){return t},t}var O=Object(l.b)("div")(g(),u.a.lessThan("medium")(h())),v=Object(l.b)("h1")(m()),x=Object(l.b)("h2")(p()),y=Object(l.b)("h3")(j()),w=Object(l.b)("img")(f()),I=Object(l.b)("div").attrs((function(){return{className:"art-piece-additional-image-container"}}))(b()),k=Object(l.b)("img").attrs((function(){return{className:"art-piece-additional-image"}}))(d());function A(t){return console.log("..........."),console.log("props.additionalImages",t.data.additionalImages),console.log("props",t),Object(a.jsxs)(O,{children:[Object(a.jsx)(v,{children:t.data.objectName}),Object(a.jsx)(x,{children:t.data.objectDate}),t.data.artistDisplayName?Object(a.jsxs)(y,{children:[t.data.artistDisplayName,Object(a.jsx)("br",{}),t.data.artistDisplayBio]}):null,Object(a.jsx)(w,{src:t.data.primaryImageSmall}),Object(a.jsxs)(I,{children:[console.log("props.additionalImages",t.data.additionalImages),null!==t.data.additionalImages.length&&t.data.additionalImages.length>0?t.data.additionalImages.map((function(t,n){return Object(a.jsx)(k,{src:t})})):null]})]})}var N=e(24),S=e(23),C=e.n(S),D=e(38),F=e(16),H=function(){var t=Object(D.a)(C.a.mark((function t(n){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+n);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function E(){var t=Object(r.useState)(5e3),n=Object(N.a)(t,2),e=n[0],i=(n[1],Object(F.useQuery)("individualRecord",(function(){return H((t=e,Math.floor(Math.random()*Math.floor(t-1))));var t}))),c=i.data,o=i.status,s=Object(r.useState)(null),l=Object(N.a)(s,2),u=l[0],d=l[1];return Object(r.useEffect)((function(){console.log("useEffect"),console.log("data",c),d(c)}),[o]),Object(a.jsxs)("div",{className:"App",children:["loading"===o?Object(a.jsx)("p",{children:"Loading...."}):null,"error"===o?Object(a.jsx)("p",{children:"Error :("}):null,"success"===o&&void 0!==u?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Success"}),Object(a.jsx)("p",{children:u.title}),Object(a.jsx)(A,{data:u})]}):null]})}function M(){var t=Object(s.a)(["\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-size: 16px;\n\tposition: relative;\n\tmargin-bottom: 30px; \n\tcolor: black;\n\tborder: 0;\n\tdisplay: block;\n\t&:hover {\n\t\ttext-decoration: none;\n\t}\n"]);return M=function(){return t},t}function B(){var t=Object(s.a)(["\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-size: 16px;\n\tpadding: 30px; \n\tbackground-color: lightblue;\n\tborder: 0;\n\tmargin-top: 30px;\n\t&:hover {\n\t\tbackground-color: lightgreen;\n\t\tcursor: pointer;\n\t}\n"]);return B=function(){return t},t}Object(l.b)("button")(B()),Object(l.b)("a")(M());var L=new F.QueryClient;var P=function(){return Object(a.jsx)(F.QueryClientProvider,{client:L,children:Object(a.jsx)(E,{})})},Q=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,62)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),a(t),r(t),i(t),c(t)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),Q()}},[[59,1,2]]]);
//# sourceMappingURL=main.7b5c51e0.chunk.js.map