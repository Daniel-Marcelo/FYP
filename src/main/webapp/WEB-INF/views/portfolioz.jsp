<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"
	type="text/javascript"></script>
<link rel="stylesheet"
	href="//cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css">
	<script src="resources/js/numeral.min.js"
	type="text/javascript"></script>
<script>

function updateStockTableForGame(gameID){
	
	var table = $('#myTable').DataTable();
	var stocks = JSON.parse('${stocksForUser}');
	
	table.rows().remove().draw();

	//Populate Stock Table
	for ( var index in stocks) {
		if (stocks.hasOwnProperty(index)) {

			var rowNum = 1;
			//1  = Default global game that every usr is included in
			if (stocks[index].gameID == gameID) {
					table.row.add([
										stocks[index].symbol,
										stocks[index].companyName,
										stocks[index].quantity,
										numeral(stocks[index].avgPurchPrice).format('$0,0.00'),
										numeral(stocks[index].currentPrice).format('$0,0.00'),
										numeral(stocks[index].total).format('$0,0.00'),
										numeral(stocks[index].gainOrLoss).format('$0,0.00')
								]).draw(false); 
					


			}
		}
	}

}

function updateTransactionTable(gameID){
	var table2 = $('#myTransactionTable').DataTable();
	var myTransactions = JSON.parse('${myTransactions}');
	table2.rows().remove().draw();


	
	for ( var index in myTransactions) {
		if (myTransactions.hasOwnProperty(index)) {

			if (myTransactions[index].gameID == gameID) {
				table2.row.add([
										myTransactions[index].symbol,
										numeral(myTransactions[index].transaction.sharePrice).format('$0,0.00'),
										myTransactions[index].transaction.quantity,
										numeral(myTransactions[index].transaction.total).format('$0,0.00'),
										myTransactions[index].date,
										myTransactions[index].buyOrSell,
										myTransactions[index].tradeType,
										myTransactions[index].status
								]).draw(false); 
			}
		}
	}
}

	$(document).ready(function() {

		$('#myTable').DataTable({
			"columnDefs": [{ className: "dt-body-center", "targets": [0,1,2,3,4,5,6] }],
			"createdRow": function ( row, data, index ) {
				            if ( data[6].replace(/[\$,]/g, '') * 1 < 0 ) {
				                $('td', row).eq(6).addClass('RED');
				            }				            
				            if ( data[6].replace(/[\$,]/g, '') * 1 > 0 ) {
				                $('td', row).eq(6).addClass('GREEN');
				            }
				            if ( data[6].replace(/[\$,]/g, '') * 1 == 0 ) {
				                $('td', row).eq(6).addClass('BLACK');
				            }
            }
		});
						
		//1 is the defult game ID


		//Populate my transactions table
		$('#myTransactionTable').DataTable({
			"columnDefs": [{ className: "dt-body-center", "targets": [0,1,2,3,4,5,6,7 ] }]
		});
		
		updateStockTableForGame(1);
		updateTransactionTable(1);

	});

	function changeTable() {
		var currGameID = document.getElementById("currID").value;
		updateStockTableForGame(currGameID);
		updateTransactionTable(currGameID);
	}
</script>

<style>
#gameInfo {
	width: 70%;
}
.RED{
	color: RED;
}
.GREEN{
color: GREEN;
}
.BLACK{
color: BLACK;
}
</style>

</head>
<body>
	<%@include file="header.jsp"%>

	<select id="currID" onChange="changeTable();">
		<c:forEach var="game" items="${gamesForUser}">
			<option value="${game.getGameID()}">${game.getGameName()}</option>
		</c:forEach>
	</select>

		<div align="center">
			<div id="gameInfo">
				<div id="portfolioTables">

					<table id="myTable" class="display" width="100%">
						<thead>
							<tr>
								<th>Symbol</th>
								<th>Company Name</th>
								<th>Quantity</th>
								<th>Avg. Purch. Price</th>
								<th>Current Price</th>
								<th>Total Value</th>
								<th>Gain/Loss</th>
							</tr>
						</thead>
					</table>

					<table id="myTransactionTable" class="display" width="100%">
						<thead>
							<tr>
								<th>Symbol</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
								<th>Date</th>
								<th>Transaction Type</th>
								<th>Trade Type</th>
								<th>Status</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	<%@include file="footer.jsp"%>
</body>
</html>