/**
 * 
 */

function beginStockTableUpdate(gameID){
	
	var table = $('#myTable').DataTable();
	var stocks = getStocksForUser();
	
	table.rows().remove().draw();

	//Populate Stock Table
	for ( var index in stocks) {
		if (stocks.hasOwnProperty(index)) {

			//1  = Default global game that every user is included in
			
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
	$('#myTable').DataTable({
		"order": [[ 6, "desc" ]],
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

	//Populate my transactions table
	$('#myTransactionTable').DataTable({
		"order": [[ 5, "desc" ]],
		"columnDefs": [{ className: "dt-body-center", "targets": [0,1,2,3,4,5,6,7 ] }]
	});
	
	beginStockTableUpdate(1);
	updateTransactionTable(1);
}