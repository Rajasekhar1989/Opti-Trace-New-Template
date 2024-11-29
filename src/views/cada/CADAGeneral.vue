<template>
    <ion-page>
      <ion-content class="ion-padding main-content">
      <div class="middlearea">
       <div class="card">
          <ion-list class="devicelist menu" mode="ios">
            <ion-item @click="navcadautilities">
              <ion-label>
                <div>
                  <span class="device-icon sm" v-html="$store.state.utilities"></span>
                  <span class="device-name">Utilities</span>
                  <span class="angle-icon" v-html="$store.state.angleright"></span>            
                </div>                    
              </ion-label>
            </ion-item>
            <ion-item @click="navupgradepackage">
              <ion-label>
                <div>
                  <span class="device-icon sm" v-html="$store.state.upgradefirmware"></span>
                  <span class="device-name">Upgrade Package</span>
                  <span class="angle-icon" v-html="$store.state.angleright"></span>            
                </div>                    
              </ion-label>
            </ion-item> 
            <ion-item @click="navcadareboot">
              <ion-label>
                <div>
                  <span class="device-icon sm" v-html="$store.state.reboot"></span>
                  <span class="device-name">Reboot</span>
                  <span class="angle-icon" v-html="$store.state.angleright"></span>            
                </div>                    
              </ion-label>
            </ion-item>            
          </ion-list>
        </div>
      </div>
    </ion-content>
    </ion-page>  
    </template>
    
    <script>
    import { useRouter } from "vue-router";   
    
    export default {
      name: "CADAGeneral",
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
        navcadautilities: function(){
          this.$router.push("../cada/cadautilities");
        },
        navupgradepackage: function(){
          this.$router.push("../cada/uploadpackage");
        },
        navcadareboot: function(){
          this.$router.push("../cada/deviceinformation");
        }
      }
    };
    </script>
    