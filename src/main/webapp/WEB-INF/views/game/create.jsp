<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Create New Game</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/game/create-game.js" type="text/javascript"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<script>
	$(document).ready(function() {
		initialiseDatePickers();
	});
</script>
</head>
<body>
	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content">
		
			<div align="center">
				<div style = "padding: 3% 0%;">
					<h1>Create a Game</h1>
					<h3 id="gameCreationErrorMessage"></h3>
				</div>
				<div id="createGameDiv">
					<form:form name="createGameForm" id="createGameForm" action="creating-game" method="POST" modelAttribute="newGame" onSubmit="return validateTheDates();">

						<h3 id="gameCreationErrorMessage"></h3>
						<table>

							<tr>
								<td>Game Name</td>
								<td><form:input path="gameName" class="form-field" type="text" /></td>
							</tr>

							<tr>
								<td>Start Date</td>
								<td><form:input path="startDate" name="startDate" id="startDateGame" class="form-field" type="text" readOnly="true" /></td>
							</tr>

							<tr>
								<td>End Date</td>
								<td><form:input path="endDate" id="endDateGame" class="form-field" type="text" readOnly="true" /></td>
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
								<td><form:input path="startingCash" class="form-field" type="number" min="100" max="100,000,000" placeholder="Starting Cash..." /></td>
							</tr>

							<tr>
								<td></td>
								<td align="center"><button id="orderButton" type="submit" class="wide btn blue-submit">Create Game</button></td>
							</tr>

						</table>
					</form:form>
				</div>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>

</body>
</html>