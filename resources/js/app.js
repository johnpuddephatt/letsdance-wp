import Alpine from "alpinejs";
import { initBarba } from "./barba/index";
import fixSizesAttribute from "./modules/fixSizesAttribute";
import addPlayButtonToVideos from "./modules/addPlayButtonToVideos"

window.Alpine = Alpine;
Alpine.store('siteLoading', !!document.querySelector('[data-barba-namespace="home"]'));
Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
  fixSizesAttribute();
  addPlayButtonToVideos();
});

document.body.addEventListener("keyup", (e) => {
  if (e.which === 9) {
    document.body.classList.remove("no-focus-outline");
  }
});

initBarba();
