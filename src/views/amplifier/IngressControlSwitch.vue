<template>  
    <div class="card auto"> 
        <h5 class="cardtitle">Ingress Control Switch</h5>
        <h6 class="subtitle mt-10">Port 2</h6>

        <div class="customradio">
            <ion-radio-group value="6db">                
                <ion-row>
                    <ion-col size="6">
                        <ion-radio value="6db">6 dB</ion-radio><br />
                    </ion-col>
                    <ion-col size="6">
                        <ion-radio value="0db">0 dB</ion-radio><br />
                    </ion-col>
                    <ion-col size="6">
                        <ion-radio value="max">MAX</ion-radio>
                    </ion-col>
                </ion-row>
            </ion-radio-group>
        </div>      
        
        <h6 class="subtitle">Select Port 3 / 4</h6>

        <div class="customradio">
            <ion-radio-group value="6db">                
                <ion-row>
                    <ion-col size="6">
                        <ion-radio value="0db">0 dB</ion-radio><br />
                    </ion-col>
                    <ion-col size="6">
                        <ion-radio value="6db">6 dB</ion-radio><br />
                    </ion-col>                        
                    <ion-col size="6">
                        <ion-radio value="max">MAX</ion-radio>
                    </ion-col>
                </ion-row>
            </ion-radio-group>
        </div>            
    </div>
  </template>
  
  <script>
  import { useRouter } from "vue-router";     
  export default {
    name: "IngressControlSwitch",
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
  };
  </script>
  