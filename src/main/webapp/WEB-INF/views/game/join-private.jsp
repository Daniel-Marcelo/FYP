<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Join Private Game</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/resources/js/game/join-private.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<style>
#joinGameDiv{
	width: 40%;	
}
</style>
<script>
function getJoinCodes(){
	return JSON.parse('${joinCodes}');
}
</script>
</head>
<body>
<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content">
			<div align="center">
				<div style="margin-top: 13%;">
				<div style = "padding: 3% 0%;">
					<h1>Enter 16 digit code to join a Private Game<br><br></h1>
					<h3 id="error"></h3>
				</div>
					<div id="joinGameDiv">
						<form action="joining-private-game" method="POST" onSubmit="return validateJoinCode();">
							<input style = "width: 60%;" id="enteredCode" class="form-field" placeholder="16 Digit Code..." type="text" name="joinCode">
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
							<button id="joinGameButton" type="submit" class="btn blue-submit">Join Game</button>
						</form>
					</div>
				</div>
			</div>
		</div>

	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>

</body>
</html>