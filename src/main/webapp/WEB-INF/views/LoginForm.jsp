<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE HTML>

<html>
<head>
<style>
body {
	margin: 0;
}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>New/Edit Contact</title>
<script src="resources/js/registration-form-validation.js"></script>
<script src="resources/js/jquery-1.12.0.min.js"></script>


<link rel="stylesheet" href="resources/css/reg-and-login.css">
<script src="resources/js/email-check.js"></script>

<script>
	function resetPassword() {

		console.log("Password reset!");
		var loginForm = document.getElementById("login");
		loginForm.style.display = "none";

		var passwordResetForm = document.getElementById("passwordReset");
		passwordResetForm.style.display = "inline";

	}

	function register() {

		var loginForm = document.getElementById("login");
		loginForm.style.display = "none";

		var registerForm = document.getElementById("registrationFormFill");
		registerForm.style.display = "inline";

		var passwordResetForm = document.getElementById("passwordReset");
		passwordResetForm.style.display = "none";

	}

	function login() {

		var loginForm = document.getElementById("login");
		loginForm.style.display = "inline";

		var registerForm = document.getElementById("registrationFormFill");
		registerForm.style.display = "none";

		var passwordResetForm = document.getElementById("passwordReset");
		passwordResetForm.style.display = "none";
	}
</script>
</head>

<body onload="document.loginForm.email.focus();">
	<div>
		<%@include file="header.jsp"%></div>

	<div align="center" id="main">
		<div id="login">
			<h1>User Login</h1>

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
				action="/FYP/auth/login_check?targetUrl=${targetUrl}" method="post"
				modelAttribute="user">
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

						<td align="center"><a id="myLink" href="#"
							onclick="resetPassword();">Forgot Password</a></td>
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
			<form action="sendEmail" method="post" name="PassWordResetForm"
				onSubmit="return checkEmailHasAccount();">
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

		<%@include file="RegistrationForm.jsp"%>


	</div>
		<%@include file="footer.jsp"%>

</body>
</html>