$(document).on("DOMContentLoaded",function(){CONFIG.back2top.enable&&NexT.utils.registerBackToTop(),NexT.utils.registerCanIUseTag(),$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav"),t=e.hasClass("site-nav-on"),o=t?"slideUp":"slideDown",i=t?"removeClass":"addClass";e.stop()[o]("fast",function(){e[i]("site-nav-on")})}),CONFIG.motion.enable?NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap():NexT.utils.updateSidebarPosition()}),$(document).on("DOMContentLoaded pjax:success",function(){if(CONFIG.save_scroll){var e=localStorage.getItem("scroll"+location.pathname);$("html, body").animate({scrollTop:e||0}),NexT.utils.saveScrollTimer=setInterval(function(){localStorage.setItem("scroll"+location.pathname,$(window).scrollTop())},1e3)}function t(e){e=e||"auto",$(".site-overview, .post-toc").css("max-height",e)}CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.mediumzoom&&window.mediumZoom(".post-body img"),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),CONFIG.copycode.enable&&NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.embeddedVideoTransformer(),function(){var e;$(window).on("resize",function(){e&&clearTimeout(e),e=setTimeout(function(){t(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())},0)});var o=NexT.utils.getScrollbarWidth();$(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".site-overview").css("width",`calc(100% + ${o}px)`),$(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".post-toc").css("width",`calc(100% + ${o}px)`),t(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}(),$("table").not(".gist table").wrap('<div class="table-container"></div>')});