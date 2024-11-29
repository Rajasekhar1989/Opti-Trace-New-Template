import store from "../../store";
import { alertController } from '@ionic/vue';
import eventBus from "./eventBus";

export function getCurrentPath() {
	let path = window.location.pathname.split("/");
	return path[2];
}

/*	Information Message:
	-------------------
	- message      : The message to be displayed in the information dialog.
	- fireEvtname  : The name of the event to be triggered upon information.
	- routepath    : The current router path where the information is being invoked.
*/
export const InformationMsg = async (message, fireEvtname) => {
  const alert = await alertController.create({
    message: message,
    buttons: [
      {
        text: "OK",
        handler: () => {
          let evtname = "evtinfomsg" + fireEvtname +  getCurrentPath() ;
          console.log("Information Event : ", evtname);
          eventBus().emitter.emit(evtname);
        },
      },
    ],
    backdropDismiss: false,
  });

  await alert.present();
};


/*	Confirmation Message:
	-------------------
	- message      : The message to be displayed in the confirmation dialog.
	- fireEvtname  : The name of the event to be triggered upon confirmation.
	- routepath    : The current router path where the confirmation is being invoked.
*/
export async function ConfirmationMsg(message, evtName) {
    const alert = await alertController.create({
        message: message,
        buttons: [            
            {
                text: 'No',
                handler: () => {
					console.log("Confirmation Event : ", "evtconfno" + evtName +  getCurrentPath());
					eventBus().emitter.emit("evtconfno" + evtName + getCurrentPath());
                }
            },
			{
                text: 'Yes',
                handler: () => {	
					console.log("Confirmation Event : ", "evtconfyes" + evtName + getCurrentPath());					
					eventBus().emitter.emit("evtconfyes" + evtName + getCurrentPath());
                }
            },
        ]
    });
    await alert.present();
}

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