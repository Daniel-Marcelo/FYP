<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Edit Game Rules</title>

<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">	
	
		 	 
<script>

$(document).ready(
		function() {
/* 
			$("#startDateGame").datepicker({
				dateFormat : 'yy/mm/dd'
			}); */
			$("#endDateGame").datepicker({
				dateFormat : 'yy/mm/dd'
			});

		});
function validateTheDates(){
	console.log("VALIDATING");
	var todaysDate = new Date();
	var startString = document.getElementById("startDateGame").value;
	var endString = document.getElementById("endDateGame").value;
	var startDate = new Date(startString);
	var endDate = new Date(endString);
	

/* 	if(todaysDate > startDate){
		errorMsg("Start Date Must Be In The Future.");
		return false;
	
	}else{								//If start date is valid, check end date
		errorMsg.style.display = "none";
	 */
		if(startDate > endDate){
			errorMsg("End Date Must Be In The Future");
			return false;
		}
		return true;
	//}		
}

function errorMsg(msg){
	var errorMsg = document.getElementById("gameCreationErrorMessage");

	errorMsg.innerHTML = msg;
	errorMsg.style.color = "RED";
	errorMsg.style.display = "inline";
}



</script>


</head>
<body>

	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content" align = center>

			<c:if test="${pageContext.request.userPrincipal.name == game.getCreatorEmail()}">
			
			<h1 >Edit Game Rules For ${game.getGameName()} ${game.getGameType()} ${privateType}</h1>
	
				<form:form action="${pageContext.request.contextPath}/editing-game/${game.getGameID()}" method="post" modelAttribute="game" onSubmit="return validateTheDates();">
		
		
					<h3 id="gameCreationErrorMessage"></h3>
					<table>
		
						<tr>
							<td>Game Name</td>
							<td><form:input path="gameName" class="form-field" type="text" value="${game.getGameName()}" /></td>
						</tr>
		
						<tr>
							<td>Game Type</td>
							<td><form:select path="gameType" class="form-field" value="${game.getGameType()}">
									<option value="Public">Public</option>
									<option value="Private">Private</option>
								</form:select></td>
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
							<td><input  class="form-field" type = "text" readOnly="true" value="${game.getJoinCode()}" /></td>
						</tr>
						</c:if>
		
						<tr>
							<td colspan="2" align="center"><button id="orderButton" type="submit" class="btn blue-submit">Save New Details</button></td>
						</tr>
		
					</table>
				</form:form>
	
			</c:if>
		
		</div>
	</div>
	</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>


</body>
</html>