<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Edit User Email</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css">

<script>
	$(document).ready(function() {
		var table = $('#allUsersTable').DataTable();
	});
</script>
</head>
<body>
 	<%@include file="header.jsp"%>
 
	<div align="center">
		<div style="height: 800px; width: 1200px; margin-top: 5%;">

			<div>
				<table id="allUsersTable" class="display">
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
								<td><a href = "editEmailForm/${user.getEmail()}"> Edit</a></td>
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
	<%@include file="footer.jsp"%>



</body>
</html>