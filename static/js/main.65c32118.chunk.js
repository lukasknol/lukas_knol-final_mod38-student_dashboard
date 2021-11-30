(this["webpackJsonpstudenten-dashboard"]=this["webpackJsonpstudenten-dashboard"]||[]).push([[0],{343:function(e,t,n){"use strict";n.r(t);var a=n(1),s=(n(39),n(29)),i=n(3),c=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("div",{className:"header-container",children:Object(i.jsx)(s.b,{className:"header-home",to:"/",children:Object(i.jsx)("div",{className:"logo-name",children:"Studenten Dashboard"})})})})},r=n(110),d=n(362),l=function(e){var t=e.name,n=e.id,a="",c=Object(d.a)("(max-width:1028px)");return"student"===n&&(a="/student/".concat(t)),"assignment"===n&&(a="/assignment/".concat(t)),c?Object(i.jsx)(s.c,{className:"nav-item",to:a,children:Object(i.jsx)(r.a.Item,{href:a,children:t})}):Object(i.jsx)(s.c,{exact:!0,style:{textDecoration:"none"},className:"nav-item",activeClassName:"is-active",to:a,children:Object(i.jsx)("li",{children:t})})},o=n(200),j=n(18),u=n(111),h=n(199),m=Object(a.createContext)(),b=function(e){var t=Object(a.useState)({assignments:[],data:{},students:[],dataAssignments:[],filterAverage:"",average:{filter:"showall",radioBox:{assignment:!0,enjoymentRating:!1,difficultyRating:!1}}}),n=Object(u.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){h.a("./dataMockup.csv").then((function(e){var t={},n=[],a={},s=[];e.forEach((function(e){var i=e.name,c=e.assignment;-1===n.indexOf(e.assignment)&&n.push(e.assignment),t.hasOwnProperty(i)||(s.push(i),t[i]={name:e.name,radioBox:{enjoymentRating:!1,difficultyRating:!1,assignment:!0},checked:!0,assignments:[]}),a.hasOwnProperty(c)||(a[c]={assignment:e.assignment,radioBox:{assignment:!0,enjoymentRating:!1,difficultyRating:!1},students:[]});var r={assignment:e.assignment,checked:!0,difficultyRating:parseInt(e.difficulty),enjoymentRating:parseInt(e.enjoyment)},d={name:e.name,difficultyRating:parseInt(e.difficulty),enjoymentRating:parseInt(e.enjoyment),checked:!0};t[i].assignments.push(r),a[c].students.push(d)}));var i={assignments:n,students:s.sort(),data:t,dataAssignments:a,average:{filter:"showall",radioBox:{assignment:!0,enjoymentRating:!1,difficultyRating:!1}}};c((function(){return i}))}))}),[]),Object(i.jsx)(m.Provider,{value:[s,c],children:e.children})},f=function(){var e=Object(a.useContext)(m),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(o.a)(n.assignments).map((function(e){var t=0,a=0,s=[],i=Object.entries(Object(j.a)({},n.data)).filter((function(e){return e[1].checked})).length;return Object.entries(Object(j.a)({},n.data)).filter((function(e){return e[1].checked})).forEach((function(n){var i={name:n[0]};n[1].assignments.forEach((function(n){n.assignment===e&&(i.difficultyRating=n.difficultyRating,i.enjoymentRating=n.enjoymentRating,t+=n.difficultyRating,a+=n.enjoymentRating)})),s.push(i)})),{assignment:e,difficultyRating:t>0&&parseFloat((t/i).toFixed(2)),enjoymentRating:a>0&&parseFloat((a/i).toFixed(2)),labels:s}})),c=Object.entries(n.data).filter((function(e){return e[1].checked})).length;return{dataAssignments:n.dataAssignments,assignments:n.assignments,averageAssignments:i,averageData:n.average,students:n.students,counter:c,studentsData:n,data:n.data,handleCheckAssignment:function(e,t){var a=Object(j.a)({},n.data);a[t].assignments.map((function(t){return t.assignment===e.assignment?(t.checked=!t.checked,t):t})),s((function(e){return Object(j.a)(Object(j.a)({},e),{},{data:a})}))},selectAllAssignments:function(e){var t=Object(j.a)({},n.data);t[e].assignments.map((function(e){return e.checked=!e.checked})),s((function(e){return Object(j.a)(Object(j.a)({},e),{},{data:t})}))},assignmentSwitch:function(e,t){var a=Object(j.a)({},n.dataAssignments);a[t].students.map((function(t){return t.name===e&&(t.checked=!t.checked),t})),s((function(e){return Object(j.a)(Object(j.a)({},e),{},{dataAssignments:a})}))},filterChecked:function(e){return e.filter((function(e){return e.checked}))},studentSwitch:function(e){var t=Object(j.a)({},n.data);t[e].checked=!t[e].checked,s((function(e){return Object(j.a)(Object(j.a)({},e),{},{data:t})}))},averageFilter:function(e){var t=Object(j.a)({},n.average);t.filter=e,s((function(e){return Object(j.a)(Object(j.a)({},e),{},{average:t})}))},setRadio:function(e,t,n,a){var i=Object(j.a)({},t),c=a?i[n][a].radioBox:i[n].radioBox;c.enjoymentRating=!1,c.difficultyRating=!1,c.assignment=!1,c[e]=!c[e],s((function(){return i}))},setSort:function(e,t){var n=t[0][e];return t.sort(function(e,t){var n=typeof e;return function(e,a){return e=e[t],a=a[t],"string"===n?(i=a,(s=(s=e).toLowerCase())>(i=i.toLowerCase())?1:i>s?-1:0):"number"===n?e-a:void 0;var s,i}}(n,e))}}},O=n(138),g=n(103),x=function(){var e=f(),t=e.students,n=e.assignments,a=Object(d.a)("(max-width:1028px)"),c=t.map((function(e,t){return Object(i.jsx)(l,{name:e,id:"student"},t)})),r=n.map((function(e,t){return Object(i.jsx)(l,{name:e,id:"assignment"},t)}));return Object(i.jsx)("nav",{children:a?Object(i.jsx)("div",{className:"nav-container",children:Object(i.jsxs)("div",{className:"students-overview-average",children:[Object(i.jsxs)(s.c,{exact:!0,className:"nav-item",to:"/",children:[" ",Object(i.jsx)(g.a,{href:"/",variant:"primary",id:"dropdown-basic-button",children:"Alle studenten"})]}),Object(i.jsx)(O.a,{id:"dropdown-basic-button",title:"Studenten",children:c}),Object(i.jsx)(O.a,{id:"dropdown-basic-button",title:"Opdrachten",children:r})]})}):Object(i.jsx)("div",{className:"nav-container-desktop",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsxs)("div",{className:"nav-group",children:[Object(i.jsx)("h3",{children:"Overzicht"}),Object(i.jsx)("ul",{className:"all-students",children:Object(i.jsx)("li",{children:Object(i.jsx)(s.c,{exact:!0,className:"nav-item",activeClassName:"is-active",to:"/",children:"Alle studenten"})})})]}),Object(i.jsxs)("div",{className:"nav-group",children:[Object(i.jsx)("h3",{children:"Studenten"}),Object(i.jsx)("ul",{children:c})]}),Object(i.jsxs)("div",{className:"nav-group",children:[Object(i.jsx)("h3",{children:"Opdrachten"}),Object(i.jsx)("ul",{className:"nav-assignments",children:r})]})]})})})},v=function(e){var t=e.state,n=e.data,a=e.name,s=e.condition,c=f().setRadio,r=a?t[n][a]:t[n];return Object(i.jsxs)("form",{className:"sort-form",onChange:function(e){var s=e.target.value;c(s,t,n,a)},children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{readOnly:!0,checked:r.radioBox.enjoymentRating,type:"radio",name:"radio",value:"enjoymentRating"}),"Sorteer op plezier"]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{readOnly:!0,checked:r.radioBox.difficultyRating,type:"radio",name:"radio",value:"difficultyRating"}),"Sorteer op moeilijkheid"]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{readOnly:!0,checked:r.radioBox.assignment,type:"radio",name:"radio",value:"assignment"}),"Sorteer op ","name"===s?"naam":"opdracht"]})]})},p=n(360),y=n(356),k=n(368),N=n(358),w=n(369),R=n(366),S=n(363),A=n(361),C=function(e){var t=e.data;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(p.a,{height:160,padding:30,width:500,children:[Object(i.jsx)(y.a,{y:function(){return 1},style:{data:{stroke:"white",strokeWidth:.2}}}),Object(i.jsx)(y.a,{y:function(){return 2},style:{data:{stroke:"white",strokeWidth:.2}}}),Object(i.jsx)(y.a,{y:function(){return 3},style:{data:{stroke:"white",strokeWidth:.2}}}),Object(i.jsx)(y.a,{y:function(){return 4},style:{data:{stroke:"white",strokeWidth:.2}}}),Object(i.jsx)(y.a,{y:function(){return 5},style:{data:{stroke:"white",strokeWidth:.3}}}),Object(i.jsx)(y.a,{y:function(){return 4.5},style:{data:{stroke:"white",strokeWidth:.1}}}),Object(i.jsx)(y.a,{y:function(){return.5},style:{data:{stroke:"white",strokeWidth:.1}}}),Object(i.jsx)(y.a,{y:function(){return 1.5},style:{data:{stroke:"white",strokeWidth:.1}}}),Object(i.jsx)(y.a,{y:function(){return 2.5},style:{data:{stroke:"white",strokeWidth:.1}}}),Object(i.jsx)(y.a,{y:function(){return 3.5},style:{data:{stroke:"white",strokeWidth:.1}}}),Object(i.jsxs)(k.a,{offset:160/t.length,children:[Object(i.jsx)(N.a,{data:t,x:"assignment",y:"difficultyRating",labels:function(e){var t=e.datum;if(t.labels){var n="";return t.labels.forEach((function(e){var t="".concat(e.name,": ").concat(e.difficultyRating," \n");n+=t})),"Moeilijkheid gem.: ".concat(t.difficultyRating,"\n  \n").concat(n)}return"Moeilijkheid beoordeling:".concat(t.difficultyRating)},style:{data:{fill:"#263749"}},barWidth:130/t.length,animate:{duration:700,onLoad:{duration:700}},labelComponent:Object(i.jsx)(w.a,{flyoutWidth:70,pointerLength:9,pointerWidth:2,flyoutStyle:{stroke:"#ff0000",strokeWidth:.2,fill:"white"},style:{fontSize:5,fill:"#263749"}}),events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"#ff0000",stroke:"black",strokeWidth:"0.1"}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]}),Object(i.jsx)(N.a,{data:t,x:"assignment",y:"enjoymentRating",style:{data:{fill:"#81c0ff"}},barWidth:130/t.length,animate:{duration:500,onLoad:{duration:500}},labels:function(e){var t=e.datum;if(t.labels){var n="";return t.labels.forEach((function(e){var t="".concat(e.name,": ").concat(e.enjoymentRating," \n");n+=t})),"Plezier gem.: ".concat(t.enjoymentRating,"\n \n").concat(n)}return"Plezier beoordeling: ".concat(t.enjoymentRating)},labelComponent:Object(i.jsx)(w.a,{flyoutWidth:60,pointerLength:9,pointerWidth:1,flyoutStyle:{stroke:"#fff600",strokeWidth:.2,fill:"white"},style:{fontSize:5,fill:"#263749"}}),events:[{target:"data",eventHandlers:{onMouseOver:function(){return[{target:"data",mutation:function(){return{style:{fill:"#fff600",stroke:"black",strokeWidth:"0.1"}}}},{target:"labels",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"data",mutation:function(){}},{target:"labels",mutation:function(){return{active:!1}}}]}}}]})]}),Object(i.jsx)(R.a,{style:{ticks:{fill:"transparent",size:2,stroke:"black",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}},tickLabelComponent:Object(i.jsx)(S.a,{angle:function(){return t.length<16?0:60},dx:-8.5,dy:-6,style:{fontSize:5,fill:"#263749"},textAnchor:"start"})}),Object(i.jsx)(R.a,{dependentAxis:!0,domain:[0,5],style:{tickLabels:{fontSize:5,fill:"#263749"}}}),Object(i.jsx)(A.a,{x:200,y:10,orientation:"horizontal",data:[{name:"Moeilijkheid",symbol:{fill:"#263749",type:"square"}},{name:"Plezier",symbol:{fill:"#81c0ff",type:"square"}}],style:{labels:{fontSize:6,fill:"#120faa"}}})]})})},W=n(80),B=(n(341),function(e){var t=e.name,n=e.id,a=e.assignment,s=e.student,c=f(),r=c.studentSwitch,d=c.data,l=c.handleCheckAssignment,o=c.assignmentSwitch;switch(n){case"student":return Object(i.jsx)("li",{children:Object(i.jsx)(W.a.Check,{name:"my-checkbox",checked:d[t].checked,onChange:function(){r(t)},type:"switch",id:t,label:t})});case"assignment":return Object(i.jsx)("option",{className:"select-option",value:t,children:t});case"filter-assignment":return Object(i.jsx)("li",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{checked:a.checked,onChange:function(){l(a,t)},type:"checkbox",value:a.assignment})," ",a.assignment]})});case"studentOverview":return Object(i.jsx)("li",{children:Object(i.jsx)(W.a.Check,{onChange:function(){return o(s.name,t)},checked:s.checked,type:"switch",id:s.name,label:s.name})})}}),z=function(){var e=f(),t=e.setSort,n=e.counter,a=e.students,s=e.averageData,c=e.assignments,r=e.studentsData,d=e.averageFilter,l=e.averageAssignments,o=a.map((function(e,t){return Object(i.jsx)(B,{id:"student",name:e},t)})),j=c.map((function(e,t){return Object(i.jsx)(B,{id:"assignment",name:e},t)})),u=Object.keys(r.average.radioBox).filter((function(e){return r.average.radioBox[e]})).toString(),h=l.length>0&&t(u,l,r.average.reverse),m=l.filter((function(e){return e.assignment===s.filter})),b="showall"===s.filter?h:m;return Object(i.jsx)("div",{className:"average",children:Object(i.jsxs)("div",{className:"average-container",children:[Object(i.jsx)("div",{className:"average-header",children:"Beoordelingen van alle studenten"}),Object(i.jsxs)("div",{className:"stylewrapper",children:[Object(i.jsxs)("div",{className:"student-switches",children:[Object(i.jsxs)("div",{className:"banner",children:["Selecteer minimaal twee studenten om de resultaten te vergelijken (",Object(i.jsx)("span",{children:n}),")"]}),Object(i.jsx)("ul",{children:o})]}),1!==m.length?Object(i.jsxs)("div",{className:"sort-option",children:[Object(i.jsx)("div",{className:"banner-sort",children:"Sorteeropties"}),Object(i.jsx)(v,{state:r,data:"average"})]}):null,Object(i.jsxs)("div",{className:"assignment-options",children:[Object(i.jsxs)("div",{className:"assignment-banner",children:["Selecteer opdracht. Geselecteerd:","showall"===r.average.filter?Object(i.jsxs)("span",{children:[" ",c.length," "]}):Object(i.jsxs)("span",{children:[" ",r.average.filter]})]}),Object(i.jsxs)("select",{defaultValue:r.average.filter,onChange:function(e){d(e.target.value)},children:[Object(i.jsx)("option",{default:!0,value:"showall",children:"\u25bc Alle opdrachten (56)"}),j]})]})]}),Object(i.jsx)("div",{className:"chart",children:b.length>0&&Object(i.jsx)(C,{data:b})})]})})},L=n(17),D=function(){var e=Object(L.f)().name,t=f(),n=t.data,a=t.filterChecked,s=t.setSort,c=t.selectAllAssignments,r=t.studentsData,d=n[e].assignments.map((function(t,n){return Object(i.jsx)(B,{id:"filter-assignment",assignment:t,name:e},n)})),l=Object.keys(n[e].radioBox).filter((function(t){return n[e].radioBox[t]})).toString(),o=a(n[e].assignments),j=o.length>0?s(l,o):o,u=n[e].assignments.length;return Object(i.jsxs)("div",{className:"student",children:[Object(i.jsxs)("div",{className:"student-container",children:[Object(i.jsxs)("div",{className:"student-header",children:["Resultaten van",Object(i.jsxs)("span",{children:[" ",e]})]}),Object(i.jsxs)("div",{className:"student-options",children:[Object(i.jsxs)("div",{className:"banner-lines",children:[Object(i.jsx)("div",{className:"banner",children:Object(i.jsxs)("div",{children:["Selecteer opdracht. Totaal: ",Object(i.jsxs)("span",{children:[" ",j.length," "]}),"van ",Object(i.jsxs)("span",{children:[" ",u," "]})]})}),Object(i.jsx)("ul",{className:"filter-ul",children:d}),Object(i.jsx)("div",{className:"filter-switch",children:Object(i.jsx)(W.a.Check,{className:"switch-inv",onChange:function(){c(e)},type:"switch",id:"student-switch",label:"(De)selecteer alles"})})]}),Object(i.jsx)("div",{className:"sort-wrapper",children:j.length>=2&&Object(i.jsxs)("div",{className:"sort-option",children:[Object(i.jsx)("div",{className:"banner-sort",children:"Sorteeropties"}),Object(i.jsx)(v,{state:r,data:"data",name:e})]})})]})]}),Object(i.jsx)("div",{className:"chart",children:j.length>0&&Object(i.jsx)(C,{data:j})})]})},E=function(){var e=Object(L.f)().name,t=f(),n=t.dataAssignments,a=t.studentsData,s=t.setSort,c=n[e].students,r=n[e].students.map((function(t,n){return Object(i.jsx)(B,{id:"studentOverview",student:t,name:e},n)})),d=c.length>0&&c.filter((function(e){return e.checked})).map((function(e){return e.assignment=e.name,e})),l=d.length,o=Object.keys(n[e].radioBox).filter((function(t){return n[e].radioBox[t]})).toString(),j=l>0&&s(o,d);return Object(i.jsxs)("div",{className:"assignment-container",children:[Object(i.jsxs)("div",{className:"assignment",children:[Object(i.jsxs)("div",{className:"assignment-header",children:["Resultaten per opdracht:",Object(i.jsxs)("span",{children:[" ",e]})]}),Object(i.jsxs)("div",{className:"student-switches",children:[Object(i.jsxs)("div",{className:"banner",children:["Selecteer minimaal twee studenten om de resultaten te vergelijken (",Object(i.jsx)("span",{children:l}),")"]}),Object(i.jsx)("ul",{children:r})]}),Object(i.jsx)("div",{className:"sort-wrapper",children:j.length>0&&Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("div",{className:"sort-option",children:[Object(i.jsx)("div",{className:"banner-sort",children:"Sorteeropties"}),Object(i.jsx)(v,{state:a,data:"dataAssignments",name:e,condition:"name"})]})})})]}),Object(i.jsx)("div",{className:"chart",children:Object(i.jsx)(C,{data:j})})]})},M=function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsx)("p",{className:"naw",children:"Lukas Knol - Eindopdracht Winc Acamdey"})})};var F=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(b,{children:[Object(i.jsx)(c,{}),Object(i.jsx)(x,{}),Object(i.jsxs)(L.c,{children:[Object(i.jsx)(L.a,{exact:!0,path:"/",children:Object(i.jsx)(z,{})}),Object(i.jsx)(L.a,{exact:!0,path:"/student/:name",children:Object(i.jsx)(D,{})}),Object(i.jsx)(L.a,{exact:!0,path:"/assignment/:name",children:Object(i.jsx)(E,{})})]}),Object(i.jsx)(M,{})]})})})},I=n(99);n.n(I).a.render(Object(i.jsx)(F,{}),document.getElementById("root"))},39:function(e,t,n){}},[[343,1,2]]]);
//# sourceMappingURL=main.65c32118.chunk.js.map