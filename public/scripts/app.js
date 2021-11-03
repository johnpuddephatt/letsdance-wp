"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[742],{833:function(e,t,n){var o=n(69),r=n.n(o),i=n(931),c=n.n(i),a=n(306),s=n(18);function u(e){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var t={threshold:[.1]},n=function(e){var t;(t=e.classList).add.apply(t,["transform","!delay-0","!duration-0"].concat((0,s.Z)(e.dataset.aosClass.trim().split(" ")))),setTimeout((function(){e.classList.remove("!duration-0","!delay-0"),o.observe(e)}),150)},o=new IntersectionObserver((function(e,n){e.forEach((function(e){var o,r;e.intersectionRatio>=(null!==(o=e.target.dataset["aos-ratio"])&&void 0!==o?o:t.threshold)&&((r=e.target.classList).remove.apply(r,(0,s.Z)(e.target.dataset.aosClass.trim().split(" "))),n.unobserve(e.target))}))}),t);e instanceof NodeList?e.forEach((function(e){console.log("fade in..."),n(e)})):n(e)}}var d=n(689);function l(e){var t=d.getSlider({container:document.getElementById(window.innerWidth>window.innerHeight?"hero-image-slider":"hero-image-slider-portrait"),prop:"opacity",init:0,show:1,end:0,unit:"",duration:.6,delay:2,class:{slide:"inset-0"}});e.withLoadingScreen||t.change(Math.floor(Math.random()*document.querySelectorAll("#hero-image-slider img").length+1))}function m(e,t){var n="create"==e.mode?document.createElement("img"):document.querySelector(".project-image-mask");if(n){var o,r;"create"==e.mode&&(n.src=e.target.src,n.classList.add("project-image-mask","block","rounded","border","border-gray-50","transition-all","duration-[750ms]","fixed","z-[99999]")),o="update"==e.mode?"project-open"==e.transition?-document.body.clientWidth:document.body.clientWidth:0,"update"==e.mode&&"project-close"==e.transition&&(r=e.target.parentNode.offsetTop,t.next.container.style.top="-".concat(r-document.querySelector("main header").clientHeight,"px"));var i=e.target.getBoundingClientRect();n.style.left=i.x+o+"px",n.style.top=i.y+"px",n.style.width=i.width+"px",n.style.height=i.height+"px","create"==e.mode&&document.body.append(n),setTimeout((function(){e.target.style.visibility="hidden"}),100)}}function f(){document.querySelectorAll(".alignfull > img").forEach((function(e){e.setAttribute("sizes","100vw")})),document.querySelectorAll(".alignwide > img").forEach((function(e){e.setAttribute("sizes","(min-width: 1280px) 1280px, 100vw")})),document.querySelectorAll(".wp-block-gallery.alignwide img").forEach((function(e){e.setAttribute("sizes","(min-width: 1280px) 640px, 50vw")}))}function p(){document.querySelectorAll(".wp-block-image img").forEach((function(e){e.classList.add("duration-1000","transform"),e.dataset.aosClass="opacity-0 translate-y-16",u(e)}))}window.Alpine=a.Z,window.Alpine=a.Z,a.Z.start(),window.barba=r(),r().use(c()),document.body.addEventListener("keyup",(function(e){9===e.which&&document.body.classList.remove("no-focus-outline")})),r().hooks.beforeEnter((function(e){!e.next.container||"standard"==e.next.namespace&&"project"==e.current.namespace||u(e.next.container.querySelectorAll("[data-aos]"))})),r().init({debug:!1,views:[{namespace:"home",beforeEnter:function(){document.documentElement.classList.add("h-fill"),function(e){e.withLoadingScreen&&document.addEventListener("DOMContentLoaded",(function(){a.Z.store("siteLoading",!0),a.Z.start()}));var t=0,n=document.querySelectorAll(window.innerWidth>window.innerHeight?"#hero-image-slider img":"#hero-image-slider-portrait img"),o=!1,r=function(){t>=n.length&&0==o&&(o=!0,e.withLoadingScreen?setTimeout((function(){a.Z.store("siteLoading",!1),a.Z.start(),document.documentElement.classList.remove("overflow-hidden","pointer-events-none"),setTimeout((function(){l(e)}),3e3)}),4e3):l(e))};n.forEach((function(e){e.complete?(t++,r()):e.addEventListener("load",(function(){t++,r()}))}))}({withLoadingScreen:!r().history.previous})}}],transitions:[{name:"slide-right",sync:!0,once:function(){},leave:function(){},enter:function(){},to:{namespace:"simple"}},{name:"slide-up",sync:!0,once:function(){},leave:function(){},beforeEnter:function(){},from:{namespace:"home"},to:{namespace:"standard"}},{name:"slide-down",sync:!0,once:function(){},leave:function(){},enter:function(){},from:{namespace:["project","standard"]},to:{namespace:"home"}},{name:"slide-left",sync:!0,once:function(){},leave:function(){},enter:function(){},from:{namespace:"simple"}},{name:"project-open",sync:!0,once:function(){},leave:function(){},enter:function(){},beforeOnce:function(){p()},before:function(e){e.next.container.style.transform="translate-x(99999px)",e.current.container.style.top=-document.documentElement.scrollTop+"px",f();var t=e.trigger.classList&&e.trigger.classList.contains("project-item")?e.trigger.querySelector("img"):document.querySelector('a[href*="'.concat(e.next.url.href,'"] img'));t&&m({target:t,mode:"create",transition:"project-open"},e)},beforeEnter:function(e){p(),f(),m({target:document.querySelector(".project-template--featured-image"),mode:"update",transition:"project-open"},e)},afterEnter:function(){document.querySelector(".project-template--featured-image").style.visibility="visible",document.querySelector(".project-image-mask").remove()},to:{namespace:"project"}},{name:"project-close",sync:!0,once:function(){},leave:function(){},enter:function(){},before:function(e){m({target:document.querySelector(".project-template--featured-image"),mode:"create",transition:"project-close"})},beforeEnter:function(e){m({target:document.querySelector('a[href*="'.concat(e.current.url.path,'"] img')),mode:"update",transition:"project-close"},e)},afterEnter:function(e){var t=document.querySelector('a[href*="'.concat(e.current.url.path,'"] img'));document.documentElement.scrollTop=t.parentNode.offsetTop-document.querySelector("main header").clientHeight,t.style.visibility="visible",document.querySelector(".project-image-mask").remove()},from:{namespace:"project"}}]})},255:function(){},88:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[126,692,941],(function(){return t(833),t(255),t(88)}));e.O()}]);
//# sourceMappingURL=app.js.map