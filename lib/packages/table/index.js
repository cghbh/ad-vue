!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("table",[],t):"object"==typeof exports?exports.table=t():e.table=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=59)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,i,u,a){var c,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},f._ssrRegister=c):r&&(c=a?function(){r.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(f.functional){f._injectStyles=c;var s=f.render;f.render=function(e,t){return c.call(t),s(e,t)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:f}}n.d(t,"a",(function(){return o}))},22:function(e,t,n){},44:function(e,t,n){"use strict";var o=n(22);n.n(o).a},59:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this.$createElement;return(this._self._c||e)("div")};o._withStripped=!0;var r={name:"de-table"},i=(n(44),n(0)),u=Object(i.a)(r,o,[],!1,null,"2ec85f1c",null);u.options.__file="packages/components/table/index.vue";var a=u.exports;a.install=function(e){e.component(a.name,a)};t.default=a}}).default}));
//# sourceMappingURL=index.js.map