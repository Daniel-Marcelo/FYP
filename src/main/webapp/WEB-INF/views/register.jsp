<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Register</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/registration-form-validation.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/footer-placement.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-login.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
</head>

<body onload="document.registration.firstName.focus();">
	<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>
		<div id="main-content">
			<div align="center" id="main">
				<div id="image">
					<img src="${pageContext.request.contextPath}/resources/img/Wall-Street-reg.jpg" height="1000" width="100%" />
				</div>
				<div align="center" class = "white-background">
					<h1>Registration</h1>
					<c:if test="${not empty emailTaken}">
						<div class="errorblock" style = "color: RED;">
							${emailTaken}
						</div>
					</c:if>
					<form:form id="registration" name="registration" action="save-user" method="post" modelAttribute="user" onSubmit="return formValidation();">
						<table>
							<tr>
								<td><form:input path="firstName" class="form-field" type="text" placeholder="First Name.." /></td>
							<tr>
							<tr>
								<td><form:input path="lastName" class="form-field" type="text" placeholder="Last Name.." /></td>
							<tr>
							<tr>
								<td><form:input path="email" class="form-field" type="text" placeholder="Email.." /></td>
							<tr>
							<tr>
								<td><form:input path="password" type="password" class="form-field" placeholder="Password.." /></td>
							<tr>
							<tr>
								<td><form:input path="country" class="form-field" type="text" placeholder="Country.." /></td>
							<tr>
							<tr>
								<td colspan="2" align="center"><button type="submit" class="wide btn blue-submit">Register</button></td>
							</tr>
						</table>
						<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
					</form:form>
				</div>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>
</body>
</html>