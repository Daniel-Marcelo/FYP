/**
 * 
 */

function validateJoinCode(){
	
	var code = document.getElementById("enteredCode").value;
	var existingCodes = JSON.parse('${joinCodes}');
	
	for(var key in existingCodes){
		if(existingCodes.hasOwnProperty(key)){
			
			if (code == existingCodes[key])
				return true;
		}
	}
	alert("Not a valid code");
	return false;
}

