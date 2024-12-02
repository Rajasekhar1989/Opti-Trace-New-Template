<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
      <div class="middlearea">
        <div class="card">
          <ion-list class="devicelist menu" mode="ios">
            <ion-item @click="navcadageneral">
              <ion-label>
                <div>
                  <span
                    class="device-icon sm"
                    v-html="$store.state.layers"
                  ></span>
                  <span class="device-name">General</span>
                  <span
                    class="angle-icon"
                    v-html="$store.state.angleright"
                  ></span>
                </div>
              </ion-label>
            </ion-item>
            <ion-item @click="navwifisettings">
              <ion-label>
                <div>
                  <span
                    class="device-icon sm"
                    v-html="$store.state.wifi"
                  ></span>
                  <span class="device-name">Wi-Fi Settings</span>
                  <span
                    class="angle-icon"
                    v-html="$store.state.angleright"
                  ></span>
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
  name: "CADAMenu",
  data() {
    return {};
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  mounted() { 
    eventBus().emitter.on("evtbackCADAMenu",()=>{
      this.$router.push("/amplifier/selectdevice");
    });
  },
  unmounted() {
    eventBus().emitter.off("evtbackCADAMenu");
  },
  methods: {
    navcadageneral: function () {
      this.$router.push("../cada/cadageneral");
    },
    navwifisettings: function () {
      console.log("Under Development");
      
      // this.$router.push("../cada/wifisettings");
    },
  },
};
</script>
