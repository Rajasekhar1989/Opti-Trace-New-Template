<template>
  <ion-page v-show="false">
    <div class="wrapper">
      <div class="card">
        <div class="devices"></div>
      </div>    
    </div>    
  </ion-page>
  <SelectDevice v-show="false" />  
  <ConnectionEstablished v-show="false" />
  <MainMenu v-show="false" />
  <HealthStatus v-show="false" />
  <DeviceConfiguration v-show="false" />
  <DownstreamConfiguration v-show="false" />
  <UpstreamConfiguration v-show="false" />
  <AdvancedDiagnostics v-show="false" />
  <Utilities v-show="false" />
  <!-- <Profiles v-show="false" /> -->
  <!-- <SpectrumDisplay v-show="false" /> -->
  <IngressControlSwitch />
</template>

<script>

import { useRouter } from "vue-router";
import SelectDevice from "./SelectDevice.vue";
import ConnectionEstablished from "./ConnectionEstablished.vue";
import MainMenu from "./MainMenu.vue";
import HealthStatus from "./amplifier/HealthStatus.vue";
import DeviceConfiguration from "./amplifier/DeviceConfiguration.vue";
import DownstreamConfiguration from "./amplifier/DownstreamConfiguration.vue";
import UpstreamConfiguration from "./amplifier/UpstreamConfiguration.vue";
import AdvancedDiagnostics from "./amplifier/AdvancedDiagnostics.vue";
import Utilities from "./amplifier/Utilities.vue";
// import Profiles from "./amplifier/Profiles.vue";
import SpectrumDisplay from "../components/SpectrumDisplay.vue";
import IngressControlSwitch from "./amplifier/IngressControlSwitch.vue";


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
    ConnectionEstablished,
    MainMenu,
    HealthStatus,
    DeviceConfiguration,
    DownstreamConfiguration,
    UpstreamConfiguration,
    AdvancedDiagnostics,
    Utilities,
    // Profiles,
    SpectrumDisplay,
    IngressControlSwitch
  }
};
</script>
