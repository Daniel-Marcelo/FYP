/*var variable = ${googleHistQuotes};
 * 
*/
/* var variable  = document.googleHistQuotes;
*/ 
var dt;
var intervalID = 0;

	google.charts.load('current', {'packages':['annotationchart']});
	google.charts.setOnLoadCallback(drawChart);
		

//Function to draw blank chart
function drawChart() {

	
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	data.addColumn('number', "");
	data.addRows([ [ new Date(), 500] ])

	dt = wrapper = new google.visualization.ChartWrapper({
		chartType : 'AnnotationChart',
		dataTable : data,
		options : {
			'displayAnnotations' : true
		},
		containerId : 'chart_div'
	});


	wrapper.draw();
}

//Draws chart of a symbol entered from user, then updates the information table
function testMethod(){
	
    var myLoad = document.getElementById("load-animation");
    myLoad.style.visibility = "visible";
	window.clearInterval(intervalID);
	
	var symbolInputField = document.getElementById("companySymbol");
	var stockSymbol = (symbolInputField.value).toUpperCase();
	symbolInputField.value='';
	var confirmation = document.getElementById("confirmation");
	confirmation.innerHTML = "";

	
	$.ajax({
        url : 'stock-info/'+stockSymbol,
        success : function(data) {
        	console.log(data);

        
        if(data == "Not valid"){
        	myLoad.style.visibility = "hidden";
        	alert("Please Enter a Valid Symbol");
        }
        else{
	        var obj = JSON.parse(data);
			var data = new google.visualization.DataTable();
			data.addColumn('date', 'Date');
	    	data.addColumn('number', obj.symbol);
	    	
	  		for(i = 0 ; i < obj.history.length ; i++){
	  			
	  			var date = new Date(obj.history[i].date.year, obj.history[i].date.month, obj.history[i].date.dayOfMonth);
	  			data.addRows([ [date, obj.history[i].close] ])
	  			
	  		}
	  		
	  		dt.setDataTable(data);
	        dt.draw();
	        
	        $('#companyName').html("<u>" + (obj.symbol).toUpperCase() +" - "+ obj.name + "</u>");
	        document.getElementById("symbol-field").value = obj.symbol;
	        
	    	var c = document.getElementById("stockPriceChanging");
	    	var previousClose = obj.quote.previousClose;
	
	
	    	if(obj.quote.price < previousClose){
	        	c.style.color = "#FF0000";
	    	}
	    	if (obj.quote.price > previousClose){
	    		c.style.color = "green";
	    	}
	    	if(obj.quote.price == previousClose){
	    		c.style.color = "black";
	    	}
	        $('#stockPriceChanging').html(obj.currency+ " "+ obj.quote.price);
	        $('#openChanging').html(obj.quote.open);
	        $('#askChanging').html(obj.quote.ask);
	        $('#prevCloseChanging').html(obj.quote.previousClose);
	        $('#dayRangeChanging').html(obj.quote.dayLow +" - " + obj.quote.dayHigh);
	        $('#yrRangeChanging').html(obj.quote.yearLow +" - " + obj.quote.yearHigh);
	        $('#divChanging').html(obj.dividend.annualYield +" / "+ obj.dividend.annualYieldPercent+" % ");
	        $('#volumeChanging').html((numeral(obj.quote.volume).format('0.00a')).toUpperCase()  + " / "+ (numeral(obj.quote.avgVolume).format('0.00a')).toUpperCase() );
	        $('#PEChanging').html(obj.stats.pe);
	        $('#EPSChanging').html(obj.stats.eps);
	        $('#capChanging').html((numeral(obj.stats.marketCap).format('0.00a')).toUpperCase());
	        
	        dt.getChart().setVisibleChartRange(null, null);
	        document.getElementById("chart_div").style.visibility = "visible";
	        document.getElementById("stockInfoArea").style.visibility = "visible";
	        document.getElementById("watch-div").style.visibility = "visible";
	
	             
	        myLoad.style.visibility = "hidden";
	
	        if (isStockMarketOpen()){
	/*       	    intervalId = setInterval(updateStockPrice(stockSymbol), 3000);
	 * 
	*/ 		//var intervalID = 0;
			intervalID = setInterval(function(){
	       		updateStockPrice(stockSymbol)       	
	       		}, 2000); 
			console.log("INTERVAL ID: "+intervalID + " stock symbol: "+ stockSymbol);
	        }
	
			
		}
        }
	});
}

function isStockMarketOpen(){
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
   	var currentHour = currentDate.getHours();
   	var currentMinute = String(currentDate.getMinutes());
	var ESTHour = (currentHour-5);
	
   	//var ESTHour = -3;
	if(ESTHour <=0 ){
		ESTHour = 24+ESTHour;
	}	
	
	if(currentMinute.length==1){
		currentMinute = "0" +currentMinute;
	}
	if(String(ESTHour).length==1){
		ESTHour = "0" +ESTHour;
	}
		
	//If current time is before 9:30 EST or after 4:30 EST or it is a Saturday or Sunday, the stock market is closed.
   	if(currentHour < 14 || (currentHour == 14 && currentMinute < 30) 
   			|| currentHour > 21 || (currentHour == 21 && currentMinute >= 0) || currentDay == 0 || currentDay == 7){
   		
        $('#marketStatus').html("Stock Market Not Open -	 " + days[currentDay] + " " + ESTHour+ ":"+currentMinute+ " EST");
   	    
   		return false;
   		
   	}
   	else {
        $('#marketStatus').html("Stock Market Open -	 " + days[currentDay] + " " + ESTHour+ ":"+currentMinute+ " EST");

   		return true;

   }
}


function updateStockPrice(stockSymbol) {
	console.log("Updating stock price for "+stockSymbol);
    $.ajax({
        url : 'stock-price/'+stockSymbol,
        success : function(data) {
        	console.log("Data gotten: "+ data);
        	
        	var c = document.getElementById("stockPriceChanging");
        	var str = c.innerHTML.split(" ");
        	var previousClose = document.getElementById("prevCloseChanging").innerHTML;
        	
        	if(data < previousClose){
            	c.style.color = "#FF0000";
        	}
        	if (data > previousClose){
        		c.style.color = "green";
        	}
        	if(data == previousClose){
        		c.style.color = "black";
        	}
            $('#stockPriceChanging').html(str[0] +" " +data);

        }
    });
}
function emptyFields(){
	var elements = document.getElementsByTagName("input");
	for (var ii=0; ii < elements.length; ii++) {
	  if (elements[ii].type == "text") {
	    elements[ii].value = "";
	  }
	}
}

function hideDivs(){
	
	//document.getElementById("watch-div").style.visibility = "hidden";
	document.getElementById("stockInfoArea").style.visibility = "hidden";
	document.getElementById("chart_div").style.visibility = "hidden";
	document.getElementById("load-animation").style.visibility = "hidden";
}

function addToWatchList(){
	 var name = document.getElementById("companyName");
	 var symbol = String(getSymbol(name.innerHTML));

	 $.ajax({
	        url : 'watch-stock/'+symbol,
	        success : function(data) {
			 var confirmWatch = document.getElementById("confirmation");
			 confirmWatch.innerHTML = data;
			 confirmWatch.style.color = "GREEN";
			 
		 }
	 });
}
function getSymbolFromTable(name){
	 
	 var res1 = name.split("<u>"); 	//Will give SYM - NAME </u>
	 var res2 = res1[1].split(" - ");

	 return res2[0];
}