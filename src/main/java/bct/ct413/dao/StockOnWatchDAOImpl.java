package bct.ct413.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;

public class StockOnWatchDAOImpl implements StockOnWatchDAO {
	
	@Autowired
	private DataSource dataSource;
	
	@Override
	public List<Stock> getList(String email) {
		List<Stock> stocks = new ArrayList<Stock>();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt2 = conn.prepareStatement("SELECT symbol from fyp_stocks_on_watch where email = ?");
			stmt2.setString(1, email);
			ResultSet rs = stmt2.executeQuery();
			List<String> symbols = new ArrayList<String>();

			while (rs.next()) 
				symbols.add(rs.getString("symbol"));
			
			
			String[] symbolsArray = new String[symbols.size()];
			symbols.toArray(symbolsArray);
			
			if(symbols.size()!= 0){
			Map<String, Stock> stocksMap = YahooFinance.get(symbolsArray);
			
			for(String key : stocksMap.keySet())
				stocks.add(stocksMap.get(key));
			}
			stmt2.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return stocks;
	}
	
	@Override
	public String insert(String email, String symbol) {

		int count = 0;
		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt2 = conn.prepareStatement("SELECT count(*) FROM fyp_stocks_on_watch where email = ?  AND symbol = ?");
			stmt2.setString(1, email);
			stmt2.setString(2, symbol);
			ResultSet rs = stmt2.executeQuery();

			while (rs.next())
				count = rs.getInt("count(*)");

			if (count != 0) {
				return "You're Already Watching " + symbol;
			} else {

				PreparedStatement stmt1 = conn
						.prepareStatement("INSERT INTO fyp_stocks_on_watch (email, symbol) VALUES(?,?)");
				stmt1.setString(1, email);
				stmt1.setString(2, symbol);

				stmt1.execute();

				stmt1.close();
				conn.close();
				return symbol + " added to your watch list";
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return "Error";
	}
	
	@Override
	public String remove(String symbol, String email) {

		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt2 = conn
					.prepareStatement("DELETE from fyp_stocks_on_watch where email = ? AND symbol = ?");
			stmt2.setString(1, email);
			stmt2.setString(2, symbol);

			stmt2.execute();
			stmt2.close();
			conn.close();

			return symbol + " removed from watchlist";

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return "Error: Unsuccessful";
	}

	@Override
	public void update(String currentEmail, String newEmail) {
		try{
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt5 = conn.prepareStatement("UPDATE fyp_stocks_on_watch SET email = ? WHERE email = ?");
			stmt5.setString(1, newEmail);
			stmt5.setString(2, currentEmail);
			stmt5.execute();
			
			stmt5.close();
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

	@Override
	public void remove(String email) {
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt2 = conn
					.prepareStatement("DELETE from fyp_stocks_on_watch where email = ?");
			stmt2.setString(1, email);

			stmt2.execute();
			stmt2.close();
			conn.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}

}
