<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <router-link to="/dashboard" class="menu-item">
          <ion-item>Dashboard</ion-item>
        </router-link>
        <router-link to="/amplifier/connestablished" class="menu-item">
          <ion-item>Conn Established</ion-item>
        </router-link>
        <router-link to="/amplifier/mainmenu" class="menu-item">
          <ion-item>Main Menu</ion-item>
        </router-link>
      </ion-list>
      <ion-button @click="btnLogout">Logout</ion-button>
    </ion-content>
  </ion-menu>
</template>
<script>
export default {
  name: "Sidemenu",
  methods: {
    btnLogout: function () {
      localStorage.removeItem("isWelcome");
      setTimeout(() => {
        this.$router.push("/welcome");
        window.location.reload();
      }, 300);
    },
  },
};
</script>
