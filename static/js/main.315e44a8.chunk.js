(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n(331)},137:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),o=n.n(l);n(137),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,s=n(337),c=n(335),u=n(334),m=n(128),p=n.n(m),d=n(129),h=n.n(d),f=n(336),g=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(g.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},b=g,y=n(9),w=n(65),v=n.n(w),j=(n(185),n(187),{apiKey:"AIzaSyChNCRKzAQMSBFORDYOdgnJTU19Ghh5JRo",authDomain:"portfolio-2d8f9.firebaseapp.com",databaseURL:"https://portfolio-2d8f9.firebaseio.com",projectId:"portfolio-2d8f9",storageBucket:"portfolio-2d8f9.appspot.com",messagingSenderId:"418075371145"}),C=function e(){var t=this;Object(y.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},v.a.initializeApp(j),this.auth=v.a.auth(),this.db=v.a.database()},O=E(function(e){var t=e.firebase;return r.a.createElement(f.a,{style:{position:"absolute",right:50,top:5},variant:"primary",onClick:t.doSignOut},"Sign Out")}),S="/home",x=r.a.createContext(null),k=n(10),A=n(12),P=n(11),T=n(13),U=function(e){var t=function(t){function n(e){var t;return Object(y.a)(this,n),(t=Object(A.a)(this,Object(P.a)(n).call(this,e))).state={authUser:null},t}return Object(T.a)(n,t),Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(x.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return E(t)},D=n(338),L=n(63),R=function(e){return function(t){var n=function(n){function a(){return Object(y.a)(this,a),Object(A.a)(this,Object(P.a)(a).apply(this,arguments))}return Object(T.a)(a,n),Object(k.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(n){e(n)||t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(x.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(L.a)(D.a,E)(n)}},I={color:"white",fontSize:"20px",justifyContent:"space-between",display:"inline-block"},M={width:"100%"},W=function(){return r.a.createElement("span",null,r.a.createElement("p",{style:I},r.a.createElement(u.a,{to:"/"},"Landing")),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("p",{style:I},r.a.createElement(u.a,{to:S},"Home")),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("p",{style:I},r.a.createElement(u.a,{to:"/account"},"Account")),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("p",{style:I},r.a.createElement(u.a,{to:"/admin"},"Admin")),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("p",null,r.a.createElement(O,null)))},B=function(){return r.a.createElement("span",null,r.a.createElement("p",{style:I},r.a.createElement(u.a,{to:"/"},"Landing")),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement(u.a,{to:"/signin"},r.a.createElement(f.a,{style:{position:"absolute",right:50},variant:"primary"},"Sign In")))},z=function(){return r.a.createElement("div",{style:M},r.a.createElement(p.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(x.Consumer,null,function(e){return e?r.a.createElement(W,null):r.a.createElement(B,null)}))))},H=n(7),K=n(130),F=n.n(K),J=(Object(H.a)({color:"black",fontSize:"15px",justifyContent:"space-between",height:"1000px",width:"1000px",textAlign:"left",padding:" 100px",display:"flex"},"justifyContent","center"),Object(H.a)({color:"black",fontSize:"15px",justifyContent:"space-between",width:"100%",display:"flex"},"justifyContent","center")),N=function(){return r.a.createElement("div",null,r.a.createElement("span",{style:J},r.a.createElement("img",{style:{width:"75px",height:"150px",justifyContent:"center"},src:"/images/logo/treetrees.png",alt:"Logo"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("img",{style:{width:"225px",height:"75px",justifyContent:"center",marginTop:50},src:"/images/logo/Camosun.png",alt:"Logo"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("img",{style:{width:"75px",height:"75px",justifyContent:"center",marginTop:50},src:"/images/Logo2/logo128.png",alt:"Logo"})),r.a.createElement("br",null),r.a.createElement("span",{style:J},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("h1",null,"Team Reality Bytes")),r.a.createElement("br",null),r.a.createElement("span",{style:J},r.a.createElement("p",null,"End of Camosun Winter Term")),r.a.createElement("br",null),r.a.createElement("span",{style:J},r.a.createElement(F.a,{dateTo:"April 13, 2019 00:00:00 GMT+03:00",callback:function(){return alert("Hello")}})))},G=n(14),Q={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},Y=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(A.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,l=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,l).then(function(e){n.props.firebase.user(e.user.uid).set({username:a,email:r}).then(function(){n.setState(Object(G.a)({},Q)),n.props.history.push(S)}).catch(function(e){n.setState({error:e})})}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(G.a)({},Q),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,l=e.passwordTwo,o=e.error,i=a!==l||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Sign Up"),o&&r.a.createElement("p",null,o.message))}}]),t}(a.Component),$=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(u.a,{to:"/signup"},"Sign Up"))},q=Object(D.a)(E(Y)),V=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(q,null))},X={email:"",error:null},Z=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(A.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(Object(G.a)({},X))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(G.a)({},X),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),_=function(){return r.a.createElement("p",null,r.a.createElement(u.a,{to:"/pw-forget"},"Forgot Password?"))},ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(te,null))},te=E(Z),ne={email:"",password:"",error:null},ae=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(A.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(Object(G.a)({},ne)),n.props.history.push(S)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(G.a)({},ne),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,l=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:l,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),re=Object(L.a)(D.a,E)(ae),le=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(re,null),r.a.createElement(_,null),r.a.createElement($,null))},oe=(n(269),n(8)),ie=(i={color:"black",fontSize:"15px",justifyContent:"space-between",display:"inline-block",height:"100%",width:"100%",textAlign:"left",padding:" 100px"},Object(H.a)(i,"display","flex"),Object(H.a)(i,"justifyContent","center"),Object(H.a)({color:"black",fontSize:"15px",justifyContent:"space-between",width:"100%",display:"flex"},"justifyContent","center")),se=R(function(e){return!!e})(function(){return r.a.createElement("div",null,r.a.createElement("span",{style:ie},r.a.createElement("img",{style:{width:"75px",height:"75px",justifyContent:"center"},src:"/images/Logo2/logo128.png",alt:"Logo"})),r.a.createElement("br",null),r.a.createElement("span",{style:ie},r.a.createElement("h1",null," Team Reality Bytes ")),r.a.createElement("br",null),r.a.createElement("span",{style:ie},r.a.createElement(oe.Card,{style:{width:"230px",display:"inline-block"}},r.a.createElement(oe.CardTitle,{avatar:"/images/Amy128.png",title:"Amy",subtitle:"Dear Leader"}),r.a.createElement(oe.CardMedia,{aspectRatio:"wide",image:"/images/Amy.png"}),r.a.createElement(oe.CardText,null,"Amy has a passion for creative technology and is particularly interested in front-end development. She is really looking forward to the design and aesthetic aspects of the project. Amy hopes to take on more of a leadership role throughout the development process. ")),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement(oe.Card,{style:{width:"230px",display:"inline-block"}},r.a.createElement(oe.CardTitle,{avatar:"/images/bob128.png",title:"Bob",subtitle:"Design/Programmer"}),r.a.createElement(oe.CardMedia,{aspectRatio:"wide",image:"https://placeimg.com/800/450/nature"}),r.a.createElement(oe.CardText,null,"Bob is a lifelong learner that always welcomes the opportunity to develop new skills. He is keen to contribute to both the design and functionality of this project. Bob plans to be involved in all aspects of this project during the development process.")),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement(oe.Card,{style:{width:"230px",display:"inline-block"}},r.a.createElement(oe.CardTitle,{avatar:"/images/ken128.png",title:"Ken",subtitle:"Tester/Programmer"}),r.a.createElement(oe.CardMedia,{aspectRatio:"wide",image:"https://placeimg.com/800/450/nature"}),r.a.createElement(oe.CardText,null,"Ken enjoys problem-solving and finds great satisfaction in learning new skills. He is most interested in integrating the various pieces of this project into a working prototype. During development, Ken w")),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement(oe.Card,{style:{width:"230px",display:"inline-block"}},r.a.createElement(oe.CardTitle,{avatar:"/images/Liyani128.png",title:"Liyani",subtitle:"UI Design/ programmer"}),r.a.createElement(oe.CardMedia,{aspectRatio:"wide",image:"https://placeimg.com/800/450/nature"}),r.a.createElement(oe.CardText,null,"Liyani loves to code and is very interested in web development and technical programming. He is excited to develop the back-end of the project. Liyani\u2019s main focus will be programming and user interface design. "))))}),ce={passwordOne:"",passwordTwo:"",error:null},ue=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(A.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(Object(G.a)({},ce))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(G.a)({},ce),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,l=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:l,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),me=E(ue),pe=R(function(e){return!!e})(function(){return r.a.createElement(x.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(te,null),r.a.createElement(me,null))})}),de=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(A.a)(this,Object(P.a)(t).call(this,e))).state={loading:!1,users:[]},n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var n=t.val(),a=Object.keys(n).map(function(e){return Object(G.a)({},n[e],{uid:e})});e.setState({users:a,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(he,{users:t}))}}]),t}(a.Component),he=function(e){var t=e.users;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))}))},fe=E(de),ge=U(function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement("hr",null),r.a.createElement(c.a,{exact:!0,path:"/",component:N}),r.a.createElement(c.a,{exact:!0,path:"/signup",component:V}),r.a.createElement(c.a,{exact:!0,path:"/signin",component:le}),r.a.createElement(c.a,{exact:!0,path:"/pw-forget",component:ee}),r.a.createElement(c.a,{exact:!0,path:S,component:se}),r.a.createElement(c.a,{exact:!0,path:"/account",component:pe}),r.a.createElement(c.a,{exact:!0,path:"/admin",component:fe})))});o.a.render(r.a.createElement(b.Provider,{value:new C},r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,2,1]]]);
//# sourceMappingURL=main.315e44a8.chunk.js.map