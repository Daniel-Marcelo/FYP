<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Join Private Game</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">

<style>
td {
	padding-right: 5%;
}
</style>

<script>

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

</script>
</head>
<body>
<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">

			<div align="center">
				<div style="margin-top: 10%;">
					<h1>Enter 16 digit code to join a Private Game<br><br></h1>
					<div id="joinGameDiv">

						<form action="joining-private-game" style="display: inline-block;"
							method="POST" onSubmit="return validateJoinCode();">

							<input id="enteredCode" class="inputField"
								placeholder="16 digit Code..." type="text" name="joinCode">

							<input type="hidden" name="${_csrf.parameterName}"
								value="${_csrf.token}" />

							<button style="display: block; margin-top: 2%;"
								id="joinGameButton" type="submit" class="btn blue-submit">Join
								Game</button>

						</form>
					</div>
				</div>
			</div>
		</div>

	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>

</body>
</html>