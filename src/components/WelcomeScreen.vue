<template>
    <ion-page>
        <div class="wrapper">
        <div class="toparea">
            <h3 class="heading welcome">Welcome</h3>
        </div>        
        <div class="middlearea" style="height: calc( 100vh - 213px );">
            <div class="card center about">
                <h2>Opti-Trace <span class="version">Version 24.10.99</span></h2>
                <p>User interface app for electronic set-up and control for easy activation and maintenance of the CommScope 1.8 GHz Extended Spectrum DOCSIS 4.0 (ESD) Amplifiers. </p>
                <ion-button mode="ios" class="btnprimary sm">Firmware &amp; CADA</ion-button>
            </div>
        </div>
        <div class="bottomarea">
            <h5>Powered By</h5>
            <!-- <img src="../assets/images/logo_black.png" alt="" width="200px"> -->
            <img :src="$store.state.logoblack" alt="" width="200px">
            <ion-button mode="ios" class="btnprimary">Get Started</ion-button>
        </div>
      </div>
    </ion-page>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: "WelcomeScreen",
    setup() {
      const router = useRouter();
      return {
        router,
      };
    },
  }
  </script>
  