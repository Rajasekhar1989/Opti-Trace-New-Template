<template>
  <ion-page>
    <div id="container">
      <h5>MainMenu Page</h5>
    </div>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "MainMenu",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
