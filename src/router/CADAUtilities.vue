<template>
    <ion-page>
      <ion-content class="ion-padding main-content">
      <div class="middlearea">
       <div class="card">
          <ion-list class="devicelist menu" mode="ios">
            <ion-item @click="navcadadeviceinfo">
              <ion-label>
                <div>
                  <span class="device-icon sm" v-html="$store.state.deviceinfo"></span>
                  <span class="device-name">Device Information</span>
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
      name: "CADAUtilities",
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
        navcadadeviceinfo: function(){
          this.$router.push("../cada/cadadeviceinformation");
        }       
      }
    };
    </script>
    