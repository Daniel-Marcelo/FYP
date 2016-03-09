package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

	@Override
	public void removeGameFromStockOwned(int gameID) {
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_stock_owned WHERE game_id = ?");
			stmt1.setInt(1, gameID);
			
			stmt1.execute();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public void removeGameTrades(int gameID) {


		// [1] First, get all trade IDs and transaction IDs for this game
		// [2] Remove limit orders
		// [3] Remove trades
		// [4] Remove transactions

		
		Map<Integer, Integer> ids = getTradeAndTransactionIDsForThisGame(gameID);
		try {
			Connection conn = dataSource.getConnection();
			if(ids.keySet().size() != 0){

				// [2]
				StringBuilder str = new StringBuilder();
				str.append("DELETE FROM fyp_limit_order_details WHERE trade_id in (");
			
				for(int i = 0 ; i < ids.keySet().size()-1; i++){
					str.append("?, ");
				}
				str.append("?)");
				
				System.out.println("QUERY: "+str.toString());
				PreparedStatement stmt1 = conn.prepareStatement(str.toString());
				
				int count = 1;
				for(int tradeID : ids.keySet()){
					stmt1.setInt(count, tradeID);
					count++;
				}
				stmt1.execute();
				
				
				// [3] 
				PreparedStatement stmt2 = conn.prepareStatement("DELETE FROM fyp_trade WHERE game_id = ?");
				stmt2.setInt(1, gameID);
				stmt2.execute();
				
				
				// [4]
				StringBuilder str1 = new StringBuilder();
				str1.append("DELETE FROM fyp_trade_transaction WHERE transaction_id in (");
			
				for(int i = 0 ; i < ids.keySet().size()-1; i++){
					str1.append("?, ");
				}
				str1.append("?)");
				
				System.out.println("QUERY 3: "+str.toString());
				PreparedStatement stmt3 = conn.prepareStatement(str1.toString());
				
				count = 1;
				for(int tradeID : ids.keySet()){
					stmt3.setInt(count, ids.get(tradeID));
					count++;
				}
				stmt3.execute();
				
				
				
			}
	} catch (SQLException e) {
			e.printStackTrace();
		}
	}



	private Map<Integer, Integer> getTradeAndTransactionIDsForThisGame(int gameID) {
		
		HashMap<Integer, Integer> ids = new HashMap<Integer, Integer>();
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("Select trade_id, transaction_id FROM fyp_trade WHERE game_id = ?");
			stmt1.setInt(1, gameID);			
			ResultSet rs = stmt1.executeQuery();
			
			while (rs.next()){
				System.out.println(rs.getInt("trade_id"));
				ids.put(rs.getInt("trade_id"), rs.getInt("transaction_id"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ids;
	}

	@Override
	public void removeFromGameAccountHistory(int gameID) {
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_user_game_account_history WHERE game_id = ?");
			stmt1.setInt(1, gameID);
			
			stmt1.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void removeFromUserGameParticipation(int gameID) {
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
	public void removeFromGameTable(int gameID) {
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_game WHERE game_id = ?");
			stmt1.setInt(1, gameID);
			
			stmt1.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public void removeGameFromStockOwned(String email) {
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_stock_owned WHERE email = ?");
			stmt1.setString(1, email);
			stmt1.execute();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public void removeFromStocksOnWatch(String email) {

		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_stocks_on_watch WHERE email = ?");
			stmt1.setString(1, email);
			stmt1.execute();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}	
	}

	@Override
	public void removeFromGameAccountHistory(String email) {
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_user_game_account_history WHERE email = ?");
			stmt1.setString(1, email);
			
			stmt1.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public void removeFromUserGameParticipation(String email) {
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
	public List<String> getAllJoinCodes() {
		List<String> joinCodes = new ArrayList<String>();
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("SELECT join_code FROM fyp_game WHERE game_type = ?");
			stmt1.setString(1, "Private");
			ResultSet rs = stmt1.executeQuery();
			
			while (rs.next())
				joinCodes.add(rs.getString("join_code"));
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return joinCodes;
	}

	


}
