(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/replay/docs/architecture/video-streamers.mdx":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var n=t("./node_modules/react/index.js"),r=t.n(n),o=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}class m extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,a=e.components;s(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:a},r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"video-streamers"}},"Video streamers"),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"summary"}},"Summary"),r.a.createElement(o.MDXTag,{name:"p",components:a},"The video streamer is a React component having almost the same role as the HTML video element, but wrapped into a nicer and more consistent and predictable API. Several alternative video streamer implementations can be provided in different video streamer components, with the possibility of wrapping more advanced playback technologies needed for advanced purposes or special browsers."),r.a.createElement(o.MDXTag,{name:"p",components:a},"Included in the Replay library comes a selection of ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"VideoStreamer")," components. See the ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/advanced-playback/adaptive-streaming"}},"Adaptive streaming")," for how to use them."),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"basicvideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"<BasicVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:a},"The most basic one is called, yep, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<BasicVideoStreamer/>"),". This is wrapping the HTML video element with the higher-level VideoStreamer API. A ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<BasicVideoStreamer/>")," is inserted implicitly by the Replay player unless another video streamer component is specified as a child element of ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Replay/>"),"."),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"shakavideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"<ShakaVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:a},"For MPEG-DASH adaptive stream playback. This wraps Shaka Player."),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"hlsjsvideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"<HlsjsVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:a},"For HLS adaptive stream playback. This wraps hls.js."),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"htmlvideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"<HtmlVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:a},"For HLS adaptive stream playback in Safari. This is the same as BasicVideoStreamer, but adds support for FairPlay DRM."),r.a.createElement(o.MDXTag,{name:"h3",components:a,props:{id:"mockvideostreamer"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"<MockVideoStreamer/>")),r.a.createElement(o.MDXTag,{name:"p",components:a},"This mocks a video streamer with state properties and settable properties, but plays no video. It is useful for design and development of Replay or custom UIs."),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"the-video-streamer-api"}},"The video streamer API"),r.a.createElement(o.MDXTag,{name:"p",components:a},"All video streamer components implement the same API interface, and behave identically when playing a video or stream, as long as the underlying playback technology allows for it. This makes the video streamer components interchangeable within the same Replay player setup, and controls/UI will behave as expected by the end user."),r.a.createElement(o.MDXTag,{name:"p",components:a},"In other words, the same player UI and same integrations can be used and reused when swapping e.g. HLS streams with MPEG-DASH streams, or playing different stream formats in different browsers. The latter becomes relevant especially when DRM encryption is required."),r.a.createElement(o.MDXTag,{name:"p",components:a},"Mainly, the video streamer API can be divided into three concerns:"),r.a.createElement(o.MDXTag,{name:"ul",components:a},r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Specifying what to play. That means technical stream details provided in a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"source")," prop."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Manipulating or controlling the playback, e.g. by pausing, seeking, changing volume, or selecting text tracks for display. This is done by setting properties in a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"setProperties()")," method call. Regular React props are not usable for this."),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Allowing for observation of the playback state. The observers will get updated on state properties when they change.")),r.a.createElement(o.MDXTag,{name:"p",components:a},"See the API reference for ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/reference/settable-properties"}},"settable properties")," and ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/reference/observable-stream-state"}},"stream state properties"),"."),r.a.createElement(o.MDXTag,{name:"p",components:a},"When connecting a video streamer to the player controller, the player controller takes care of the two-way communication with player controls, and with Replay player component consumeres (i.e. the React outside Replay). Two-way communication means setting properties and observing the stream state properties. The player controller is also passing on playback source objects specified as ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"source")," props to Replay."))}}m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-architecture-video-streamers.d2054bfdd82bd3c54d47.js.map