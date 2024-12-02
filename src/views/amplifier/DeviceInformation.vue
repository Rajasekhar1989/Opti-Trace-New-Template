<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
        <div class="card auto">
            <h5 class="cardtitle">Device Information</h5>
            <h6 class="subtitle mb-10">Information</h6>

            <table class="table">
                
                <tbody>
                    <tr>
                        <td>Amp Model</td>
                        <td>MB180</td>
                    </tr>
                    <tr>
                        <td>Amp Serial</td>
                        <td>E24TJ18813150001</td>
                    </tr>
                    <tr>
                        <td>Hardware Revision</td>
                        <td>1.A</td>
                    </tr>
                    <tr>
                        <td>Firmware Version</td>
                        <td>4.25</td>
                    </tr>
                    <tr>
                        <td>Loader Version</td>
                        <td>41.25</td>
                    </tr>
                    <tr>
                        <td>SMU Type</td>
                        <td>Not Present </td>
                    </tr>
                    <tr>
                        <td>SMU Serial</td>
                        <td>Not Present </td>
                    </tr>
                    <tr>
                        <td>Split Configuration</td>
                        <td>Not Present </td>
                    </tr>
                </tbody>
            </table>

            <h6 class="subtitle mb-10">Station ID</h6>
            <div class="custominput noicon mb-15">                                     
                <ion-input label-placement="stacked" placeholder="Low Limit(V)" required mode="ios" value="39.6">
                    <div slot="label">Node ID</div>
                </ion-input>             
            </div> 
            <div class="custominput noicon mb-15">                                     
                <ion-input label-placement="stacked" placeholder="Low Limit(V)" required mode="ios" value="39.6">
                    <div slot="label">Amp ID</div>
                </ion-input>             
            </div> 
            <div class="setBtn center">
                <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
            </div> 
            <div class="customarea noicon mb-15">    
                <ion-textarea label="User Notes" label-placement="stacked" :counter="true" maxlength="52"></ion-textarea>            
            </div> 
            <div class="setBtn center mb-15">
                <ion-button class="btnprimary" mode="ios"><span> Set</span></ion-button>
            </div>
            <h6 class="subtitle mb-10">Geolocation (Latitude, Longitude)</h6>
            <div class="custominput noicon mb-15">
                <ion-input aria-label="Number"></ion-input>
            </div>
            <div class="setBtn center mb-15">
                <ion-button class="btnprimary" mode="ios"><span> Update Amplifier Location</span></ion-button>
            </div>
            <h6 class="subtitle mb-10">Amplifier Geolocation (Latitude, Longitude)</h6>            
            <div class="custominput noicon mb-15">
                <ion-input aria-label="Number"></ion-input>
            </div>
            <h6 class="subtitle mb-10"><span class="text">Setup Configuration</span>
                <ion-button fill="clear" id="more-info"><span class="svgicon w20" v-html="$store.state.moreinfo"></span></ion-button>
            </h6>            
            <ion-modal id="example-modal" ref="modal" trigger="more-info">
                <div class="modalWrapper">
                    <div class="modalIcontype warning">                          
                        <span class="svgicon" v-html="$store.state.infoicon"></span>                          
                    </div>
                    <div class="modalInfo">
                        <p class="mt-0">Update Setup Configuration, Gain and Tilt Settings by changing from Manual to AGC Mode.</p>
                    </div>                        
                    <div class="setBtn center">
                        <ion-button class="btnprimary" mode="ios" @click="closeModal">OK</ion-button>                    
                    </div>
                </div>
            </ion-modal>
            <table class="table">                
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>Nov 27, 2024</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>06:21:16 PM</td>
                    </tr>
                    <tr>
                        <td>Amplifier Temperature</td>
                        <td>0.0 °C</td>
                    </tr>
                    
                </tbody>
            </table>
            <h6 class="subtitle mb-10">Downstream Gain and Tilt Settings</h6>
            <table class="table">                
                <tbody>
                    <tr>
                        <td>Low Frequency</td>
                        <td>303 MHz</td>
                    </tr>
                    <tr>
                        <td>High Frequency</td>
                        <td> 1749 MHz</td>
                    </tr>
                    <tr>
                        <td>High Frequency Gain</td>
                        <td>0.0 dB</td>
                    </tr>
                    <tr>
                        <td>Tilt</td>
                        <td>0.0 dB</td>
                    </tr>
                    
                </tbody>
            </table>
            <h6 class="subtitle mb-10">Upstream Gain and Tilt Settings</h6>
            <table class="table">                
                <tbody>
                    <tr>
                        <td>High Frequency Gain</td>
                        <td>24.1 dB</td>
                    </tr>
                    <tr>
                        <td>Tilt</td>
                        <td>0.0 dB</td>
                    </tr>
                </tbody>
            </table>
            <div class="setBtn center mb-15">
                <ion-button class="btnprimary" mode="ios"><span class="svgicon" v-html="$store.state.downloaddoc"></span> <span>  Save Birth Certificate</span></ion-button>
            </div>
        </div>
    </ion-content>
  </ion-page>  
</template>

<script>
import { useRouter } from 'vue-router';
import eventBus from '../../assets/script/eventBus';

export default {
  name: "DeviceInformation",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  mounted() { 
        eventBus().emitter.on("evtbackDeviceInformation",()=>{
        this.$router.push("/amplifier/utilitiesmenu");
        });
    },
    unmounted() {
        eventBus().emitter.off("evtbackDeviceInformation");
    },
  methods: {
    closeModal() {
      this.$refs.modal.$el.dismiss();
    },
  }
}
</script>