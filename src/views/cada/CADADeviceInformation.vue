<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
      <div class="card auto">
        <h5 class="cardtitle">Device Information</h5>
        <h6 class="subtitle mb-10">Information</h6>

        <table class="table align-left">
          <tbody>
            <tr>
              <td>CADA Model</td>
              <td>CADA-MODULE</td>
            </tr>
            <tr>
              <td>CADA Serial</td>
              <td>000000001TS2</td>
            </tr>
            <tr>
              <td>Manufacturing Date</td>
              <td>06-02-2024</td>
            </tr>
            <tr>
              <td>CADA Revision</td>
              <td>A</td>
            </tr>
            <tr>
              <td>CADA Version</td>
              <td>24.11.01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import eventBus from "../../assets/script/eventBus";

export default {
  name: "CADADeviceInformation",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  mounted() {
    eventBus().emitter.on("evtbackCADADeviceInformation",()=>{
      this.$router.push("/cada/cadautilities");
    });
  },
  unmounted() {
    eventBus().emitter.off("evtbackCADADeviceInformation");
  },
};
</script>
