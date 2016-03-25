<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%><!DOCTYPE HTML>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Symbol Lookup</title>
<meta charset="utf-8">
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/stock-chart.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/numeral.min.js"></script>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/symbolInfo.css">



<script>

	$(document).ready(function() {

		//document.getElementById("watch-div").style.visibility = "hidden";
		document.getElementById("stockInfoArea").style.visibility = "hidden";
		document.getElementById("chart_div").style.visibility = "hidden";
		document.getElementById("load-animation").style.visibility = "hidden";

	});
	 
	 
	 function addToWatchList(){
		 var name = document.getElementById("companyName");
		 var symbol = String(getSymbol(name.innerHTML));

		 $.ajax({
		        url : 'watchStock/'+symbol,
		        success : function(data) {
				 var confirmWatch = document.getElementById("confirmation");
				 confirmWatch.innerHTML = data;
				 confirmWatch.style.color = "GREEN";
				 
			 }
		 });
	 }
		 
	 function getSymbol(name){
		 
		 var res1 = name.split("<u>"); 	//Will give SYM - NAME </u>
		 var res2 = res1[1].split(" - ");

		 return res2[0];
	 }
</script>
</head>

<body>
<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>

		<div id="main-content">

		<div id="searchAndChart">
			<div id="searchBox">

				<form action="javascript:testMethod();">
					<input id="companySymbol" class="inputField"
						placeholder="Symbol Lookup..." type="text" name="symbol" autofocus>
					<input type="hidden" name="${_csrf.parameterName}"
						value="${_csrf.token}" />
					<button id="sendingSymbolButton" type="submit"
						class="btn blue-submit">Submit</button>
				</form>
			</div>
			
				<div id ="load-animation">
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

 			<div id="marketStatus"></div>
 			<div id='chart_div'></div>
		</div>

 		<div id="stockInfoArea">
 			<ul id="stockInfoTable" class="list-group">

				<li id="companyName" class="list-group-item"></li>

				<li id="stockPriceCurrency" class="list-group-item"><b>Price</b>
					<span id="stockPriceChanging" class = "float-right"></span></li>

				<li class="list-group-item"><b>Open</b> <span id="openChanging"
					class = "float-right"></span></li>

				<li class="list-group-item"><b>Ask</b> <span id="askChanging"
					class = "float-right"></span></li>

				<li class="list-group-item"><b>Previous Close</b> <span
					id="prevCloseChanging" class = "float-right"></span></li>

				<li class="list-group-item"><b>Day Range</b> <span
					id="dayRangeChanging" class = "float-right"></span></li>

				<li class="list-group-item"><b>52 Week Range</b> <span
					id="yrRangeChanging" class = "float-right"></span></li>

				<li class="list-group-item"><b>Dividend / Yield</b> <span
					id="divChanging" class = "float-right"></span></li>

				<li class="list-group-item"><b>Volume / Avg Volume</b> <span
					id="volumeChanging" class = "float-right"></span></li>

				<li class="list-group-item"><b>P/E</b> <span id="PEChanging"
					class = "float-right"></span></li>

				<li class="list-group-item"><b>EPS</b> <span id="EPSChanging"
					class = "float-right"></span></li>

				<li class="list-group-item"><b>Market Capital</b> <span
					id="capChanging" class = "float-right"></span></li>

			</ul>

 			<div align="center" id="watch-div" style = "visibility : hidden;">
			
				<div id = "confirmation"></div>
			
				<br><button  onClick = "addToWatchList();" type="submit" class="btn blue-submit">Watch Stock</button>

			</div> 
		</div>
	</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>
</body>
</html>