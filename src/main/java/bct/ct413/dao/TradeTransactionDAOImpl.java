package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.TradeTransaction;


public class TradeTransactionDAOImpl implements TradeTransactionDAO {

	@Autowired
	DataSource dataSource;
	
	
	@Override
	public int addNewTransaction(TradeTransaction tradeTransaction) {
		
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("INSERT INTO fyp_trade_transaction (share_price, quantity, total) VALUES (?, ?, ?)");
			stmt1.setDouble(1, tradeTransaction.getSharePrice());
			stmt1.setInt(2, tradeTransaction.getQuantity());
			stmt1.setDouble(3, tradeTransaction.getTotal());
			stmt1.execute();
			
			PreparedStatement stmt2 = conn.prepareStatement("Select last_insert_id()");
			ResultSet rs = stmt2.executeQuery();
			rs.next();
			int transactionID = rs.getInt(1);
			return transactionID;

			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
	}

}

