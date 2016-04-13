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

public class GameDAOImpl implements GameDAO {

	
	@Autowired
	DataSource dataSource;
	
	@Override
	public int getLastInsertedGameID(String email, String gameName){
		int gameID = 0;
		try {
			Connection conn = dataSource.getConnection();

		
			PreparedStatement stmt2 = conn.prepareStatement("SELECT MAX(game_id) FROM fyp_game WHERE creator_email = ? AND game_name = ?");
			stmt2.setString(1, email);
			stmt2.setString(2, gameName);
			
			ResultSet rs = stmt2.executeQuery();
		if(rs.next() == false){
			System.out.println("NULL HERE ");
		}
		else{
			gameID = rs.getInt(1);
		}
		stmt2.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return gameID;
	}
	
	@Override
	public void create(Game newGame) {

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
			conn.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<Game> getList() {

		List<Game> games = new ArrayList<Game>();
		try {
			Connection conn = dataSource.getConnection();

				PreparedStatement stmt1 = conn.prepareStatement("SELECT * FROM fyp_game");
				ResultSet rs = stmt1.executeQuery();

				while (rs.next()) {

					Game game = new Game();
					game.setGameID(rs.getInt("game_id"));
					game.setGameName(rs.getString("game_name"));
					game.setGameType(rs.getString("game_type"));
					game.setStartingCash(rs.getDouble("starting_cash"));
					game.setCreatorEmail(rs.getString("creator_email"));
					game.setStartDate((rs.getDate("start_date")).toString());
					game.setEndDate(rs.getDate("end_date").toString());
					game.setStatus(rs.getString("status"));

					if (game.getGameType().equals("Private")) 
						game.setJoinCode(rs.getString("join_code"));
					
					games.add(game);

					//List<User> usersInGame = getListOfUsersInThisGame(game.getGameID());
					//game.setUsersInGame(usersInGame);
					//game.setBoard(getDashboardStats(email, game));
				}
				rs.close();
				stmt1.close();

			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return games;
	}
	
	@Override
	public void remove(String activeUserEmail) {

		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt2 = conn.prepareStatement("DELETE FROM fyp_game WHERE creator_email = ?");
			stmt2.setString(1, activeUserEmail);
			stmt2.execute();
			
			stmt2.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	@Override
	public void remove(int gameID) {
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_game WHERE game_id = ?");
			stmt1.setInt(1, gameID);
			
			stmt1.execute();
			
			stmt1.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public Game get(int gameID) {
		Game game = new Game();
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("SELECT * FROM fyp_game WHERE game_id = ?");
			stmt1.setInt(1, gameID);
			ResultSet rs = stmt1.executeQuery();
			
			while (rs.next()){
				game.setGameID(rs.getInt("game_id"));
				game.setGameName(rs.getString("game_name"));
				game.setGameType(rs.getString("game_type"));
				game.setStartingCash(rs.getDouble("starting_cash"));
				game.setCreatorEmail(rs.getString("creator_email"));
				game.setStartDate((rs.getDate("start_date")).toString());
				game.setEndDate(rs.getDate("end_date").toString());
				game.setStatus(rs.getString("status"));

				if (game.getGameType().equals("Private")) {
					game.setJoinCode(rs.getString("join_code"));
				}

			}
			
			
			
		game.setGameID(gameID);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return game;			
	}

	@Override
	public void update(Game game) {
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("UPDATE fyp_game SET game_name = ?, game_type = ?, starting_cash = ?, start_date = ?, end_date = ?, join_code = ? WHERE game_id = ?");
			stmt1.setString(1, game.getGameName());		
			stmt1.setString(2, game.getGameType());		
			stmt1.setDouble(3, game.getStartingCash());		
			stmt1.setString(4, game.getStartDate());
			stmt1.setString(5, game.getEndDate());
			stmt1.setString(6,game.getJoinCode());
			stmt1.setInt(7,game.getGameID());


			
			stmt1.execute();
			
			stmt1.close();
			conn.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void updateCreatorEmail(String currentEmail, String newEmail) {

		try{
			Connection conn = dataSource.getConnection();
	
			PreparedStatement stmt3 = conn.prepareStatement("UPDATE fyp_game SET creator_email = ? WHERE creator_email = ?");
			stmt3.setString(1, newEmail);
			stmt3.setString(2, currentEmail);
			stmt3.execute();
			
			stmt3.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	@Override
	public void updateStatus(int gameID, String status) {

		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt3 = conn.prepareStatement("UPDATE fyp_game SET status = ? WHERE game_id = ?");
			stmt3.setString(1, status);
			stmt3.setInt(2, gameID);
			stmt3.execute();
			stmt3.close();
			
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}






}
