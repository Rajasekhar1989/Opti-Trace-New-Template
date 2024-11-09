<template>
    <ion-page>
      <div id="container">
        <h5>Login Page</h5>
        <ion-button @click="btnLogin">Login</ion-button>
      </div>
    </ion-page>  
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: "Login",
    setup() {
      const router = useRouter();
      return {
        router,
      };
    },
    methods: {
      btnLogin: function() {
        localStorage.setItem("isLogin", "suresh");
        this.router.push("/dashboard");
        setTimeout(() => {
          window.location.reload();
        }, 300);
      }
    }
  }
  </script>