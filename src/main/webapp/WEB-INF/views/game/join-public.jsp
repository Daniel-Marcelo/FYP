<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Public Games</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<script>
	$(document).ready(function() {
		var table = $('#table').DataTable({
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
			<div style="margin: 0 auto; width: 70%;">
				<div style = "padding: 3% 0%;"> 
					<h1 align="center">Public Games</h1>
				</div>
				<table id="table" class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Name</th>
							<th>Status</th>
							<th>Type</th>
							<th>Start Date</th>
							<th>End Date</th>
							<th>Starting Cash</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="game" items="${publicGames}">
							<tr>
								<td>${game.getGameName()}</td>
								<td>${game.getStatus()}</td>
								<td>${game.getGameType()}</td>
								<td>${game.getStartDate()}</td>
								<td>${game.getEndDate()}</td>
								<td>${game.getStartingCash()}</td>
								<td><a href="joining-public-game/${game.getGameID()}">Join</a></td>
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