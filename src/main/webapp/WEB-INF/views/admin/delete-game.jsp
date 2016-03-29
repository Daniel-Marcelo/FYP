<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Delete Game</title>


<script
	src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"
	type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script
	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js"></script>
<link rel="stylesheet"
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet"
	href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/numeral.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/remove-game.js"></script>


<style>
#main-content {
/* 	margin: 5%; */
	width: 100%;
	height: 95%;
}
</style>
<script>
	$(document)
			.ready(
					function() {
/* 						
						google.charts.load('43', {'packages' : [ 'annotationchart' ]});
						google.charts.setOnLoadCallback(drawChart); */
						
						var gameIDs = JSON.parse("${gameIDs}");
						var values = document.getElementsByClassName("currAccVal");
						
						for (var i = 0; i < values.length; i++) 
							values[i].innerHTML = numeral(values[i].innerHTML).format('$0,0.00');
	
						for ( var key in gameIDs) {
							if (gameIDs.hasOwnProperty(key)) {
								
								var gameID = gameIDs[key];								
								createTable1(gameID);
								createTable2(gameID);

							}
						}
					});
	
	function displayConfirmation(gameID){
		var confirm = document.getElementById("deleteGameForm"+gameID);
		if (confirm.style.display == "none")
			confirm.style.display = "inline";
		else
			confirm.style.display = "none";
		
	}
	
	//Function to draw blank chart
	/* function drawChart() {
		
		var dow = JSON.parse('${DOW}');
		var SP = JSON.parse('${sAndP}');
		var myBalanceHistory = JSON
				.parse('${balanceHistory}');
		var gameIDs = JSON.parse("${gameIDs}");

		console.log("DRAWING CHARTS");

		for ( var key in gameIDs) {
			if (gameIDs.hasOwnProperty(key)) {
				var gameID = gameIDs[key];
				var data = new google.visualization.DataTable();
				data.addColumn('date', 'Date');
				data.addColumn('number', "DJI");
				data.addColumn('number', "SNP");
				data.addColumn('number', "Acc. Value");

				for (var i = 0; i < dow.history.length - 1; i++) {
					var value = 0;

					var thisDate = dow.history[i].date;

					//console.log(thisDate);
					var dowChange = getDailyChange(dow, i);
					var SPChange = getDailyChange(SP, i);

					for ( var key in myBalanceHistory) {
						if (myBalanceHistory.hasOwnProperty(key)) {
							
							var date = getDate(myBalanceHistory[key].date);
							var compareDate = new Date(thisDate.year,thisDate.month,thisDate.dayOfMonth);

							if (date.getTime() == compareDate.getTime()) {
								
								value = myBalanceHistory[key].percentChange;
								break;
							}
						}
					}
					var accValueChange = document.getElementById("accValueCell");
					accValueChange.innerHTML = numeral(accValueChange.innerHTML).format('0.000%');
					data.addRow([new Date(thisDate.year,thisDate.month,thisDate.dayOfMonth),dowChange / 100, SPChange / 100, value / 100 ]);

				}
				dt = wrapper = new google.visualization.ChartWrapper(
						{
							chartType : 'AnnotationChart',
							dataTable : data,
							options : {
								'displayAnnotations' : true,
								'legendPosition' : 'newRow',
								'numberFormats' : '#.##%'
							},
							containerId : 'performanceChart'
									+ gameID

						});
				wrapper.draw();
			}
		}
	} */
</script>
</head>
<body>

	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">

			<div id="side-menu"><%@include file="side-menu.jsp"%></div>

			<div style="display: inline-block; height: 93%; width: 85.5%; margin-top: 3%;">
							
			<c:forEach var="userParticipation" items="${participatingGames}">

					<div style="float: left; margin-right: 5%; height: 50%; width: 45%; font-size: 11px;">
						<div style="margin-bottom: 3%;">
							<div align="center">
								<h3>${userParticipation.getGame().getGameName()}</h3>
							</div>

							<table id="myTable${userParticipation.getGame().getGameID()}"
								class="table table-striped table-bordered" width="100%">
								<thead>
									<tr>
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
											<td>${user.getFirstName()}${user.getLastName()}</td>
											<td>${user.getCountry()}</td>
											<td>${user.getBalance()}</td>
											<td>${user.getCurAccVal()}</td>

										</tr>
									</c:forEach>
								</tbody>
							</table>
						</div>
						
				<%-- <div id="performanceChart${game.getGameID()}"
					style="width: 100%; height: 35%; padding-left: 0"></div> --%>


						<div style="width: 100%; font-size: 11px;">
							<table id="myStatsTable${userParticipation.getGame().getGameID()}" class="table table-striped table-bordered" width="100%">
								<thead style="display: none;">
									<tr>
										<th></th>
										<th></th>

									</tr>
								</thead>
								<tbody>

									<tr>
										<td><b>Top Player</b></td>
										<td>${userParticipation.getGame().getBoard().getTopPlayerName()}</td>
									</tr>

									<tr>
										<td><b>Days Left In Game</b></td>
										<td>${userParticipation.getGame().getBoard().getDaysLeft()}</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div>
							<a id="myLink" href="#"
								onClick="displayConfirmation(${userParticipation.getGame().getGameID()});">Delete
								Game</a>

							<div align="center"
								id="deleteGameForm${userParticipation.getGame().getGameID()}"
								style="display: none;">
								<form action="admin-deleting-game" method="POST">
									<h5>Are you sure ?</h5>
									<input style="display: none;" type="text" name="gameID"
										value="${userParticipation.getGame().getGameID()}" /> <input
										type="hidden" name="${_csrf.parameterName}"
										value="${_csrf.token}" />
									<button type="submit" class="btn blue-submit">Yes</button>
								</form>
							</div>
						</div>
					</div>
				</c:forEach>
			</div>
		</div>
</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>

</body>
</html>