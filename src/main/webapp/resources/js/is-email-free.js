
function validateEmail() {
		var uemail = document.getElementById("newEmail");
		var existingEmails = getExistingEmails();
		
		
		if(checkEmailFormat(uemail) && isEmailFree(uemail, existingEmails) ){
			console.log("Format good and email free");
			return true;
		}else{
			return false;
		}
	}
	
	function checkEmailFormat(uemail){
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			console.log("Checking email format");
			if(uemail.value.match(mailformat))
			{
				console.log("Email Correct Format");
				return true;
			}
			else
			{
				errorMsg("Email Address Not Formatted Correctly!");
				return false;
			}

		}
	
	function isEmailFree(uemail, existingEmails)
	{
		
			for(var key in existingEmails){
				if(existingEmails.hasOwnProperty(key)){
					if(existingEmails[key] == uemail.value){
						errorMsg("Email Already In Use");
						return false;
					}
				}
			}
	 return true;
	}
	
	function errorMsg(msg) {
		var errorMsg = document.getElementById("error");

		errorMsg.innerHTML = msg;
		errorMsg.style.color = "RED";
		errorMsg.style.display = "inline";
	}

