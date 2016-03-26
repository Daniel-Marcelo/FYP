/**
 * 
 */

	function createTable1(gameID){
		$('#myTable' + gameID).DataTable({
			"paging" : true,
			"ordering" : true,
			"info" : true

		});
		
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
						//Function to draw blank chart
						function drawChart() {
							
							var dow = JSON.parse('${DOW}');
							var SP = JSON.parse('${sAndP}');
							var myBalanceHistory = JSON
									.parse('${balanceHistory}');
							var gameIDs = JSON.parse("${gameIDs}");
	
							console.log("DRAWING CHARTS");

							for ( var key in gameIDs) {
								if (gameIDs.hasOwnProperty(key)) {
									var gameID = gameIDs[key];
									var data = new google.visualization.DataTable();
									data.addColumn('date', 'Date');
									data.addColumn('number', "DJI");
									data.addColumn('number', "SNP");
									data.addColumn('number', "Acc. Value");

									for (var i = 0; i < dow.history.length - 1; i++) {
										var value = 0;

										var thisDate = dow.history[i].date;

										//console.log(thisDate);
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
										var accValueChange = document.getElementById("accValueCell");
										accValueChange.innerHTML = numeral(accValueChange.innerHTML).format('0.000%');
										data.addRow([new Date(thisDate.year,thisDate.month,thisDate.dayOfMonth),dowChange / 100, SPChange / 100, value / 100 ]);

									}
									dt = wrapper = new google.visualization.ChartWrapper(
											{
												chartType : 'AnnotationChart',
												dataTable : data,
												options : {
													'displayAnnotations' : true,
													'legendPosition' : 'newRow',
													'numberFormats' : '#.##%'
												},
												containerId : 'performanceChart'
														+ gameID

											});
									wrapper.draw();
								}
							}
						}
