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
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/admin/admin-tables.css">
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
<style>

</style>

</head>
<body>

<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">
		
		<div id = "side-menu" ><%@include file="side-menu.jsp"%></div>
		

		
		<div id = "outer-table-div">
		
		<div class = "admin-title">
			<h1 align="center">Current Games</h1>
		</div>
			<div id = "inner-table-div">
			
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
							<c:forEach var="game" items="${games}">
								<tr>
	
									<td>${game.getGameName()}</td>
									<td>${game.getStatus()}</td>
									<td>${game.getGameType()}</td>
									<td><a href="admin-delete-game/${game.getGameID()}">Delete</a></td>
									<td><a href="game-rankings/${game.getGameID()}">Rankings</a></td>
	
									<c:if
										test="${pageContext.request.userPrincipal.name == game.getCreatorEmail()}">
										<td><a href="game-rules-edit/${game.getGameID()}">Edit
												Rules</a></td>
									</c:if>
	
									<c:if
										test="${pageContext.request.userPrincipal.name != game.getCreatorEmail()}">
										<td><a href="game-rules-view/${game.getGameID()}">Game
												Rules</a></td>
									</c:if>
								</tr>
							</c:forEach>
						</tbody>
					</table>
			</div>
			</div>
		</div>
		</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>