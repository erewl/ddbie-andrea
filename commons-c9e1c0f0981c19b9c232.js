(self.webpackChunkgatsby_starter_lander=self.webpackChunkgatsby_starter_lander||[]).push([[351],{8163:function(t,e,o){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=o(1),n=(r=l)&&r.__esModule?r:{default:r};e.default=n.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),i=o(2),s=(r=i)&&r.__esModule?r:{default:r},a=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var r=t.currentTarget.getAttribute("href").slice(1),l=document.getElementById(r).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:l-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var o={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r]);return o}(t,["offset"]));return s.default.createElement("a",l({},e,{onClick:this.smoothScroll}))}}]),e}(i.Component);e.default=a},function(e,o){e.exports=t},function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,r=t.HTMLElement||t.Element,l={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||s,scrollIntoView:r.prototype.scrollIntoView},n=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?m.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):l.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?l.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;m.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var o=p(this),r=o.getBoundingClientRect(),n=this.getBoundingClientRect();o!==e.body?(m.call(this,o,o.scrollLeft+n.left-r.left,o.scrollTop+n.top-r.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function f(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function u(t){var e=c(t,"Y")&&f(t,"Y"),o=c(t,"X")&&f(t,"X");return e||o}function p(t){var o;do{o=(t=t.parentNode)===e.body}while(!1===o&&!1===u(t));return o=null,t}function d(e){var o,r,l,i,s=(n()-e.startTime)/468;i=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*i)),r=e.startX+(e.x-e.startX)*o,l=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,l),r===e.x&&l===e.y||t.requestAnimationFrame(d.bind(t,e))}function m(o,r,i){var a,c,f,u,p=n();o===e.body?(a=t,c=t.scrollX||t.pageXOffset,f=t.scrollY||t.pageYOffset,u=l.scroll):(a=o,c=o.scrollLeft,f=o.scrollTop,u=s),d({scrollable:a,method:u,startTime:p,startX:c,startY:f,x:r,y:i})}}}}()}])},t.exports=r(o(7294))},6434:function(t,e,o){"use strict";o(7294);var r=o(1100),l={default:"py-3 px-8",lg:"py-4 px-12",xl:"py-5 px-16 text-lg"};e.Z=function(t){var e=t.children,o=t.className,n=void 0===o?"":o,i=t.size;return(0,r.tZ)("button",{type:"button",className:"\n        "+(l[i]||l.default)+"\n        "+n+"\n        bg-primary\n        hover:bg-primary-darker\n        rounded\n        text-white\n    "},e)}},6768:function(t,e,o){"use strict";o.d(e,{Z:function(){return u}});var r=o(7294),l=o(1100),n=function(){return(0,l.tZ)("footer",{className:"container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800"},(0,l.tZ)("div",{className:"flex -mx-3"},(0,l.tZ)("div",{className:"flex-1 px-3"},(0,l.tZ)("h2",{className:"text-lg font-semibold"},"About Us"),(0,l.tZ)("p",{className:"mt-5"},"Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.")),(0,l.tZ)("div",{className:"flex-1 px-3"},(0,l.tZ)("h2",{className:"text-lg font-semibold"},"Important Links"),(0,l.tZ)("ul",{className:"mt-4 leading-loose"},(0,l.tZ)("li",null,(0,l.tZ)("a",{href:"https://codebushi.com"},"Terms & Conditions")),(0,l.tZ)("li",null,(0,l.tZ)("a",{href:"https://codebushi.com"},"Privacy Policy")))),(0,l.tZ)("div",{className:"flex-1 px-3"},(0,l.tZ)("h2",{className:"text-lg font-semibold"},"Social Media"),(0,l.tZ)("ul",{className:"mt-4 leading-loose"},(0,l.tZ)("li",null,(0,l.tZ)("a",{href:"https://dev.to/changoman"},"Dev.to")),(0,l.tZ)("li",null,(0,l.tZ)("a",{href:"https://twitter.com/HuntaroSan"},"Twitter")),(0,l.tZ)("li",null,(0,l.tZ)("a",{href:"https://github.com/codebushi/gatsby-starter-lander"},"GitHub"))))))},i=o(8163),s=o.n(i),a=o(6434),c=(o(9119),o(396)),f=function(){return(0,l.tZ)("header",{className:"sticky top-0 shadow bg-primary-100"},(0,l.tZ)("div",{className:"container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8"},(0,l.tZ)("div",{className:"w-24 mt-1"},(0,l.tZ)(c.S,{src:"../../../static/andrea_logo_circle.png",alt:"A dinosaur",__imageData:o(8360)})),(0,l.tZ)("div",{className:"flex items-center text-2xl"}),(0,l.tZ)("div",{className:"flex mt-4 sm:mt-0"},(0,l.tZ)(s(),{className:"px-4",href:"#features"},"About Us"),(0,l.tZ)(s(),{className:"px-4",href:"#services"},"Technologies & Articial Intelligence"),(0,l.tZ)(s(),{className:"px-4",href:"#stats"},"Pricing"),(0,l.tZ)(s(),{className:"px-4",href:"#testimonials"},"Contact")),(0,l.tZ)("div",{className:"hidden md:block"},(0,l.tZ)(a.Z,{className:"text-sm"},"Request Demo"))))},u=function(t){var e=t.children;return(0,l.tZ)(r.Fragment,null,(0,l.tZ)(f,null),(0,l.tZ)("main",{className:"text-gray-900"},e),(0,l.tZ)(n,null))}},9119:function(t,e){"use strict";e.Z={mainTitle:"Andrea",subTitle:"The one-stop solution for property management with smart learning capabilities.",features:[{title:"Inspection Support",description:"Never were inspections easier! With a customisable form template Andrea will guide you through the inspection, uploading all data to the platform of your choice."},{title:"Overview",description:"With a modern dashboard yada yada yada"},{title:"Predictive Maintance",description:"An AI powered system will predict when maintenance are due and notify the affected parties in no time."}],pricing:[{title:"Base Model",content:"Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",customerName:"Jane Doe",customerTitle:"Director of Research and Data",customerImage:"https://placeimg.com/150/150/people"},{title:"Normal Model",content:"Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",customerName:"John Doe",customerTitle:"Director of Research and Data",customerImage:"https://placeimg.com/150/150/people"},{title:"Premium Model",content:"Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.",customerName:"Jane Smith",customerTitle:"Director of Research and Data",customerImage:"https://placeimg.com/150/150/people"}]}},8360:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8b8b8","images":{"fallback":{"src":"/static/49e7f2f7f32f677fcd70c01dc4057a13/8dd13/andrea_logo_circle.png","srcSet":"/static/49e7f2f7f32f677fcd70c01dc4057a13/0e3c1/andrea_logo_circle.png 285w,\\n/static/49e7f2f7f32f677fcd70c01dc4057a13/ad390/andrea_logo_circle.png 569w,\\n/static/49e7f2f7f32f677fcd70c01dc4057a13/8dd13/andrea_logo_circle.png 1138w","sizes":"(min-width: 1138px) 1138px, 100vw"},"sources":[{"srcSet":"/static/49e7f2f7f32f677fcd70c01dc4057a13/e5a57/andrea_logo_circle.webp 285w,\\n/static/49e7f2f7f32f677fcd70c01dc4057a13/ce717/andrea_logo_circle.webp 569w,\\n/static/49e7f2f7f32f677fcd70c01dc4057a13/d95e5/andrea_logo_circle.webp 1138w","type":"image/webp","sizes":"(min-width: 1138px) 1138px, 100vw"}]},"width":1138,"height":1112}')}}]);
//# sourceMappingURL=commons-c9e1c0f0981c19b9c232.js.map