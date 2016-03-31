<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>All Games</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/game/games.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">	
<script>
	$(document).ready(function() {
		var table = $('#example').DataTable({
			"columnDefs" : [ {
				className : "dt-body-center",
				"targets" : [ 0, 1, 2, 3, 4, 5 ]
			}]
		});
	});
</script>
</head>
<body>
<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content">
		<div align = "center">
			<div id = "button-div">
				<form action = "join-private-game" class = "form-button">			
					<button type="submit" class="wide btn blue-submit">Join A Private Game</button>
				</form>
				<form action = "create-game" class = "form-button">			
					<button type="submit" class="wide btn blue-submit">Create A Game</button>
				</form>
				<form action = "join-public-game" class = "form-button">			
				<button type="submit" class="wide btn blue-submit">Join A Public Game</button>
				</form>
			</div>
		</div>
			<div id = "games-table">
				<h1 align="center">Your Games</h1>
				<table id="example" class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Name</th>
							<th>Status</th>
							<th>Type</th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="userParticipation" items="${participatingGames}">
							<tr>
								<td>${userParticipation.getGame().getGameName()}</td>
								<td>${userParticipation.getGame().getStatus()}</td>
								<td>${userParticipation.getGame().getGameType()}</td>
								<td><a href="leave-game/${userParticipation.getGame().getGameID()}">Leave</a></td>
								<td><a href="game-rankings/${userParticipation.getGame().getGameID()}">Rankings</a></td>
								<c:if test="${pageContext.request.userPrincipal.name == userParticipation.getGame().getCreatorEmail()}">
									<td><a href="game-rules-edit/${userParticipation.getGame().getGameID()}">Edit Rules</a></td>
								</c:if>
								<c:if test="${pageContext.request.userPrincipal.name != userParticipation.getGame().getCreatorEmail()}">
									<td><a href="game-rules-view/${userParticipation.getGame().getGameID()}">Game Rules</a></td>
								</c:if>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>