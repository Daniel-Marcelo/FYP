package bct.ct413.dao;

import java.util.List;

import bct.ct413.model.StockOwned;

public interface StockOwnedDAO {

	public List<StockOwned> getStocksOwned(String activeUserEmail);

	public List<StockOwned> getStocksOwned(int gameID, String email);

	public void update(String currentEmail, String newEmail);

}
