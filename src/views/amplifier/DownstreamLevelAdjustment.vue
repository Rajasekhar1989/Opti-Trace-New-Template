<template>
    <ion-page>
        <ion-content class="ion-padding main-content">
        <h5 class="cardtitle mb-10">Adjust Downstream Levels</h5>
        <div class="card auto">                  
            <h5 class="cardtitle center">Manual Mode Active</h5>
            <div class="checkboxgroup">                
                <ion-checkbox  mode="md" checked><span>Manual</span></ion-checkbox>                 
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
                <ion-segment value="coarse" mode="ios" class="three">
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
            <!-- <ion-row class="align-items-center">
                <ion-col size="12" size-sm="6" class="center">
                    <ion-button class="btnprimary lg mb-10" mode="ios"> <span class="svglabel">Configure Settings</span></ion-button>                
                </ion-col>
                <ion-col size="12" size-sm="6" class="center">
                    <ion-button class="btnprimary lg mb-10" mode="ios"> <span class="svglabel">Run Auto-Setup</span></ion-button>                
                </ion-col>
                <ion-col size="12" size-sm="6" class="center">
                    <ion-button class="btnprimary lg mb-10" mode="ios"> <span class="svglabel">Spectrum Display</span></ion-button>
                </ion-col>
            </ion-row> -->
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
                            <td>153 MHz</td>
                        </tr>
                        <tr>
                            <td>Pilot 2</td>
                            <td>1749 MHz</td>
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
                            <td>-6.1 dBmV</td>
                        </tr>
                        <tr>
                            <td>DS Output Port 2 TCP</td>
                            <td>0.0 dBmV</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </ion-content>    
</ion-page>  
  </template>
  
  <script>
  import { useRouter } from "vue-router"; 
  import eventBus from '../../assets/script/eventBus';
  export default {
    name: "DownstreamLevelAdjustment",
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
        eventBus().emitter.on("evtbackDownstreamLevelAdjustment",()=>{
            let getPath = localStorage.getItem("guidedDSPath");
            if(getPath != undefined && getPath != null){
                this.$router.push(getPath);
            }            
        });
      eventBus().emitter.on("evtcontinueDownstreamLevelAdjustment",()=>{
        this.$router.push("/amplifier/upstreaminputattenuationsettingmanual");
      });
    },
    unmounted() {
        eventBus().emitter.off("evtbackDownstreamLevelAdjustment");
      eventBus().emitter.off("evtcontinueDownstreamLevelAdjustment");
    },
  };
  </script>
  