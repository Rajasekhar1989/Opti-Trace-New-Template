<template>  
<ion-page>
  <ion-content class="ion-padding main-content">
    <div class="card auto">
        <h5 class="cardtitle">Downstream Levels</h5>  
        <div class="customradio full">
            <ion-radio-group value="trunk">                                             
                <ion-radio value="standard">Standard</ion-radio>        
                <ion-radio value="trunk">Trunk</ion-radio>        
            </ion-radio-group>
        </div>         
        <div class="setBtn center">
            <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
        </div> 
    </div>  
  </ion-content>
  </ion-page>
  </template>
  
  <script>
  import { useRouter } from "vue-router";     
  import eventBus from '../../assets/script/eventBus';   
  export default {
    name: "DownstreamLevelSelection",   
    data(){
        return{             
        }        
      },          
    setup() {
      const router = useRouter();      
      return {       
        router,
      };
    },
    mounted() {
      eventBus().emitter.on("evtcontinueDownstreamLevelSelection",()=>{
        this.$router.push("/amplifier/trunkleveldetailview");
      });
    },
    unmounted() {
      eventBus().emitter.off("evtcontinueDownstreamLevelSelection");
    },
  };
  </script>
  