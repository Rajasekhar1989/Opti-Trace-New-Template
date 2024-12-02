<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
      <div class="middlearea">
        <div class="card auto">
          <h5 class="cardtitle center">
            Are you sure you want to set Amplifier in AGC mode?
          </h5>
          <figure class="fileicon">
            <span class="svgicon xl" v-html="$store.state.exclamation"> </span>
          </figure>
          <div class="modalBtns flex-box space-between">
            <ion-button class="btnsuccess" mode="ios">Yes</ion-button>
            <ion-button id="finish-guided" class="btnerror" mode="ios">No</ion-button>
          </div>
          <ion-modal id="example-modal" ref="modal" trigger="finish-guided">
            <div class="modalWrapper">
              <div class="modalIcontype success" style="line-height: 80px">
                <span class="svgicon md" v-html="$store.state.checkmark"></span>
              </div>
              <div class="modalInfo">
                <h5 class="successmsg">Successfully completed Guided Setup</h5>
                <p class="mt-0">Amplifier in <span>Manual Mode</span></p>
              </div>
              <div class="modalBtns flex-box justify-center">
                <ion-button class="btnsuccess" mode="ios" @click="navmainmenu">Finish</ion-button>
              </div>
            </div>
          </ion-modal>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "GuidedAmplifierMode",
  data() {
    return {};
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    navmainmenu: function () {
      this.$refs.modal.$el.dismiss();
      this.$router.push("/amplifier/connectionestablished");
    },
  },
};
</script>
