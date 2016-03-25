<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>
<html>
<head>
</head>

<body onload="timer=setTimeout(function(){ window.location='removeUserAdmin';}, 3000)">

	<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>

		<div id="main-content">

			<h2 align="center">
				<br>You are now entering the administration section of the
				application. You will be redirected in 3 seconds.
			</h2>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>
</body>
</html>