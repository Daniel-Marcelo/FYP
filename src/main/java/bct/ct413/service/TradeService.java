package bct.ct413.service;

import java.util.List;
import java.util.Map;

import bct.ct413.model.Trade;

public interface TradeService {

	List<Trade> getActiveLimitOrdersForUser(String email);

	Map<Integer, Integer> getTradeAndTransactionIDs(int gameID);

	Map<Integer, Integer> getTradeAndTransactionIDs(int gameID, String email);
	
	Map<Integer, Integer> getTradeAndTransactionIDsForUser(String email);

	List<Integer> getTransactionIDs(String email, String symbol, int gameID);

}
