package bct.ct413.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.dao.TradeDAO;
import bct.ct413.model.Trade;

public class TradeServiceImpl implements TradeService {

	@Autowired
	TradeDAO tradeDAO;
	
	@Override
	public List<Trade> getActiveLimitOrdersForUser(String email){
		
		List<Trade> limitOrders = new ArrayList<Trade>();
		List<Trade> trades = tradeDAO.getList();
		
		for(Trade t : trades)
			if(t.getEmail().equals(email) && t.getTradeType().equals("Limit") && t.getStatus().equals("Ongoing"))
				limitOrders.add(t);
		
		return limitOrders;
				
	}
	
	@Override
	public Map<Integer, Integer> getTradeAndTransactionIDs(int gameID){
		
		Map<Integer, Integer> idsMap = new HashMap<Integer, Integer>();
		List<Trade> trades = tradeDAO.getList();
		
		for(Trade t : trades)
			if(t.getGameID() == gameID)
				idsMap.put(t.getTradeID(), t.getTransaction().getTransactionID());
		
		return idsMap;
		
		
	}

	@Override
	public Map<Integer, Integer> getTradeAndTransactionIDs(int gameID,String email) {


		Map<Integer, Integer> idsMap = new HashMap<Integer, Integer>();
		List<Trade> trades = tradeDAO.getList();
		
		for(Trade t : trades)
			if(t.getGameID() == gameID && t.getEmail().equals(email))
				idsMap.put(t.getTradeID(), t.getTransaction().getTransactionID());
		
		return idsMap;
	}

	@Override
	public Map<Integer, Integer> getTradeAndTransactionIDsForUser(String email) {

		Map<Integer, Integer> idsMap = new HashMap<Integer, Integer>();
		List<Trade> trades = tradeDAO.getList();
		
		for(Trade t : trades)
			if(t.getEmail().equals(email))
				idsMap.put(t.getTradeID(), t.getTransaction().getTransactionID());
		
		return idsMap;
	}
	
	@Override
	public List<Integer> getPurchaseOrderTransactionIDs(String email, String symbol,int gameID) {
		
		List<Integer> ids = new ArrayList<Integer>();
		List<Trade> trades = tradeDAO.getList();
		
		for(Trade t : trades){
			t.printDetails();
			System.out.println();
			if(t.getEmail().equals(email) && t.getSymbol().equals(symbol) && t.getGameID() == gameID && t.getBuyOrSell().equals("Buy"))
				ids.add(t.getTransaction().getTransactionID());
		}
		
		
		return ids;
				
	}
	
}
