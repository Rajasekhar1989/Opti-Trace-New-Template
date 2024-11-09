<template>
  <ion-page>
    <div id="container">
      <h5>Dashboard Page</h5>
    </div>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Dashboard",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
