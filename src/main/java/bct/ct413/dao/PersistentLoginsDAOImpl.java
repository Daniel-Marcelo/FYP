package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

public class PersistentLoginsDAOImpl implements PersistentLoginsDAO {

	@Autowired
	DataSource dataSource;
	
	@Override
	public void delete(String currentEmail) {

		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt10 = conn.prepareStatement("DELETE FROM persistent_logins WHERE username = ?");
			stmt10.setString(1, currentEmail);
			stmt10.execute();
			
			stmt10.close();
			conn.close();

			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

}
