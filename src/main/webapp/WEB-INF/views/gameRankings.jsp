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
		$('#rankingsTable').DataTable();
	});
</script>
</head>
<body>

	<div id="testContainer">
		<div id="header">
			<%@include file="header.jsp"%>
		</div>

		<div id="testContent">
			
			<div style="margin: 0 auto; width: 70%; margin-top: 7%;">

				<h1 align = "center">Rankings For ${game.getGameName()}</h1>
				<div>
					<table id="rankingsTable"
						class="table table-striped table-bordered" width="100%">

						<thead>
							<tr>
								<th>Name</th>
								<th>Country</th>
								<th>Balance</th>
								<th>Acc. Value</th>

							</tr>
						</thead>
						<tbody>
							<c:forEach var="user" items="${usersInGame}">

								<tr>
									<td>${user.getFirstName()}${user.getLastName()}</td>
									<td>${user.getCountry()}</td>
									<td>${user.getBalance()}</td>
									<td>${user.getCurAccVal()}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div id="testFooter"><%@include file="footer.jsp"%></div>

</body>
</html>