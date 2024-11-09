<template>
    <ion-page>
      <div class="wrapper">
        <div class="toparea">
            <h3 class="heading">Connection Type <span>Select Wi-Fi or Bluetooth</span></h3>
        </div>        
        <div class="middlearea" style="height: calc(100vh - 150px);">
            <div class="card center about">
                <ion-segment value="default" mode="ios" class="sm">
                    <ion-segment-button value="default" mode="ios">
                      <ion-label class="icon-label"><span class="svgicon" v-html="$store.state.wifi"></span> <span class="svglabel">Wi-Fi</span> </ion-label>
                      </ion-segment-button>
                      <ion-segment-button value="segment">
                      <ion-label><span class="svgicon" v-html="$store.state.bluetooth"></span> <span class="svglabel"> Bluetooth</span></ion-label>
                    </ion-segment-button>                    
                </ion-segment>

                
                <ion-select label="Select Device" label-placement="stacked" interface="action-sheet" placeholder="CADA-TS1">
                    <ion-select-option value="0">CADA-TS1</ion-select-option>
                    <ion-select-option value="1">CADA-M3</ion-select-option>
                    <ion-select-option value="2">EMBED-JIO</ion-select-option>
                </ion-select>               
                
                <div class="flex-box space-between">
                    <ion-button class="btnprimary md icon-label"><span class="svgicon md" v-html="$store.state.sync"></span> <span class="svglabel">Scan</span></ion-button>
                    <ion-button class="btnprimary md"><span class="svgicon md"></span> <span class="svglabel">Connect</span></ion-button>
                </div>
            </div>
        </div>
        <div class="bottomarea">            
            <ion-button mode="ios" class="btnprimary">Next</ion-button>
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