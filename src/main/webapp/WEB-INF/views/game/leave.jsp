<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Leave Game</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
</head>
<body>
	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content">
			<div align="center">
				<div style="margin-top: 12%;">
					<h1>Please confirm that you would like to leave the game: ${game.getGameName()}</h1>
					<h2>
						<br>Upon exit, all game data associated to your account will
						be permanently erased.<br> If you rejoin the game, you will
						be treated as a new user <br>with all previous trading
						history and/or stocks owned are no longer in play and are permanently erased.<br>
						If you are the creator of the game, all associated game data involving other users will also be erased.
						<br>
					</h2>
					<div id="leaveForm" style = "width: 30%; padding-top: 5%;">
						<form action="${pageContext.request.contextPath}/leave-game" method="POST">
							<input type="hidden" id="gameToLeaveID${game.getGameID()}" name="gameToLeaveID" value="${game.getGameID()}"> 
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
							<button id="sendingSymbolButton" type="submit" class="wide btn blue-submit">Leave</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>