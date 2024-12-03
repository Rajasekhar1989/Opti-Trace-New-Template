<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
        <div class="card auto">      
            <h5 class="cardtitle"> Upstream Input Attenuation </h5>
            <h6 class="subtitle mb-10">Input Attenuation</h6>
            <SpinControl :label="'Port 2 (dB)'" />    
            <div class="setBtn center">
                <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
            </div>        
        </div>
    </ion-content>        
    </ion-page>  
  </template>
  
  <script>
  import { useRouter } from "vue-router"; 
  import SpinControl from "../../components/SpinControl.vue";
  import eventBus from '../../assets/script/eventBus';
  export default {
    name: "UpstreamInputAttenuationSettingManual",
    data(){
        return{
          togglechk:false,
        }        
      },
      components:{
        SpinControl
      } ,    
    setup() {
      const router = useRouter();
      return {        
        router,
      };
    },
    mounted() {
      eventBus().emitter.on("evtbackUpstreamInputAttenuationSettingManual",()=>{
        this.$router.push("/amplifier/downstreamleveladjustment");
      });
      eventBus().emitter.on("evtcontinueUpstreamInputAttenuationSettingManual",()=>{
        this.$router.push("/amplifier/upstreamleveladjustment");
      });
    },
    unmounted() {
      eventBus().emitter.off("evtbackUpstreamInputAttenuationSettingManual");
      eventBus().emitter.off("evtcontinueUpstreamInputAttenuationSettingManual");
    },
  };
  </script>
  