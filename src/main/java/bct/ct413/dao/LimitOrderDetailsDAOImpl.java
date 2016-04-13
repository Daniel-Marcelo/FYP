package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Set;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.model.LimitOrder;

public class LimitOrderDetailsDAOImpl implements LimitOrderDetailsDAO {
	
	@Autowired
	DataSource dataSource;
	
	@Override
	public void remove(Set<Integer> tradeIDs){
		
		try{
			Connection conn = dataSource.getConnection();
			StringBuilder str = new StringBuilder();
			str.append("DELETE FROM fyp_limit_order_details WHERE trade_id in (");
		
			for(int i = 0 ; i < tradeIDs.size()-1; i++)
				str.append("?, ");
			
			str.append("?)");
			
			System.out.println("QUERY: "+str.toString());
			PreparedStatement stmt1 = conn.prepareStatement(str.toString());
			
			int count = 1;
			for(int tradeID : tradeIDs){
				stmt1.setInt(count, tradeID);
				count++;
			}
			stmt1.execute();
			
			stmt1.close();
			conn.close();
			
		}catch(SQLException e){
		e.printStackTrace();
		}
	}

	@Override
	public void insert(LimitOrder limitOrder) {

		
		try {
			
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("INSERT INTO fyp_limit_order_details (trade_id, desired_price, quantity, duration_days) VALUES (?, ?, ?, ?)");
			stmt1.setInt(1, limitOrder.getTradeID());
			stmt1.setDouble(2, limitOrder.getDesiredPrice());
			stmt1.setInt(3, limitOrder.getQuantity());
			stmt1.setInt(4, limitOrder.getDurationDays());
		
			stmt1.execute();
			
			stmt1.close();
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}


	@Override
	public LimitOrder get(int tradeID) {
		LimitOrder lo = new LimitOrder();
	try{
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("SELECT * FROM fyp_limit_order_details WHERE trade_id = ?");
			stmt1.setInt(1, tradeID);
	
		
			ResultSet rs = stmt1.executeQuery();
			while(rs.next()){
				lo.setQuantity(rs.getInt("quantity"));
				lo.setDesiredPrice(rs.getDouble("desired_price"));
				lo.setDurationDays(rs.getInt("duration_days"));
			}
				
		}catch (SQLException e) {
			e.printStackTrace();
		}
	return lo;
	}
}
