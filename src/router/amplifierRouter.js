import ConnEstablished from "../views/ConnEstablished.vue";
import MainMenu from "../views/amplifier/MainMenu.vue";

const basePath = "/amplifier";

export default [
  { path: "", redirect: `${basePath}/connestablished` },
  { path: basePath, redirect: `${basePath}/connestablished` },
  { path: `${basePath}/connestablished`, name: "ConnEstablished", component: ConnEstablished },
  { path: `${basePath}/mainmenu`, name: "MainMenu", component: MainMenu },
];
