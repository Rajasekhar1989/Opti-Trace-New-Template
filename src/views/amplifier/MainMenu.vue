### Base component:
<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
      
      <div class="card">
        <ion-list class="devicelist menu" mode="ios">
          <ion-item @click="navHealthstatus">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.healthstatus"></span>
                <span class="device-name">Health Status</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span>            
              </div>                    
            </ion-label>
          </ion-item>
          <ion-item @click="navDeviceconfig">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.deviceconfig"></span>
                <span class="device-name">Device Configuration</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>   
          <ion-item @click="navdownstreamconfig">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.downstream"></span>
                <span class="device-name">Downstream Configuration</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>
          <ion-item @click="navupstreamconfig">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.upstream"></span>
                <span class="device-name">Upstream Configuration</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>
          <ion-item @click="navadvanceddiagnostics">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.diagnostics"></span>
                <span class="device-name">Advanced Diagnostics</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>  
          <ion-item @click="navutilities">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.utilities"></span>
                <span class="device-name">Utilities</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item> 
          <ion-item @click="navprofiles">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.profiles"></span>
                <span class="device-name">Profiles</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>   
          <ion-item @click="navspectrumdisplay">
            <ion-label>
              <div>
                <span class="device-icon" v-html="$store.state.spectrum"></span>
                <span class="device-name">Spectrum Display</span>
                <span class="angle-icon" v-html="$store.state.angleright"></span> 
              </div>            
            </ion-label>
          </ion-item>
        </ion-list>
      </div>      
    </ion-content>          
  </ion-page>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
  name: "MainMenu",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },  
  methods:{
    navHealthstatus:function(){
      this.$router.push("/amplifier/healthstatus");
    },
    navDeviceconfig: function(){
      this.$router.push("/amplifier/deviceconfiguration");     
    },
    navdownstreamconfig: function(){      
      this.$router.push("/amplifier/downstreamconfiguration");      
    },
    navupstreamconfig: function(){
      this.$router.push("/amplifier/upstreamconfiguration");      
    },
    navadvanceddiagnostics: function(){      
      this.$router.push("/amplifier/advanceddiagnostics");      
    },
    navutilities: function(){      
      this.$router.push("/amplifier/utilitiesmenu");              
    },
    navprofiles: function(){      
      this.$router.push("/amplifier/profilesinfo");                    
    },
    navspectrumdisplay: function(){
      this.$router.push("/amplifier/spectrumdisplay");
    }
  }
}
</script>
