<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Portfolio</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/resources/js/numeral.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/resources/js/game/portfolio.js" type="text/javascript"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/game/portfolio.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<script>
	$(document).ready(function() {
		createTables();

	});
	function getStocksForUser(){
		return JSON.parse('${stocksForUser}');
	}
	function getTransactionsForUser(){
		return JSON.parse('${myTransactions}');
	}
</script>
</head>
<body>
	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content">
			<div align="center" style = "margin-top: 4%;">
				<select id="currID" onChange="changeTable();" class="form-field">
					<c:forEach var="userParticipation" items="${participatingGames}">
						<option value="${userParticipation.getGame().getGameID()}">${userParticipation.getGame().getGameName()}</option>
					</c:forEach>
				</select>
			</div>
			<div>
				<div id="game-info-div">
					<div>
						<div id = "tables-div">
							<h1 align="center">Stocks Owned</h1>	
							<table id="myTable" class="table table-striped table-bordered" width="100%">
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
						</div>
						<div>
							<h1 align="center">My Transactions</h1>
							<table id="myTransactionTable" class="table table-striped table-bordered" width="100%">
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
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>