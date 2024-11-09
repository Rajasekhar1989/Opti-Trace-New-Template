<template>
  <ion-page>
    <div id="container">
      <h5>ConnEstablished Page</h5>
    </div>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ConnEstablished",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
