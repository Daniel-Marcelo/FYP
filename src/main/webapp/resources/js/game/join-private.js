/**
 * 
 */

function validateJoinCode(){
	var code = document.getElementById("enteredCode").value;
	console.log("The user entered the code : "+code);
	
	var existingCodes = JSON.parse('${joinCodes}');
	console.log(existingCodes);
	
	for(var key in existingCodes){
		if(existingCodes.hasOwnProperty(key)){
			
			console.log("Comparing code: "+code +" and "+ existingCodes[key]);
			if (code == existingCodes[key])
				return true;
		}
	}
	alert("Not a valid code");
	return false;
}