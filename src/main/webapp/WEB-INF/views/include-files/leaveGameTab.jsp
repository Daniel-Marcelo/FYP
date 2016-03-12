<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
        <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<h3 align="center">Select A Game To Leave</h3>

					<div align="center">
						<div align="center" style="width: 95%">

							<c:forEach var="game" items="${myGames}">

								<button style="display: block; width: 400px;" type="submit"
									class="btn blue-submit" id="leaveGame${game.getGameID()}"
									onClick="showLeaveMessage(${game.getGameID()});">${game.getGameName()}</button>

								<div id="leaveOption${game.getGameID()}" style="display: none;">
								
									<h4>Are you sure you want to leave ${game.getGameName()}?</h4>
									
									<form action="leaveGame" style="display: inline-block;" method="POST">
									
										<input type="hidden" id="gameToLeaveID${game.getGameID()}" name="gameToLeaveID" value="${game.getGameID()}"> 
										<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />

										<button id="sendingSymbolButton" type="submit"
											class="btn blue-submit">Leave</button>
											
									</form>
									
								</div>

							</c:forEach>
						</div>
					</div>

</body>
</html>