<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Edit Game Rules</title>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/resources/js/game/edit-rules.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">	
<script>

$(document).ready(function() {
			$("#endDateGame").datepicker({
				dateFormat : 'yy/mm/dd'
			});
		});
</script>
</head>
<body>

	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content" align = center>

			<c:if test="${pageContext.request.userPrincipal.name == game.getCreatorEmail()}">
			<div style = "padding: 3% 0%;">
			<h1 >Edit Game Rules For ${game.getGameName()}</h1>
			</div>
				<form:form action="${pageContext.request.contextPath}/editing-game/${game.getGameID()}" method="post" modelAttribute="game" onSubmit="return validateTheDates();">
					<h3 id="gameCreationErrorMessage"></h3>
					<table>
		
						<tr>
							<td>Game Name</td>
							<td><form:input path="gameName" class="form-field" type="text" value="${game.getGameName()}" /></td>
						</tr>
			
						<tr>
							<td>Starting Cash</td>
							<td><form:input path="startingCash" class="form-field" type="number" min="1" max="100,000,000" placeholder="Starting Cash..." value="${game.getStartingCash() }" /></td>
						</tr>
		
						<tr>
							<td>Start Date</td>
							<td><form:input path="startDate" name="startDate" id="startDateGame" class="form-field" type="date" readOnly="true" value="${game.getStartDate() }" /></td>
						</tr>
		
						<tr>
							<td>End Date</td>
							<td><form:input path="endDate" id="endDateGame" class="form-field" type="date" readOnly="true" value="${game.getEndDate()}" /></td>
						</tr>
						
						<c:if test="${game.getGameType() == privateType}">
						<tr>
							<td>Join Code</td>
							<td><input  class="form-field" type = "text" readOnly value="${game.getJoinCode()}" /></td>
						</tr>
						</c:if>
						
							
						<tr>
							<td>Game Type</td>
							<td><form:select path="gameType" class="form-field" value="${game.getGameType()}">
									<option value="Public">Public</option>
									<option value="Private">Private</option>
								</form:select></td>
						</tr>
		
						<tr>
							<td></td>
							<td><button id="orderButton" type="submit" class="wide btn blue-submit">Save New Details</button></td>
						</tr>
					</table>
				</form:form>
			</c:if>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>


</body>
</html>