package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import yahoofinance.YahooFinance;
import bct.ct413.model.StockOwned;

public class StockOwnedDAOImpl implements StockOwnedDAO {
	
	@Autowired
	private DataSource dataSource;
	

	
	
	@Override
	public List<StockOwned> getStocksOwned(String email) {

		List<StockOwned> stocksOwned = new ArrayList<StockOwned>();

		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT game_id, symbol, quantity, avg_purch_price FROM fyp_stock_owned WHERE email = ?");
			stmt1.setString(1, email);
			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				StockOwned stockOwned = new StockOwned();
				stockOwned.setEmail(email);
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
	public List<StockOwned> getStocksOwned(int gameID, String email) {


		List<StockOwned> stocksOwned = new ArrayList<StockOwned>();

		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT symbol, quantity, avg_purch_price FROM fyp_stock_owned WHERE email = ? AND game_id = ?");
			stmt1.setString(1, email);
			stmt1.setInt(2, gameID);
			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				StockOwned stockOwned = new StockOwned();
				stockOwned.setEmail(email);
				stockOwned.setQuantity(rs.getInt("quantity"));
				stockOwned.setSymbol(rs.getString("symbol"));
				stockOwned.setAvgPurchPrice(rs.getDouble("avg_purch_price"));
				stockOwned.setGameID(gameID);

				stocksOwned.add(stockOwned);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return stocksOwned;
	}




	@Override
	public void update(String currentEmail, String newEmail) {
		
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

}
