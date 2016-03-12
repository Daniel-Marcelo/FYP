<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery.js"
	type="text/javascript"></script>
<style>
html, body, #testContainer {
	height: 86.3%;
}

body>#testContainer {
	height: auto;
	min-height: 100%;
}

#testFooter {
	clear: both;
	position: relative;
	z-index: 10;
	/* height: 3em; */
	margin-top: -3em;
}

#testContent {
	padding-bottom: 1.5%;
}
</style>
</head>
<body>

	<div id="testContainer">
		<div id="header">
			<%@include file="header.jsp"%>
		</div>
		<div id="testContent">

			<div align="center">
				<div style="margin-top: 7%;">
					<h1>
						Please confirm that you would like to leave the game: ${game.getGameName()}
					</h1>
					<h2>
						<br>Upon exit, all game data associated to your account will be
						permanently erased.<br> If you rejoin the game, you will be treated as a new
						user <br>with all previous trading history and/or stocks owned no longer in play. ${game.getGameID()}<br><br>
					</h2>
					
					
					<div id="leaveForm">
																	
									<form action="${pageContext.request.contextPath}/leaveGame" style="display: inline-block;" method="POST">
									
										<input type="hidden" id="gameToLeaveID${game.getGameID()}" name="gameToLeaveID" value="${game.getGameID()}"> 
										<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />

										<button id="sendingSymbolButton" type="submit"
											class="btn blue-submit">Leave</button>
											
									</form>
									
								</div>
					
				</div>
			</div>
		</div>
		</div>
	<div id = "testFooter"><%@include file="footer.jsp"%></div>
</body>
</html>