/**
 * 
 */

function validateTheDates() {

		var todaysDate = new Date();	
		todaysDate.setHours(0,0,0,0);	
		var startString = document.getElementById("startDateGame").value;
		var endString = document.getElementById("endDateGame").value;
		var startDate = new Date(startString);
		var endDate = new Date(endString);

		console.log("Comparing: "+startDate+ " to "+todaysDate);
		if (startDate < todaysDate) {	//Validate start date
			errorMsg("Start Date Must Be In The Future.");
			return false;

		} else { 						//If start date is valid, check end date
			if (todaysDate > endDate) {
				errorMsg("End Date Must Be In The Future");
				return false;
			}
			var error = document.getElementById("gameCreationErrorMessage");
			error.style.display = "none";
			return true;
		}
	}	

function errorMsg(msg) {
	var errorMsg = document.getElementById("gameCreationErrorMessage");

	errorMsg.innerHTML = msg;
	errorMsg.style.color = "RED";
	errorMsg.style.display = "inline";
}

function initialiseDatePickers(){
	$("#startDateGame").datepicker({
		dateFormat : 'yy/mm/dd'
	}).datepicker("setDate", new Date());
	
	$("#endDateGame").datepicker({
		dateFormat : 'yy/mm/dd'
	}).datepicker("setDate", new Date());
}