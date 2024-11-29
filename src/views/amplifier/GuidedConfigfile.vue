<template>  
<ion-page>
    <ion-content class="ion-padding main-content">
        <div class="middlearea">
            <div class="card auto">
                <h5 class="cardtitle center">Do you want to load a configuration file?</h5>
                <figure class="fileicon">
                    <span class="svgicon xl" v-html="$store.state.configfile"> </span>
                </figure>
                <div class="modalBtns flex-box space-between">
                    <ion-button @click="navguidedProfiles" class="sm success" mode="ios" >Yes</ion-button>
                    <ion-button @click="navconfigVAC" class="sm error" mode="ios" >No</ion-button>
                </div>
            </div> 
        </div>
    </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { useRouter } from "vue-router";      
  export default {
    name: "GuidedConfigfile",   
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
    methods:{
        navconfigVAC: function(){
            this.$router.push("/amplifier/guidedconfigurevacthresholds");
        },
        navguidedProfiles: function(){
          this.$router.push("/amplifier/guidedprofilesinfo");
        }

    }
    
  };
  </script>
  