<template>
  <ion-footer v-if="getPath">
    <ion-toolbar>
      <div class="flex-footer">
        <ion-button mode="ios" class="btnerror" v-if="getbtn" :id="getIdx">Exit</ion-button>
        <ion-button mode="ios" class="btnprimary" @click="btnBack">Back</ion-button>
        <ion-button mode="ios" class="btnsuccess" v-if="getbtn" @click="btnContinue">{{getBtnName}}</ion-button>
      </div>
      <div>
        <!-- <h6 class="subtitle mb-10"><span class="text">Setup Configuration</span>
          <ion-button fill="clear" id="more-info"><span class="svgicon w20" v-html="$store.state.moreinfo"></span></ion-button>
        </h6>             -->
        <ion-modal id="example-modal" ref="modal" :trigger="getIdx">
          <div class="modalWrapper">
            <div class="modalIcontype warning">                          
              <span class="svgicon" v-html="$store.state.infoicon"></span>                          
            </div>
            <div class="modalInfo">
              <p class="mt-0">Update Setup Configuration, Gain and Tilt Settings by changing from Manual to AGC Mode.</p>
            </div>                        
            <div class="modalBtns flex-box space-between mb-10">
              <ion-button class="btnwarning" mode="ios" @click="btnClick('discard')">Disacard & Exit</ion-button>              
              <ion-button class="btnsuccess" mode="ios" @click="btnClick('save')">Save & Exit</ion-button>
              
            </div>
            <div class="modalBtns flex-box justify-center">
              <ion-button class="btnerror" mode="ios" @click="btnClick('cancel')">Cancel</ion-button>              
            </div>
          </div>
        </ion-modal>
      </div>
    </ion-toolbar>
  </ion-footer>
</template>
<script>
import eventBus from "../assets/script/eventBus";
export default {
  name: "FooterView",
  data() {
    return {
      idx: ""
    };
  },
  
  computed: {
    getIdx: function() {
      return  "moreinfo_" + this.$route.path.split("/")[2];
    },
    getPath: function() {
      return (this.$route.path == '/amplifier/selectdevice' || this.$route.path == '/amplifier/guidedamplifiermode') ? false : true;
    },
    getbtn: function() {      
      let pathArr = ["cadamenu", "wifisettings", "cadageneral", "cadautilities", "uploadpackage", "cadadeviceinformation", "connectionestablished", "mainmenu", "healthstatus", "thresholdconfig", "deviceconfiguration", "downstreamconfiguration", "upstreamconfiguration", "advanceddiagnostics", "ingresscontrolswitch", "utilitiesmenu", "deviceinformation", "firmwareupgrade", "testmode", "profilesinfo", "spectrumdisplay", "guidedconfigfile", "configuresettings", "pilotsetup"];
      
      return (pathArr.indexOf(this.$route.path.split("/")[2]) < 0);
    },
    getBtnName: function() {
      return (this.$route.name == "downstreamlevelselection" || this.$route.name == "trunkleveldetailview") ? "Apply & Continue" : "Continue";
    }
  },
  methods: {
    closeModal() {
      this.$refs.modal.$el.dismiss();
    },
    btnClick: function(btn) {
      const evtNamePrefix = this.$route.name;
      
      if (btn === "discard" || btn === "save") {
        const action = btn === "discard" ? "discard" : "save";
        const evtName = `evt${action}${evtNamePrefix}`;
        
        console.log("evtName:", evtName);
        eventBus().emitter.emit(evtName);
        
        this.closeModal();
        this.$router.push("/amplifier/connectionestablished");
      } 
      else if (btn === "cancel") {
        this.closeModal();
      }
    },
    btnBack: function() {
      let evtName = "evtback" + this.$route.name;
      console.log("evtName", evtName);
      
      eventBus().emitter.emit(evtName);
      // this.$router.back();
    },
    btnContinue: function() {
      let evtName = "evtcontinue" + this.$route.name;
      console.log("evtName", evtName);
      eventBus().emitter.emit(evtName);
    }
  }
};
</script>
