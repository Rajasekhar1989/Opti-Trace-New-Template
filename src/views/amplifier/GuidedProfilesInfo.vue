<template>  
    <ion-page>
        <ion-content class="ion-padding main-content">
            <div class="card auto">
                <h5 class="cardtitle">Profiles</h5>
                <ion-select label="Select Profile" label-placement="stacked" interface="action-sheet" placeholder="Profile 1">
                    <ion-select-option value="0">Default</ion-select-option>
                    <ion-select-option value="1">Profile 1</ion-select-option>
                    <ion-select-option value="2">Profile 2</ion-select-option>
                </ion-select>
                <div class="flex-box justify-center gap-15">
                    <div class="setBtn">
                        <ion-button class="btnprimary" mode="ios" disabled><span> Edit</span></ion-button>
                    </div>    
                    <div class="setBtn">
                        <ion-button class="btnerror" mode="ios" disabled><span> Delete</span></ion-button>
                    </div>            
                </div>        
            </div>    
            <ion-row>
            <ion-col size-md="6" size="12">
                <ion-button class="btnprimary full">Upload Profile from Phone</ion-button>
            </ion-col>
            <ion-col size-md="6" size="12">
                <ion-button class="btnprimary full mb-10">Apply Profile To Amplifier</ion-button>
            </ion-col>
            </ion-row>
            <div class="card auto">
            <h5 class="cardtitle">Health Status</h5>
            <h6 class="subtitle mb-10">VAC Alarm</h6>

            <div class="custominput noicon">                                    
                <ion-input label-placement="stacked" placeholder="123456" required mode="ios" value="123456">
                    <div slot="label">High Limit(V)</div>
                </ion-input>             
            </div>  
            <div class="custominput noicon mb-10">                                     
                <ion-input label-placement="stacked" placeholder="Enter value" required value="37.4" mode="ios">
                    <div slot="label">Low Limit(V)</div>
                </ion-input>             
            </div>  
            <h6 class="subtitle mb-10">VAC Alarm</h6>
            <div class="custominput noicon">                                    
                <ion-input label-placement="stacked" placeholder="Amp ID" required mode="ios" value="99.9">
                    <div slot="label">High Limit(V)</div>
                </ion-input>             
            </div>  
            <div class="custominput noicon mb-15">                                     
                <ion-input label-placement="stacked" placeholder="Low Limit(V)" required mode="ios" value="39.6">
                    <div slot="label">Low Limit(V)</div>
                </ion-input>             
            </div> 
            </div>            
            <div class="card auto">
                <h5 class="cardtitle mb-15">Downstream Configuration</h5>            
                <h6 class="subtitle">Pilot Frequencies</h6>
                <div class="custominput noicon">                                    
                    <ion-input label-placement="stacked" placeholder="99.0" required mode="ios" value="303">
                        <div slot="label">Pilot 1 (MHz)</div>
                    </ion-input>             
                </div>  
                <div class="custominput noicon mb-10">                                     
                    <ion-input label-placement="stacked" placeholder="Low Limit(V)" required mode="ios" value="1749">
                        <div slot="label">Pilot 2 (MHz)</div>
                    </ion-input>             
                </div> 
                <h6 class="subtitle">Gain and Tilt Frequencies</h6>
                <div class="custominput noicon">                                    
                    <ion-input label-placement="stacked" placeholder="99.0" required mode="ios" value="303">
                        <div slot="label">Low Frequency (MHz)</div>
                    </ion-input>             
                </div>  
                <div class="custominput noicon mb-10">                                     
                    <ion-input label-placement="stacked" placeholder="Low Limit(V)" required mode="ios" value="1749">
                        <div slot="label">High Frequency (MHz)</div>
                    </ion-input>             
                </div> 
            </div>
            <div class="card auto">
                <h5 class="cardtitle mb-15">Upstream Configuration</h5>            
                <h6 class="subtitle">Upstream Input Attenuation</h6>
                <SpinControl />
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import { useRouter } from "vue-router";
import SpinControl from "../../components/SpinControl.vue";
import eventBus from "../../assets/script/eventBus";
export default {
  name: "GuidedProfilesInfo",
  data() {
    return {};
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  mounted() {
    eventBus().emitter.on("evtbackGuidedProfilesInfo",()=>{
        this.$router.push("/amplifier/guidedconfigfile");
    });
    eventBus().emitter.on("evtcontinueGuidedProfilesInfo",()=>{
        localStorage.setItem("guidedDSPath","/amplifier/guidedprofilesinfo");
        this.$router.push("/amplifier/downstreamleveladjustment");
    });
  },
  unmounted() {
    eventBus().emitter.off("evtbackGuidedProfilesInfo");
    eventBus().emitter.off("evtcontinueGuidedProfilesInfo");
  },
  components: {
    SpinControl,
  },
};
</script>
