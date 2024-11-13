<template>
    <div class="wrapperinner">
      <div class="card">
        <ion-list class="devicelist menu" mode="ios">
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.healthstatus"></span>
                <span class="device-name">Health Status</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span>            
              </div>                    
            </ion-label>
          </ion-item>
  
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.deviceconfig"></span>
                <span class="device-name">Device Configuration</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>   
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.downstream"></span>
                <span class="device-name">Downstream Configuration</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.upstream"></span>
                <span class="device-name">Upstream Configuration</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.diagnostics"></span>
                <span class="device-name">Advanced Diagnostics</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>  
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.utilities"></span>
                <span class="device-name">Utilities</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item> 
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.profiles"></span>
                <span class="device-name">Profiles</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>   
          <ion-item>
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.spectrum"></span>
                <span class="device-name">Spectrum Display</span>
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
    name: "MainMenu",
    setup() {
      const router = useRouter();
      return {
        router,
      };
    },
  };
  </script>
  