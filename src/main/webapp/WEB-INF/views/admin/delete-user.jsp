<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Remove User | Admin</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/resources/js/admin/admin-delete-user.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/admin/admin-tables.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<script>
	$(document).ready(function() {
		
		var table = $('#allUsersTable').DataTable({
			 "lengthChange": false
		});
		$('#allUsersTable tbody').on('click', 'tr', addActiveClass);
		$('#removeUserButton').click(removeUser);
	});
</script>
</head>
<body>	

	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content">
			<div id = "side-menu"><%@include file="side-menu.jsp"%></div>
			<div id = "outer-table-div">
			
			<div  align="center">
			<div class = "admin-title" style = "width: 25%;">
				<button id="removeUserButton" class="wide btn blue-submit">Remove User</button>
				<h3 id="errorMsg"></h3>
			</div>
			</div>
								<div id = "inner-table-div">
							<table id="allUsersTable" class="table table table-bordered">
								<thead>
									<tr>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Email</th>
										<th>Country</th>
									</tr>
								</thead>
								<tbody>
									<c:forEach var="user" items="${allUsers}">
										<tr>
											<td>${user.getFirstName()}</td>
											<td>${user.getLastName()}</td>
											<td>${user.getEmail()}</td>
											<td>${user.getCountry()}</td>
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