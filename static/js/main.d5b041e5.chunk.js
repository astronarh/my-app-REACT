(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(40),a=n(9),o={dialogs:[{id:1,name:"Dialog 1"},{id:2,name:"Dialog 2"},{id:3,name:"Dialog 3"},{id:4,name:"Dialog 4"}],messages:[{id:1,message:"Dialog 1"},{id:2,message:"Dialog 2"},{id:3,message:"Dialog 3"}]},i=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},133:function(e,t,n){e.exports={userPhoto:"users_userPhoto__VzMKm"}},134:function(e,t,n){e.exports=n.p+"static/media/user.332173a6.jpg"},135:function(e,t,n){e.exports=n.p+"static/media/preloader.e003a706.gif"},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(131),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"74d73d8b-630c-4ab2-91a8-f644d6179a94"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unFollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},u={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},15:function(e,t,n){e.exports={nav:"Navbar_nav__1Jdzd",item:"Navbar_item__hEdsf",activeLink:"Navbar_activeLink__1-oS9"}},164:function(e,t,n){e.exports=n(290)},169:function(e,t,n){},170:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(65),i=n.n(o);n(169),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(33),c=n(34),s=n(37),l=n(36),f=(n(170),n(15)),m=n.n(f),p=n(11),d=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Dialogs")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/news",activeClassName:m.a.activeLink},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/music",activeClassName:m.a.activeLink},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/settings",activeClassName:m.a.activeLink},"Settings")))},g=n(28),h=n(17),E=n(8),v=n.n(E),b=n(19),O=n(40),w=n(9),_=n(14),S=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)({},e,{},r):e}))},P={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},j=function(e){return{type:"FOLLOW",userId:e}},y=function(e){return{type:"UNFOLLOW",userId:e}},C=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},I=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},N=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},k=function(){var e=Object(b.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(N(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(N(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(w.a)({},e,{users:S(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(w.a)({},e,{users:S(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(w.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(w.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(w.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(w.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(w.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},F=n(55),L=n(68),U=n(127),x=n(70),A=n.n(x),z=n(132),D=n.n(z),R=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,i=e.onPageChanged,u=e.portionSize,c=void 0===u?10:u,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var m=Math.ceil(s/c),p=Object(r.useState)(1),d=Object(U.a)(p,2),g=d[0],h=d[1],E=(g-1)*c+1,v=g*c;return a.a.createElement("div",{className:A.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return a.a.createElement("span",{className:D()(Object(L.a)({},A.a.selectedPage,o===e),A.a.pageNumber),key:e,onClick:function(t){i(e)}},e)})),m>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},G=n(133),M=n.n(G),W=n(134),B=n.n(W),H=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:B.a,className:M.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"UnFollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.city"),a.a.createElement("div",null,"user.location.country"))))},q=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,i=e.users,u=Object(F.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,a.a.createElement(R,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),a.a.createElement("div",null,i.map((function(e){return a.a.createElement(H,{user:e,followingInProgress:u.followingInProgress,key:e.id,unFollow:u.unFollow,follow:u.follow})}))))},V=n(39),J=n(7),X=n(136),Z=Object(X.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),K=function(e){return e.usersPage.pageSize},Q=function(e){return e.usersPage.totalUsersCount},Y=function(e){return e.usersPage.currentPage},$=function(e){return e.usersPage.isFetching},ee=function(e){return e.usersPage.followingInProgress},te=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(V.a,null):null,a.a.createElement(q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,toggleFollowingInProgress:this.props.toggleFollowingInProgress,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),ne=Object(J.d)(Object(h.b)((function(e){return{users:Z(e),pageSize:K(e),totalUsersCount:Q(e),currentPage:Y(e),isFetching:$(e),followingInProgress:ee(e)}}),{follow:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n,e,_.c.follow.bind(_.c),j);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n,e,_.c.unFollow.bind(_.c),y);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:C,toggleFollowingInProgress:N,requestUsers:function(e,t){return function(){var n=Object(b.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),r(C(e)),n.next=4,_.c.getUsers(e,t);case 4:a=n.sent,r(I(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(te),re=n(91),ae=n.n(re),oe=function(e){return a.a.createElement("header",{className:ae.a.header},a.a.createElement("img",{src:"https://tinyjpg.com/images/social/website.jpg",alt:""}),a.a.createElement("div",{className:ae.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(p.b,{to:"/login"},"Login")))},ie=n(44),ue="samurai-network/auth/SET_USER_DATA",ce={id:null,email:null,login:null,isAuth:!1},se=function(e,t,n,r){return{type:ue,payload:{id:e,email:t,login:n,isAuth:r}}},le=function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){var n,r,a,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,i=r.email,t(se(a,i,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(w.a)({},e,{},t.payload);default:return e}},me=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(oe,this.props)}}]),n}(a.a.Component),pe=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(le());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(me),de=n(126),ge=n(32),he=n(56),Ee=n(52),ve=n.n(Ee),be=Object(de.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(ge.c)("Email","email",[he.b],ge.a),Object(ge.c)("Password","password",[he.b],ge.a,{type:"password"}),Object(ge.c)(null,"rememberMe",[],ge.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:ve.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),Oe=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(b.a)(v.a.mark((function r(a){var o,i;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(le()):(i=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(ie.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(be,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),we={initialized:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(w.a)({},e,{initialized:!0});default:return e}},Se=n(94),Pe=n(125),je={},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je;arguments.length>1&&arguments[1];return e},Ce=n(138),Ie=n(128),Ne=Object(J.c)({profilePage:Se.b,dialogsPage:Pe.a,sidebar:ye,usersPage:T,auth:fe,form:Ie.a,app:_e}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,Te=Object(J.e)(Ne,ke(Object(J.a)(Ce.a)));window.__store__=Te;var Fe=Te,Le=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(V.a,null)},a.a.createElement(e,t))}},Ue=a.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Ae=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(pe,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(g.b,{path:"/dialogs",render:Le(Ue)}),a.a.createElement(g.b,{path:"/profile/:userId?",render:Le(xe)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(ne,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(Oe,null)}}))):a.a.createElement(V.a,null)}}]),n}(a.a.Component),ze=Object(J.d)(g.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(le());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ae),De=function(e){return a.a.createElement(p.a,{basename:"/my-app-REACT"},a.a.createElement(h.a,{store:Fe},a.a.createElement(ze,null)))};i.a.render(a.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(55),a=n(0),o=n.n(a),i=n(52),u=n.n(i),c=n(88),s=(n(56),function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,i=n&&r;return o.a.createElement("div",{className:u.a.formControl+" "+(i?u.a.error:"")},o.a.createElement("div",null,a),i&&o.a.createElement("span",null,r))}),l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a)),i)}},39:function(e,t,n){"use strict";var r=n(135),a=n.n(r),o=n(0),i=n.n(o);t.a=function(e){return i.a.createElement("img",{width:100,src:a.a})}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__374av",error:"FormsControls_error__37uGw",formSummaryError:"FormsControls_formSummaryError__M9iZ8"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__3m754",pageNumber:"Paginator_pageNumber__O2_UV",selectedPage:"Paginator_selectedPage__2ODTF"}},91:function(e,t,n){e.exports={header:"Header_header__1ENRt",loginBlock:"Header_loginBlock__UbQ9H"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var r=n(8),a=n.n(r),o=n(19),i=n(40),u=n(9),c=n(14),s={posts:[{id:1,message:"Hi, how are you?",likeCount:10},{id:2,message:"It's my first post",likeCount:13}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likeCount:0};return Object(u.a)({},e,{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(u.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(u.a)({},e,{status:t.status});case"DELETE_POST":return Object(u.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.d5b041e5.chunk.js.map