<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Dashboard | Game</title>
<script
	src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"
	type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script
	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js"></script>
<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/numeral.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/game/dashboard.js"></script>
<link rel="stylesheet"
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet"
	href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/game/dashboard.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/tags.css">
	<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/game/dashboard-loader.css">

<script>
	$(document).ready(function() {

		google.charts.load('43', {
			'packages' : [ 'annotationchart' ]
		});
		google.charts.setOnLoadCallback(drawCharts);

		formatMoney();
		//formatPositions();
		drawTables(JSON.parse("${gameIDs}"));
		
		
        var intervalID = setInterval(function(){
        	console.log("Update");
        	document.getElementById('loader').style.display = "none";
        	document.getElementById('dashboard-div').style.visibility = "visible";
       		}, 1000); 
	});

	//Function to draw blank chart
	function getDow() {
		return JSON.parse('${DOW}')
	}
	function getSAndP() {
		return JSON.parse('${sAndP}')
	}
	function getBalanceHistory(gameID) {
		var historyForAllGames = JSON.parse('${balanceHistory}');
		var balances = new Array();
		var i = 0;
		for ( var key in historyForAllGames) {
			if (historyForAllGames.hasOwnProperty(key)) {
				if (historyForAllGames[key].gameID == gameID) {
					balances[i] = historyForAllGames[key];
					i++;
				}
			}
		}
		return balances;
	}
	function getGameIDs() {
		return JSON.parse("${gameIDs}");
	}
	function newDataTable() {
		return new google.visualization.DataTable();
	}
</script>
</head>
<body>

	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">
		
		<div id = "loader" style = "margin-top: 13%;">
			<div id="circularG">
				<div id="circularG_1" class="circularG"></div>
				<div id="circularG_2" class="circularG"></div>
				<div id="circularG_3" class="circularG"></div>
				<div id="circularG_4" class="circularG"></div>
				<div id="circularG_5" class="circularG"></div>
				<div id="circularG_6" class="circularG"></div>
				<div id="circularG_7" class="circularG"></div>
				<div id="circularG_8" class="circularG"></div>
			</div>
		</div>
				<div id="dashboard-div" style = "visibility: hidden;">
					<c:forEach var="userParticipation" items="${participatingGames}">
	
						<div class="game-inner-div">
							<div style="width: 100%;">
								<div align="center">
									<h3>${userParticipation.getGame().getGameName()}</h3>
								
								<c:if test = "${userParticipation.getGame().getStatus() != active}">
									<h4 class = "red">Game Ended</h4>
								</c:if>
								<c:if test = "${userParticipation.getGame().getStatus() == active}">
									<h4 class = "green">Game Active</h4>
								</c:if>
								</div>
								<div style="height: 190px; ">
									<div style="float: left; margin: 0 auto; width: 100%;">
										<table id="myTable${userParticipation.getGame().getGameID()}"
											class="table table-striped table-bordered">
											<thead>
												<tr>
													<th>Position</th>
													<th>Name</th>
													<th>Country</th>
													<th>Balance</th>
													<th>Acc. Value</th>
												</tr>
											</thead>
											<tbody>
												<c:forEach var="user"
													items="${userParticipation.getGame().getUsersInGame()}">
	
													<tr>
														<td class="position${userParticipation.getGame().getGameID()}"></td>
														<td>${user.getFirstName()} ${user.getLastName()}</td>
														<td>${user.getCountry()}</td>
														<td class="money">${user.getBalance()}</td>
														<td class="money">${user.getCurAccVal()}</td>
													</tr>
												</c:forEach>
											</tbody>
										</table>
									</div>
								</div>
							</div>
	
							<div
								id="performanceChart${userParticipation.getGame().getGameID()}"
								class="performance-chart"></div>
								
								
	
							<div style="margin: 0 auto; width: 100%;">
								<table
									id="myStatsTable${userParticipation.getGame().getGameID()}"
									class="table table-striped table-bordered">
									<thead>
										<tr>
											<th>Top Player</th>
											<th>Current Position</th>
											<th>Acc. Value</th>
											<th>Days Left</th>
											<th>Current Balance</th>
	<!-- 										<th>Acc. Value Change</th>
	 -->									</tr>
									</thead>
									<tbody>
	
										<tr>
											<td>${userParticipation.getGame().getBoard().getTopPlayerName()}</td>
											<td>${userParticipation.getGame().getBoard().getUserPosition()}</td>
											<td class="money">${userParticipation.getGame().getBoard().getUserAccVal()}</td>
											<td>${userParticipation.getGame().getBoard().getDaysLeft()}</td>
											<td class="money">${userParticipation.getGame().getBoard().getCurBal()}</td>
	<!-- 										<td id="accValueCell"></td>
	 -->
										</tr>
									</tbody>
								</table>
							</div>
	
	
						</div>
	
					</c:forEach>
				</div>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>

</body>
</html>