<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Global</title>
<script src="//code.jquery.com/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">



<script>
	$(document).ready(function() {
		$('#globalRTable').DataTable({
			
 	        "order": [[ 2, "desc" ]]
 		});	
	});
</script>
</head>
<body>
	<%@include file="header.jsp"%>
	<div align="center">
		<h1>STOCK SIMULATOR 2016</h1>

	</div>

	<div style = "margin: 0 auto; width: 70%;">
		<div>
			<table id="globalRTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
				<thead>
					<tr>
						<th>Name</th>
						<th>Country</th>
						<th>Balance</th>
					</tr>
				</thead>

				<tbody>
					<c:forEach var="user" items="${allUsers}">
						<tr>
							<td>${user.getFirstName()} ${user.getLastName()}</td>
							<td>${user.getCountry()}</td>
							<td>${user.getBalance()}</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>

		</div>

	</div>
	<%@include file="footer.jsp"%>

</body>
</html>