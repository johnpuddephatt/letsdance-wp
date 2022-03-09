"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[742],{833:function(e,t,n){var o=n(69),r=n.n(o),i=n(931),a=n.n(i),c=n(306),s=n(18);function d(e){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var t={threshold:[.1]},n=function(e){var t;(t=e.classList).add.apply(t,["transform","!delay-0","!duration-0"].concat((0,s.Z)(e.dataset.aosClass.trim().split(" "))));var n=e.querySelector("img");n.complete?setTimeout((function(){e.classList.remove("!duration-0","!delay-0"),o.observe(e)}),50):n.addEventListener("load",(function(){e.classList.remove("!duration-0","!delay-0"),o.observe(e)}))},o=new IntersectionObserver((function(e,n){e.forEach((function(e){var o,r;e.intersectionRatio>=(null!==(o=e.target.dataset["aos-ratio"])&&void 0!==o?o:t.threshold)&&((r=e.target.classList).remove.apply(r,(0,s.Z)(e.target.dataset.aosClass.trim().split(" "))),n.unobserve(e.target))}))}),t);e instanceof NodeList?e.forEach((function(e){n(e)})):n(e)}}var l=n(689);function u(e){var t=document.getElementById(window.innerWidth>window.innerHeight?"hero-image-slider":"hero-image-slider-portrait");t.classList.add("transition"),t.classList.remove("opacity-0");var n=l.getSlider({container:t,prop:"opacity",init:0,show:1,end:0,unit:"",duration:.6,delay:2,class:{slide:"inset-0"}});n.pause(),setTimeout((function(){n.resume()}),e.withLoadingScreen?2e3:0)}function m(e,t){var n="create"==e.mode?document.createElement("img"):document.querySelector(".project-image-mask");if(n="create"==e.mode?document.createElement("img"):document.querySelector(".project-image-mask")){var o,r;"create"==e.mode&&(n.src=e.target.currentSrc,n.classList.add("project-image-mask","block","rounded","delay-200","border","border-gray-50","transition-all","duration-[500ms]","fixed","z-[99999]")),o="update"==e.mode?"project-open"==e.transition?-document.body.clientWidth:document.body.clientWidth:0,e.target&&"update"==e.mode&&"project-close"==e.transition&&(console.log(e.target.parentNode),console.log("modY: ",e.target.parentNode.offsetTop),console.log("main header: ",document.querySelector("main header").clientHeight),r=e.target.parentNode.offsetTop,t.next.container.style.top="-".concat(r-document.querySelector("main header").clientHeight,"px"));var i=e.target?e.target.getBoundingClientRect():DOMRect.fromRect({x:0,y:200,width:600,height:300});n.style.left=i.x+o+"px",n.style.top=i.y+"px",n.style.width=i.width+"px",n.style.height=i.height+"px","create"==e.mode&&document.body.append(n),e.target&&setTimeout((function(){e.target.style.visibility="hidden"}),100)}}function p(){document.querySelectorAll(".alignfull > img").forEach((function(e){e.setAttribute("sizes","100vw")})),document.querySelectorAll(".alignwide > img").forEach((function(e){e.setAttribute("sizes","(min-width: 1280px) 1280px, 100vw")})),document.querySelectorAll(".wp-block-gallery.alignwide img").forEach((function(e){e.setAttribute("sizes","(min-width: 1280px) 640px, 50vw")}))}function f(){document.querySelectorAll(".wp-block-image").forEach((function(e){e.classList.add("duration-1000","transform"),e.dataset.aosClass="opacity-0 translate-y-16",d(e)}))}window.Alpine=c.Z,window.Alpine=c.Z,c.Z.start(),window.barba=r(),r().use(a()),document.body.addEventListener("keyup",(function(e){9===e.which&&document.body.classList.remove("no-focus-outline")})),r().hooks.beforeEnter((function(e){e.next.container&&("standard"!=e.next.namespace||"project"!=e.current.namespace&&"post"!=e.current.namespace)&&d(e.next.container.querySelectorAll("[data-aos]"))})),r().init({debug:!0,views:[{namespace:"home",beforeEnter:function(){document.querySelector(".home-wrapper").style.height=window.innerHeight+"px",function(e){if(e.withLoadingScreen)document.addEventListener("DOMContentLoaded",(function(){c.Z.store("siteLoading",!0),c.Z.start()}));else{var t=document.querySelector(window.innerWidth>window.innerHeight?"#hero-image-slider":"#hero-image-slider-portrait");t.classList.add("opacity-0");for(var n=t.children.length;n>=0;n--)t.appendChild(t.children[Math.random()*n|0])}var o=0,r=document.querySelectorAll(window.innerWidth>window.innerHeight?"#hero-image-slider img":"#hero-image-slider-portrait img"),i=!1,a=function(){o>=r.length&&0==i&&(i=!0,e.withLoadingScreen?setTimeout((function(){c.Z.store("siteLoading",!1),c.Z.start(),document.documentElement.classList.remove("overflow-hidden","pointer-events-none"),u(e)}),4e3):u(e))};r.forEach((function(e){e.complete?(o++,a()):e.addEventListener("load",(function(){o++,a()}))}))}({withLoadingScreen:!r().history.previous})}},{namespace:"simple",beforeEnter:function(){document.querySelector(".simple-wrapper").style.minheight=window.innerHeight+"px"}}],transitions:[{name:"slide-right",sync:!0,once:function(){},leave:function(){},enter:function(){},to:{namespace:"simple"}},{name:"slide-up",sync:!0,once:function(){},leave:function(){},beforeEnter:function(){},from:{namespace:"home"},to:{namespace:"standard"}},{name:"slide-down",sync:!0,once:function(){},leave:function(){},enter:function(){},from:{namespace:["project","standard"]},to:{namespace:"home"}},{name:"slide-left",sync:!0,once:function(){},leave:function(){},enter:function(){},from:{namespace:"simple"}},{name:"project-open",sync:!0,once:function(){},leave:function(){},enter:function(){},beforeOnce:function(){f()},before:function(e){p();var t=e.trigger.classList&&(e.trigger.classList.contains("project-item")||e.trigger.classList.contains("post-item"))?e.trigger.querySelector("img"):document.querySelector('a[href*="'.concat(e.next.url.href,'"] img'));t&&m({target:t,mode:"create",transition:"project-open"},e)},beforeEnter:function(e){e.next.container.style.top="-".concat(document.getElementById("site-header").clientHeight,"px"),f(),p(),m({target:document.querySelector(".".concat(e.next.namespace,"-template--featured-image")),mode:"update",transition:"project-open"})},afterEnter:function(e){e.next.container.style.top="0px",document.documentElement.scrollTop=document.getElementById("site-header").clientHeight;var t=document.querySelector(".".concat(e.next.namespace,"-template--featured-image"));t?t.complete?(t.style.visibility="visible",document.querySelector(".project-image-mask").remove()):t.addEventListener("load",(function(){t.style.visibility="visible",document.querySelector(".project-image-mask").remove()})):document.querySelector(".project-image-mask").remove()},to:{namespace:["project","post"]},from:{namespace:["standard"]}},{name:"project-close",sync:!0,once:function(){},leave:function(){},enter:function(){},before:function(e){m({target:document.querySelector(".".concat(e.current.namespace,"-template--featured-image")),mode:"create",transition:"project-close"})},beforeEnter:function(e){m({target:document.querySelector('a[href*="'.concat(e.current.url.path,'"] img')),mode:"update",transition:"project-close"},e)},afterEnter:function(e){var t=document.querySelector(".project-image-mask"),n=document.querySelector('a[href*="'.concat(e.current.url.path,'"] img'));if(document.documentElement.scrollTop=n?n.parentNode.offsetTop-document.querySelector("main header").clientHeight:0,!t)return null;n?n.complete?(n.style.visibility="visible",t.remove()):n.addEventListener("load",(function(){n.style.visibility="visible",t.remove()})):t.remove()},from:{namespace:["project","post"]},to:{namespace:["standard"]}}]})},255:function(){},88:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[126,692,941],(function(){return t(833),t(255),t(88)}));e.O()}]);
//# sourceMappingURL=app.js.map