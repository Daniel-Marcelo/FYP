<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
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

<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>

		<div id="main-content">


			<div style="margin: 0 auto; width: 70%;">
				<h2 align="center">Public Games</h2>

				<table id="example" class="table table-striped table-bordered"
					cellspacing="0" width="100%">

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
								<td><a href="joinPublicGame/${game.getGameID()}">Join</a></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>
</body>
</html>