<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>

<meta charset="ISO-8859-1">
<script src="${pageContext.request.contextPath}/resources/js/header.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/numeral.min.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/footer-placement.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/header.css">

<script>

$(document).ready(function() {
	
});
	function autoUpdateBalance() {
		
		var gameID = document.getElementById("gameIDHeader").value;
		
		$.ajax({
			url : 'update-balance/'+String(gameID),
			success : function(data) {

				$('#autoBalance').html("BALANCE: $ " + numeral(data).format('0,0'));
			}
		});

	}


	function changeBalanceHeader() {

		var gameID = document.getElementById("gameIDHeader").value;
		var games = JSON.parse('${gameBalanceHeaderJSON}');

		for (i = 0; i < games.length; i++) {
			if (games[i].gameID == gameID) {
				setBalanceHeader(games[i].balance);
			}
		}
	}

	//Formats users balance and displays on screen, top right
	function setBalanceHeader(newBalance) {

		var newBal = numeral(newBalance).format('0,0');
		document.getElementById('autoBalance').innerHTML = "BALANCE: $ " + newBal;
	}
	
	function formSubmit() {
		document.getElementById("logoutForm").submit();
	}
	
</script>
</head>


<body>
	<c:url value="/j_spring_security_logout" var="logoutUrl" />
	<form action="${logoutUrl}" method="post" id="logoutForm">
		<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
	</form>
	
	<div id='cssmenu'>
		<ul>

			<c:if test="${pageContext.request.userPrincipal.name != null}">

				<li class='active'><a href="${pageContext.request.contextPath}/account">My Account</a></li>

				<li><a href="javascript:formSubmit()"> Logout</a></li>
 				<li><a href='${pageContext.request.contextPath}/symbol-lookup'>Stock Look Up</a></li>
				<li><a href='${pageContext.request.contextPath}/trade'>Trade</a></li>
				<li><a href='${pageContext.request.contextPath}/games'>Games</a></li>
				<li><a href='${pageContext.request.contextPath}/game-dashboard'>Dashboard</a></li>
 				<li><a href='${pageContext.request.contextPath}/portfolio'>Portfolio</a></li>
				<li><a href='${pageContext.request.contextPath}/game-rankings/1'>Global Rankings</a></li>
				<li><a href='${pageContext.request.contextPath}/watchlist'>WatchList</a></li>
				
				
				
<%-- 				
				<li style="float: right; display: : none;"><a id="autoBalance"></a></li>
				
				<li style="float: right;"><select id="gameIDHeader"name="gameIDHeader" onChange="changeBalanceHeader();"class="form-field"
					style="padding: 3px; width: 200px; font-size: 16px; margin: 6px 0 0 0;">
						<c:forEach var="game" items="${gameNamesForUser}">
							<option value="${game.getGameID()}">${game.getGameName()}</option>
						</c:forEach>
				</select></li> --%>
			</c:if>
			<c:if test="${pageContext.request.userPrincipal.name == null}">

				<li><a href="register">Register</a></li>
				<li><a href="login">Login</a></li>

			</c:if>

		</ul>
	</div>
</body>
</html>