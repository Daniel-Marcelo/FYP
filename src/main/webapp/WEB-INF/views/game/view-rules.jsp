<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>View Game Rules</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/game/view-game-rules.css">			
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<style>
td{
	font-size: 22px;
}

</style>
</head>
<body>
<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content" align="center">
			<div style = "padding: 2% 0%;">
				<h1>Game Rules For ${game.getGameName()}</h1>
			</div>
				<div id = "rules-table-div">
					<div>
						<div id="rcorners2">
							<table id = "rules-table">
								<tr>
									<td>Game Name</td>
									<td></td>
									<td>${game.getGameName()}</td>
								</tr>

								<tr>
									<td>Game Type</td>
									<td></td>
									<td>${game.getGameType()}</td>
								</tr>

								<tr>
									<td>Starting Cash</td>
									<td></td>
									<td>${game.getStartingCash()}</td>
								</tr>

								<tr>
									<td>Start Date</td>
									<td></td>
									<td>${game.getStartDate()}</td>
								</tr>

								<tr>
									<td>End Date</td>
									<td></td>
									<td>${game.getEndDate()}</td>
								</tr>

								<c:if test="${game.getJoinCode() != null}">

									<tr>
										<td>Join Code</td>
										<td></td>
										<td>${game.getJoinCode()}</td>
									</tr>
								</c:if>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>


</body>
</html>