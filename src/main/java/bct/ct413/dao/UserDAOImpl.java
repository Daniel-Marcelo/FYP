package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.User;

public class UserDAOImpl implements UserDAO {

	@Autowired
	DataSource dataSource;

	@Override
	public List<User> get() {

		List<User> allUsers = new ArrayList<User>();

		PreparedStatement stmt1;
		try {
			Connection conn = dataSource.getConnection();

			stmt1 = conn.prepareStatement("SELECT * FROM fyp_user");
			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {

				User u = new User();
				u.setCountry(rs.getString("country"));
				u.setEmail(rs.getString("email"));
				u.setFirstName(rs.getString("first_name"));
				u.setLastName(rs.getString("last_name"));

				allUsers.add(u);

			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return allUsers;
	}

	@Override
	public void insert(User user) {

		
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("INSERT INTO fyp_user (email, password, enabled, first_name, last_name, country) VALUES( ?, ?, ?, ?, ?, ?)");
			stmt1.setString(1, user.getEmail());
			stmt1.setString(2, user.getPassword());
			stmt1.setBoolean(3, true);
			stmt1.setString(4, user.getFirstName());
			stmt1.setString(5, user.getLastName());
			stmt1.setString(6, user.getCountry());
			
			stmt1.execute();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	@Override
	public User get(String email) {
		User u = new User();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("SELECT * FROM fyp_user WHERE email = ?");
			stmt1.setString(1, email);
			ResultSet rs = stmt1.executeQuery();
			
			while(rs.next()){
				u.setEmail(rs.getString("email"));
				u.setPassword(rs.getString("password"));
				u.setFirstName(rs.getString("first_name"));
				u.setLastName(rs.getString("last_name"));
				u.setCountry(rs.getString("country"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return u;
	}

	@Override
	public void update(User user) {
		
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("UPDATE fyp_user SET email = ?, password = ?, first_name = ?, last_name = ?, country=? WHERE email = ?");
			stmt1.setString(1, user.getEmail());
			stmt1.setString(2, user.getPassword());
			stmt1.setString(3, user.getFirstName());
			stmt1.setString(4, user.getLastName());
			stmt1.setString(5, user.getCountry());
			stmt1.setString(6, user.getEmail());
			stmt1.execute();
			
			stmt1.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void update(String email, String newPass) {
	
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("UPDATE fyp_user SET password = ? WHERE email = ?");
			stmt1.setString(1, newPass);
			stmt1.setString(2, email);
			stmt1.execute();
			
			stmt1.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public double getBalance(String email, int gameID) {

		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("Select balance FROM fyp_user_game_participation WHERE email = ? AND game_id = ?");
			stmt1.setString(1, email);
			stmt1.setInt(2, gameID);
			ResultSet rs = stmt1.executeQuery();

			rs.next();

			double balance = rs.getDouble(1);
			stmt1.close();
			conn.close();

			return balance;

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;

	}

	@Override
	public void remove(String email) {
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_user WHERE email = ?");
			stmt1.setString(1, email);
			stmt1.execute();

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}


	@Override
	public List<User> getList(List<String> emails) {
		List<User> users = new ArrayList<User>();
		try {
			
			Connection conn = dataSource.getConnection();
			StringBuilder str = new StringBuilder();
			str.append("SELECT * FROM fyp_user WHERE email in (");
		
			for(int i = 0 ; i < emails.size()-1; i++)
				str.append("?, ");
			
			str.append("?)");
			
			System.out.println("QUERY: "+str.toString());
			PreparedStatement stmt1 = conn.prepareStatement(str.toString());
			
			int count = 1;
			for(String email : emails){
				stmt1.setString(count, email);
				count++;
			}
			ResultSet rs = stmt1.executeQuery();
			
			while(rs.next()){
				User u = new User();
				u.setEmail(rs.getString("email"));
				u.setPassword(rs.getString("password"));
				u.setFirstName(rs.getString("first_name"));
				u.setLastName(rs.getString("last_name"));
				u.setCountry(rs.getString("country"));
				
				users.add(u);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return users;
	}

	@Override
	public void delete(String currentEmail) {
		
		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt11 = conn.prepareStatement("DELETE FROM fyp_user WHERE email = ?");
			stmt11.setString(1, currentEmail);
			stmt11.execute();
			
			stmt11.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
