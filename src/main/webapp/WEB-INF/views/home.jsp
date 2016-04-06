<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src="${pageContext.request.contextPath}/resources/js/jquery-1.12.0.min.js" type="text/javascript"></script>
	
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reg-login.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/home.css">

<title>xChange</title>
</head>
<body>

	<div id="main-container">
		<div id="header"><%@include file="header.jsp"%></div>

		<div id="main-content">

			<div align="center" id="main">
				<div id="image">
					<img src="${pageContext.request.contextPath}/resources/img/WallStreetSignGeneric.jpg"  height="1000" width="100%" />
				</div>
				<div class="vertical-align white-background">
					<h3>
						x<span>Change</span>
					</h3>
				</div>

			</div>
		</div>
	</div>
	<div id="footer"><%@include file="footer.jsp"%></div>

</body>
</html>