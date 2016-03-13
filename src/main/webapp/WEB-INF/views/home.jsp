<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src="resources/js/jquery.js" type="text/javascript"></script>
<link rel="stylesheet" href="resources/css/bootstrap.css">
<link rel="stylesheet" href="resources/css/reg-and-login.css">			<!-- Form CSS -->
<script src="resources/js/registration-form-validation.js"></script>
<script src="resources/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="resources/css/dataTables.css">
<script src="resources/js/dataTables.js"></script>
<script src="resources/js/gameFunctionality.js"></script>


<style>
td {
	padding-right: 5%;
}



html, body, #testContainer { height: 100%; }
body > #testContainer { height: auto; min-height: 100%; }

#testFooter {
 clear: both;
 position: relative;
 z-index: 10;
 /* height: 3em; */
 margin-top: -3em;
}

#testContent { padding-bottom: 1.5%; }
</style>

<script>
	$(document).ready(
			function() {	

				document.getElementById("retypedPassword").value = document
						.getElementById("password").value;

/* 				$("#startDateGame").datepicker({
					dateFormat : 'yy/mm/dd'
				});
				$("#endDateGame").datepicker({
					dateFormat : 'yy/mm/dd'
				});

				var gamesJSON = JSON.parse('${dataTableGamesJSON}');
				drawDataTable(gamesJSON); */
			});
</script>
</head>

<body>

<%-- 	<sec:authorize access="isRememberMe()">
		<h2># This user is login by "Remember Me Cookies".</h2>
	</sec:authorize>

	<sec:authorize access="isFullyAuthenticated()">
		<h2># This user is login by username / password.</h2>
	</sec:authorize> --%>

	<div id="testContainer">
	<div id = "header">
		<%@include file="header.jsp"%>
	</div>
		<div id="testContent">
<%-- 		 <c:if test="${messageFromHome == null}">
			<h2>No message!</h2>

		</c:if>

		<c:if test="${messageFromHome != null}">
			<h2>${messageFromHome}</h2>

		</c:if>	 --%>
		
									<%@include file="include-files/myDetailsForm.jsp"%>
		
<%--  			<div class="container">


 
 				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">My Account</h3>
					</div>
					<div class="panel-body">

						<ul class="nav nav-tabs">
							<li class="active"><a data-toggle="tab" href="#home">Home</a></li>
							<li><a data-toggle="tab" href="#menu1">My Games</a></li>
							<li><a data-toggle="tab" href="#menu2">Create/ Join</a></li>
							<li><a data-toggle="tab" href="#menu3">Leave Game</a></li>
							<li><a data-toggle="tab" href="#menu4">Edit Game</a></li>

						</ul>

					</div>

					<div class="tab-content">
						<div id="home" class="tab-pane fade in active">


						</div>


						<div id="menu1" class="tab-pane fade">
							<div align="center">
								<div align="center" style="width: 95%">

									<%@include file="include-files/myGamesTab.jsp"%>

								</div>
							</div>
						</div>


						<div id="menu2" class="tab-pane fade" style="margin: 2% 5% 0 5%;">

							<%@include file="include-files/joinCreate.jsp"%>

						</div>
						

				<div id="menu3" class="tab-pane fade">

					<%@include file="include-files/leaveGameTab.jsp"%>

				</div>

				<div id="menu4" class="tab-pane fade">

					<div align="center">
						<div align="center" style="width: 95%">

							<%@include file="include-files/editGameTab.jsp"%>

						</div>
					</div>
				</div>


					</div>
				</div>
 			</div> --%>
 		</div>
	</div>
	<div id = "testFooter"><%@include file="footer.jsp"%></div>
</body>
</html>
