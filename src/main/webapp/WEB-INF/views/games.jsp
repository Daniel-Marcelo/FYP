<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>
<html>
<script src="resources/js/jquery.js" type="text/javascript"></script>
<base href="http://localhost:8080/FYP/">
<script>
	$(document).ready(function() {
/* 		$.ajax({
			type : "GET",
			url : "https://finance.yahoo.com/rss/headline" + "?s=" + "aapl",
			dataType : "xml",
			error : function() {
				console.log("Error")
			},
			success : function(xml) {
				console.log("done");
			}
		}); */
		
		$.get("https://finance.yahoo.com/rss/headline?s=",{use:''+"aapl"},function(responseData){
				console.log("RESPONSE: "+responseData);
			});
	});
</script>
<head></head>
<body></body>
</html>