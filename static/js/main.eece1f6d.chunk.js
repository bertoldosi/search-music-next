(this["webpackJsonpcampo-buscar"]=this["webpackJsonpcampo-buscar"]||[]).push([[0],{11:function(e,t,a){e.exports={Search:"styles_Search__3o_5Q",SearchTitle:"styles_SearchTitle__3TIrF",SearchForm:"styles_SearchForm__2kQIS",SearchFormButton:"styles_SearchFormButton__gDMNz"}},13:function(e,t,a){e.exports={Resultado:"styles_Resultado__2Atek",ResultadoContent:"styles_ResultadoContent__2_0mc",ResultadoContentInfo:"styles_ResultadoContentInfo__-9AbU"}},14:function(e,t,a){e.exports={Historico:"styles_Historico__2UsaG",HistoricoHeader:"styles_HistoricoHeader__3q4T8",HistoricoContent:"styles_HistoricoContent__39cvy"}},15:function(e,t,a){e.exports={Header:"styles_Header__2KoFd",HeaderLogo:"styles_HeaderLogo__AOrjy",HeaderNavBar:"styles_HeaderNavBar__1iW6w"}},31:function(e,t,a){e.exports={Main:"styles_Main__3TFCw"}},36:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(30),s=a.n(c),o=a(9),l=a(1),i=a(31),u=a.n(i),m=a(17),d=a.n(m),p=a(32),h=a(12),v=a(18),_=a(10),E=a(33),f=a.n(E).a.create({baseURL:"http://ws.audioscrobbler.com/2.0",params:{api_key:"dacea2578f5f72c4bc319b20a034ace0"}}),S=a(11),b=a.n(S),y=a(13),g=a.n(y),H=function(e){var t=e.resultado;return n.a.createElement("div",{className:g.a.Resultado,key:t.id},t.map((function(e){return n.a.createElement("div",{className:g.a.ResultadoContent,key:e.url},n.a.createElement("a",{href:e.url,target:"blank"},n.a.createElement("img",{src:e.image[2]["#text"]?e.image[1]["#text"]:"https://via.placeholder.com/64",alt:"imagem"})),n.a.createElement("a",{href:e.url,target:"blank"},n.a.createElement("div",{className:g.a.ResultadoContentInfo},n.a.createElement("h2",null,e.name))))})))},N={success:!1,error:!1,response:[]},x={typeSearch:"artist",valueSearch:""},k=function(){var e=n.a.useState(N),t=Object(_.a)(e,2),a=t[0],r=t[1],c=n.a.useState(x),s=Object(_.a)(c,2),o=s[0],l=s[1],i=function(e){var t=e.target,a=t.name,r=t.value;l((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(h.a)({},a,r))}))},u=function(){var e=JSON.parse(localStorage.getItem("s-m-l-history")),t=(new Date).toLocaleString("pt-BR"),a={term:o.valueSearch,date:t};e?(e.push(a),localStorage.setItem("s-m-l-history",JSON.stringify(e))):localStorage.setItem("s-m-l-history",JSON.stringify([a]))},m=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(),a=o.typeSearch,n=o.valueSearch,e.prev=4,"artist"!==a){e.next=11;break}return e.next=8,f.get("/?method=artist.search",{params:{artist:n,format:"json"}});case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,f.get("/?method=album.search",{params:{album:n,format:"json"}});case 13:e.t0=e.sent;case 14:c=e.t0,r({success:!0,error:!1,response:"artist"===a?c.data.results.artistmatches.artist:c.data.results.albummatches.album}),e.next=22;break;case 18:e.prev=18,e.t1=e.catch(4),console.log("error",e.t1),r({success:!1,error:!0,response:[]});case 22:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:b.a.Search},n.a.createElement("div",{className:b.a.SearchTitle},"Pesquisando por",n.a.createElement("select",{name:"typeSearch",id:"typeSearch",type:"text",onChange:i,value:o.typeSearch},n.a.createElement("option",{value:"artist"},"Artista"),n.a.createElement("option",{value:"album"},"Album"))),n.a.createElement("form",{className:b.a.SearchForm,onSubmit:m},n.a.createElement("label",{htmlFor:"valueSearch"}),n.a.createElement("input",{name:"valueSearch",id:"valueSearch",type:"text",value:o.valueSearch,onChange:i,placeholder:"Digite o nome",required:!0}),n.a.createElement("div",{className:b.a.SearchFormButton},n.a.createElement("button",{type:"submit"},"Buscar"),n.a.createElement("button",{type:"button",onClick:function(){l(x),document.location.reload()}},"Limpar")))),n.a.createElement(H,{resultado:a.response}))},C=function(){return n.a.createElement("div",{className:u.a.Main},n.a.createElement(k,null),n.a.createElement(H,{resultado:[]}))},I=a(14),O=a.n(I);var R=function(){var e=n.a.useState((function(){return JSON.parse(localStorage.getItem("s-m-l-history"))})),t=Object(_.a)(e,1)[0];return n.a.createElement("div",{className:O.a.Historico},n.a.createElement("div",{className:O.a.HistoricoHeader},n.a.createElement("h1",null,"HIST\xd3RICO"),n.a.createElement("button",{onClick:function(){localStorage.clear(),document.location.reload()}},"Apagar hist\xf3rico")),null===t||void 0===t?void 0:t.map((function(e,t){return n.a.createElement("div",{key:t,className:O.a.HistoricoContent},n.a.createElement("h2",null,e.term),n.a.createElement("span",null,e.date))})))},F=a(15),j=a.n(F),B=function(){return n.a.createElement("header",{className:j.a.Header},n.a.createElement("div",{className:j.a.HeaderLogo},n.a.createElement("h1",null,"MUSIC")),n.a.createElement("nav",{className:j.a.HeaderNavBar},n.a.createElement(o.b,{to:"/"},"Pesquisar"),n.a.createElement(o.b,{to:"/historico"},"Hist\xf3rico")))},w=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(B,null),n.a.createElement(l.a,{exact:!0,path:"/",component:C}),n.a.createElement(l.a,{path:"/historico",component:R})))},T=function(e){return n.a.createElement(w,null)};a(64);s.a.render(n.a.createElement(T,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.eece1f6d.chunk.js.map