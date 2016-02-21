<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

<script>

function displayEditForm(gameID){
	console.log("GameID "+gameID);
	
	var editForm = document.getElementById("editGameDiv"+gameID);
	
	if(editForm.style.display == "none")
		editForm.style.display = "inline";
	else
		editForm.style.display = "none";
}

</script>
</head>
<body>

	<h1>Select a game to edit</h1>
	
	<c:forEach var="game" items="${myGames}">
	
	<c:if test = "${game.getCreatorEmail() ==  pageContext.request.userPrincipal.name}">


		<button style="display: block; width: 400px;" type="submit"
			class="btn blue-submit" id="game${game.getGameID()}"
			onClick="displayEditForm(${game.getGameID()});">${game.getGameName()}</button>


		<div id="editGameDiv${game.getGameID()}" style = "display: none;">
			<form:form name="createGameForm" id="createGameForm" 
				action="createGame" method="POST" modelAttribute="newGame"
				onSubmit="return validateTheDates();">


				<h3 id="gameCreationErrorMessage"></h3>
				<table>

					<tr>
						<td>Game Name</td>
						<td><form:input path="gameName" class="form-field"
								type="text" value = "${game.getGameName()}"/></td>
					</tr>

					<tr>
						<td>Game Type</td>
						<td><form:select path="gameType" class="form-field" value = "${game.getGameType()}">
								<option value="Public">Public</option>
								<option value="Private">Private</option>
							</form:select></td>
					</tr>

					<tr>
						<td>Starting Cash</td>
						<td><form:input path="startingCash" class="form-field"
								type="number" min="1" max="100,000,000"
								placeholder="Starting Cash..." value = "${game.getStartingCash() }"/></td>
					</tr>

					<tr>
						<td>Start Date</td>
						<td><form:input path="startDate" name="startDate"
								id="startDateGame" class="form-field" type="date"
								readOnly="true" value = "${game.getStartDate() }"/></td>
					</tr>

					<tr>
						<td>End Date</td>
						<td><form:input path="endDate" id="endDateGame"
								class="form-field" type="date" readOnly="true" value = "${game.getEndDate()}" /></td>
					</tr>

					<tr>
						<td colspan="2" align="center"><button id="orderButton"
								type="submit" class="btn blue-submit">Save New Details	</button></td>
					</tr>

				</table>
			</form:form>

		</div>




	</c:if>
	</c:forEach>


</body>
</html>