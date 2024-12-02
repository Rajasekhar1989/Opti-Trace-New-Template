<template>
  <ion-page>
    <ion-content class="ion-padding main-content">     
      <div class="notes">
          <p>Manual Mode Active <span class="svgicon" v-html="$store.state.notepin"></span></p>
      </div>
        <div class="card auto">
            <h5 class="cardtitle mb-10"> Adjust Upstream Levels </h5>
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
    </ion-content>        
    </ion-page>  
  </template>
  
  <script>
  import { useRouter } from "vue-router"; 
  import eventBus from '../../assets/script/eventBus';   
  
  export default {
    name: "UpstreamLevelAdjustment",
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
    mounted() {
      eventBus().emitter.on("evtbackUpstreamLevelAdjustment",()=>{
        this.$router.push("/amplifier/upstreaminputattenuationsettingmanual");
      });
      eventBus().emitter.on("evtcontinueUpstreamLevelAdjustment",()=>{
        this.$router.push("/amplifier/guidedamplifiermode");
      });
    },
    unmounted() {
      eventBus().emitter.off("evtbackUpstreamLevelAdjustment");
      eventBus().emitter.off("evtcontinueUpstreamLevelAdjustment");
    },
  };
  </script>
  