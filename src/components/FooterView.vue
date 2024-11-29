<template>
  <ion-footer v-if="getPath">
    <ion-toolbar>
      <div class="flex-footer">
        <ion-button mode="ios" class="btnerror" v-if="getbtn" @click="btnExit">Exit</ion-button>
        <ion-button mode="ios" class="btnprimary" @click="btnBack">Back</ion-button>
        <ion-button mode="ios" class="btnsuccess" v-if="getbtn" @click="btnContinue">{{getBtnName}}</ion-button>
      </div>
    </ion-toolbar>
  </ion-footer>
</template>
<script>
import eventBus from "../assets/script/eventBus";
export default {
  name: "FooterView",
  computed: {
    getPath: function() {
      return (this.$route.path == '/amplifier/selectdevice' || this.$route.path == '/amplifier/guidedamplifiermode') ? false : true;
    },
    getbtn: function() {      
      let pathArr = ["cadamenu", "wifisettings", "cadageneral", "cadautilities", "uploadpackage", "cadadeviceinformation", "connectionestablished", "mainmenu", "healthstatus", "thresholdconfig", "deviceconfiguration", "downstreamconfiguration", "upstreamconfiguration", "advanceddiagnostics", "ingresscontrolswitch", "utilitiesmenu", "deviceinformation", "firmwareupgrade", "testmode", "profilesinfo", "spectrumdisplay", "guidedconfigfile"];
      
      return (pathArr.indexOf(this.$route.path.split("/")[2]) < 0);
    },
    getBtnName: function() {
      return (this.$route.name == "downstreamlevelselection" || this.$route.name == "trunkleveldetailview") ? "Apply & Continue" : "Continue";
    }
  },
  methods: {
    btnExit: function() {
      console.log("btnExit");
    },
    btnBack: function() {
      this.$router.back();
    },
    btnContinue: function() {
      let evtName = "evtcontinue" + this.$route.name;
      console.log("evtName", evtName);
      eventBus().emitter.emit(evtName);
    }
  }
};
</script>
