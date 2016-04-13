package bct.ct413.dao;


import java.util.List;

import bct.ct413.model.LimitOrder;
import bct.ct413.model.Trade;


public interface TradeDAO {

	List<Trade> getList();

	void insert(Trade trade);

	List<Trade> getPortfolioTradeDetails(String activeUserEmail);

	void update(String currentEmail, String newEmail);

	void remove(int gameID);

	int getLastTradeID(String email, int gameID);

	void remove(int gameID, String email);
	
	void remove(String email);

/*	void insert(LimitOrder limitOrder);
*/
}
