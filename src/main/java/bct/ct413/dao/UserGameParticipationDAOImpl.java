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
			PreparedStatement stmt1 = conn.prepareStatement("SELECT game_id, email, balance FROM fyp_user_game_participation WHERE game_id = ?");
			stmt1.setInt(1, gameID);
			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				UserGameParticipation user = new UserGameParticipation();
				user.setEmail(rs.getString("email"));
				user.setBalance(rs.getDouble("balance"));
				user.setGameID(rs.getInt("game_id"));

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

	@Override
	public void remove(int gameID) {
			try {
				Connection conn = dataSource.getConnection();
				
				PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_user_game_participation WHERE game_id = ?");
				stmt1.setInt(1, gameID);
				
				stmt1.execute();
			} catch (SQLException e) {
				e.printStackTrace();
			}		
	}

	@Override
	public List<UserGameParticipation> get(String email) {

		List<UserGameParticipation> list = new ArrayList<UserGameParticipation>();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT * FROM fyp_user_game_participation WHERE email = ?");
			stmt1.setString(1, email);

			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				UserGameParticipation UGP = new UserGameParticipation();
				UGP.setBalance(rs.getDouble("balance"));
				UGP.setEmail(rs.getString("email"));
				UGP.setGameID(rs.getInt("game_id"));
				list.add(UGP);

				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}
	
	@Override
	public void updateBalance(String email, double total, int gameID) {

		double balance = 0;
		// [1] Get existing balance
		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt1 = conn.prepareStatement("SELECT balance FROM fyp_user_game_participation WHERE email = ? and game_id = ?");
			stmt1.setString(1, email);
			stmt1.setInt(2, gameID);
			ResultSet rs = stmt1.executeQuery();
			while(rs.next())
				balance = rs.getDouble("balance");

			double newBal = balance - total;

			PreparedStatement stmt2 = conn.prepareStatement("UPDATE fyp_user_game_participation SET balance = ? WHERE email = ? AND game_id = ?");
			stmt2.setDouble(1, newBal);
			stmt2.setString(2, email);
			stmt2.setInt(3, gameID);

			stmt2.executeUpdate();

			stmt1.close();
			stmt2.close();
			//rs.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	@Override
	public void remove(int gameID, String email) {
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_user_game_participation WHERE game_id = ? AND email = ?");
			stmt1.setInt(1, gameID);
			stmt1.setString(2, email);
			
			stmt1.execute();
			stmt1.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public void remove(String email) {

		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_user_game_participation WHERE email = ?");
			stmt1.setString(1, email);
			
			stmt1.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}		
		
	}

	@Override
	public List<UserGameParticipation> getList() {

		List<UserGameParticipation> users = new ArrayList<UserGameParticipation>();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("SELECT game_id, email, balance FROM fyp_user_game_participation");
			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				UserGameParticipation user = new UserGameParticipation();
				user.setEmail(rs.getString("email"));
				user.setBalance(rs.getDouble("balance"));
				user.setGameID(rs.getInt("game_id"));
				
				users.add(user);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return users;
	}
}
