/**
 * 
 */

/*	var isEmailValid = false;
*/
	function validateEmail() {
		var isEmailValid = false;
		performValidation(document.getElementById("newEmail").value);
		
		function performValidation(uemail) {

			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			if (uemail.match(mailformat)) {
				//window.location.reload();

				console.log("Correct Format - Checking this email - " + uemail);

				$.ajax({
					async : false,
					url : '../is-email-free/' + uemail,
					success : function(result) {
						console.log("Connection was a success: " + result);

						if (result > 0) {
							alert("Email already associated to an account");
							isEmailValid = false;
						} else {
							console.log("The email is free to be used.");
							isEmailValid = true;
						}
					}
				});
				
			} else {
				alert("You have entered an invalid email address!");
				return false;
			}
		}
		
		return isEmailValid;

	}

