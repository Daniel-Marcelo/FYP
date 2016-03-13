package bct.ct413.dao;


import java.util.List;

import bct.ct413.model.LimitOrder;
import bct.ct413.model.Trade;


public interface TradeDAO {

	int addNewOrder(Trade trade);

	//This needs to be gotten rid of, already in userDAO
	String getSharesOwned(String email);

	List<Trade> getActiveLimitOrdersForUser(String email);

	double updateLimitOrders(List<Trade> ordersToExecute);

	void addLimitOrderDetails(LimitOrder limitOrder);

	List<Trade> getPortfolioTradeDetails(
			String activeUserEmail);

	void removeTrades(String email);

	void update(String currentEmail, String newEmail);

	
	
}
