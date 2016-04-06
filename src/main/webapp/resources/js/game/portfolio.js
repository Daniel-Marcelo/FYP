/**
 * 
 */

function beginStockTableUpdate(gameID){
	
	var table = $('#myTable').DataTable();
	var stocks = getStocksForUser();
	table.rows().remove().draw();
	
	for ( var index in stocks) {
		if (stocks.hasOwnProperty(index)) {
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
	var myTransactions = getTransactionsForUser();
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

function changeTable() {
	var currGameID = document.getElementById("currID").value;
	beginStockTableUpdate(currGameID);
	updateTransactionTable(currGameID);
}

function createTables(){
	
	$('#myTable').DataTable({					//Stock Table
		"order": [[ 6, "desc" ]],
		"createdRow": function ( row, data, index ) {
			            if ( data[6].replace(/[\$,]/g, '') * 1 < 0 ) 
			                $('td', row).eq(6).addClass('RED');
			            if ( data[6].replace(/[\$,]/g, '') * 1 > 0 ) 
			                $('td', row).eq(6).addClass('GREEN');
			            if ( data[6].replace(/[\$,]/g, '') * 1 == 0 ) 
			                $('td', row).eq(6).addClass('BLACK');
        }
	});
	$('#myTransactionTable').DataTable({		//Transaction Table
		"order": [[ 3, "desc" ]],
	});
	beginStockTableUpdate(1);
	updateTransactionTable(1);
}