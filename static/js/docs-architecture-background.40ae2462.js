(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./src/replay/docs/architecture/background.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,c(t).call(this,e))).layout=null,n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"background-the-challenges-and-requirements"}},"Background: The challenges and requirements"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"defining-the-video-player"}},"Defining the video player"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The task of playing back video in a web page, is more or less handled by the browser through the HTML ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<video>")," element. However, requiring a custom player UI or sophisticated playback technologies, adding a video player to the page becomes a development concern, and we can't or won't just deal with the browser abstractions."),o.a.createElement(r.MDXTag,{name:"p",components:t},"In the scope of this project, and quite commonly in frontend development, a (customised) video player in a web page is defined by a set of page elements: The element displaying/rendering the video stream (and all the inner mechanics behind this task), combined with element hierarchy constituting the player user interface, with controls, overlays, styling, and a layout. This becomes a branch of the page DOM tree looking a bit like its own ecosystem. Often, the video player should operate quite autonomously after being instantiated and told what to play."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The video player could be enriched with extra features for the end-user or behind-the-scenes, and it could be desired to keep these extensions as part of the subtree-scoped player ecosystem. Examples are REST API consumption, content recommendation overlays or menus, game events related to a sports live stream, video ad system integrations, or tracking/analytics integrations."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"goals-of-this-player-project"}},"Goals of this player project"),o.a.createElement(r.MDXTag,{name:"p",components:t},"This project is built with customisation and extensibility in mind for these purposes, however at this time it only implements features covering the core playback tasks along with a core playback UX. It also prepares to allow for advanced, multiple playback/streaming technologies with a consistent wrapping of, and plug-in approach to, existing implementations/libraries. The same wrapping might also be used to plug in embed playback from e.g. YouTube or Vimeo in the same consistent wrapping, but the roots of this project are professional streaming requirements from independent services."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Part of reaching these goal is extensively adopting modern React patterns giving structure, clarity, and predictability to the running player code. Core video playback in the browser unfortunately gives a lot of surprises and inconsistencies to a player developer (example: ",o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},'Why is the HTML video element state in some browsers "paused" when seeking to a different position?'),"). One goal is to express the observed playback state to observers, like player controls, in a clean manner. This is different to several other React video player alternatives out there."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"the-task-of-the-video-player-ui-consuming-and-controlling-the-video-playback-state"}},"The task of the video player UI: Consuming and controlling the video playback state"),o.a.createElement(r.MDXTag,{name:"p",components:t},"A video being played has a state with a lot of properties. Throughout playback, the state is set or changes because of 1) events coming from the stream and stream delivery itself, 2) the nature/lifecycle of video playback, and 3) as a result of outer manipulation of the playback state, from e.g. end users or external integrations."),o.a.createElement(r.MDXTag,{name:"h4",components:t,props:{id:"examples-of-1"}},"Examples of 1):"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The bitrate changes adaptively because of varying network conditions. "),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The stream appears to have several audio tracks."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"A live stream increases its DVR window length.")),o.a.createElement(r.MDXTag,{name:"h4",components:t,props:{id:"examples-of-2"}},"Examples of 2):"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Video starts or ends."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Playback position changes.")),o.a.createElement(r.MDXTag,{name:"h4",components:t,props:{id:"example-of-3-operations-leading-to-state-changes"}},"Example of 3), operations leading to state changes:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The user selects a subtitles track to be displayed."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The user changes the playback position (seeks) through the timeline control"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"A site-wide volume setting mutes the audio of the playback")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"the-multi-faceted-and-complex-task-of-rendering-and-playing-a-video-stream"}},"The multi-faceted and complex task of rendering and playing a video stream"),o.a.createElement(r.MDXTag,{name:"p",components:t},"When inserting a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<video>")," element to a web page, today's browsers with some exceptions are only capable of playing a video file provided from a URL specified in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src")," attribute. The browsers don't handle the following concerns: Adaptive streaming achieving continuous playback adapting to varying bandwidth conditions. Live streaming with or without timeshifting, DRM (a concern only for premium content providers), multiple audio tracks, multiple subtitles formats."),o.a.createElement(r.MDXTag,{name:"p",components:t},"For fulfilling these requirements, there are advanced streaming technologies, and for the browser, there are Javascript libraries that make the browser capable of playing streams with the advanced features. Examples are HLS.js, Dash.js, and Shaka Player."),o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"the-main-pattern-and-principles-for-replay"}},"The main pattern and principles for Replay"),o.a.createElement(r.MDXTag,{name:"p",components:t},"A Replay player contains components with three main roles: 1) Player UI components (controls and player containment), 2) a video streamer component rendering/playing the video, abstracting technological or platform concerns, and 3) a player controller hub component connecting the video streamer with the player UI, plus managing it all."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"consistently-exposing-and-dealing-with-the-state"}},"Consistently exposing and dealing with the state"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The core principle of Replay is distilling the different state properties related to the video playback, and expose it to the full player UI element tree. At the same time, all controls and components can invoke actions manipulating some of the properties of playback. All this with as little boilerplate code, like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ref"),"-plumbing or ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://blog.kentcdodds.com/prop-drilling-bb62e02cb691"}},"prop-drilling"),", as possible."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"discarded-implementation-alternatives"}},"Discarded implementation alternatives"),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"the-familiar-react-pattern"}},"The familiar React pattern"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Passing down state across components, and invoking actions manipulating the state, is a well-known and central React pattern, and often implemented with Redux. Could playback state like play/pause mode, duration, available subtitle tracks, etc. be transferred and exposed in a Redux state slice? Could manipulating the player be Flux actions, setting volume, seeking, toggling pause?"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Certainly, but it is not a good fit: A video player is most often only an autonomous component in a page or single-page-app, and the Redux state contains a lot of unrelated information most often concerning the full app state and data presented to the user or supplied by the user. This is similar to e.g. a complex form component like a combo-box. The expanded/collapsed state and filtering dropdown items based on entered characters, are examples of data that are not wise to manage in Redux and with Flux actions."),o.a.createElement(r.MDXTag,{name:"p",components:t},'Further, Redux state works best with "singletons" in a page. Contrary, quite common use-cases for a video player component could imply inserting more than instance in a page, and the state should not be mixed between them.'),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"just-passing-props-and-callbacks"}},"Just passing props and callbacks?"),o.a.createElement(r.MDXTag,{name:"p",components:t},'For simple/flat player UI trees this could be useful. Still the state and playback API needs to be "lifted up" from the video streamer component so it can be exposed downwards to player UI components, and significant amounts of "plumbing" is needed. Besides, it is hard to design this with optimal performance in mind. Every time the playback position is updated, the prop set is changed, and from the top of the player UI tree, a rerender will be required down to the components actually consuming the playback position. This does have a performance impact.'),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"the-player-controller-and-its-nice-react-fit"}},"The player controller and its nice React fit"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The Context API, introduced with React 16.3, is on the other hand a good fit. It makes it easy to share and scope state in a branch/part of the rendered React element tree. Any player instance will keep data private between instances, other parts of the React app don't need to deal with playback state (unless it is desired). The player becomes an isolated component abstracting its inner concerns."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Any components within the player subtree dependent on playback state and/or controlling the playback can consume a React player context. The hub component providing the context is the player controller. As the video rendering component is also located somewhere deep down in the player UI component tree, the player controller also uses the context to pass down the video streamer element to its desired UI tree location."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Further, using the context means not passing down playback state props through the player UI render tree to components consuming them. This eliminates the full subtree rerender requirement. Each component individually can subscribe to specific props and only get updated when those props update."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The player controller hosts the player UI and the video streamer, and also manages configuration."))}}])&&l(n.prototype,a),i&&l(n,i),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-architecture-background.912fc1973fd901984c48.js.map