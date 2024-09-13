!function(){"use strict";var t=window.VAMTAM=window.VAMTAM||{},n=(t.debounce=function(i,a,o){var r;return function(){var e=this,t=arguments,n=o&&!r;clearTimeout(r),r=setTimeout(function(){r=null,o||i.apply(e,t)},a),n&&i.apply(e,t)}},t.offset=function(e){var e=e.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+n,left:e.left+t}},t.scroll_handlers=[],t.latestKnownScrollY=0,!1);t.addScrollHandler=function(e){requestAnimationFrame(function(){e.init(),t.scroll_handlers.push(e),e.measure(t.latestKnownScrollY),e.mutate(t.latestKnownScrollY)})},t.onScroll=function(){t.latestKnownScrollY=window.pageYOffset,n||(n=!0,requestAnimationFrame(function(){for(var e=0;e<t.scroll_handlers.length;e++)t.scroll_handlers[e].measure(t.latestKnownScrollY);for(e=0;e<t.scroll_handlers.length;e++)t.scroll_handlers[e].mutate(t.latestKnownScrollY);n=!1}))},window.addEventListener("scroll",t.onScroll,{passive:!0}),t.load_script=function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,t&&(n.onload=t),document.getElementsByTagName("script")[0].before(n)},t.load_style=function(e,t,n,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.media=t,a.href=e,n&&(a.onload=n),i?i.after(a):document.getElementsByTagName("link")[0].before(a)},t.isBelowMaxDeviceWidth=function(){return!window.matchMedia("(min-width: "+VAMTAM_FRONT.max_breakpoint+"px)").matches},t.isMaxDeviceWidth=function(){return window.matchMedia("(min-width: "+VAMTAM_FRONT.max_breakpoint+"px)").matches},t.isMediumDeviceOrWider=function(){return window.matchMedia("(min-width: "+VAMTAM_FRONT.medium_breakpoint+"px)").matches},t.isMobileBrowser=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&2<navigator.maxTouchPoints;let i=!(t.getScrollbarWidth=()=>window.innerWidth-document.documentElement.clientWidth);t.waitForLoad=function(e){i?e():window.addEventListener("load",e)},window.addEventListener("load",function(){i=!0})}(),function(a,o){"use strict";function r(){clearTimeout(e),e=setTimeout(n,200)}function s(n,e,i){requestAnimationFrame(function(){var e=n.offset().top,t=(o.blockStickyHeaderAnimation=!0,d.height()||0),e=e-o.adminBarHeight-t;l=i,window.addEventListener("scroll",r,{passive:!0}),window.scroll({left:0,top:e,behavior:"smooth"}),n.attr("id")&&(history.pushState?history.pushState(null,null,"#"+n.attr("id")):window.location.hash=n.attr("id")),c&&c.classList.remove("mega-menu-open"),m&&m.classList.remove("mega-menu-open")})}var e,l,t,d=a("header.main-header").find(".header-contents"),c=document.getElementById("vamtam-fallback-main-menu-toggle"),m=document.querySelector("#main-menu > .mega-menu-wrap > .mega-menu-toggle"),n=function(){window.removeEventListener("scroll",r,{passive:!0}),o.blockStickyHeaderAnimation=!1,l&&l()};a(document.body).on("click",".vamtam-animated-page-scroll[href], .vamtam-animated-page-scroll [href], .vamtam-animated-page-scroll [data-href]",function(e){var t=a(this).prop("href")||a(this).data("href"),n=a("#"+t.split("#")[1]),i=document.createElement("a");i.href=t,n.length&&i.pathname===window.location.pathname&&(c&&c.classList.remove("mega-menu-open"),m&&m.classList.remove("mega-menu-open"),s(n),e.preventDefault())}),""!==window.location.hash&&(a('.vamtam-animated-page-scroll[href*="'+window.location.hash+'"]').length||a('.vamtam-animated-page-scroll [href*="'+window.location.hash+'"]').length||a('.vamtam-animated-page-scroll [data-href*="'+window.location.hash+'"]').length)&&(0<(t=a(window.location.hash)).length&&a(window).add("html, body, #page").scrollTop(0),setTimeout(function(){s(t)},400))}(jQuery,window.VAMTAM),function(r){"use strict";window.VAMTAM=window.VAMTAM||{},r(function(){var e,t;window.VAMTAM.adminBarHeight=document.body.classList.contains("admin-bar")?32:0,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&requestAnimationFrame(function(){document.documentElement.classList.add("ios-safari")}),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&requestAnimationFrame(function(){document.documentElement.classList.add("safari")}),t=document.body,window.addEventListener("scroll",function(){clearTimeout(e),requestAnimationFrame(function(){t.classList.add("disable-hover"),e=setTimeout(function(){t.classList.remove("disable-hover")},300)})},{passive:!0}),document.addEventListener("click",function(e){e.target.closest(".vamtam-trigger-print")&&(window.print(),e.preventDefault())}),window.VAMTAM.resizeElements=function(){r("#page .media-inner,\t\t\t\t.wp-block-embed-vimeo:not(.wp-has-aspect-ratio),\t\t\t\t:not(.wp-block-embed__wrapper) > .vamtam-video-frame").find("iframe, object, embed, video").each(function(){setTimeout(function(){requestAnimationFrame(function(){var e=this.offsetWidth;this.style.width="100%","0"===this.width&&"0"===this.height?this.style.height=9*e/16+"px":this.style.height=this.height*e/this.width+"px",r(this).trigger("vamtam-video-resized")}.bind(this))}.bind(this),50)}),setTimeout(function(){requestAnimationFrame(function(){r(".mejs-time-rail").css("width","-=1px")})},100)},window.addEventListener("resize",window.VAMTAM.debounce(window.VAMTAM.resizeElements,100),!1),window.VAMTAM.resizeElements(),r(document).ajaxSuccess(function(e,t,n){"wishlist_remove"===n.data.split("&").map(e=>e.split("=")).reduce((e,t)=>(e[t[0]]=t[1],e),{}).action&&1===(n=JSON.parse(t.responseText)).status&&0===n.count&&(r(".vamtam-empty-wishlist-notice").show(),r("table.woosw-items").hide())})});function e(){function e(){var e=window.VAMTAM.isBelowMaxDeviceWidth();a!==e&&(i.forEach(function(e){e.isActive&&e.closeTrigger.click()}),a=e)}function n(e){var t=e.currentTarget;if(r(t).hasClass("elementor-menu-toggle")){var e=r(t).closest(".elementor-row");if((e=e.length?e:r(t).closest(".elementor-container")).hasClass("vamtam-menu-nav-overlay-inside")||(e.addClass("vamtam-menu-nav-overlay-inside"),r(e).find(".vamtam-overlay-element").css("top",r(e)[0].getBoundingClientRect().top+r(e).height()+"px")),e.hasClass("vamtam-overlay-trigger--overlay"))return;e.addClass("vamtam-overlay-trigger--overlay"),i.forEach(function(e){e.overlayTarget!==t&&e.closeTrigger!==t||(e.isActive=!0)})}r("html, body").addClass("vamtam-disable-scroll"),r("#scroll-to-top").addClass("hidden"),r(e=t).hasClass("elementor-menu-toggle")&&(e.removeEventListener("click",o),e.addEventListener("click",o))}var t=document.querySelectorAll(".vamtam-overlay-trigger"),i=[],a=window.VAMTAM.isBelowMaxDeviceWidth(),o=function(e){var t=e.currentTarget;r(t).hasClass("elementor-menu-toggle")&&(e=(e=r(t).closest(".elementor-row")).length?e:r(t).closest(".elementor-container")).hasClass("vamtam-overlay-trigger--overlay")&&(e.removeClass("vamtam-overlay-trigger--overlay"),t.removeEventListener("click",o),i.forEach(function(e){e.overlayTarget!==t&&e.closeTrigger!==t||(e.isActive=!1)})),r(".vamtam-overlay-trigger--overlay .vamtam-overlay-element:visible").length<2&&(r("html, body").removeClass("vamtam-disable-scroll"),r("#scroll-to-top").removeClass("hidden"))};t.forEach(function(e){var t;r(e).hasClass("elementor-widget-nav-menu")&&((t=r(e).find(".elementor-menu-toggle")[0]).removeEventListener("click",n),t.addEventListener("click",n),i.push({overlayTarget:e,closeTrigger:t,isActive:!1}),(t=r(e).closest(".elementor-row")).length||(t=r(e).closest(".elementor-container")),r('<span class="vamtam-overlay-element"></span>').appendTo(t))}),t.length&&(document.addEventListener("click",function(t){i.forEach(function(e){!e.isActive||t.target===e.overlayTarget||e.overlayTarget.contains(t.target)||e.closeTrigger.click()})},!0),window.addEventListener("resize",window.VAMTAM.debounce(e,200),!1))}document.addEventListener("DOMContentLoaded",function(){window.VAMTAM.load_script(VAMTAM_FRONT.jspath+"low-priority.js"),e(),jQuery("html").css("--vamtam-scrollbar-width",window.VAMTAM.getScrollbarWidth()+"px")},{passive:!0})}(jQuery),function(v){"use strict";window.VAMTAM=window.VAMTAM||{},window.VAMTAM.CUSTOM_ANIMATIONS={},window.VAMTAM.CUSTOM_ANIMATIONS={init:function(){},onDomReady:function(){this.VamtamCustomAnimations.init(),this.VamtamCustomAnimations.scrollBasedAnims()},VamtamCustomAnimations:{init:function(){this.registerAnimations(),this.utils.watchScrollDirection()},registerAnimations:function(){var t=this;["cursorAnimation"].forEach(function(e){t[e].apply(t)})},stickyHeader:function(){var i=v(".vamtam-sticky-header"),a=this;if(i.length){1<i.length&&(i=i[0]);{function o(){v(i).removeClass("vamtam-sticky-header--fixed-shown"),v(i).hasClass("vamtam-sticky-header--fixed-hidden")||v(i).addClass("vamtam-sticky-header--fixed-hidden"),l="fixedHiddenState"}function r(){v(i).removeClass("vamtam-sticky-header--fixed-hidden"),v(i).hasClass("vamtam-sticky-header--fixed-shown")||v(i).addClass("vamtam-sticky-header--fixed-shown"),l="fixedShownState"}function s(){v(i).removeClass("vamtam-sticky-header--fixed-shown"),v(i).removeClass("vamtam-sticky-header--fixed-hidden"),l="noAnimState"}var l,e,t,n,d=v(i).hasClass("vamtam-sticky-header--transparent-header"),c=v(i).innerHeight();e=v("body").css("padding-left"),t=v("body").css("padding-right"),(n=v(i).parents('[data-elementor-type="header"]').first()).length&&(parseInt(e)&&n.css("--vamtam-sticky-mleft","-"+e),parseInt(t))&&n.css("--vamtam-sticky-mright","-"+t);const w=(e=!1)=>{10<=window.pageYOffset?o():e||window.addEventListener("load",function(){l||setTimeout(()=>{w(!0)},10)})};w();var m,u=null,h=window.scrollY;window.addEventListener("scroll",function(n){null!==u&&clearTimeout(u),u=setTimeout(function(){h=window.scrollY},500);var e=window.VAMTAM.debounce(function(){var e,t;"#document"===n.target.nodeName&&(v(i).find("a:hover").length||v(".vamtam-header-mega-menu:visible").length?d&&"fixedShownState"!==l&&r():(e=a.utils.getScrollDirection(),m!==e&&(h=window.scrollY),m=e,t=Math.abs(window.scrollY-h),window.scrollY>c&&t<20||("up"===e?10<=window.pageYOffset?"fixedShownState"!==l&&r():"noAnimState"!==l&&s():"down"===e&&(10<=window.pageYOffset||d)&&(t=!v(i).find(".elementor-menu-cart--shown").length,"fixedHiddenState"!==l)&&t&&o())))},25);window.VAMTAM.isMaxDeviceWidth()?requestAnimationFrame(e):"noAnimState"!==l&&s()},{passive:!0})}}},scrollBasedAnims:function(){var e=document.querySelectorAll(['[data-settings*="growFromLeftScroll"]','[data-settings*="growFromRightScroll"]'].join(", "));if(e.length){var i,l={},d=this,a=function(e){e.forEach(function(e){function t(){window.requestAnimationFrame(function(){s.style.setProperty("--vamtam-scroll-ratio",o+"%")})}var n=e.boundingClientRect.y,i=e.isIntersecting,a=e.target,o=Math.abs(parseFloat((100*e.intersectionRatio).toFixed(2))),e=l[a.dataset.vamtam_anim_id].lastScrollPercentage,r=l[a.dataset.vamtam_anim_id].lastScrollY,s=l[a.dataset.vamtam_anim_id].animateEl;i&&r!==n&&("down"!==d.utils.getScrollDirection()||e<o)&&t(),l[a.dataset.vamtam_anim_id].lastScrollY=n,l[a.dataset.vamtam_anim_id].lastScrollPercentage=o})};const o=function(){for(var e=[],t=1;t<=50;t++)e.push(t/50);return e.push(0),e}();e.forEach(function(e){var t,n;i||(n={root:null,rootMargin:"20% 0% 20% 0%",threshold:o},i=new IntersectionObserver(a,n)),e.style.setProperty("--vamtam-scroll-ratio","1%"),e.classList.contains("elementor-widget")||e.classList.contains("elementor-column")?(t=e.parentElement).setAttribute("data-vamtam_anim_id",e.dataset.id):(v(e).before('<div class="vamtam-scroll-anim-wrap" data-vamtam_anim_id="'+e.dataset.id+'"></div>'),n=v(e).prev(".vamtam-scroll-anim-wrap"),v(n).append(e),t=n[0]),l[e.dataset.id]={lastScrollY:"",lastScrollPercentage:"",observeEl:t,animateEl:e},i.observe(t)})}},cursorAnimation:function(){if("elementorFrontend"in window&&"isEditMode"in window.elementorFrontend&&!window.elementorFrontend.isEditMode()&&!this.utils.isTouchDevice()&&!v("body").filter(".no-theme-cursor").length&&"elementorFrontendConfig"in window&&window.elementorFrontendConfig.kit.vamtam_theme_has_theme_cursor){v("body").append('<span id="mouseDot" class="mouse-dot"></span>').addClass("has-mouse-dot");var s=v("#mouseDot"),t=0,n=0,e=0,i=0;v(document).on("mousemove mouseenter pointermove",e=>{e=e,window.VAMTAM.isBelowMaxDeviceWidth()||(t=e.clientX,n=e.clientY)}),window.requestAnimationFrame(function(){setInterval(function(){e+=(t-e)/6,i+=(n-i)/6,s.css({transform:"translate("+e+"px, "+i+"px)"})},20)});v(document).on("mouseover",window.VAMTAM.debounce(function(e){let t,n,i;var a,o=v(e.target),r=o[0];e.target.href?t=!0:"IFRAME"===e.target.tagName?n=!0:(o.parent("a[href]").length&&(t=!0),o.closest("a.elementor-button-link[href]").length&&(t=!0),a=(o=(e=o.filter(".swiper-wrapper").length)?[]:o.closest(".swiper-wrapper")).length,(e||a)&&(console.log("swiper"),(a=e?r:o[0]).scrollWidth>a.clientWidth||a.scrollWidth>window.innerWidth)&&(i=!0)),t?window.requestAnimationFrame(function(){s.addClass("over-link")}):window.requestAnimationFrame(function(){s.removeClass("over-link")}),n?window.requestAnimationFrame(function(){s.addClass("over-iframe")}):window.requestAnimationFrame(function(){s.removeClass("over-iframe")}),i?window.requestAnimationFrame(function(){s.addClass("over-swiper")}):window.requestAnimationFrame(function(){s.removeClass("over-swiper")})},100))}},utils:{getAdminBarHeight:function(){return window.VAMTAM.adminBarHeight},watchScrollDirection:function(){var e=function(){return this.lastScrollTop=0,this.utils=this,{init:function(){},measure:function(e){this.direction=e>this.lastScrollTop?"down":"up"}.bind(this),mutate:function(e){this.utils.getScrollDirection=function(){return this.direction},this.lastScrollTop=e<=0?0:e}.bind(this)}}.bind(this);window.VAMTAM.addScrollHandler(e())},isTouchDevice:function(){var e=" -webkit- -moz- -o- -ms- ".split(" ");return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)||(e=["(",e.join("touch-enabled),("),"heartz",")"].join(""),window.matchMedia(e).matches)}}}},window.VAMTAM.CUSTOM_ANIMATIONS.init(),document.addEventListener("DOMContentLoaded",function(){window.VAMTAM.CUSTOM_ANIMATIONS.onDomReady()},!0)}(jQuery);