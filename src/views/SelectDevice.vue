<template>
  <div class="wrapperinner">
    <div class="card">
      <ion-list class="devicelist" mode="ios">
        <ion-item>
          <ion-label>
            <div>
              <span class="device-icon" v-html="$store.state.wifi"></span>
              <span class="device-name">MB180.25356</span>
              <span class="angle-icon" v-html="$store.state.angleright"></span>            
            </div> 
            <div class="more">
              <span class="version">Version 24.08.02</span>
              <span class="status"><em class="dot"></em> Connected</span>
            </div>           
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-label class="smallicon">
            <div>
              <span class="device-icon" v-html="$store.state.microchip"></span>
              <span class="device-name">CADA Management</span>
              <span class="angle-icon" v-html="$store.state.angleright"></span> 
            </div>            
            <div class="more">
              <span class="version">Version 1.08.02</span>
              <span class="status"><em class="dot error"></em> Disconnected</span>
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
  name: "SelectDevice",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
