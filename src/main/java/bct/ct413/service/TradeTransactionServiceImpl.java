package bct.ct413.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.dao.TradeTransactionDAO;
import bct.ct413.model.Trade;
import bct.ct413.model.TradeTransaction;

public class TradeTransactionServiceImpl implements TradeTransactionService {
	
	@Autowired
	public TradeTransactionDAO tradeTransactionDAO; 
	
	@Override
	public double calculateNewAvgPurchPrice(List<Integer> transactionIDs, Trade trade){
		
		//if(transactionIDs.size() != 0){
		
		int quantity = 0;
		double total = 0;
		
		TradeTransaction transaction = new TradeTransaction();
		
		for(int id : transactionIDs){
			System.out.println("Fetching ID: "+id);
			transaction = tradeTransactionDAO.get(id);
			System.out.println("Transaction ID: "+transaction.getTransactionID());
			System.out.println("Quantity: "+transaction.getQuantity());
			System.out.println("Total: "+transaction.getTotal());
			quantity += transaction.getQuantity();
			total += transaction.getTotal();
		}
			double avgPurchPrice = total / (double) quantity;
			
			
			System.out.println("Dividing: "+total+ "//"+quantity);
			
/*			StockOwned so = new StockOwned();
			so.setGameID(trade.getGameID());
			so.setEmail(trade.getEmail());
			so.setQuantity(quantity);
			so.setSymbol(trade.getSymbol());
			so.setAvgPurchPrice(avgPurchPrice);*/
			return avgPurchPrice;
		
	}

}
