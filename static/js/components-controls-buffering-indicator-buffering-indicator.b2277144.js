(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/replay/components/common.js":function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return o}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"h",function(){return p}),n.d(t,"i",function(){return g}),n.d(t,"j",function(){return m}),n.d(t,"c",function(){return h}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return w});var o="replay-";function a(e){for(var t=null==e?"":e,n=[],r=0;r<(arguments.length<=1?0:arguments.length-1);r++)(r+1<1||arguments.length<=r+1?void 0:arguments[r+1])&&n.push(t+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return n.join(" ")}var i=function(e){return e};function s(e){var t=e.classes,n=e.selectClasses,o=e.classNames,s=e.classNamePrefix;if(t&&n){var c=n(t);return Array.isArray(c)?c.filter(i).join(" "):c}if(o)return a.apply(void 0,[s].concat(r(o)))}function c(e,t){var n,r=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-r.left,r.width)),y:Math.max(0,Math.min(n.pageY-r.top,r.height)),width:r.width,height:r.height}}function l(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var p=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},A=function(e){return null!=e&&e.constructor==={}.constructor},g=function(e,t){if(e===t)return!0;if(A(e)&&A(t)){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(function(n){return p(e[n],t[n])}).length>0)&&0===r.filter(function(n){return p(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var o=e.length;o--;)if(e[o]!==t[o])return!1;return!0}return!1};function u(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){A(n[e])?t[e]=u(n[e]):t[e]=n[e]}),t}function m(e,t){var n=u(e);if(t){var r=t;Object.getOwnPropertyNames(r).forEach(function(e){A(r[e])?A(n[e])?n[e]=m(n[e],r[e]):n[e]=u(r[e]):n[e]=r[e]})}return n}var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t)},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);var o=Math.floor(n/86400),a=86400*o,i=Math.floor((n-a)/3600),s=a+3600*i,c=Math.floor((n-s)/60),l=n-s-60*c;return r+f(o,".",!0,!1)+f(i,":",0===o)+f(c,":",!1)+f(l)},d=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,r=0,o=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,o=t?e.getSeconds():0),f(n,":",!1)+f(r,":",!1)+f(o)},w=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/BufferingIndicator/BufferingIndicator.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js"),a="buffering-indicator",i=function(e){var t=e.children,n=e.content,i=e.isBuffering,s=e.isSeeking,c=e.playState,l=e.renderStrategy,p=void 0===l?"when-buffering":l,A=e.label,g=e.classNamePrefix,u=void 0===g?o.a:g,m=i||s||"starting"===c||"buffering"===c||"seeking"===c;return"always"===p?m?r.createElement("div",{title:A,className:Object(o.k)(u,a,"buffering")},t||n):r.createElement("div",{className:Object(o.k)(u,a)},t||n):m?r.createElement("div",{title:A,className:Object(o.k)(u,a,"buffering")},t||n):null};i.streamStateKeysForObservation=["isBuffering","isSeeking","playState"],t.a=i,i.__docgenInfo={description:"",methods:[],displayName:"BufferingIndicator",props:{renderStrategy:{defaultValue:{value:"'when-buffering'",computed:!1},required:!1,flowType:{name:"union",raw:"'when-buffering' | 'always'",elements:[{name:"literal",value:"'when-buffering'"},{name:"literal",value:"'always'"}]},description:"When set to 'always', the content is always rendered, but buffering is indicated through a class name on the component's root element. This option is used when controlling display through CSS."},classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},isBuffering:{required:!1,flowType:{name:"boolean"},description:"\u21d8\ufe0e If true, the buffering indicator is shown or the root element has a class name indicating buffering."},isSeeking:{required:!1,flowType:{name:"boolean"},description:"\u21d8\ufe0e If true, the buffering indicator is shown or the root element has a class name indicating buffering."},playState:{required:!1,flowType:{name:"PlayState"},description:"\u21d8\ufe0e If set to 'starting', 'buffering', or 'seeking', the buffering indicator is shown or the root element has a class name indicating buffering."},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The content to show if buffering, or always if renderingStrategy is 'always'."},content:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Alternative to specifying children. Other Replay controls use content as the convention."}}}},"./src/replay/components/controls/BufferingIndicator/BufferingIndicator.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=(n("./src/replay/replay-default.css"),n("./src/replay/docs/mdx-helpers/SimpleTable.js")),s=n("./node_modules/docz/dist/index.m.js"),c=n("./src/replay/components/controls/BufferingIndicator/BufferingIndicator.js"),l=n("./src/replay/default-player/default-skin/LoadingAnimation.js"),p=n("./src/replay/docs/props-footnote.md");function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==A(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,f(t).call(this,e))).layout=null,n}var n,r,A;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=g(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"bufferingindicator-component"}},"BufferingIndicator component"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Displays any overlay (animation, graphics, etc.) when a buffering, starting, or seeking state is reported."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The main concept of this component is to display and animate an overlay when the user needs to wait for playback to start or resume (buffering)."),o.a.createElement(a.MDXTag,{name:"p",components:t},"The overlay is specified as the component's child, or in the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content")," prop."),o.a.createElement(a.MDXTag,{name:"p",components:t},"If the prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"renderStrategy")," is set to ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'always'"),', the content will always be rendered. However, the class name "buffering" (with prefix) will be added to the compoent\'s root element when the state is buffering.'),o.a.createElement(a.MDXTag,{name:"p",components:t},"If the prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"renderStrategy")," is set to ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'when-buffering'"),", no content will be rendered when not buffering. The drawback of this approach is that the indicator will stop displaying abruptly, and a smooth fade-out animation cannot be applied. "),o.a.createElement(a.MDXTag,{name:"p",components:t},"The state of buffering is set when one or both of the props ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isBuffering")," or ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isSeeking")," are set to true, or if the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"playState")," prop is set to ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'starting'"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'buffering'"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'seeking'"),"."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),o.a.createElement(s.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZ2k9OABHISQunJVwAUQqBkKtGAwDCKACA-OA4H9AV7SmZwiNgSxXA8WA3RNaDJFg-DUOQ6RTjgSQiHQLALU2KA4TY0i_woqiYEIyD2BvUIwDADICgaDBYmiYUaLlOiGIQmAkIBT4NxoNjdDRSgoDYiSpJk2c5JYOIIgESQTOkmcUgshTrNE4j2AAGUoTsCgAQVQAVogGcxjRUmC4PUzTpEw7DLU0jIoqw0IcItOBtjQSRPO82c_ICntUFcjV2AAMRfH5aGUj16PCpiAUPNiB0oO4LTAUqRH_DiCodIMpQqhVzXaO1CuAdhNB8eReoAARgIgRCCwFhRE8FUF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ3OgAWW72AANlu-71hamgip9aBEnO_hnEORFHUwdgAAUhH4JYZp-OAnsRP6awBghSPWy52AARjeh75CWlaph8uY9vYSNhvIGwoHQcN2HkTk9rEamYxkdhUR2mBuGAQ9Nu27F5G3WtgDp6BGeCAAyGXxkSeZKGaSWGaZ7gNflMBQmWvL2nYAB-DYpfDSNWauVXpdQEmaykGRq3fMxYUKzBEpw6nWe4dno1timVxrRNutworMhSa8CDF2s6xkVco552B-cOgOo9rDxJW2FIhB19BHCgYVzsz5CMZTlPNggFJCHO_GLou36HpLqOhXyPLzq6NCYlYET64b-QbZLyOU8YOyzMc-SrOFWOU6nDItsyWgUkSPgQHiEZkLgfhJ6j2xh4c_msKMmA-4bixbGcII0tnPf4jgQ_N9rTStqyJfUVcEUCg35Oo4HkvGEyl6UhylEPK7Atx3ykDvWSY9FICG_nWXcshVxSCDjgEOrgw76DFlIP2DszDfhAGpGqEU0KJAwm7XCZwtAUBAvoBgFhjAmAYYwphzCWGsL5OYYw7BtTwHLqgeiF8QgpBRjEcgRYujc2FvAdgvIzD0NYfIhRLD2FmAmkRQq7RtLUH0PVYh8VYa6IEAAVQaI4Ggrg0B6IMcY0xBBzEugEHhAiqpUCqLEhop0WjdJPHSP0eCZ9YBSmFJIfxWxrKOP9K4ty7iMzaO8fY2IwSoBcHis4JJ05wnOMieozRmYCBsTSPE-CEkbjUFsuECIqAMlLSyQ6aJOk8nzRoEIIykgABqhlQjHjaR048VSXFqNqTk2J-lmlsRsaMm8r9JDjMMnASZDiKERIGVBIZXiRmzMkJYAUC4LFyRagIIBc0tnHiSS6PZwpDnUD6TUlZHjcl6RAqMyQ-jkJpx2PqagLwgkvMSG87YHz_JhMWZk5Z8pVkNLijZVpyTKCzwlMeKFMK4U-gyH09YcjFEmHYSAowXDopJSmKlNA0j2EYsxco_pbjXYxQtJChKNKiV8NUNgPpeCCEaWISxM47FOLcQXHxYJZEYBCVgABShwE9BgRAI8dgE0wB5xGINB0uL_DsCDr1M0SpnFmG2vMOGg47D7SThYIQIw4AGyuD5AQmREiMGGgAbVRA5AAulcJ1BRmbVnkNq5a1BVq2OEltXmhqDrrCel2AoVwLrdwDbAdyyF9jnTCBEYu7BqjOD8CcEY50rq5oJp9AAxPYc82o3ranPKmrwAhpzODRpG9g0b1hVunLnfO8pC6JErcKFthk0J3Dxu4hIswb5durTPSR50bBdjoKO6copvJ5HenXZkncBDytGAATUnVwTA-Vu5YxxgOwmy6axUDzuWeUBb8bJnxl9fGRVU24nQBMKuNcACkqaWCo2IedWNi1rY-rJgSCU6Ag27SNesM9bb2gFoAOzagABwAE4kP2ErenTObQMDnQLeec8RV70AFZU20CwAQHySShHnVgGAV8-6QKHqrh9O63dm0zzra9BtrHu0ZFzn2m-50z38f_d60mfqphojA1IiDNYeMCFrZKetjaaxsYEHx4dA6hMaYGgBsTqB_WgckSG41_Znr1vaAAJlrix9Yq6RHxAo7w39jUdOiYDL6_TEn0DNniLEKTxn1g4CCwQQzwb6M0Ck-dF4vnyCpsaop7aUacCEbMG5swQGQuOBcEZqmJmgs4BC_58LBAgZEBBmDEAEM-hQyy90eGlBEbI0oKjSUXd1gjBsLQBTiJzo_BGJkGYrnAPiZCHMJI_mqb6VdF7UNNYIDNEjFNrMGt9rtDfLNqOXQCB9HMCFnzSTyD-ecRYcaC4b4bdrFtnb4wc7FiO-sG2aWPOrX2UAmx02iySqmDNkz83qZLe-5rNbrMTMmrHNd9oPwXT-hOzCA-F2wfbYEOYAHx3mapeG559gAlyTCsotRfaNNJyjDsPIK49W7ie3ZiZoD2wYCJEmed_apq7BGxZzgKIMxIymrZtTXUHh1ChJwKweIjI4Dc9GJyK4yJOQAUoGgJ8Fo3yy_UPL1Aiv1vnRh5wBbLP2By2J2anAsBZwTBB6uIDmxOwZBDfzwXUocB08SOLln9qLrOs_KuK7yOOafzrH-iRvN-Z_v86LMBEwQOB4TsACPnZQ-wKjowNEUe-Yx_k0ZsPfuS7ACt9OOAHPZiRlzxkXnPtj4_0LE7_m7Ri8CCV-wAA1L4EDGRxrx1T4VjPCfy855bwII-5faxSAmN3qOnJOQD4bsPmBYDJCx_QN3pPXh0CJFHwddnnPIwS5GEsCAVPfeD8TMnqvwAneM-6E39oFpTX16bxANvkjg_p-DZnw_4tIx26FyLqAYvt9S5CKgIkLLpvpGN_oyEsOoPvmXm_kPiFuwCfmfpSI3vKBaIiAkLfpwMgVfvrE3uoA_kHsALMOSIkP5qAaLjABPmvsfMAK9tEO9jQGQT_hQZPm_sPgvnfCXOPiwVPnPjPlnrWFwbPgQMvqvpPMPvjjAAPJ7jWI9j6s7A6NSgStjkKiKjAM4mytVBysxOCg8k0hshAuZFAtZGUqZA5E5OPA4oBNoADoYJILKuuoqv5GJCqnYOqiFKaFqJ1FMMNIoThPYGhPhAAHIorwyYQQBYBkhdCQBYD-H-BwDBHHik69RBaSApGfDIxeEKx6rDQ_KPzlTjTuHQSegpF0rQqYCwpojwrxS6rwCZE1EHSOhEDIwU5JGFEpFpGRAZHOKgr1HDT843wCB_CzgzJQB5GxAtHMzJHFGeh0o_K8aPK9rxQjGwBqbUJkb-g6qKx1YGpUzpjNE7Hywmb0LsCAAbhIAHB_jQzQaI4BwGaakk9kHqqgzkSktg3MwwIw5gSkEexOIgcO00rofgdgrgPQARdgqAKKnARhHqHg9xI89QMic2cysJDkFqaawgFIqA3cxx5xlx4w6IMASw3xMJphjxRhLxRI7xnxRw3xQgvxC4_xWYgJIQIJcR7A4Jx4kJlkgUs4dxJJs48J2KnAcAZ8MAF8KQqJXghkEomJ6KJgpxFxkIN8EmI47QL8b8s4908oxJDxGpSwSkqp58BQmpRJyJpJXJ1kQpbxowVJtxtJUw9J4c0wQJLJ-EbJEJTxVk0Jpp_JJKYaxCeRMAqJuRtitAWJcp1g3QAOw4VpYwf22pI8epRwK8a8Ouk4dA04BQs8WQC8lp7QyZzu0Evpp69MVsqJyCgRxYYZuKFGtAyOgUnc0ZqMWw82iQHqls4Y9QuoEeRw4omkn2BkRkuQ52UZqq3xugncNAQUApkG1CNAZZWoOAFZmAVZ7AAA6psOYEqdGXmVAKvAWYSZsP2a6K8fmXYNPF0IsHcVMPGQ5JaR6VkDkBMFnBXMyeQKCW6RySyGOXcvoKqT8faVeCeFYISHsDMMAq8XkHmB1sEOsgkB6l-n2U-W0C-fYM4M4NOTWOeVmfPIkKie0NBagBaDeUaewAAD7yinlDZ6arRvlxEJHdCrbEWzgWj3kuTOJAa2A-RShsAwCxFBEQmMXekpAbE0BbHiRCXmHQKWBiX7TIIBnYhwBFQ6zcW9hQDrieIECMAtHszyz9EZBDEpAjFjHkAtGY6rQGGjzmltoWWSXWTSV6qE404lnhjdwA7dzbxCXuXCmGmzjdwPwhkEnrBYVojZnJCrYEVEVCWppoSBBQCuWgn0WhHRFUy-EEB8XxEhFRHhGpbk4Gr7404jacXcUNl8DJweV8lzikXkWnw-WVXkX-VZB7RA5qkxAalkX1X-kBVNWCUVX6xVX9idWNUrbyg3yilGlo5_bc7pnjpzwwA5nDU7l7kETm5lULZFUdwUEI6Xbg4-7QE_xcwxAEDR4xULjjS0X8XHj8wDhhExEJUori7nUZXHhJXhFLCPX0W75wBcUbXpX0WUEcEHTtnBD9UA7cE7j2yTzSFRynbw6g7bVI7mCxgcDvUopXVZW3V0X3WLZ3XPXo1vU43MFiASzOXA3kWg12xxho4nYPZw7nZw2TXrU8UrUlze7mB7WDwHUvDHWUSnUulPWp7XXRG_VY0o2403X42Y3HifXfU8XC3Hj_X8EWDE0myk1Hk0Bg1wIQ1-5Q21gw102Tys1slJRQBU3o4yEY5LQ2VkkOJOrwoBkADS9OilwoelgxgULI-09q7Q5VOpwlSw3t3lY1up8oDVtA7QzqchWAbkqV4lFVtlwo6hSg-CmhkUqVtKBi9KBKKUF8GUXk_8gC7tlSVhVCX2DAoKLhaqWoGqnhZlUwf8vkThhdVMZspeMYcArAc4T6EwS81cF0b6_Aze5chAPd76A9fwMAIwN43gS8eayYCG10CGA9TqlAdOS8vQ1q-graAg4giCc4kACQS8UOTIIARo0AUAooSUfM_AMAE5Tg6AO9fujAc4IV-mr2S8L9cA7cMAkY-MBM3IJ9y9dOq5XA3d_AFmD9x8jA5AEAcE1EgDV9OgfQ4YaVhkE8ADBkdOuoda20M9yWA95AWAPdi9J95Ai8_A-MxDk4RDA9oC_B9Y0Q-IotCD7guU2QA9PA_A-oyYX0BMCG5AF0FoSGOASGb0FoCGOAF0X0FoFD0jCGsjNDsCUgKQA8SjmC9EHdDskd0d-K7s9d2UjdeUidyg7KqdrEkgDUTULUIgZU7U6AQENh4EExx0dOOQBY-IJxIQ4ioQMw6AD5-YeItxfw5REiZoCKf5jqXVFjGQ20zqkY6k9kCIMAkglAHgAxIuwkKUlRPomTWQrMfgBltxFQHJ7JBJ-YG5n2LoUoeYHgyQ3x9qpQ1AlTKDehUAZsxQ7AAAErqPYLE5IK_JLLQFKH0Ek7oE09kKgQsUZAWqM6EgUBaBHhMy03ALLsBd0GccUEqRTtExAPAG06sAkH8v2IOJac41BQE2cYAOuEaaWwYQ52E4rxMzVTOQ-yGw7gp0z9h5mkhzL8tA9QHy4iaALUkJtx_TnWoSwzxw8A5A_QYFQUewzQ9qBAIwlAFoe5xw0QwJDhvToLLw4LXQyTq649IwBar8LOFolQRF3g8AsuuCSdJjnKOh80TRVyxdEqoEBg4EjwcqCqS09R6V0mDRETLqVwBs7qPJT28hEmYlex1AAA4j4uMTsTJhYI9fAKiQbPy3APFZLTAC9VgKiWKykNqxdYGW6miO_Lpu5pK1kd0DK6gBMcq3zYlejQa-a75esCdVAK6w5BbVa1HYVPUQ-FTIa2RUbUQIEAID6ny8INWmgFkMZuwFgFcKgJ0hG0sKDGG2m_48-ngMm6mxkEsGXBXAQHm-GyXhK_6w6EBqlXLbq-jVTAqJpErlo4VNrLrHC4LeEbW-Lp20m4bIa0sPliU_cOwFajaowKK268o__iGwVVjsSC8BALjOgHq1TL201UbQkIbPKPrFcL22jkBkw2O8hFTPahHf9EpJGLAOOFTBdMqJgYwB-fAMbnQCkBMPexAA3g3szbWDKueK_EkKBTEGVhUC3MVEpHnI1CcwtDCKZMVd0BMO4OwJzpIPvbWflquJNcO_ahAB7ltSqwTce4kDgDMHkHgJGAuzEMu6u03th7hzrdTebZhTtSjoR9ashHLgrvrG-M4jbLIkYNa22ypeYDCVLN25GJBdwmQnLfWgbJKRiZETdSKwO-wEO_dZaux7apOw5GIDO1OxdobZJzo2lTjR6kbL2-J724O0FsO-bE-3AG7s6u1Tu7xwieloVXAFJxYjkPtLi3KDNn5y2w6EJ8AngIkIzFkOJzTqCfAN3DfAEiZ3EbF5BgTVqylzq3qzlRdqqyOxqzF2lzWPF6Epq1cJq7ztpx6uRQbERxO4a2IMa_zeahp-OxV7OPV-lya3q96xayzMp_p79gtjl_rvLEV1KJqz-yqyNqN7QDnPl8G_SWN_l9jUl8s6bZNURzgJxZpxRwtzN-NxN_DddtN9kJqzgGh1GLYF5y6OgCrmrk-PKAx5MWdt0HDYjkd7tyd_l6bUfHrd0JNUw8s1tYbRZ6l8t513jap0FgDzrY9ktIJ8pcAmeFPdnAUOeBOSg92nG7QOLjfSWwAYkEsA6foKiR05YPqO5JeAyQQP_o4Jj-CdjxdjKtqPNpAL0O7BEEWDDBMK8W4yE7EFKzMKScyQAFLOAWiNTAd9h7n1BbSxBinRnIhGhfGHk30ngzlY7Wjig9SE5E9Zj9W48fBIP6AUQnRjiy5I9Yb_z-E7M0Ba8EBmxo7XswhkaZBPNo_6ATULYG8RChB0xSIG7e9tB-_54m5vv4jswXQHfYAhVu_o9UyB---bAOfu5o6_epmRgG90xvPZCWBB9J_DcwisDkJ-Czg595_Puh-FgR9R8u_mjZDu_LaF_F_Z_oC5-J_wCOep-00verjR-u8zcN_fZN-p9BUsdbV9v6gMMF5YCRjRrsCT8TAc4K5991_oCD8kdoIwAAAa7AFoa0RAdvL7tGSwmvQuXdeA4-3cFgGbC_eA0_s_Swt_S_6uK_sfJ4T0aQG6u_-_h_EQMwJ_kQQ_kW0ICX9Vw5_K4Kfwdzn8r-g9YthAMAFC5gBogGQrxzh6VtpQCPOFmeEdq_IvI1aDNBqF6AEAbwecHYFGCdxwBc-N4GACQNOAuNmuyERgHV3_w4CvAr8NfnHxmysB5cOQEzIbUjBO42B1aQflcFYF4COB-gfKphwWwUCqBNA0gS4024RgsAuoMAAIPpxCCJBNAR3PTlZhiB9okffDvAQ0HiD1-11dHlJxigO9J4gg0wejxwCohGoFONBIXWsHJwfuqAv1m5A4qecWeFwRvpGFcDS5ACSwDwMEKAK84Bu1MYEsNQ8AHdDa-8G-CPzmwLZgSaAF-MtBgDKwuEjVA3B4EhIZDEQ2Q7ULkPliuBTwY4Y5N_U9iax3gZ4KoWbHiFj9EhahB7KPwRrsAAAhJGECL5sHEtgYIoEUCGswDcvQstv0IypDC4h0hCtt4I86f5te1MFJuoBFbAAWYvOZYV0P2gpst2BuZYR8HEzohAkRwYamsIOGeYjh1kILlMB8EZp4gCqc8AAEdQgfYQnEEPx6hDwh_-eTtKUiHrBJqMQ2oU0I6HXFWhMhbvun1sALD7ergEYfLChEC5QkkYaYVtVpxO0fIVMaEToOdzDDTaaI53DeExGIiHcFA5EY90moUCfIL7U3PiE6GawKBN4akWHwO5vcfcLQ77hbhGwsBTC-gHyI4B1hD9KRZ3aALWXUFhV2Yl3Pwcg0CH2onczqUIbKPpwe5ZclfPAGtwWzciEmNAPkVhimDV8jBCQ6-GCOhpe4x-DI4UThHIH05eckonkQwQ8CKjEg8okII6OVFMjCww1O9jTWe7p8NuW3G1MMIL5-ivq23OIQX3KGqjuqaad0Rfy2ovMr2Y4TAvtAjGvt32nAC0BaHvYsj0-rgHDk5zpH7QHR9HNMh0PZGrhJ8htUEV3x9Fw0ZUFZTgLunsxQAYQzw3zNtFNGlijRyQ2Ya20wEshMAGkfwlokjDLDVhvXA6ONCiEjiBcG7HYVAGBHXY1h1Y2GpyKxxvktEuWNzFHCAzChy4cbZsftGWGm0sRpI5YbLn2T_s6YYov4X7gZpwBoRI4_oKdHiCujx8RggjloldEpUggMwIcS6EfF7jwSUAV8abVhw1i7464l0F-MPFPj9xro0CWbWhqPdDakE40WbT44uh0BRoPsZ8VXT9BMAyIykGOL1J4TkkuXNYf_mhHZcRsVAGYGFUhaDi84_4tODfB1qTVfgGQfCdS1REjZo-dAfINQCuBrCqYHE61GRPvYyoCBSUHIIEFyCoBKm8ACoAIESCdDVwWIs8LqA-JbMRQiQeiuLgz5kZ-JQUISSzHPHChLx5HJ3DeJLh3iHxfE_TEFFfHZiT4a1e8cSPt60TEgTk98bWE8nQS9gpEgiX5LlGE9DJDk6gCBLvhp9XuKcYKUqO_GMThx9kgSagEin8FuC0UiCY1C8lyj4-YUlKfBMniT4WYyQ1kSjmymeCnYWEoDLQQIBVD1KuSZuv8L0BpAL0KbcYXFw0ivxoEZrW8qtlTTTQwK94MAAAC0MglAK4D8KQ77QWhflTsJNPRK_D9ooIswFIOY4dDBp20JoGNKEAF80A88EvJ6O3ZrZ2AVwfaXNRLyPtq4BfcNNu2KAXQAAJMAHOmtT5AT0m-E9DnjCh5A7TK4MUCekvTW870rqV9P7zFBeO1wz7C9guTRAqhzdG-LoHQAjt2pWbF0CkHrIwBJ-AgbYL1I9SrYlca0iwE7yzgRgfO8_KfiTMfAIzqASMnWk7zQBvlQgmAdAIETmoYysZuwfqZ72pg1Fsh1MjAHYALHygUZGQPqtVUmE7dEZgPfqvzKRlRi9kaAF4BELhqUy8wBg5cXc11yW88wj7QwSrO1lkzr8BstbstB_zMzWZ6MjahzKphoz2Zr8bYKVKhlTBfGzuKmE_3XTCgJc2cPMHYQQxfQ3oNcHWtWzXhyQz4UslKimVxR-yA5Xo09CNmGB9AQ07syDgIC3yqycge_F2XAFDlbAaZgPOwtw0DkHt45hwL6hgBKHO4c54c_aFnKrl5zkCCcgQHYFxSFzY5k3LHGVhTYM99oycmNmnINnf9G5Zc9ABXOzmoAw5ec1mHYS-iR9i587LYCGnTmDzS5fkEeSHPHm5yBZ3_TueECkS4oZ5aOfgZh1NlMzsgFsu2djMbyrhap9Un8gwSzn-0cAxpfEksBaGswG818mGXVO2QNT9AReUuf7UQCaks5UYwwR_OTg3yf5d8-3jvOx6ALNSb8q-RAq_m3yYkDBBGcs3WAzDIZNUr-UOJ2BwzCcvjWgCKxKG0BCZTsoUq0l8xrzyoNcxqukNsSZDihpQroQMNcBDDiF_4eodskaGO9ExQ829vwpbBoBd5IaNuewCd6yzxF3MyMLYGoVpIyF3QA3Fwq2Gbt5xW1SSWfWSBkxLhSvI4A4XUUbAtg2wHAKuEEW-c4ACirgEou3ZcKKhBADpqXJbpRpTasCgVvIpoW2KjY9is8PqFEXY8XFDaU2tIqpieLFFjVHxVkAcUTyBZQSiRUfCPnIKDksMqBWgvt5Dz4Fr8o0e_P0VAJUF9SSMO4q1byggF2Sg-LksgXHhf56CzebTKwUQy0BcwrHGeDki1lv8F9eSYdOpjHgJgTgK4C3S4E8Dd8egN2qMTqXIy-hFC-maMu_wNBtQIrNpfpXiDzKbZxtQ-WPzhotUBlFCreAtk6HnSxl8y5yZCXaUrLtQ83AgEsrGVFKxwwwS8ocu_yxK5ZuKXurPKKnliYBjgmYDsuskpwGasy85ScrfISgBA1y7_HIsBVQBjlCEk-FCtWXbD1lHy9wQ9kaWoANCjELQlpGgU6JkI8UMolkORQIo58WxfPKywcbSo7C3LUYEtBlT2UpELzH5t0BSZpNC6S0HomJWGh2t5WhSFoksDtYTECi7oIoqkU9DpFqAIla1vUWDJDV5QcbeDn1RGq2J1SwlUNu0E0gkVyK6q25tkEVUGkg6qqrVUxWErOIpVYlH5B8hhirYaZ00SoHqqSSdx7VPFdAKwAECSqsJ9Rc8NamFC1Y9o6wLVc4EsCihzwPkfUAAH1zwooUULqFFBhrLA54ewB00CK6h3IuoWVhujDWGJAizgQxLDFhgxr412oHTBYADVBqQ14ayNdGtjV6hVygRVNT5CLX-r5Qga4NaGojVRqY1Ya8tPYF1Dlpi1aqlteWvbVVqu1oocNbqEMSWBYYk6sNTeFTX2B7aJaftaWtbUVqO11asdWGvsDuQGg54QIpYEzWBEfIrSHyA0Hcg-Q51FaJte0EHVtrK1Ma91W5HqJnxV0SshtkVB8iWAfI7kPVauR8iihAiDQQIrKz1VAaiouoR9YVEepwxiEfyL1UICOD2S5Z8GpSHOydS-9rIi2YsFcBQ2rFly4wLYHgB-B5wF4uM3ysh0Umb9uu5Gm-K-sSzY5Ve_QbaO-s_XfrNScASGDAFw2okZcW1BkHCFuX4RN-j3bnvniBCTZiwptUTQ4MY1vr9otGmSNtCk2EgCshG4jZQHmoEa6Y6mheMptsAODONuG4NoZu9WRs2hcczADhtM21Y0cCmpjRmxfWKbEgaOQZkRtQaka-es4WzSZoQ3hDKpmEp9WJR8gi5oAEhSwK705kXYL46AajUaw9Y80vWZGuLTWDQizgXhaQWLd3F3GnQ8K-QTABaDzjW50AeqtAJk1CapouAsW0NiLO3qWsqpgWvVASoqKhMAyuWf4XAFhg6qYtC0qUu4C8oWUJSi0vre1pFJilBtvWmUo9GayLtqAqJGrd3HQB9BC6c2vod3Eogcaf8tAWGNNryioklFa21Jh0i6zKqCA225uEFD21ZAvKPkAgO5B4rnh0AGWnrQpz9LIQAyQZQaqGVe2JBLVprGDchF-3dxuBP-Y8Cto6ntb9Qu87rWiQm1eVYYEAGYMFvMQxVYA42l7YiXh2I74OaO6UtdpgY_IkdoW4SDjuG2IkfI-O4hDLU7gk7JtFgG8tkB8i54wdabSDEb1vAvBZqzOgtk2g51ZAio4RdVvNp50hVaA9gWYILtW3C7ZqTXUdpp0YA1b2up6NnXVOj7hb046rQnSjuFQRaY0quiLTLpq6a6wtEWxXSq2V0-QmZAwNXTsA10hatd1u7YGtst2UAHdBuuXUbuEgO7TdMIUzTxsAK-t6tAbMSk1qJUO0naVMB6TgLgCMAQ9WTIgAGTECmqPVwepFHHoDIKKxcEejPfABj2p6WtAVRPbSrsL0q7AkFHIMSiVIB4LG-eJpUHr1RVY4I2u9OG1sK5wQkt3cT1plvWDRau9KWt5ulr-0Dt1e7Lelb3rN1qsGBtqYaNsszYFsYQ2GWfQIDeqzk8eIbTPD2IdD1EgYFO5COKGeHwASsX8htq9mIWuA9VHgONspPP2Uh_ZkGzfUFpdXuBEQK7WDenAb1QxHWttH0IYgEBQB29w-43lsTH2SLYg_EmAD_sS2ebktFgRmEQFH3_7CuJ2s7TNtQBc6l97Wu7dTue2471gpGOqfrtRI1d39TenYN7t6WdgMWfugnh61AP6YYAXFZ4bYBQPcJbE0AGXXDQOxgG99YuRxX3nYPsAhWBQV1FAeZgwCsIO-xIPYG2as8sgEB4AxYCfQ30LEZ8QYqAakNvwZDtAOQwgajjiGBAPybgwfpKgpKCAqJbffoeISGHUQxhoBDAIBwPhzwtfKUAvzpjzkUgjhmYKGyH3Jx7D0Ow1uZo30C86sr-nYMQeDb6dyKPkR_ZkJf2vI39nGn1JwhL36LuYY4KvTsTc4Ba693QOSIu3iA_I_kDrC7LYEh0zcadQOnpH9qF0Y6ut5RqXZF3F2lsWdKmXnbQH536smjJeLVVEDuhqrO5VFLwdkf-2_J04RR3IzEHyMhHtgExQ4mGh20XbOj6Bsnbdvu2Pa_toIuHQjqp1_apptOoUuTosPIQTeZ4eHWQIEDQp8gxOq4BsfWDHdW-eu9XSKw93kQddtxj7ugAt0sAXdEWwg3buN3pwA9WR-_Y1rz1VEBA-oO5U4ACyFcxw2kmIPAHJxTGHW7MbgVwBjQ2Bq0nWnSXMQvTIhATZqkE-USJUZAijAqg4ozzsK6BIAKQJbbtpFax7Qm8xVANSdpNBQ4unG9VgUfiPVZAqNYPA67o11y7iDXuhrvRWAOKyJjUALkzsBaKolxjEASY3EZlMGostqAIMCvlRIMmwTEJvpXLKGVonmQ48tPQFXsAl8nt7ALUz6Fa36nFghp-rJnEUmokicqvGgEluZj75UTtp2TPaymPcbETSp7YEZptP4nk9hJwlXHqZMsm54cLR1pwboMMHQgTBuk4bDhqKGhieMGKWkzUPSHnI4B3_eq28Mlw3G9gC8voAVNGR1Wuxz5dfPMSHGM2mZ_StmY0O5ntD_bKdjAIUN4gSz2QMs9fErNDa9jm2GAPvusNfz1W5hgw8OZ4M2HogHZtWlcrX5OGCALhvAOq0jDih3DUdLw1O3fDQ0YBmkdU_WcnjFnSzk5PsyKyrMoqZC3cKIP5GkiogrDeSdVqma7OnnJTMuuTgOYewd6NN7kVXpAfaDJrAiFaNVfetFC_r_1gG4DaBsCLga9V5aG8IYhA0LbjOkyDAOfwl3g7T0QgfCLqFgmoG-uDkPysQjHmnI_tn52HTQc7gPa0gWMnLSK2qMWAnokFQxD4yyDgr4gmFiNiGYa3dBLTCKBoL6BaKMBLAVwfi5GfLisnqA7MfaOJf0MHF1g3KhViZXJNw0qTkl6M7NpFaWBUVtLYxinQZY4rzGGdHE8sSWKTMVi72MjGKnsYr7bC9hHlk4TcgV03CwqzVK-G6JiReiwxwoyqYtOgmrTAVJYPxbD2uyhVtEFInJZJXzAnEte4E90FdqdwxdBzZvY5QEMhWAqUe4Q4r3WE2mk9vF9gIlcxmQmyZkYDK1kCj1LAiryVqAH8g9M8D8rQxwxD8FSb6VirupokWk3av3LGr8VxoPpnmDOGSrzdffOVdoC9WgjDG07YOG2bwAdT9yqmNKemNKsUTDVuK5NdD2ZWnaxhxK03X2g1cxrMAKPYXqBOTXErBQIyiGUVaNRoTFgL_fHq2vO4drrVt2smc2sVXtrLtF6yLjyg8WhjZlgQBTAgAt67rsJma2_ARNTW4TOzOAPNacBZbvreMA2EVbhtem4VTZKUFcDkgY3lzJVoHQFYRQitkElPcOIwGRDe6dYLKtq1cBRslXfWHFQFOWassEBs9pXCyxkCBsg3Uj01xqLNZHaDLqcSgWzATYyB5sEg7lAa6El-UzYaYLMBG11bFtxV1glNxG9LcFv02RsAN5m1TGQTQsJQoutYppQBtA3GwEppm4bez3SFA9ChYzo6BaaWXDbRjEAGjG2Cb8xU1AWy6XXAgmZ-AJTfgFcH4BAhiQVQKlnXl_C45EY6wfgKuhSn-32A_AC6BIwkaR2aw_AcoNCwR2_WkA8dkABiPyB_hnePoXHJC3JCUBEgeYPIB6ncsTNygIIUOynYsD8AogaAOO_wGZQaB14IAbuGnY0jTVloMNuO3DX4DuXW7IAAAHq3ocAX0HAMmAbu1hh7WoK0JEFHsT3p7092eyAACNso67uAdSykHdvorrCdl72_wFoC-gsg_twO2aFoDX5F7RBfgPIAUC9wgAA",__position:0,__code:"<div\n  style={{ backgroundColor: 'gray', height: '100px', position: 'relative' }}\n>\n  <BufferingIndicator\n    renderStrategy=\"always\"\n    isBuffering={false}\n    isSeeking={false}\n    playState=\"starting\"\n  >\n    <LoadingAnimation />\n  </BufferingIndicator>\n</div>",__scope:{props:this?this.props:n,SimpleTable:i.a,BufferingIndicator:c.a,LoadingAnimation:l.a,Footnote:p.a}},o.a.createElement("div",{style:{backgroundColor:"gray",height:"100px",position:"relative"}},o.a.createElement(c.a,{renderStrategy:"always",isBuffering:!1,isSeeking:!1,playState:"starting"},o.a.createElement(l.a,null)))),o.a.createElement(a.MDXTag,{name:"p",components:t},"In this example, the animation is showing because ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},'playState="starting""'),". Try experimenting with other values for playState, and with ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true")," for isBuffering/isSeeking."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),o.a.createElement(s.PropsTable,{of:c.a}),o.a.createElement(p.a,null),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),o.a.createElement(i.a,{rows:[{Element:"div","Class name":"buffering-indicator","Generic class name":"",States:"buffering",Parent:""}]}),o.a.createElement(a.MDXTag,{name:"p",components:t},"Note that the state class name ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"buffering")," is only present when buffering is reported, and the render strategy is set to ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'always'"),"."))}}])&&u(n.prototype,r),A&&u(n,A),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/default-player/default-skin/LoadingAnimation.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=function(){return r.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 38 38",stroke:"currentColor"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},r.createElement("circle",{stroke:"currentColor",strokeOpacity:"0.5",cx:"18",cy:"18",r:"18"}),r.createElement("path",{className:"animated",d:"M36 18c0-9.94-8.06-18-18-18"}))))};t.a=o,o.__docgenInfo={description:"",methods:[],displayName:"LoadingAnimation"}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},s={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},l={padding:"20px",verticalAlign:"top"},p=o({},l,{fontStyle:"italic",opacity:.5}),A=o({},l,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),g=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var o=Object.keys(t[0]);return r.createElement("table",{style:i},r.createElement("thead",{style:s},r.createElement("tr",{style:c},o.map(function(e){return r.createElement("th",{key:"header-"+e,style:l},e)}))),r.createElement("tbody",null,t.map(function(e,t){return r.createElement("tr",{key:n+"-row-"+t,style:c},Object.values(e).map(function(e,o){return r.createElement("td",{key:n+"-cell-"+t+"-"+o,style:(a=e,""===a?p:A)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=g,g.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",function(){return g});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,p(t).call(this,e))).layout=null,n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}])&&c(n.prototype,r),i&&c(n,i),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-buffering-indicator-buffering-indicator.d4e10310804155f7099b.js.map