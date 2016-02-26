<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="resources/js/jquery.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script
	src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js"></script>


<!-- <link rel="stylesheet" href="resources/css/dataTables.css">
 -->
<link rel="stylesheet"
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet"
	href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
	    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	
	


<script>

	$(document).ready(function() {
		$('#myTable1').DataTable({
			"paging" : true,
			"ordering" : false,
			"info" : false
		});
		
		google.charts.load('43', {'packages':['annotationchart']});
		google.charts.setOnLoadCallback(drawChart);
				

		function getDailyChange(index, i){
			var thisClose = index.history[i].close;
			
			var yesterdayClose = index.history[i+1].close;
			var percent = (thisClose/yesterdayClose)*100;
			var diffPerc = percent-100;
			
			return diffPerc
		}
		//Function to draw blank chart
		function drawChart() {
			
			var dow = JSON.parse('${DOW}');
			var SP = JSON.parse('${sAndP}');

			
			var data = new google.visualization.DataTable();
			data.addColumn('date', 'Date');
			data.addColumn('number', "DJI");
			data.addColumn('number', "SNP");
			
			for(var i = 0 ; i < dow.history.length-1 ; i++){

				var thisDate = dow.history[i].date;
				var dowChange = getDailyChange(dow, i);
				var SPChange = getDailyChange(SP, i);
				
			 	
				data.addRow([new Date(thisDate.year, thisDate.month, thisDate.dayOfMonth), dowChange/100, SPChange/100]);

		}


			



			
			


			dt = wrapper = new google.visualization.ChartWrapper({
				chartType : 'AnnotationChart',
				dataTable : data,
				options : {
					'displayAnnotations' : true,
					'legendPosition' : 'newRow',
					'numberFormats': '#.##%'
				},
				containerId : 'performanceChart1'
			
			});

			wrapper.draw();
		}
		
function addIndexToChart(index, data){
	if(index.symbol == "^DJI")
	if(index.symbol == "^GSPC")


	return data;
}
		
});
	

</script>
</head>
<body>

	<%@include file="header.jsp"%>
	<div style="overflow: hidden;">
		<c:forEach var="game" items="${myGames}">

			<div
				style="float: left; margin-right: 5%; height: 500px; width: 500px; margin-bottom: 100px;">
				<div style = "height: 50%;">
					<h1>${game.getGameName()}</h1>

					<table id="myTable${game.getGameID()}"
						class="table table-striped table-bordered" width="100%">
						<thead>
							<tr>
								<th>Name</th>
								<th>Country</th>
								<th>Balance</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="user" items="${game.getUsersInGame()}">

								<tr>
									<td>${user.getFirstName()}${user.getLastName()}</td>
									<td>${user.getCountry()}</td>
									<td>${user.getBalance()}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>

				<div id = "performanceChart${game.getGameID()}" style="width: 100%; height: 50%; background-color: red; padding-left: 0"></div>
			</div>

		</c:forEach>
	</div>

	<%@include file="footer.jsp"%>

</body>
</html>