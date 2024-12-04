<template>
	<ion-page>
		<div class="wrapper">
			<div class="toparea">
				<h3 class="heading">
          Connection Type <span>Select Wi-Fi or Bluetooth</span>
        </h3> </div>
			<div class="middlearea" style="height: calc(100vh - 95px)">
				<div class="card center about">
					<ion-segment v-model="selectedSegment" mode="ios" class="sm" @ionChange="connChange">
						<ion-segment-button value="wifi" mode="ios">
							<ion-label class="icon-label"><span class="svgicon" v-html="$store.state.wifi"></span> <span class="svglabel">Wi-Fi</span> </ion-label>
						</ion-segment-button>
						<ion-segment-button value="bluetooth">
							<ion-label><span class="svgicon" v-html="$store.state.bluetooth"></span> <span class="svglabel"> Bluetooth</span></ion-label>
						</ion-segment-button>
					</ion-segment>
					<ion-select label="Select Device" label-placement="stacked" interface="action-sheet" placeholder="Select Device" v-model="ddlDevSel" :disabled="getDeviceListLen">
						<ion-select-option :value="data" v-for="(data, idx) in deviceList" :key="idx">{{ data }}</ion-select-option>
					</ion-select>
					<div class="flex-box space-between">
            <ion-button class="btnprimary sm" mode="ios" @click="btnConScan">Scan</ion-button>
						<ion-button class="btnprimary sm" @click="btnConClick" mode="ios">
              <span class="svgicon"></span> Connect 
            </ion-button>
					</div>
				</div>
			</div>
		</div>
	</ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import eventBus from "../assets/script/eventBus";
import { InformationMsg } from "../assets/script/common";

export default {
  name: "ConnectionType",
  data() {
    return {
      selectedSegment: "bluetooth",
      ddlDevSel: "",
      deviceList: [],
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  computed: {
    getDeviceListLen() {
      return this.deviceList.length > 0 ? false : true;
    },
  },
  methods: {
    btnConClick() {
      if(this.ddlDevSel != "")
        eventBus().emitter.emit("evtconnectiontype");
      else {
        console.log("Please select device");
        InformationMsg("Please select device", "contype");
      }
    },
    connChange:  function() {
      this.deviceList = [];
    },
    btnConScan() {
      this.deviceList =  (this.selectedSegment == "bluetooth") ? ["CADA-TS1"] : (this.selectedSegment == "wifi") ? ["CADA-TS1", "CADA-M3", "CADA-Embed"] : [];
    },
  },
};
</script>