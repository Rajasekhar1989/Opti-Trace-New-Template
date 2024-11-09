import store from "../../store";

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