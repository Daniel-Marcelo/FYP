package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.Game;

public class GameDAOImpl implements GameDAO {

	
	@Autowired
	DataSource dataSource;
	
	//Involves a few steps
	// [1] Insert into game table
	// [2] Insert into user game participation
	@Override
	public int createGame(Game newGame) {

		int gameID = 0;
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("INSERT INTO fyp_game (game_name, game_type, starting_cash, creator_email, start_date, end_date, join_code, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
			

			
			stmt1.setString(1, newGame.getGameName());
			stmt1.setString(2, newGame.getGameType());
			stmt1.setDouble(3, newGame.getStartingCash());
			stmt1.setString(4, newGame.getCreatorEmail());
			stmt1.setString(5, newGame.getStartDate());
			stmt1.setString(6, newGame.getEndDate());
			stmt1.setString(7, newGame.getJoinCode());
			stmt1.setString(8, "Active");

			
			stmt1.execute();
			stmt1.close();
			
			PreparedStatement stmt2 = conn
					.prepareStatement("SELECT LAST_INSERT_ID()");			
			ResultSet rs = stmt2.executeQuery();
			if(rs.next() == false){
				System.out.println("NULL HERE ");
			}
			else{
				gameID = rs.getInt(1);
				System.out.println("the last id entered was "+gameID);
			}
			stmt2.close();
			
			PreparedStatement stmt3 = conn.prepareStatement("INSERT INTO fyp_user_game_participation VALUES(?, ?, ?)");
			stmt3.setInt(1, gameID);
			stmt3.setString(2, newGame.getCreatorEmail());
			stmt3.setDouble(3, newGame.getStartingCash());
			
			stmt3.execute();
			
			stmt3.close();
			conn.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return gameID;
	}

	// [1] Get starting balance for this game
	// [2] Using balance, insert the user into the participation table


	@Override
	public void removeUserFromGame(String id, String activeUserEmail) {

		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_user_game_participation WHERE email = ? AND game_id = ?");
			stmt1.setString(1, activeUserEmail);
			stmt1.setInt(2, Integer.parseInt(id));
			stmt1.execute();
			
			PreparedStatement stmt2 = conn.prepareStatement("DELETE FROM fyp_game WHERE creator_email = ? AND game_id = ?");
			stmt2.setString(1, activeUserEmail);
			stmt2.setInt(2, Integer.parseInt(id));
			stmt2.execute();
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	


}
