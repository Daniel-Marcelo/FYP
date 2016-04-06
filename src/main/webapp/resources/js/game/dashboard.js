/**
 * 
 */

	function createTable1(gameID){
		$('#myTable' + gameID).DataTable({
			"ordering" : true,
			"info" : true,
			"order": [[ 4, "desc" ]],
	        "scrollY":        "75px",
	        "scrollCollapse": true,
	        "paging":         false
		});
		
		formatPositions(gameID);
		
	}
	
 	function createTable2(gameID){
		$('#myStatsTable' + gameID).DataTable({
			"paging" : false,
			"ordering" : false,
			"info" : false,
			"bFilter" : false
		});
	} 
 	
	function getDailyChange(index, i) {
		var thisClose = index.history[i].close;
		var yesterdayClose = index.history[i + 1].close;
		var percent = (thisClose / yesterdayClose) * 100;
		var diffPerc = percent - 100;
		return diffPerc;
	}
	
	function getDate(dateString) {
		var res = dateString.split(/[- :]/);
		var year = res[0];
		var month = res[1] - 1;
		var day = res[2];
		return new Date(year, month, day);
	}
		
	function formatMoney(){
		var values = document.getElementsByClassName("money");
		
		for (var i = 0; i < values.length; i++) {
			values[i].innerHTML = numeral(values[i].innerHTML).format('$0,0.00');
		}
	}
	
	function drawTables(gameIDs){
		
		for ( var key in gameIDs) {
			if (gameIDs.hasOwnProperty(key)) {
				var gameID = gameIDs[key];
				
				createTable1(gameID);
				createTable2(gameID);
			}
		}
	}
	
	function formatPositions(gameID){
		var values = document.getElementsByClassName("position"+gameID);
		
		for (var i = 0; i < values.length; i++) {
			values[i].innerHTML = (i+1);
		}
	}

	//Function to draw blank chart
	function drawCharts() {
		var dow = getDow();;
		var SP = getSAndP();
		var gameIDs = getGameIDs();

		for (var key in gameIDs) {
			if (gameIDs.hasOwnProperty(key)) {
				var gameID = gameIDs[key];
				var myBalanceHistory = getBalanceHistory(gameID);

				var data = newDataTable();
				data.addColumn('date', 'Date');
				data.addColumn('number', "DJI");
				data.addColumn('number', "SNP");
				data.addColumn('number', "Acc. Value");
				
				for (var i = 0; i < dow.history.length - 1; i++) {
					
					var value = 0;
					var thisDate = dow.history[i].date;

					var dowChange = getDailyChange(dow, i);
					var SPChange = getDailyChange(SP, i);
					
					for ( var key in myBalanceHistory) {
						if (myBalanceHistory.hasOwnProperty(key)) {
							
							var date = getDate(myBalanceHistory[key].date);
							var compareDate = new Date(thisDate.year,thisDate.month,thisDate.dayOfMonth);
							
							if (date.getTime() == compareDate.getTime()) {
								value = myBalanceHistory[key].percentChange;
								break;
							}
						}
					}
					
					data.addRow([new Date(thisDate.year,thisDate.month, 
							thisDate.dayOfMonth), dowChange / 100, SPChange / 100, value / 100 ]);

/*					var accValueChange = document.getElementById("accValueCell");
					console.log("INNER HTML: "+accValueChange.value);
					accValueChange.innerHTML = numeral(accValueChange.innerHTML).format('0.000%');*/
					
				}
				dt = wrapper = new google.visualization.ChartWrapper(
						{
							chartType : 'AnnotationChart',
							dataTable : data,
							options : {
								'displayAnnotations' : false,
								'legendPosition' : 'newRow',
								'numberFormats' : '#.##%'
							},
							containerId : 'performanceChart' + gameID
						});
				wrapper.draw();
			}
		}
	}