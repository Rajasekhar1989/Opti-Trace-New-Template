<template>
    <ion-page>
      <div class="wrapper">
            <div class="toparea">
                <h3 class="heading mb-0">Login as Wi-Fi <span>User Login</span></h3>
                <div class="networkinfo">
                    <p><span class="svgicon" v-html="$store.state.wifi"></span> <span> CADA-1TS1</span></p>
                </div>
            </div>        
            <div class="middlearea" style="height: calc(100vh - 160px);">
                <div class="card center about">
                    <form action="" class="login">
                        <ion-row>
                            <ion-col size-lg="6" size-sm="12" size="12">
                                <div class="custominput">                                    
                                    <ion-input 
                                        label-placement="stacked" 
                                        v-model="txtUsername" 
                                        placeholder="Enter Name" 
                                        required 
                                        mode="ios"
                                        @keydown="preventSpace">
                                        <div slot="label">User Name <ion-text color="danger">*</ion-text></div>
                                    </ion-input>   
                                    <span class="input-icon" v-html="$store.state.user"></span>
                                </div>     
                            </ion-col>                           
                            <ion-col size-lg="6" size-sm="12" size="12">
                                <div class="custominput">                                    
                                    <ion-input 
                                        label-placement="stacked" 
                                        v-model="txtPassword" 
                                        type="password" 
                                        placeholder="******" 
                                        required 
                                        mode="ios"
                                        @keydown="preventSpace">
                                        <div slot="label">Password <ion-text color="danger">*</ion-text></div>
                                    </ion-input>   
                                    <span class="input-icon" v-html="$store.state.lock"></span>
                                </div>                                
                            </ion-col>
                        </ion-row>
                    </form>
                    <div class="center ion-padding-top">                        
                        <ion-button @click="btnLogin" class="btnprimary sm" mode="ios"><span class="svgicon" v-html="$store.state.login"></span> <span class="svglabel">Login</span></ion-button>
                    </div>                     
                </div>
            </div>    
            <div class="bottomarea">    
                <ion-button @click="btnBack" mode="ios" class="btnprimary">Back</ion-button>                        
            </div>        
        </div>
    </ion-page>  
  </template>
  
<script>
import { useRouter } from "vue-router";
import eventBus from "../assets/script/eventBus";
import { InformationMsg } from "../assets/script/common";

export default {
  name: "LoginScreen",
  data() {
    return {
      txtUsername: "",
      txtPassword: "",
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    preventSpace(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    },
    btnLogin: function () {
      if (this.txtUsername == "" || this.txtPassword == "") {
        let errMsg = (this.txtUsername == "") ? "Please enter username." : "Please enter password.";
        InformationMsg(errMsg, "login");
        return;
      }
      localStorage.setItem("isLogin", "suresh");
      this.$router.push("/amplifier/selectdevice");
      setTimeout(() => {
        window.location.reload();
      }, 300);
    },
    btnBack: function () {
      eventBus().emitter.emit("evtbtnback");
    },
  },
};
</script>
