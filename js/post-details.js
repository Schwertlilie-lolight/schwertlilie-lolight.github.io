(t=>{"use strict";function s(s,e){this.$body=t(document.body),this.$scrollElement=t(s).is(document.body)?t(window):t(s),this.options=Object.assign({offset:10},e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function e(e){return this.each(function(){var o=t(this),i=o.data("bs.scrollspy"),r="object"==typeof e&&e;i||o.data("bs.scrollspy",i=new s(this,r)),"string"==typeof e&&i[e]()})}t.isFunction(t.fn.scrollspy)||(s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var s=this,e="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var s=t(this),i=s.data("target")||s.attr("href"),r=/^#./.test(i)&&t(NexT.utils.escapeSelector(i));return r&&r.length&&r.is(":visible")&&[[r[e]().top+o,i]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){s.offsets.push(this[0]),s.targets.push(this[1])})},s.prototype.process=function(){var s,e=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),i=this.options.offset+o-this.$scrollElement.height(),r=this.offsets,l=this.targets,c=this.activeTarget;if(this.scrollHeight!==o&&this.refresh(),e>=i)return c!==(s=l[l.length-1])&&this.activate(s);if(c&&e<r[0])return t(this.selector).trigger("clear.bs.scrollspy"),this.activeTarget=null,this.clear();for(s=r.length;s--;)c!==l[s]&&e>=r[s]&&(!r[s+1]||e<=r[s+1])&&this.activate(l[s])},s.prototype.activate=function(s){this.activeTarget=s,this.clear();var e=`${this.selector}[data-target="${s}"],${this.selector}[href="${s}"]`,o=t(e).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},s.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")},t.fn.scrollspy=e,t.fn.scrollspy.Constructor=s,t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var s=t(this);e.call(s,s.data())})}))})(jQuery),function(){var t=$(".post-toc"),s=".active-current";function e(){t.find(s).removeClass(s.substring(1))}t.on("activate.bs.scrollspy",()=>{var s=t.find(".active").last();e(),s.addClass("active-current"),t.scrollTop(s.offset().top-t.offset().top+t.scrollTop()-t.height()/2)}).on("clear.bs.scrollspy",e),$("body").scrollspy({target:".post-toc"}),t.find("a").on("click",t=>{t.preventDefault();var s=NexT.utils.escapeSelector(t.currentTarget.getAttribute("href")),e=$(s).offset().top;$(document.documentElement).stop().animate({scrollTop:e},500)})}();