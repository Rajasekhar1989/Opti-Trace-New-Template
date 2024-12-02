<template>
   <ion-page>
    <ion-content class="main-content">
      <div class="wrapperinner">
        <div class="card">
          <ion-list class="devicelist menu" mode="ios">
            <ion-item @click="navmainmenu">
              <ion-label>
                <div>
                  <span class="device-icon" v-html="$store.state.listroundbulleticon"></span>
                  <span class="device-name">Main Menu</span>
                  <span class="angle-icon" v-html="$store.state.angleright"></span>            
                </div>                    
              </ion-label>
            </ion-item>

            <ion-item @click="navguidedsetup">
              <ion-label>
                <div>
                  <span class="device-icon" v-html="$store.state.serversetting"></span>
                  <span class="device-name">Guided Setup</span>
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
import eventBus from "../assets/script/eventBus";

export default {
  name: "ConnectionEstablished",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  mounted() { 
    eventBus().emitter.on("evtbackConnectionEstablished",()=>{
      this.$router.push("/amplifier/selectdevice");
    });
  },
  unmounted() {
    eventBus().emitter.off("evtbackConnectionEstablished");
  },
  methods: {
    navmainmenu: function () {      
      this.$router.push("/amplifier/mainmenu");
    },
    navguidedsetup: function(){
      this.$router.push("/amplifier/guidedsetup");
    }
  },
};
</script>
