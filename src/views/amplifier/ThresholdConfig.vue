<template>
	<ion-page>
		<ion-content class="ion-padding main-content">
			<div class="card">
				<h5 class="cardtitle">Adjust VAC Thresholds</h5>
				<ion-list mode="ios" class="alarms mb-15">
					<ion-row>
						<ion-col size="9" size-sm="11">
							<div class="custominput addnav">
								<div style="padding-left: 38px">
									<ion-input label-placement="stacked" class="no-border" placeholder="169.1" readonly mode="ios">
										<div slot="label">VAC (V)</div>
									</ion-input>
								</div> <span class="statusicon error" v-html="$store.state.closecircle"></span> </div>
						</ion-col>
					</ion-row>
				</ion-list>
				<h6 class="subtitle mb-10">Alarm Thresholds</h6>
				<div class="custominput addnav">
					<div style="padding-left: 38px">
						<ion-input label-placement="stacked" placeholder="103.5" mode="ios">
							<div slot="label">High Limit</div>
						</ion-input>
					</div> <span class="statusicon error" v-html="$store.state.closecircle"></span> </div>

				<div class="custominput addnav mb-15">
					<div style="padding-left: 38px">
						<ion-input label-placement="stacked" placeholder="37.4" mode="ios">
							<div slot="label">Low Limit</div>
						</ion-input>
					</div> <span class="statusicon success" v-html="$store.state.checkcircle"></span> </div>
				<div class="setBtn center mb-15">
					<ion-button class="btnprimary" mode="ios">Set</ion-button>
				</div>
				<h6 class="subtitle mb-10">Warning Thresholds</h6>
				<div class="custominput addnav">
					<div style="padding-left: 38px">
						<ion-input label-placement="stacked" placeholder="99.0" mode="ios">
							<div slot="label">High Limit</div>
						</ion-input>
					</div> <span class="statusicon warning" v-html="$store.state.minuscircle"></span> </div>
				<div class="custominput addnav mb-15">
					<div style="padding-left: 38px">
						<ion-input label-placement="stacked" placeholder="39.6" mode="ios">
							<div slot="label">Low Limit</div>
						</ion-input>
					</div> <span class="statusicon success" v-html="$store.state.checkcircle"></span> </div>
				<div class="setBtn center">
					<ion-button class="btnprimary" mode="ios">Set</ion-button>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import eventBus from "../../assets/script/eventBus";

export default {
  name: "ThresholdConfig",
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
    eventBus().emitter.on("evtbackThresholdConfig", () => {
      this.$router.push("/amplifier/healthstatus");
    });
  },
  unmounted() {
    eventBus().emitter.off("evtbackThresholdConfig");
  },
};
</script>
