<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>Administration Home</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/admin/admin.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/buttons-and-fields.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/tags.css">
</head>
<body>

	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content" align="center" style="padding-bottom: 5%;">
			<div style = "padding: 3% 0%;">
				<h1>Administration Home</h1>
			</div>
			<form action="admin-all-users">
				<button type="submit" class="admin-button btn blue-submit">Edit User</button>
			</form>
			<form action="admin-remove-user">
				<button	type="submit" class="admin-button btn blue-submit">Remove User</button>
			</form>
			<form action="admin-remove-game">
				<button type="submit" class="admin-button btn blue-submit">Remove Game</button>
			</form>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>