<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>


<script>



$(document).ready(
		function() {
		});
			
		/* 	var gamesForUser = JSON.parse('${gamesJSON}');
			var buttonArea = document.getElementById("gameButtons");
			var btns = new Array();
			var j = 0;

			
			for (var key in gamesForUser) {
				  if (gamesForUser.hasOwnProperty(key)) {
					  
					console.log("Adding click handler");

					var button1 = createButton(gamesForUser[key]);
					buttonArea.appendChild(button1);
					
					var tableDiv = createTableDiv(gamesForUser[key]);
					buttonArea.appendChild(tableDiv);
					
 					var table = createTable(tableDiv, gamesForUser[key]);
 					tableDiv.appendChild(table);
 					//tableDiv.style.display = "none";
 					initialiseDataTable(table.id);
 					console.log("tableDiv"+gamesForUser[key].gameID);
 					
					btns[j] = button1;
					j++;
 					
				  }
				}
			

 			for (var i = 0; i < btns.length; i++) {

					var res = btns[i].id.split(" ");
					var gameID = res[1];
					console.log("IDS: "+gameID);
					var theTable = document.getElementById("tableDiv"+gameID);
					console.log("THE TBALE: "+theTable.id);
					btns[i].onclick = function(){ showOrHideTable(theTable,gameID);};

			} 	
		});
		

		
		function showOrHideTable(tableDiv, gameID){
			
			console.log("IN HERE"+ tableDiv.style.display+" GAME ID: "+gameID+" div id = "+tableDiv.id);
	
			if(tableDiv.style.display == "none"){
				tableDiv.style.display = "inline-block";
			}
			else
				tableDiv.style.display = "none";
		}
		
		function createTableDiv(game){
			
			var tableDiv = document.createElement("DIV");
			tableDiv.id = "tableDiv"+game.gameID;
			console.log("Table ID: "+tableDiv.id);
			tableDiv.padding = "5px";
			
			return tableDiv;
		}
		
		function createButton(game){
			
		    var button1 = document.createElement("BUTTON");
			var text = document.createTextNode(game.gameName);
			button1.appendChild(text);
			button1.className ="btn blue-submit";
			button1.style.display = "block";
			button1.style.width = "400px";
			button1.type = "submit";
			button1.id = "GameSection "+game.gameID;
			return button1;
		}

function createTable(tableDiv, game){			
	console.log("Dealng with ID: "+game.gameID);

 	var table = document.createElement("TABLE");
	table.id = "Table"+game.gameID;
	table.className = "display";
	table.width = "100%";
 
	  return table;
}

function initialiseDataTable(tableID){
	console.log("MAKING TABLE: "+tableID);
	if(tableID == "Table1"){
	  $('#'+tableID).DataTable( {
	        data:  [[ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]],
	        columns: [
	            { title: "Name" },
	            { title: "Position" },
	            { title: "Office" },
	            { title: "Extn." },
	            { title: "Start date" },
	            { title: "Salary" }
	        ]
	    } );
	}
	else
		  $('#'+tableID).DataTable( {
		        data:  [[ "X", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]],
		        columns: [
		            { title: "Name" },
		            { title: "Position" },
		            { title: "Office" },
		            { title: "Extn." },
		            { title: "Start date" },
		            { title: "Salary" }
		        ]
		    } );
	
}

	 */	


</script>
</head>

<body>

	<!-- <div id = "gameButtons" align = "center" >
 -->
	<h4 style="color: green;">ACTIVE</h4>
	<h4 style="color: red;">ENDED</h4>
	<c:forEach var="game" items="${myGames}">


		<c:if test="${game.getStatus() == 'Active'}">

			<button
				style="display: block; width: 100%; color: green; border: 2px green solid;"
				type="submit" class="btn blue-submit" id="game${game.getGameID()}"
				onClick="getRankings(${game.getGameID()});">${game.getGameName()}</button>
		</c:if>

		<c:if test="${game.getStatus() == 'Ended'}">

			<button
				style="display: block; width: 100%; color: red; border: 2px red solid;"
				type="submit" class="btn blue-submit" id="game${game.getGameID()}"
				onClick="getRankings(${game.getGameID()});">${game.getGameName()}</button>
		</c:if>
		<div style="display: none; padding: 5px;"
			id="rankingsTableDiv${game.getGameID()}">

			<c:if test="${game.getGameType() == 'Private'}">
				<h3>Join Code: ${game.getJoinCode()}</h3>
			</c:if>

			<c:if test="${game.getGameType() != 'Private'}">
			</c:if>


			<table id="myTable${game.getGameID()}" class="display" width="100%">

				<thead>
					<tr>
						<th>Name</th>
						<th>Country</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="user" items="${game.getUsersInGame()}">

						<tr>
							<td>${user.getFirstName()}${user.getLastName()}</td>
							<td>${user.getCountry()}</td>
							<td>${user.getBalance()}</td>


						</tr>
					</c:forEach>



				</tbody>
			</table>
		</div>

	</c:forEach>
	<!-- </div>
 -->
</body>
</html>