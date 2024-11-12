<template>
  <ion-page v-show="false">
    <div class="wrapper">
      <div class="card">
        <div class="devices">      
testtttt
        </div>
      </div>    
    </div>    
  </ion-page>
  <SelectDevice v-show="false" />  
  <ConnectionEstablished v-show="false" />
  <MainMenu />
</template>

<script>

import { useRouter } from "vue-router";
import SelectDevice from "./SelectDevice.vue";
import ConnectionEstablished from "./ConnectionEstablished.vue";
import MainMenu from "./MainMenu.vue";


export default {
  name: "Dashboard",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  components: {
    SelectDevice,
    ConnectionEstablished,MainMenu

  }
};
</script>
