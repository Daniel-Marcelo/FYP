<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/admin/admin-side-menu.css">
<style>
#side-menu-div{
	height: 100%; 
	width: 12%; 
	float: left; 
	display: inline-block;
}
</style>
</head>
<body>
<div id = "side-menu-div">
				<div id='css-side-menu'>
					<ul>
								<li class='has-sub'><a href='admin'><span>Admin Home</span></a></li>
								<li class='has-sub'><a href='admin-all-users'><span>Edit User</span></a></li>
								<li class='has-sub'><a href='admin-remove-user'><span>Remove User</span></a></li>
								<li class='has-sub'><a href='admin-remove-game'><span>Remove Game</span></a></li>
					</ul>
				</div>
			</div>

</body>
</html>