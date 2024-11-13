<template>
  <ion-header :translucent="true" class="main-header lg">
    <ion-toolbar>
      <!-- Menu Toggle Button to open/close the menu -->
      <ion-menu-button slot="start">
        <span v-html="$store.state.sidebaricon"></span>
      </ion-menu-button>
        <!-- <ion-title mode="ios">Select Device <span>Showing connected devices</span></ion-title> -->
        <!-- <ion-title mode="ios">Connection Established <span>Showing connected menu</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title> -->
        <!-- <ion-title mode="ios">Main Menu <span>Showing Menu</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title> -->
        <!-- <ion-title mode="ios">Health Status <span>Device health status</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title> -->
        <!-- <ion-title mode="ios">Device Configuration <span>Device config</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title> -->
        <ion-title mode="ios">Downstream Configuration <span>Downstream config</span>
          <span class="connected-device"> <em v-html="$store.state.wifi"></em> MB180.25356 </span>
        </ion-title>

      <div class="right-btns">
        <ion-button class="iconbtn home"><span v-html="$store.state.home"></span> </ion-button>
        <ion-button class="iconbtn"><span v-html="$store.state.sync"></span> </ion-button>        
      </div>
    </ion-toolbar>
  </ion-header>
</template>
<script>
export default {
  name: "Header",
};
</script>
