<template>
    <div>
      <div class="alarmstatus">
        <ion-label class="error"><span v-html="$store.state.checkcircle"></span> <span>Status</span></ion-label>
      </div>
      <div class="card auto">        
        <ion-list mode="ios" class="alarms">
       
            <ion-row>
              <ion-col size="9" size-sm="11">
                <div class="custominput addnav">
                  <div style="padding-left:38px;">
                    <ion-input label-placement="stacked" placeholder="119.7">                    
                      <div slot="label">VAC (V)</div>
                    </ion-input> 
                  </div>                  
                  <span class="statusicon success" v-html="$store.state.checkcircle"></span>
                  <ion-button class="iconbtn"> <span v-html="$store.state.angleright"> </span> </ion-button>
                </div>
              </ion-col>
              <ion-col size="3" size-sm="1" class="center">
                <ion-toggle :checked="togglechk" justify="end"></ion-toggle>
              </ion-col>
            </ion-row>
        
          
            <ion-row>
              <ion-col size="9" size-sm="11">
                <div class="custominput addnav">
                  <div style="padding-left:38px;">
                    <ion-input label-placement="stacked" placeholder="10.2">                    
                      <div slot="label">24 VDC (V)</div>
                    </ion-input> 
                  </div>                  
                  <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                </div>
              </ion-col>
              <ion-col size="3" size-sm="1" class="center">
                <ion-toggle :checked="togglechk" justify="end"></ion-toggle>
              </ion-col>
            </ion-row>
   
        
            <ion-row>
              <ion-col size="9" size-sm="11">
                <div class="custominput addnav">
                  <div style="padding-left:38px;">
                    <ion-input label-placement="stacked" placeholder="4.0">                    
                      <div slot="label">5 VDC (V)</div>
                    </ion-input> 
                  </div>                  
                  <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                </div>
              </ion-col>
              <ion-col size="3" size-sm="1" class="center">
                <ion-toggle :checked="togglechk" justify="end"></ion-toggle>
              </ion-col>
            </ion-row>
         
            <ion-row>
              <ion-col size="9" size-sm="11">
                <div class="custominput addnav">
                  <div style="padding-left:38px;">
                    <ion-input label-placement="stacked" placeholder="4.0">                    
                      <div slot="label">8 VDC (V)</div>
                    </ion-input> 
                  </div>                  
                  <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                </div>
              </ion-col>
              <ion-col size="3" size-sm="1" class="center">
                <ion-toggle :checked="togglechk" justify="end"></ion-toggle>
              </ion-col>
            </ion-row>
         
            <ion-row>
              <ion-col size="9" size-sm="11">
                <div class="custominput addnav">
                  <div style="padding-left:38px;">
                    <ion-input label-placement="stacked" placeholder="2.0">                    
                      <div slot="label">Temperature (°C)</div>
                    </ion-input> 
                  </div>                  
                  <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                </div>
              </ion-col>
              <ion-col size="3" size-sm="1" class="center">
                <ion-toggle :checked="togglechk" justify="end"></ion-toggle>
              </ion-col>
            </ion-row>
        
            <ion-row>
              <ion-col size="9" size-sm="11">
                <div class="custominput addnav">
                  <div style="padding-left:38px;">
                    <ion-input label-placement="stacked" placeholder="COMM Error">                    
                      <div slot="label">SMU</div>
                    </ion-input> 
                  </div>                  
                  <span class="statusicon success" v-html="$store.state.checkcircle"></span>                  
                </div>
              </ion-col>
              <ion-col size="3" size-sm="1" class="center">
                <ion-toggle :checked="togglechk" justify="end"></ion-toggle>
              </ion-col>
            </ion-row>
        
            <ion-row>
              <ion-col size="9" size-sm="11">
                <div class="custominput addnav">
                  <div style="padding-left:38px;">
                    <ion-input label-placement="stacked" placeholder="204/258">                    
                      <div slot="label">RPF ( MHz )</div>
                    </ion-input> 
                  </div>                  
                  <span class="statusicon error" v-html="$store.state.close"></span>                  
                </div>
              </ion-col>
              <ion-col size="3" size-sm="1" class="center">
                <ion-toggle :checked="togglechk" justify="end"></ion-toggle>
              </ion-col>
            </ion-row>
         
        </ion-list>
      </div>
    </div>  
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  
  export default {
    name: "HealthStatus",
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
  };
  </script>
  