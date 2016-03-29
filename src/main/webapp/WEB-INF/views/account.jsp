<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>


<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">			<!-- Form CSS -->
<script src="${pageContext.request.contextPath}/resources/js/registration-form-validation.js"></script>


<style>

</style>

<script>
	$(document).ready(
			function() {	

				document.getElementById("retypedPassword").value = document
						.getElementById("password").value;

/* 				$("#startDateGame").datepicker({
					dateFormat : 'yy/mm/dd'
				});
				$("#endDateGame").datepicker({
					dateFormat : 'yy/mm/dd'
				});

				var gamesJSON = JSON.parse('${dataTableGamesJSON}');
				drawDataTable(gamesJSON); */
			});
	
	function performUpdateValidation(){
		var bool = updateValidation(JSON.parse('${emailsJSON}'));
		console.log("RETURNING: "+bool);
		return bool;
	}
</script>
</head>

<body>

<%-- 	<sec:authorize access="isRememberMe()">
		<h2># This user is login by "Remember Me Cookies".</h2>
	</sec:authorize>

	<sec:authorize access="isFullyAuthenticated()">
		<h2># This user is login by username / password.</h2>
	</sec:authorize> --%>

<div id="main-container">
 		<div id="header"><%@include file="header.jsp"%></div>

		<div id="main-content">
<%-- 		 <c:if test="${messageFromHome == null}">
			<h2>No message!</h2>

		</c:if>

		<c:if test="${messageFromHome != null}">
			<h2>${messageFromHome}</h2>

		</c:if>	 --%>
		
	<form:form name="updateDetailsForm" action="updating-user"
						method="post" modelAttribute="existingReg"
						onSubmit="return performUpdateValidation();">

						<div align=center>
							<table>
								<tr>
									<td>First Name</td>
								<tr>
								<tr>
									<td><form:input path="firstName" class="form-field"
											type="text" placeholder="Full Name.." /></td>
								<tr>
								<tr>
									<td>Last Name</td>
								<tr>
								<tr>
									<td><form:input path="lastName" class="form-field"
											type="text" placeholder="Last Name.." /></td>
								<tr>
								<tr>
									<td>Email</td>
								<tr>
								<tr>

									<td><form:input path="email" class="form-field"
											type="text" placeholder="Email.." /></td>
								<tr>
								<tr>
									<td>Password</td>
								<tr>
								<tr>
									<td><form:input path="password" type="password"
											class="form-field" placeholder="Password.." /></td>
								<tr>
								<tr>
									<td>Retype Password</td>
								<tr>
								<tr>
									<td><form:input path="retypedPassword" type="password"
											class="form-field" placeholder="Password.." /></td>
								<tr>
								<tr>
									<td>Country</td>
								<tr>
								<tr>
									<td><form:input path="country" class="form-field"
											type="text" placeholder="Country.." /></td>
								<tr>
								<tr>
									<td colspan="2" align="center"><button type="submit"
											class="btn blue-submit">Save Changes</button></td>
								</tr>

							</table>
						</div>
					</form:form>		
 		</div>
	</div>
 	<div id = "footer"><%@include file="footer.jsp"%></div>
</body>
</html>
