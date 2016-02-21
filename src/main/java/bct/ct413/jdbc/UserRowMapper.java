package bct.ct413.jdbc;


import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import bct.ct413.model.User;

public class UserRowMapper implements RowMapper<User>
{
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		User user = new User();
		user.setEmail(rs.getString("email"));
		user.setFirstName(rs.getString("first_name"));
		user.setLastName(rs.getString("last_name"));

		user.setPassword(rs.getString("password"));
		user.setCountry(rs.getString("country"));
		

		return user;
	}
	
}