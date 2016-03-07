<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

<script src="resources/js/jquery.js" type="text/javascript"></script>
<script src="resources/js/dataTables.js" type="text/javascript"></script>
<link rel="stylesheet" href="resources/css/dataTables.css">


<script>
	$(document).ready(function() {
		var table = $('#allUsersTable').DataTable();

		$('#allUsersTable tbody').on('click', 'tr', function() {
			if ($(this).hasClass('selected')) {
				$(this).removeClass('selected');
			} else {
				table.$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
			}
		});

		$('#removeUserButton').click(function() {
			var error = document.getElementById("errorMsg");
		
			
			if (table.row('.selected').length == 0) {
				error.innerHTML = "Please select a user to remove<br><br>";
				error.style.display = "inline";
				error.style.color = "RED";
			} else {
				var email  = table.row('.selected').data()[2];
				table.row('.selected').remove().draw(false);
				if(error.style.display == "inline"){
					error.style.display = "none";
				}
				removeUserFromDB(email);
			}
		});
		
		function removeUserFromDB(email){
			console.log("email"+email);
			
			$.ajax({
				url : "deleteUser/"+email,
				success: function(data){
					console.log(data);
				}
			});
			}
		
	});
</script>
</head>
<body>

	<%@include file="header.jsp"%>

	<div align="center">
		<div style="height: 800px; width: 1200px; margin-top: 5%;">
			<div>
				<h3 id="errorMsg"></h3>
				<button id="removeUserButton" class="btn blue-submit">Remove
					User</button>

			</div>
			<div>
				<table id="allUsersTable" class="display">
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
	<%@include file="footer.jsp"%>



</body>
</html>