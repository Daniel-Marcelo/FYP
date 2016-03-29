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
<title>Register</title>
<script
	src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/registration-form-validation.js"></script>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/footer-placement.css">

<style>

#registrationFormFill {
	/* position: absolute; */
	margin-top: 100px;
	top: 0;
	left: 0;
	z-index: 10;
	height: 550px;
	width: 400px;
	background-color: white;
	opacity: 0.8;
	filter: alpha(opacity = 60); /* For IE8 and earlier */
	font-weight: bold;
	border-radius: 15px;
}

#image {
	margin-top: 46px;
	width: 100%;
	height: 95%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.4;
	filter: alpha(opacity = 40); /* For IE8 and earlier */
}

</style>
</head>

<body onload="document.registration.firstName.focus();">

	<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>

		<div id="main-content">
		
					<div align="center" id="main">
		
						<div id="image">
					<img
						src="${pageContext.request.contextPath}/resources/img/Wall-Street-reg.jpg"
						height="1000" width="100%" />
				</div>
				
				
			<div align="center" id="registrationFormFill">
				<h1>Registration</h1>
				<form:form id="registration" name="registration" action="save-user"
					method="post" modelAttribute="user"
					onSubmit="return formValidation();">
					<table>
						<tr>
							<!-- <td>Name</td> -->
							<td><form:input path="firstName" class="form-field"
									type="text" placeholder="First Name.." /></td>
						<tr>
						<tr>
							<!-- <td>Name</td> -->
							<td><form:input path="lastName" class="form-field"
									type="text" placeholder="Last Name.." /></td>
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
							<td><form:input path="country" class="form-field"
									type="text" placeholder="Country.." /></td>
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
</div>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>
</body>
</html>