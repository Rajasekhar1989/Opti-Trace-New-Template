<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
     <div class="notes">
        <p>SMU and Split Unknown <span class="svgicon" v-html="$store.state.notepin"></span></p>
     </div> 
    <div class="card auto">
      <h5 class="cardtitle">Configure Pilots</h5>
      <h6 class="subtitle mb-10">Pilot 1</h6>
      <div class="custominput noicon">                                    
          <ion-input label-placement="stacked" placeholder="123456" required mode="ios" value="123456">
              <div slot="label">Center Frequency</div>
          </ion-input>             
      </div>  
      <div class="custominput noicon mb-10">                                     
          <ion-input label-placement="stacked" placeholder="Enter value" required value="37.4" mode="ios">
              <div slot="label">Start Frequency</div>
          </ion-input>             
      </div> 
      <div class="custominput noicon mb-10">                                     
          <ion-input label-placement="stacked" placeholder="Enter value" required value="37.4" mode="ios">
              <div slot="label">End Frequency</div>
          </ion-input>             
      </div>  
      <div class="setBtn center">
        <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
      </div>

      <div class="ion-margin-top">
        <h6 class="subtitle mb-10">Pilot 2</h6>
        <div class="custominput noicon">                                    
            <ion-input label-placement="stacked" placeholder="123456" required mode="ios" value="123456">
                <div slot="label">Center Frequency</div>
            </ion-input>             
        </div>  
        <div class="custominput noicon mb-10">                                     
            <ion-input label-placement="stacked" placeholder="Enter value" required value="37.4" mode="ios">
                <div slot="label">Start Frequency</div>
            </ion-input>             
        </div>  
        <div class="custominput noicon mb-10">                                     
          <ion-input label-placement="stacked" placeholder="Enter value" required value="37.4" mode="ios">
              <div slot="label">End Frequency</div>
          </ion-input>             
        </div> 
        <div class="setBtn center">
          <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
        </div>
      </div>
      
    </div>
  </ion-content>
  </ion-page>

  </template>
  
  <script>
  import { useRouter } from "vue-router";  
  import eventBus from '../../assets/script/eventBus';
  export default {
    name: "GuidedSetupPilotSetup",
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
      eventBus().emitter.on("evtcontinueGuidedSetupPilotSetup",()=>{
        this.$router.push("/amplifier/gaintiltfreq");
      });
    },
    unmounted() {
      eventBus().emitter.off("evtcontinueGuidedSetupPilotSetup");
    },
  };
  </script>
  