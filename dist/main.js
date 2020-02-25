!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{}t.BMStyle=i,i.UIMainColor="#ffa000",i.UIDarkColor="#d17627",i.UIDisabledColor="#aaaaaa",i.UIBackgroundColor="#eeeeee",i.UITitleFont="Raleway",i.UIContentFont="work sans",i.UIIconFont="icomoon",i.HeroImage="./src/images/hero_offset.png",i.DeveloperPortrait="./src/images/traveller_portrait.JPG",i.EducatorPortrait="./src/images/educator_portrait2.jpg",i.TravellerPortrait="./src/images/traveller_portrait.JPG",i.DeveloperParagraphText="Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",i.EducatorParagraphText="Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",i.TravellerParagraphText="Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",i.LinkedInUrl="https://www.linkedin.com/in/bradleymccausland/",i.GithubUrl="https://github.com/bmcc0605",i.MailToUrl="mailto:bradmccausland20@gmail.com",i.HeaderHeight="70px",i.HeaderSlideTransitionTime="0.7s"},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=n(1);class s extends o.Component{constructor(e){super(e)}render(){return o.createElement("span",{className:this.props.className,onClick:this.props.onClick||(()=>null),style:{alignItems:"center",color:"#ffffff",fontSize:"40px",fontFamily:r.BMStyle.UIIconFont,marginLeft:"5px",marginRight:"5px",cursor:this.props.onClick?"pointer":"auto"}})}}t.HeaderIcon=s},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=i(n(4));n(5);const s=n(1),a=n(14),l=n(15),c=n(18),d=n(19),h=n(20),u=n(21);class p extends o.Component{constructor(e){super(e),this.state={windowWidth:window.innerWidth,images:[],isAboveFold:!0,isMobileWidth:this.isMobileWidth(),heroImageHeight:window.innerHeight,isUnderConstruction:!0}}componentDidMount(){window.addEventListener("scroll",this.handleScroll.bind(this),!0),window.addEventListener("resize",this.handleWindowResize.bind(this),!0)}handleWindowResize(){this.setState({isMobileWidth:this.isMobileWidth(),heroImageHeight:window.innerHeight})}isMobileWidth(){return window.innerWidth<675}handleScroll(){window.pageYOffset>this.state.heroImageHeight&&this.state.isAboveFold?this.setState({isAboveFold:!1}):window.pageYOffset<this.state.heroImageHeight&&!this.state.isAboveFold&&this.setState({isAboveFold:!0})}render(){return o.createElement("div",{className:"web_page",style:{display:"block",margin:"0px",backgroundColor:s.BMStyle.UIBackgroundColor,fontFamily:s.BMStyle.UITitleFont,overflowX:"hidden"}},o.createElement(l.Header,{style:{position:"fixed",top:"0",width:"100%",height:s.BMStyle.HeaderHeight,display:"flex",zIndex:3},isAboveFold:this.state.isAboveFold,isMobileWidth:this.state.isMobileWidth}),o.createElement("div",{className:"hero_image",style:{width:"100%",height:"100vh",backgroundImage:"url("+s.BMStyle.HeroImage+")",backgroundSize:"cover",backgroundPosition:"center",position:this.state.isUnderConstruction?"absolute":"relative",display:"flex",flexDirection:"column",zIndex:2}},o.createElement("div",{className:"name_title"},o.createElement("h1",{style:{color:"white",fontSize:this.state.isMobileWidth?"10vw":"5vw",fontFamily:s.BMStyle.UITitleFont,textAlign:"center",marginTop:"20vh",marginBottom:"2vw"}},"Brad McCausland")),o.createElement("div",{className:"subtitle_buttons",style:{display:"flex",justifyContent:"center"}},o.createElement(a.SubtitleButton,{text:"Educator",isMobileWidth:this.state.isMobileWidth}),o.createElement(a.SubtitleButton,{text:"Traveller",isMobileWidth:this.state.isMobileWidth}),o.createElement(a.SubtitleButton,{text:"Developer",isMobileWidth:this.state.isMobileWidth}))),this.state.isUnderConstruction&&o.createElement(u.UnderConstructionPane,{isMobileWidth:this.state.isMobileWidth,onThreeClicks:()=>this.setState({isUnderConstruction:!1})}),!this.state.isUnderConstruction&&o.createElement("div",{className:"body",style:{zIndex:1,position:"relative",display:"flex",flexDirection:"column",marginBottom:"50px"}},o.createElement(d.Body5050Section,{imageSrc:s.BMStyle.DeveloperPortrait,text:s.BMStyle.DeveloperParagraphText,height:"600px",reverse:!1,isMobileWidth:this.state.isMobileWidth}),o.createElement(d.Body5050Section,{imageSrc:s.BMStyle.EducatorPortrait,text:s.BMStyle.EducatorParagraphText,height:"600px",reverse:!0,isMobileWidth:this.state.isMobileWidth}),o.createElement(d.Body5050Section,{imageSrc:s.BMStyle.TravellerPortrait,text:s.BMStyle.TravellerParagraphText,height:"600px",reverse:!1,isMobileWidth:this.state.isMobileWidth})),!this.state.isUnderConstruction&&o.createElement(h.ContactWidget,{isMobileWidth:this.state.isMobileWidth}),!this.state.isUnderConstruction&&o.createElement(c.Footer,{style:{position:"relative",top:"0",width:"100%",height:"70px",display:"flex",zIndex:3},isMobileWidth:this.state.isMobileWidth}))}}r.render(o.createElement(p,null),document.getElementById("webpage_wrapper"))},function(e,t){e.exports=ReactDOM},function(e,t,n){var i=n(6),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},s=(i(e.i,o,r),o.locals?o.locals:{});e.exports=s},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s={};function a(e,t,n){for(var i=0;i<t.length;i++){var o={css:t[i][1],media:t[i][2],sourceMap:t[i][3]};s[e][i]?s[e][i](o):s[e].push(f(o,n))}}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function h(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,m=0;function f(e,t){var n,i,o;if(t.singleton){var r=m++;n=p||(p=l(t)),i=h.bind(null,n,r,!1),o=h.bind(null,n,r,!0)}else n=l(t),i=u.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o()),e=n.base?e+n.base:e,t=t||[],s[e]||(s[e]=[]),a(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){s[e]||(s[e]=[]),a(e,t,n);for(var i=t.length;i<s[e].length;i++)s[e][i]();s[e].length=t.length,0===s[e].length&&delete s[e]}}}},function(e,t,n){var i=n(8),o=n(9),r=n(10),s=n(11),a=n(12),l=n(13);t=i(!1);var c=o(r),d=o(r,{hash:"#iefix"}),h=o(s),u=o(a),p=o(l,{hash:"#icomoon"});t.push([e.i,"body\r\n{\r\n  font-family: 'Dosis', sans-serif;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-family: 'Work Sans', sans-serif;\r\n  font-family: 'Forum', cursive;\r\n  font-family: 'Poiret One', cursive;\r\n}\r\n.heading\r\n{\r\n  font-weight: 400;\r\n}\r\n.subheading\r\n{\r\n  font-weight: 100;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'icomoon';\r\n  src:  url("+c+");\r\n  src:  url("+d+") format('embedded-opentype'),\r\n    url("+h+") format('truetype'),\r\n    url("+u+") format('woff'),\r\n    url("+p+') format(\'svg\');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-display: block;\r\n}\r\n\r\n/* icon font generated by icoMoon https://icomoon.io/ */\r\n[class^="icon-"], [class*=" icon-"] {\r\n  /* use !important to prevent issues with browser extensions that change fonts */\r\n  font-family: \'icomoon\' !important;\r\n  /* speak: none; */\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n\r\n  /* Better Font Rendering =========== */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.icon-envelope:before {\r\n  content: "\\e900";\r\n}\r\n.icon-menu:before {\r\n  content: "\\e9bd";\r\n}\r\n.icon-github:before {\r\n  content: "\\eab0";\r\n}\r\n.icon-linkedin:before {\r\n  content: "\\eac9";\r\n}\r\n.icon-cross:before {\r\n  content: "\\ea0f";\r\n}\r\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"fonts/icomoon.eot"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"fonts/icomoon.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"fonts/icomoon.woff"},function(e,t){e.exports="export default __webpack_public_path__ + &quot;fonts/icomoon.svg&quot;;"},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=n(1);class s extends o.Component{constructor(e){super(e),this.state={wrapperRef:o.createRef(),hovered:!1}}render(){const e=this.props.isMobileWidth?"5vw":"2.5vw",t=this.props.isMobileWidth?"5.4 vw":"2.7vw",n={color:this.state.hovered?"#ffa000":"white",fontSize:this.state.hovered?t:e,fontFamily:r.BMStyle.UITitleFont,display:"inline",marginLeft:"1.5vw",marginRight:"1.5vw",transition:"color 0.7s, font-size 0.7s"};return o.createElement("div",{ref:this.state.wrapperRef,className:"wrapper"},o.createElement("h1",{style:n,className:this.props.className||"SubtitleButton",onClick:this.props.onClick,onMouseEnter:this.mouseEnter.bind(this),onMouseLeave:this.mouseLeave.bind(this)},this.props.text))}mouseEnter(){this.setState({hovered:!0})}mouseLeave(){this.setState({hovered:!1})}}t.SubtitleButton=s},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=n(16),s=n(2),a=n(1),l=n(17);class c extends o.Component{constructor(e){super(e),this.state={isMenuExtended:!1}}toggleExtendMenu(){this.setState({isMenuExtended:!this.state.isMenuExtended})}render(){const e=Object.assign({},{alignItems:"center"},this.props.style);return o.createElement("div",{className:"header",style:e},o.createElement(r.Gradient,null),o.createElement(l.SlidingMenu,{isAboveFold:this.props.isAboveFold,isExtended:this.state.isMenuExtended,crossButtonAction:this.toggleExtendMenu.bind(this)}),o.createElement("div",null,o.createElement("div",{className:"orange_slider",style:{backgroundColor:a.BMStyle.UIMainColor,height:"100%",width:"100%",position:"absolute",zIndex:1,top:this.props.isAboveFold?"-100%":"0px",transition:`top ${a.BMStyle.HeaderSlideTransitionTime}`}})),o.createElement("div",{className:"left_justified_elements",style:{marginLeft:this.props.isMobileWidth?"10px":"8.3333vw",marginRight:"auto",flexDirection:"row",zIndex:3}},o.createElement(s.HeaderIcon,{className:"icon-menu",onClick:()=>this.toggleExtendMenu()}),o.createElement("h1",{className:"name_in_header",style:{color:"white",fontSize:"40px",fontFamily:a.BMStyle.UITitleFont,display:this.props.isMobileWidth?"none":"inline",margin:"5px",opacity:this.props.isAboveFold?"0":"1",transition:"opacity 0.7s"}},"Brad McCausland")),o.createElement("div",{className:"right_justified_elements",style:{marginLeft:"auto",marginRight:this.props.isMobileWidth?"10px":"8.3333vw",flexDirection:"row",zIndex:3}},o.createElement(s.HeaderIcon,{className:"icon-envelope",onClick:()=>window.open(a.BMStyle.MailToUrl,"_blank")}),o.createElement(s.HeaderIcon,{className:"icon-github",onClick:()=>window.open(a.BMStyle.GithubUrl,"_blank")}),o.createElement(s.HeaderIcon,{className:"icon-linkedin",onClick:()=>window.open(a.BMStyle.LinkedInUrl,"_blank")})))}}t.Header=c},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0));class r extends o.Component{constructor(e){super(e)}render(){return o.createElement("div",{className:"gradient",style:{height:"100%",width:"100%",position:"absolute",background:"linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)"}})}}t.Gradient=r},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=n(1);class s extends o.Component{constructor(e){super(e),this.state={isExtended:!1}}render(){return o.createElement("div",{className:"sliding_menu",style:{position:"absolute",width:"300px",height:"100vh",top:this.props.isAboveFold?"0px":r.BMStyle.HeaderHeight,left:this.props.isExtended?"0px":"-300px",transition:"left 1s, "+`top ${r.BMStyle.HeaderSlideTransitionTime}`,backgroundColor:r.BMStyle.UIDarkColor,zIndex:this.props.isAboveFold?4:1}},o.createElement("div",{className:"menu_header",style:{width:"100%",height:r.BMStyle.HeaderHeight}},o.createElement("span",{className:"close_menu_button",onClick:this.props.crossButtonAction,style:{textAlign:"center",alignItems:"center",verticalAlign:"center",color:"#ffffff",height:"100%",fontSize:"40px",fontFamily:r.BMStyle.UIIconFont,marginLeft:"auto",marginRight:"12px",float:"right",cursor:"pointer"}},"🞨")))}}t.SlidingMenu=s},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=n(2),s=n(1);class a extends o.Component{constructor(e){super(e)}render(){const e={alignItems:"center",backgroundColor:s.BMStyle.UIMainColor},t=Object.assign({},e,this.props.style);return o.createElement("div",{className:"Footer",style:t},o.createElement("div",{className:"left_justified_elements",style:{marginLeft:this.props.isMobileWidth?"10px":"8.3333vw",marginRight:"auto",flexDirection:"row"}},o.createElement("h1",{className:"name_in_Footer",style:{color:"white",fontSize:"24px",fontFamily:s.BMStyle.UITitleFont,display:this.props.isMobileWidth?"none":"inline",margin:"5px",transition:"opacity 0.7s"}},"Brad McCausland ©2020")),o.createElement("div",{className:"right_justified_elements",style:{marginLeft:"auto",marginRight:this.props.isMobileWidth?"10px":"8.3333vw",flexDirection:"row"}},o.createElement(r.HeaderIcon,{className:"icon-envelope",onClick:()=>window.open(s.BMStyle.MailToUrl,"_blank")}),o.createElement(r.HeaderIcon,{className:"icon-github",onClick:()=>window.open(s.BMStyle.GithubUrl,"_blank")}),o.createElement(r.HeaderIcon,{className:"icon-linkedin",onClick:()=>window.open(s.BMStyle.LinkedInUrl,"_blank")})))}}t.Footer=a},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=n(1);class s extends o.Component{constructor(e){super(e)}render(){return o.createElement("div",{className:"body_5050_section",style:{height:this.props.height,width:"100%",position:"relative",display:this.props.isMobileWidth?"block":"flex",flexDirection:this.props.reverse?"row-reverse":"row",alignItems:"center"}},o.createElement("div",{className:"image_div",style:{position:this.props.isMobileWidth?"absolute":"relative",flex:"50%",width:"100%",height:"100%"}},o.createElement("div",{className:"image_shader",style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#000000",opacity:.3,display:this.props.isMobileWidth?"flex":"none"}}),o.createElement("img",{src:this.props.imageSrc,style:{width:"100%",height:"100%",objectFit:"cover"}})),o.createElement("div",{className:"text_div",style:{position:this.props.isMobileWidth?"absolute":"relative",display:"flex",flex:"50%",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}},o.createElement("p",{style:{fontSize:this.props.isMobileWidth?"7vw":"3vw",fontFamily:r.BMStyle.UIContentFont,color:this.props.isMobileWidth?"#eeeeee":"#666666",margin:"0px",padding:"2vw",textAlign:"justify",textAlignLast:"center"}},this.props.text)))}}t.Body5050Section=s},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=n(1);class s extends o.Component{constructor(e){super(e),this.state={name:"",email:"",message:""}}handleNameFieldChange(e){this.setState({name:e.target.value})}handleEmailFieldChange(e){this.setState({email:e.target.value})}handleMessageFieldChange(e){this.setState({message:e.target.value})}handleSubmitButtonClicked(e){e.preventDefault(),fetch("http://localhost:3002/send",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{"success"===e.status?(alert("Message Sent."),this.resetForm()):"fail"===e.status&&alert("Message failed to send.")}).catch(()=>{alert("Error: email server not reachable.")})}resetForm(){this.setState({name:"",email:"",message:""})}checkIfSendable(){return""!==this.state.name&&this.isEmailValid()&&""!==this.state.message}isEmailValid(){return/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.state.email)}render(){var e=this.checkIfSendable();return o.createElement("div",{className:"contact_widget",style:{margin:this.props.isMobileWidth?"100px 8px":"100px 24vw",display:"flex",flexDirection:"column"}},o.createElement("h1",{className:"contact_widget_header",style:{margin:"20px",fontFamily:r.BMStyle.UITitleFont,fontSize:this.props.isMobileWidth?"15vw":"64px",color:r.BMStyle.UIMainColor,textAlign:"center"}},"CONTACT"),o.createElement("input",{className:"name_field",type:"text",placeholder:"Name",value:this.state.name,onChange:this.handleNameFieldChange.bind(this),style:Object.assign({},s.inputFieldStyle,{height:"60px"})}),o.createElement("input",{className:"email_field",type:"text",placeholder:"Email",value:this.state.email,onChange:this.handleEmailFieldChange.bind(this),style:Object.assign({},s.inputFieldStyle,{height:"60px"})}),o.createElement("textarea",{className:"message_field",placeholder:"Your Message",value:this.state.message,onChange:this.handleMessageFieldChange.bind(this),style:Object.assign({},s.inputFieldStyle,{height:"250px",resize:"none"})}),o.createElement("button",{className:"submit_button",onClick:e?this.handleSubmitButtonClicked.bind(this):()=>null,style:{width:this.props.isMobileWidth?"100%":"200px",height:"64px",marginTop:"4px",marginLeft:"auto",marginRight:"0",display:"block",padding:"4px",border:"none",outlineWidth:"0px",fontSize:"36px",fontFamily:r.BMStyle.UITitleFont,color:"white",cursor:e?"pointer":"auto",backgroundColor:e?r.BMStyle.UIMainColor:r.BMStyle.UIDisabledColor}},"SUBMIT"))}}t.ContactWidget=s,s.inputFieldStyle={width:"100%",margin:"4px 0",padding:"12px 20px",fontSize:"24px",color:"#090909",backgroundColor:"#dddddd",outlineWidth:"0px",border:"none",boxSizing:"border-box"}},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0)),r=n(1);class s extends o.Component{constructor(e){super(e),this.state={hiddenButtonClickCount:4}}handleHiddenButtonClicked(){this.setState({hiddenButtonClickCount:this.state.hiddenButtonClickCount-1}),1===this.state.hiddenButtonClickCount&&this.props.onThreeClicks&&this.props.onThreeClicks()}render(){var e=o.createElement("a",{href:r.BMStyle.GithubUrl,target:"_blank",style:{color:r.BMStyle.UIMainColor}},"Github"),t=o.createElement("a",{href:r.BMStyle.LinkedInUrl,target:"_blank",style:{color:r.BMStyle.UIMainColor}},"Linkedin");return o.createElement("div",{className:"under_construction_pane",style:{width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.4)",position:"absolute",justifyContent:"center",alignItems:"center",display:"flex",zIndex:3}},o.createElement("div",{className:"under_construction_text",style:{width:this.props.isMobileWidth?"80vw":"50vw",height:this.props.isMobileWidth?"80vh":"50vh",position:"relative",backgroundColor:"rgba(0, 0, 0, 0.8)",borderRadius:"16px",justifyContent:"center",textAlign:"center",overflow:"auto"}},o.createElement("button",{className:"hidden_button",onClick:()=>this.handleHiddenButtonClicked(),style:{position:"relative",width:"40px",height:"40px",marginLeft:"0px",color:"white",backgroundColor:"rgba(0, 0, 0, 0.0)",border:"none",outline:"none"}},this.state.hiddenButtonClickCount<4?this.state.hiddenButtonClickCount:""),o.createElement("h1",{style:{color:"#ffffff",position:"relative",fontFamily:r.BMStyle.UITitleFont,textAlign:"center",fontSize:"40px"}},"Under Construction!"),o.createElement("text",{style:{color:"#ffffff",position:"relative",fontFamily:r.BMStyle.UIContentFont,fontSize:"24px",textAlign:"center",display:"inline-block",padding:"24px"}},"Building a website is slow work, especially when it's your first one! I'm developing this site as part of my quest to learn web development technologies, ReactJs in particular, and one day soon will host my blog, resumé, portfolio (of which this site will be a part), and whatever else strikes my fancy. In the meantime, you can track my progress on my ",e,", or get in touch with me on ",t,"!")))}}t.UnderConstructionPane=s}]);
//# sourceMappingURL=main.js.map