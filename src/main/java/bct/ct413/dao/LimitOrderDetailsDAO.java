package bct.ct413.dao;

import java.util.Set;

import bct.ct413.model.LimitOrder;

public interface LimitOrderDetailsDAO {

	// Create
	void insert(LimitOrder limitOrder);
	
	// Delete
	void remove(Set<Integer> tradeIDs);


	LimitOrder get(int tradeID);
}
