(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/replay/components/common.js":function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return o}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"h",function(){return p}),n.d(t,"i",function(){return m}),n.d(t,"j",function(){return d}),n.d(t,"c",function(){return b}),n.d(t,"b",function(){return h}),n.d(t,"e",function(){return g});var o="replay-";function a(e){for(var t=null==e?"":e,n=[],r=0;r<(arguments.length<=1?0:arguments.length-1);r++)(r+1<1||arguments.length<=r+1?void 0:arguments[r+1])&&n.push(t+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return n.join(" ")}var i=function(e){return e};function c(e){var t=e.classes,n=e.selectClasses,o=e.classNames,c=e.classNamePrefix;if(t&&n){var s=n(t);return Array.isArray(s)?s.filter(i).join(" "):s}if(o)return a.apply(void 0,[c].concat(r(o)))}function s(e,t){var n,r=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-r.left,r.width)),y:Math.max(0,Math.min(n.pageY-r.top,r.height)),width:r.width,height:r.height}}function l(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var p=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},u=function(e){return null!=e&&e.constructor==={}.constructor},m=function(e,t){if(e===t)return!0;if(u(e)&&u(t)){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(function(n){return p(e[n],t[n])}).length>0)&&0===r.filter(function(n){return p(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var o=e.length;o--;)if(e[o]!==t[o])return!1;return!0}return!1};function f(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){u(n[e])?t[e]=f(n[e]):t[e]=n[e]}),t}function d(e,t){var n=f(e);if(t){var r=t;Object.getOwnPropertyNames(r).forEach(function(e){u(r[e])?u(n[e])?n[e]=d(n[e],r[e]):n[e]=f(r[e]):n[e]=r[e]})}return n}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);var o=Math.floor(n/86400),a=86400*o,i=Math.floor((n-a)/3600),c=a+3600*i,s=Math.floor((n-c)/60),l=n-c-60*s;return r+y(o,".",!0,!1)+y(i,":",0===o)+y(s,":",!1)+y(l)},h=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,r=0,o=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,o=t?e.getSeconds():0),y(n,":",!1)+y(r,":",!1)+y(o)},g=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/QualitySelector/QualitySelector.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),c=n("./src/replay/components/controls/QualitySelector/QualitySelector.js"),s=n("./src/replay/docs/mdx-helpers/ShowCase.js"),l=n("./node_modules/react-feather/dist/index.js"),p=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),u=n("./src/replay/docs/props-footnote.md");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,b(t).call(this,e))).layout=null,n}var n,r,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=f(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"qualityselector"}},"QualitySelector"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Control bar widget for controlling adaptive streaming quality and strategy."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The quality selector lists the stream's bitrates. It also indicates what bitrate currently playing. According to configuration, selecting one of the listed items, can either fix the bitrate selection to this bitrate, or cap the range for adaptive bitrate selection. Fixing means that the adaptive bitrate selection will be deactivated. Capping does not deactivate it, but means that no higher bitrates than the selected one will be selected adaptively. The selector displays one item for reverting to full adaptive bitrate selection without fixing or capping."),o.a.createElement(a.MDXTag,{name:"p",components:t},"The stream's available bitrates are specified in the prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"bitrates"),", and the currently playing or loading bitrate is specified with ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"currentBitrate"),". Bitrates are specified in kbps."),o.a.createElement(a.MDXTag,{name:"p",components:t},"The control is only rendered if there are more than one bitrate reported. The item text will be based on the bitrate numbers, but formatted with the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formatBitrateLabel")," callback prop."),o.a.createElement(a.MDXTag,{name:"p",components:t},"The quality selector uses the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Selector />")," generic component. It can be configured through the prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"selectionStrategy")," into the two mentioned modes with ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'fix-bitrate'")," or ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'cap-bitrate''"),"."),o.a.createElement(a.MDXTag,{name:"p",components:t},"With ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'fix-bitrate'"),", upon clicking on one selector item representing a track, it invokes ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ bitrateFix: value })")," where value is the bitrate of the clicked selector item. "),o.a.createElement(a.MDXTag,{name:"p",components:t},"With ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'cap-bitrate'"),", upon clicking on one selector item representing a track, it invokes ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ bitrateCap: value })")," where value is the bitrate of the clicked selector item."),o.a.createElement(a.MDXTag,{name:"p",components:t},"For the selector item resetting fixed or capped bitrate, the item text must be provided in the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"autoLabel")," prop. If this item is selected, ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ bitrateFix: Infinity })")," or ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ bitrateCap: Infinity })")," is invoked."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),o.a.createElement(i.Playground,{__codesandbox:"undefined",__position:0,__code:"() => {\n  const bitrates = [800, 1000, 2500, 3600]\n  const formatBitrateLabel = (bitrate, isPlaying) =>\n    bitrate + ' kbps' + (isPlaying ? ' \u2022' : '')\n  return (\n    <ShowCase\n      height=\"160px\"\n      render={({ setProperties, bitrateCap }) => (\n        <QualitySelector\n          setProperties={setProperties}\n          bitrates={bitrates}\n          currentBitrate={1000}\n          bitrateCap={bitrateCap}\n          autoLabel=\"Auto quality\"\n          toggleContent={<Settings />}\n          selectionStrategy=\"cap-bitrate\"\n          formatBitrateLabel={formatBitrateLabel}\n        />\n      )}\n    />\n  )\n}",__scope:{props:this?this.props:n,QualitySelector:c.a,ShowCase:s.a,Settings:l.Settings,SimpleTable:p.a,Footnote:u.a}},function(){var e=[800,1e3,2500,3600],t=function(e,t){return e+" kbps"+(t?" \u2022":"")};return o.a.createElement(s.a,{height:"160px",render:function(n){var r=n.setProperties,a=n.bitrateCap;return o.a.createElement(c.a,{setProperties:r,bitrates:e,currentBitrate:1e3,bitrateCap:a,autoLabel:"Auto quality",toggleContent:o.a.createElement(l.Settings,null),selectionStrategy:"cap-bitrate",formatBitrateLabel:t})}})}),o.a.createElement(a.MDXTag,{name:"p",components:t},"The example doesn't show the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"currentBitrate")," adapting to the new setting."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),o.a.createElement(i.PropsTable,{of:c.a}),o.a.createElement(u.a,null),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),o.a.createElement(p.a,{rows:[{Element:"div","Class name":"quality-selector","Generic class name":"selector",States:"collapsed, expanded",Parent:""},{Element:"div","Class name":"selector-toggle","Generic class name":"toggle-button",States:"toggled-on, toggled-off",Parent:".quality-selector"},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".selector-toggle"},{Element:"div","Class name":"selector-items","Generic class name":"",States:"",Parent:".quality-selector"},{Element:"div (0..n)","Class name":"selector-item","Generic class name":"",States:"selected",Parent:".selector-items"},{Element:"div (0..n)","Class name":"","Generic class name":"",States:"",Parent:".selector-item"}]}))}}])&&d(n.prototype,r),m&&d(n,m),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=r;break;case"selectedTextTrack":t.currentTextTrack=r;break;default:t[n]=r}}),t},u=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=i(t).call(this,e),n=!a||"object"!==o(a)&&"function"!==typeof a?s(r):a,l(s(s(n)),"setProperties",function(e){return n.setState(p(e))}),n.state={},n}var n,u,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r["Component"]),n=t,(u=[{key:"render",value:function(){var e=this.setProperties,t=this.state,n=this.props,o=n.render,a=n.height,i=a?{width:"100%",height:a}:{width:"100%"};return r.createElement("div",null,r.createElement("div",{style:i}),r.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({},t,{setProperties:e}))))}}])&&a(n.prototype,u),m&&a(n,m),t}();t.a=u,u.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},c={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},s={orderSpacing:0,borderCollapse:"collapse"},l={padding:"20px",verticalAlign:"top"},p=o({},l,{fontStyle:"italic",opacity:.5}),u=o({},l,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),m=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var o=Object.keys(t[0]);return r.createElement("table",{style:i},r.createElement("thead",{style:c},r.createElement("tr",{style:s},o.map(function(e){return r.createElement("th",{key:"header-"+e,style:l},e)}))),r.createElement("tbody",null,t.map(function(e,t){return r.createElement("tr",{key:n+"-row-"+t,style:s},Object.values(e).map(function(e,o){return r.createElement("td",{key:n+"-cell-"+t+"-"+o,style:(a=e,""===a?p:u)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=m,m.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,p(t).call(this,e))).layout=null,n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components;c(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}])&&s(n.prototype,r),i&&s(n,i),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-quality-selector-quality-selector.3e0cd07d98dd94357934.js.map