(t=>{class e{constructor(e,i){this.options=t.extend({offset:0,target:window},i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",this.checkPosition.bind(this)).on("click.bs.affix.data-api",this.checkPositionWithEventLoop.bind(this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()}getState(t,e,i,o){let n=this.$target.scrollTop(),s=this.$element.offset(),f=this.$target.height();if(null!=i&&"top"===this.affixed)return n<i&&"top";if("bottom"===this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+f<=t-o)&&"bottom";let a=null==this.affixed,h=a?n:s.top;return null!=i&&n<=i?"top":null!=o&&h+(a?f:e)>=t-o&&"bottom"}getPinnedOffset(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");let t=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t}checkPositionWithEventLoop(){setTimeout(this.checkPosition.bind(this),1)}checkPosition(){if(!this.$element.is(":visible"))return;let i=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,f=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));let a=this.getState(f,i,n,s);if(this.affixed!==a){null!=this.unpin&&this.$element.css("top","");let i="affix"+(a?"-"+a:""),o=new t.Event(i+".bs.affix");if(this.$element.trigger(o),o.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"===a?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"===a&&this.$element.offset({top:f-i-s})}}e.RESET="affix affix-top affix-bottom",t.fn.affix=function(i){return this.each(function(){let o=t(this),n=o.data("bs.affix"),s="object"==typeof i&&i;n||o.data("bs.affix",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.affix.Constructor=e})(jQuery),window.addEventListener("DOMContentLoaded",()=>{const t=CONFIG.sidebar.offset||12,e=document.querySelector(".sidebar-inner"),i=()=>{let e=(()=>document.querySelector(".header-inner").height()+t)(),i=(()=>{let t=document.querySelector("#footer"),e=document.querySelector(".footer-inner"),i=t.offsetHeight-e.offsetHeight;return t.offsetHeight+i})();$(".sidebar-inner").affix({offset:{top:e-t,bottom:i}}),document.querySelector("#sidebar").css({"margin-top":`${e}px`,"margin-left":"auto"})};i(),window.matchMedia("(min-width: 992px)").addListener(t=>{t.matches&&($(window).off(".affix"),$(".sidebar-inner").removeData("bs.affix"),e.classList.remove("affix","affix-top","affix-bottom"),i())})});