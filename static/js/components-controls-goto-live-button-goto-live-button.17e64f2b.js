(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/replay/components/common.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"k",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return w}));const o="replay-";function r(e,...t){const n=null==e?"":e,o=[];for(let r=0;r<t.length;r++)t[r]&&o.push(n+t[r]);return o.join(" ")}const a=e=>e;function s({classes:e,selectClasses:t,classNames:n,classNamePrefix:o}){if(e&&t){const n=t(e);return Array.isArray(n)?n.filter(a).join(" "):n}if(n)return r(o,...n)}function i(e,t){const n=(t||e.currentTarget).getBoundingClientRect();let o;return o=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(o.pageX-n.left,n.width)),y:Math.max(0,Math.min(o.pageY-n.top,n.height)),width:n.width,height:n.height}}function l(e){return t=>{e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}const c=(e,t)=>e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t))),p=e=>null!=e&&e.constructor==={}.constructor,g=(e,t)=>{if(e===t)return!0;if(p(e)&&p(t)){const n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&(!(n.filter(n=>c(e[n],t[n])).length>0)&&0===o.filter(n=>c(t[n],e[n])).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(let n=e.length;n--;)if(e[n]!==t[n])return!1;return!0}return!1};function A(e){if(null==e)return{};{const t={},n=e;return Object.keys(e).forEach(e=>{p(n[e])?t[e]=A(n[e]):t[e]=n[e]}),t}}function d(e,t){const n=A(e);if(t){const e=t;Object.getOwnPropertyNames(e).forEach(t=>{p(e[t])?p(n[t])?n[t]=d(n[t],e[t]):n[t]=A(e[t]):n[t]=e[t]})}return n}const u=(e,t="",n=!1,o=!0)=>n&&0===e?"":e<10&&o?"0".concat(e).concat(t):"".concat(e).concat(t),m=(e,t="-")=>{let n=Math.round(e),o="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,o=t);const r=Math.floor(n/86400),a=86400*r,s=Math.floor((n-a)/3600),i=a+3600*s,l=Math.floor((n-i)/60),c=n-i-60*l;return o+u(r,".",!0,!1)+u(s,":",0===r)+u(l,":",!1)+u(c)},h=e=>{const t=e instanceof Date&&!isNaN(e.getTime());let n=0,o=0,r=0;return t&&null!=e&&(n=t?e.getHours():0,o=t?e.getMinutes():0,r=t?e.getSeconds():0),u(n,":",!1)+u(o,":",!1)+u(r)},w=(e,t)=>{let n=null;return{start:()=>{n||(n=setInterval(e,1e3*t))},stop:()=>{n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/GotoLiveButton/GotoLiveButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/generic/ToggleButton/ToggleButton.js"),a=n("./src/replay/components/common.js");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i extends o.Component{constructor(...e){super(...e),s(this,"handleToggle",e=>{e&&this.props.setProperties&&this.props.setProperties({isAtLiveEdge:!0})})}render(){const e=this.props,t=e.playMode,n=e.isAtLiveEdge,a=e.isAtLiveEdgeContent,s=e.isNotAtLiveEdgeContent,i=e.label,l=e.classNamePrefix;return"livedvr"===t?o.createElement(r.a,{classNamePrefix:l,isOn:n,className:"goto-live-button",label:i,onToggle:this.handleToggle,toggledOnContent:a,toggledOffContent:s}):null}}s(i,"defaultProps",{classNamePrefix:a.a}),s(i,"streamStateKeysForObservation",["isAtLiveEdge","playMode"]),i.displayName="GotoLiveButton",t.a=i,i.__docgenInfo={description:"",methods:[{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"value",type:{name:"boolean"}}],returns:null}],displayName:"GotoLiveButton",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},isAtLiveEdge:{required:!1,flowType:{name:"boolean"},description:"\u21d8\ufe0e The current timeshift state of the playback. False means timeshifting."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e The stream mode. Must be 'livedvr' in order for this control to render."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ isAtLiveEdge: true }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ isAtLiveEdge: true }",signature:{properties:[{key:"isAtLiveEdge",value:{name:"literal",value:"true",required:!0}}]}}}],return:{name:"void"}}},description:"\u21d7 When the button is clicked, and the isAtLiveEdge prop is false, this callback is invoked with an object containing an isAtLiveEdge property with the value true."},isAtLiveEdgeContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed while isAtLiveEdge is true."},isNotAtLiveEdgeContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed while isAtLiveEdge is false, i.e. when timeshifting."}}}},"./src/replay/components/controls/GotoLiveButton/GotoLiveButton.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./src/replay/components/controls/GotoLiveButton/GotoLiveButton.js"),l=n("./src/replay/docs/mdx-helpers/ShowCase.js"),c=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),p=n("./src/replay/docs/props-footnote.md");function g(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class A extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components,n=g(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"gotolivebutton"}},"GotoLiveButton"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Control bar button for resuming after timeshifting to the live edge of the stream. Only rendering/relevant for live DVR streams."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(a.MDXTag,{name:"p",components:t},"The GotoLiveButton is a toggle button, but it can only toggle if the prop ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isAtLiveEdge")," is ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"false"),". When clicking the button in this case, it invokes ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ isAtLiveEdge: true })"),". If the button prop ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isAtLiveEdge")," is ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true"),", the button can present a different state, and clicking it has no effect."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(s.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAHEREoAAZNgYBvcIInMY05XaT04AEchJC6clXABT4NxoOBARAoQoDImCIgQ1gkJQ6hJBo-DEOQm5qH9AV7SmZxhhGexKTdE1MMkbDcPwqBCOkU4yKIdAsAtTYoDhMi-NGQS4BgLjIPYZxuNgSxXA8WBhIwrCcLwmACIBQ85IUpSF1UyR9L_IyTO01VUG4jV2AAMRfH5aDMj0xMsyTpLsyQB0oO4LTAQKRH_eSdJ49ggylEKFXNdo7V84B2E0Hx5CygABGAiBEAZUHIrpcoDVBdFRY5TgAL2cAhEmxdhuHYYB1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdRoAFmm9gADZptm9YEpoPyfWgRJRv4ZxDkRR1MHYAAFIR-CWSqfjgBbER2ms9oIfTWsudgAEYVrm-RwUa6hmoAQTmHr2EjAryBsKB0HDdh5E5HqxGhmMZHYVEupgbhgEPdrOuxeRt1rYA4egRHggAMhp8ZEnmShmkphGke4Dn5TAUJGp7VB2nYAB-DYqfDSNUauVnqdQIGaykGRq3fMxYV8zAwDCKApnFtGMbliGVxrRMMoIHA_MyFJrwIMnazrdSBMpVcbanDJ8Zh7Gx1u2KMhieAllsMGCDomBz3QNJkdR7h0ejQ2bdrRgWKD9jUMd2OLH9wPEJDtJ8fToOs5gWXU9T3PM9DmBHD0Gg-BAIP-BT4u4AAOREAO87LivQIIauYOHdgoEQuuY6L_spMSfVi2r_v6PQVgBEH4eba0ghPbhH24HxpeV-9iB4ELhet3r9hOT3m2D5jqRjdN83LbJqR9cVsxvxAcSrJs8iM30MjdDRSgqOY2DE6MRqgnNiQCAJaAoCBfQhhJDsFKmAKAow8oOiMCEOwxsspmiVF5HyDpLCUExLAJOLJ0Iek9DgT0aQXT9FwvgwhDEOI1ToViBhqFUr5WODAdWoRNb2CknAJuPoYC3S4RAYqWUKGSEkZ8R67CHSdXmH1G6o9x5XRKqQzC5DPQ2QyJIAAalwGAlAOpmmPAISQCj4ByKmJYpR6ZHorzsOo90mipGehkZxHBulbEFRMRKIgHUsgAGkYCJDgAFAQuoPBaQEKwaI1VkYSK0dFUeujrqpIEB3SisBzFZN_jkju2BXxeTMLYxxUN7HUHKfTfqNZjCoMABuEgA4P6sJsHofRww2IFPAGwYApioiyHsZoExug2Q8JKbY9QDpUW6MedwdgYjHjgL0mIs56i8nWCXei-dBZXC8L_CUqA5oWHqewZprTuiolMewSqmB6j6jyFMQI8op7ZFngLNAewBDTiNMKAktgiw0Eor3Z2Ah1l8nmio4suzlGEVUTAY57BTmAHXCdgAB1TY5gRnsA8EAzgdhyD9x2NkJYlQCTdC2cHMu_ZBz4qNPELSSwJgAriAkcZOw6VoFYJQbYeYCz4ncHsDw6gthTG_q4NABQQh0jgK3UuYcYqr2SPy8l7A4lQEZOMdE_52AbJrJvQc294AwrdpS_OVw0SapRjrblXBEWnOsN0XFjDAWd17s8lgz1Uk5BGPDClsqM7bOpQCy1Oq9VpwDW3NIhSaBXEvs3TA9qTAXJxXi7-roIg4u6J6nRPq_X4rlUGsOAL1YzL9jgHVvrgiLJ6RAPpBRwWbKbi3QNVLo1QNjelLUOAE1MhliUkGqBmqEv8II48UN2gpFghaV5FpnVsIHSOgR7AQH0WIeYIpdB0DoO7euag-hGCOPRrUiwAyYjkE4dwzW5TeontrEusdwiuiQCwFcNWGsCB8NHY3IRIiX3rHkAO09BB4kXquf4wJtAQlhIiVEmJcS-ZXD8T6SDMBoPhOFHBjICGEm9QANrtDNWXWa8obLwvaAAXSA9MDAhkCEsKhpGdVjI9nCApB-HWd607NCY_ETVdN_lwBwIqoTBqvYih3nAVGXHazMqEyJnAYnV6SdNZG-VP1Q3hy8jbPegHgYWFBdrGTTUpgFTI8WP2ami0IoLa2_OMaCCWebgQQtbby4dsc33YyC4lgPp_ceP9YjEm9Tk8JwccBtO1i6AQPo5hzNXQ5r1doryZ4CAFsLaOqdGDMKIUAw-fnf3PrEfjArAWitYBPrHWwupUA5ys25yrNtSt4wpvwx9jXaxSUCFAfGXWFwdYsNQHLLXQt-FozAYbA3hz0PQDVhzdXXP2Y81NiIM3dRgDAPN4AthnOLfbstlOZ8bYS3YKgHhUBIuy1lmYVdrDqA4BzaPfz3Qku3fXf6FWDp308OggA0BjCvJPxfhFWyslJDyUUspZydtNL_kAtodNYEQCPDgQgpB3ldKoP8F280mCtTWIZoogq6TCLsu2I4pYBjMDGLRBBkDwVnEiUkdIp0-7SIpMIroqnRjkNmIsYzKxXi0quMkSDq0XCP0fAEf6UpAubrhahne0FVxIzc5p6Y1D7Aanu2XoaiT8Argk8SGTm96NbU5GtZHHHUoe0WfWJsCAKRCAwquQUMwemGomcBfREUjj8Ga96pGEThvR4m_C5yK4avecB-PesL3Z6fpR9pyh-nL2-oe4sFEkVNveVhKD-HnACUBDnklHgSMufOOrhRwAEj8ogkYfkxH6m6PYTY8TZw4uSEQMRUqjdh9inYMlSeNep5wKuWAUxmNp5E3h3PVHVxwALHDaGufpMpziFpeUWlYBSmyGDUILBKCWEyDsdoiBD417r6MRvWBm8ODb6sucHgu894733iZ5Sh-GPV3TrIY-h61gJ4Ea9ACCdL76H7H4TKUZQxT6RapweBmjbBwH3pCTtDb6irZCWBFKQGn7n4AEnKwK17143536t4SiP6d43Kv5zjv47Cf4YDsDD6_60D_7DxAHtAgGdJYFYAEA4HbDQG9SwGHwIEShIEpzfaax4HDyX7EFN4t4P5SrP5UFYC96h4f4K5f7U7R6j6HxAFz4wF8YwDIG6afjrDRaxbYyp5eQe5mAPp6T8Sw4wg8Fbo7rmg4B7qZgECHrhaU7f7aFZCx41gmbohSjCj54D6G7h59QL6hBwjhF3CmExyhYJ6K4Z7Iz6ZIqEFX4N5yH37kGKEv4qFv5qF0EaEMFMEp5_72FtAIz5jCi7AjALhQC_JHCVTNTMyqoKbrBKZGp2CB7B6wrG7qED4RzozJFjioaRi6A-664D7-6p7xFSaJFmFbpRhr4xxe4FQ9H65wBLApElQhaEjIGbGTirECBLAO5O5TAHGCZhYD7HGgz9LExp6XGEBCxKK4joATCjS_RjRjQACkJGrx1x7AVwBUnx3x8ovxAJAsaRBmY4FhmWscsYsgh8KJlhuMG8zxJUR2Rc6JzW1cYu38lEcAc6rgc8IAGJsA-MBU6gjydaiQDmo0iIegaWyMpMh8FgwAhmBUFCimqeexHseua84cU28scYKc4pqJMciRFgV2ysWAaUEhvEDhlIgOSgz84U1ko8MkZw4ODkUOGQakBkE2xksA4CQEiOBg4EKO8C9eyCUwWOrhmUGiWCxSwMZSCut6ZhowcAMKYMoBhEjABUeGrus4FGVwYZc4HJ_awMXuIGHkHUuMfR0R80i0BQVwY0iKCZsAcEhE-wo0YQEQb0Fg1QfEnYowo0E01Zf060AAxPYOeNqCtNqOeCWTisKNOM4C9BmewFmesF4N8hkI4IguWPKCkJkIkO2YOdOCOVJHcD9BwfkrMFpNOZ2RkEmbAKNDYF2HQGuUOQIKKJ2BAHkKtNtIir8BkGjiMAAJrblcCYD8yIofRfSLn_Tnlx6_zCijR1m_TJi_QbS_R-TtkQl4A_F_GAmIqPaESjQ5naTu6LqPHkqdibnwCK6fmjk_kADs2oAAHAAJz4X2DTkTITltAYA_nnjnh-RAUACs7ZtAPBYM_cKQI0LyXCr4z5IEr5Pxa0M0iKM5G5PZy0fZAl65mSy5C5zJklq5CFcZSFaIqFKZd64l3ZkovZ_ZNYglElCQK5i5VAulC59UNhg6zUBA6ASl6FaZXYvZ7QAATGNB-TWDMbEPEMxY7mxe0BEDMMZYhUOjYugM2PELEJZd6TWHyeZUpVxTQKhaNC8MFeQO2bFOpZ1JmTgLRXJZ7gpegI4C4M8cpesBFRZfldFQQAdN3kkCdCAGdH0BdLld0J7PdI9JQM9JKNpIir6i8DAGpYiKND8CMJkD5ZlbYUhbMOSIkKFa6q6FbnenWtDFaT1JzO0G-KmU7AiQIFioFSBkSkpZdjCDMqtVFutZtfVbtQBsNaZdKMKFEJ-h5lDAtTNZsjxg9UtStTJuYRtfKD8C6P6HKftZvu9cdVNTQJdhdV7q5OSKaR5IxgVEICME4pESMZXkEUhbnjeEJL1HDXYMLFjTgFEDMJGHDTrJGFnqKjgFPnAITaMBHtKokJyABJQGgE-BaG-PTeoIzagMzStaNL9ZwDxljVrvTLjbALOBMOsU1khW3tOCmaTTnqEpTVjXhmNBRrKUdTFp9UiTbIwHBVSSNmad1flTGcPNrVLbrfjCMihYbdbHiWiGbcAIpVbZyeTFLUaXjbMJGC7UcFbprQvImIWLnvjO0J7SzewAANS-ASjTglQ4zUn23FXJlG2-2xzACe1TZZYWJ4DW3DycjHxO1SBohZ1xwZ2R2F1-1eDoCJCl3ky4342RhU0jB-yjG6xJ11i20B3ABo1CTh3tAWhw0h3h0QDR3PHm0CBKWJ0t3AAk3Cpk0U31003Ij02128Yao2bqBN0-0t3a05Dt2d2b7d0WiIgJD92cBh3yjH3qBD2YnABjVJBKXL2MjHxV2-3ABF43UOb30wC534ELz53oBP2xw51p1F0F1O2ANokWLl2V2SkWL63W2q1XYDqfZTDKl6QmnuSwDqnKDA7amRRg4ibxSJQsHySWkeYMDlKDS8o-p4hnIhBdC5AzDoBZBUOFjYp_DU6WGmIZBoHsChmp40riadQUaRhWRgAXCNQwCSCUDRLYb60WjgY-hyOp6ox-B_Ad7YoVDjqoBCJLBVrmC6Aui745BKHYp4alDUAGO3VAq_zizFDsAAASuo9gQjkg5JlMtAUofQEj-jGB6AB9FEv8cAdZ3jUoBQFoIyfjVjVE9NKaTSxQ2xa8NjqwbKEy_DMwdKFDfK1DTSqKgQcQeQFK44BK5jPjLRGw7gw0c42KYyKTCe9ywoFKqACUnAWKbSrjNg7j6t2a8A5A_QMwfMQyPDBAIwlAFoIwhExw0QrgRo9ezjbTXVHjXQkjPufwMAIwdZ5JWNFolQc63g8A9Nj8Gp2Db8xEbOBAZEVCGQsQkgw2661z9GuWjCFpCOpDNpsCdp6OuCjpaC1u0oLibpBOBUtilSqAUE6QNCFOo4BA0GXg5JFlwwIovQBAN4iCxK5xvgiQiMWQX6Aiz2TiSSbi78siA6npA-FSkQj0oL1CsQ1Sh1pyzgY4vcmmc12K86LIyyNRRjDTqqq2LCOQLItyYaEKEaNWMK-y7GSaqCjqXm3W-Y0AzRY1EoRwny2KMQBApk0QaIEAzq3QHR2KQgIg7AIY-1FUrourbSPLpkrLqAjaNYfWUALumrs4ErKaVrwNNiI4Hqtgua-YmKqqrrIa9zeYzMYANrFgFr2Q62m2HmMK8adudSyaUrrrC1manrXqnOea1abS_rCygbfL1ruqQr02vLc20bca3avazrYMSTUAZONyY4wwOQEw0QsrCQWazT3KlDPrmbTqeKLKRKnbZKrDhhRbsA6A9QkILLeKfgAQQQWKubewRyWqmqAKC0AieYma2KrKNbEyobC7w2orbGhyNqjNiw6wpyVbW7tbx4EwTg7bPKmTLDbSoKeYrrC4JrNASwRevyvQdgMwfQQoWkQmBbzIqA4oYAJqgsdjlg-ocEl477BATd5uYNSF4yWk2Lj6E64bc6QC_oXuwb6Hz2mHubFowbuHSF1ABHQiRHM2JH_MflzU6BUokb6HaFvUD6rH6M7HQm4b66kb7AAAPvxz0G1vADgDx0Al5PHm-0x6gCxymVxzrFx2J4G7x-YIJ8J6OqJ-JwDsDPUkUKguKBGAIIPqmi6iqkMyOAnnYBaCO0G-YGSsG_UBisEISrEJQ37FMPhBqAECk9irFAB11ZYX_vpxCnYTc3ipuhgM6SbB4QekeodWerEJeh-jeodRYPk9qBLj9pR93iJaGgBtRmNugLAHwm54xk3aFgpkNoG4LbcVV6gMNpGAAISVfhY4DVYfiFeVCwDQbaijDmC9RnjQuUCwvqQIvhDIunC8oCCRgEbniskkYCyUbLE1hFc9ehIACqaTgeueML3y549Enaw3sLB3-gTdMmc15eoSe36Ap3NAOAFeiW8o83tAbJ6nu3I3-3h3Jsj3S18o4tscH3J333YWMA33mXV6BA4syBYbhI-A3X5c_b0Pq4um1GhmAPFgJxHXSwdrvmbWz2eP36hWoiWATKubJblcnm4bs2G2DmSw1AYHhPa7eLhxtgdxdwDx_ltnOXaeHX7xFH-PVHVw-Hgvx4nPw6ovrH6LmLtAPPlNMmmPInuxKcjHn6SvVwfPwsqvc2SvoJ7sO-BAzHSviKTWkvgWpP6-kv9wPDzWSwqHiPRPx4ZP9CPPFGKPqtmPSFD1-KNW7x1PFPbqFq5PtPHmyBH15gG9dYMgh8lEeM_AVr88Rc5JEArgFoA48AWkPA22cANWK2LwsddrU2Avbn5tcPa3iPbnRfqA0GW3pfbP5fNfMwVfvX_XdfQmDfoSfXIwMsMfXC-MDPXCU2BJrWjvu8h8CZDQEYWA-MY049yJWME_U_-MFov0pMFMy2Uphdm_q48D7uwMSDyXP2VgKnEnBzWDWpxzrOnhX85L928OkClPMC7zIwHpcucniuPDUZEZQsUZyMiDipvkIFrfxBZgtqWXpQ6lxxhSCw5OiKZrObwdYzgUgsAyXggLdyxkGoB_IAUQAcTgC70cA8rKgKdbrA7WhAwoOgIVJpRbED4KGL_yE5nYiAgQAQMSzf7CBvkaALIMpXYCvpTsoQBgRkCWDHQeBfAtFqBSuD0DGBFxGAI7kIBiDeBjAv_vvwAEOgvcypHnubwnRi4ZcLoJQdKB5ghMWQ6fF9HL3zwk8rggsKMksD5JaMlkVwAMpOUYDmDHWKQMQDTV_54CkKxIF4BAG-joB1BvUQwUFk5hnZW2wsZanrwCFYBIsXuZrHYPGb4Z5870P5JGAnwn1eoY0ZUCfUYCnYhEQmEWikAmAZCIAodUOhj0yLsAS8AgJIHsD6YChbA8SagFcAiR9xhAaTAFJVDoZcJRGITeiASEFT41JAkATWBkD5KrhLu1g-AHhggAq00u96SXrEMSDCY8gZeTwTEB8HqDw64wuAJMJVrGFzqNYcPhpxxZCJ5hDNJmkt0SLXYaoRgA_tzF5gJJcUVMYwRlyy68JRevZQWGK0ORkhysZgiwewCsE5DbBgZRIA4KjIuDIyTgw6gcOeGQ8cuUqYWBEOMERDLBFCTYSdk2FK0KMAnITstWsJ6oRqXPWwBDzQB5heoXVOUFbnJH_80otw_QeYDwAYtMgsvK3jDDjzG9ui0nNXpp2V5BEreyA0fub3dxgk2R3IswTAI5EG85OVwd_lbkcGICBOQseYaCKcFiB-RRwpZP6WBHKjEBqokUeqKfQk9SB7uGmnKKlSzVnquvATKrzk6lCpOBvbIDKP16io5OUxJXh7z5rQwTh_sYEZGFV4Oi3RpQ-EurXMB-icqSvQvNAFe6RgiRoiF0OgDZoc0nw_3Ywv9W6AK9TiwYp0YYzk67CawJUBcJvku7NYpMMwg4YiJZH4CSeKIj4Fb13498MBOgo0HoP6Zngbw5FJaCkDu63VOy7A2gJTTB4EArgyIJYG-0tgwooOMHODpbBpqOAexWjPsbS1gTag60kAXoJrF7hAhBMsrQsK7kygKIpUnyKZgAClnAJHGoVEGaJjMFhekc9NsClSZpkQpTbFGDxPCfkue1ocUJlEDyjjXQ6nAcR8A6T6AjIQ0McPTVbHtiCgpXfQJ-Kh6q0UhRSE_LQFu7fdIsl3f8REFCBww0KAmdCW0Cwm5C6A-Q_EOjDGilCEJ5obIF2Khi4TMJmwLYcrT2oFiKUPGf8XDHKaYE8JdE2rqxLGxpB0A-CWiaJzyGFgSJZEngohMonfdqJrAE2GxNnAcTBJ9EhIX9SYkzDyJhjKib1AHGg19hQNGTNwP1DRA8AbtLAJGCzLsBDJEwPGkzXUlISuxwmVwGkAAAa7AGzh-LJqwA-kSwdyTblAo50TeLQK4JZOMlRBTJ5k4KdZM5q2TJJJ4BaGkBvKuSWoRAGCcpxmDeTIgKU4Ev5NXCiCkpKU0CgFOBJvoMpZNYEgVz34NiaRzYhJEN2u6fc4WGoRFpN1RZXcwk-CG8EhBRaUMgR9gsETTWO5fdpqZuE9lCKBqtSbuXYq4ANOQlndkaNsS7rnjgDtTOpU3bIO1yn7rZxp9U-yavnYBiA0hgY9gED0Gn3d0-4PF4bBJh5HS6pwPE8KiFigrxHJ9Qzmu6NR4VSKBvkL3ESJXFiMpggeVwEONQCJA7egMumnNI9GRgpmT3DwKUIOGlotIOk7jNDCmZoABk4jDotqEGQCYPAzTNGYiAxlYz6YrgU8GOEsDdJtY0MkmbwXJk51SxQNeGUYT2FBiLCTXSMI3DkHDCdsrgRuJDNRgCZ2Zwg9roIh5kwyLh1Iz6UhWqzT0vx0MKRuoDMHABLc6MOWewCa69RghzRATHLI-CPEQiEQL2pzEVk6z_Kes4UOLOUGSy4A5ZBIKMHPAABHUIH2H-mgyQZtNGmp8MFSPUawl3KGZzBhl0zMxoaRiQdUu5Szs8UPVwHzPphhzRUkYUWTMK9yLSq2vUWWj93lq8zxeUwRaTeChipyHu6cmGcgQWny0wYOAYSfiDVm9Rs5ZcwiWLRmHMzPqDM3MRLXfE_SwCjgHmH9OulhJS5gwqMY93RjfSNsv0yGbPlCQUY7eY8xICrXprlyi5PGFgMPPbnkUpgok-uRmIsJNyUeq4A4dXL7lRgB5-KZcUvP0Bxyp5E8kIOfJzo1zRa-IJ7ukIAypiIZXo2VD6Mjm1cX58wuOVHJCA3yiJi1XqO8HLmlCv2yQhlhAChjEy55nAC0BaAyGHSfZ2w1WX7O2Gow4ZDKRmTHEqwHCg5j81STJhRzNxOAj5c9H2BgAOzgqnUHefTIwU6STKNw6qSyEwDWQ-E-6SMHLIVkowwSJUc0bLOFSLUeBi4AORYUVnByAaq4aIYghdCpFM5XyR3OwOaK9Q5ZyBPOYtPYXCp6aReEvHDFangz5pPGGOVKHYX9Bho8QK-YdMV77pz5UMZhTMFYUuhjF8irRlACvlXT8xB1dMZYpdDWKlFJihRefLcXu8w-QNQlPujoWKCqpdwlkJeVAKGI45lIThfTx9z9BygnCmmqnIgFe9YoyQXqLYvsUwB4lWkVWpdxiUpK9mCcpCpF3yAND08UMUpYYgixlD1IPCTlrkFQAGMM-5JRIE11XB5yzwuobvlvBFCJBcWddKpdVG4XXytFpeXRV7OLgGKc-0sqHuMuoDmL15SM6MYsvDlTFslayzxfel2X6ElFySuJVQBmCJBz5I45wkOmqiuLD47i8Rd_U97nKfFnCFhVIoKUrLUAdy7-h1geVpj8shy8edROuXVLvlc-QJVgrrENy9G2S6whEollc9X60QMmceFi5ZhA8myPQGkDHLiD-BHIhaEyO_IcMpUSWdshVD6b3gwAAALQyCUBWMByT2fSjLTrAFo6ABlexihj5cOMcyjeZ9QpWdQmgtKoQLVzQC0AcVACvsu8TCEa9sVGQOsH9AmgCY2V7xYoGNGrzbY5VAgeQBqq0iErogwoeQLYyuDFANVYqmADip1XAA9V5JA1dquKDWFzZYqJCsiupnjpA8WkXQNulkHCClgLoFIPEnoiGSBA2wCEfKKSws1zuxAhlkIB5iYAcgvUCKbGowC-itg1AbdHBPAWNQNU8axuBasDUwBg1uwMlahJ4yWIOinq9NXYErlfUOZb3ITlzJ5mVqouqMdTs2u3SSrJ-kAbyJ1FhntjSRfZMRcxOhjJr41Cq0iaWP7UJrXJo67IEXOzUH5sgeagNTECDXkli1p2fNausLXrrEZgKZqIwzCRQwIpaOMIrOpyCwJcKG0FaH8VVoqDCIcASfvSy9UplD1dgVBFepvUPyUaXPYYH0BTInrEEYRKmnGrzBuSH1T6tNS2qRSTQNot6qIZLUOCyoMAmMsJJBpfU2KINqAZ9VWtPp_rjOuqWDX8QQ1c9cu4QKXoBtYF11z1iU_DchvQCobH12GqDRmpg1wa71HgrYCmRo02c6NYMFDVhpw1RdEpZGhcagjg2RYDhPtNAISkXXoBl1BaotWHVXCurUV7mD-DQEjBvqlgmEEjKGk_YYLUYodFTddRRXdJ0VUPOjTpsQAkY31kqidcZpjiqbzNV_U-aJt9jygbNBmmZEZpM0CAbqamizamrODvgLAYshFRbKRWma1eU3NTYxkYa0AzBmM2gFGp_XNRbAeiYKgxsGS5LBkqMkDOjOaDJbugAmJro2q01_4zwam8WJmqmB0aoY36iwCkPc0plGtfcBlu2ta2lroYGWrLcVtq4JbugaswRVAFKEo59ICQZIMEUwlXUjg15EbRsC2CTJVw9WskXAEy39xstwUYWINqpl2MkN2sTMsgRa1Qxetm2_rTtsq1jh9QaAcjZTROxtbT0LGlMmdq4AXaJmLBM8EJu3SHbB1TMvlRHz80BaXNGmyzUhus0kYGZRmlosDrRWubNNLWiHd5qKWn1nNcO0HcFqrWhaj4jqiLc6q55nhJ-r3dVKKB5jUJGM17BtirkQ4ns_YrJdVN9ut54qBAqWprVmuJ3xAGg2oMwUTpkZQAudUMDWZJr0kL4QMIoanXotrCXcyt9OzndqAsXNMOd_O7UDQLHC87Yk8QSMJTqcB06ldjOwjdCVImQqdMAU-6TMAl28r9FPW2XcroV2EpFW6u9VNGJt1c73R80l3SrvVnnZjdtYN6egKBwX8dSJza_hzkSBc4_CyePnJYiEz39gIj_V5qjntINQUclgAXHYC_YpEpG8GZ6cDE-aE40xjobAdQEpaXNyAELYFuUkZzmRkkHiOjnjvz2DEA88odgd0O0gKi0CYux_ALBxE2QCg3e0jGEEz7960CQQO8bOGH24ol5feryJgLlxG54UE6dNRVEqDD7Xkq-xCKli0Gz7FE54UAsKHqo9R1gOI5wJYFFDngwY-oAAPrnhRQooXUKKEv2WBzw9gOxo3F1BwRdQUEG8pfo26NxnAG3a6NdHv1P7tQ9UCwMftP3n6r9N-u_Q_r1BopG4H-sGKAaP3ygT9Z-i_dftv337L9rZewLqFbJgH296BqA1gdgO4HRQV-3UBt0sDXQaDl-m8B_vsBBImyRBiAxgegPYG4DlBy_fYDggNBzwjcSwD_sbhgw9EYMBoHBDBiMG2yqB9oCQcwMwH79W-xsbYnpY-4XgOS-UH5DBiWAwYcEYfWijBiihG4DQRuFBGH1mG_IuoFQ2lDsK0Ftgu-oQEcEi4dqnDfydwSbJm1hEgQVwdwxJUTTjAtgeAH4IghSCCC_hSyCoGkFIGCkNDqVPSC-P6CdQJ0OhvQwYb2LnRg4e-gQDCgXozCGQcRKI45M_rIFQsm4tjsWDKNw8tI8RrQ7UcuadRqjbPdxiEa_LhGuVwR0IwQkSDNHRMWR_wzQIGM5G91vh8oTkfqqRYGjyRwQeocaO9H1grR7o-EbDUFApjwx5w6DPhWVTABcuMGHEmgD60-CVlCwGPvQCxHiB3me1qsaIG2tymjsmIzcaQHMg_FqAGFGgUMQzoRu8a4fWgEUamJ2yXAUgQqOZ0XVt93QCogEj4ZhUI010QfdkAPaMqjkTaZCFPtnCInxWTaeljADH0pAMTXw1lS1S8HUAYUzOqCn0Gemkm61iKYyHAF_jkbroRJvmDCmK00nok9J2gIEl9xMnqoLJrIIiiIyPGOySJxFDZFQwwojcqGUU1CkwASmZTCKdYNyg1THgqTvqptA8iQn4n3AApuANdAgAzB9jEqLrLAC1PInvZup_U2DFb2mmdTYMCAAICNyGnDjHkG002jtMOnR4Vp7da6a0qhAT56AMGFLVVMSC48gE28C8CZEwBgz-KrShGayA34oBZJgcnGdl6zBEz1J5M2iA4Gaj7BzO3UUETDO8FsCJ-bYFAKdPGmJsJZ7MsWYmR-kepQZcs0cZLP5nMehZ8AgMD4JlmDjFZvgjSYPwdmSzdZ9gEqMbMeQ-CLZmEDkbyNAywTqhuXJCdQzoYoY1edDIwAXOp4xAM-uc4onXNZANtjIFMtXn3PwA1zEekfAEQHQp609uQTPs0x1w60uiOx-RHLhqo4RKzKTGE9jBwhPHEUJAn8-sDOMXG7js4B41Gf_M_rO4qe-YEBdbPGp6zIIrYp3p9USCYQFFIQShatJPHkY1Yehdue6AHR7TRucUA7PgBlVotE6V-gltcAT72BAgKcu3vt7XrbDuxxRGDBnjuBEQvgkotsFfMXRPz8jIgBt0qHgXPelPKC2BZJW3GmtsQOgFpCEvXHJLzxmsIjCIDiWYLQXbk_kGZPIWYzEaIOD6bDY1mdgQ5pUbxffM7AJz17TsJM2nPAziBMlodDACtMOzbAxJ1AJlxAzQAhzMmIlLJZgDEWDzBAOxpHSNIwoQyX_LC0oBU0SoPThEewNvFXFZB5L6liwJ8TB4kj6WsSGS_FYkyJXaAyVkS7WHViEXR4AV0ixEhuowoCLsVxIGVdRAVXogAUq0g-HPDiTzQlkuGDGwtWtW0mQnCwRIo8wPgjReY2c5QLn3cWzLNAyEUJzYtxJxGXF0nBMjMuXnJW15jPWOAfMK58R2gsa4okn5eD4gDh1LrNTgAamETHKgk85XpMqmdL5xJtHCfybnGLr2pzM5GcEgzBozd12M1mdoAJnbr7e0KcPty6-V69ZSbi6l32sxBDr4NhXDUkJNaXeTt1203ZjLgwp9N91y09aeetmmI07po3MBLPB6nUWBifIC6YtTapEUoY7grwRLNdmjTTZiZJTc5F75-zR-Wm7YO7MM2dgo1lixCbPP-IMgzeG9h2v4tCkBGkmEPItdKKksrc5ubMjYG-RwnhlRuDIKDJ5vPmdz_NoRA6fAEV7Ybi4wFJABSAUntLQsSE8OWoBG2Tb1USm1kagEOGzL1ZngnwSHOCxTLWR8c2qMfTqXJUUNqAEdfCwwpIbKff2zDYHwXlQOkdRIDCnNsCAhbDbPosNLtQgd_CsvXiRJd3PBRZbtOkDp7AnIZ8TUBUF8Z2l_5Ky1UOdmsFUm4v-G5TUtxwzkePZcB1bNiec1rbMQVwrbTI3DIdV8uOXnLoQVy6bcFgyY0rqjH6OmPgzZWErrlfK5UKgH9WAC_KewF0BIUh3XbHshqCbuislWYK68ye4iBysxA8rMAAqz_ycEBTUreIZe9kH0Br2oBG9i-6cRIv1XotUA6q0RfIWBWGrjmdfINdu5tWpQHVvAFAMjDihOxipBUVGWx1ykApNkIMBXWFGL2r7K92-wynvuHs1gWCgDIiiiDeRRGqIOq2cygEj3kHN9mgHfbMEb3sHxAghHBBfEKX2gb-xuG2Xb1KHRQhh4w6YfMOWHG41h4fa2RvAbcLDUFC6ejQwCgV0zapoIkIAES6hXj898-6ytHhMb-4LodByKfsvWZg1w0SRyGbTL5Mtug2x3fEF0dghyBO13m4wTbsZAGgvoRxNlkjzWOJKjTR3NbeoDoxeosd6pOsGBYl7wW-t4zJbdcdd2STZgywOVNQAB6JIODIiPDrOah60kGSPJAkF0TJOCkUCHgk8wf6dwYEiej5pjm-YYJXS-OIXJY-Jxh27gvhLQpHqlNWPqn55qDPLUSQaJJEsd_nPMDgDMWNb3QLDLEnLjxBt2HKQPCGUztoZ5a3_R8WXfNxbndrPT6Rn0_ju3tA8oz9DEsF6f0RBIyTHYDTq4AzPLHG3H4PM6DX1sln7AdZ4WpOfoA9n3TxoEOnmCAPLn5XHWKM-uct3FE9LWYspngCLPp1AdmW0naueg2XzNT1POhlgxHPnpUMJUSs_lqbmPpNz9Z5BP8ZQBIMYAmWwlxBfBJ5a4L7PabdTtjOYMmGCF3zGbsN60nGQCGBAtFufPeiSGMW189OuXOLyRzn6ILHOc_OBTdz0VFcEn7PRRUHLxU047MGXwpxB6ZEBOZ5hZ7sMP0dl5c8ypfSe1IdwpDwWPPSjkXOSSlycZ1xDK14Fu49FFecpCuRtnLvl1KD1fQxFZnIZl_Bh-gazEUkrll-a8VnyukK5L5x4xS7mXwem5BdzHoB4KMA3XlLxsL7aVcZOCAx5lbgfxQZuvlXBATBpqWidvwxcypKXBAjj05PwIJyEwNm5ze5u83-bgt-GmMCGt4AHlMSGPpCCsUWq56IsHQxjpoU9U9SQt825bc5uIUZgUqHnqXKg6yIOicxCrYEAbcGgHcCVNQkkADuh3I7kkWCjOCdOvInb3SN25IjxOLmNCFyJyOFDruDewoVN_6AXfC5g9n8J4KANwjOBNtuiM94YhnfS553Xbw9-zlXdXNbm66XdwOn3e-Ql3pzG_pEzIh6JrrEjP98qf_Czu93d7uJ9-5_h_xkncAdGrkmRcwfySr7jt2B57fkQf31zbpKo5gBdrot1UDD8eCw84f_Nz0pD6gHfcOhP3Ie4kgE3HfcXx4Pazdw4fo8vAd3IH294u_vfxO-3-iJxzx_qcC3r3c7jIk29bdFvUEEPD9NjAreNvRP2b9t2R67fKk0-GSaQBdLkZj7JAqgbAKR6fgvRtgJR8BNQBIbx6QAd6fgOMP4BXB-AQIYkFUF2YCALQv4SGvdHWD8AfcYKyz-wH4BjQcAPnsaC55rD8BygPTfUyS6QBeeQAVbfIH-CcI-hIanCckJQDD05A8gUqN0n43KAgh7PAXiwPwCiBoBPP_ALTxoDgA5eIvmAeYBGEaiSZPPMmfgG6UK8gAAAegBRwB_k2vZX3L4IC1BWhIgjXlrxtDa_JgOvIAPYfICBxZfcAugI24Z8ifPMTP_UEALQF9BZBLP1ns0LQF7o9exq_Acb_IH29AA",__position:0,__code:'<ShowCase\n  render={({ setProperties, isAtLiveEdge }) => (\n    <GotoLiveButton\n      isAtLiveEdge={isAtLiveEdge}\n      isAtLiveEdgeContent="Live"\n      isNotAtLiveEdgeContent="Go to live"\n      playMode="livedvr"\n      setProperties={setProperties}\n    />\n  )}\n/>',__scope:{props:this?this.props:n,GotoLiveButton:i.a,ShowCase:l.a,SimpleTable:c.a,Footnote:p.a}},r.a.createElement(l.a,{render:({setProperties:e,isAtLiveEdge:t})=>r.a.createElement(i.a,{isAtLiveEdge:t,isAtLiveEdgeContent:"Live",isNotAtLiveEdgeContent:"Go to live",playMode:"livedvr",setProperties:e})})),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(s.PropsTable,{of:i.a}),r.a.createElement(p.a,null),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(c.a,{rows:[{Element:"div","Class name":"goto-live-button","Generic class name":"toggle-button",States:"toggled-off, toggled-on",Parent:""},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".goto-live-button"}]}))}}A.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>e.toggleButtonOff||e.toggleButton,i=e=>e.toggleButtonOn||e.toggleButton;class l extends o.Component{constructor(...e){super(...e),a(this,"handleClick",()=>this.props.onToggle&&this.props.onToggle(!this.props.isOn)),a(this,"handleKeyDown",Object(r.f)(["Enter"," "])),a(this,"handleKeyUp",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())})}render(){const e=this.props,t=e.isOn,n=e.label,a=e.className,l=e.classNamePrefix,c=e.toggledOnContent,p=e.toggledOffContent,g=e.onRef,A=e.classes,d=t?"toggled-on":"toggled-off",u=Object(r.g)({classes:A,selectClasses:t?i:s,classNamePrefix:l,classNames:[a,"toggle-button",d]}),m=t?c:p;return o.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:g,className:u,tabIndex:0},o.createElement("div",{tabIndex:-1},m))}}a(l,"defaultProps",{useDefaultClassNaming:!0}),t.a=l,l.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends o.Component{constructor(e){super(e),a(this,"setProperties",e=>this.setState((e=>{const t={};return Object.keys(e).forEach(n=>{let o=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=o;break;case"selectedTextTrack":t.currentTextTrack=o;break;default:t[n]=o}}),t})(e))),this.state={}}render(){const e=this.setProperties,t=this.state,n=this.props,s=n.render,i=n.height,l=i?{width:"100%",height:i}:{width:"100%"};return o.createElement("div",null,o.createElement("div",{style:l}),o.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{setProperties:e}))))}}t.a=s,s.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},l={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},p={padding:"20px",verticalAlign:"top"},g=a({},p,{fontStyle:"italic",opacity:.5}),A=a({},p,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),d=({rows:e})=>{const t=e?e.map(e=>Object.values(e).join("-")).join("-"):"";if(e&&e.length){const n=Object.keys(e[0]);return o.createElement("table",{style:i},o.createElement("thead",{style:l},o.createElement("tr",{style:c},n.map(e=>o.createElement("th",{key:"header-"+e,style:p},e)))),o.createElement("tbody",null,e.map((e,n)=>o.createElement("tr",{key:t+"-row-"+n,style:c},Object.values(e).map((e,r)=>{return o.createElement("td",{key:t+"-cell-"+n+"-"+r,style:(a=e,""===a?g:A)},(e=>""===e?"none":e)(e));var a})))))}};t.a=d,d.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class i extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components;s(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}i.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-goto-live-button-goto-live-button.d2054bfdd82bd3c54d47.js.map