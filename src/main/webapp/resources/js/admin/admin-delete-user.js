/**
 * 
 */

	function addSelectedClass(){
		var table = $('#allUsersTable').DataTable();

		if ($(this).hasClass('active')) {
			console.log("Selected class removed");
			$(this).removeClass('active');
		} else {
			console.log("Adding selected class");
			table.$('tr.active	').removeClass('active');
			$(this).addClass('active');
		}
	}

	function removeUser(){
		var error = document.getElementById("errorMsg");
		var table = $('#allUsersTable').DataTable();

		if (table.row('.selected').length == 0) {
			
			error.innerHTML = "Please select a user to remove<br><br>";
			error.style.display = "inline";
			error.style.color = "RED";
			
		} else {
			
			var email = table.row('.selected').data()[2];
			table.row('.selected').remove().draw(false);
			
			if (error.style.display == "inline") {
				error.style.display = "none";
			}
			removeUserFromDB(email);
		}
	}		
		function removeUserFromDB(email) {
			console.log("email" + email);

			$.ajax({
				url : "admin-deleting-user/" + email,
				success : function(data) {
					console.log(data);
				}
			});
		}
		
		
		