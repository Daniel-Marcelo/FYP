/**
 * 
 */
	function formatMoney(){
		var values = document.getElementsByClassName("money");
		
		for (var i = 0; i < values.length; i++) {
			values[i].innerHTML = numeral(values[i].innerHTML).format('$0,0.00');
		}
	}
	
	function formatPositions(){
		var values = document.getElementsByClassName("position");
		
		for (var i = 0; i < values.length; i++) {
			values[i].innerHTML = (i+1);
		}
	}