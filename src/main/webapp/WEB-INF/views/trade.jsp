<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Trade</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/validate-order.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/numeral.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/symbol-autocomplete.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/trade.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<script>
	$(document).ready(function() {
		
		autoCompleteTradeForm();
		isStockMarketOpen();
		changeBalance();
		document.getElementById("quantity").value = 1;
		document.getElementById("companySymbol").addEventListener("blur", updatePriceAndQuantity, true);
		$('#quantity').on('input', updateTotalAndValidateFunds);
		document.getElementById("quantity").addEventListener("blur", updateTotalAndValidateFunds, true);
		$('#sharePrice').on('input',updateTotal());
	});
	function getGameParticipations(){
		return JSON.parse('${gameParticipationsJSON}');
	}
	function getStocksOwned(){
		return JSON.parse('${jsonMap}');
	}
</script>
</head>

<body onload="document.trade.symbol.focus();">
	<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>
		<div id="main-content">
			<div align="center" style = "padding-top: 2%; padding-bottom: 4%;">
			<div style = "margin-bottom: 1%;">
				<h1>Stock Order</h1>
				<h3 id="errorTag"></h3>
				<h4 id="errorTag2"></h4>
			</div>		
				<div style = "margin-bottom: 3%;">
					<form:form name="trade" id="trade" action="execute-trade" method="POST" modelAttribute="trade" onSubmit="return enableBuyOrSell();">
						<table>
							<tr>
								<td>Game</td>
	
								<td><form:select path="gameID" id="gameID" name="gameID" onChange="changeBalance();" class="form-field">
										<c:forEach var="userParticipation" items="${participatingGames}">
											<option value="${userParticipation.getGame().getGameID()}">${userParticipation.getGame().getGameName()}</option>
										</c:forEach>
									</form:select></td>
							</tr>
							<tr>
								<td>Balance</td>
								<td id="userBalance"></td>
	
							</tr>
							<tr>
								<td>Stock Symbol</td>
								<td><form:input id="companySymbol" path="symbol" class="form-field" type="text" placeholder="Stock Symbol..." /></td>
							</tr>
							<tr>
								<td >Buy/Sell</td>
								<td><form:select path="buyOrSell" id="buyOrSell" name="buyOrSell" onChange="setLimit();" class="form-field">
										<option value="Buy">Buy</option>
										<option value="Sell">Sell</option>
									</form:select></td>
							</tr>
							<tr>
								<td>Quantity</td>
								<td><form:input id="quantity" path="quantity"
										class="form-field" type="number" min="1" max="100,000"
										 /></td>
							</tr>
							<tr>
								<td >Order</td>
	
								<td><form:select path="tradeType" id="orderType" name="orderType" onChange="displayPriceField();" class="form-field">
										<option value="Market">Market Order</option>
										<option value="Limit">Limit Order</option>
									</form:select></td>
							</tr>
							<tr>
								<td>Price</td>
								<td><form:input path="sharePrice" id="sharePrice" class="form-field" type="number" min="1" max="100000" placeholder="Desired price..." readOnly="true" step="0.01" /></td>
							</tr>
							<tr>
								<td>Total</td>
								<td><form:input path="costOfTrade" id="costOfTrade" class="form-field" type="number" min="1" max="100000" placeholder="Desired price..." readOnly="true" step="0.01" /></td>
							</tr>
							<tr id="durationField">
								<td >Duration</td>
								<td><form:select disabled="true" path="durationDays" id="duration" name="duration" class="form-field">
										<option value="7">7 Days</option>
										<option value="14">14 Days</option>
										<option value="30">30 Days</option>
									</form:select></td>
							</tr>
							<tr>
								<td> </td>
								<td><button id="orderButton" type="submit" class="wide btn blue-submit">Place Order</button></td>
							</tr>
							
						</table>
						<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
					</form:form>
				</div>
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>


</body>
</html>