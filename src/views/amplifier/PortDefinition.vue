<template>  
<ion-page>
  <ion-content class="ion-padding main-content">
    <div class="card auto">
        <h5 class="cardtitle">Auxiliary Plug-in Selected</h5>
        <div class="customradio full">
            <ion-radio-group value="jmp">
                <ion-radio value="jmp">JMP</ion-radio>
            </ion-radio-group>
        </div>
        <h5 class="cardtitle">Select Port 3 Definition</h5>
        <div class="customradio">
            <ion-radio-group value="tap">               
                <ion-row class="ion-justify-content-between">
                    <ion-col size-sm="4" size="5">
                        <ion-radio value="through">Through</ion-radio>
                    </ion-col>
                    <ion-col size-sm="4" size="5">
                        <ion-radio value="tap">TAP</ion-radio>
                    </ion-col>
                </ion-row>                                
            </ion-radio-group>
        </div>
        <h5 class="cardtitle">Select Port 4 Definition</h5>
        <div class="customradio full">
            <ion-radio-group value="through">  
                <ion-row class="ion-justify-content-between">
                    <ion-col size-sm="4" size="5">
                        <ion-radio value="through">Through</ion-radio>
                    </ion-col>
                    <ion-col size-sm="4" size="5">
                        <ion-radio value="tap">TAP</ion-radio>
                    </ion-col>
                </ion-row>
            </ion-radio-group>
        </div>   
    </div>  
    </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { useRouter } from "vue-router";  
  import eventBus from '../../assets/script/eventBus';   
  export default {
    name: "PortDefinition",   
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
      eventBus().emitter.on("evtbackPortDefinition",()=>{
        this.$router.push("/amplifier/downstreamlevelselection");
      });
    },
    unmounted() {
      eventBus().emitter.off("evtbackPortDefinition");
    },
    
    
  };
  </script>
  