<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery.js" type="text/javascript"></script>

<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">

<style>
td {
	padding-right: 5%;
}

html, body, #testContainer {
	height: 86.3%;
}

body>#testContainer {
	height: auto;
	min-height: 100%;
}

#testFooter {
	clear: both;
	position: relative;
	z-index: 10;
	/* height: 3em; */
	margin-top: -3em;
}

#testContent {
	padding-bottom: 1.5%;
}

#rcorners2 {
	border-radius: 25px;
	border: 2px solid #3db2e1;
	padding: 20px;
	width: 100%;
	height: 100%;
}
</style>
</head>
<body>

	<div id="testContainer">
		<div id="header">
			<%@include file="header.jsp"%>
		</div>
		<div id="testContent">
			<div align="center">
				<h1>Game Rules For ${game.getGameName()}</h1>
				<div style=" margin-top: 3%; height: 30%; width: 19%;">
					<div>


						<div id="rcorners2">

							<table width=100% style="font-size: 22px;">

								<tr>
									<td>Game Name</td>
									<td></td>
									<td>${game.getGameName()}</td>
								</tr>

								<tr>
									<td>Game Type</td>
									<td></td>
									<td>${game.getGameType()}</td>
								</tr>

								<tr>
									<td>Starting Cash</td>
									<td></td>
									<td>${game.getStartingCash()}</td>
								</tr>

								<tr>
									<td>Start Date</td>
									<td></td>
									<td>${game.getStartDate()}</td>
								</tr>

								<tr>
									<td>End Date</td>
									<td></td>
									<td>${game.getEndDate()}</td>
								</tr>

								<c:if test="${game.getJoinCode() != null}">

									<tr>
										<td>Join Code</td>
										<td></td>
										<td>${game.getJoinCode()}</td>
									</tr>
								</c:if>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="testFooter"><%@include file="footer.jsp"%></div>


</body>
</html>