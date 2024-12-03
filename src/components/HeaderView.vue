<template>
  <ion-header :translucent="true" class="main-header lg">
    <ion-toolbar>
      <!-- Menu Toggle Button to open/close the menu -->
      <ion-menu-button slot="start">
        <span v-html="$store.state.sidebaricon"></span>
      </ion-menu-button>
        <!-- <ion-title mode="ios">Select Device <span>Showing connected devices</span></ion-title> -->
        <!-- <ion-title mode="ios">Connection Established <span>Showing connected menu</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title> -->
        <!-- <ion-title mode="ios">Main Menu <span>Showing Menu</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title> -->
        <!-- <ion-title mode="ios">Health Status <span>Device health status</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title> -->
        <!-- <ion-title mode="ios">Device Configuration <span>Device config</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title> -->
        <ion-title mode="ios">{{ getHeaderTitle }}<span></span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title>

      <div class="right-btns">
        <ion-button class="iconbtn home" @click="navHome"><span v-html="$store.state.home"></span> </ion-button>
        <ion-button class="iconbtn"><span v-html="$store.state.sync"></span> </ion-button>        
      </div>
    </ion-toolbar>
  </ion-header>
</template>
<script>
import { useRouter } from "vue-router";
export default {  
  name: "HeaderView",
  data(){
    return{}
  },
  setup() {
    const router = useRouter();
    return {        
      router,
    };
  },
  computed: {
    getHeaderTitle() {
      let path = this.$route.path.split("/")[2];
      let pathArr = {
        "selectdevice" : "Select Device",
        "connectionestablished" : "Connection Established",
        "mainmenu" : "Main Menu",
        "healthstatus" : "Health Status",
        "thresholdconfig" : "Health Status",
        "deviceconfiguration" : "Device Configuration", 
        "downstreamconfiguration" : "Downstream Configuration",
        "configuresettings":'Downstream Configuration',
        "pilotsetup":'Downstream Configuration',
        "upstreamconfiguration" : "Upstream Configuration",
        "advanceddiagnostics" : "Advanced Diagnostics",
        "ingresscontrolswitch" : "Ingress Control Switch",
        "utilitiesmenu" : "Utilities Menu",
        "deviceinformation" : "Device Information",
        "firmwareupgrade" : "Firmware Upgrade",
        "testmode" : "Test Mode",
        "profilesinfo" : "Profiles Info",
        "spectrumdisplay" : "Spectrum Display",

        "cadamenu": "CADA Menu",
        "cadageneral" : "General",
        "cadautilities" : "Utilities",
        "cadadeviceinformation" : "Utilities",
        "uploadpackage" : "Upgrade Package",
        ...Object.fromEntries([
          "guidedsetup", "downstreamlevelselection", "trunkleveldetailview", "guidedconfigfile", 
          "guidedconfigurevacthresholds", "guidedsetuppilotsetup", "guidedamplifieroffset", 
          "gaintiltfreq", "downstreamleveladjustment", "upstreaminputattenuationsettingmanual", 
          "guidedamplifiermode", "guidedprofilesinfo", "upstreamleveladjustment"
        ].map(key => [key, "Guided Setup"]))
      };
      return pathArr[path];
    }
  },
  methods:{
    navHome: function(){
      this.$router.push("./selectdevice");     
    }
  }
};
</script>
