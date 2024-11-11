import ConnectionEstablished from "../views/ConnectionEstablished.vue";
import MainMenu from "../views/MainMenu.vue";

const basePath = "/amplifier";

export default [
  { path: "", redirect: `${basePath}/connestablished` },
  { path: basePath, redirect: `${basePath}/connestablished` },
  { path: `${basePath}/connestablished`, name: "ConnEstablished", component: ConnectionEstablished },
  { path: `${basePath}/mainmenu`, name: "MainMenu", component: MainMenu },
];
