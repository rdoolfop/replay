(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/replay/components/common.js":function(e,t,n){"use strict";function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return f}),n.d(t,"j",function(){return d}),n.d(t,"c",function(){return b}),n.d(t,"b",function(){return h}),n.d(t,"e",function(){return g});var r="replay-";function a(e){for(var t=null==e?"":e,n=[],o=0;o<(arguments.length<=1?0:arguments.length-1);o++)(o+1<1||arguments.length<=o+1?void 0:arguments[o+1])&&n.push(t+(o+1<1||arguments.length<=o+1?void 0:arguments[o+1]));return n.join(" ")}var i=function(e){return e};function s(e){var t=e.classes,n=e.selectClasses,r=e.classNames,s=e.classNamePrefix;if(t&&n){var c=n(t);return Array.isArray(c)?c.filter(i).join(" "):c}if(r)return a.apply(void 0,[s].concat(o(r)))}function c(e,t){var n,o=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-o.left,o.width)),y:Math.max(0,Math.min(n.pageY-o.top,o.height)),width:o.width,height:o.height}}function l(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var u=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},p=function(e){return null!=e&&e.constructor==={}.constructor},f=function(e,t){if(e===t)return!0;if(p(e)&&p(t)){var n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&(!(n.filter(function(n){return u(e[n],t[n])}).length>0)&&0===o.filter(function(n){return u(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var r=e.length;r--;)if(e[r]!==t[r])return!1;return!0}return!1};function m(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){p(n[e])?t[e]=m(n[e]):t[e]=n[e]}),t}function d(e,t){var n=m(e);if(t){var o=t;Object.getOwnPropertyNames(o).forEach(function(e){p(o[e])?p(n[e])?n[e]=d(n[e],o[e]):n[e]=m(o[e]):n[e]=o[e]})}return n}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&o?"0".concat(e).concat(t):"".concat(e).concat(t)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),o="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,o=t);var r=Math.floor(n/86400),a=86400*r,i=Math.floor((n-a)/3600),s=a+3600*i,c=Math.floor((n-s)/60),l=n-s-60*c;return o+y(r,".",!0,!1)+y(i,":",0===r)+y(c,":",!1)+y(l)},h=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,o=0,r=0;return t&&null!=e&&(n=t?e.getHours():0,o=t?e.getMinutes():0,r=t?e.getSeconds():0),y(n,":",!1)+y(o,":",!1)+y(r)},g=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/SkipButton/SkipButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/generic/Button/Button.js"),a=n("./src/replay/components/common.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return o=this,r=(e=c(t)).call.apply(e,[this].concat(s)),n=!r||"object"!==i(r)&&"function"!==typeof r?u(o):r,p(u(u(n)),"handleClick",function(){var e=n.props.setProperties;if(e){var t=("function"===typeof n.props.inspect?n.props.inspect().position:n.props.position)+n.props.offset;isNaN(t)||e({position:t})}}),n}var n,a,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.content,n=e.label,a=e.classNamePrefix;return o.createElement(r.a,{classNamePrefix:a,className:"skip-button",label:n,onClick:this.handleClick,content:t})}}])&&s(n.prototype,a),f&&s(n,f),t}();p(f,"defaultProps",{classNamePrefix:a.a,offset:-30}),t.a=f,f.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SkipButton",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},offset:{defaultValue:{value:"-30",computed:!1},required:!1,flowType:{name:"number"},description:"Configures the offset that will be added to the current position when clicking the button. Negative values mean skipping backward."},position:{required:!1,flowType:{name:"number"},description:"The position from which the skipped position is computed. Not recommended to set this, but rather provide inspect()."},content:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"Button content, e.g. icon."},inspect:{required:!1,flowType:{name:"InspectMethod"},description:"\u21d8\ufe0e A callback returning the current video stream state with a position property when invoked. Invoked on clicking the button, and the position property is used for computing the new position."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ position: number }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ position: number }",signature:{properties:[{key:"position",value:{name:"number",required:!0}}]}}}],return:{name:"void"}}},description:"\u21d7 When the button is clicked, this callback is invoked with an object having a position property with the computed new position based on the skip offset."}}}},"./src/replay/components/controls/SkipButton/SkipButton.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./src/replay/components/controls/TimeDisplay/TimeDisplay.js"),c=n("./src/replay/components/controls/SkipButton/SkipButton.js"),l=n("./src/replay/docs/mdx-helpers/ShowCase.js"),u=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),p=n("./node_modules/react-feather/dist/index.js"),f=n("./src/replay/docs/props-footnote.md");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,h(t).call(this,e))).layout=null,n}var n,o,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"skipbutton"}},"SkipButton"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Control bar button for seeking by offsets. "),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(a.MDXTag,{name:"p",components:t},"The offset in seconds and direction can be configured, and this control can be used for both seeking forward and backward by relatively small intervals, e.g. 20 seconds, which is often more convenient than using the timeline slider."),r.a.createElement(a.MDXTag,{name:"p",components:t},"When clicking the button, ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ position: value })")," will be called, with the value computed by adding the current position with the configured ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"offset")," prop. This means negative configured offsets will make the button skip backward."),r.a.createElement(a.MDXTag,{name:"p",components:t},"When clicking the button, the current relative position is read by invoking the callback prop ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inspect()"),". This is a method of the player controller, passed down when ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},"connecting the control"),". It exposes the current video streamer state. The button could also read the prop ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"position"),". However, this would require continuous updates to the button during playback of the position value, and would be unnecessary as long as the button is not clicked."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(i.Playground,{__codesandbox:"undefined",__position:0,__code:"<ShowCase\n  render={({ setProperties, position = 180 }) => {\n    // Preferrably only fetch the position upon clicks, instead of updating a position prop.\n    // The PlayerController provides an inspect() method to connected controls, which is mocked here:\n    const duration = 600\n    const inspect = () => {\n      return { position: Math.min(position, duration) }\n    }\n    return (\n      <>\n        <SkipButton\n          offset={-20}\n          inspect={inspect}\n          content={<RotateCcw />}\n          setProperties={setProperties}\n        />\n        <TimeDisplay\n          position={position}\n          duration={duration}\n          playMode={'ondemand'}\n        />\n        <SkipButton\n          offset={40}\n          inspect={inspect}\n          content={<RotateCw />}\n          setProperties={setProperties}\n        />\n      </>\n    )\n  }}\n/>",__scope:{props:this?this.props:n,TimeDisplay:s.a,SkipButton:c.a,ShowCase:l.a,SimpleTable:u.a,RotateCcw:p.RotateCcw,RotateCw:p.RotateCw,Footnote:f.a}},r.a.createElement(l.a,{render:function(e){var t=e.setProperties,n=e.position,o=void 0===n?180:n,a=function(){return{position:Math.min(o,600)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{offset:-20,inspect:a,content:r.a.createElement(p.RotateCcw,null),setProperties:t}),r.a.createElement(s.a,{position:o,duration:600,playMode:"ondemand"}),r.a.createElement(c.a,{offset:40,inspect:a,content:r.a.createElement(p.RotateCw,null),setProperties:t}))}})),r.a.createElement(a.MDXTag,{name:"p",components:t},"This example demonstrates both forward and backward skip buttons configured with different intervals. It uses ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<TimeDisplay/>")," for showing the effect of button clicks."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(i.PropsTable,{of:c.a}),r.a.createElement(f.a,null),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(u.a,{rows:[{Element:"div","Class name":"skip-button","Generic class name":"button",States:"",Parent:""},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".skip-button"}]}))}}])&&y(n.prototype,o),m&&y(n,m),t}();v.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/controls/TimeDisplay/TimeDisplay.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js"),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(r.c)(null==e?0:Math[n?"min":"max"](0,e),t)},i=function(e){var t,n=e.position,i=e.duration,s=e.absolutePosition,c=e.playMode,l=e.liveDisplayMode,u=void 0===l?"clock-time":l,p=e.negativeMark,f=e.label,m=e.positionLabel,d=e.durationLabel,y=(e.clockTimeLabel,e.classNamePrefix),b=void 0===y?r.a:y;return"ondemand"===c?o.createElement("div",{className:Object(r.k)(b,"time-display"),title:f},o.createElement("span",{className:Object(r.k)(b,"time-display-position"),title:m},a(n,p)),o.createElement("span",{className:Object(r.k)(b,"time-display-duration"),title:d},a(i,p))):("live-offset"!==u||"livedvr"!==c)&&((t=s)instanceof Date&&!isNaN(t.getTime())&&t.getTime()>15147612e5)?o.createElement("div",{className:Object(r.k)(b,"time-display","time-display-no-duration"),title:f},o.createElement("span",{className:Object(r.k)(b,"time-display-clock-time"),title:m},Object(r.b)(s))):o.createElement("div",{className:Object(r.k)(b,"time-display"),title:f},o.createElement("span",{className:Object(r.k)(b,"time-display-position"),title:m},a((n||i||0)-(i||0),p,!0)),"livedvr"===c&&o.createElement("span",{className:Object(r.k)(b,"time-display-duration"),title:d},a(i,p)))};i.streamStateKeysForObservation=["position","duration","absolutePosition","playMode"],t.a=i,i.__docgenInfo={description:"",methods:[],displayName:"TimeDisplay",props:{liveDisplayMode:{defaultValue:{value:"'clock-time'",computed:!1},required:!1,flowType:{name:"union",raw:"'clock-time' | 'live-offset'",elements:[{name:"literal",value:"'clock-time'"},{name:"literal",value:"'live-offset'"}]},description:"When set to 'live-offset', DVR times will be displayed as offsets from the live edge. Default is 'clock-time'."},classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},position:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The relative playback position, used for on demand position and timeshift offset display."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The duration of the stream, used for on demand position and timeshift offset display."},absolutePosition:{required:!1,flowType:{name:"Date",nullable:!0},description:"\u21d8\ufe0e The clock time, used for live streams and DVR streams when liveDisplayMode is set to 'live-offset'."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e Play mode is used to decide what times to display."},negativeMark:{required:!1,flowType:{name:"string"},description:""},positionLabel:{required:!1,flowType:{name:"string"},description:""},durationLabel:{required:!1,flowType:{name:"string"},description:""},clockTimeLabel:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/components/generic/Button/Button.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){return e.button},f=function(e){function t(){var e,n,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,p=new Array(c),f=0;f<c;f++)p[f]=arguments[f];return o=this,i=(e=s(t)).call.apply(e,[this].concat(p)),n=!i||"object"!==a(i)&&"function"!==typeof i?l(o):i,u(l(l(n)),"handleClick",function(){return n.props.onClick&&n.props.onClick()}),u(l(l(n)),"handleKeyDown",Object(r.f)(["Enter"," "])),u(l(l(n)),"handleKeyUp",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleClick())}),n}var n,f,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o["Component"]),n=t,(f=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.className,a=e.classNamePrefix,i=e.classes,s=e.content,c=Object(r.g)({classes:i,selectClasses:p,classNames:["button",n],classNamePrefix:a});return o.createElement("div",{title:t,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,className:c,role:"button",tabIndex:0},o.createElement("div",{tabIndex:-1},s))}}])&&i(n.prototype,f),m&&i(n,m),t}();u(f,"defaultProps",{useDefaultClassNaming:!0}),t.a=f,f.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"Button",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},label:{required:!1,flowType:{name:"string"},description:""},content:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){var t={};return Object.keys(e).forEach(function(n){var o=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=o;break;case"selectedTextTrack":t.currentTextTrack=o;break;default:t[n]=o}}),t},p=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=i(t).call(this,e),n=!a||"object"!==r(a)&&"function"!==typeof a?c(o):a,l(c(c(n)),"setProperties",function(e){return n.setState(u(e))}),n.state={},n}var n,p,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(p=[{key:"render",value:function(){var e=this.setProperties,t=this.state,n=this.props,r=n.render,a=n.height,i=a?{width:"100%",height:a}:{width:"100%"};return o.createElement("div",null,o.createElement("div",{style:i}),o.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){l(e,t,n[t])})}return e}({},t,{setProperties:e}))))}}])&&a(n.prototype,p),f&&a(n,f),t}();t.a=p,p.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},s={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},l={padding:"20px",verticalAlign:"top"},u=r({},l,{fontStyle:"italic",opacity:.5}),p=r({},l,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),f=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var r=Object.keys(t[0]);return o.createElement("table",{style:i},o.createElement("thead",{style:s},o.createElement("tr",{style:c},r.map(function(e){return o.createElement("th",{key:"header-"+e,style:l},e)}))),o.createElement("tbody",null,t.map(function(e,t){return o.createElement("tr",{key:n+"-row-"+t,style:c},Object.values(e).map(function(e,r){return o.createElement("td",{key:n+"-cell-"+t+"-"+r,style:(a=e,""===a?u:p)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=f,f.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,u(t).call(this,e))).layout=null,n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}])&&c(n.prototype,o),i&&c(n,i),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-skip-button-skip-button.3e0cd07d98dd94357934.js.map