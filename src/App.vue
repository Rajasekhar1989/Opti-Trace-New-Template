<template>
  <ion-app v-if="isLogin" class="wrapper">        
    <Login v-if="false" />
    <WelcomeScreen v-if="false" />
    <ConnectionType v-if="false" />
    <LoginScreen  />
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
import Login from "./components/Login.vue";
import ConnectionType from "./components/ConnectionType.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import LoginScreen from "./components/LoginScreen.vue";
import Sidemenu from "./components/Sidemenu.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Login,
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
};
</script>
