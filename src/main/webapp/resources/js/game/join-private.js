/**
 * 
 */

function validateJoinCode(){
	console.log("Checking join code");

	var code = document.getElementById("enteredCode").value;
	
	var existingCodes = getJoinCodes();
	
	for(var key in existingCodes){
		if(existingCodes.hasOwnProperty(key)){
			console.log("Comparing: "+code+" and "+ existingCodes[key]);
			if (code == existingCodes[key])
				return true;
		}
	}
	console.log("Returning false");
	errorMsg("Not a valid code");
	return false;
}

function errorMsg(msg){
	var errorMsg = document.getElementById("error");

	errorMsg.innerHTML = msg;
	errorMsg.style.color = "RED";
	errorMsg.style.display = "inline";
}