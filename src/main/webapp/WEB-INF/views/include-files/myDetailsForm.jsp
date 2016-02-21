<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>


	<form:form name="updateDetailsForm" action="updateUserDetails"
						method="post" modelAttribute="existingReg"
						onSubmit="return updateValidation();">

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
</body>
</html>