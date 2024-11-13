<template>
    <div>      
      <div class="card auto">      
        <div class="customselect">
            <ion-select label="Universal Plugin" label-placement="stacked" interface="action-sheet" placeholder="1.2GHz Enhancer">
                <ion-select-option value="0">1.2GHz Enhancer</ion-select-option>
                <ion-select-option value="1">1.5GHz Enhancer</ion-select-option>
                <ion-select-option value="2">1.4GHz Enhancer</ion-select-option>
            </ion-select> 
        </div>            
        <div class="setBtn center">
            <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
        </div>            
      </div>
      <div class="card auto">  
        <h5 class="cardtitle">Auxiliary Plug-in</h5>    
        <div class="customselect">
            <ion-select label="Type" label-placement="stacked" interface="action-sheet" placeholder="2-Way">
                <ion-select-option value="0">2-Way</ion-select-option>
                <ion-select-option value="1">1-Way</ion-select-option>
                <ion-select-option value="2">4-Way</ion-select-option>
            </ion-select> 
        </div>     
        <div class="customselect">
            <ion-select label="Port 3" label-placement="stacked" interface="action-sheet" placeholder="Through">
                <ion-select-option value="0">Through</ion-select-option>                
            </ion-select> 
        </div>             
        <div class="customselect">
            <ion-select label="Port 4" label-placement="stacked" interface="action-sheet" placeholder="Through">
                <ion-select-option value="0">Through</ion-select-option>                
            </ion-select> 
        </div>             
        <div class="setBtn center">
            <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
        </div>            
      </div>
      <div class="card auto">  
        <h5 class="cardtitle">Trunking pad Value</h5>    
        <SpinControl />
        <SpinControl />
        <div class="setBtn center">
            <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
        </div> 
      </div>
    </div>  
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  import SpinControl from "../../components/SpinControl.vue";
  
  export default {
    name: "DeviceConfiguration",
    data(){
        return{
          togglechk:false,
        }        
      },
      components:{
        SpinControl
      }, 
    setup() {
      const router = useRouter();
      return {        
        router,
      };
    },
  };
  </script>
  