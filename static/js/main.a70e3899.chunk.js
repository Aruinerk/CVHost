(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(8);var n=a(1),s=a.n(n),r=a(7),i=a.n(r),c=a(2),l=a(3),j=a(5),o=a(4),b=(a(13),a(14),a(15),a(16),a(0)),h=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Gaugage",children:[Object(b.jsx)("div",{className:"Gaugage__Fill",style:{width:this.props.value/this.props.maxValue*100+"%"}}),Object(b.jsxs)("span",{className:"Gaugage__Text",children:[this.props.value/this.props.maxValue*100,"%"]})]})}}]),a}(s.a.Component),d=(a(18),function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Badge",children:this.props.children})}}]),a}(s.a.Component)),u=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"AppPanel MainPanel",children:[Object(b.jsx)("img",{className:"ProfileImage",alt:"",src:"./data/images/Sandro.jpg"}),Object(b.jsxs)("div",{className:"MainPanel__Profile",children:[Object(b.jsx)("span",{className:"ProfileName",children:"Sandro Schaurer, 25"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"bi bi-briefcase"})," Fachinformatiker Anwendungsentwicklung"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"bi bi-house"})," 76829, Landau in der Pfalz"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"bi bi-envelope"})," sandro.schaurer@gmail.com"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"bi bi-phone"})," 06341/2666438"]})]}),Object(b.jsx)("hr",{})]}),Object(b.jsxs)("div",{className:"MainPanel__Languages",children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)("i",{className:"bi bi-globe"})," Languages"]}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"German"}),Object(b.jsx)(h,{value:100,maxValue:100})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"English"}),Object(b.jsx)(h,{value:72,maxValue:100})]})]}),Object(b.jsx)("hr",{})]}),Object(b.jsxs)("div",{className:"MainPanel__SoftSkills",children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)("i",{className:"bi bi-asterisk"})," Soft Skills"]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(d,{children:"Teamf\xe4hig"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d,{children:"Verantwortungsbewusst"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d,{children:"Lernbereit"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d,{children:"Zuverl\xe4ssig"})})]}),Object(b.jsx)("hr",{})]}),Object(b.jsxs)("div",{className:"MainPanel__Social",children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)("i",{className:"bi bi-box"})," Social"]}),Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"https://github.com/r-evolve/",target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("i",{className:"bi bi-github"})," Github"]})})})]})]})}}]),a}(s.a.Component),m=(a(19),function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:this.props.children})}}]),a}(s.a.Component)),p=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={activeTabIndex:0},e}return Object(l.a)(a,[{key:"findTabs",value:function(){var e=this.props.children,t=[];return s.a.Children.forEach(e,(function(e){e.type===m&&t.push(e)})),t}},{key:"renderTabs",value:function(){var e=this;return this.findTabs().map((function(t,a){return Object(b.jsx)("li",{className:"Tabs__NavItem"+(a===e.state.activeTabIndex?" Tabs__NavItem__Active":""),onClick:e.clickTab.bind(e,a),children:Object(b.jsxs)("h2",{children:[Object(b.jsx)("i",{className:"bi ".concat(t.props.icon)})," ",t.props.name]})},a)}))}},{key:"renderTabContent",value:function(e){var t=this.findTabs();if(!(t.length<e))return Object(b.jsx)("div",{style:{padding:"1rem"},children:t[e]})}},{key:"clickTab",value:function(e){this.setState({activeTabIndex:e})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("ol",{className:"Tabs__Nav",children:this.renderTabs()}),Object(b.jsx)("hr",{}),this.renderTabContent(this.state.activeTabIndex)]})}}]),a}(s.a.Component);p.Tab=m;var O=p,g=(a(20),function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={workItems:[{title:"Praktikum | Thunder-IT GmbH",from:new Date(2013,0,28).toLocaleDateString(),to:new Date(2013,1,8).toLocaleDateString(),description:Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"bi bi-award"}),Object(b.jsx)("a",{href:"./data/documents/Thunder-IT.pdf",target:"_blank",children:"Praktikumszeugnis"})]})},{title:"Jahrespraktikum | Mediamarkt Landau",from:new Date(2014,7).toLocaleDateString(),to:new Date(2015,5).toLocaleDateString()},{title:"Jahrespraktikum | FoxySoft GmbH",from:new Date(2015,7).toLocaleDateString(),to:new Date(2016,10).toLocaleDateString()},{title:"Weiterbildung ERP-Spezialist | SoftENGINE GmbH",from:new Date(2017,7).toLocaleDateString(),to:new Date(2018,3).toLocaleDateString(),description:Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"bi bi-award"}),Object(b.jsx)("a",{href:"./data/erp-spezialist.pdf",target:"_blank",children:"Urkunde"})]})},{title:"Ausbildung Fachinformatiker Anwendungsentwicklung | SoftENGINE GmbH",from:new Date(2018,4).toLocaleDateString(),to:new Date(2020,6).toLocaleDateString(),description:Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"bi bi-award"}),Object(b.jsx)("a",{href:"https://xrechnung.new",target:"_blank",rel:"noreferrer",children:"Abschlussprojekt"})]})},{title:"Junior PHP Backend Developer | Flagbit GmbH & Co. KG",from:new Date(2020,6,15).toLocaleDateString(),to:"today"}],educationItems:[{title:"Grundschule | Pestalozzi Grundschule",from:2003,to:2007},{title:"Realschule | Konrad-Adenauer-Realschule+",from:2007,to:2014},{title:"Fachabitur Technik/Informatik | Konrad-Adenauer-Realschule+",from:2014,to:2017},{title:"Ausbildung Fachinformatiker Anwendungsentwicklung | BBS S\xfcdliche Weinstra\xdfe",from:2018,to:"Now"}]},e}return Object(l.a)(a,[{key:"isNotLastItem",value:function(e,t){return e.indexOf(t)!==e.length-1}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"AppPanel EducationPanel",children:Object(b.jsxs)(O,{children:[Object(b.jsx)(O.Tab,{name:"Work Experience",icon:"bi-briefcase",children:this.state.workItems.map((function(t,a){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:Object(b.jsx)("b",{children:t.title})}),Object(b.jsxs)("div",{className:"EducationPanel__TabWork__Item_Date",children:[Object(b.jsx)("i",{className:"bi bi-calendar"})," ",t.from," - ",t.to]}),t.description,e.isNotLastItem(e.state.workItems,t)?Object(b.jsx)("hr",{}):null]},a)}))}),Object(b.jsx)(O.Tab,{name:"Education",icon:"bi-book",children:this.state.educationItems.map((function(t,a){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:Object(b.jsx)("b",{children:t.title})}),Object(b.jsxs)("div",{className:"EducationPanel__TabWork__Item_Date",children:[Object(b.jsx)("i",{className:"bi bi-calendar"})," ",t.from," - ",t.to]}),t.description,e.isNotLastItem(e.state.educationItems,t)?Object(b.jsx)("hr",{}):null]},a)}))})]})})}}]),a}(s.a.Component)),x=(a(21),function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Grid__Item",children:[Object(b.jsxs)("div",{className:"Grid__ItemMain",children:[Object(b.jsx)("img",{src:this.props.image,alt:this.props.name}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:this.props.name}),Object(b.jsx)(h,{value:this.props.value,maxValue:100})]})]}),this.props.perks.length>0&&Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"Grid__ItemPerks",children:this.props.perks.map((function(e,t){return Object(b.jsx)("span",{children:e},t)}))}),"undefined"!==typeof this.props.description&&Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:this.props.description})]})}}]),a}(s.a.Component)),f=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Grid",children:this.props.children})}}]),a}(s.a.Component);f.Item=x;var v=f,k=(a(22),function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={langauges:[{name:"JavaScript",image:"./data/images/JavaScriptLogo.png",value:90,perks:[Object(b.jsxs)("a",{href:"https://reactjs.org/",target:"_blank",rel:"noreferrer",children:["React ",Object(b.jsx)("i",{className:"bi bi-check"})]}),Object(b.jsxs)("a",{href:"https://www.highcharts.com/",target:"_blank",rel:"noreferrer",children:["Highcharts ",Object(b.jsx)("i",{className:"bi bi-check"})]}),Object(b.jsxs)("a",{href:"https://vuejs.org/",target:"_blank",rel:"noreferrer",children:["Vue.js ",Object(b.jsx)("i",{className:"bi bi-check"})]}),Object(b.jsxs)("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noreferrer",children:["Node.js ",Object(b.jsx)("i",{className:"bi bi-check"})]})]},{name:"CSS",image:"./data/images/CSS3Logo.png",value:82,perks:[Object(b.jsxs)("a",{href:"https://lesscss.org/",target:"_blank",rel:"noreferrer",children:["Less ",Object(b.jsx)("i",{className:"bi bi-check"})]}),Object(b.jsxs)("a",{href:"https://sass-lang.com/",target:"_blank",rel:"noreferrer",children:["Sass/Scss ",Object(b.jsx)("i",{className:"bi bi-check"})]})]},{name:"C#",image:"./data/images/CSharpLogo.png",value:75,perks:[Object(b.jsxs)("a",{href:"https://unity.com/de",target:"_blank",rel:"noreferrer",children:["Unity ",Object(b.jsx)("i",{className:"bi bi-check"})]}),Object(b.jsxs)("a",{href:"https://nhibernate.info/",children:["NHibernate ",Object(b.jsx)("i",{className:"bi bi-check"})]}),Object(b.jsxs)("a",{href:"https://docs.microsoft.com/de-de/ef/",children:["Entity Framework ",Object(b.jsx)("i",{className:"bi bi-check"})]})]},{name:"TypeScript",image:"./data/images/TypeScriptLogo.png",value:75,perks:[]},{name:"Html",image:"./data/images/HTML5Logo.png",value:95,perks:[]},{name:"PHP",image:"./data/images/PHPLogo.png",value:80,perks:[]},{name:"Java",image:"./data/images/JavaLogo.png",value:45,perks:[]},{name:"Lua",image:"./data/images/LuaLogo.png",value:35,perks:[]},{name:"Python",image:"./data/images/PythonLogo.png",value:30,perks:[]}],databases:[{name:"MySQL",image:"./data/images/MySQLLogo.png",value:75,perks:[]},{name:"MongoDB",image:"./data/images/MongoDBLogo.png",value:65,perks:[]}],other:[{name:"Windows",image:"./data/images/WindowsLogo.png",value:90,perks:[]},{name:"Linux",image:"./data/images/LinuxLogo.png",value:80,perks:[]}],projects:[{name:Object(b.jsx)("a",{href:"https://github.com/Aruinerk/CVHost",target:"_blank",rel:"noreferrer",children:"CVHost"}),image:"./data/images/GitHubLogo.png",progress:80,perks:["JavaScript/React"],description:["Dieses Projekt soll ein beispielhaftes Code-Sample sein und zugleich meinen Lebenslauf abbilden."]},{name:Object(b.jsx)("a",{href:"https://xrechnung.new",target:"_blank",rel:"noreferrer",children:"XRechnung.new"}),image:"./data/images/GitHubLogo.png",progress:100,perks:["TypeScript/Vue.js","PHP/Lumen"],description:["XRechnung.new ist mein Abschlussprojekt zur IHK-Abschlusspr\xfcfung."]},{name:Object(b.jsx)("a",{href:"https://github.com/AruOnline/DBCache",target:"_blank",rel:"noreferrer",children:"AruOnline/DBCache"}),image:"./data/images/GitHubLogo.png",progress:90,perks:["C#/.NET Standard","NHibernate"],description:["DBCache ist eine C#-Anwendung, welche als bindeglied zwischen einer MySQL/MariaDB Datenbank und einer C# Laufzeit dient. Das Hauptaugenmerk liegt auf Performance und Clean-Code."]}]},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"AppPanel SkillPanel",children:Object(b.jsxs)(O,{children:[Object(b.jsxs)(O.Tab,{name:"Skills",icon:"bi-asterisk",children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)("i",{class:"bi bi-code-slash"})," Programming"]}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{children:this.state.langauges.map((function(e,t){return Object(b.jsx)(v.Item,{name:e.name,image:e.image,value:e.value,perks:e.perks},t)}))}),Object(b.jsxs)("h2",{children:[Object(b.jsx)("i",{class:"bi bi-server"})," Databases"]}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{children:this.state.databases.map((function(e,t){return Object(b.jsx)(v.Item,{name:e.name,image:e.image,value:e.value,perks:e.perks},t)}))}),Object(b.jsxs)("h2",{children:[Object(b.jsx)("i",{class:"bi bi-gem"})," Other"]}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{children:this.state.other.map((function(e,t){return Object(b.jsx)(v.Item,{name:e.name,image:e.image,value:e.value,perks:e.perks},t)}))})]}),Object(b.jsx)(O.Tab,{name:"Projects",icon:"bi-kanban",children:Object(b.jsx)(v,{children:this.state.projects.map((function(e,t){return Object(b.jsx)(v.Item,{name:e.name,image:e.image,value:e.progress,perks:e.perks,description:e.description},t)}))})})]})})}}]),a}(s.a.Component)),N=(a(23),function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("footer",{className:"Footer",children:Object(b.jsxs)("div",{className:"Footer__Content",children:[Object(b.jsxs)("p",{children:["Sandro Schaurer - ",(new Date).getFullYear()]}),Object(b.jsxs)("p",{children:["View source on ",Object(b.jsx)("a",{href:"https://github.com/r-evolve/cv",target:"_blank",rel:"noreferrer",children:"Github"})]})]})})}}]),a}(s.a.Component)),_=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"AppGrid",children:[Object(b.jsx)(u,{}),Object(b.jsx)(k,{}),Object(b.jsx)(g,{}),Object(b.jsx)(N,{})]})})}}]),a}(s.a.Component);i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.a70e3899.chunk.js.map