<template>
    <div class="middlearea">
     <div class="card">
        <ion-list class="devicelist menu" mode="ios">
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon md" v-html="$store.state.deviceinfo"></span>
                <span class="device-name">Device Information</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span>            
              </div>                    
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon lg" v-html="$store.state.upgradefirmware"></span>
                <span class="device-name">Firmware Upgrade</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span>            
              </div>                    
            </ion-label>
          </ion-item>
          <ion-item>
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
  </template>
  
  <script>
  import { useRouter } from "vue-router";   
  
  export default {
    name: "Utilities",
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
  };
  </script>
  