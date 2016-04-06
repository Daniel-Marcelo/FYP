/**
 * 
 */

function autoComplete(){
	
	$.get('resources/js/sortedStocks.json', function(companies) {
	
    $( "#companySymbol" ).autocomplete({
        source: companies,
        select: function(event, ui) {
            if(ui.item)
                performLookup(ui.item.value.toUpperCase());
        }
      });
	});

}

function autoCompleteSymbolField(){
	
	$.get('resources/js/sortedStocks.json', function(companies) {
		
	    $( "#companySymbol" ).autocomplete({
	        source: companies
	      });
	});


}