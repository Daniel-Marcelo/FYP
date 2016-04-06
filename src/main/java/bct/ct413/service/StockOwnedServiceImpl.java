package bct.ct413.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import bct.ct413.dao.StockOwnedDAO;
import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;
import bct.ct413.model.User;

public class StockOwnedServiceImpl implements StockOwnedService {

	@Autowired
	private StockOwnedDAO stockOwnedDAO;

	@Override
	public int getQuantity(String email, String symbol, int gameID){
		
		List<StockOwned> stocks = stockOwnedDAO.getList();
		
		for(StockOwned so: stocks)
			if(so.getEmail().equals(email) && so.getSymbol().equals(symbol) && so.getGameID() == gameID)
				return so.getQuantity();
		
		return -1;
	}
	
	@Override
	public List<StockOwned> getList(String email){
		List<StockOwned> stocks = stockOwnedDAO.getList();
		List<StockOwned> userStocks = new ArrayList<StockOwned>();
		
		for(StockOwned stock: stocks)
			if(stock.getEmail().equals(email))
				userStocks.add(stock);
		
		return userStocks;
	}
	
	@Override
	public List<StockOwned> getList(int gameID, String email){
		List<StockOwned> stocks = stockOwnedDAO.getList();
		List<StockOwned> userStocks = new ArrayList<StockOwned>();
		
		for(StockOwned stock: stocks)
			if(stock.getEmail().equals(email) && stock.getGameID() == gameID)
				userStocks.add(stock);
		
		return userStocks;
	}
	
	@Override
	public List<StockOwned> stockOwnedPortfolioInfo(String email) {

		List<StockOwned> stocksOwned = getList(email);
		String[] symbols = getSymbols(stocksOwned);
		
		if(symbols.length != 0){
		Map<String, Stock> stocks = YahooFinance.get(symbols);
		
			for(StockOwned stockOwned : stocksOwned){
				Stock stock = stocks.get(stockOwned.getSymbol());
				
				stockOwned.setCurrentPrice(stock.getQuote().getPrice().doubleValue());
				stockOwned.setTotal(stockOwned.getCurrentPrice()* (double) stockOwned.getQuantity());
				stockOwned.setGainOrLoss(stockOwned.getTotal() - (stockOwned.getAvgPurchPrice() * (double) stockOwned.getQuantity()));
				stockOwned.setCompanyName(stock.getName());
			}
			return stocksOwned;
		}
		else
			return stocksOwned;
	}
	
	@Override
	public void calculateAccountValue(List<User> usersInGame, int gameID) {
		
		for(User user : usersInGame){
			List<StockOwned> stocksOwned = getList(gameID, user.getEmail());
			String[] symbols = getSymbols(stocksOwned);
			System.out.println("Stocks Owned for user: "+user.getEmail()+" in game "+gameID+ " number = "+symbols.length);

			if(symbols.length != 0){
				Map<String, Stock> stocks = YahooFinance.get(symbols);
				
				for(StockOwned stockOwned : stocksOwned){
				
					Stock stock = stocks.get(stockOwned.getSymbol());
			
					stockOwned.setCurrentPrice(stock.getQuote().getPrice().doubleValue());
					stockOwned.setTotal(stockOwned.getCurrentPrice()* (double) stockOwned.getQuantity());
				//	stockOwned.setGainOrLoss(stockOwned.getTotal() - (stockOwned.getAvgPurchPrice() * (double) stockOwned.getQuantity()));
				//	stockOwned.setCompanyName(stock.getName());
				}
						
				double valueOfOwnedStocks = 0;
		
				for (StockOwned s : stocksOwned){
					valueOfOwnedStocks += s.getTotal();
				}
		
				user.setCurAccVal(valueOfOwnedStocks + user.getBalance());
			}else
				user.setCurAccVal(user.getBalance());
				
		}
	}

	public String[] getSymbols(List<StockOwned> stocksOwned) {

		String[] symbols = new String[stocksOwned.size()];
		
		for(int i = 0 ; i < stocksOwned.size(); i++)
			symbols[i] = stocksOwned.get(i).getSymbol();
		
		return symbols;
	}

	@Override
	public void updateQuantity(Trade trade, StockOwned so){
		
		int oldQuantity = getQuantity(trade.getEmail(), trade.getSymbol(), trade.getGameID());
		System.out.println("Old quantity: "+oldQuantity);
		
		if (oldQuantity == 0) 
			stockOwnedDAO.insert(so);
		else{
			so.setQuantity(so.getQuantity());
			stockOwnedDAO.update(so);
		}
			
		
		
		
		
	}
}
