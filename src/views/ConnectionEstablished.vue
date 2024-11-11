<template>
  <div class="wrapperinner">
    <div class="card">
      <ion-list class="devicelist menu" mode="ios">
        <ion-item>
          <ion-label>
            <div>
              <span class="device-icon" v-html="$store.state.listroundbulleticon"></span>
              <span class="device-name">Main Menu</span>
              <span class="angle-icon" v-html="$store.state.angleright"></span>            
            </div>                    
          </ion-label>
        </ion-item>

        <ion-item>
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
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ConnectionEstablished",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
