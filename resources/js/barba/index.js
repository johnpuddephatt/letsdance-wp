import barba from "@barba/core";
import barbaCss from "@barba/css";
import { registerHooks } from "./hooks";
import home from "./pages/home";
import about from "./pages/about";
import simple from "./pages/simple";
import project from "./pages/project";

const pages = [home, simple, project];
window.barba = barba;
export function initBarba() {
  barba.use(barbaCss);
  registerHooks(barba);

  barba.init({
    debug: true,
    timeout: 12000,
    views: pages.flatMap((p) => (p.view ? [p.view] : [])),
    transitions: pages.flatMap((p) => p.transitions ?? []),
  });

  about.register(barba);
}
