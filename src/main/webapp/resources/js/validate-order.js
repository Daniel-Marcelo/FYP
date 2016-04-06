/**
 *  [1] Is Stock Market Open? No, display error, dont display form.
 *  [2] Is there sufficient funds for this trade? No, display error, hide and siable order button
 *  [3] Is there a valid symbol entered?
 */



//Enables buyOrSell field so it will be sent to controller
function enableBuyOrSell(){
	var field = document.getElementById("buyOrSell");
	field.disabled = false;
	return true;
	
}


function errorMsg(id, msg){
	
	var error = document.getElementById(id);

	error.innerHTML = msg+"<br>";
	error.style.display = "inline";
	error.style.color = "RED";	
}
//Formats users balance and displays on screen
function setBalance(newBalance){

	var newBal = numeral(newBalance).format('0,0');
	document.getElementById('userBalance').innerHTML ="$ "+newBal;
}

function isStockMarketOpen() {
	var days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
			"Friday", "Saturday" ]
	var currentDate = new Date();
	var currentDay = currentDate.getDay();
	var currentHour = currentDate.getHours();
	var currentMinute = currentDate.getMinutes() - 5;
	var ESTHour = (currentHour - 5);

	if (ESTHour < 0) {
		ESTHour = 24 + ESTHour;
	}

	if (currentMinute.length == 1) {
		currentMinute = "0" + currentMinute;
	}
	console.log("Checking");
	console.log("Stock market - current time (EST): " + ESTHour
			+ ":" + currentMinute + " - " + days[currentDay]);
	
	// If current time is before 9:30 EST or after 4:30 EST or it is a Saturday
	// or Sunday, the stock market is closed.
	if (currentHour < 14 
			|| (currentHour == 14 && currentMinute < 30)
			|| currentHour > 21 
			|| (currentHour == 21 && currentMinute >= 0)
			|| currentDay == 0 
			|| currentDay == 7) {

		console.log("Stock market is not open - current time (EST): " + ESTHour
				+ ":" + currentMinute + " - " + days[currentDay]);
		var error = document.getElementById('errorTag');
		error.innerHTML = "Stock market is not open. A trade cannot be performed."+"<br>";
		error.style.display = "inline";
		error.style.color = "RED";

		var tradeForm = document.getElementById("trade");
		trade.style.display = "inline";
		/*
		 * Change the above to "NONE"
		 */



	}
}

function updateStockPrice() {
	
	var stockSymbol = document.getElementById("companySymbol").value;
	
	$.ajax({
		url : 'stock-price/' + (stockSymbol.toUpperCase()),
		success : function(data) {
			
			//If the symbol is invalid
			if( data == "Not valid" ){
			
				errorMsg("errorTag2", "Not a valid symbol");
				
				
				//Changes symbol entered to RED to alert user of error
				var symbolField = document.getElementById("companySymbol");
				symbolField.style.color = "RED";
				
				//Quantity field disabled and reset until user fixes earlier error
				var q = document.getElementById("quantity");
				q.disabled = true;
				q.value = 0;
				
				//Order button disabled, which doesn't allow the user to proceed with the order.
				var orderButton = document.getElementById("orderButton");
				orderButton.style.display = "none";
				orderButton.disabled = true;
				

				//Order type field disabled 
				var orderType = document.getElementById("orderType");
				orderType.disabled = true;
				
				//Price field reset - Already is read only
				var price = document.getElementById("sharePrice");
				sharePrice.value = 0;
				
				//Total cost field reset, already read only
				var total = document.getElementById("costOfTrade");
				total.value = 0;
				
				
			}
			else{	//If the symbol is not invalid
				
				//Remove error
				var error = document.getElementById("errorTag2");
				error.style.display ="none";
				
				//Enable quantity field
				var q = document.getElementById("quantity");
				q.disabled = false;
				
				//Enable orderType field
				var orderType = document.getElementById("orderType");
				orderType.disabled = false;
				
				//Remove RED alert
				var symbolField = document.getElementById("companySymbol");
				symbolField.style.color = "BLACK";
				
				//Show the relevant stock price in the price field
				var c = document.getElementById("sharePrice");
				c.value = data;
				var c = document.getElementById("costOfTrade");
				c.value = data;
				
				//Make the submi button active again
				var orderButton = document.getElementById("orderButton");
				orderButton.style.display = "inline";
				orderButton.disabled = false;
			}
		}
	});
}

function updateTotal(){
	
	console.log("Updating total");
	var total = document.getElementById('costOfTrade');
	var c = document.getElementById("sharePrice").value;
	var q = document.getElementById('quantity').value;
	total.value = q * c;

}

