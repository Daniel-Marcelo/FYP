package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.UserGameAccountValHistory;

public class UserGameAccountValHistoryDAOImpl implements UserGameAccountValHistoryDAO {
	
	@Autowired
	DataSource dataSource;
	
	@Override
	public void insert(int gameID, double startingCash, String email) {

		SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
		String date = DATE_FORMAT.format(new Date());

		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt1 = conn
					.prepareStatement("INSERT INTO fyp_user_game_account_history(game_id, email, date, closing_acc_value, percent_change) VALUES(?,?,?,?,?)");
			stmt1.setInt(1, gameID);
			stmt1.setString(2, email);
			stmt1.setString(3, date);
			stmt1.setDouble(4, startingCash);
			stmt1.setDouble(5, 0);

			stmt1.execute();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public List<UserGameAccountValHistory> get(String email) {

		List<UserGameAccountValHistory> entries = new ArrayList<UserGameAccountValHistory>();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT * FROM fyp_user_game_account_history WHERE email = ?");
			stmt1.setString(1, email);

			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				UserGameAccountValHistory entry = new UserGameAccountValHistory();
				entry.setGameID(rs.getInt("game_id"));
				entry.setDate(rs.getString("date"));
				entry.setClosingAccVal(rs.getDouble("closing_acc_value"));
				entry.setPercentChange(rs.getDouble("percent_change"));
				entries.add(entry);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return entries;
	}

	@Override
	public void update(String currentEmail, String newEmail) {

		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt7 = conn
					.prepareStatement("UPDATE fyp_user_game_account_history SET email = ? WHERE email = ?");
			stmt7.setString(1, newEmail);
			stmt7.setString(2, currentEmail);
			stmt7.execute();
			
			stmt7.close();
			conn.close();
	
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}
}
