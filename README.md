### Key Points:
- Avoid using require in Vite projects, as it's not supported natively in browser environments without additional configuration.

### Change Router : 
- this.$router.push("");

### Eventbus : npm i tiny-emitter
- Fire Event      :   eventBus().emitter.emit("");
- Handle Event    :   eventBus().emitter.on("",()=>{});
- Destroy Event   :   eventBus().emitter.off("");

### Base component:
<template>
  <ion-page>
    <div>
      <h5>About Page</h5>
    </div>
  </ion-page>  
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "AboutPage",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
}
</script>
