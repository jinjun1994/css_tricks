(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{313:function(t,a,e){},385:function(t,a,e){"use strict";var i=e(313);e.n(i).a},446:function(t,a,e){"use strict";e.r(a);var i={name:"parabola",data:function(){return{isActive:!1}},methods:{containerClick:function(t){var a=t.target.getBoundingClientRect(),e=t.pageX-a.left-window.pageXOffset,i=t.pageY-a.top-window.pageYOffset;this.$refs.parabolaItem.style.setProperty("--left","".concat(e,"px")),this.$refs.parabolaItem.style.setProperty("--top","".concat(i,"px")),this.isActive=!0}}},s=(e(385),e(1)),n=Object(s.a)(i,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"parabola-container",on:{click:this.containerClick}},[a("div",{ref:"parabolaItem",staticClass:"parabola-item",class:{active:this.isActive}})])},[],!1,null,"0d9dad3d",null);n.options.__file="parabolaCss.vue";a.default=n.exports}}]);