<template>
  <ion-app v-if="isLogin" class="wrapper">
    <WelcomeScreen v-show="isWelcome"  />
    <ConnectionType v-show="isConType" />
    <LoginScreen v-show="isLoginScreen" />
  </ion-app>
  <ion-app v-else>
    <!-- Side Menu -->
    <Sidemenu />

    <!-- Header Content -->
    <Header />

    <!-- Main Content -->
    <ion-content id="main-content" :fullscreen="true" class="wrapper">      
        <ion-router-outlet :animated="false" />      
    </ion-content>
    <!-- Footer -->
    <Footer />
  </ion-app>
</template>

<script>
import "./assets/css/styles.css";
import ConnectionType from "./components/ConnectionType.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import LoginScreen from "./components/LoginScreen.vue";
import Sidemenu from "./components/Sidemenu.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import eventBus from "./assets/script/eventBus";
import { useRouter } from "vue-router";

export default {
  name: "App",
  data() {
    return {
      isWelcome: true,
      isConType: false,
      isLoginScreen: false,
    };
  },
  components: {
    WelcomeScreen,
    ConnectionType,
    LoginScreen,
    Sidemenu,
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  computed: {
    isLogin() {
      let resp = localStorage.getItem("isLogin");
      return resp == undefined || resp == null ? true : false;
    },
  },
  created() {
    setTimeout(() => {
      this.isWelcome = false;
      this.isConType = true;
    }, 3000);
  },
  mounted() {
    eventBus().emitter.on("evtconnectiontype",()=>{
      this.isConType = false;
      this.isLoginScreen = true;
    });
    eventBus().emitter.on("evtbtnback",()=>{
      this.isLoginScreen = false;
      this.isConType =  true;
    });
  },
  unmounted() {
    eventBus().emitter.off("evtconnectiontype");
    eventBus().emitter.off("evtbtnback");
  }
};
</script>
