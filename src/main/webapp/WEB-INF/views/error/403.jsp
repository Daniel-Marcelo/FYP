<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js"></script>
</head>
<body>
	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>
		<div id="main-content" align="center" style="margin-top: 4%;">
			<h1>HTTP Status 403 - Access is denied</h1>
			<c:choose>
				<c:when test="${empty username}">
					<h2>You do not have permission to access this page!</h2>
				</c:when>
				<c:otherwise>
					<h2>
						User: ${username} <br />You do not have permission to access this
						page!
					</h2>
				</c:otherwise>
			</c:choose>
			<c:if test="${ not empty errorMsg}">
				<h3>${errorMsg}</h3>
			</c:if>
			<h3>
				Back To Home: <a href="${pageContext.request.contextPath}">Home</a>
			</h3>
			<div align="center" style="margin-top: 7%;">
				<img src="resources/img/403.png" width= "50%" height = "50%">
			</div>
		</div>
	</div>

	<div id="footer"><%@include file="../footer.jsp"%></div>

</body>
</html>