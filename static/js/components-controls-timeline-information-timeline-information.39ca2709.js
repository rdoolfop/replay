(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/replay/components/controls/Timeline/Timeline.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js"),i=n("./src/replay/components/generic/Slider/Slider.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=l(t).call(this,e),n=!r||"object"!==a(r)&&"function"!==typeof r?p(o):r,u(p(p(n)),"timeoutId",void 0),u(p(p(n)),"handleSliderChange",function(e){n.props.setProperties&&n.props.setProperties({position:e})}),u(p(p(n)),"handleDrag",function(){n.setState({isDragging:!0}),n.timeoutId&&clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.setState({isDragging:!1}),n.timeoutId=null},800)}),n.state={isDragging:!1},n}var n,r,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentWillUnmount",value:function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.duration,r=e.isSeeking,a=e.label,s=e.classNamePrefix,l=e.children,c=e.handleContent,p=e.trackContent,u=e.reduceDragGlitch;return o.createElement(i.a,{label:a,value:t,maxValue:n,isUpdateBlocked:r||this.state.isDragging,handleContent:c,trackContent:p,onValueChange:this.handleSliderChange,onDrag:u?this.handleDrag:void 0,classNamePrefix:s,className:"timeline",trackClassName:"timeline-track",handleClassName:"timeline-handle"},l)}}])&&s(n.prototype,r),m&&s(n,m),t}();u(m,"defaultProps",{classNamePrefix:r.a,reduceDragGlitch:!0}),u(m,"streamStateKeysForObservation",["position","duration","isSeeking"]),m.displayName="Timeline",t.a=m,m.__docgenInfo={description:"",methods:[{name:"handleSliderChange",docblock:null,modifiers:[],params:[{name:"position",type:{name:"number"}}],returns:null},{name:"handleDrag",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Timeline",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},reduceDragGlitch:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:"If set to false, glitches after dragging completes will occur, while the stream reports a position before seeking is performed. When true glitches are prevented by activating a timer for a small time after dragging has completed."},position:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The current playback position in seconds (with decimals). A value between 0 and duration."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The stream's duration or seekable range in seconds (with decimals)."},isSeeking:{required:!1,flowType:{name:"boolean"},description:"\u21d8\ufe0e True if a seeking operation is ongoing. This prop is used by the component to avoid glitching while dragging."},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Elements that will display on top of the timeline slider track, but below the timeline handle."},handleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Can be set for custom graphics or content in the slider handle."},trackContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Can be set for custom graphics or content representing the slider track."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ position: number }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ position: number }",signature:{properties:[{key:"position",value:{name:"number",required:!0}}]}}}],return:{name:"void"}}},description:"\u21d7 If the volume slider handle position is changed, this callback is invoked with { position: newPosition }"}}}},"./src/replay/components/controls/TimelineInformation/TimelineInformation.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var n,i,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.absoluteStartPosition,n=e.duration,i=e.playMode,a=e.previewValue,s=e.isDragging,l=e.isPointerInside,c=e.classNamePrefix,p=function(e,t,n){return null!=n?"livedvr"===e&&t instanceof Date&&t.getTime()>0?Object(r.b)(new Date(t.getTime()+1e3*n)):Object(r.c)(n):""}(i,t,a),u=((a||0)/(n||1)*100).toFixed(2),m=Object(r.k)(c,"timeline-information"),f=Object(r.k)(c,"timeline-tooltip",s||l?"timeline-tooltip-visible":null);return o.createElement("div",{className:m},o.createElement("div",{className:f,style:{left:"".concat(u,"%")}},p))}}])&&a(n.prototype,i),p&&a(n,p),t}();p(u,"streamStateKeysForObservation",["absoluteStartPosition","duration","playMode"]),p(u,"defaultProps",{classNamePrefix:r.a}),u.displayName="TimelineInformation",t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"TimelineInformation",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},absoluteStartPosition:{required:!1,flowType:{name:"Date"},description:"\u21d8\ufe0e For previewing live clock time positions, this should contain the date/time corresponding to the start of the timeline.."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e Used for selecting relative position or clock time display."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e Used for computing the tooltip position."},previewValue:{required:!1,flowType:{name:"number",nullable:!0},description:"The relative preview position, passed automatically from a Timeline parent."},isPointerInside:{required:!1,flowType:{name:"boolean"},description:"The Timeline parent manages mouse pointer state, and passes to this component. If true, the tooltip is displayed."},isDragging:{required:!1,flowType:{name:"boolean",nullable:!0},description:"Passed from the Timeline parent. When dragging, it is set to true, and the tooltip displays."}}}},"./src/replay/components/controls/TimelineInformation/TimelineInformation.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/@mdx-js/tag/dist/index.js"),a=n("./node_modules/docz/dist/index.m.js"),s=n("./src/replay/components/controls/TimelineInformation/TimelineInformation.js"),l=n("./src/replay/components/controls/Timeline/Timeline.js"),c=n("./src/replay/docs/mdx-helpers/ShowCase.js"),p=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),u=n("./src/replay/docs/props-footnote.md");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,b(t).call(this,e))).layout=null,n}var n,o,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=f(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"timelineinformation-component"}},"TimelineInformation component"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Position preview tooltip for timeline. When the mouse pointer is over the timeline, displays the corresponding stream position or time-of-day clock time for the pointer position."),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(i.MDXTag,{name:"p",components:t},"This component is used as a child to the ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Timeline/>")," component. It gets a ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"previewValue")," prop set by the parent Timeline, containing a relative position between 0 and the ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"duration")," prop value. The parent control is responsible for tracking mouse positions, and to report the target seek position while dragging. Like ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<TimeDisplay/>"),", the tooltip presents a clock time preview in the tooltip for live streams. For this, it needs the ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"absoluteStartPosition")," of the stream to be specified."),r.a.createElement(i.MDXTag,{name:"p",components:t},"The tooltip only displays if at least one of the props ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isPointerInside")," or ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isDragging")," is set to ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true")," by the parent Timeline."),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(a.Playground,{__codesandbox:"undefined",__position:0,__code:'<ShowCase\n  height="20px"\n  render={({ setProperties, position }) => {\n    const duration = 333\n    return (\n      <Timeline\n        position={position}\n        duration={duration}\n        setProperties={setProperties}\n      >\n        <TimelineInformation playMode="ondemand" duration={duration} />\n      </Timeline>\n    )\n  }}\n/>',__scope:{props:this?this.props:n,TimelineInformation:s.a,Timeline:l.a,ShowCase:c.a,SimpleTable:p.a,Footnote:u.a}},r.a.createElement(c.a,{height:"20px",render:function(e){var t=e.setProperties,n=e.position;return r.a.createElement(l.a,{position:n,duration:333,setProperties:t},r.a.createElement(s.a,{playMode:"ondemand",duration:333}))}})),r.a.createElement(i.MDXTag,{name:"p",components:t},"The component is here shown within a timeline."),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(a.PropsTable,{of:s.a}),r.a.createElement(u.a,null),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(p.a,{rows:[{Element:"div","Class name":"timeline-information","Generic class name":"",States:"",Parent:""},{Element:"div","Class name":"timeline-tooltip","Generic class name":"",States:"timeline-tooltip-visible",Parent:".timeline-information"}]}))}}])&&d(n.prototype,o),m&&d(n,m),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t={};return Object.keys(e).forEach(function(n){var o=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=o;break;case"selectedTextTrack":t.currentTextTrack=o;break;default:t[n]=o}}),t},u=function(e){function t(e){var n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,i=a(t).call(this,e),n=!i||"object"!==r(i)&&"function"!==typeof i?l(o):i,c(l(l(n)),"setProperties",function(e){return n.setState(p(e))}),n.state={},n}var n,u,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(u=[{key:"render",value:function(){var e=this.setProperties,t=this.state,n=this.props,r=n.render,i=n.height,a=i?{width:"100%",height:i}:{width:"100%"};return o.createElement("div",null,o.createElement("div",{style:a}),o.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}({},t,{setProperties:e}))))}}])&&i(n.prototype,u),m&&i(n,m),t}();t.a=u,u.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},s={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},l={orderSpacing:0,borderCollapse:"collapse"},c={padding:"20px",verticalAlign:"top"},p=r({},c,{fontStyle:"italic",opacity:.5}),u=r({},c,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),m=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var r=Object.keys(t[0]);return o.createElement("table",{style:a},o.createElement("thead",{style:s},o.createElement("tr",{style:l},r.map(function(e){return o.createElement("th",{key:"header-"+e,style:c},e)}))),o.createElement("tbody",null,t.map(function(e,t){return o.createElement("tr",{key:n+"-row-"+t,style:l},Object.values(e).map(function(e,r){return o.createElement("td",{key:n+"-cell-"+t+"-"+r,style:(i=e,""===i?p:u)},function(e){return""===e?"none":e}(e));var i}))})))}};t.a=m,m.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/@mdx-js/tag/dist/index.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,p(t).call(this,e))).layout=null,n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",r.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",r.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",r.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}])&&l(n.prototype,o),a&&l(n,a),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=components-controls-timeline-information-timeline-information.192001caf47db1c2b1c8.js.map