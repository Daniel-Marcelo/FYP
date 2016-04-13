
var isEmailValid;

function performUpdateValidation(){
	var bool = validateUpdatedDetails(getEmails());
	return bool;
}

function performRegistrationValidation(){
	var bool = validateRegistrationDetails();
	return bool;
}

function validateUpdatedDetails(existingEmails){
	
	var firstname = document.updateDetailsForm.firstName;
	var lastname = document.updateDetailsForm.lastName;
	var uemail = document.updateDetailsForm.email;
	var country = document.updateDetailsForm.country;
	
	if(checkEmailFormat(uemail) && isEmailFree(uemail, existingEmails) ){
		console.log("Email all good");
		if(allLetter(firstname)){
			if(allLetter(lastname)){
				if(allLetter(country)){
					return true;
				}
			}
		}
	}
	console.log("Returning false");
	return false;
}

function validateRegistrationDetails(){

	var firstname = document.registration.firstName;
	var lastname = document.registration.lastName;
	var uemail = document.registration.email;
	var country = document.registration.country;
	var password = document.registration.password;

	if(checkEmailFormat(uemail)){
		if(allLetter(firstname)){
			if(allLetter(lastname)){
				if(allLetter(country)){
					if(checkPassword(password)){
						return true;
					}
				}
			}
		}
	}
	console.log("Returning false");
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
		alert('Name/ Country must have alphabet characters only');
		item.focus();
		return false;
	}
}

function checkPassword(password)
{ 
	if (password.value.length == 0 || password.value.length< 8){
		
		alert("Password should not be empty / length be over "+8+" characters");
		password.focus();
		return false;
	}
	return true;

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
		alert("Email Address Not Formatted Correctly!");
		return false;
	}

}

function isEmailFree(uemail, existingEmails)
{
	
		for(var key in existingEmails){
			if(existingEmails.hasOwnProperty(key)){
				if(existingEmails[key] == uemail.value){
					alert("Email Already In Use");
					return false;
				}
			}
		}
 return true;
}