
var isEmailValid;

function performUpdateValidation(){
	var bool = validateUpdatedDetails(getEmails());
	return bool;
}

function performRegistrationValidation(){
	var bool = validateRegistrationDetails(getEmails());
		
	return bool;
}

function validateUpdatedDetails(existingEmails){
	
	var firstname = document.updateDetailsForm.firstName;
	var lastname = document.updateDetailsForm.lastName;
	var uemail = document.updateDetailsForm.email;
	var country = document.updateDetailsForm.country;
	
	if(checkEmail(uemail, existingEmails)){
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

function validateRegistrationDetails(existingEmails){

	var firstname = document.updateDetailsForm.firstName;
	var lastname = document.updateDetailsForm.lastName;
	var uemail = document.updateDetailsForm.email;
	var country = document.updateDetailsForm.country;
	var password = document.updateDetailsForm.password;

	if(allLetter(firstname)){
		if(allLetter(lastname)){
			if(allLetter(country)){
				if(checkPassword(password)){
					return true;
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


function ValidateEmail(uemail,myCallBack)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(uemail.value.match(mailformat))
	{
		//window.location.reload();
		
		console.log("Correct Format - Checking this email - "+uemail.value);
		
		
		$.ajax({
			async: false,
	        url : 'is-email-free/'+uemail.value,
	        success : myCallBack
	    });

	}
	else
	{
		alert("You have entered an invalid email address!");
		return false;
	}
} 

function checkEmail(uemail, existingEmails)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(uemail.value.match(mailformat))
	{
		console.log("Email Correct Format");
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
	else
	{
		alert("Email Address Not Formatted Correctly!");
		return false;
	}
}