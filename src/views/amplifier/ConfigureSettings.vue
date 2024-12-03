<template>
    <ion-page>
      <ion-content class="ion-padding main-content">            
        <h5 class="cardtitle mb-15">ConfigureSettings</h5>
        <div class="card auto">                           
            <h5 class="cardtitle">Downstream Configuration</h5>     
            <h6 class="subtitle">Pilot Frequencies</h6>
            <div class="custominput noicon mb-10">                                    
                <ion-input label-placement="stacked" placeholder="303" required mode="ios" value="303">
                    <div slot="label">Pilot 1</div>
                </ion-input>             
            </div> 
            <div class="custominput noicon mb-10">                                    
                <ion-input label-placement="stacked" placeholder="1749" required mode="ios" value="1749">
                    <div slot="label">Pilot 2</div>
                </ion-input>             
            </div> 

          <div class="setBtn center mb-15">
              <ion-button class="btnprimary" mode="ios" @click="navpilotsetup"><span> Edit</span></ion-button>
          </div> 
          <h6 class="subtitle">Gain and Tilt Frequencies</h6>
            <div class="custominput noicon mb-10">                                    
                <ion-input label-placement="stacked" placeholder="303" required mode="ios" value="303">
                    <div slot="label">Pilot 1</div>
                </ion-input>             
            </div> 
            <div class="custominput noicon mb-10">                                    
                <ion-input label-placement="stacked" placeholder="1749" required mode="ios" value="1749">
                    <div slot="label">Pilot 2</div>
                </ion-input>             
            </div>  
            <div class="setBtn center mb-15">
                <ion-button class="btnprimary" mode="ios" @click="navpilotsetup"><span> Edit</span></ion-button>
            </div>
                      
        </div>
        

        </ion-content>
      </ion-page>
      
    </template>
    
    <script>
    import { useRouter } from "vue-router";
    import SpinControl from "../../components/SpinControl.vue";
  import eventBus from "../../assets/script/eventBus";
    
    export default {
      name: "ConfigureSettings",
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
        mounted() { 
            eventBus().emitter.on("evtbackConfigureSettings",()=>{
                this.$router.push("/amplifier/downstreamconfiguration");
            });
        },
        unmounted() {
            eventBus().emitter.off("evtbackConfigureSettings");
        },
        methods:{
            navpilotsetup: function (){
                this.$router.push("/amplifier/pilotsetup");
            }
        }
    };
    </script>
    