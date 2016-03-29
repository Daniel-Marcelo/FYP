<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Dashboard | Game</title>


<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>

<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/numeral.min.js"></script>



<script>
	$(document)
			.ready(
					function() {
						
						google.charts.load('43', {
							'packages' : [ 'annotationchart' ]
						});
						google.charts.setOnLoadCallback(drawChart);
						var gameIDs = JSON.parse("${gameIDs}");
						var values = document
								.getElementsByClassName("currAccVal");
						for (var i = 0; i < values.length; i++) {
							values[i].innerHTML = numeral(values[i].innerHTML)
									.format('$0,0.00');
						}								
						for ( var key in gameIDs) {
							if (gameIDs.hasOwnProperty(key)) {
								var gameID = gameIDs[key];
								console.log("GAME: ID"+gameID);
								
								createTable1(gameID);
								createTable2(gameID);
							}
						}
					});
	
	function createTable1(gameID){
		$('#myTable' + gameID).DataTable({
			"paging" : true,
			"ordering" : true,
			"info" : true
		});
		
	}
 	function createTable2(gameID){
	$('#myStatsTable' + gameID).DataTable({
		"paging" : false,
		"ordering" : false,
		"info" : false,
		"bFilter" : false
	});
	} 
						function getDailyChange(index, i) {
							var thisClose = index.history[i].close;
							var yesterdayClose = index.history[i + 1].close;
							var percent = (thisClose / yesterdayClose) * 100;
							var diffPerc = percent - 100;
							return diffPerc;
						}
						function getDate(dateString) {
							var res = dateString.split(/[- :]/);
							var year = res[0];
							var month = res[1] - 1;
							var day = res[2];
							return new Date(year, month, day);
						}
						//Function to draw blank chart
						function drawChart() {
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
											if (myBalanceHistory
													.hasOwnProperty(key)) {
												var date = getDate(myBalanceHistory[key].date);
												var compareDate = new Date(
														thisDate.year,
														thisDate.month,
														thisDate.dayOfMonth);
												if (date.getTime() == compareDate
														.getTime()) {
													value = myBalanceHistory[key].percentChange;
													break;
												}
											}
										}
										var accValueChange = document
												.getElementById("accValueCell");
										accValueChange.innerHTML = numeral(
												accValueChange.innerHTML)
												.format('0.000%');
										data.addRow([
												new Date(thisDate.year,
														thisDate.month,
														thisDate.dayOfMonth),
												dowChange / 100,
												SPChange / 100, value / 100 ]);
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
						}
</script>
</head>
<body>

<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">
	<div style="overflow: hidden;">
		<c:forEach var="userParticipation" items="${participatingGames}">

			<div style = "background-color:blue; margin-bottom: 7%; margin-left: 2%;" >
			<div style="float: left; margin-right: 5%; height: 600px; width: 520px; font-size: 11px;">
				<div style=" margin-bottom:3%;">
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
							<c:forEach var="user" items="${userParticipation.getGame().getUsersInGame()}">

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

				<div id="performanceChart${userParticipation.getGame().getGameID()}"
					style="width: 100%; height: 35%; padding-left: 0"></div>


  				<div style="width: 100%; font-size: 11px; margin-bottom: 100px;"> 
						<table id="myStatsTable${userParticipation.getGame().getGameID()}"
							class="table table-striped table-bordered" width="100%">
						<thead style = "display: none;">
							<tr>
								<th>Name</th>
								<th>Country</th>
								<th>Balance</th>
								<th>Acc. Value</th>
								<th>Balance</th>
								<th>Acc. Value</th>
							</tr>
						</thead>
							<tbody>

								<tr>
									<td><b>Top Player</b></td>
									<td>${userParticipation.getGame().getBoard().getTopPlayerName()}</td>
									<td><b>Current Position</b></td>
									<td>${userParticipation.getGame().getBoard().getUserPosition()}</td>
									<td><b>Acc. Value</b></td>
									<td class="currAccVal">${userParticipation.getGame().getBoard().getUserAccVal()}</td>

								</tr>

								<tr>
									<td><b>Days Left In Game</b></td>
									<td>${userParticipation.getGame().getBoard().getDaysLeft()}</td>
									<td><b>Current Balance</b></td>
									<td class="currAccVal">${userParticipation.getGame().getBoard().getCurBal()}</td>
									<td><b>Acc. Value Change</b></td>
									<td id="accValueCell"></td>

								</tr>
							</tbody>
						</table>
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