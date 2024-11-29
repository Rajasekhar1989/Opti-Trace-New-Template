<template>
	<ion-menu side="start" content-id="main-content">
		<!-- <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header> -->
		<ion-content>
			<div class="sidemenuWrapper">
				<ion-item class="userinfo">
					<ion-avatar slot="start"> <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" /> </ion-avatar>
					<ion-label>User Name <span class="designation">Administrator</span></ion-label>
					<ion-menu-toggle>
						<ion-button fill="clear"> <span v-html="$store.state.sidebariconclose" class="svgicon dark"></span
            ></ion-button>
          </ion-menu-toggle>
        </ion-item>

        <ion-list class="devicelist menu" mode="ios">
          <ion-item>
            <ion-label @click="btnLogout">
              <div>
                <span class="device-icon" v-html="$store.state.logout"></span> <span class="device-name">Logout</span>
							<!-- <span class="angle-icon" v-html="$store.state.angleright"></span>             --></div>
			</ion-label>
			</ion-item>
			<ion-item>
				<ion-label>
					<div> <span class="device-icon" v-html="$store.state.shutdown"></span> <span class="device-name">Shutdown</span>
						<!-- <span class="angle-icon" v-html="$store.state.angleright"></span>  --></div>
				</ion-label>
			</ion-item>
			<ion-item>
				<ion-label>
					<div> <span class="device-icon" v-html="$store.state.upgradefirmware"></span> <span class="device-name">Firmware Upgrade</span>
						<!-- <span class="angle-icon" v-html="$store.state.upgradefirmware"></span>  --></div>
				</ion-label>
			</ion-item>
			</ion-list>
			</div>
    </ion-content>
	</ion-menu>
</template>
<script>
import { ConfirmationMsg } from '../assets/script/common';
import eventBus from '../assets/script/eventBus';

export default {
  name: "SideMenu",
  mounted() {
	eventBus().emitter.on("evtconfyeslogoutselectdevice",()=>{
      localStorage.removeItem("isLogin");
      this.$router.push("/login");
      setTimeout(() => {
        window.location.reload();
      }, 300);
	});
  },
  unmounted() {
	eventBus().emitter.off("evtconfyeslogoutselectdevice");
  },
  methods: {
    btnLogout: function () {
		ConfirmationMsg("Are you sure you want to logout?", "logout");
    },
  },
};
</script>
