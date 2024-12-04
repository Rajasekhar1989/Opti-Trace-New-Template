<template>
  <ion-page>
    <ion-content class="ion-padding main-content">
      <div>
        <SpinControl
          :id="'control-a'"
          :label="'Control A'"
          :value="controlAValue"
          :min="0"
          :max="31.5"
          :step="0.5"
        />

        <SpinControl
          :id="'control-b'"
          :label="'Control B'"
          :value="controlBValue"
          :min="0"
          :max="31.5"
          :step="0.5"
        />

        <SpinControl
          :id="'control-port2'"
          :label="'Port 2'"
          :value="15"
          :min="0"
          :max="31.5"
          :step="0.5"
        />
      </div>

      <button @click="btnUpdate">Update</button>
    </ion-content>
  </ion-page>
</template>

<script>
import eventBus from "../assets/script/eventBus";
import SpinControl from "./TestSpin.vue";

export default {
  name: "DemoSpin",
  components: {
    SpinControl,
  },
  data() {
    return {
      controlAValue: 13,
      controlBValue: 28,
    };
  },
  mounted() {
    eventBus().emitter.on("evtspinchgdemospin", (resp) => {
      console.log("ChagData", resp);
    });
  },
  unmounted() {
    eventBus().emitter.off("evtspinchgdemospin");
  },
  methods: {
    btnUpdate() {
        const updates = [
            { id: "control-a", value: 29 },
            { id: "control-b", value: 23 },
        ];
        eventBus().emitter.emit("updatevalue", updates);
    },
  },
};
</script>
