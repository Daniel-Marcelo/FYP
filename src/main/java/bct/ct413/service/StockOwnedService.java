package bct.ct413.service;

import java.util.List;

import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;
import bct.ct413.model.User;



public interface StockOwnedService {
	
	public List<StockOwned> stockOwnedPortfolioInfo(String email);

	void calculateAccountValue(List<User> usersInGame, int gameID);

	void updateQuantity(Trade trade, StockOwned so);

	List<StockOwned> getList(String email);

	List<StockOwned> getList(int gameID, String email);

	int getQuantity(String email, String symbol, int gameID);


}
