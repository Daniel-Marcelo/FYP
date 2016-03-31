<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>404</title>
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
</head>
<body>
	<div id="main-container">
		<div id="header"><%@include file="../header.jsp"%></div>

		<div id="main-content">
			<div align = "center" style = "margin-top: 7%;">
				<h1>HTTP 404</h1>
				<h2>
					This Page Does Not Exist!<br>Return To <a
						href="${pageContext.request.contextPath}">Home</a>
				</h2>
			</div>
			<div align="center" style="margin-top: 6%;">
				<img src="resources/img/404.png" width = "20%" height = "20%">
			</div>
		</div>
	</div>
	<div id="footer"><%@include file="../footer.jsp"%></div>
</body>
</html>