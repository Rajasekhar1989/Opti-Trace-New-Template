<template>
    <div>      
        <div class="card auto">      
            <h5 class="cardtitle">Input Attenuation</h5>
            <SpinControl />
            <SpinControl />
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
    </div>  
  </template>
  
  <script>
  import { useRouter } from "vue-router"; 
  import SpinControl from "../../components/SpinControl.vue";
  
  export default {
    name: "UpstreamConfiguration",
    data(){
        return{
          togglechk:false,
        }        
      },
      components:{
        SpinControl
      } ,    
    setup() {
      const router = useRouter();
      return {        
        router,
      };
    },
  };
  </script>
  