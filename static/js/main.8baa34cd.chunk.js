(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),i=(n(68),n(69),n(18)),l=n.n(i),s=n(24),u=n(49),d=n(19),f=n(60),m=n(50),v=n(59),p=(n(71),n(137)),h=(n(72),n(51)),g=n.n(h),w=(n(73),{light:{App_background:"#fafafa",Header_foreground:"#121212",Header_background:"#fff",VideoInfo_foreground:"#262626",VideoInfo_background:"#fff",time:"#666"},dark:{App_background:"#121212",Header_foreground:"#fafafa",Header_background:"#262626",VideoInfo_foreground:"#fff",VideoInfo_background:"#262626",time:"#999"}}),b=o.a.createContext({theme:w.light,toggleTheme:function(){}}),E=function(){var e=Object(a.useContext)(b).theme;return o.a.createElement("button",{className:"MenuIcon",style:{color:e.Header_foreground}},o.a.createElement(g.a,null))},k=(n(79),function(){var e=Object(a.useContext)(b).theme;return o.a.createElement("a",{className:"Title",href:"/lfc-feed",target:"_self"},o.a.createElement("span",{style:{color:e.Header_foreground}},"LFC FEED"))}),y=n(53),I=n.n(y),j=(n(83),function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 20 20",style:{fill:"var(--tertiary)"}},o.a.createElement("path",{d:"M13.719 1.8c0.686 0.385 1.332 0.867 1.916 1.449 3.42 3.422 3.42 8.966 0 12.386s-8.965 3.42-12.386 0c-0.583-0.584-1.065-1.231-1.449-1.916 3.335 1.867 7.633 1.387 10.469-1.449s3.318-7.134 1.45-10.47z"}))}),C=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 20 20",style:{fill:"var(--tertiary)"}},o.a.createElement("path",{d:"M10 14c-2.209 0-4-1.791-4-4s1.791-4 4-4v0c2.209 0 4 1.791 4 4s-1.791 4-4 4v0zM9 1c0-0.552 0.448-1 1-1s1 0.448 1 1v0 2c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-2zM15.65 2.94c0.184-0.215 0.456-0.35 0.76-0.35 0.552 0 1 0.448 1 1 0 0.303-0.135 0.575-0.348 0.758l-0.001 0.001-1.4 1.4c-0.184 0.215-0.456 0.35-0.76 0.35-0.552 0-1-0.448-1-1 0-0.303 0.135-0.575 0.348-0.758l0.001-0.001 1.4-1.4zM18.99 9c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-1.98c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.98zM17.060 15.65c0.215 0.184 0.35 0.456 0.35 0.76 0 0.552-0.448 1-1 1-0.303 0-0.575-0.135-0.758-0.348l-0.001-0.001-1.4-1.4c-0.215-0.184-0.35-0.456-0.35-0.76 0-0.552 0.448-1 1-1 0.303 0 0.575 0.135 0.758 0.348l0.001 0.001 1.4 1.4zM11 18.99c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-1.98c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1.98zM4.35 17.060c-0.184 0.215-0.456 0.35-0.76 0.35-0.552 0-1-0.448-1-1 0-0.303 0.135-0.575 0.348-0.758l0.001-0.001 1.4-1.4c0.184-0.215 0.456-0.35 0.76-0.35 0.552 0 1 0.448 1 1 0 0.303-0.135 0.575-0.348 0.758l-0.001 0.001-1.4 1.4zM1.010 11c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.98c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-1.98zM2.94 4.35c-0.215-0.184-0.35-0.456-0.35-0.76 0-0.552 0.448-1 1-1 0.303 0 0.575 0.135 0.758 0.348l0.001 0.001 1.4 1.4c0.215 0.184 0.35 0.456 0.35 0.76 0 0.552-0.448 1-1 1-0.303 0-0.575-0.135-0.758-0.348l-0.001-0.001-1.4-1.4z"}))},x=function(){var e=Object(a.useContext)(b).toggleTheme;return o.a.createElement(I.a,{className:"ThemeSwitch",onChange:e,defaultChecked:!1,icons:{checked:o.a.createElement(j,null),unchecked:o.a.createElement(C,null)}})},O=function(){var e=Object(a.useContext)(b).theme;return o.a.createElement("header",{className:"Header",style:{backgroundColor:e.Header_background}},o.a.createElement(p.a,null,o.a.createElement(E,null),o.a.createElement(k,null),o.a.createElement(x,null)))},N=(n(84),n(22)),_=(n(85),n(140)),A=(n(86),function(e){var t=e.handleClick,n=e.video;return o.a.createElement("button",{className:"PostImage",onClick:t},o.a.createElement(_.a,null,o.a.createElement(_.a.Img,{src:function(){var e=n.snippet.thumbnails;return e.maxres?e.maxres.url:e.medium.url}(),title:n.snippet.title}),o.a.createElement(_.a.ImgOverlay,null,o.a.createElement(_.a.Text,null,n.snippet.title))))}),M=function(e){var t=e.video,n=Object(a.useContext)(b).theme;return o.a.createElement("h1",{className:"PostTitle",style:{color:n.VideoInfo_foreground}},t.snippet.title)},S=(n(87),function(){return o.a.createElement("svg",{className:"YouTubeIcon",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve","aria-labelledby":"youtubeIcon",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 71.412065 50"},o.a.createElement("title",{id:"youtubeIcon"},"YouTube"),o.a.createElement("g",{transform:"scale(0.58823529,0.58823529)"},o.a.createElement("path",{style:{fill:"#ff0000"},d:"M 118.9,13.3 C 117.5,8.1 113.4,4 108.2,2.6 98.7,0 60.7,0 60.7,0 60.7,0 22.7,0 13.2,2.5 8.1,3.9 3.9,8.1 2.5,13.3 0,22.8 0,42.5 0,42.5 0,42.5 0,62.3 2.5,71.7 3.9,76.9 8,81 13.2,82.4 22.8,85 60.7,85 60.7,85 c 0,0 38,0 47.5,-2.5 5.2,-1.4 9.3,-5.5 10.7,-10.7 2.5,-9.5 2.5,-29.2 2.5,-29.2 0,0 0.1,-19.8 -2.5,-29.3 z"}),o.a.createElement("polygon",{style:{fill:"#ffffff"},points:"80.2,42.5 48.6,24.3 48.6,60.7 "})))}),T=n(30),H=n.n(T),z=function(e){var t=e.video,n=Object(a.useContext)(b).theme;return o.a.createElement("time",{dateTime:t.snippet.publishedAt,title:H()(t.snippet.publishedAt).format("ll"),style:{color:n.time}},H()(t.snippet.publishedAt).fromNow())},V=function(e){var t=e.video;return o.a.createElement("div",{className:"PostNav"},o.a.createElement(S,null),o.a.createElement(z,{video:t}))},U=n(139),P=(n(89),n(55)),B=n.n(P),F=n(138),R=function(e){var t=e.videoId;return B.a.load(function(e){console.log(new e.Player("player"))}),o.a.createElement(F.a,{className:"VideoEmbed",aspectRatio:"16by9"},o.a.createElement("iframe",{id:"player",title:"video player",src:"https://www.youtube.com/embed/".concat(t,"?modestbranding=1&rel=0&enablejsapi=1"),allowFullScreen:!0}))},W=n(141),L=(n(90),function(e){var t=e.views,n=e.likes,r=e.dislikes,c=e.video,i=Object(a.useContext)(b).theme,l=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return o.a.createElement("div",{className:"VideoInfo",style:{backgroundColor:i.VideoInfo_background}},o.a.createElement(M,{video:c}),o.a.createElement(W.a,{now:100-n/r/100,title:"".concat(l(n)," likes / ").concat(l(r)," dislikes")}),o.a.createElement("span",{style:{color:i.VideoInfo_foreground}},l(t)," views"),o.a.createElement(z,{video:c}))}),J=function(e){var t=e.show,n=e.onHide,a=e.views,r=e.likes,c=e.dislikes,i=e.video,l=e.videoId;return o.a.createElement(U.a,{show:t,onHide:n,dialogClassName:"PostModal",centered:!0,restoreFocus:!0},o.a.createElement(U.a.Body,null,o.a.createElement(R,{videoId:l}),o.a.createElement(L,{views:a,likes:r,dislikes:c,video:i})))},Z=n(58),D=n.n(Z).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyDQMMjZqHBnIoOpZqsij8wRpvjaehgGVSk"}}),Q=function(e){var t=e.video,n=e.videoId,r=Object(a.useState)(!1),c=Object(N.a)(r,2),i=c[0],u=c[1],d=Object(a.useState)(0),f=Object(N.a)(d,2),m=f[0],v=f[1],p=Object(a.useState)(0),h=Object(N.a)(p,2),g=h[0],w=h[1],b=Object(a.useState)(0),E=Object(N.a)(b,2),k=E[0],y=E[1],I=function(){var e=Object(s.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("/videos",{params:{playlistId:"UU9LQwHZoucFT94I2h6JOcjw",part:"statistics",id:n}});case 2:t=e.sent,a=t.data.items[0].statistics,v(a.viewCount),w(a.likeCount),y(a.dislikeCount);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Post",style:{fontSize:"0"}},o.a.createElement(A,{handleClick:function(){I(),u(!0)},video:t}),o.a.createElement(M,{video:t}),o.a.createElement(V,{video:t})),o.a.createElement(J,{show:i,onHide:function(){u(!1)},views:m,likes:g,dislikes:k,video:t,videoId:n}))},q=function(e){var t=e.videos.map(function(e){var t=e.snippet.resourceId.videoId;return o.a.createElement(Q,{video:e,videoId:t,key:t})});return o.a.createElement("div",{className:"Feed"},t)},Y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).toggleTheme=function(){n.state.theme===w.light?document.body.style.backgroundColor="#121212":document.body.style.backgroundColor="#fafafa",n.setState(function(e){return{theme:e.theme===w.dark?w.light:w.dark}})},n.state={videos:[],theme:w.light,toggleTheme:n.toggleTheme},n.getVideos=Object(s.a)(l.a.mark(function e(){var t,a,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("/playlistItems",{params:{playlistId:"UU9LQwHZoucFT94I2h6JOcjw",part:"snippet",maxResults:30}});case 2:t=e.sent,a=t.data.items,o=a.sort(function(e,t){var n=e.snippet.publishedAt.toUpperCase(),a=t.snippet.publishedAt.toUpperCase();return n>a?-1:n<a?1:0}),console.log("get videos"),n.setState({videos:o});case 7:case"end":return e.stop()}},e)})),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getVideos()}},{key:"render",value:function(){return o.a.createElement(b.Provider,{value:this.state},o.a.createElement("div",{className:"App",style:{backgroundColor:this.state.theme.App_background}},o.a.createElement(O,null),o.a.createElement(q,{videos:this.state.videos})))}}]),t}(o.a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(Y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lfc-feed",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/lfc-feed","/service-worker.js");G?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):$(t,e)})}}()},62:function(e,t,n){e.exports=n(127)},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[62,1,2]]]);
//# sourceMappingURL=main.8baa34cd.chunk.js.map