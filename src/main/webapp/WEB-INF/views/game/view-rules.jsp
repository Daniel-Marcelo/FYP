<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>View Game Rules</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>

<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/reg-and-login.css">

<style>
td {
	padding-right: 5%;
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

<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">
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
	<div id="footer"><%@include file="../footer.jsp"%></div>


</body>
</html>