<template>  
    <ion-page>
        <ion-content class="ion-padding main-content">
            <div class="card auto">
                <h5 class="cardtitle">Select Auxilary Plug-in</h5>

                <div class="customradio full">
                    <ion-radio-group value="jmp">                            
                        <ion-radio value="jmp">JMP</ion-radio>            
                        <ion-radio value="1.2ghz">1.2GHz Enhancer</ion-radio>            
                        <ion-radio value="hs1">HS1</ion-radio>
                        <ion-radio value="hs2">HS2</ion-radio>
                        <ion-radio value="pa1">PA1</ion-radio>
                        <ion-radio value="pa2">PA2</ion-radio>
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
    name: "GuidedSetup",   
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
      eventBus().emitter.on("evtcontinueGuidedSetup",()=>{
        this.$router.push("/amplifier/downstreamlevelselection");
      });
    },
    unmounted() {
      eventBus().emitter.off("evtcontinueGuidedSetup");
    },
    
  };
  </script>
  