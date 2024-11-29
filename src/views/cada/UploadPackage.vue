<template>  
<ion-page>
  <ion-content class="ion-padding main-content">
    <h5 class="cardtitle mb-15">Upgrade Package</h5>
    <div class="card auto">
        <h6 class="subtitle">Current Package Version: 24.01.01</h6>       
      <div class="upgrade">
        <ion-input type="file"></ion-input>

        <div class="center">
            <span class="svgicon" v-html="$store.state.upload"></span>
            <p>Select Package here...</p>            
        </div>
      </div>
      <p class="mt-10">Only support .dfu, .zip files</p>      
      <div class="setBtn center mb-15">
        <ion-button size="small" class="btnprimary">Upgrade</ion-button>
      </div>
      <h5 class="cardtitle mb-10">Status</h5>
      <div class="card auto">     
        <div class="upgrade_status">
          <span class="label">Upgrading...</span>  
          <em class="infostatus">65%  • 30 seconds remaining</em>
          <ion-progress-bar :value="progress"></ion-progress-bar>
        </div>        
      </div>
    </div>
    </ion-content>
    </ion-page>    
  </template>
  
  <script>
  import { useRouter } from "vue-router";   
  import { ref } from 'vue';  
  export default {
    name: "UploadPackage",   
    data(){
        return{    
          progress : 50,   
        }        
      },          
    setup() {
      const router = useRouter();
      let progressinfo = ref(0);
      return { 
        progressinfo,       
        router,
      };
    },
    mounted() {
      setInterval(() => {
        this.progress += 0.01;

        // Reset the progress bar when it reaches 100%
        // to continuously show the demo
        if (this.progress > 1) {
          setTimeout(() => {
            this.progress = 0;
          }, 1000);
        }
      }, 50);
    }
  };
  </script>
  