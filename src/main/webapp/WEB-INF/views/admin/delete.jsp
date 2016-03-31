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
				<div style="margin-top: 7%;">
					<h1>Please confirm that you would like to delete the game: ${game.getGameName()}</h1>
					<h2>
						<br>Upon deletion, all game data will
						be permanently erased.<br>All previous trading
						history and/or stocks owned are no longer in play and are permanently erased.<br>
						<br>
					</h2>

					<div id="deleteForm" style = "width: 20%;">
						<form action="${pageContext.request.contextPath}/admin-deleting-game" method="POST">

							<input type="hidden" id="gameToDeleteID${game.getGameID()}" name="gameID" value="${game.getGameID()}"> 
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />

							<button id="sendingSymbolButton" type="submit" class="wide btn blue-submit">Delete</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>