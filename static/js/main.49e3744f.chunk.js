(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),i=n.n(r),c=(n(79),n(80),n(28)),s=n.n(c),l=n(34),u=n(61),d=n(29),m=n(70),f=n(62),p=n(69),h=(n(82),n(148)),b=(n(83),n(63)),v=n.n(b),g=(n(84),{light:{foreground:"#222222",background:"#fafafa",background_2:"#ffffff",primary:"#d10122",border:"rgba(0, 0, 0, 0.125)"},dark:{foreground:"#ffffff",background:"#121212",background_2:"#262626",primary:"#fafafa",border:"#000000"}}),w=o.a.createContext({theme:g.light,toggleTheme:function(){}}),k=function(){var e=Object(a.useContext)(w).theme;return o.a.createElement("button",{className:"MenuIcon",style:{color:e.primary}},o.a.createElement(v.a,null))},E=(n(90),function(){var e=Object(a.useContext)(w).theme;return o.a.createElement("a",{className:"Title",href:"/lfc-feed",target:"_self"},o.a.createElement("span",{style:{color:e.primary}},"LFC FEED"))}),y=n(15),j=n(155),O=n(150),C=(n(91),Object(y.a)(function(e){return Object(j.a)({root:{width:50,height:24,padding:0,overflow:"visible"},switchBase:{padding:1,"&$checked":{transform:"translateX(26px)","& + $track":{backgroundColor:"#121212",opacity:1,border:"none"}},"&$focusVisible $thumb":{boxShadow:"0 0 2px 3px #00a599"}},thumb:{width:22,height:22,backgroundColor:"#fafafa"},track:{borderRadius:12,border:"1px solid #121212",backgroundColor:"#121212",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}})})(function(e){var t=e.classes,n=Object(a.useContext)(w).toggleTheme;return o.a.createElement(O.a,{className:"ThemeSwitch",onChange:n,disableRipple:!0,focusVisibleClassName:t.focusVisible,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}})})),x=function(){var e=Object(a.useContext)(w).theme;return o.a.createElement("header",{className:"Header",style:{backgroundColor:e.background_2}},o.a.createElement(h.a,null,o.a.createElement(k,null),o.a.createElement(E,null),o.a.createElement(C,null)))},I=(n(92),n(25)),S=n(30),A=n.n(S),N=n(152),T=n(153),F=(n(94),n(66)),U=n.n(F).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyDQMMjZqHBnIoOpZqsij8wRpvjaehgGVSk"}}),R=n(67),V=n.n(R),B=n(149),H=function(e){var t=e.videoId;return V.a.load(function(e){console.log(new e.Player("player"))}),o.a.createElement(B.a,{className:"VideoEmbed",aspectRatio:"16by9"},o.a.createElement("iframe",{id:"player",title:"video player",src:"https://www.youtube.com/embed/".concat(t,"?modestbranding=1&rel=0&enablejsapi=1"),allowFullScreen:!0}))},W=n(154),L=(n(113),function(e){var t=e.views,n=e.likes,r=e.dislikes,i=e.video,c=Object(a.useContext)(w).theme,s=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return o.a.createElement("div",{className:"VideoInfo",style:{backgroundColor:c.background_2}},o.a.createElement("h1",{style:{color:c.foreground}},i.snippet.title),o.a.createElement(W.a,{now:100-n/r/100,title:"".concat(s(n)," likes / ").concat(s(r)," dislikes")}),o.a.createElement("span",{style:{color:c.foreground}},s(t)," views"),o.a.createElement("time",{dateTime:i.snippet.publishedAt,title:A()(i.snippet.publishedAt).format("ll")},A()(i.snippet.publishedAt).fromNow()))}),M=n(151),_=(n(114),function(e){var t=e.show,n=e.onHide,a=e.views,r=e.likes,i=e.dislikes,c=e.video,s=e.videoId;return o.a.createElement(M.a,{show:t,onHide:n,dialogClassName:"FeedModal",centered:!0,restoreFocus:!0},o.a.createElement(M.a.Body,null,o.a.createElement(H,{videoId:s}),o.a.createElement(L,{views:a,likes:r,dislikes:i,video:c})))}),$=function(e){var t=e.video,n=e.videoId,r=Object(a.useContext)(w).theme,i=Object(a.useState)(!0),c=Object(I.a)(i,2),u=c[0],d=c[1],m=Object(a.useState)(!1),f=Object(I.a)(m,2),p=f[0],h=f[1],b=Object(a.useState)(!1),v=Object(I.a)(b,2),g=v[0],k=v[1],E=Object(a.useState)(0),y=Object(I.a)(E,2),j=y[0],O=y[1],C=Object(a.useState)(0),x=Object(I.a)(C,2),S=x[0],F=x[1],R=Object(a.useState)(0),V=Object(I.a)(R,2),B=V[0],W=V[1],M=window.matchMedia("(max-width: 575.98px)"),$=function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/videos",{params:{playlistId:"UU9LQwHZoucFT94I2h6JOcjw",part:"statistics",id:n}});case 2:t=e.sent,O(t.data.items[0].statistics.viewCount),F(t.data.items[0].statistics.likeCount),W(t.data.items[0].statistics.dislikeCount);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"FeedItem",onClick:function(){M.matches?u?($(),d(!1),h(!0)):(h(!1),d(!0)):($(),k(!0))}},o.a.createElement(N.a,{style:{borderColor:r.border}},o.a.createElement(T.a,{in:u},o.a.createElement("div",null,o.a.createElement(N.a.Img,{src:t.snippet.thumbnails.medium.url,title:t.snippet.title}),o.a.createElement(N.a.ImgOverlay,null,o.a.createElement(N.a.Text,null,t.snippet.title)))),o.a.createElement(T.a,{in:p,mountOnEnter:!0,unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(H,{videoId:n}),o.a.createElement(L,{views:j,likes:S,dislikes:B,video:t}))),o.a.createElement(T.a,{in:u},o.a.createElement("div",null,o.a.createElement(N.a.Footer,{style:{backgroundColor:r.background_2}},o.a.createElement("time",{dateTime:t.snippet.publishedAt,title:A()(t.snippet.publishedAt).format("ll")},A()(t.snippet.publishedAt).fromNow())))))),o.a.createElement(_,{show:g,onHide:function(){k(!1)},views:j,likes:S,dislikes:B,video:t,videoId:n}))},J=function(e){var t=e.videos.map(function(e){var t=e.snippet.resourceId.videoId;return o.a.createElement($,{video:e,videoId:t,key:t})});return o.a.createElement("div",{className:"Feed"},t)},P=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).toggleTheme=function(){n.setState(function(e){return{theme:e.theme===g.dark?g.light:g.dark}})},n.state={videos:[],theme:g.light,toggleTheme:n.toggleTheme},n.getVideos=Object(l.a)(s.a.mark(function e(){var t,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/playlistItems",{params:{playlistId:"UU9LQwHZoucFT94I2h6JOcjw",part:"snippet",maxResults:30}});case 2:t=e.sent,a=t.data.items,o=a.sort(function(e,t){var n=e.snippet.publishedAt.toUpperCase(),a=t.snippet.publishedAt.toUpperCase();return n>a?-1:n<a?1:0}),console.log("get videos"),n.setState({videos:o});case 7:case"end":return e.stop()}},e)})),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getVideos()}},{key:"render",value:function(){return o.a.createElement(w.Provider,{value:this.state},o.a.createElement("div",{className:"App",style:{backgroundColor:this.state.theme.background}},o.a.createElement(x,null),o.a.createElement(J,{videos:this.state.videos})))}}]),t}(o.a.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lfc-feed",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/lfc-feed","/service-worker.js");Z?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):D(t,e)})}}()},73:function(e,t,n){e.exports=n(132)},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.49e3744f.chunk.js.map