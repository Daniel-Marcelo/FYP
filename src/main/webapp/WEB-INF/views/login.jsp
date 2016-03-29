<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE HTML>

<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>New/Edit Contact</title>
<script
	src="${pageContext.request.contextPath}/resources/js/registration-form-validation.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">

<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/footer-placement.css">
<script
	src="${pageContext.request.contextPath}/resources/js/recover-password.js"></script>
<style>
#login {
	
}

#login {
	/* position: absolute; */
	margin-top: 100px;
	top: 0;
	left: 0;
	z-index: 10;
	height: 400px;
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

#tback {
	background-color: white;
}
</style>
<script>
	function resetPassword() {

		console.log("Password reset!");
		var loginForm = document.getElementById("login");
		loginForm.style.display = "none";

		var passwordResetForm = document.getElementById("passwordReset");
		passwordResetForm.style.display = "inline";

	}
</script>
</head>

<body onload="document.loginForm.email.focus();">



	<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>

		<div id="main-content">

			<div align="center" id="main">
				<div id="image">
					<img
						src="${pageContext.request.contextPath}/resources/img/wall-street.jpg"
						height="1000" width="100%" />
				</div>
				<div id="login">
					<div style="padding-top: 0px;">
						<h1>User Login</h1>
					</div>

					<c:if test="${not empty error}">
						<div class="errorblock">
							Your login attempt was not successful, try again.<br /> Caused :
							${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}
						</div>
					</c:if>

					<c:if test="${not empty msg}">
						<h3>${msg}</h3>
					</c:if>

					<form:form id="loginForm" name="loginForm"
						action="/FYP/auth/login_check?targetUrl=${targetUrl}"
						method="post" modelAttribute="user">
						<table>
							<tr>
								<td><form:input id="email" name="email" path="email"
										class="form-field" type="text" placeholder="Email.." /></td>
							</tr>

							<tr>
								<td><form:input path="password" type="password"
										class="form-field" placeholder="Password.." /></td>
							</tr>

							<c:if test="${empty loginUpdate}">
								<tr>
									<td align="center">Remember Me <input type="checkbox"
										name="remember-me" /></td>
								</tr>
							</c:if>

							<tr>

								<td align="center"><a id="myLink" href="forgot-password"
									>Forgot Password</a></td>
							</tr>
							<tr>
								<td colspan="2" align="center"><button type="submit"
										class="btn blue-submit">Login</button></td>
							</tr>
						</table>

						<input type="hidden" name="${_csrf.parameterName}"
							value="${_csrf.token}" />
					</form:form>

				</div>

				<div id="passwordReset" style="display: none;">
					<h1>Password Reset</h1>
					<form action="sending-password-email" method="post"
						name="PassWordResetForm" onSubmit="return checkEmailHasAccount();">
						<table>
							<tr>

								<td align=center><input class="inputField"
									placeholder="Your Email..." type="text" name="email"></td>
							<tr>
							<tr>

								<td align=center><button type="submit"
										class="btn blue-submit">Submit</button></td>
							<tr>
						</table>
						<input type="hidden" name="${_csrf.parameterName}"
							value="${_csrf.token}" />

					</form>
				</div>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>

</body>
</html>