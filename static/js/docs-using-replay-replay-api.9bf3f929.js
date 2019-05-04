(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"./src/replay/docs/using-replay/replay-api.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a("./node_modules/react/index.js"),o=a.n(n),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=s(this,l(t).call(this,e))).layout=null,a}var a,n,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;i(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"api-reference-for-replay"}},"API reference for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h1"},"<Replay/>")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"component-props"}},"Component props"),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"source-playbacksource--null"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"source: PlaybackSource | null")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Specifies what to play in Replay."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Set ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"source")," to null or omit this prop if the player should be rendered without loading any video stream (yet), or in order to stop and unload a playing video."),o.a.createElement(r.MDXTag,{name:"p",components:t},"For playing a video file or stream without needing to specify anything else except the stream URL, set source to a string containing the stream URL."),o.a.createElement(r.MDXTag,{name:"p",components:t},"For more advanced needs, specify an object mathcing the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"AdvancedPlaybackSource")," type:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-typescript"}},"type AdvancedPlaybackSource = {\n  streamUrl: string,\n  contentType?: string,\n  licenseUrl?: string,\n  drmType?: string,\n  startPosition?: number,\n  textTracks?: Array<SourceTrack>,\n  licenseAcquisitionDetails?: {\n    licenseRequestHeaders?: { [string]: string },\n    fairPlayCertificateUrl?: string,\n    contentId?: string,\n    widevineServiceCertificateUrl?: string\n  }\n};\n")),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Property"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"streamUrl"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"URL to a video file, or to a stream manifest/playlist when using adaptive streams.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"contentType"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"The mime type of the stream. Relevant if using the CompoundVideoStreamer broking/resolving correct playback technology based on stream technologies.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"licenseUrl"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"When the stream is DRM encrypted, specify the license acquisition URL through this property.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"startPosition"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"A number specifying the offset where playback should start upon loading the video. Given in seconds from the start of the stream.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"textTracks"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"An array with objects specifying any subtitle files to be side-loaded as text tracks. See the prop ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"textTracks")," below for more information on the object shape.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"licenseAcquisitionDetails"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Additional data if needed for performing DRM license acquisition.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"licenseRequestHeaders"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Header names/values to be included in the license request. Commonly used for passing auth tokens etc.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"fairPlayCertificateUrl"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"URL to the certificate file needed to for performing FairPlay license requests.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"contentId"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"The FairPlay asset/content ID, if not to be extracted from the HLS stream metadata.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"widevineServiceCertificateUrl"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"URL to the Widevine service certificate, if not using the license endpoint.")))),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"texttracks-arraysourcetrack"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"textTracks: Array<SourceTrack>")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Side-loaded text tracks (subtitles) can be specified as part of the PlaybackSource object described above, or independently through the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"textTracks")," prop. An array is expected, with objects matching the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SourceTrack")," type."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-typescript"}},"type SourceTrack = {\n  src: string,\n  label?: string,\n  kind?: string,\n  language?: string,\n  contentType?: string,\n  cues?: Array<{ start: number, end: number, content: string }>\n};\n")),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Property"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"src"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"The URL of the subtitle file.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"label"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"A human friendly description of the subtitle track. Will be displayed in the subtitle selector item.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"kind"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Corresponds to the HTML text track kind property, and is commonly either ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"'captions'")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"'subtitles'"),".")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"language"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"The language code of the subtitle file content.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"contentType"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"The mime type of the subtitle file, e.g. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"text/vtt"),".")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"cues"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Instead of providing a subtitle file URL as the source, parsed and prepared text cues can be specified directly. This makes it possible to support other subtitle file formats.")))),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"options-playerconfiguration"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"options: PlayerConfiguration")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Pass an object to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"options")," with any ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/configuration"}},"configuration overrides"),". The object should match the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"PlayerConfiguration")," type. Note that almost every property is optional, so that only custom settings need to be included in the object. Also note that specifying a property with the value ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"null"),", nullifies the corresponding property in the default configuration."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"type PlayerConfiguration = {\n  videoStreamer?: ?VideoStreamerConfiguration,\n  interactionDetector?: ?{\n    inactivityDelay: number\n  },\n  keyboardShortcuts?: ?{\n    keyMap: {\n      togglePause?: string | Array<string>,\n      toggleMute?: string | Array<string>,\n      toggleFullscreen?: string | Array<string>,\n      skipBack?: string | Array<string>,\n      skipForward?: string | Array<string>,\n      increaseVolume?: string | Array<string>,\n      decreaseVolume?: string | Array<string>\n    },\n    volumeStep?: number,\n    skipOffset?: number\n  },\n  userSettings?: {\n    hasPrecedence?: ?boolean,\n    storageKey?: string,\n    settingsStoragePolicy: {\n      volume?: ?('none' | 'local' | 'session'),\n      isMuted?: ?('none' | 'local' | 'session'),\n      textTrackLanguage?: ?('none' | 'local' | 'session'),\n      textTrackKind?: ?('none' | 'local' | 'session'),\n      audioTrackLanguage?: ?('none' | 'local' | 'session'),\n      audioTrackKind?: ?('none' | 'local' | 'session')\n    }\n  },\n  classNamePrefix?: ?string,\n  controls?: ?{\n    includeControls?: ?Array<('playPauseButton' | 'skipButton' | 'timeline' | 'timeDisplay' | 'gotoLiveButton' | 'volume' | 'audioSelector' | 'subtitlesSelector' | 'qualitySelector' | 'fullscreenButton' | 'exitButton' | 'playbackMonitor' | 'bufferingIndicator')>,\n    skipButtonOffset?: number,\n    liveDisplayMode?: 'clock-time' | 'live-offset',\n    qualitySelectionStrategy?: 'cap-bitrate' | 'fix-bitrate'\n  }\n};\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"The mentioned configuration chapter discusses most of the configuration settings."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"initialplaybackprops-initialplaybackprops"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"initialPlaybackProps: InitialPlaybackProps")),o.a.createElement(r.MDXTag,{name:"p",components:t},"When a video source is loaded, the playback startup will have any of these properties applied, if specified:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-typescript"}},"type InitialPlaybackProps = {\n  isMuted?: boolean,\n  volume?: number,\n  isPaused?: boolean,\n  bitrateCap?: number,\n  bitrateFix?: number | 'max' | 'min'\n};\n")),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Property"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"isMuted"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"If specified with a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true"),", the playback will start muted.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"volume"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Specifies an initial volume setting.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"isPaused"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"If specified with a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true"),", the playback will start paused.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"bitrateCap"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Only relevant for adaptive streaming. Specifies a maximum bitrate to be considered for adaptive bitrate switching. The number specifies the bitrate in kbps.")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"bitrateFix"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Only relevant for adaptive streaming. Deactivates adaptive bitrate switching and fixes the bitrate selection. The number is given as an integer of kbps, and must correspond exactly to one of the bitrates reported in the video stream state property ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"bitrates"),".")))),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"children"}},"Children"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Replay can take 0 or 1 child elements. If present, a child should implement the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/video-streamers"}},"video streamer")," component API, most commonly by using one of the alternatives provided by this library."),o.a.createElement(r.MDXTag,{name:"p",components:t},"When using basic HTML playback of video files, such a child video streamer element can be omitted. Replay will then insert the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<BasicVideoStreamer/>"),". For advanced streaming playback, specify a video streamer component supporting the streaming technology as the child element. This element should not have props specified that could interfere with the prop set passed down from the controller. One example is the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"source")," prop. Always set the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"source")," prop (see below) on the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Replay")," component itself, and not the video streamer child."),o.a.createElement(r.MDXTag,{name:"p",components:t},"When needing to toggle different video streamer components for different stream formats and/or browsers, use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CompoundVideoStreamer")," component discussed in the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/advanced-playback/adaptive-streaming"}},"adaptive streaming")," chapter. Here is an example of specifying the HLS.js video streamer as the child component for HLS playback support."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},'  <Replay\n    source="public/example-media/adaptive.m3u8"\n    initialPlaybackProps={{ isPaused: true }}>\n    <HlsjsVideoStreamer/>\n  </Replay>\n')),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"callback-props"}},"Callback props"),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"onexit---void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"onExit: () => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"If specified, displays a close button in the upper right corner of the player. When clicking the button, this callback will be invoked. It is the responsibility of the parent elements of the Replay element to remove the player from the rendered element tree."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"onerror-any--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"onError?: any => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Invoked upon playback/stream errors and possibly other errors."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"onplaybackactionsready-playbackactions--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"onPlaybackActionsReady?: PlaybackActions => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},'In order to get hold of methods for controlling playback, this callback must be specified. Invocations will provide the API for controlling the playback. Invoked when the player is ready to be controlled. The argument is an object with the methods listed in the "Methods" chapter below.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"See the chapter ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/replay/controlling-playback#how-to-perform-operations-on-the-playback"}},"How to perform operations on the playback")," for a dicusssion of the methods being made available in this callback, and the methods reference underneath."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"onstreamstatechange-videostreamstate--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"onStreamStateChange?: VideoStreamState => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Through this callback, all aspects of the video playback state is reported. This includes volume changes, bitrate changes, position updates, durations, live stream states, audio and text track selections. The list is not exhaustive. Each state change to any property is reported by an individual invocation of this callback, with an argument containing the property (key and value) with an updated state. "),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"video-stream-state-properties-reported-through-onstreamstatechange"}},"Video stream state properties, reported through ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h2"},"onStreamStateChange")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Please see the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"Stream state properties reference"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"playback-operation-methods-available-through-onplaybackactionsready"}},"Playback operation methods, available through ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h2"},"onPlaybackActionsReady")),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"inspect---videostreamstate"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"inspect: () => VideoStreamState")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Returns all the current properties of the video stream state, valid only at the moment of invocation. The return value is one object combining all state property keys and values that are reported from the playback."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"setproperties-playbackprops--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"setProperties: PlaybackProps => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Manipulates properties of the playback, i.e. performs playback operations by setting properties. See the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/settable-properties"}},"settable properties")," for what properties that are recognised in the object argument of this method, and how it can be used to control all aspects of the playback. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"The methods listed below are simply sugar methods corresponding to setting the different properties listed above."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"play---void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"play: () => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Resumes playback after pausing."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"pause---void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"pause: () => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Pauses playback."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"setposition-number--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"setPosition: number => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Seeks to a different playback position. The number argument is the relative position between 0 as the start of the stream, and the duration of the stream. For live streams, 0 is the earliest timeshifting position available, while a position equal to duration is the live edge."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"gotolive---void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"gotoLive: () => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Seeks to the live edge of a live stream, reverting a timeshifted playback."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"setvolume-number--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"setVolume: number => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Updates the volume specified as a number within the range 0 (muted) to 1 (maximum)."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"setismuted-boolean--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"setIsMuted: boolean => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Changes the mute state without affecting the volume setting. Use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true")," for muting, and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"false")," for unmuting."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"mute---void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"mute: () => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Mutes the playback."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"unmute---void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"unmute: () => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Unmutes the playback."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"requestpictureinpicture--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"requestPictureInPicture() => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Attempts starting the browser's picture-in-picture mode. Feature detection of picture-in-picture should be performed before calling this function. The video stream state property ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isPipAvailable")," will have a value of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true")," if the feature is available. Successful Pip activation will be reported through the video stream state property ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isPipActive"),". This method needs to be invoked in the call stack of a user gesture (e.g. button click)."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"exitpictureinpicture--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"exitPictureInPicture() => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Stops the picture-in-picture mode if active. See above."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"showairplaytargetpicker--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"showAirPlayTargetPicker() => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Initiates a possible transfer of the video playback to an AirPlay device. Feature detection of AirPlay should be performed before calling this function. The video stream state property ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isAirPlayAvailable")," will have a value of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true")," if the feature is available. Successful AirPlay video playback is reported through the video stream state property ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isAirPlayActive")," being set to true."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"setselectedaudiotrack-availabletrack--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"setSelectedAudioTrack: AvailableTrack => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Used for switching audio tracks when e.g. more than one language is available in the stream. The argument to this method must be one of the track objects reported in the video stream state property ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"audioTracks"),". It can not be a cloned track object or an object containing the same properties."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"setselectedtexttrack-availabletrack--null--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"setSelectedTextTrack: (AvailableTrack | null) => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Used for switching subtitle track display when available. The object argument to this method must be one of the track objects reported in the video stream state property ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"textTracks"),". It can not be a cloned track object or an object containing the same properties. Passing ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"null")," to this method deselects any currently displaying text tracks."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"capbitrate-number--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"capBitrate: number => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Only relevant for adaptive streaming. Specifies a maximum bitrate to be considered for adaptive bitrate switching. The number states such a bitrate in kbps."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"fixbitrate-number--max--min--void"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"fixBitrate: (number | 'max' | 'min') => void")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Only relevant for adaptive streaming. Deactivates adaptive bitrate switching and fixes the bitrate selection. The number is given as an integer of kbps, and must correspond exactly to one of the bitrates reported in the video stream state property ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"bitrates"),". E.g. if the reported bitrates are ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"[923, 1254, 3211]"),", this method only has effect when invoked with either ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"923"),",",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"1254"),", or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"3211")," as numbers. If specifying ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'max'"),", the highest bitrate will be selected, regardless of its reported kbps. Correspondingly ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'min''")," selects the lowest bitrate."))}}])&&p(a.prototype,n),m&&p(a,m),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-using-replay-replay-api.192001caf47db1c2b1c8.js.map