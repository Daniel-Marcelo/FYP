<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<html>
<head>
<title>My Account | xChange</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/resources/js/registration-form-validation.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">			
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">

<script>

function getEmails(){
	 return JSON.parse('${emailsJSON}');
}
</script>			
</head>
<body>

 	<sec:authorize access="isRememberMe()">
		<script>console.log("This user is logged in through a Remember Me Cookie");</script>
	</sec:authorize>
	<sec:authorize access="isFullyAuthenticated()">
		<h2><script>console.log("This user is logged in by username / password");</script></h2>
	</sec:authorize>

<div id="main-container">
 		<div id="header"><%@include file="header.jsp"%></div>
		<div id="main-content">
		<div >
		<div style = "width: 20%; overflow:hidden; padding-bottom: 5%; margin-left: 20%; display: inline-block; float: left;">
			<div align = "center" style = "padding-top: 1% 0%;">
				<h1>Details</h1>
				<c:if test="${not empty detailsConfirmation}">
						<div style = "color: GREEN;">
							<h2>${detailsConfirmation}</h2>
						</div>
					</c:if>
			</div>
				<form:form name="updateDetailsForm" action="updating-user" method="post" modelAttribute="existingReg" onSubmit="return performUpdateValidation();">
						<div>
							<table>
								<tr>
									<td>First Name</td>
								</tr>
								<tr>
									<td><form:input path="firstName" class="form-field" type="text" placeholder="Full Name.." /></td>
								</tr>
								<tr>
									<td>Last Name</td>
								</tr>
								<tr>
									<td><form:input path="lastName" class="form-field" type="text" placeholder="Last Name.." /></td>
								</tr>
								<tr>
									<td>Email</td>
								</tr>
								<tr>

									<td><form:input path="email" class="form-field" type="text" placeholder="Email.." /></td>
								</tr>
								<tr>
									<td>Country</td>
								<tr>
								<tr>
									<td><form:input path="country" class="form-field" type="text" placeholder="Country.." /></td>
								<tr>
								<tr>
									<td align="center"><button type="submit" class="field-width btn blue-submit">Save Changes</button></td>
								</tr>
							</table>
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
						</div>
				</form:form>
			</div>	
			
			<div style = "display: inline-block; margin-left: 5%;">
			<div style = "padding-top: 1% 0%; margin-left:35%;">
				<h1>Change Password</h1>
			</div>
					<c:if test="${not empty passwordError}">
						<div style = "color: RED; padding-top: 1% 0%; margin-left:32%;" >
							<h2>${passwordError}</h2>
						</div>
					</c:if>
			<%-- <c:if test="${not empty msg}"> <h3>${msg}</h3> </c:if> --%>
			<form action="updating-password" method="POST">
							<table>
								<tr>
									<td>Current Password</td> 
									<td><input name = "oldPassword" type="password" class="form-field" placeholder="Old Password.." /></td>
								</tr>
								<tr>
									<td>New Password</td>
									<td><input name = "newPassword" type="password" class="form-field" placeholder="New Password.." /></td>
								</tr>
								<tr>
									<td> </td>
									<td align="center"><button type="submit" class="field-width btn blue-submit">Save Changes</button></td>
								</tr>
							</table>
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
			</form>
			</div>	
 		</div>
 		</div>
	</div>
 	<div id = "footer"><%@include file="footer.jsp"%></div>
</body>
</html>
