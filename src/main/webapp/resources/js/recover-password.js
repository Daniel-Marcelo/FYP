/**
 * 
 */

var isEmailValid;

function checkEmailHasAccount()
{
	var uemail = document.PassWordResetForm.email;
	console.log(email.value);
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(uemail.value.match(mailformat))
	{
		//window.location.reload();
		
		console.log("Correct Format - Checking this email - "+uemail.value);
		
		
		$.ajax({
			async: false,
	        url : 'is-email-free/'+uemail.value,
	        success : myCallBack2
	    });
		
		
		
	}
	else
	{
		alert("You have entered an invalid email address!");
		return false;
	}
	return isEmailValid;
} 

function myCallBack2(result){
	
	console.log("Connection was a success: "+result);
	
	//if the email already is associated to an account
	if(result > 0 ){
		console.log("Email is associated to an account");
		isEmailValid = true;
	}
	else{
		alert("The email is not associate to an account");
		isEmailValid = false;
	}
}