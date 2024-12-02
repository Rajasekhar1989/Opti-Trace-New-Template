<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
    <div class="middlearea">
     <div class="card">
        <ion-list class="devicelist menu" mode="ios">
          <ion-item @click="navdeviceinformation">
            <ion-label>
              <div>
                <span class="device-icon md" v-html="$store.state.deviceinfo"></span>
                <span class="device-name">Device Information</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span>            
              </div>                    
            </ion-label>
          </ion-item>
          <ion-item @click="navfirmwareupgrade">
            <ion-label>
              <div>
                <span class="device-icon sm" v-html="$store.state.upgradefirmware"></span>
                <span class="device-name">Firmware Upgrade</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span>            
              </div>                    
            </ion-label>
          </ion-item>
          <ion-item @click="navtestmode">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.test"></span>
                <span class="device-name">Test Mode</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span>            
              </div>                    
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </div>
  </ion-content>
  </ion-page>  
  </template>
  
  <script>
  import { useRouter } from "vue-router";   
import eventBus from "../../assets/script/eventBus";
  
  export default {
    name: "UtilitiesMenu",
    data(){
        return{
          togglechk:false,
        }        
      },      
    setup() {
      const router = useRouter();
      return {        
        router,
      };
    },
    mounted() { 
      eventBus().emitter.on("evtbackUtilitiesMenu",()=>{
        this.$router.push("/amplifier/mainmenu");
      });
    },
    unmounted() {
      eventBus().emitter.off("evtbackUtilitiesMenu");
    },
    methods:{
      navfirmwareupgrade: function(){
        this.$router.push("/amplifier/firmwareupgrade");
      },
      navtestmode: function(){
        this.$router.push("/amplifier/testmode");
      },
      navdeviceinformation: function(){
        this.$router.push("/amplifier/deviceinformation");
      }
    }
  };
  </script>
  