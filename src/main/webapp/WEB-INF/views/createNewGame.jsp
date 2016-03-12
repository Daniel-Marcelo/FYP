<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="resources/js/jquery.js" type="text/javascript"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">


<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">
<style>
html, body, #testContainer {
	height: 86.3%;
}

body>#testContainer {
	height: auto;
	min-height: 100%;
}

#testFooter {
	clear: both;
	position: relative;
	z-index: 10;
	/* height: 3em; */
	margin-top: -3em;
}

#testContent {
	padding-bottom: 1.5%;
}
td {
	padding-right: 5%;
}
</style>

<script>
	$(document).ready(function() {

		$("#startDateGame").datepicker({
			dateFormat : 'yy/mm/dd'
		});
		$("#endDateGame").datepicker({
			dateFormat : 'yy/mm/dd'
		});

	});
	function validateTheDates() {

		var todaysDate = new Date();
		var startString = document.getElementById("startDateGame").value;
		var endString = document.getElementById("endDateGame").value;
		var startDate = new Date(startString);
		var endDate = new Date(endString);

		if (todaysDate > startDate) {
			errorMsg("Start Date Must Be In The Future.");
			return false;

		} else { //If start date is valid, check end date
	
			if (todaysDate > endDate) {
				errorMsg("End Date Must Be In The Future");
				return false;
			}
			var error = document.getElementById("gameCreationErrorMessage");
			error.style.display = "none";

			return true;
		}
	}

	function errorMsg(msg) {
		var errorMsg = document.getElementById("gameCreationErrorMessage");

		errorMsg.innerHTML = msg;
		errorMsg.style.color = "RED";
		errorMsg.style.display = "inline";
	}
</script>
</head>
<body>

	<div id="testContainer">
		<div id="header">
			<%@include file="header.jsp"%>
		</div>
		<div id="testContent">
			<div align="center">
				<h1>Create a Game</h1>
				<h3 id="gameCreationErrorMessage"></h3>

				<div id="createGameDiv">
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
								<td></td>
								<td colspan="2" align="center"><button id="orderButton"
										type="submit" class="btn blue-submit">Create Game</button></td>
							</tr>

						</table>
					</form:form>

				</div>
			</div>
		</div>

	</div>
	<div id="testFooter"><%@include file="footer.jsp"%></div>

</body>
</html>