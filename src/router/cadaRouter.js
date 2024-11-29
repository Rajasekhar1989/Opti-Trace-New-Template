import CADAMenu from "../views/cada/CADAMenu.vue"
import CADAGeneral from "../views/cada/CADAGeneral.vue";
import CADAUtilities from "./CADAUtilities.vue";
import UploadPackage from "../views/cada/UploadPackage.vue";
import CADADeviceInformation from "./CADADeviceInformation.vue";

const basePath = "/cada";

export default [
    { path: `${basePath}/cadamenu`, name: "CADAMenu", component: CADAMenu },
    { path: `${basePath}/cadageneral`, name: "CADAGeneral", component: CADAGeneral },
    { path: `${basePath}/cadautilities`, name: "CADAUtilities", component: CADAUtilities },    
    { path: `${basePath}/uploadpackage`, name: "UploadPackage", component: UploadPackage },    
    { path: `${basePath}/cadadeviceinformation`, name: "CADADeviceInformation", component: CADADeviceInformation },    
];