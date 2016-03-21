package bct.ct413.dao;

import java.util.List;

import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;

public interface StockOwnedDAO {

	void insert(StockOwned so);

	List<StockOwned> getList();

	void updateEmail(String currentEmail, String newEmail);
	void update(StockOwned so);

	void remove(int gameID);
	void remove(int gameID, String email);

	void remove(String email);

}
