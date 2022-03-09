// External modules
import barba from "@barba/core";
import barbaCss from "@barba/css";
import Alpine from "alpinejs";
// // Internal Modules
import aos from "./modules/aos";
import slideShow from "./modules/slideshow";
import imageMask from "./modules/imageMask";
import fixSizesAttribute from "./modules/fixSizesAttribute";
import fadeInProjectImages from "./modules/fadeInProjectImages";
// import addPlayButtonToVideos from './modules/addPlayButtonToVideos';

window.Alpine = Alpine;
Alpine.start();

window.barba = barba;
barba.use(barbaCss);

document.body.addEventListener("keyup", function (e) {
  if (e.which === 9) {
    document.body.classList.remove("no-focus-outline");
  }
});

barba.hooks.beforeEnter((data) => {
  // don't run aos when exiting a single project/post page – it conflicts with the image Mask!
  if (
    data.next.container &&
    !(
      data.next.namespace == "standard" &&
      (data.current.namespace == "project" || data.current.namespace == "post")
    )
  ) {
    aos(data.next.container.querySelectorAll("[data-aos]"));
  }
});

barba.init({
  debug: true,
  views: [
    {
      namespace: "home",
      beforeEnter() {
        document.querySelector(".home-wrapper").style.height =
          window.innerHeight + "px";
        slideShow({
          withLoadingScreen: !barba.history.previous,
        });
      },
    },
    {
      namespace: "simple",
      beforeEnter() {
        document.querySelector(".simple-wrapper").style.minheight =
          window.innerHeight + "px";
      },
    },
  ],
  transitions: [
    {
      name: "slide-right",
      sync: true,
      once() {},
      leave() {},
      enter() {},
      to: {
        namespace: "simple",
      },
    },
    {
      name: "slide-up",
      sync: true,
      once() {},
      leave() {},
      beforeEnter() {},
      from: {
        namespace: "home",
      },
      to: {
        namespace: "standard",
      },
    },
    {
      name: "slide-down",
      sync: true,
      once() {},
      leave() {},
      enter() {},
      from: {
        namespace: ["project", "standard"],
      },
      to: {
        namespace: "home",
      },
    },
    {
      name: "slide-left",
      sync: true,
      once() {},
      leave() {},
      enter() {},
      from: {
        namespace: "simple",
      },
    },
    {
      name: "project-open",
      sync: true,
      once() {},
      leave() {},
      enter() {},
      beforeOnce() {
        fadeInProjectImages();
      },
      before(e) {
        // // e.current.container.style.top =
        // //   -document.documentElement.scrollTop + "px";

        fixSizesAttribute();
        var imageElement =
          e.trigger.classList &&
          (e.trigger.classList.contains("project-item") ||
            e.trigger.classList.contains("post-item"))
            ? e.trigger.querySelector("img")
            : document.querySelector(`a[href*="${e.next.url.href}"] img`);

        if (imageElement) {
          imageMask(
            {
              target: imageElement,
              mode: "create",
              transition: "project-open",
            },
            e
          );
        }
      },
      beforeEnter(e) {
        // e.next.container.style.transform = `translateY(-${
        //   document.getElementById("site-header").clientHeight
        // }px)`;
        e.next.container.style.top = `-${
          document.getElementById("site-header").clientHeight
        }px`;
        fadeInProjectImages();
        fixSizesAttribute();
        imageMask({
          target: document.querySelector(
            `.${e.next.namespace}-template--featured-image`
          ),
          mode: "update",
          transition: "project-open",
        });
      },

      afterEnter(e) {
        // e.next.container.style.transform = "translateY(0px)";
        e.next.container.style.top = "0px";
        document.documentElement.scrollTop =
          document.getElementById("site-header").clientHeight;

        let imageMaskTarget = document.querySelector(
          `.${e.next.namespace}-template--featured-image`
        );

        if (imageMaskTarget) {
          if (imageMaskTarget.complete) {
            imageMaskTarget.style.visibility = "visible";
            document.querySelector(".project-image-mask").remove();
          } else {
            imageMaskTarget.addEventListener("load", () => {
              imageMaskTarget.style.visibility = "visible";
              document.querySelector(".project-image-mask").remove();
            });
          }
        } else {
          document.querySelector(".project-image-mask").remove();
        }
        document.body.style.overflowY = "scroll";
      },
      to: {
        namespace: ["project", "post"],
      },
      from: {
        namespace: ["standard"],
      },
    },
    {
      name: "project-close",
      sync: true,
      once() {},
      leave() {},
      enter() {},
      before(e) {
        imageMask({
          target: document.querySelector(
            `.${e.current.namespace}-template--featured-image`
          ),
          mode: "create",
          transition: "project-close",
        });
      },
      beforeEnter(e) {
        imageMask(
          {
            target: document.querySelector(
              `a[href*="${e.current.url.path}"] img`
            ),
            mode: "update",
            transition: "project-close",
          },
          e
        );
      },
      afterEnter(e) {
        let imageMask = document.querySelector(".project-image-mask");

        let imageMaskTarget = document.querySelector(
          `a[href*="${e.current.url.path}"] img`
        );

        document.documentElement.scrollTop = imageMaskTarget
          ? imageMaskTarget.parentNode.offsetTop -
            document.querySelector("main header").clientHeight
          : 0;

        if (!imageMask) return null;

        if (imageMaskTarget) {
          if (imageMaskTarget.complete) {
            imageMaskTarget.style.visibility = "visible";
            imageMask.remove();
          } else {
            imageMaskTarget.addEventListener("load", () => {
              imageMaskTarget.style.visibility = "visible";
              imageMask.remove();
            });
          }
        } else {
          imageMask.remove();
        }
        document.body.style.overflowY = "scroll";
      },
      // afterLeave(e) {
      // barba.wrapper.scrollTop = 0;
      // },
      from: {
        namespace: ["project", "post"],
      },
      to: {
        namespace: ["standard"],
      },
    },
  ],
});
