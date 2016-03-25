<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"
	type="text/javascript"></script>
<link rel="stylesheet"
	href="//cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css">
<script>
	$(document).ready(function() {

						var gameIDs = JSON.parse('${gameIDsJSON}');
						var stocks = JSON.parse('${stocksForUser}');
						var myTransactions = JSON.parse('${myTransactions}');
						
						console.log("PRINGTING JSON: " + JSON.stringify(myTransactions[0]));

						for ( var key in gameIDs) {
							if (gameIDs.hasOwnProperty(key)) {

								var table = $('#myTable' + gameIDs[key]).DataTable();

								//Populate Stock Table
								for ( var index in stocks) {
									if (stocks.hasOwnProperty(index)) {

										if (stocks[index].gameID == gameIDs[key]) {
	 										table.row.add([
																	stocks[index].symbol,
																	stocks[index].companyName,
																	stocks[index].quantity,
																	stocks[index].avgPurchPrice,
																	stocks[index].currentPrice,
																	stocks[index].total,
																	stocks[index].gainOrLoss 
															]).draw(false); 
										}
									}
								}
								
								//Populate my transactions table
								var table2 = $('#myTransactionTable' + gameIDs[key]).DataTable();
								
								for ( var index in myTransactions) {
									if (myTransactions.hasOwnProperty(index)) {

										if (myTransactions[index].gameID == gameIDs[key]) {
											table2.row.add([
																	myTransactions[index].symbol,
																	myTransactions[index].transaction.sharePrice,
																	myTransactions[index].transaction.quantity,
																	myTransactions[index].transaction.total,
																	myTransactions[index].date,
																	myTransactions[index].buyOrSell,
																	myTransactions[index].tradeType,
																	myTransactions[index].status
															]).draw(false); 
										}
									}
								}
								if (gameIDs[key] != 1) 
									document.getElementById("portfolioTables"+ gameIDs[key]).style.display = "none";
							}
						}
					});

	function changeTable() {

		var currGameID = document.getElementById("currID").value;
		var gameIDs = JSON.parse('${gameIDsJSON}');

		for ( var key in gameIDs) {
			if (gameIDs.hasOwnProperty(key)) {
				var gameID = gameIDs[key];
				var gameInfo = document.getElementById("portfolioTables"
						+ gameID);
				if (gameInfo.style.display = "inline")
					gameInfo.style.display = "none";

			}
		}
		var thisGameInfo = document.getElementById("portfolioTables"
				+ currGameID);
		thisGameInfo.style.display = "inline";

	}
</script>

<style>
#gameInfo {
	width: 70%;
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

	<c:forEach var="game" items="${gamesForUser}">
		<div align="center">
			<div id="gameInfo">
				<div id="portfolioTables${game.getGameID()}">

					<table id="myTable${game.getGameID()}" class="display" width="100%">
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

					<table id="myTransactionTable${game.getGameID()}" class="display"width="100%">
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
	</c:forEach>
	<%@include file="footer.jsp"%>
</body>
</html>