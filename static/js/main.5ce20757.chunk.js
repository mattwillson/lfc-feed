(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),i=(n(59),n(60),n(16)),l=n.n(i),s=n(20),u=n(42),d=n(43),m=n(51),f=n(44),v=n(52),h=(n(62),n(119)),p=(n(63),n(64),{light:{App_background:"#fafafa",Header_foreground:"#121212",Header_background:"#fff",VideoInfo_foreground:"#262626",VideoInfo_background:"#fff",time:"#666"},dark:{App_background:"#121212",Header_foreground:"#fafafa",Header_background:"#262626",VideoInfo_foreground:"#fff",VideoInfo_background:"#262626",time:"#999"}}),g=o.a.createContext({theme:p.light,toggleTheme:function(){}}),w=function(){var e=Object(a.useContext)(g).theme;return o.a.createElement("button",{className:"DropdownIcon"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"27",viewBox:"0 0 24 24"},o.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.a.createElement("path",{style:{fill:e.Header_foreground},d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"})))},b=(n(65),function(){var e=Object(a.useContext)(g).theme;return o.a.createElement("a",{className:"Title",href:"/lfc-feed",target:"_self"},o.a.createElement("span",{style:{color:e.Header_foreground}},"LFC FEED"))}),E=n(45),k=n.n(E),y=(n(71),function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 20 20",style:{fill:"var(--tertiary)"}},o.a.createElement("path",{d:"M13.719 1.8c0.686 0.385 1.332 0.867 1.916 1.449 3.42 3.422 3.42 8.966 0 12.386s-8.965 3.42-12.386 0c-0.583-0.584-1.065-1.231-1.449-1.916 3.335 1.867 7.633 1.387 10.469-1.449s3.318-7.134 1.45-10.47z"}))}),C=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 20 20",style:{fill:"var(--tertiary)"}},o.a.createElement("path",{d:"M10 14c-2.209 0-4-1.791-4-4s1.791-4 4-4v0c2.209 0 4 1.791 4 4s-1.791 4-4 4v0zM9 1c0-0.552 0.448-1 1-1s1 0.448 1 1v0 2c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-2zM15.65 2.94c0.184-0.215 0.456-0.35 0.76-0.35 0.552 0 1 0.448 1 1 0 0.303-0.135 0.575-0.348 0.758l-0.001 0.001-1.4 1.4c-0.184 0.215-0.456 0.35-0.76 0.35-0.552 0-1-0.448-1-1 0-0.303 0.135-0.575 0.348-0.758l0.001-0.001 1.4-1.4zM18.99 9c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-1.98c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.98zM17.060 15.65c0.215 0.184 0.35 0.456 0.35 0.76 0 0.552-0.448 1-1 1-0.303 0-0.575-0.135-0.758-0.348l-0.001-0.001-1.4-1.4c-0.215-0.184-0.35-0.456-0.35-0.76 0-0.552 0.448-1 1-1 0.303 0 0.575 0.135 0.758 0.348l0.001 0.001 1.4 1.4zM11 18.99c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-1.98c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1.98zM4.35 17.060c-0.184 0.215-0.456 0.35-0.76 0.35-0.552 0-1-0.448-1-1 0-0.303 0.135-0.575 0.348-0.758l0.001-0.001 1.4-1.4c0.184-0.215 0.456-0.35 0.76-0.35 0.552 0 1 0.448 1 1 0 0.303-0.135 0.575-0.348 0.758l-0.001 0.001-1.4 1.4zM1.010 11c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.98c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-1.98zM2.94 4.35c-0.215-0.184-0.35-0.456-0.35-0.76 0-0.552 0.448-1 1-1 0.303 0 0.575 0.135 0.758 0.348l0.001 0.001 1.4 1.4c0.215 0.184 0.35 0.456 0.35 0.76 0 0.552-0.448 1-1 1-0.303 0-0.575-0.135-0.758-0.348l-0.001-0.001-1.4-1.4z"}))},x=function(){var e=Object(a.useContext)(g).toggleTheme;return o.a.createElement(k.a,{className:"ThemeSwitch",onChange:e,defaultChecked:!1,icons:{checked:o.a.createElement(y,null),unchecked:o.a.createElement(C,null)}})},I=function(){var e=Object(a.useContext)(g).theme;return o.a.createElement("header",{className:"Header",style:{backgroundColor:e.Header_background}},o.a.createElement(h.a,null,o.a.createElement(w,null),o.a.createElement(b,null),o.a.createElement(x,null)))},j=(n(72),n(18)),O=(n(73),n(122)),z=(n(74),function(e){var t=e.handleClick,n=e.video;return o.a.createElement("button",{className:"PostImage",onClick:t},o.a.createElement(O.a,null,o.a.createElement(O.a.Img,{src:function(){var e=n.snippet.thumbnails;return e.maxres?e.maxres.url:e.medium.url}(),title:n.snippet.title}),o.a.createElement(O.a.ImgOverlay,null,o.a.createElement(O.a.Text,null,n.snippet.title))))}),M=function(e){var t=e.video,n=Object(a.useContext)(g).theme;return o.a.createElement("h1",{className:"PostTitle",style:{color:n.VideoInfo_foreground}},t.snippet.title)},N=(n(75),function(){return o.a.createElement("svg",{className:"YouTubeIcon",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve","aria-labelledby":"youtubeIcon",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 71.412065 50"},o.a.createElement("title",{id:"youtubeIcon"},"YouTube"),o.a.createElement("g",{transform:"scale(0.58823529,0.58823529)"},o.a.createElement("path",{style:{fill:"#ff0000"},d:"M 118.9,13.3 C 117.5,8.1 113.4,4 108.2,2.6 98.7,0 60.7,0 60.7,0 60.7,0 22.7,0 13.2,2.5 8.1,3.9 3.9,8.1 2.5,13.3 0,22.8 0,42.5 0,42.5 0,42.5 0,62.3 2.5,71.7 3.9,76.9 8,81 13.2,82.4 22.8,85 60.7,85 60.7,85 c 0,0 38,0 47.5,-2.5 5.2,-1.4 9.3,-5.5 10.7,-10.7 2.5,-9.5 2.5,-29.2 2.5,-29.2 0,0 0.1,-19.8 -2.5,-29.3 z"}),o.a.createElement("polygon",{style:{fill:"#ffffff"},points:"80.2,42.5 48.6,24.3 48.6,60.7 "})))}),_=n(26),H=n.n(_),S=function(e){var t=e.video,n=Object(a.useContext)(g).theme;return o.a.createElement("time",{dateTime:t.snippet.publishedAt,title:H()(t.snippet.publishedAt).format("ll"),style:{color:n.time}},H()(t.snippet.publishedAt).fromNow())},A=(n(77),function(e){var t=e.handleClick,n=Object(a.useContext)(g).theme;return o.a.createElement("button",{className:"OpenIcon",onClick:t},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.a.createElement("path",{style:{fill:n.VideoInfo_foreground},d:"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"})))}),T=function(e){var t=e.handleClick,n=e.video;return o.a.createElement("div",{className:"PostNav"},o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement(S,{video:n})),o.a.createElement(A,{handleClick:t}))},V=n(121),B=(n(78),n(47)),U=n.n(B),P=n(120),F=function(e){var t=e.videoId;return U.a.load(function(e){console.log(new e.Player("player"))}),o.a.createElement(P.a,{className:"VideoEmbed",aspectRatio:"16by9"},o.a.createElement("iframe",{id:"player",title:"video player",src:"https://www.youtube.com/embed/".concat(t,"?modestbranding=1&rel=0&enablejsapi=1"),allowFullScreen:!0}))},R=n(123),W=(n(79),function(e){var t=e.views,n=e.likes,r=e.dislikes,c=e.video,i=Object(a.useContext)(g).theme,l=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return o.a.createElement("div",{className:"VideoInfo",style:{backgroundColor:i.VideoInfo_background}},o.a.createElement(M,{video:c}),o.a.createElement(R.a,{now:100-n/r/100,title:"".concat(l(n)," likes / ").concat(l(r)," dislikes")}),o.a.createElement("span",{style:{color:i.VideoInfo_foreground}},l(t)," views"),o.a.createElement(S,{video:c}))}),L=function(e){var t=e.show,n=e.onHide,a=e.views,r=e.likes,c=e.dislikes,i=e.video,l=e.videoId;return o.a.createElement(V.a,{show:t,onHide:n,dialogClassName:"PostModal",centered:!0,restoreFocus:!0},o.a.createElement(V.a.Body,null,o.a.createElement(F,{videoId:l}),o.a.createElement(W,{views:a,likes:r,dislikes:c,video:i})))},D=n(50),J=n.n(D).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyDQMMjZqHBnIoOpZqsij8wRpvjaehgGVSk"}}),Z=function(e){var t=e.video,n=e.videoId,r=Object(a.useState)(!1),c=Object(j.a)(r,2),i=c[0],u=c[1],d=Object(a.useState)(0),m=Object(j.a)(d,2),f=m[0],v=m[1],h=Object(a.useState)(0),p=Object(j.a)(h,2),g=p[0],w=p[1],b=Object(a.useState)(0),E=Object(j.a)(b,2),k=E[0],y=E[1],C=function(){var e=Object(s.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("/videos",{params:{playlistId:"UU9LQwHZoucFT94I2h6JOcjw",part:"statistics",id:n}});case 2:t=e.sent,a=t.data.items[0].statistics,v(a.viewCount),w(a.likeCount),y(a.dislikeCount);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){C(),u(!0)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Post",style:{fontSize:"0"}},o.a.createElement(z,{handleClick:x,video:t}),o.a.createElement(M,{video:t}),o.a.createElement(T,{handleClick:x,video:t})),o.a.createElement(L,{show:i,onHide:function(){u(!1)},views:f,likes:g,dislikes:k,video:t,videoId:n}))},Q=function(e){var t=e.videos.map(function(e){var t=e.snippet.resourceId.videoId;return o.a.createElement(Z,{video:e,videoId:t,key:t})});return o.a.createElement("div",{className:"Feed"},t)},q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).toggleTheme=function(){n.state.theme===p.light?document.body.style.backgroundColor="#121212":document.body.style.backgroundColor="#fafafa",n.setState(function(e){return{theme:e.theme===p.dark?p.light:p.dark}})},n.state={videos:[],theme:p.light,toggleTheme:n.toggleTheme},n.getVideos=Object(s.a)(l.a.mark(function e(){var t,a,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("/playlistItems",{params:{playlistId:"UU9LQwHZoucFT94I2h6JOcjw",part:"snippet",maxResults:30}});case 2:t=e.sent,a=t.data.items,o=a.sort(function(e,t){var n=e.snippet.publishedAt.toUpperCase(),a=t.snippet.publishedAt.toUpperCase();return n>a?-1:n<a?1:0}),console.log("get videos"),n.setState({videos:o});case 7:case"end":return e.stop()}},e)})),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getVideos()}},{key:"render",value:function(){return o.a.createElement(g.Provider,{value:this.state},o.a.createElement("div",{className:"App",style:{backgroundColor:this.state.theme.App_background}},o.a.createElement(I,null),o.a.createElement(Q,{videos:this.state.videos})))}}]),t}(o.a.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lfc-feed",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/lfc-feed","/service-worker.js");Y?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):G(t,e)})}}()},53:function(e,t,n){e.exports=n(117)},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.5ce20757.chunk.js.map