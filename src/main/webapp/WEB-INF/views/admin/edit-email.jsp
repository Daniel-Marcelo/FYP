<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Edit User | Admin</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">


<script>
	var isEmailValid = false;

	function validateEmail() {
		performValidation(document.getElementById("newEmail").value);
		console.log("is email valid: " + isEmailValid);
		return isEmailValid;
	}

	function performValidation(uemail) {
		console.log("NEW EMAIL: " + uemail);
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (uemail.match(mailformat)) {
			//window.location.reload();

			console.log("Correct Format - Checking this email - " + uemail);

			$.ajax({
				async : false,
				url : '../is-email-free/' + uemail,
				success : function(result) {
					console.log("Connection was a success: " + result);

					//if the email already is associated to an account
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
</script>
</head>
<body>
<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">

	<%-- <%@include file = "header.jsp" %> --%>
	<div align="center">
		<h2>Enter new email for user:</h2>

		<form action="../admin-updating-user" method="GET"
			onSubmit="return validateEmail();">

			<table>
				<tr>
					<td>Original Email</td>
					<td> </td>
					<td><input id="currentEmail" class="form-field"
						value=${currentEmail
					} type="text" name="currentEmail"
						readOnly /></td>
				</tr>

				<tr>
					<td>New Email</td>
					<td> </td>
					<td><input id="newEmail" class="form-field"
						value=${currentEmail
					} type="text" name="newEmail">
					</td>
				</tr>

				<tr>
				<td> </td>
				<td> </td>
					<td align="center">
						<button id="orderButton" type="submit" class="btn blue-submit">Save
							Changes</button>
					</td>
				</tr>
			</table>
		</form>
	</div>

	</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>