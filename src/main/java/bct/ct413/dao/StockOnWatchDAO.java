package bct.ct413.dao;

import java.util.List;

import yahoofinance.Stock;

public interface StockOnWatchDAO {

	// Create
	void insert(String email, String symbol);

	// Read
	List<Stock> getList(String email);

	// Update
	void update(String currentEmail, String newEmail);

	// Delete
	void remove(String symbol, String email);
	void remove(String email);

}
