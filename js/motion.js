NexT.motion={},NexT.motion.integrator={queue:[],cursor:-1,init:function(){return this.queue=[],this.cursor=-1,this},add:function(t){return this.queue.push(t),this},next:function(){this.cursor++;var t=this.queue[this.cursor];$.isFunction(t)&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}},NexT.motion.middleWares={logo:function(t){var i=[],o=$(".brand"),n=$(".custom-logo-image"),e=$(".site-title"),s=$(".site-subtitle"),r=$(".logo-line-before i"),a=$(".logo-line-after i");function u(t){return(t=Array.isArray(t)?t:[t]).every(t=>t.length>0)}function c(t,i){return{e:$(t),p:{translateX:i},o:{duration:500,sequenceQueue:!1}}}function l(){i.push({e:n,p:{opacity:1,top:0},o:{duration:200}})}o.length>0&&i.push({e:o,p:{opacity:1},o:{duration:200}}),NexT.utils.isMist()&&u([r,a])&&i.push(c(r,"100%"),c(a,"-100%")),NexT.utils.isMuse()&&u(n)&&l(),u(e)&&i.push({e:e,p:{opacity:1,top:0},o:{duration:200}}),u(s)&&i.push({e:s,p:{opacity:1,top:0},o:{duration:200}}),(NexT.utils.isPisces()||NexT.utils.isGemini())&&u(n)&&l(),i.length>0?(i[i.length-1].o.complete=function(){t.next()},$.Velocity.RunSequence(i)):t.next(),CONFIG.motion.async&&t.next()},menu:function(t){$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}}),CONFIG.motion.async&&t.next()},postList:function(t){var i=$(".post-block, .pagination, .comments"),o=CONFIG.motion.transition.post_block,n=$(".post-header"),e=CONFIG.motion.transition.post_header,s=$(".post-body"),r=CONFIG.motion.transition.post_body,a=$(".collection-title, .archive-year"),u=CONFIG.motion.transition.coll_header;if(i.length>0){var c=window.postMotionOptions||{stagger:100,drag:!0,complete:function(){t.next()}};CONFIG.motion.transition.post_block&&i.velocity("transition."+o,c),CONFIG.motion.transition.post_header&&n.velocity("transition."+e,c),CONFIG.motion.transition.post_body&&s.velocity("transition."+r,c),CONFIG.motion.transition.coll_header&&a.velocity("transition."+u,c)}(NexT.utils.isPisces()||NexT.utils.isGemini())&&t.next()},sidebar:function(t){NexT.utils.updateSidebarPosition();var i=$(".sidebar-inner"),o=CONFIG.motion.transition.sidebar;CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())&&i.velocity("transition."+o,{display:null,duration:200,complete:function(){i.css("transform","initial")}}),t.next()}};