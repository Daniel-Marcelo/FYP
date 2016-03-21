package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.TradeTransaction;


public class TradeTransactionDAOImpl implements TradeTransactionDAO {

	@Autowired
	DataSource dataSource;
	
	
	@Override
	public void insert(TradeTransaction tradeTransaction) {
		
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("INSERT INTO fyp_trade_transaction (share_price, quantity, total) VALUES (?, ?, ?)");
			stmt1.setDouble(1, tradeTransaction.getSharePrice());
			stmt1.setInt(2, tradeTransaction.getQuantity());
			stmt1.setDouble(3, tradeTransaction.getTotal());
			stmt1.execute();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	

	@Override
	public void remove(Collection<Integer> ids) {

		try {
			Connection conn = dataSource.getConnection();
			
			StringBuilder str1 = new StringBuilder();
			str1.append("DELETE FROM fyp_trade_transaction WHERE transaction_id in (");
		
			for(int i = 0 ; i < ids.size()-1; i++){
				str1.append("?, ");
			}
			str1.append("?)");
			
			System.out.println("QUERY 3: "+str1.toString());
			PreparedStatement stmt3 = conn.prepareStatement(str1.toString());
			
			int count = 1;
			for(int id : ids){
				stmt3.setInt(count, id);
				count++;
			}
			stmt3.execute();
			
			stmt3.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public int getLastTransactionID(){
		
		int transactionID = 0;
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt2 = conn.prepareStatement("Select Max(transaction_id) FROM fyp_trade_transaction");
			ResultSet rs = stmt2.executeQuery();
			
			while(rs.next())
				transactionID = rs.getInt(1);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return transactionID;
	}


	@Override
	public TradeTransaction get(int transactionID) {
		TradeTransaction transaction = new TradeTransaction();

		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt2 = conn.prepareStatement("SELECT * FROM fyp_trade_transaction WHERE transaction_id = ?");
			stmt2.setInt(1, transactionID);
			ResultSet rs = stmt2.executeQuery();
			
			while(rs.next()){
				transaction.setQuantity(rs.getInt("quantity"));
				transaction.setTransactionID(rs.getInt("transaction_id"));
				transaction.setSharePrice(rs.getDouble("share_price"));
				transaction.setTotal(rs.getDouble("total"));
			}
			
			stmt2.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return transaction;
	}
}

