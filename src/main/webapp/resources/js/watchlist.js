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

	function isStockClicked(){
		
	var table = $('#watchlistTable').DataTable();
	var error = document.getElementById("errorMsg");

	if (table.row('.active').length == 0) {

		error.innerHTML = "Please Select a Stock to Remove<br><br>";
		error.style.display = "inline";
		error.style.color = "RED";
		return false;

	} else {
		var symbol = table.row('.active').data()[0];

		table.row('.active').remove().draw(false);
		console.log("symbol added");
		document.getElementById("symbol-field").value = symbol;
		return true;
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