<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Edit User | Admin</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/is-email-free.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<script>
function getExistingEmails(){
	return JSON.parse('${existingEmails}');
}
</script>
<style>
td{
	padding-right: 5%;
	}
</style>
</head>
<body>
<div id="main-container">
	<div id="header"><%@include file="../header.jsp"%></div>
	<div id="main-content">
		<div align="center">
			<h1 style = "padding-top: 4%;">Enter New Email for User</h1>
			<h3 id = "error"></h3>
			<form action="../admin-updating-user" method="GET" onSubmit="return validateEmail();">
				<table>
					<tr>
						<td>Original Email</td>
						<td> </td>
						<td><input id="currentEmail" class="form-field" value = "${currentEmail}" type="text" name="currentEmail" readOnly /></td>
					</tr>
					<tr>
						<td>New Email</td>
						<td> </td>
						<td><input id="newEmail" class="form-field" value="${currentEmail}" type="text" name="newEmail"></td>
					</tr>
	
					<tr>
						<td> </td>
						<td> </td>
						<td align="center"><button id="orderButton" type="submit" class="btn blue-submit">Save Changes</button></td>
					</tr>
				</table>
			</form>
		</div>

	</div>
</div>

<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>