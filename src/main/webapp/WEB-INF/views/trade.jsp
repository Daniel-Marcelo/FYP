<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/reg-and-login.css">
<script src="resources/js/jquery-1.12.0.min.js"></script>
<script src="resources/js/validate-order.js"></script>
<script src="resources/js/numeral.min.js"></script>


<script>
	var sharesAndStocksOwned = JSON.parse('${jsonMap}');

	$(document).ready(function() {

		isStockMarketOpen();
		changeBalance();
		var e1 = document.getElementById("duration");
		console.log("7 Days: " + duration.value);

		var e1 = document.getElementById("StockBuySymbol");
		e1.addEventListener("blur", function(event) {

			updateStockPrice();
			allowOrDisallowSelling(sharesAndStocksOwned);

		}, true);

		$('#quantity').on('input', function() {

			updateTotal();
			var buyOrSell = document.getElementById("buyOrSell").value;
			if (buyOrSell == "Buy") {
				validateFunds();
			}
		});

		var e2 = document.getElementById("quantity");
		e2.addEventListener("blur", function(event) {

			updateTotal();

			var buyOrSell = document.getElementById("buyOrSell").value;
			if (buyOrSell == "Buy") {
				validateFunds();
			}
		}, true);

		$('#sharePrice').on('input', function() {

			updateTotal();
		});

	});

	function setLimit() {
		validateFunds();
		setSellLimit(sharesAndStocksOwned);
	}

	function changeBalance() {

		var gameID = document.getElementById("gameID").value;
		console.log("GAME ID: " + gameID.value);
		var games = JSON.parse('${gamesForUserJSON}');
		console.log("GAMES: " + JSON.stringify(games));
		for (i = 0; i < games.length; i++) {
			console.log("Comparing: " + games[i].gameID + " and " + gameID);
			if (games[i].gameID == gameID) {
				console.log("HIT: " + games[i].balance);
				setBalance(games[i].balance);
			} else {
				console.log("No hit");
			}

		}

	}
	
</script>

<style>

/* #orderType {

	width: 300px;

} */
td {
	padding-right: 5%;
}
</style>

</head>
<body onload="document.trade.symbol.focus();">
	<%@include file="header.jsp"%>


	<div align="center">
		<h1>Stock Order</h1>
		<h3 id="errorTag" style="display: none;"></h3>
		<h4 id="errorTag2" style="display: none;"></h4>

		<form:form name="trade" id="trade" action="executeTrade" method="POST"
			modelAttribute="trade" onSubmit="return enableBuyOrSell();">

			<table>

				<tr>
					<td>Game</td>

					<td><form:select path="gameID" id="gameID" name="gameID"
						onChange="changeBalance();" class="form-field"
						style="margin-top: 2%;">
						<c:forEach var="game" items="${gamesForUser}">
							<option value="${game.getGameID()}">${game.getGameName()}</option>
						</c:forEach>
					</form:select></td>


				</tr>

				<tr>
					<td>Balance</td>
					<td id="userBalance" style="font-size: 24px; color: green;"></td>

				</tr>
				<tr>
					<td>Stock Symbol</td>
					<td><form:input id="StockBuySymbol" path="symbol"
							class="form-field" type="text" placeholder="Stock Symbol..." /></td>
					<td id="symbolError" style="padding-left: 50px; padding-top: 50px;"></td>
				</tr>

				<tr>
					<td class="desc">Buy/Sell</td>

					<td><form:select path="buyOrSell" id="buyOrSell"
							name="buyOrSell" onChange="setLimit();" class="form-field"
							style="margin-top: 2%;">
							<option value="Buy">Buy</option>
							<option value="Sell">Sell</option>
						</form:select></td>
				</tr>

				<tr>
					<td>Quantity</td>
					<td><form:input id="quantity" path="quantity"
							class="form-field" type="number" min="1" max="100,000"
							placeholder="Number of stocks..." /></td>
				</tr>



				<tr>
					<td class="desc">Order</td>

					<td><form:select path="tradeType" id="orderType"
							name="orderType" onChange="displayPriceField();"
							class="form-field" style="margin-top: 2%;">
							<option value="Market">Market Order</option>
							<option value="Limit">Limit Order</option>
							<!-- 			  <option value="Stop - Limit">Stop Limit Order</option>
 -->
						</form:select></td>
				</tr>


				<tr>
					<td>Price</td>
					<td><form:input path="sharePrice" id="sharePrice"
							class="form-field" type="number" min="1" max="100000"
							placeholder="Desired price..." readOnly="true" step="0.01" /></td>
				</tr>

				<tr>
					<td>Total</td>
					<td><form:input path="costOfTrade" id="costOfTrade"
							class="form-field" type="number" min="1" max="100000"
							placeholder="Desired price..." readOnly="true" step="0.01" /></td>
				<tr id="durationField" style="visibility: hidden;">
					<td class="desc">Duration</td>
					<td><form:select disabled="true" path="durationDays"
							id="duration" name="duration" class="form-field"
							style="margin-top: 2%;">

							<option value="7">7 Days</option>
							<option value="14">14 Days</option>
							<option value="30">30 Days</option>
						</form:select></td>
				</tr>



				<tr>
					<td colspan="2" align="center"><button id="orderButton"
							type="submit" class="btn blue-submit">Place Order</button></td>
				</tr>


			</table>
		</form:form>

	</div>



	<%@include file="footer.jsp"%>


</body>
</html>