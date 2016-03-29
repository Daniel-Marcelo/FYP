package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.LimitOrder;
import bct.ct413.model.Trade;
import bct.ct413.model.TradeTransaction;

public class TradeDAOImpl implements TradeDAO {

	@Autowired
	DataSource dataSource;
	
	
	
	@Override
	public void insert(Trade trade) {


		try {

			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1;
			
			if(trade.getTransaction().getTransactionID()!= 0){

				stmt1 = conn.prepareStatement("INSERT INTO fyp_trade (email, symbol, date, buy_or_sell, trade_type, status, game_id, transaction_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
				stmt1.setInt(8, trade.getTransaction().getTransactionID());

			}else
				stmt1 = conn.prepareStatement("INSERT INTO fyp_trade (email, symbol, date, buy_or_sell, trade_type, status, game_id) VALUES (?, ?, ?, ?, ?, ?, ?)");

		
			stmt1.setString(1, trade.getEmail());
			stmt1.setString(2, trade.getSymbol().toUpperCase());
			stmt1.setDate(3, trade.getDate());
			stmt1.setString(4, trade.getBuyOrSell()); 
			stmt1.setString(5, trade.getTradeType());
			stmt1.setInt(7, trade.getGameID());

			
			
			if(trade.getTradeType().equals("Limit"))
				stmt1.setString(6, "Ongoing");
			else
				stmt1.setString(6, "Executed");

			stmt1.execute();
			stmt1.close();
			
			

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Override
	public void insert(LimitOrder limitOrder) {


		try {

			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("INSERT INTO fyp_trade (email, symbol, date, buy_or_sell, trade_type, status, game_id) VALUES (?, ?, ?, ?, ?, ?, ?)");

		
			stmt1.setString(1, limitOrder.getEmail());
			stmt1.setString(2, limitOrder.getSymbol().toUpperCase());
			stmt1.setDate(3, limitOrder.getDate());
			stmt1.setString(4, limitOrder.getBuyOrSell()); 
			stmt1.setString(5, "Limit");
			stmt1.setInt(7, limitOrder.getGameID());
			stmt1.setString(6, "Ongoing");

			stmt1.execute();
			stmt1.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

/*	@Override
	public String getSharesOwned(String email) {

		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt1 = conn.prepareStatement("SELECT symbol, quantity FROM fyp_stock_owned WHERE email = ?");
			stmt1.setString(1, email);
			ResultSet rs = stmt1.executeQuery();
			Map<String, Integer> sharesOwned = new HashMap<String, Integer>();
			
			while (rs.next()) {
				String symbol = rs.getString("symbol");
				int shares = rs.getInt("quantity");

				// If its the first time coming across this symbol
				if (!sharesOwned.keySet().contains(symbol)) {
					sharesOwned.put(symbol, shares);
				}
				// Add to the existing quantities of shares owned.
				else {
					int existingNumberOfShares = sharesOwned.get(symbol);
					int newNumber = shares + existingNumberOfShares;
					sharesOwned.put(symbol, newNumber);
				}

			}
			return new Gson().toJson(sharesOwned);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return "";
	}*/

	@Override
	public List<Trade> getList() {


		try{
			
			//Gets list of active limit orders from trade table
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("SELECT * FROM fyp_trade");
/*			stmt1.setString(1, email);
			stmt1.setString(2, "Limit");
			stmt1.setString(3, "Ongoing");*/
			ResultSet rs = stmt1.executeQuery();
			
			List<Trade> limitOrdersList = new ArrayList<Trade>();
			
			while (rs.next()){
				
				Trade trade = new Trade();
				trade.setTradeID(rs.getInt("trade_id"));
				trade.setGameID(rs.getInt("game_id"));
				trade.setEmail(rs.getString("email"));
				trade.setSymbol(rs.getString("symbol"));
				trade.setDate(rs.getDate("date"));
				trade.setBuyOrSell(rs.getString("buy_or_sell"));
				trade.setTradeType(rs.getString("trade_type"));
				trade.getTransaction().setTransactionID(rs.getInt("transaction_id"));
				limitOrdersList.add(trade);
				
			}
			
		//	System.out.println("Number of limit orders for the user: "+email+" = "+limitOrdersList.size());
			return limitOrdersList;
		}catch(SQLException e){
			e.printStackTrace();
		}
		
		
		return new ArrayList<Trade>();
	}

	@Override
	public List<Trade> getPortfolioTradeDetails(String activeUserEmail) {

		
		List<Trade> myTrades = new ArrayList<Trade>();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT email,  symbol, date, buy_or_sell, trade_type, fyp_trade.transaction_id, status, game_id, share_price, quantity, total "
							+ "FROM fyp_trade INNER JOIN  fyp_trade_transaction ON fyp_trade.transaction_id = fyp_trade_transaction.transaction_id "
							+ "WHERE email = ?");
			stmt1.setString(1, activeUserEmail);
			
			
			ResultSet rs  = stmt1.executeQuery();
			
			while(rs.next()){
				
				Trade trade = new Trade();
				trade.setSymbol(rs.getString("symbol"));
				trade.setDate(rs.getDate("date"));
				trade.setBuyOrSell(rs.getString("buy_or_sell"));
				trade.setTradeType(rs.getString("trade_type"));
				trade.getTransaction().setTransactionID(rs.getInt("transaction_id"));
				trade.setStatus(rs.getString("status"));
				trade.setGameID(rs.getInt("game_id"));
				
				TradeTransaction transaction = trade.getTransaction();

				transaction.setQuantity(rs.getInt("quantity"));
				transaction.setSharePrice(rs.getDouble("share_price"));
				transaction.setTotal(rs.getDouble("total"));
				myTrades.add(trade);
				
			}
			
			rs.close();
			stmt1.close();
			conn.close();
			
		}catch(SQLException e){
			e.printStackTrace();
		}
		return myTrades;
	}

	@Override
	public void update(String currentEmail, String newEmail) {
		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt6 = conn.prepareStatement("UPDATE fyp_trade SET email = ? WHERE email = ?");
			stmt6.setString(1, newEmail);
			stmt6.setString(2, currentEmail);
			stmt6.execute();
			
			stmt6.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public void remove(int gameID) {


		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt2 = conn.prepareStatement("DELETE FROM fyp_trade WHERE game_id = ?");
			stmt2.setInt(1, gameID);
			stmt2.execute();
			
			stmt2.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
	}
	
	@Override
	public void remove(int gameID, String email) {


		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt2 = conn.prepareStatement("DELETE FROM fyp_trade WHERE game_id = ? AND email = ?");
			stmt2.setInt(1, gameID);
			stmt2.setString(2, email);
			stmt2.execute();
			
			stmt2.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
	}

	@Override
	public int getLastTradeID(String email, int gameID) {

		int tradeID = 0;

		try{
			Connection conn = dataSource.getConnection();
	
			PreparedStatement stmt2 = conn.prepareStatement("SELECT MAX(trade_id) FROM fyp_trade WHERE email = ? AND game_id	 = ?");		
			stmt2.setString(1, email);
			stmt2.setInt(2, gameID);
			ResultSet rs = stmt2.executeQuery();
			if(rs.next() == false){
				System.out.println("NULL HERE ");
			}
			else{
				tradeID = rs.getInt(1);
				System.out.println("the last id entered was "+tradeID);
			}
			stmt2.close();
			conn.close();
	
		}catch(SQLException e){
			e.printStackTrace();
		}
		return tradeID;
	}


	@Override
	public void remove(String email) {

		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt2 = conn.prepareStatement("DELETE FROM fyp_trade WHERE email = ?");
			stmt2.setString(1, email);
			stmt2.execute();
		}catch(SQLException e){
			e.printStackTrace();
		}
	}


}
