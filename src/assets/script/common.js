import store from "../../store";
import { alertController } from '@ionic/vue';
import router from "../../router/index";
import eventBus from "./eventBus";

/* Global variable */
var getRouterPath = router.currentRoute.value.name;




/*	Information Message:
	-------------------
	message 		: 	Message to be displayed.
	fireEvtname 	: 	Event name to be fired.
	routepath		:	Current router path.
*/
export const InformationMsg = async (message, fireEvtname) => {
  const alert = await alertController.create({
    message: message,
    buttons: [
      {
        text: "OK",
        handler: () => {
          let evtname = "evtinfomsg" + fireEvtname +  getRouterPath ;
          console.log(getRouterPath);

          console.log("Information Event : ", evtname);
          eventBus().emitter.emit(evtname);
        },
      },
    ],
    backdropDismiss: false,
  });

  await alert.present();
};



export function genDateTimeID () {		
	var date_now;
	var minute_value;
	var hour_value;	
	var sec;
    var msec;
	try {
		date_now = new Date();		
		minute_value = date_now.getMinutes();
		hour_value = date_now.getHours();
		sec = date_now.getSeconds();
        msec = date_now.getMilliseconds();
		var time_text;
		if (hour_value < 12) {
			if (hour_value == 0)
				hour_value = 12;		
			time_text = formatDataInfo (hour_value).toString() + formatDataInfo (minute_value).toString() + formatDataInfo (sec).toString() + formatDataInfo (msec).toString() + Math.floor(Math.random() * 90000) + 10000;
		}
		else if (hour_value == 12) {
			time_text = formatDataInfo (hour_value).toString() + formatDataInfo (minute_value).toString() + formatDataInfo (sec).toString() + formatDataInfo (msec).toString() + Math.floor(Math.random() * 90000) + 10000;
		}
		else {
			hour_value = hour_value - 12;			
			time_text = formatDataInfo (hour_value).toString() + formatDataInfo (minute_value).toString() + formatDataInfo (sec).toString() + formatDataInfo (msec).toString() + Math.floor(Math.random() * 90000) + 10000;
		}
		var s = "ctrlId"+time_text;
		return s;
	}
	catch (e) {		
        store.state.gblConsolePrints.push(e);            
	}
}

export function formatDataInfo (v) {
	if (parseInfo(v) < 10)
		return "0" + v;
	else
		return v;
}