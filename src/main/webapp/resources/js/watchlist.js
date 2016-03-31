/**
 * 
 */

	function addActiveClass(){
	var table = $('#watchlistTable').DataTable();

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				table.$('tr.active').removeClass('active');
				$(this).addClass('active');
			}
	}

	function removeStock(){
		
	var table = $('#watchlistTable').DataTable();
	var error = document.getElementById("errorMsg");

	if (table.row('.active').length == 0) {

		error.innerHTML = "Please select a stock to remove<br><br>";
		error.style.display = "inline";
		error.style.color = "RED";

	} else {
		var symbol = table.row('.active').data()[0];

		table.row('.active').remove().draw(false);

		document.getElementById("symbol-field").value = symbol;
/* 				if (error.style.display == "inline")
			error.style.display = "none";

		removeStockFromWatchlist(symbol); */

	}
}

function removeStockFromWatchlist(symbol) {
	console.log("removing: " + symbol + " from watchlist");
	$.ajax({
		url : 'deleteStock/' + symbol,
		success : function(data) {
			console.log("DONE: " + data);
		}
	});
}