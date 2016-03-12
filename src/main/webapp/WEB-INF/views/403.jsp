<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<body>
	<h1>HTTP Status 403 - Access is denied</h1>

	<c:choose>
		<c:when test="${empty username}">
			<h2>You do not have permission to access this page!</h2>
		</c:when>
		<c:otherwise>
			<h2>User: ${username} <br/>You do not have permission to access this page!</h2>
		</c:otherwise>
	</c:choose>
			<c:if test="${ not empty errorMsg}">
			<h3>${errorMsg}</h3>
		</c:if>
	
	
	<h3>Back To Home: <a href = "/FYP" >Home</a></h3>

</body>
</html>