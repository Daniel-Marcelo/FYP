package bct.ct413.dao;

import java.util.List;

import yahoofinance.Stock;

public interface StockOnWatchDAO {

	List<Stock> getList(String email);

	String insert(String email, String symbol);

	String remove(String symbol, String email);

	void update(String currentEmail, String newEmail);

}
