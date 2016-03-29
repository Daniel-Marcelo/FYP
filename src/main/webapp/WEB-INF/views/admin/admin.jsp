<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>
<html>
<head>
<title>Administration Home</title>
<script
	src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"
	type="text/javascript"></script>

<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/admin-side-menu.css">
<!-- Form CSS -->

<style>
h1 {
	margin-top: 20px;
	color: #3db2e1;
	text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}
</style>
</head>



<body>

	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content" align="center" style="margin: %; padding-bottom: 5%;">

			<h1 style="padding-bottom: 1.5%;">Administration Home</h1>
			
			<form action="admin-all-users">
				<button
					style="width: 50%; height: 20%; display: inline-block; font-size: 32px; margin-bottom: 3%;"
					type="submit" class="btn blue-submit">Edit User</button>
			</form>
			<form action="admin-remove-user">
				<button
					style="width: 50%; height: 20%; display: inline-block; font-size: 32px; margin-bottom: 3%;"
					type="submit" class="btn blue-submit">Remove User</button>
			</form>
			<form action="admin-remove-game">
				<button
					style="width: 50%; height: 20%; display: inline-block; font-size: 32px; margin-bottom: 3%;"
					type="submit" class="btn blue-submit">Remove Game</button>
			</form>

		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>