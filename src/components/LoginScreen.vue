<template>
    <ion-page>
        <div class="wrapper">
            <div class="toparea">
                <h3 class="heading mb-0">Login as Wi-Fi <span>User Login</span></h3>
                <div class="networkinfo">
                    <p><span class="svgicon" v-html="$store.state.wifi"></span> <span> CADA-1TS1</span></p>
                </div>
            </div>        
            <div class="middlearea" style="height: calc(100vh - 90px);">
                <div class="card center about">
                    <form action="" class="login">
                        <ion-row>
                            <ion-col size-lg="6" size-sm="12" size="12">
                                <div class="custominput">                                    
                                    <ion-input label-placement="stacked" placeholder="Enter Name" required mode="ios">
                                        <div slot="label">User Name <ion-text color="danger">*</ion-text></div>
                                    </ion-input>   
                                    <span class="input-icon" v-html="$store.state.user"></span>
                                </div>     
                            </ion-col>                           
                            <ion-col size-lg="6" size-sm="12" size="12">
                                <div class="custominput">                                    
                                    <ion-input label-placement="stacked" type="password" placeholder="******" required mode="ios">
                                        <div slot="label">Password <ion-text color="danger">*</ion-text></div>
                                    </ion-input>   
                                    <span class="input-icon" v-html="$store.state.lock"></span>
                                </div>                                
                                
                            </ion-col>
                        </ion-row>
                    </form>         
                    
                    <div class="flex-box">                        
                        <ion-button class="btnprimary" mode="ios"><span class="svgicon md" v-html="$store.state.login"></span> <span class="svglabel">Login</span></ion-button>
                    </div>
                </div>
            </div>            
        </div>
    </ion-page>  
  </template>
  
  <script>
  import { useRouter } from 'vue-router';  
  export default {
    name: "LoginScreen",
    setup() {
      const router = useRouter();
      return {
        router,
      };
    },    
  }
  </script>