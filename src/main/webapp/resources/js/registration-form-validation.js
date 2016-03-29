
var isEmailValid;



function updateValidation(existingEmails){
	
	var firstname = document.updateDetailsForm.firstName;
	var lastname = document.updateDetailsForm.lastName;
	var uemail = document.updateDetailsForm.email;
	var password = document.updateDetailsForm.password;
	var country = document.updateDetailsForm.country;
	var password2 = document.updateDetailsForm.retypedPassword;
	
	console.log("IN HERE NOW");
	if(password2.value === password.value){
		
		console.log("Password is good");
		if(updatedEmailisOK(uemail, existingEmails)){
			
			if(isInformationValidated(firstname,lastname, uemail, password, country)){
				console.log("Returning true");
				return true;
			}
		}
	}
	else{
		alert("Passwords do not match.");
	}
		console.log("Returning false");
		return false;
		
}


function formValidation()
{

var firstname = document.registration.firstName;
var lastname = document.registration.lastName;
var uemail = document.registration.email;
var password = document.registration.password;
var country = document.registration.country;

ValidateEmail(uemail,myCallBack)

if(isEmailValid){
	
	console.log("Email is valid");
	if(isInformationValidated(firstName, lastName, uemail, password, country)){
		return true;
	}
}
	return false;

}

function isInformationValidated(firstname,lastname, uemail, password, country){
	
	if(allLetter(firstname, lastname))
	{	console.log("Name - valid");
		if(checkPassword(password))
		{ 			console.log("Password - valid");
		
					return true;
			}
		}
	
	return false;
}

function allLetter(firstname, lastname)
{ 
	var letters = /^[A-Za-z ]+$/;
	
	if(firstname.value.match(letters))
	{
		if(lastname.value.match(letters)){
			return true;
		}
		else
		{
			alert('Name must have alphabet characters only');
			lastname.focus();
			return false;
		}
		
	}
	
	else
	{
		alert('Name must have alphabet characters only');
		firstname.focus();
		return false;
	}
}

function checkPassword(password)
{ 
	var mx = 8 
	var passLength = password.value.length;
	if (passLength == 0 || passLength< mx)
	{
	alert("Password should not be empty / length be over "+mx+" characters");
	password.focus();
	return false;
	}
	return true;
//	var letters = /^[0-9a-zA-Z]+$/;
	
/*	if(uadd.value.match(letters))
	{
		return true;
	}
	
	else
	{
		alert('User address must have alphanumeric characters only');
		uadd.focus();
		return false;
	}*/
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

function updatedEmailisOK(uemail, existingEmails)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(uemail.value.match(mailformat))
	{
		console.log("Correct Format - Checking this email - "+uemail.value);
		for(var key in existingEmails){
			if(existingEmails.hasOwnProperty(key)){
				console.log(existingEmails[key]);
				console.log("VS : "+uemail.value);
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
		alert("You have entered an invalid email address!");
		return false;
	}
}

function myCallBack(result){
	
	console.log("Connection was a success: "+result);
	
	//if the email already is associated to an account
	if(result > 0 ){
		alert("Email already associated to an account");
		isEmailValid = false;
	}
	else{
		console.log("The email is free to be used.");
		isEmailValid = true;
	}
}
