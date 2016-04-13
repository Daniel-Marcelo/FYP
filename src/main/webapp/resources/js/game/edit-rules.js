/**
 * 
 */

function validate(){
	
	if(allLetter(document.getElementById("gameName"))){

		console.log("VALIDATING");
		var todaysDate = new Date();
		var startString = document.getElementById("startDateGame").value;
		var endString = document.getElementById("endDateGame").value;
		var startDate = new Date(startString);
		var endDate = new Date(endString);
	
			if(startDate > endDate){
				errorMsg("End Date Must Be In The Future");
				return false;
			}
			return true;
			
	}
	else
		return false;
}

function allLetter(item)
{ 
	var letters = /^[A-Za-z ]+$/;
	
	if(item.value.match(letters))
	{
		console.log("Validated: "+item.value+" - All letters!");
		return true;
	}
	else
	{
		errorMsg("Game Name Must Contain Alphabet Characters");
		item.focus();
		return false;
	}
}

function errorMsg(msg){
	var errorMsg = document.getElementById("gameCreationErrorMessage");

	errorMsg.innerHTML = msg;
	errorMsg.style.color = "RED";
	errorMsg.style.display = "inline";
}