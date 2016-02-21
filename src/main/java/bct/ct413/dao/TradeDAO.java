package bct.ct413.dao;


import java.util.List;

import bct.ct413.model.LimitOrder;
import bct.ct413.model.Trade;


public interface TradeDAO {

	int addNewOrder(Trade trade);

	String getSharesOwned(String email);

	List<Trade> getActiveLimitOrdersForUser(String email);

	double updateLimitOrders(List<Trade> ordersToExecute);

	void addLimitOrderDetails(LimitOrder limitOrder);

	
	
}