function validateFunds() {

	var total = document.getElementById('costOfTrade');
	var bal = numeral().unformat(document.getElementById('userBalance').innerHTML);
	var buyOrSell = document.getElementById("buyOrSell").value;
	

	console.log("Comparing: " + parseFloat(bal) + " vs " + total.value);

	//If the user does not have enough funds for the order
	
	if (parseFloat(bal) > total.value || buyOrSell == "Sell") {
		
		var error = document.getElementById('errorTag2');
		error.innerHTML = "";
		error.style.display = "none";

		var orderButton = document.getElementById("orderButton");
		orderButton.style.display = "inline";
		orderButton.disabled = false;
	}
	else if (parseFloat(bal) < total.value && buyOrSell == "Buy") {

		errorMsg("errorTag2", "Insufficient Funds. Trade cannot be performed.");

		var orderButton = document.getElementById("orderButton");
		orderButton.style.display = "none";
		orderButton.disabled = true;
	}

	//if the user does have enough funds


}

function displayPriceField() {

	var field = document.getElementById("sharePrice");
	var durField = document.getElementById("durationField");
	var duration = document.getElementById("duration");
	var orderType = document.getElementById("orderType");

	console.log(orderType.value);

	if (orderType.value != "Market") {
		field.readOnly = false;
		durField.style.visibility = "visible";
		duration.disabled = false;

	} else {
		field.readOnly = true;
		durField.style.visibility = "hidden";
		duration.disabled = false;
	}
}

function allowOrDisallowSelling(stocksOwnedJSON){
	
	var stockSymbol = document.getElementById("companySymbol").value.toUpperCase();
	var gameID = document.getElementById("gameID").value;

	var numberSharesOwned = 0;
	console.log("Stock symbol: "+stockSymbol);
	
	for(var key in stocksOwnedJSON){	
		//If the symbol entered is owned by the user 
		if(stocksOwnedJSON[key].symbol == stockSymbol && stocksOwnedJSON[key].gameID == gameID){
				numberSharesOwned = stocksOwnedJSON[key].quantity;
				console.log("Stock found: "+numberSharesOwned);

		}
	}
	
	//is the user has shares in this company
	if(numberSharesOwned == 0){
		console.log("Dont own any of these");
		
		var buyOnly = document.getElementById("buyOrSell");
		buyOnly.disabled = true;
		buyOnly.value = "Buy";
		
	}else{
		
		var buyOnly = document.getElementById("buyOrSell");
		buyOnly.disabled = false;
		buyOnly.value = "Buy";
	}	
}

function setSellLimit(stocksOwnedJSON){
	
	console.log("In this method");
	var buyOrSell = document.getElementById("buyOrSell").value;
	
	if(buyOrSell == "Sell"){
		
		var stockSymbol = (document.getElementById("companySymbol").value).toUpperCase();
		var numberSharesOwned = 0;
		
		for(var key in stocksOwnedJSON){
			
			if(stocksOwnedJSON[key].symbol == stockSymbol){
					numberSharesOwned = stocksOwnedJSON[key].quantity;
					console.log("Stock found: "+numberSharesOwned);
			}
		}
		
		var x = document.getElementById("quantity");
		console.log("SHARES OWNED: "+numberSharesOwned);
		x.max = numberSharesOwned;
	}else{
		var x = document.getElementById("quantity");
		console.log("Current Max: "+x.max);
		x.max = 100000;
	}
	
	
}

/**
 * 
 */

	function setLimit() {
		validateFunds();
		setSellLimit(getStocksOwned());
	}
	
	
	function clearFields(){
		var elements = document.getElementsByTagName("input");
		
		for (var ii=0; ii < elements.length; ii++) {
			
		  if (elements[ii].type == "text") {
		    elements[ii].value = "";
		  }
		  if (elements[ii].type == "number") {
			    elements[ii].value = 0;
			  }
		}
	}

	function changeBalance() {
		
		clearFields();
		
		var gameID = document.getElementById("gameID").value;
		var participations = getGameParticipations();
		
		for (i = 0; i < participations.length; i++) {
			
			if (participations[i].gameID == gameID)
				setBalance(participations[i].balance);
			 else 
				console.log("No ID MATCH");
			
		}
	}
	function updatePriceAndQuantity(){
		
		console.log("The symbol entered is: "+document.getElementById("companySymbol").value);
		document.getElementById("quantity").value = 1;
		
		if (document.getElementById("companySymbol").value != '') {
			updateStockPrice();
			allowOrDisallowSelling(getStocksOwned());
		}
	}
	
	function updateTotalAndValidateFunds(){
		updateTotal();
		
		if (document.getElementById("buyOrSell").value == "Buy") 
			validateFunds();
	}