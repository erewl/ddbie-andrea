(self.webpackChunkgatsby_starter_lander=self.webpackChunkgatsby_starter_lander||[]).push([[351],{8163:function(t,e,o){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,n=o(1),i=(r=n)&&r.__esModule?r:{default:r};e.default=i.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),l=o(2),s=(r=l)&&r.__esModule?r:{default:r},a=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var r=t.currentTarget.getAttribute("href").slice(1),n=document.getElementById(r).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:n-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var o={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r]);return o}(t,["offset"]));return s.default.createElement("a",n({},e,{onClick:this.smoothScroll}))}}]),e}(l.Component);e.default=a},function(e,o){e.exports=t},function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,r=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||s,scrollIntoView:r.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var o=p(this),r=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==e.body?(h.call(this,o,o.scrollLeft+i.left-r.left,o.scrollTop+i.top-r.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function f(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function u(t){var e=c(t,"Y")&&f(t,"Y"),o=c(t,"X")&&f(t,"X");return e||o}function p(t){var o;do{o=(t=t.parentNode)===e.body}while(!1===o&&!1===u(t));return o=null,t}function d(e){var o,r,n,l,s=(i()-e.startTime)/468;l=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*l)),r=e.startX+(e.x-e.startX)*o,n=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,n),r===e.x&&n===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(o,r,l){var a,c,f,u,p=i();o===e.body?(a=t,c=t.scrollX||t.pageXOffset,f=t.scrollY||t.pageYOffset,u=n.scroll):(a=o,c=o.scrollLeft,f=o.scrollTop,u=s),d({scrollable:a,method:u,startTime:p,startX:c,startY:f,x:r,y:l})}}}}()}])},t.exports=r(o(7294))},6434:function(t,e,o){"use strict";o(7294);var r=o(1100),n={default:"py-3 px-8",lg:"py-4 px-12",xl:"py-5 px-16 text-lg"};e.Z=function(t){var e=t.children,o=t.className,i=void 0===o?"":o,l=t.size;return(0,r.tZ)("button",{type:"button",className:"\n        "+(n[l]||n.default)+"\n        "+i+"\n        bg-primary\n        hover:bg-primary-darker\n        rounded\n        text-white\n    "},e)}},6768:function(t,e,o){"use strict";o.d(e,{Z:function(){return u}});var r=o(7294),n=o(1100),i=function(){return(0,n.tZ)("footer",{className:"container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800"},(0,n.tZ)("div",{className:"flex -mx-3"},(0,n.tZ)("div",{className:"flex-1 px-3"},(0,n.tZ)("h2",{className:"text-lg font-semibold"},"About Us"),(0,n.tZ)("p",{className:"mt-5"},"ANDREA consists of five entrepreneurs focused on Data Science. With industry advisors ANDREA will become the next unicorn in the real easte industry.")),(0,n.tZ)("div",{className:"flex-1 px-3"},(0,n.tZ)("h2",{className:"text-lg font-semibold"},"Important Links"),(0,n.tZ)("ul",{className:"mt-4 leading-loose"},(0,n.tZ)("li",null,(0,n.tZ)("a",{href:"https://codebushi.com"},"Terms & Conditions")),(0,n.tZ)("li",null,(0,n.tZ)("a",{href:"https://codebushi.com"},"Privacy Policy")))),(0,n.tZ)("div",{className:"flex-1 px-3"},(0,n.tZ)("h2",{className:"text-lg font-semibold"},"Social Media"),(0,n.tZ)("ul",{className:"mt-4 leading-loose"},(0,n.tZ)("li",null,(0,n.tZ)("a",{href:"https://dev.to/changoman"},"Dev.to")),(0,n.tZ)("li",null,(0,n.tZ)("a",{href:"https://twitter.com/HuntaroSan"},"Twitter")),(0,n.tZ)("li",null,(0,n.tZ)("a",{href:"https://github.com/codebushi/gatsby-starter-lander"},"GitHub"))))))},l=o(8163),s=o.n(l),a=o(6434),c=o(9119),f=function(){return(0,n.tZ)("header",{className:"sticky top-0 shadow bg-primary-100"},(0,n.tZ)("div",{className:"container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8"},(0,n.tZ)("div",{className:"flex items-center text-2xl"},(0,n.tZ)("img",{src:"https://i.imgur.com/S4sMFQl.png",alt:"Andrea Logo, hand palming a building",width:"75px",className:"pr-2"}),(0,n.tZ)("p",{className:"text-white font-bold text-shadow",id:"logo"},c.Z.mainTitle)),(0,n.tZ)("div",{className:"flex mt-4 sm:mt-0"},(0,n.tZ)(s(),{className:"px-4",href:"#features"},"We Offer"),(0,n.tZ)(s(),{className:"px-4",href:"#services"},"Features"),(0,n.tZ)(s(),{className:"px-4",href:"#pricing"},"Pricing"),(0,n.tZ)(s(),{className:"px-4",href:"#contact"},"Contact")),(0,n.tZ)("div",{className:"hidden md:block"},(0,n.tZ)(a.Z,{className:"text-sm"},"Request Demo"))))},u=function(t){var e=t.children;return(0,n.tZ)(r.Fragment,null,(0,n.tZ)(f,null),(0,n.tZ)("main",{className:"text-gray-900"},e),(0,n.tZ)(i,null))}},9119:function(t,e){"use strict";e.Z={mainTitle:"Andrea",subTitle:"The one-stop solution for property management with smart learning capabilities.",features:[{title:"Inspection Support",description:"Never were inspections easier! With a customisable form template Andrea will guide you through the inspection, uploading all data to the platform of your choice."},{title:"Overview Dashboard",description:"Identify trends in your data and compare key performance indicators (KPIs) using built-in dashboards. Use filters to interactively isolate and analyze specific subsets of data and segments of your business."},{title:"Predictive Maintenance",description:"An AI powered system will predict when maintenance are due and notify the affected parties in no time."}],pricing:[{title:"Basic",content:"100% control and automation. All-in-one online platform for inspection and management.",price:"1.99$",pricingUnit:"per unit",features:["Inspection Automation","Inspection Digitalization"]},{title:"Essential",content:"Lean back and get notified when inspections are due. Powerful statistics and insights compacted inside a dashboard, available everywhere, anytime.",price:"3.99$",pricingUnit:"per unit",features:["ALL FEATURES FROM Basic","Dashboard","Statistics and Insights","AI-powered predictive maintenance","24/7 technical support"]},{title:"Premium",content:"Customized forms and dashboards tailored to your needs. Keep an eye of the energy levels of your property. Automated repair integration with platforms of your choice.",price:"5.99$",pricingUnit:"per unit",features:["ALL FEATURES FROM Basic & Essential","Highly customizable dashboards","Highly customizable inspection forms","Integration with repair requests","Energy Efficiency Tracking"]}],contact:{title:"Ready to level up?",text:"We are eager to hear from you. \nContact us, and we will create a tailored solution for your needs."}}}}]);
//# sourceMappingURL=commons-a231090e20b3f67e136b.js.map