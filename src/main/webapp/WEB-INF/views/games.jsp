<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery.js"
	type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"
	type="text/javascript"></script>
<script
	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js"
	type="text/javascript"></script>

<link rel="stylesheet"
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet"
	href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
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
<script>
	$(document).ready(function() {
		var table = $('#example').DataTable({
			"columnDefs" : [ {
				className : "dt-body-center",
				"targets" : [ 0, 1, 2, 3, 4, 5 ]
			}

			]
		});
	});
</script>

</head>
<body>

	<div id="testContainer">
		<div id="header">
			<%@include file="header.jsp"%>
		</div>

		<div id="testContent">

		<div align = "center">
			<div style="margin: 2% 6%; height: 6%;">
			
				<form action = "joinPrivateGame" style = "display: inline-block; width : 20%;">			
					<button style = " width: 100%;" type="submit" class="btn blue-submit">Join A Private Game</button>
				</form>
				<form action = "createNewGame" style = "display: inline-block; width : 20%;">			
					<button style = "width: 100%;" type="submit" class="btn blue-submit">Create A Game</button>
				</form>
				<form action = "joinPublicGame" style = "display: inline-block; width : 20%;">			
				<button style = " width: 100%;" type="submit" class="btn blue-submit">Join A Public Game</button>
				</form>
			</div>
		</div>



			<div style="margin: 0 auto; width: 70%;">
				<h2 align="center">Your Games</h2>

				<table id="example" class="table table-striped table-bordered"
					cellspacing="0" width="100%">

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
						<c:forEach var="game" items="${myGames}">
							<tr>

								<td>${game.getGameName()}</td>
								<td>${game.getStatus()}</td>
								<td>${game.getGameType()}</td>
								<td><a href="leaveGame/${game.getGameID()}">Leave</a></td>
								<td><a href="rankings/${game.getGameID()}">Rankings</a></td>

								<c:if
									test="${pageContext.request.userPrincipal.name == game.getCreatorEmail()}">
									<td><a href="editGameRules/${game.getGameID()}">Edit
											Rules</a></td>
								</c:if>

								<c:if
									test="${pageContext.request.userPrincipal.name != game.getCreatorEmail()}">
									<td><a href="viewGameRules/${game.getGameID()}">Game
											Rules</a></td>
								</c:if>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div id="testFooter"><%@include file="footer.jsp"%></div>
</body>
</html>