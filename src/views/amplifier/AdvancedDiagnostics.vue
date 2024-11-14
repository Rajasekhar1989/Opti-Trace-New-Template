<template>
    <div class="middlearea">
     <div class="card">
        <ion-list class="devicelist menu" mode="ios">
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.switch"></span>
                <span class="device-name">Ingress Control Switch</span>
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
    name: "AdvancedDiagnostics",
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
  