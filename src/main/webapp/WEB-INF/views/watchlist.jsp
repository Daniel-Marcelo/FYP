<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>WatchList</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<script src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script src="//cdn.datatables.net/1.10.11/js/dataTables.bootstrap.min.js"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.11/css/dataTables.bootstrap.min.css">


<script>
	$(document).ready(function() {

		var table = $('#watchlistTable').DataTable();

		$('#watchlistTable tbody').on('click', 'tr', function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				table.$('tr.active').removeClass('active');
				$(this).addClass('active');
			}
		});

		$('#removeStockButton').click(function() {

			console.log(table.row('.active').data());

			var error = document.getElementById("errorMsg");

			if (table.row('.active').length == 0) {

				error.innerHTML = "Please select a stock to remove<br><br>";
				error.style.display = "inline";
				error.style.color = "RED";

			} else {
				var symbol = table.row('.active').data()[0];

				table.row('.active').remove().draw(false);

				if (error.style.display == "inline")
					error.style.display = "none";

				removeStockFromWatchlist(symbol);

			}
		});

		function removeStockFromWatchlist(symbol) {
			console.log("removing: " + symbol + " from watchlist");
			$.ajax({
				url : 'deleteStock/' + symbol,
				success : function(data) {
					console.log("DONE: " + data);
				}
			});
		}

	});
</script>
</head>
<body>


<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>

		<div id="main-content">
			<div>
		<div>
			<div align="center">
				<div>
					<h3 id="errorMsg"></h3>
					<button id="removeStockButton" class="btn blue-submit">Remove
						Stock</button>

				</div>
			</div>
			<div style="margin: 0 auto; width: 70%;">
				<div>
					<table id="watchlistTable"
						class="table table-striped table-bordered" cellspacing="0"
						width="100%">
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
									<td class = "even">${stock.getSymbol()}</td>
									<td>${stock.getName()}</td>
									<td class = "even">${stock.getQuote().getPrice()}</td>
									<td>${stock.getQuote().getOpen()}</td>
									<td class = "even">${stock.getQuote().getAsk()}</td>
									<td>${stock.getQuote().getPreviousClose()}</td>
									<td class = "even">${stock.getQuote().getDayLow()} - ${stock.getQuote().getDayHigh()}</td>

								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>

</body>
</html>