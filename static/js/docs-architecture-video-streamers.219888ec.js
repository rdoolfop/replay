(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/replay/docs/architecture/video-streamers.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a("./node_modules/react/index.js"),r=a.n(n),o=a("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=p(this,c(t).call(this,e))).layout=null,a}var a,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;i(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"video-streamers"}},"Video streamers"),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The video streamer is a React component having almost the same role as the HTML video element, but wrapped into a nicer and more consistent and predictable API. Several alternative video streamer implementations can be provided in different video streamer components, with the possibility of wrapping more advanced playback technologies needed for advances purposes or special browsers."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Included in the Replay library comes a selection of ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"VideoStreamer")," components. See the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/replay/adaptive-streaming"}},"Adaptive streaming")," for how to use them."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"basicvideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<BasicVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:t},"The most basic one is called, yep, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<BasicVideoStreamer/>"),". This is wrapping the HTML video element with the higher-level VideoStreamer API. A ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<BasicVideoStreamer/>")," is inserted implicitly by the Replay player unless another video streamer component is specified as a child element of ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Replay/>"),"."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"shakavideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<ShakaVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:t},"For MPEG-DASH adaptive stream playback. This wraps Shaka Player."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"hlsjsvideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<HlsjsVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:t},"For HLS adaptive stream playback. This wraps hls.js."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"htmlvideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<HtmlVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:t},"For HLS adaptive stream playback in Safari. This is the same as BasicVideoStreamer, but adds support for FairPlay DRM."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"mockvideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"<MockVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:t},"This mocks a video streamer with state properties and settable properties, but plays no video. It is useful for design and development of Replay or custom UIs."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"the-video-streamer-api"}},"The video streamer API"),r.a.createElement(o.MDXTag,{name:"p",components:t},"All video streamer components implement the same API interface, and behave identically when playing a video or stream, as long as the underlying playback technology allows for it. This makes the video streamer components interchangeable within the same Replay player setup, and controls/UI will behave as expected by the end user."),r.a.createElement(o.MDXTag,{name:"p",components:t},"In other words, the same player UI and same integrations can be used and reused when swapping e.g. HLS streams with MPEG-DASH streams, or playing different stream formats in different browsers. The latter becomes relevant especially when DRM encryption is required."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Mainly, the video streamer API can be divided into three concerns:"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Specifying what to play. That means technical stream details provided in a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"source")," prop."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Manipulating or controlling the playback, e.g. by pausing, seeking, changing volume, or selecting text tracks for display. This is done by setting properties in a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"setProperties()")," method call. Regular React props are not usable for this."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Allowing for observation of the playback state. The observers will get updated on state properties when they change.")),r.a.createElement(o.MDXTag,{name:"p",components:t},"See the API reference for ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/settable-properties"}},"settable properties")," and ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"stream state properties"),"."),r.a.createElement(o.MDXTag,{name:"p",components:t},"When connecting a video streamer to the player controller, the player controller takes care of the two-way communication with player controls, and with Replay player component consumeres (i.e. the React outside Replay). Two-way communication means setting properties and observing the stream state properties. The player controller is also passing on playback source objects specified as ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"source")," props to Replay."))}}])&&m(a.prototype,n),s&&m(a,s),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-architecture-video-streamers.d4e10310804155f7099b.js.map