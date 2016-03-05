<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>
<html>
<head>
</head>

<body onload="timer=setTimeout(function(){ window.location='removeUserAdmin';}, 3000)">

<%@include file = "header.jsp" %>
<h2 align = "center"><br>You are now entering the administration section of the application. You will be redirected in 3 seconds.</h2>
<%@include file = "footer.jsp" %>

</body>
</html>