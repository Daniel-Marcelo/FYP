<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Game Rankings</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/numeral.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/game/rankings.js"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/game/rankings.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<script>
	$(document).ready(function() {
		$('#rankings-table').DataTable({	
			"order": [[ 4, "desc" ]]
		});
		formatMoney();
		formatPositions();
	});
</script>
</head>
<body>
<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">
			<div id = "rankings-table-div">

				<div style = "margin-bottom: 3%;">
					<h1 align = "center">Rankings For ${gameName}</h1>
				</div>
				<div>
					<table id="rankings-table" class="table table-striped table-bordered">
						<thead>
							<tr>
								<th>Position</th>
								<th>Name</th>
								<th>Country</th>
								<th>Balance</th>
								<th>Acc. Value</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="user" items="${usersInGame}">
								<tr>
									<td class = "position"></td>
									<td>${user.getFirstName()} ${user.getLastName()}</td>
									<td>${user.getCountry()}</td>
									<td class = "money">${user.getBalance()}</td>
									<td class = "money">${user.getCurAccVal()}</td>
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