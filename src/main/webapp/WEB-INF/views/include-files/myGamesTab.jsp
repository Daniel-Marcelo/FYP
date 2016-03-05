<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

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
						<th>Acc. Value</th>
						
					</tr>
				</thead>
				<tbody>
					<c:forEach var="user" items="${game.getUsersInGame()}">

						<tr>
							<td>${user.getFirstName()} ${user.getLastName()}</td>
							<td>${user.getCountry()}</td>
							<td>${user.getBalance()}</td>
							<td>${user.getCurAccVal()}</td>
							


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