package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.Game;
import bct.ct413.model.UserGameParticipation;

public class UserGameParticipationDAOImpl implements UserGameParticipationDAO {

	@Autowired
	DataSource dataSource;
	
	@Override
	public List<UserGameParticipation> getList(int gameID) {

		List<UserGameParticipation> users = new ArrayList<UserGameParticipation>();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("SELECT email, balance FROM fyp_user_game_participation WHERE game_id = ?");
			stmt1.setInt(1, gameID);
			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				UserGameParticipation user = new UserGameParticipation();
				user.setEmail(rs.getString("email"));
				user.setBalance(rs.getDouble("balance"));
				System.out.println("BALANCE: "+user.getBalance());
/*				User user = getPersonalDetais(email);
				double toBeAdded = getAccValForUserInGame(gameID, email);
				user.setCurAccVal(toBeAdded + user.getBalance());*/
				
				
				users.add(user);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return users;
	}
	
	@Override
	public void addToGame(Game game, String email) {

		// First check if user is already in the game
		// If they are, do nothing

		try {
				Connection conn = dataSource.getConnection();

				PreparedStatement stmt2 = conn
						.prepareStatement("INSERT INTO fyp_user_game_participation VALUES (?, ?, ?)");
				stmt2.setInt(1, game.getGameID());
				stmt2.setString(2, email);
				stmt2.setDouble(3, game.getStartingCash());

				stmt2.execute();
				stmt2.close();
				conn.close();

			//	addToAccValHistory(gameID, startingCash, email);
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}
	
	@Override
	public boolean isInGame(String email, int gameID){
		int count = 0;
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt3 = conn.prepareStatement("SELECT COUNT(*) FROM fyp_user_game_participation WHERE email = ? AND game_id = ?");
			stmt3.setString(1, email);
			stmt3.setInt(2, gameID);

			ResultSet rs3 = stmt3.executeQuery();
			while (rs3.next())
				count = rs3.getInt("COUNT(*)");

			System.out.println("Count is: "+count);
			rs3.close();
			stmt3.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		if(count == 0)
			return false;
		else 
			return true;
	}

	@Override
	public void update(String currentEmail, String newEmail) {

		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt8 = conn.prepareStatement("UPDATE fyp_user_game_participation SET email = ? WHERE email = ?");
			stmt8.setString(1, newEmail);
			stmt8.setString(2, currentEmail);
			stmt8.execute();
			
			stmt8.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}
}
