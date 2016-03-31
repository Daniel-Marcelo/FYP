<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<title>Edit User Email | Admin</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/admin/admin-tables.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<script>
	$(document).ready(function() {
		var table = $('#allUsersTable').DataTable();
	});
</script>
</head>
<body>
	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content">
			<div id="side-menu"><%@include file="side-menu.jsp"%></div>
			<div id = "outer-table-div">
			<div align = "center" class = "admin-title">
				<h1>Select A User To Edit</h1>
			</div>
					<div id = "inner-table-div">
							<table id="allUsersTable" class="table table-striped table-bordered">
								<thead>
									<tr>
										<th></th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Email</th>
										<th>Country</th>
									</tr>
								</thead>
								<tbody>
									<c:forEach var="user" items="${allUsers}">
										<tr>
											<td><a href="admin-edit-user/${user.getEmail()}">Edit</a></td>
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