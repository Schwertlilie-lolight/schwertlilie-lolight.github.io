NexT.utils={wrapImageWithFancyBox:function(){$(".post-body img").each(function(){var t=$(this),e=t.attr("title")||t.attr("alt"),i=t.parent("a");if(i.length<1){var a=t.attr("data-src")||t.attr("src");i=t.wrap(`<a class="fancybox fancybox.image" href="${a}" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`).parent("a"),t.is(".post-gallery img")?(i.addClass("post-gallery-img"),i.attr("data-fancybox","gallery").attr("rel","gallery")):t.is(".group-picture img")?i.attr("data-fancybox","group").attr("rel","group"):i.attr("data-fancybox","default").attr("rel","default")}e&&(i.append(`<p class="image-caption">${e}</p>`),i.attr("title",e).attr("data-caption",e))}),$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},registerExtURL:function(){$(".exturl").on("click",function(){var t=$(this).attr("data-url"),e=decodeURIComponent(escape(window.atob(t)));return window.open(e,"_blank","noopener"),!1})},registerCopyCode:function(){$(".highlight").not(".gist .highlight").each(function(t,e){function i(t){"mac"===CONFIG.copycode.style?t.html('<i class="fa fa-clipboard"></i>'):t.text(CONFIG.translation.copy_button)}var a=$("<div>").addClass("copy-btn");a.on("click",function(){var t=$(this).parent().find(".code").find(".line").map(function(t,e){return $(e).text()}).toArray().join("\n"),e=document.createElement("textarea"),i=window.pageYOffset||document.documentElement.scrollTop;e.style.top=i+"px",e.style.position="absolute",e.style.opacity="0",e.readOnly=!0,e.value=t,document.body.appendChild(e);const a=document.getSelection(),n=a.rangeCount>0&&a.getRangeAt(0);e.select(),e.setSelectionRange(0,t.length),e.readOnly=!1;var o=document.execCommand("copy");CONFIG.copycode.show_result&&$(this).text(o?CONFIG.translation.copy_success:CONFIG.translation.copy_failure),e.blur(),$(this).blur(),n&&(a.removeAllRanges(),a.addRange(n)),document.body.removeChild(e)}),a.on("mouseleave",function(){var t=$(this).closest(".copy-btn");setTimeout(function(){i(t)},300)}),i(a),$(e).wrap($("<div>").addClass("highlight-wrap")).after(a)})},registerBackToTop:function(){var t=$(".back-to-top");$(window).on("load scroll",function(){t.toggleClass("back-to-top-on",window.pageYOffset>50);var e=$(window).scrollTop()/NexT.utils.getContentVisibilityHeight(),i=Math.round(100*e),a=Math.min(i,100);$("#scrollpercent > span").html(a)}),t.on("click",function(){$("html, body").animate({scrollTop:0})})},registerTabsTag:function(){$(".tabs ul.nav-tabs .tab").on("click",function(t){if(t.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this).find("a").attr("href");$(e).addClass("active").siblings().removeClass("active"),document.querySelector(e).dispatchEvent(new Event("tabs:click",{bubbles:!0}))}}),window.dispatchEvent(new Event("tabs:register"))},registerCanIUseTag:function(){window.addEventListener("message",t=>{var e=t.data;if("string"==typeof e&&e.indexOf("ciu_embed")>-1){var i=e.split(":")[1],a=e.split(":")[2];$(`iframe[data-feature=${i}]`).height(parseInt(a,10)+30)}},!1)},registerActiveMenuItem:function(){$(".menu-item").each(function(){var t=$(this).find("a[href]")[0];t.hostname!==location.hostname||t.pathname!==location.pathname&&t.pathname!==location.pathname.replace("index.html","","g")?$(this).removeClass("menu-item-active"):$(this).addClass("menu-item-active")})},embeddedVideoTransformer:function(){var t=$("iframe"),e=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"].join("|"));function i(t){return{width:t.width(),height:t.height()}}function a(t,e){return e/t*100}t.each(function(){var t,n=$(this),o=i(n);if(this.src.search(e)>0){var s=a(o.width,o.height);n.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var r=document.createElement("div");if(r.className="fluid-vids",r.style.position="relative",r.style.marginBottom="20px",r.style.width="100%",r.style.paddingTop=s+"%",""===r.style.paddingTop&&(r.style.paddingTop="50%"),this.parentNode.insertBefore(r,this),r.appendChild(this),this.src.search("music.163.com")>0)((t=i(n)).width>o.width||t.height<o.height)&&(r.style.paddingTop=a(t.width,o.height)+"%")}})},hasMobileUA:function(){var t=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(t)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(t){return t.replace(/[!"$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g,"\\$&")},updateSidebarPosition:function(){if(this.isDesktop()&&!this.isPisces()&&!this.isGemini()){var t=$(".post-toc-content"),e=CONFIG.page.sidebar;if("boolean"!=typeof e){var i=t.length>0&&t.html().trim().length>0;e="always"===CONFIG.sidebar.display||"post"===CONFIG.sidebar.display&&i}e&&$(document).trigger("sidebar:show")}},isMuse:function(){return"Muse"===CONFIG.scheme},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},isGemini:function(){return"Gemini"===CONFIG.scheme},getScrollbarWidth:function(){var t=$("<div/>").addClass("scrollbar-measure").prependTo("body"),e=t[0],i=e.offsetWidth-e.clientWidth;return t.remove(),i},getContentVisibilityHeight:function(){var t=$(".container").height(),e=$(window).height();return t>e?t-e:$(document).height()-e},getSidebarb2tHeight:function(){return CONFIG.back2top.enable&&CONFIG.back2top.sidebar?$(".back-to-top").height():0},getSidebarSchemePadding:function(){var t="block"===$(".sidebar-nav").css("display")?$(".sidebar-nav").outerHeight(!0):0,e=$(".sidebar-inner"),i=e.innerWidth()-e.width(),a=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;return this.isPisces()||this.isGemini()?2*i+t+a+this.getSidebarb2tHeight():2*i+t/2},getScript:function(t,e,i){i?e():$.ajax({type:"GET",url:t,dataType:"script",cache:!0,success:e})}};;NexT.motion={},NexT.motion.integrator={queue:[],cursor:-1,init:function(){return this.queue=[],this.cursor=-1,this},add:function(t){return this.queue.push(t),this},next:function(){this.cursor++;var t=this.queue[this.cursor];$.isFunction(t)&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}},NexT.motion.middleWares={logo:function(t){var i=[],o=$(".brand"),n=$(".custom-logo-image"),e=$(".site-title"),s=$(".site-subtitle"),r=$(".logo-line-before i"),u=$(".logo-line-after i");function a(t){return(t=Array.isArray(t)?t:[t]).every(function(t){return t.length>0})}function c(t,i){return{e:$(t),p:{translateX:i},o:{duration:500,sequenceQueue:!1}}}function l(){i.push({e:n,p:{opacity:1,top:0},o:{duration:200}})}o.length>0&&i.push({e:o,p:{opacity:1},o:{duration:200}}),NexT.utils.isMist()&&a([r,u])&&i.push(c(r,"100%"),c(u,"-100%")),NexT.utils.isMuse()&&a(n)&&l(),a(e)&&i.push({e:e,p:{opacity:1,top:0},o:{duration:200}}),a(s)&&i.push({e:s,p:{opacity:1,top:0},o:{duration:200}}),(NexT.utils.isPisces()||NexT.utils.isGemini())&&a(n)&&l(),i.length>0?(i[i.length-1].o.complete=function(){t.next()},$.Velocity.RunSequence(i)):t.next(),CONFIG.motion.async&&t.next()},menu:function(t){$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}}),CONFIG.motion.async&&t.next()},postList:function(t){var i=$(".post-block, .pagination, .comments"),o=CONFIG.motion.transition.post_block,n=$(".post-header"),e=CONFIG.motion.transition.post_header,s=$(".post-body"),r=CONFIG.motion.transition.post_body,u=$(".collection-title, .archive-year"),a=CONFIG.motion.transition.coll_header;if(i.length>0){var c=window.postMotionOptions||{stagger:100,drag:!0,complete:function(){t.next()}};CONFIG.motion.transition.post_block&&i.velocity("transition."+o,c),CONFIG.motion.transition.post_header&&n.velocity("transition."+e,c),CONFIG.motion.transition.post_body&&s.velocity("transition."+r,c),CONFIG.motion.transition.coll_header&&u.velocity("transition."+a,c)}(NexT.utils.isPisces()||NexT.utils.isGemini())&&t.next()},sidebar:function(t){NexT.utils.updateSidebarPosition();var i=$(".sidebar-inner"),o=CONFIG.motion.transition.sidebar;CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())&&i.velocity("transition."+o,{display:null,duration:200,complete:function(){i.css({transform:"initial"})}}),t.next()}};;!function(t){"use strict";var e=function(i,o){this.options=t.extend({},e.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(i){return this.each(function(){var o=t(this),f=o.data("bs.affix"),n="object"==typeof i&&i;f||o.data("bs.affix",f=new e(this,n)),"string"==typeof i&&f[i]()})}e.VERSION="3.3.5",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,e,i,o){var f=this.$target.scrollTop(),n=this.$element.offset(),s=this.$target.height();if(null!=i&&"top"===this.affixed)return f<i&&"top";if("bottom"===this.affixed)return null!=i?!(f+this.unpin<=n.top)&&"bottom":!(f+s<=t-o)&&"bottom";var a=null==this.affixed,h=a?f:n.top;return null!=i&&f<=i?"top":null!=o&&h+(a?s:e)>=t-o&&"bottom"},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=this.$element.height(),o=this.options.offset,f=o.top,n=o.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(n=f=o),"function"==typeof f&&(f=o.top(this.$element)),"function"==typeof n&&(n=o.bottom(this.$element));var a=this.getState(s,i,f,n);if(this.affixed!==a){null!=this.unpin&&this.$element.css("top","");var h="affix"+(a?"-"+a:""),r=new t.Event(h+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"===a?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"===a&&this.$element.offset({top:s-i-n})}};var o=t.fn.affix;t.fn.affix=i,t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),o=e.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),i.call(e,o)})})}(jQuery);;$(document).on("DOMContentLoaded",function(){var e=$(".sidebar-inner"),t=CONFIG.sidebar.offset||12;function o(){var o,i,f,a=$(".header-inner").height()+t,n=(o=$("#footer"),i=$(".footer-inner"),f=o.outerHeight()-i.outerHeight(),o.outerHeight()+f);e.affix({offset:{top:a-t,bottom:n}}),$("#sidebar").css({"margin-top":a,"margin-left":"auto"})}o(),window.matchMedia("(min-width: 992px)").addListener(function(t){t.matches&&($(window).off(".affix"),e.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),o())})});;$(document).on("DOMContentLoaded",function(){CONFIG.back2top.enable&&NexT.utils.registerBackToTop(),NexT.utils.registerCanIUseTag(),$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav"),t=e.hasClass("site-nav-on"),o=t?"slideUp":"slideDown",i=t?"removeClass":"addClass";e.stop()[o]("fast",function(){e[i]("site-nav-on")})}),CONFIG.motion.enable?NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap():NexT.utils.updateSidebarPosition()}),$(document).on("DOMContentLoaded pjax:success",function(){if(CONFIG.save_scroll){var e=localStorage.getItem("scroll"+location.pathname);$("html, body").animate({scrollTop:e||0}),NexT.utils.saveScrollTimer=setInterval(function(){localStorage.setItem("scroll"+location.pathname,$(window).scrollTop())},1e3)}function t(e){e=e||"auto",$(".site-overview, .post-toc").css("max-height",e)}CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.mediumzoom&&window.mediumZoom(".post-body img"),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),CONFIG.copycode.enable&&NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.embeddedVideoTransformer(),function(){var e;$(window).on("resize",function(){e&&clearTimeout(e),e=setTimeout(function(){t(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())},0)});var o=NexT.utils.getScrollbarWidth();$(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".site-overview").css("width",`calc(100% + ${o}px)`),$(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".post-toc").css("width",`calc(100% + ${o}px)`),t(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}(),$("table").not(".gist table").wrap('<div class="table-container"></div>')});;$(document).on("DOMContentLoaded",function(){var t,e=!1,n=!0,o=CONFIG.path;0===o.length?o="search.xml":/json$/i.test(o)&&(n=!1);var r=CONFIG.root+o,a=document.getElementById("local-search-input"),i=document.getElementById("local-search-result");function s(t,e,n){var o=t.length;if(0===o)return[];var r=0,a=[],i=[];for(n||(e=e.toLowerCase(),t=t.toLowerCase());(a=e.indexOf(t,r))>-1;)i.push({position:a,word:t}),r=a+o;return i}function c(t,e,n,o,r){for(var a=o[o.length-1],i=a.position,s=a.word,c=[],l=0;i+s.length<=n&&0!==o.length;){s===r&&l++,c.push({position:i,length:s.length});var h=i+s.length;for(o.pop();0!==o.length&&(i=(a=o[o.length-1]).position,s=a.word,h>i);)o.pop()}return{hits:c,start:e,end:n,searchTextCount:l}}function l(t,e){var n="",o=e.start;return e.hits.forEach(function(e){n+=t.substring(o,e.position);var r=e.position+e.length;n+=`<b class="search-keyword">${t.substring(e.position,r)}</b>`,o=r}),n+=t.substring(o,e.end)}function h(){var e=a.value.trim().toLowerCase(),n=e.split(/[-\s]+/);n.length>1&&n.push(e);var o=[];if(e.length>0&&t.forEach(function(t){if(t.title){var r=0,a=t.title.trim(),i=a.toLowerCase(),h=t.content?t.content.trim().replace(/<[^>]+>/g,""):"";CONFIG.localsearch.unescape&&(h=String(h).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)}).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));var u=h.toLowerCase(),p=decodeURIComponent(t.url).replace(/\/{2,}/g,"/"),f=[],g=[];if(n.forEach(function(t){f=f.concat(s(t,i,!1)),g=g.concat(s(t,u,!1))}),f.length>0||g.length>0){var d=f.length+g.length;[f,g].forEach(function(t){t.sort(function(t,e){return e.position!==t.position?e.position-t.position:t.word.length-e.word.length})});var v=[];if(0!==f.length){var $=c(0,0,a.length,f,e);r+=$.searchTextCountInSlice,v.push($)}for(var C=[];0!==g.length;){var x=g[g.length-1],m=x.position,w=x.word,y=m-20,T=m+80;y<0&&(y=0),T<m+w.length&&(T=m+w.length),T>h.length&&(T=h.length);let t=c(0,y,T,g,e);r+=t.searchTextCountInSlice,C.push(t)}C.sort(function(t,e){return t.searchTextCount!==e.searchTextCount?e.searchTextCount-t.searchTextCount:t.hits.length!==e.hits.length?e.hits.length-t.hits.length:t.start-e.start});var I=parseInt(CONFIG.localsearch.top_n_per_article,10);I>=0&&(C=C.slice(0,I));var b="";0!==v.length?b+=`<li><a href="${p}" class="search-result-title">${l(a,v[0])}</a>`:b+=`<li><a href="${p}" class="search-result-title">${a}</a>`,C.forEach(function(t){b+=`<a href="${p}"><p class="search-result">${l(h,t)}...</p></a>`}),b+="</li>",o.push({item:b,searchTextCount:r,hitCount:d,id:o.length})}}}),1===n.length&&""===n[0])i.innerHTML='<div id="no-result"><i class="fa fa-search fa-5x"></i></div>';else if(0===o.length)i.innerHTML='<div id="no-result"><i class="fa fa-frown-o fa-5x"></i></div>';else{o.sort(function(t,e){return t.searchTextCount!==e.searchTextCount?e.searchTextCount-t.searchTextCount:t.hitCount!==e.hitCount?e.hitCount-t.hitCount:e.id-t.id});var r='<ul class="search-result-list">';o.forEach(function(t){r+=t.item}),r+="</ul>",i.innerHTML=r}}function u(o){$.ajax({url:r,dataType:n?"xml":"json",success:function(r){e=!0,t=n?$("entry",r).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get():r,$(".local-search-pop-overlay").remove(),$("body").css("overflow",""),o&&o()}})}function p(){$(".popup").hide(),$("#local-search-input").val(""),$(".search-result-list").remove(),$("#no-result").remove(),$(".local-search-pop-overlay").remove(),$("body").css("overflow","")}function f(){$("body").append('<div class="local-search-pop-overlay"></div>').css("overflow","hidden"),$(".local-search-pop-overlay").click(p),$(".popup").show(),$("#local-search-input").attr("autocapitalize","none").attr("autocorrect","off").focus()}CONFIG.localsearch.preload&&u(),"auto"===CONFIG.localsearch.trigger?a.addEventListener("input",h):($(".search-icon").click(h),a.addEventListener("keypress",function(t){13===t.keyCode&&h()})),$(".popup-trigger").click(function(t){t.stopPropagation(),!1===e?($("body").append('<div class="local-search-pop-overlay">\n          <div id="search-loading-icon">\n            <i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>\n          </div>\n        </div>').css("overflow","hidden"),$("#search-loading-icon").css({margin:"20% auto 0 auto","text-align":"center"}),u(f)):f()}),$(".popup-btn-close").click(p),$(".popup").click(function(t){t.stopPropagation()}),$(document).on("keyup",function(t){27===t.which&&$(".search-popup").is(":visible")&&p()})});;!function(t){"use strict";function s(e,i){this.$body=t(document.body),this.$scrollElement=t(e).is(document.body)?t(window):t(e),this.options=t.extend({},s.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function e(e){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof e&&e;o||i.data("bs.scrollspy",o=new s(this,r)),"string"==typeof e&&o[e]()})}s.VERSION="3.3.2",s.DEFAULTS={offset:10},s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var s=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var s=t(this),o=s.data("target")||s.attr("href"),r=/^#./.test(o)&&t(NexT.utils.escapeSelector(o));return r&&r.length&&r.is(":visible")&&[[r[e]().top+i,o]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){s.offsets.push(this[0]),s.targets.push(this[1])})},s.prototype.process=function(){var s,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),r=this.offsets,l=this.targets,n=this.activeTarget;if(this.scrollHeight!==i&&this.refresh(),e>=o)return n!==(s=l[l.length-1])&&this.activate(s);if(n&&e<r[0])return t(this.selector).trigger("clear.bs.scrollspy"),this.activeTarget=null,this.clear();for(s=r.length;s--;)n!==l[s]&&e>=r[s]&&(!r[s+1]||e<=r[s+1])&&this.activate(l[s])},s.prototype.activate=function(s){this.activeTarget=s,this.clear();var e=`${this.selector}[data-target="${s}"],${this.selector}[href="${s}"]`,i=t(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},s.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=e,t.fn.scrollspy.Constructor=s,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var s=t(this);e.call(s,s.data())})})}(jQuery);;!function(){!function(){var a=".post-toc",t=$(a),s=".active-current";function e(){$(a+" "+s).removeClass(s.substring(1))}t.on("activate.bs.scrollspy",function(){var s=$(a+" .active").last();e(),s.addClass("active-current"),t.scrollTop(s.offset().top-t.offset().top+t.scrollTop()-t.height()/2)}).on("clear.bs.scrollspy",e),$("body").scrollspy({target:a})}();$(".sidebar-nav li").on("click",function(){var a=$(this);if(!a.hasClass("sidebar-nav-active")){var t=$(".sidebar-panel-active"),s=$("."+a.data("target"));t.animate({opacity:0},200,function(){t.hide(),s.stop().css({opacity:0,display:"block"}).animate({opacity:1},200,function(){t.removeClass("sidebar-panel-active"),s.addClass("sidebar-panel-active")})}),a.siblings().removeClass("sidebar-nav-active"),a.addClass("sidebar-nav-active")}}),$(".post-toc a").on("click",function(a){a.preventDefault();var t=NexT.utils.escapeSelector(this.getAttribute("href")),s=$(t).offset().top;$("html, body").stop().animate({scrollTop:s},500)})}();