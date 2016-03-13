package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.User;

public class UserRolesDAOImpl implements UserRolesDAO {

	@Autowired
	DataSource dataSource;
	
	@Override
	public void insert(User user) {
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("INSERT INTO fyp_user_roles (email, role) VALUES(?, ?)");
			stmt1.setString(1, user.getEmail());
			stmt1.setString(2, "ROLE_USER");

			stmt1.execute();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public void update(String currentEmail, String newEmail) {
		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt9 = conn.prepareStatement("UPDATE fyp_user_roles SET email = ? WHERE email = ?");
			stmt9.setString(1, newEmail);
			stmt9.setString(2, currentEmail);
			stmt9.execute();
			
			stmt9.close();
			conn.close();
			
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

}
