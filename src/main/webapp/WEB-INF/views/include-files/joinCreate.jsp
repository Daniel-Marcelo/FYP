<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div style="height: 100px;">

		<button onClick="displayCreateForm();"
			style="float: right; width: 400px;" type="submit"
			class="btn blue-submit">Create</button>

		<button onClick="displayJoinForm();" style="width: 400px;"
			type="submit" class="btn blue-submit">Join</button>

	</div>

	<div align="center">
		<div id="joinGameDiv" style="display: none;">

			<form action="joinGame" style="display: inline-block;" method="POST">

				<input class="inputField" placeholder="16 digit Code..." type="text"
					name="joinCode" autofocus> <input type="hidden"
					name="${_csrf.parameterName}" value="${_csrf.token}" />

				<button style="display: block; margin-top: 2%;" id="joinGameButton"
					type="submit" class="btn blue-submit">Join Game</button>

			</form>
		</div>

		<div id="createGameDiv" style="display: none;">
			<form:form name="createGameForm" id="createGameForm"
				action="createGame" method="POST" modelAttribute="newGame"
				onSubmit="return validateTheDates();">


				<h3 id="gameCreationErrorMessage"></h3>
				<table>

					<tr>
						<td>Game Name</td>
						<td><form:input path="gameName" class="form-field"
								type="text" /></td>
					</tr>

					<tr>
						<td>Game Type</td>
						<td><form:select path="gameType" class="form-field">
								<option value="Public">Public</option>
								<option value="Private">Private</option>
							</form:select></td>
					</tr>

					<tr>
						<td>Starting Cash</td>
						<td><form:input path="startingCash" class="form-field"
								type="number" min="1" max="100,000,000"
								placeholder="Starting Cash..." /></td>
					</tr>

					<tr>
						<td>Start Date</td>
						<td><form:input path="startDate" name="startDate"
								id="startDateGame" class="form-field" type="date"
								readOnly="true" /></td>
					</tr>

					<tr>
						<td>End Date</td>
						<td><form:input path="endDate" id="endDateGame"
								class="form-field" type="date" readOnly="true" /></td>
					</tr>

					<tr>
						<td></td>
						<td colspan="2" align="center"><button id="orderButton"
								type="submit" class="btn blue-submit">Create Game</button></td>
					</tr>

				</table>
			</form:form>

		</div>

	</div>

</body>
</html>