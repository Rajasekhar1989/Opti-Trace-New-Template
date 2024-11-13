<template>
  <div style="margin: 8px 0 15px;">  
    <ion-label class="label">{{ spincontrollabel }}</ion-label>
    <ion-item class="customSpincontrol" style="--background: transparent;--border-width: 0;--highlight-height:0px;--min-height:32px;--inner-border-width:0">		
        <ion-button
            @touchstart ="startDownSpin();" 
            @touchend="stopSpin();" 
            @touchcancel="stopSpin();" 
            class="decrement-button" :id="spindown"><span v-html="$store.state.squareminus"></span></ion-button>
        <span class="textbox">
            <input
                type="text"
                :step="steps"
                :min="minVal"
                :max="maxVal"
                :value="spinIniVal"
                :id="spinId"
                ref="spinId"
                @change="validateSpin($event)"
                v-on:keyup="restrictDecimal($event)"
                :tabindex="spintabBox"
                inputmode="decimal" 
            />
        </span>        
        <ion-button
            @touchstart ="startUpSpin();"
            @touchend="stopSpin();"
            @touchcancel="stopSpin();"
        class="increment-button" :id="spinup"> <span v-html="$store.state.squareplus"></span> </ion-button>
    </ion-item>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  name: "SpinControl",  
  data() {
    return {
        spincontrollabel:"Spin Label",
        minVal:0,
        maxVal:99,
        steps:1,
        getVal:0,
        fireEvent:'',
        precision:1,
        spinId:"ctrlId",
        spinup:"ctrlUp",
        spindown:"ctrlDown",
        spinInterval:0,
        spinTimeout:0,
        spintabDec:1,
        spintabBox:2,
        spintabInc:3,
        spinIniVal: 0
    };
  },
  props:{
    spinProp : Array
  },
  setup() {
    const router = useRouter();
    return {        
      router,
    };
  },
  
};
</script>