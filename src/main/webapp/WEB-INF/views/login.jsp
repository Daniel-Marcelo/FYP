<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>User Login</title>
<script src="${pageContext.request.contextPath}/resources/js/registration-form-validation.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-login.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
</head>

<body onload="document.loginForm.email.focus();">
	<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>
		<div id="main-content">
			<div align="center" id="main">
			
				<div id="image">
					<img src="${pageContext.request.contextPath}/resources/img/wall-street.jpg" height="1000" width="100%" />
				</div>
				
				<div class = "white-background">
					<div id = "login-div">
					<div><h1>User Login</h1></div>
					
					<c:if test="${not empty error}">
						<div>
						<h3>
							Your login attempt was not successful, try again.<br /> Cause :
							${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message} </h3>
						</div>
					</c:if>
					
					<c:if test="${not empty passwordConfirmation}">
						<div>
							<h3>${passwordConfirmation}</h3>
						</div>
					</c:if>
					
					<c:if test="${not empty msg}"> <h3>${msg}</h3> </c:if>
					<form:form id="loginForm" name="loginForm" action="/FYP/auth/login_check?targetUrl=${targetUrl}" method="post" modelAttribute="user">
						<table>
							<tr>
								<td><form:input id="email" name="email" path="email" class="form-field" type="text" placeholder="Email.." /></td>
							</tr>

							<tr>
								<td><form:input path="password" type="password" class="form-field" placeholder="Password.." /></td>
							</tr>

							<c:if test="${empty loginUpdate}">
								<tr>
									<td align="center">Remember Me <input type="checkbox" name="remember-me" /></td>
								</tr>
							</c:if>

							<tr>

								<td align="center"><a id="myLink" href="forgot-password" >Forgot Password</a></td>
							</tr>
							<tr>
								<td colspan="2" align="center"><button type="submit" class="wide btn blue-submit">Login</button></td>
							</tr>
						</table>
						<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
					</form:form>
				</div>
				</div>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>

</body>
</html>