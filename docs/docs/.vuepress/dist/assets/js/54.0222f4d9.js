(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{327:function(e,c,s){},337:function(e,c,s){"use strict";s(65),s(168),s(172);var t={name:"m-checkbox",inject:{checkedGroup:{type:Array,default:""}},props:{label:{type:String},value:{type:[Boolean,Array]},disabled:{type:Boolean,default:!1}},computed:{checkValue:{set:function(e){this.isGroup?this.checkedGroup.$emit("input",e):this.$emit("input",e)},get:function(){return this.isGroup?this.checkedGroup.value:this.value}},isGroup:function(){return""!==this.checkedGroup},isChecked:function(){return this.isGroup?this.checkedGroup.value.includes(this.label):"boolean"==typeof this.value?this.value:this.value.includes(this.label)}}},a=(s(338),s(42)),i=Object(a.a)(t,(function(){var e=this,c=e.$createElement,s=e._self._c||c;return s("label",{staticClass:"m-checkbox"},[s("span",{staticClass:"m-checkbox-outer",class:{"is-checked":e.isChecked,"is-disabled":e.disabled}},[s("span",{staticClass:"m-checkbox-inner",class:{"is-checked":e.isChecked,"is-disabled":e.disabled}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkValue,expression:"checkValue"}],staticClass:"m-checkbox-native",class:{"is-disabled":e.disabled},attrs:{type:"checkbox",disabled:e.disabled},domProps:{value:e.label,checked:Array.isArray(e.checkValue)?e._i(e.checkValue,e.label)>-1:e.checkValue},on:{change:function(c){var s=e.checkValue,t=c.target,a=!!t.checked;if(Array.isArray(s)){var i=e.label,l=e._i(s,i);t.checked?l<0&&(e.checkValue=s.concat([i])):l>-1&&(e.checkValue=s.slice(0,l).concat(s.slice(l+1)))}else e.checkValue=a}}})]),e._v(" "),s("span",{staticClass:"checkbox__label",class:{"is-disabled":e.disabled}},[e._v(e._s(e.label))])])}),[],!1,null,"04a47772",null).exports;i.install=function(e){e.component(i.name,i)};c.a=i},338:function(e,c,s){"use strict";s(327)},397:function(e,c,s){},472:function(e,c,s){"use strict";s(397)},534:function(e,c,s){"use strict";s.r(c);var t={components:{MCheckbox:s(337).a},data:function(){return{checkedList:["选项A"]}}},a=(s(472),s(42)),i=Object(a.a)(t,(function(){var e=this,c=e.$createElement,s=e._self._c||c;return s("div",{staticClass:"checkbox"},[s("m-checkbox",{attrs:{label:"选项A"},model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[e._v("选项A")]),e._v(" "),s("m-checkbox",{attrs:{label:"选项B"},model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[e._v("选项B")]),e._v(" "),s("m-checkbox",{attrs:{label:"选项C"},model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[e._v("选项C")]),e._v(" "),s("m-checkbox",{attrs:{label:"选项D"},model:{value:e.checkedList,callback:function(c){e.checkedList=c},expression:"checkedList"}},[e._v("选项D")])],1)}),[],!1,null,"bb8a988c",null);c.default=i.exports}}]);