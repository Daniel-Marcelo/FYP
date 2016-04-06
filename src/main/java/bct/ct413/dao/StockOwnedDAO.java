package bct.ct413.dao;

import java.util.List;

import bct.ct413.model.StockOwned;

public interface StockOwnedDAO {

	void insert(StockOwned so);

	List<StockOwned> getList();

	void updateEmail(String currentEmail, String newEmail);
	void update(StockOwned so);

	void remove(int gameID);
	void remove(int gameID, String email);

	void remove(String email);

	void updateQuantity(int gameID, String symbol, String email, int newQuantity);

	void updateAvgPurchPrice(int gameID, String symbol, String email,
			double avgPurchPrice);

	void insert(int gameID, String symbol, String email, double avgPurchPrice,
			int quantity);

}
