<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<title>Recover Password</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="${pageContext.request.contextPath}/resources/js/registration-form-validation.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/footer-placement.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-login.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
</head>

<body onload="document.PassWordResetForm.email.focus();">
	<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>
		<div id="main-content">
			<div align="center" id="main">
			
				<div id="image">
					<img src="${pageContext.request.contextPath}/resources/img/wall-street.jpg" height="1000" width="100%" />
				</div>
				
				<div class = "white-background">
				
				<div id="passwordReset">
					<div> 
						<h1>Password Reset</h1>
					</div>
					<c:if test="${not empty msg}">
						<div style = "color: red;">
							<h3>${msg}</h3>
						</div>
					</c:if>
					<div>
						<form id = "PassWordResetForm" action="sending-password-email" method="post" name="PassWordResetForm">
							<table>
								<tr>
									<td><input class="form-field" placeholder="Your Email..." type="text" name="email"></td>
								</tr>
								<tr>
									<td><button type="submit" class="wide 	btn blue-submit">Submit</button></td>
								</tr>
							</table>
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
						</form>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>

</body>
</html>