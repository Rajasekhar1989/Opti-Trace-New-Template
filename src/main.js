import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/vue/css/normalize.css';
// import '@ionic/vue/css/structure.css';
// import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/vue/css/padding.css';
// import '@ionic/vue/css/float-elements.css';
// import '@ionic/vue/css/text-alignment.css';
// import '@ionic/vue/css/text-transformation.css';
// import '@ionic/vue/css/flex-utils.css';
// import '@ionic/vue/css/display.css';
// require('default-passive-events');

/* Ionic Dark Mode */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

/* Store */
import store from '../src/store';

/* Ionic Components */
import {
  IonApp,
  IonIcon,
  IonCheckbox,
  IonPage,
  IonText,
  IonHeader, 
  IonContent, 
  IonInput,
  IonTextarea,
  IonButton,
  IonButtons,
  IonLabel, 
  IonToolbar, 
  IonTitle, 
  IonRouterOutlet, 
  IonAccordion, 
  IonAccordionGroup,  
  IonItem,
  IonSelect,
  IonSelectOption,
  IonFooter,
  IonTabBar, 
  IonTabButton, 
  IonTabs,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRadio,
  IonRadioGroup,
  IonRefresher, 
  IonRefresherContent,
  IonChip,
  IonAvatar,
  IonProgressBar,
  IonModal,
  IonToggle,
  IonSegment,
  IonSegmentButton,
  IonCard,
  IonFab,
  IonFabList,
  IonFabButton
} 
from "@ionic/vue";

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)
  .component("IonApp", IonApp)
  .component("IonIcon", IonIcon)
  .component("IonText", IonText)
  .component("IonCheckbox", IonCheckbox)
  .component("IonPage", IonPage)
  .component("IonHeader", IonHeader)
  .component("IonContent", IonContent)
  .component("IonLabel", IonLabel)
  .component("IonInput", IonInput)
  .component("IonTextarea", IonTextarea)  
  .component("IonButton", IonButton)
  .component("IonButtons", IonButtons)
  .component("IonToolbar", IonToolbar)
  .component("IonTitle", IonTitle)
  .component("IonRouterOutlet", IonRouterOutlet)
  .component("IonAccordion", IonAccordion)
  .component("IonAccordionGroup", IonAccordionGroup)
  .component("IonItem", IonItem)
  .component("IonSelect", IonSelect)
  .component("IonSelectOption", IonSelectOption)
  .component("IonFooter", IonFooter)
  .component("IonTabBar", IonTabBar)
  .component("IonTabButton", IonTabButton)
  .component("IonTabs", IonTabs)
  .component("IonImg", IonImg)
  .component("IonGrid", IonGrid)
  .component("IonRow", IonRow)
  .component("IonCol", IonCol)
  .component("IonList", IonList)
  .component("IonMenu", IonMenu)
  .component("IonMenuButton", IonMenuButton)  
  .component("IonMenuToggle", IonMenuToggle)
  .component("IonRadio", IonRadio)
  .component("IonRadioGroup", IonRadioGroup)  
  .component("IonRefresher", IonRefresher)  
  .component("IonRefresherContent", IonRefresherContent) 
  .component("IonChip", IonChip)
  .component("IonAvatar", IonAvatar)  
  .component("IonProgressBar", IonProgressBar)   
  .component("IonModal", IonModal)  
  .component("IonToggle", IonToggle)  
  .component("IonSegment", IonSegment)
  .component("IonSegmentButton", IonSegmentButton)  
  .component("IonCard", IonCard)
  .component("IonFab", IonFab)  
  .component("IonFabList", IonFabList)  
  .component("IonFabButton", IonFabButton);

router.isReady().then(() => {
  app.mount('#app');
});
