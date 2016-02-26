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

import bct.ct413.model.LimitOrder;
import bct.ct413.model.Trade;
import bct.ct413.model.TradeTransaction;

import com.google.gson.Gson;

public class TradeDAOImpl implements TradeDAO {

	@Autowired
	DataSource dataSource;

	@Override
	public int addNewOrder(Trade trade) {


		try {

			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1;
			if(trade.getTransactionID()!= 0){

				stmt1 = conn
						.prepareStatement("INSERT INTO fyp_trade (email, symbol, date, buy_or_sell, trade_type, status, game_id, transaction_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
				stmt1.setInt(8, trade.getTransactionID());

			}else{
				stmt1 = conn
						.prepareStatement("INSERT INTO fyp_trade (email, symbol, date, buy_or_sell, trade_type, status, game_id) VALUES (?, ?, ?, ?, ?, ?, ?)");

			}
			stmt1.setString(1, trade.getEmail());
			stmt1.setString(2, trade.getSymbol().toUpperCase());
			stmt1.setDate(3, trade.getDate());
			stmt1.setString(4, trade.getBuyOrSell()); // NEEDS CHANGING
			stmt1.setString(5, trade.getTradeType());
			stmt1.setInt(7, trade.getGameID());

			
			
			if(trade.getTradeType().equals("Limit"))
				stmt1.setString(6, "Ongoing");
			else
				stmt1.setString(6, "Executed");



			stmt1.execute();
			stmt1.close();
			int tradeID = 0;

			PreparedStatement stmt2 = conn
					.prepareStatement("SELECT LAST_INSERT_ID()");			
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

			return tradeID;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;

	}

	@Override
	public String getSharesOwned(String email) {

		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT symbol, quantity FROM fyp_stock_owned WHERE email = ?");
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
			
			for (String key : sharesOwned.keySet())
				System.out.println("KEY: " + key + " VALUE: "
						+ sharesOwned.get(key));
			
			Gson gson = new Gson();
			String jsonMap = gson.toJson(sharesOwned);
			return jsonMap;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return "";
	}

	@Override
	public List<Trade> getActiveLimitOrdersForUser(String email) {

		try{
			
			//Gets list of active limit orders from trade table
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("SELECT * FROM fyp_trade WHERE email = ? AND trade_type = ? AND status = ?");
			stmt1.setString(1, email);
			stmt1.setString(2, "Limit");
			stmt1.setString(3, "Ongoing");
			ResultSet rs = stmt1.executeQuery();
			
			List<Trade> limitOrdersList = new ArrayList<Trade>();
			
			while (rs.next()){
				
				Trade trade = new Trade();
				trade.setTradeID(rs.getInt("trade_id"));
				trade.setEmail(rs.getString("email"));
				trade.setSymbol(rs.getString("symbol"));
				trade.setDate(rs.getDate("date"));
				trade.setBuyOrSell(rs.getString("buy_or_sell"));
				trade.setTradeType(rs.getString("trade_type"));
				trade.setTransactionID(rs.getInt("transaction_id"));
				limitOrdersList.add(trade);
				
			}
			
			System.out.println("Number of limit orders for the user: "+email+" = "+limitOrdersList.size());
			return limitOrdersList;
		}catch(SQLException e){
			e.printStackTrace();
		}
		
		
		return new ArrayList<Trade>();
	}

	@Override
	public double updateLimitOrders(List<Trade> ordersToExecute) {

		System.out.println("\n\nExecuting: " +ordersToExecute.size()+" order (s).");
		try {
			
			if(ordersToExecute.size()!=0){
				
				double credit = 0;
				double debit = 0;
				Connection conn = dataSource.getConnection();
				
				for(Trade trade : ordersToExecute){
					
					//Update status to executed
					System.out.println("Using trade ID: "+trade.getTradeID()+" to get status");
					PreparedStatement stmt1 = conn.prepareStatement("UPDATE fyp_trade SET status = ? WHERE trade_id = ?");
					stmt1.setString(1, "Executed");
					stmt1.setInt(2, trade.getTradeID());	
					stmt1.executeUpdate();
					
					/*
					 * Get share price
					 * Multiply by quantity
					 * get total
					 * write to transaction table
					 * return adjustment
					 */
					
					System.out.println("Using the transaction ID: "+trade.getTransactionID()+" to get details");
					PreparedStatement stmt2 = conn.prepareStatement("SELECT total FROM fyp_trade_transaction WHERE transaction_id = ?");
					stmt2.setInt(1, trade.getTransactionID());
					ResultSet rs = stmt2.executeQuery();
					rs.next();
					double costOfTrade = rs.getDouble("total");

					
					
					
					//If its a buy order take away else if a sell order add to balance
					if(trade.getBuyOrSell().equals("Buy")){
						credit = credit + costOfTrade; 
					}
					else{
						debit = debit + costOfTrade;
					}
				}
				System.out.println("taking away: "+credit+ " from  "+debit+"  = "+(debit - credit));
				return (debit - credit);

				

				
				
		/*	Connection conn = dataSource.getConnection();
			String temp = "UPDATE trade SET tradeType = ? WHERE tradeID IN (";
			double credit = 0;
			double debit = 0;
			
			for(int i = 0 ; i < ordersToExecute.size() ; i++){
				
				temp = temp.concat("?");
				if(i < ordersToExecute.size() -1)
					temp = temp.concat(", ");
				
				//If its a buy order take away else if a sell order add to balance
				if(ordersToExecute.get(i).getBuyOrSell().equals("Buy")){
					credit = credit + ordersToExecute.get(i).getCostOfTrade(); 
				}
				else{
					debit = debit + ordersToExecute.get(i).getCostOfTrade();
				}
					
			}
			String sql = temp + ")";
			System.out.println(sql);
			
			PreparedStatement stmt1 = conn.prepareStatement(sql);
			stmt1.setString(1, "Limit - Executed");
			
			for (int i = 1 ; i <=ordersToExecute.size(); i ++){
				
				System.out.println(ordersToExecute.get(i-1).getTradeID());
				stmt1.setInt(1 + i, ordersToExecute.get(i-1).getTradeID());
				
			}
			stmt1.executeUpdate();
			
			//Executing update
			System.out.println("taking away: "+credit+ " from  "+debit+"  = "+(debit - credit));
			return (debit - credit);
			*/
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
		
	}

	@Override
	public void addLimitOrderDetails(LimitOrder limitOrder) {

		Connection conn;
		try {
			conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("INSERT INTO fyp_limit_order_details (trade_id, desired_price, quantity, duration_days) VALUES (?, ?, ?, ?)");
			System.out.println("Trade ID: "+limitOrder.getTradeID());
		stmt1.setInt(1, limitOrder.getTradeID());
		stmt1.setDouble(2, limitOrder.getDesiredPrice());
		stmt1.setInt(3, limitOrder.getQuantity());
		stmt1.setInt(4, limitOrder.getDurationDays());
		
		stmt1.execute();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public List<Trade> getPortfolioTransactionDetails(
			String activeUserEmail) {
		Connection conn;
		
		List<Trade> myTransactions = new ArrayList<Trade>();
		try {
			conn = dataSource.getConnection();
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
				trade.setTransactionID(rs.getInt("transaction_id"));
				trade.setStatus(rs.getString("status"));
				trade.setGameID(rs.getInt("game_id"));
				
				TradeTransaction transaction = trade.getTransaction();

				transaction.setQuantity(rs.getInt("quantity"));
				transaction.setSharePrice(rs.getDouble("share_price"));
				transaction.setTotal(rs.getDouble("total"));
				myTransactions.add(trade);
				
			}
		}catch(SQLException e){
			e.printStackTrace();
		}
		
		return myTransactions;

	}
}
