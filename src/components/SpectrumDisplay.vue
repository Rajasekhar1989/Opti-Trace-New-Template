<template>   
    <div class="card auto">        
        <ion-select label="Select Device" label-placement="stacked" interface="action-sheet" placeholder="CADA-1TS1">
            <ion-select-option value="0">CADA-1TS1</ion-select-option>
            <ion-select-option value="1">CADA M3</ion-select-option>            
        </ion-select>        
        <div class="setBtn mt-15 center">
            <ion-button class="btnprimary lg" mode="ios"><span> Get Spectrum </span></ion-button>
        </div>        
        
        <ion-row class="mt-15">
            <ion-col size-sm="8">
                <h5 class="cardtitle">Continues Sweep</h5>
            </ion-col>
            <ion-col size-sm="4">
                <ion-toggle :checked="togglechk" justify="end"></ion-toggle>
            </ion-col>
        </ion-row>
    </div>       
    <div class="card auto"> </div>
     
  </template>
  
  <script>
  import { useRouter } from "vue-router";     
  export default {
    name: "SpectrumDisplay",
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
  