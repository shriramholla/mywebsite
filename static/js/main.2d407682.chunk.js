(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},314:function(e,a,t){},315:function(e,a,t){},316:function(e,a,t){},317:function(e,a,t){},318:function(e,a,t){},319:function(e,a,t){},320:function(e,a,t){},321:function(e,a,t){},322:function(e,a,t){},323:function(e,a,t){},324:function(e,a,t){},325:function(e,a,t){},326:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(71),c=t.n(r),i=(t(92),t(13)),s=t(14),o=t(16),m=t(15),u=(t(93),t(94),t(95),function(e){return l.a.createElement("li",{className:"Item"},l.a.createElement("p",{onClick:e.clicked},e.children))}),d=(t(96),function(e){var a=function(e){var a=document.querySelector(e);a&&a.scrollIntoView({behavior:"smooth"})};return l.a.createElement("ul",{className:"Items"},l.a.createElement(u,{clicked:function(){return a("#About")}},"About me"),l.a.createElement(u,{clicked:function(){return a("#Experiences")}},"Experience"),l.a.createElement(u,{clicked:function(){return a("#Projects")}},"Projects"))}),p=(t(97),function(e){return l.a.createElement("div",{onClick:e.clicked,className:"ToggleDrawer"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}),E=function(e){return l.a.createElement("header",{className:"Navbar"},l.a.createElement(p,{clicked:e.toggleDrawer}),l.a.createElement("p",{onClick:function(){var e=document.querySelector("#Welcome");e&&e.scrollIntoView({behavior:"smooth"})}},"shriram holla"),l.a.createElement("nav",{className:"DesktopOnly"},l.a.createElement(d,null)))},h=(t(98),function(e){return e.children}),f=t(72),g=t.n(f),v=(t(99),function(e){return e.show?l.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),b=function(e){var a=["SideDrawer","Close"];return e.open&&(a=["SideDrawer","Open"]),l.a.createElement(h,null,l.a.createElement(v,{show:e.open,clicked:e.closed}),l.a.createElement("div",{className:a.join(" ")},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("nav",null,l.a.createElement(d,null)),l.a.createElement("p",null,"\xa9 2020 Shriram Holla")))},y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={showSideDrawer:!0},e.sideDrawerHandler=function(){e.setState({showSidedrawer:!1})},e.sideDrawerToggler=function(){e.setState((function(a){e.setState({showSidedrawer:!a.showSidedrawer})}))},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(h,null,l.a.createElement(E,{toggleDrawer:this.sideDrawerToggler}),l.a.createElement(b,{open:this.state.showSidedrawer,closed:this.sideDrawerHandler}))}}]),t}(n.Component),w=(t(100),t(101),function(e){var a=["Button"];return e.class&&a.push(e.class),l.a.createElement("a",{href:e.href},l.a.createElement("button",{className:a.join(" ")},e.children))}),k=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={tags:["\ud83e\udde0 AI Enthusiast","\ud83d\udcbb Software Developer","\ud83e\udd16 Passionate Programmer","\ud83c\udfc0 Basketball Lover"],index:0},e.tagToggler=function(){setInterval((function(){var a=e.state.index+1;a>=e.state.tags.length&&(a=0),e.setState({index:a})}),2e3)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.tagToggler()}},{key:"render",value:function(){return l.a.createElement("div",{id:"Welcome"},l.a.createElement("p",{className:"Hey"},l.a.createElement("span",{className:"Emoji"},"\ud83d\udc4b"),"Hey There!"),l.a.createElement("p",{className:"Name"},l.a.createElement("span",null,"I'm")," Shriram Holla."),l.a.createElement("p",{className:"Tag"},this.state.tags[this.state.index]),l.a.createElement(w,{class:"Hire",href:"mailto:sholla@uwaterloo.ca"},"Let's Talk"),l.a.createElement("div",{className:"Logos"},l.a.createElement("a",{href:"mailto:sholla@uwaterloo.ca"},l.a.createElement("i",{className:"fas fa-envelope fa-3x Logo"})),l.a.createElement("a",{href:"https://github.com/shriramholla"},l.a.createElement("i",{className:"fab fa-github fa-3x Logo"})),l.a.createElement("a",{href:"https://linkedin.com/in/shriramholla"},l.a.createElement("i",{className:"fab fa-linkedin fa-3x Logo"})),l.a.createElement("a",{href:"https://medium.com/@bab.shriram"},l.a.createElement("i",{className:"fab fa-medium-m fa-3x Logo"}))))}}]),t}(n.Component),N=t(73),x=t.n(N),D=(t(314),function(e){return l.a.createElement(x.a,{className:"Particles",params:{particles:{opacity:{value:.1,anim:{enable:!1,speed:.55,opacity_min:0,sync:!1}},color:{value:"#000000"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},line_linked:{enable:!1},number:{value:60,density:{enable:!0,value_area:4e3}},size:{value:10,random:!1,anim:{enable:!0,speed:15,size_min:0,sync:!1}},move:{enable:!0,speed:0,direction:"none"}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"}}}}})}),j=(t(315),t(74)),A=t.n(j),S=(t(316),function(e){return l.a.createElement("div",{className:"Title"},e.children,l.a.createElement("div",{className:"border"}))}),L=t(75),C=t.n(L),I=function(e){return l.a.createElement("div",{id:"About"},l.a.createElement(S,null,"About Me"),l.a.createElement("div",{className:"Outer"},l.a.createElement("div",{className:"Inner"},l.a.createElement("img",{className:"Image",src:A.a,alt:""}),l.a.createElement("div",{className:"Info"},l.a.createElement("p",{className:"Text"},"I'm a ",l.a.createElement("span",null,"Second Year Computer Science "),"Student at the ",l.a.createElement("span",null,"University of Waterloo"),". I am a Passionate Programmer who enjoys messing around and discovering new stuff in the coding world! I am fascinated by ",l.a.createElement("span",null,"AI")," and ",l.a.createElement("span",null,"Machine Learning")," and love getting my hands dirty with random datasets. Looking for Internship Opportunities for ",l.a.createElement("span",null,"Winter 2021"),"."),l.a.createElement(w,{class:"Resume",href:C.a},"View My Resume")))))},O=(t(317),t(318),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("img",{className:"Gif",src:this.props.source,alt:""})}}]),t}(n.Component)),T=t(76),H=t.n(T),M=t(77),G=t.n(M),W=(t(319),function(e){return l.a.createElement("div",{className:"Box"},e.children)}),P=(t(320),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"Heading"},l.a.createElement("p",{className:"TopicTitle"},e.title),l.a.createElement("p",{className:"Date"},e.children)))}),B=(t(321),function(e){return l.a.createElement("div",{className:"Description"},e.children)}),V=(t(322),function(e){var a=["Bullet"];return e.class&&a.push(e.class),l.a.createElement("p",{className:a.join(" ")},e.children)}),R=function(e){return l.a.createElement("div",{id:"Experiences"},l.a.createElement(S,null,"Experience"),l.a.createElement(W,null,l.a.createElement(P,{title:"Freelance Software Developer"},"April 2020 - ",l.a.createElement("span",{className:"Current"},"Current")),l.a.createElement(B,null,l.a.createElement(V,null,"Worked closely with clients to collect requirements and ",l.a.createElement("span",null,"ensure project quality.")),l.a.createElement(V,null,"Modified existing software to fix coding errors, ",l.a.createElement("span",null,"improve interfaces")," and ",l.a.createElement("span",null,"overall efficiency"),"."),l.a.createElement(V,null,"Implemented Machine Learning algorithms like ",l.a.createElement("span",null,"Linear Regression")," and ",l.a.createElement("span",null,"K Nearest Neighbours")," along with ",l.a.createElement("span",null,"computer vision")," models for advanced and accurate object detection with analytics.")),l.a.createElement("p",{className:"DemoTitle"},"Demos"),l.a.createElement("div",{className:"Demo"},l.a.createElement("p",{className:"Date"},"Inventory Management"),l.a.createElement("div",{className:"DescBox"},l.a.createElement(V,null,"A program that uses ",l.a.createElement("span",null,"Computer Vision algorithms")," to identify and count shoes moving rapidly on a conveyor belt."),l.a.createElement(V,null,"Improved ",l.a.createElement("span",null,"speed")," of inventory management by ",l.a.createElement("span",null,"300%.")),l.a.createElement(V,null,"Decreased dependency on labour and ",l.a.createElement("span",null,"reduced client's monthly expenses")," by ",l.a.createElement("span",null,"60%."))),l.a.createElement(O,{source:H.a})),l.a.createElement("div",{className:"Demo"},l.a.createElement("p",{className:"Date"},"AutoNET"),l.a.createElement("div",{className:"DescBox"},l.a.createElement(V,null,"An automated ",l.a.createElement("span",null,"AI-as-a-Service")," that provides end to end ",l.a.createElement("span",null,"Annotation"),", ",l.a.createElement("span",null,"Training"),", ",l.a.createElement("span",null,"Validation")," and ",l.a.createElement("span",null,"Detection")," of custom objects.")),l.a.createElement(O,{source:G.a}))))},_=(t(323),function(e){return l.a.createElement("div",{className:"Project"},l.a.createElement(W,null,l.a.createElement(P,{title:e.title},l.a.createElement("span",null,e.date)),l.a.createElement(B,null,e.children),l.a.createElement(O,{id:"image",source:e.source})))}),F=(t(324),t(78)),q=t.n(F),z=t(79),J=t.n(z),Y=t(80),K=t.n(Y),U=t(81),X=t.n(U),Z=t(82),$=t.n(Z),Q=t(83),ee=t.n(Q),ae=t(84),te=t.n(ae),ne=t(85),le=t.n(ne),re=t(86),ce=t.n(re),ie=function(e){return l.a.createElement("div",{id:"Projects"},l.a.createElement(S,null,"Projects"),l.a.createElement(_,{title:"Connec-ted",source:q.a,date:"March 2020"},l.a.createElement(V,null,"A ",l.a.createElement("span",null,"SMS-Enabled Chatbot")," that gives direction and news ",l.a.createElement("span",null,"without")," the need for an internet connection"),l.a.createElement(V,null,"\ud83c\udfc6 ",l.a.createElement("span",{className:"Gradient"},"Winner - People's Choice Award - WinHacks")),l.a.createElement(w,{class:"Links",href:"https://github.com/shriramholla/connec-ted"},"GitHub"),l.a.createElement(w,{class:"Links",href:"https://youtu.be/fl96X8ol_u0"},"Youtube")),l.a.createElement(_,{title:"Ardour",source:J.a,date:"February 2020"},l.a.createElement(V,null,"A ",l.a.createElement("span",null,"Web Application")," that gives feedback and suggestions to movies and songs by capturing emotions ",l.a.createElement("span",null,"in real time")," and interpreting them using ",l.a.createElement("span",null,"sentiment analysis"),"."),l.a.createElement(V,null,"\ud83c\udf96\ufe0f ",l.a.createElement("span",{className:"Gradient"},"Top 10 - Hack the Valley IV")),l.a.createElement(w,{class:"Links",href:"https://github.com/shriramholla/Ardor"},"GitHub")),l.a.createElement(_,{title:"Safe Crowds",source:K.a,date:"April 2020"},l.a.createElement(V,null,"A program that checks social distancing and creates ",l.a.createElement("span",null,"Dynamic Social Fences")," and classifies densely populated zones using ",l.a.createElement("span",null,"Machine Learning Algorithms"),"."),l.a.createElement(w,{class:"Links",href:"https://github.com/shriramholla/Safe-Crowds"},"GitHub")),l.a.createElement(_,{title:"Convey",source:X.a,date:"January 2020"},l.a.createElement(V,null,"An accessibility ",l.a.createElement("span",null,"Web Application")," for the physically challenged which enables them to consume information from mediums which they otherwise may not be able to."),l.a.createElement(w,{class:"Links",href:"https://github.com/shriramholla/convey"},"GitHub")),l.a.createElement(_,{title:"To Do List",source:$.a,date:"December 2019"},l.a.createElement(V,null,"A simple To Do List ",l.a.createElement("span",null,"extra customizable")," with different lists for each situation."),l.a.createElement(w,{class:"Links",href:"https://github.com/shriramholla/dailySched"},"GitHub"),l.a.createElement(w,{class:"Links",href:"https://bit.ly/2G4wZyR"},"Website")),l.a.createElement(_,{title:"Thermal Fencing",source:ee.a,date:"April 2020"},l.a.createElement(V,null,"A Concept to help identify positive cases of COVID-19 in public areas."),l.a.createElement(w,{class:"Links"},"GitHub")),l.a.createElement(_,{title:"Sudoku Solver",source:te.a,date:"November 2019"},l.a.createElement(V,null,"A program that solves any valid combination of a 9x9 Sudoku within a fraction of a second using recursion and backtracking algorithms")),l.a.createElement(_,{title:"Coro-nah",source:le.a,date:"March 2020"},l.a.createElement(V,null,"A ",l.a.createElement("span",null,'"Visual"')," cough detector."),l.a.createElement(w,{class:"Links",href:"https://github.com/shriramholla/coroNAH"},"GitHub")),l.a.createElement(_,{title:"Kaggle - Titanic Dataset",source:ce.a,date:"April 2020"},l.a.createElement(V,null,"Using ",l.a.createElement("span",null,"Support Vector Models")," and ",l.a.createElement("span",null,"Linear Regression")," to predict the survival of passengers on the Titanic"),l.a.createElement(w,{class:"Links"},"GitHub")))},se=(t(325),function(e){return l.a.createElement("div",{className:"Footer"},l.a.createElement("p",null,"Built using React.js. You can fork my website ",l.a.createElement("a",{href:"https://github.com/shriramholla/mywebsite"},"here")))}),oe=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(D,null),l.a.createElement(I,null),l.a.createElement(R,null),l.a.createElement(ie,null),l.a.createElement(se,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,a,t){e.exports=t.p+"static/media/myimg.8bd89501.jpg"},74:function(e,a,t){e.exports=t.p+"static/media/face.d24b0c31.jpg"},75:function(e,a,t){e.exports=t.p+"static/media/myresume.50effa3f.pdf"},76:function(e,a,t){e.exports=t.p+"static/media/inventory.dd3e213a.gif"},77:function(e,a,t){e.exports=t.p+"static/media/autonet.f6555337.gif"},78:function(e,a,t){e.exports=t.p+"static/media/ted.1fcdf130.gif"},79:function(e,a,t){e.exports=t.p+"static/media/ardor.1230db21.gif"},80:function(e,a,t){e.exports=t.p+"static/media/SDD.49a1d1e3.gif"},81:function(e,a,t){e.exports=t.p+"static/media/convey.08e3e2bb.gif"},82:function(e,a,t){e.exports=t.p+"static/media/daily.d4e56f26.gif"},83:function(e,a,t){e.exports=t.p+"static/media/thermal.0b712f20.gif"},84:function(e,a,t){e.exports=t.p+"static/media/sudoku.80a74cd8.gif"},85:function(e,a,t){e.exports=t.p+"static/media/coronah.3aa830db.gif"},86:function(e,a,t){e.exports=t.p+"static/media/titanic.a9eb84fc.jpg"},87:function(e,a,t){e.exports=t(326)},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.2d407682.chunk.js.map