<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%><!DOCTYPE HTML>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
   	<script src="resources/js/stock-chart.js"></script> 
   	<script src="resources/js/numeral.min.js"></script> 
   	   	<script src="resources/js/jquery.js"></script> 
   	
   	<link rel="stylesheet" href="resources/css/bootstrap.css">
   	   	<link rel="stylesheet" href="resources/css/symbolInfo.css">



<script>

function displayForm(){
	
	var tradeForm = document.getElementById("tradeFile");
	var searchAndChart = document.getElementById("searchAndChart");
	var table = document.getElementById("stockInfoArea");
	
	searchAndChart.style.display = "none";
	table.style.display = "none";
	tradeForm.style.display = "inline";


}
</script>
    </head>
    
<body>
    <%@include file="header.jsp" %>
    
<div id="parent"  >

<div id = "searchAndChart">
<div class = "searchBox">
		
		<form action = "javascript:testMethod();" style = "	display: inline-block;">
		<input id = "companySymbol" class = "inputField" placeholder="Symbol Lookup..." type="text" name="symbol" autofocus	>
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
	    <button id ="sendingSymbolButton" type="submit" class="btn blue-submit"  >Submit</button>
	    </form>
	    
	    <div id="circularG">
	<div id="circularG_1" class="circularG"></div>
	<div id="circularG_2" class="circularG"></div>
	<div id="circularG_3" class="circularG"></div>
	<div id="circularG_4" class="circularG"></div>
	<div id="circularG_5" class="circularG"></div>
	<div id="circularG_6" class="circularG"></div>
	<div id="circularG_7" class="circularG"></div>
	<div id="circularG_8" class="circularG"></div>
</div>


</div>

<div id = "marketStatus">
</div>


<div id='chart_div' ></div> 
</div>

	    
	    
 <!-- style= ' margin-left: 1000px; height: 200px; width: 500px; margin-top: 2.5%;' -->
	<div id="stockInfoArea">
		

		
		<ul id = "stockInfoTable" class="list-group">
		
		  <li id = "companyName" class="list-group-item">
		  </li>
		  
		  <li id = "stockPriceCurrency" class="list-group-item">
		  		<b>Price</b>
		    <span id = "stockPriceChanging"  style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>Open</b>
		    <span id = "openChanging" style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>Ask</b>
		    <span id = "askChanging" style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>Previous Close</b>
		    <span id = "prevCloseChanging" style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>Day Range</b>
		    <span id = "dayRangeChanging" style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>52 Week Range</b>
		    <span id = "yrRangeChanging" style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>Dividend / Yield</b>
		    <span id = "divChanging" style = "float:right;"></span>
		    
		  </li>
	
		  <li class="list-group-item">
		  <b>Volume / Avg Volume</b>
		    <span id = "volumeChanging" style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>P/E</b>
		    <span id = "PEChanging" style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>EPS</b>
		    <span id = "EPSChanging" style = "float:right;"></span>
		    
		  </li>
		  
		  <li class="list-group-item">
		  <b>Market Capital</b>
		    <span id = "capChanging" style = "float:right;"></span>
		    
		  </li>
		  
		</ul>
	</div>
	


</div>     


    <%@include file="footer.jsp" %>
    
    </body>
</html>
