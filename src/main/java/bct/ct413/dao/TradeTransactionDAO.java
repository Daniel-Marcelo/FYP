package bct.ct413.dao;

import java.util.Collection;

import bct.ct413.model.TradeTransaction;



public interface TradeTransactionDAO {

	void insert(TradeTransaction tradeTransaction);

	void remove(Collection<Integer> values);

	int getLastTransactionID();
	
	TradeTransaction get(int transactionID);

}
