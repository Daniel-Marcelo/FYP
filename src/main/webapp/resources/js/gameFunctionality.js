/**
 * 
 */


function showLeaveMessage(gameID){
	
	console.log("Showing leave message for gameID: "+gameID);
	var gameButton = document.getElementById("leaveGame"+gameID);
	var buttonStyle = window.getComputedStyle(gameButton);
	var backgroundColor = buttonStyle.getPropertyValue('background-color');
	
	var leaveForm = document.getElementById("leaveOption"+gameID);	
	
	if(leaveForm.style.display == "none")
		leaveForm.style.display = "inline";
	else
		leaveForm.style.display = "none";
}


function getRankings(gameID){
	var stringV = String("rankingsTableDiv"+gameID);
	var tableDiv = document.getElementById(stringV);
	var display = tableDiv.style.display;
	
	if(display == "none")
		tableDiv.style.display = "inline";
	else
		tableDiv.style.display = "none";
}
	
	function validateTheDates(){
		
		var todaysDate = new Date();
		var startString = document.getElementById("startDateGame").value;
		var endString = document.getElementById("endDateGame").value;
		var startDate = new Date(startString);
		var endDate = new Date(endString);
		

		if(todaysDate > startDate){
			errorMsg("Start Date Must Be In The Future.");
			return false;
		
		}else{								//If start date is valid, check end date
			errorMsg.style.display = "none";
		
			if(todaysDate > endDate){
				errorMsg("End Date Must Be In The Future");
				return false;
			}
			return true;
		}		
	}
	
	function errorMsg(msg){
		var errorMsg = document.getElementById("gameCreationErrorMessage");

		errorMsg.innerHTML = msg;
		errorMsg.style.color = "RED";
		errorMsg.style.display = "inline";
	}
	
	function drawDataTable(gamesJSON){
		for (var key in gamesJSON) {
			  if (gamesJSON.hasOwnProperty(key)) {
			    var gameID = gamesJSON[key].gameID;

				$("#myTable"+gameID).DataTable({
					
			        "paging":   true,
			        "ordering": true,
			        "info":     true,
			        "order": [[ 2, "desc" ]]
				});			  
			}
		}
		

	}
	
	function displayCreateForm(){
		
		var joinForm = document.getElementById("joinGameDiv");		
		var createForm = document.getElementById("createGameDiv");
	
		if(joinForm.style.display == "inline")				//First hide join form
			joinForm.style.display = "none";		
		if(createForm.style.display == "none")				//If the create form isnt displayed, display it
			createForm.style.display = "inline";
		else
			createForm.style.display = "none";				//If the create form is displayed, remove it
	}
	
	function displayJoinForm(){
		
		var joinForm = document.getElementById("joinGameDiv");
		var createForm = document.getElementById("createGameDiv");
		
		if(createForm.style.display == "inline")			//First hide create form
			createForm.style.display = "none";
		if(joinForm.style.display == "none")				//If the join form isnt displayed, display it
			joinForm.style.display = "inline";
		else												//If the join form is displayed, remove it
			joinForm.style.display = "none";
	}