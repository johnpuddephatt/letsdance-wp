"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[742],{781:function(e,n,t){var o=t(69),i=t.n(o),r=t(931),c=t.n(r),a=t(306),s=t(18);function d(e){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var n={threshold:[.1]},t=function(e){var n;(n=e.classList).add.apply(n,["transform","!delay-0","!duration-0"].concat((0,s.Z)(e.dataset.aosClass.trim().split(" "))));var t=e.querySelector("img");t.complete?setTimeout((function(){e.classList.remove("!duration-0","!delay-0"),o.observe(e)}),50):t.addEventListener("load",(function(){e.classList.remove("!duration-0","!delay-0"),o.observe(e)}))},o=new IntersectionObserver((function(e,t){e.forEach((function(e){var o,i;e.intersectionRatio>=(null!==(o=e.target.dataset["aos-ratio"])&&void 0!==o?o:n.threshold)&&((i=e.target.classList).remove.apply(i,(0,s.Z)(e.target.dataset.aosClass.trim().split(" "))),t.unobserve(e.target))}))}),n);e instanceof NodeList?e.forEach((function(e){t(e)})):t(e)}}var u=t(689);function l(e){var n=document.getElementById(window.innerWidth>window.innerHeight?"hero-image-slider":"hero-image-slider-portrait");n.classList.add("transition"),n.classList.remove("opacity-0");var t=u.getSlider({container:n,prop:"opacity",init:0,show:1,end:0,unit:"",duration:.6,delay:2,class:{slide:"inset-0"}});t.pause(),setTimeout((function(){t.resume()}),e.withLoadingScreen?2e3:0)}function f(){document.querySelectorAll(".wp-block-image").forEach((function(e){e.classList.add("duration-1000","transform"),e.dataset.aosClass="opacity-0 translate-y-16",d(e)}))}window.Alpine=a.Z,window.Alpine=a.Z,a.Z.start(),window.barba=i(),i().use(c()),document.body.addEventListener("keyup",(function(e){9===e.which&&document.body.classList.remove("no-focus-outline")})),i().hooks.beforeEnter((function(e){e.next.container&&("standard"!=e.next.namespace||"project"!=e.current.namespace&&"post"!=e.current.namespace)&&d(e.next.container.querySelectorAll("[data-aos]"))})),i().init({debug:!0,timeout:5e3,views:[{namespace:"home",beforeEnter:function(){document.querySelector(".home-wrapper").style.height=window.innerHeight+"px",function(e){if(e.withLoadingScreen)document.addEventListener("DOMContentLoaded",(function(){a.Z.store("siteLoading",!0),a.Z.start()}));else{var n=document.querySelector(window.innerWidth>window.innerHeight?"#hero-image-slider":"#hero-image-slider-portrait");n.classList.add("opacity-0");for(var t=n.children.length;t>=0;t--)n.appendChild(n.children[Math.random()*t|0])}var o=0,i=document.querySelectorAll(window.innerWidth>window.innerHeight?"#hero-image-slider img":"#hero-image-slider-portrait img"),r=!1,c=function(){o>=i.length&&0==r&&(r=!0,e.withLoadingScreen?setTimeout((function(){a.Z.store("siteLoading",!1),a.Z.start(),document.documentElement.classList.remove("overflow-hidden","pointer-events-none"),l(e)}),4e3):l(e))};i.forEach((function(e){e.complete?(o++,c()):e.addEventListener("load",(function(){o++,c()}))}))}({withLoadingScreen:!i().history.previous})}},{namespace:"simple",beforeEnter:function(){document.querySelector(".simple-wrapper").style.minheight=window.innerHeight+"px"}}],transitions:[{name:"slide-right",sync:!0,once:function(){},leave:function(){},enter:function(){},to:{namespace:"simple"}},{name:"slide-up",sync:!0,once:function(){},leave:function(){},beforeEnter:function(){},from:{namespace:"home"},to:{namespace:["index","standard"]}},{name:"slide-down",sync:!0,once:function(){},leave:function(){},enter:function(){},from:{namespace:["project","standard","index"]},to:{namespace:"home"}},{name:"slide-left",sync:!0,once:function(){},leave:function(){},enter:function(){},from:{namespace:"simple"}},{name:"project-open",sync:!0,once:function(){},leave:function(){},enter:function(){},beforeOnce:function(){f()},before:function(e){e.current.container.style.top=-document.documentElement.scrollTop+"px"},beforeEnter:function(e){e.next.container.style.top="-".concat(document.getElementById("site-header").clientHeight,"px"),f(),document.querySelectorAll(".alignfull > img").forEach((function(e){e.setAttribute("sizes","100vw")})),document.querySelectorAll(".alignwide > img").forEach((function(e){e.setAttribute("sizes","(min-width: 1280px) 1280px, 100vw")})),document.querySelectorAll(".wp-block-gallery.alignwide img").forEach((function(e){e.setAttribute("sizes","(min-width: 1280px) 640px, 50vw")}))},afterEnter:function(e){document.documentElement.scrollTop=document.getElementById("site-header").clientHeight,e.next.container.style.top="0px",document.body.style.overflowY="scroll"},to:{namespace:["project","post"]},from:{namespace:["index"]}},{name:"project-close",sync:!0,once:function(){},leave:function(){},enter:function(){},beforeOnce:function(){},before:function(e){},beforeEnter:function(e){},afterEnter:function(e){},afterLeave:function(e){},from:{namespace:["project","post"]},to:{namespace:["index"]}}]})},255:function(){},88:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[126,692,941],(function(){return n(781),n(255),n(88)}));e.O()}]);
//# sourceMappingURL=app.js.map