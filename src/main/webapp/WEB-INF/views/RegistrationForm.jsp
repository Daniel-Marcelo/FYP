<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
	"http://www.w3.org/TR/html4/loose.dtd">
<html>

<style>
td {
	font-family: Verdana, Geneva, sans-serif;
	font-weight: bold;
}
</style>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>New/Edit Contact</title>
<script src="${pageContext.request.contextPath}/resources/js/registration-form-validation.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">
</head>

<body onload="document.registration.name.focus();">

	<%-- 	<%@include file="header.jsp"%>
	 --%>
	<div align="center" id="registrationFormFill" style = "display: none;">
		<h1>Registration</h1>
		<form:form id = "registration" name="registration" action="saveUser" method="post"
			modelAttribute="user" onSubmit="return formValidation();">
			<table>
				<tr>
					<!-- <td>Name</td> -->
					<td><form:input path="firstName" class="form-field" type="text"
							placeholder="First Name.." /></td>
				<tr>
								<tr>
					<!-- <td>Name</td> -->
					<td><form:input path="lastName" class="form-field" type="text"
							placeholder="Last Name.." /></td>
				<tr>
				<tr>
					<!-- <td>Email</td> -->
					<td><form:input path="email" class="form-field" type="text"
							placeholder="Email.." /></td>
				<tr>
				<tr>
					<!-- <td>Password</td> -->
					<td><form:input path="password" type="password"
							class="form-field" placeholder="Password.." /></td>
				<tr>
				<tr>
					<!-- <td>Country</td> -->
					<td><form:input path="country" class="form-field" type="text"
							placeholder="Country.." /></td>
				<tr>
				<tr>
					<td colspan="2" align="center"><button type="submit"
							class="btn blue-submit">Register</button></td>
				</tr>

			</table>

			<input type="hidden" name="${_csrf.parameterName}"
				value="${_csrf.token}" />
		</form:form>
		
		
		
	</div>

	<%-- 	    <%@include file="footer.jsp" %>
 --%>
</body>
</html>