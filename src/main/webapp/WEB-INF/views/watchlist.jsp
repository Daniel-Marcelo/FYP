<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Watchlist</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/watchlist.js"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/watchlist.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
<script>
	$(document).ready(function() {
		$('#watchlistTable').DataTable();
		$('#watchlistTable tbody').on('click', 'tr', addActiveClass);
		$('#removeStockButton').click(removeStock);
	});
</script>
</head>
<body>


<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>
		<div id="main-content">
			<div align="center">
				<div style = "margin-top: 5%;">
					<h3 id="errorMsg"></h3>
				<form method="post" action="delete-stock">
					<input id = "symbol-field" type="hidden" name="symbol"/>
					<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
					<button style = "width: 20%;" id="removeStockButton" class="btn blue-submit">Remove Stock</button>
				</form>
				</div>
			</div>
			<div style = "margin-top: 2%;">
				<div style = "margin: 0 auto; width: 70%;">
					<table id="watchlistTable" class="table table table-bordered">
						<thead>
							<tr>
								<th>Symbol</th>
								<th>Company Name</th>
								<th>Current Price</th>
								<th>Open</th>
								<th>Ask</th>
								<th>Previous Close</th>
								<th>Day Range</th>
							</tr>
						</thead>
						<tbody>

							<c:forEach var="stock" items="${stocks}">
								<tr>
									<td>${stock.getSymbol()}</td>
									<td>${stock.getName()}</td>
									<td>${stock.getQuote().getPrice()}</td>
									<td>${stock.getQuote().getOpen()}</td>
									<td>${stock.getQuote().getAsk()}</td>
									<td>${stock.getQuote().getPreviousClose()}</td>
									<td>${stock.getQuote().getDayLow()} - ${stock.getQuote().getDayHigh()}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
	</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>

</body>
</html>