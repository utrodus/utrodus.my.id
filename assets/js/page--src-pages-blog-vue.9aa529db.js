(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6Q3+":function(t,a,e){},"7qvl":function(t,a,e){},"8tYL":function(t,a,e){"use strict";e.r(a);var s=e("BA+P"),n=e("Wsvf"),r={metaInfo:{title:"Blog"},components:{PostCard:s.a,Pager:n.a}},i=(e("o+Xf"),e("KHd+")),l=null,o=Object(i.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("div",{staticClass:"posts"},[a("h1",{staticClass:"heading-title"},[this._v("All Articles")]),this._l(this.$page.posts.edges,(function(t){return a("PostCard",{key:t.node.id,attrs:{post:t.node}})})),a("Pager",{attrs:{info:this.$page.posts.pageInfo}})],2)])}),[],!1,null,"75adf976",null);"function"==typeof l&&l(o);a.default=o.exports},"Ajh/":function(t,a,e){},"BA+P":function(t,a,e){"use strict";var s=e("n6yM"),n=e("PpWc"),r={components:{PostMeta:s.a,PostTags:n.a},props:["post"]},i=(e("YDir"),e("KHd+")),l=Object(i.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[t.post.logo_image?e("g-image",{staticClass:"post-card__image-logo",attrs:{alt:"Cover image",src:t.post.logo_image}}):t._e(),e("div",{staticClass:"post-card__content"},[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),e("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),e("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),e("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)],1)}),[],!1,null,null,null);a.a=l.exports},GsXb:function(t,a,e){"use strict";e("7qvl")},NAO6:function(t,a,e){},PpWc:function(t,a,e){"use strict";var s={props:["post"]},n=(e("GsXb"),e("KHd+")),r=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(a){return e("g-link",{key:a.id,staticClass:"post-tags__link",attrs:{to:a.path}},[e("span",[t._v("#")]),t._v(t._s(a.title)+"\n\t")])})),1)}),[],!1,null,null,null);a.a=r.exports},Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("Kw5r");var s=e("DOVJ"),n=(e("Y6W1"),e("fVfk")),r={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:(t,{props:a,data:e,parent:r})=>{const{info:l,showLinks:o,showNavigation:c,ariaLabel:p}=a,{current:u,total:f,pages:g,start:d,end:v}=function({currentPage:t=1,totalPages:a=1},e){const s=Math.ceil(e/2);let n=Math.floor(t-s),r=Math.floor(t+s);a<=e?(n=0,r=a):t<=s?(n=0,r=e):t+s>=a&&(n=a-e,r=a);const i=[];for(let t=n+1;t<=r;t++)i.push(t);return{current:t,total:a,start:n,end:r,pages:i}}(l,a.range),h=Object(n.d)(r.$route),C=(e,n=e,r=n,l="")=>{e===u&&(r=a.ariaCurrentLabel);const o={to:i(h,e),exact:!0};return a.activeLinkClass&&(o.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(o.exactActiveClass=a.exactActiveLinkClass),t(s.a,{class:[a.linkClass,l],attrs:{...o,"aria-label":r.replace("%n",e),"aria-current":u===e}},[n])},y=o?g.map(t=>C(t,t,a.ariaLinkLabel)):[];if(c){const{firstLabel:t,prevLabel:e,nextLabel:s,lastLabel:n}=a,{ariaFirstLabel:r,ariaPrevLabel:i,ariaNextLabel:l,ariaLastLabel:o}=a,{firstClass:c,prevClass:p,nextClass:g,lastClass:h,navClass:b}=a;u>1&&y.unshift(C(u-1,e,i,[p,b])),d>0&&y.unshift(C(1,t,r,[c,b])),u<f&&y.push(C(u+1,s,l,[g,b])),v<f&&y.push(C(f,n,o,[h,b]))}return y.length<2?null:t("nav",{...e,attrs:{role:"navigation","aria-label":p}},y)}};function i(t,a){const e=/\/$/.test(t)?"/":"";return a>1?Object(n.g)(t)+`/${a}${e}`:t}e("6NbQ")},YDir:function(t,a,e){"use strict";e("NAO6")},n6yM:function(t,a,e){"use strict";var s={props:["post"]},n=(e("yLjO"),e("KHd+")),r=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-meta"},[e("p",[e("svg",{staticClass:"feather feather-calendar",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("rect",{attrs:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}}),e("line",{attrs:{x1:"16",y1:"2",x2:"16",y2:"6"}}),e("line",{attrs:{x1:"8",y1:"2",x2:"8",y2:"6"}}),e("line",{attrs:{x1:"3",y1:"10",x2:"21",y2:"10"}})]),t._v("\n\t\t"+t._s(t.post.date)+"\n\t\t"),t.post.timeToRead?[e("svg",{staticClass:"feather feather-clock",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),e("polyline",{attrs:{points:"12 6 12 12 16 14"}})]),t._v(t._s(t.post.timeToRead)+" minute read\n\t\t")]:t._e()],2)])}),[],!1,null,"7b9baf7c",null);a.a=r.exports},"o+Xf":function(t,a,e){"use strict";e("6Q3+")},yLjO:function(t,a,e){"use strict";e("Ajh/")}}]);