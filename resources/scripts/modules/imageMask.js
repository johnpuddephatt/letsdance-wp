"use strict";

export default function (config, barbaEvent) {
  var mask =
    config.mode == "create"
      ? document.createElement("img")
      : document.querySelector(".project-image-mask");

  if (!mask) return false;

  if (config.mode == "create") {
    mask.src = config.target.currentSrc;
    mask.classList.add(
      "project-image-mask",
      "block",
      "rounded",
      "delay-200",
      "border",
      "border-gray-50",
      "transition-all",
      `duration-[500ms]`,
      "fixed",
      "z-[99999]"
    );
  }

  let modX = 0;

  if (config.mode == "update") {
    modX =
      config.transition == "project-open"
        ? -document.body.clientWidth
        : document.body.clientWidth;
  }

  let imgBounds = config.target
    ? config.target.getBoundingClientRect()
    : DOMRect.fromRect({
        x: 0,
        y: 200,
        width: 600,
        height: 300,
      });

  mask.style.left = imgBounds.x + modX + "px";
  mask.style.top = imgBounds.y + "px";
  mask.style.width = imgBounds.width + "px";
  mask.style.height = imgBounds.height + "px";

  if (config.mode == "create") {
    document.body.append(mask);
    document.body.style.overflowY = "hidden";
  }

  if (config.target) {
    setTimeout(() => {
      config.target.style.visibility = "hidden";
    }, 100);
  }
}
