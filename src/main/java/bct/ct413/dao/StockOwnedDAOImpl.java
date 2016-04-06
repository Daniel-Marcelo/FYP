package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.StockOwned;

public class StockOwnedDAOImpl implements StockOwnedDAO {
	
	@Autowired
	private DataSource dataSource;
	
	@Override
	public List<StockOwned> getList() {
		List<StockOwned> stocksOwned = new ArrayList<StockOwned>();

		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT email, game_id, symbol, quantity, avg_purch_price FROM fyp_stock_owned");
			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				StockOwned stockOwned = new StockOwned();
				stockOwned.setEmail(rs.getString("email"));
				stockOwned.setQuantity(rs.getInt("quantity"));
				stockOwned.setSymbol(rs.getString("symbol"));
				stockOwned.setAvgPurchPrice(rs.getDouble("avg_purch_price"));
				stockOwned.setGameID(rs.getInt("game_id"));

				stocksOwned.add(stockOwned);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return stocksOwned;
	}
	
	


	@Override
	public void updateEmail(String currentEmail, String newEmail) {
		
		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt4 = conn.prepareStatement("UPDATE fyp_stock_owned SET email = ? WHERE email = ?");
			stmt4.setString(1, newEmail);
			stmt4.setString(2, currentEmail);
			stmt4.execute();
			
			stmt4.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public void remove(int gameID) {

		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_stock_owned WHERE game_id = ?");
			stmt1.setInt(1, gameID);
			
			stmt1.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}
	
	@Override
	public void remove(int gameID, String email) {

		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_stock_owned WHERE game_id = ? AND email = ?");
			stmt1.setInt(1, gameID);
			stmt1.setString(2, email);
			
			stmt1.execute();
			
			stmt1.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}
	
	
	/*@Override

	public void update(Trade trade, int quantity, double avgPurchasePrice) {

		try {
			Connection conn = dataSource.getConnection();


			if (isInTable(trade.getEmail(), trade.getSymbol(), trade.getGameID())) {

				PreparedStatement stmt2 = conn.prepareStatement("INSERT INTO fyp_stock_owned VALUES (?, ?, ?, ?, ?)");
				stmt2.setInt(1, trade.getGameID());
				stmt2.setString(2, trade.getEmail());
				stmt2.setString(3, trade.getSymbol());
				stmt2.setInt(4, quantity);
				stmt2.setDouble(5, avgPurchasePrice);
				stmt2.execute();
				stmt2.close();
				conn.close();

			} else {
				int oldQuantity = rs.getInt("quantity");

				PreparedStatement stmt2 = conn.prepareStatement("UPDATE fyp_stock_owned SET quantity = ?, avg_purch_price = ? WHERE email = ? AND symbol = ? AND game_id = ?");
				stmt2.setInt(1, (oldQuantity + quantity));
				stmt2.setDouble(2, avgPurchasePrice);
				stmt2.setString(3, trade.getEmail());
				stmt2.setString(4, trade.getSymbol());
				stmt2.setInt(5, trade.getGameID());
				stmt2.executeUpdate();
				stmt2.close();
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}*/
	
	@Override
	public void insert(StockOwned so){
	
		try{
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt2 = conn.prepareStatement("INSERT INTO fyp_stock_owned VALUES (?, ?, ?, ?, ?)");
			stmt2.setInt(1, so.getGameID());
			stmt2.setString(2, so.getEmail());
			stmt2.setString(3, so.getSymbol());
			stmt2.setInt(4, so.getQuantity());
			stmt2.setDouble(5, so.getAvgPurchPrice());
			stmt2.execute();
			stmt2.close();
			conn.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void update(StockOwned so){
	
		try{
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt2 = conn.prepareStatement("UPDATE fyp_stock_owned SET quantity = ?, avg_purch_price = ? WHERE email = ? AND symbol = ? AND game_id = ?");
			stmt2.setInt(1, so.getQuantity());
			stmt2.setDouble(2, so.getAvgPurchPrice());
			stmt2.setString(3, so.getEmail());
			stmt2.setString(4, so.getSymbol());
			stmt2.setInt(5, so.getGameID());
			stmt2.executeUpdate();
			stmt2.close();
			conn.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}




	@Override
	public void remove(String email) {

		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn.prepareStatement("DELETE FROM fyp_stock_owned WHERE email = ?");
			stmt1.setString(1, email);
			
			stmt1.execute();
			
			stmt1.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}	
		
	}




	@Override
	public void updateQuantity(int gameID, String symbol, String email,
			int newQuantity) {
		try{
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt2 = conn.prepareStatement("UPDATE fyp_stock_owned SET quantity = ? WHERE email = ? AND symbol = ? AND game_id = ?");
			stmt2.setInt(1, newQuantity);
			stmt2.setString(2, email);
			stmt2.setString(3, symbol);
			stmt2.setInt(4, gameID);
			stmt2.executeUpdate();
			stmt2.close();
			conn.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}




	@Override
	public void updateAvgPurchPrice(int gameID, String symbol, String email,
			double avgPurchPrice) {
		try{
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt2 = conn.prepareStatement("UPDATE fyp_stock_owned SET avg_purch_price = ? WHERE email = ? AND symbol = ? AND game_id = ?");
			stmt2.setDouble(1, avgPurchPrice);
			stmt2.setString(2, email);
			stmt2.setString(3, symbol);
			stmt2.setInt(4, gameID);
			stmt2.executeUpdate();
			stmt2.close();
			conn.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}			
	}




	@Override
	public void insert(int gameID, String symbol, String email,
			double avgPurchPrice, int quantity) {

		try{
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt2 = conn.prepareStatement("INSERT INTO fyp_stock_owned VALUES (?, ?, ?, ?, ?)");
			stmt2.setInt(1, gameID);
			stmt2.setString(2, email);
			stmt2.setString(3, symbol);
			stmt2.setInt(4, quantity);
			stmt2.setDouble(5, avgPurchPrice);
			System.out.println("Symbol: "+symbol+ " price "+avgPurchPrice);	
			stmt2.execute();
			stmt2.close();
			conn.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

}
