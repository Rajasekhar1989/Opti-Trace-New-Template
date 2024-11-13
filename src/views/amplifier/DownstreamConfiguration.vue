<template>
    <div>      
        <div class="card auto">      
            <h5 class="cardtitle center">Manual Mode Active</h5>
            <div class="checkboxgroup">
                <!-- <ion-item>
                    <ion-label>Manual</ion-label>
                    <ion-checkbox @click="btnChkbox('manual',$event)"  v-model="isManualChecked" mode="md"></ion-checkbox>                
                </ion-item>
                <ion-item>
                    <ion-label>AGC</ion-label>
                    <ion-checkbox @click="btnChkbox('manual',$event)"  v-model="isManualChecked" mode="md"></ion-checkbox>                
                </ion-item> -->
                <ion-checkbox @click="btnChkbox('manual',$event)"  v-model="isManualChecked" mode="md"><span>Manual</span></ion-checkbox> 
                <ion-checkbox @click="btnChkbox('manual',$event)"  v-model="isManualChecked" mode="md"><span>AGC</span></ion-checkbox> 
            </div>
        </div>
        <div class="card auto">
            <div class="configbtns">
                <ion-button><img :src="$store.state.configbtn1" alt="" /> </ion-button>
                <ion-button><img :src="$store.state.configbtn2" alt="" /> </ion-button>
                <ion-button><img :src="$store.state.configbtn3" alt="" /> </ion-button>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Gain/Tilt Port 2</th>
                            <th>Value/Units</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gain @ 1749 MHz</td>
                            <td>0.0 dB</td>
                        </tr>
                        <tr>
                            <td>Tilt @ 303 ~ 1749 MHz</td>
                            <td>0.0 dB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="configbtns">
                <ion-button><img :src="$store.state.configbtn4" alt="" /> </ion-button>
                <ion-button><img :src="$store.state.configbtn5" alt="" /> </ion-button>
                <ion-button><img :src="$store.state.configbtn6" alt="" /> </ion-button>
            </div>
        </div>
        <div class="card auto">
            <h5 class="cardtitle center">Step Size</h5>

            <div style="margin: 15px 0;">
                <ion-segment value="default" mode="ios" class="three">
                    <ion-segment-button value="default" mode="ios">
                        <ion-label class="icon-label"><span class="svglabel">Fine</span> </ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="medium">
                        <ion-label><span class="svglabel"> Medium</span></ion-label>
                    </ion-segment-button>                    
                    <ion-segment-button value="coarse">
                        <ion-label><span class="svglabel"> Coarse</span></ion-label>
                    </ion-segment-button>                    
                </ion-segment>
            </div>            
        </div>
        <div class="card auto">
            <ion-row class="align-items-center">
                <ion-col size="12" size-sm="6" class="center">
                    <ion-button class="btnprimary lg mb-10" mode="ios"> <span class="svglabel">Configure Settings</span></ion-button>                
                </ion-col>
                <ion-col size="12" size-sm="6" class="center">
                    <ion-button class="btnprimary lg mb-10" mode="ios"> <span class="svglabel">Run Auto-Setup</span></ion-button>                
                </ion-col>
                <ion-col size="12" size-sm="6" class="center">
                    <ion-button class="btnprimary lg mb-10" mode="ios"> <span class="svglabel">Spectrum Display</span></ion-button>
                </ion-col>
            </ion-row>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Pilot Frequencies</th>
                            <th>Value/Units</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pilot 1</td>
                            <td>400 MHz, 0.0 dBmV/6MHz</td>
                        </tr>
                        <tr>
                            <td>Pilot 2</td>
                            <td>1600 MHz, 0.0 dBmV/6MHz</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Power Levels</th>
                            <th>Value/Units</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DS Input TCP</td>
                            <td>0.0 dB</td>
                        </tr>
                        <tr>
                            <td>DS Output Port 2 TCP</td>
                            <td>0.0 dB</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </div>  
  </template>
  
  <script>
  import { useRouter } from "vue-router"; 
  
  export default {
    name: "DownstreamConfiguration",
    data(){
        return{
          togglechk:false,
        }        
      },     
    setup() {
      const router = useRouter();
      return {        
        router,
      };
    },
  };
  </script>
  