package bct.ct413.model;


import java.sql.Date;
import java.util.Calendar;

/*
 * Not an entity in the database
 */
public class TradeDetails {
	
	/*	
	 * Used in trade table
	 */
	private int tradeID;
	private String userEmail; 
	private String symbol;  
	private Date date;		
	private String buyOrSell;	
	private String tradeType;	
	
	/*
	 * Used in transaction table
	 */
	private int quantity;
	
	/*
	 * Only for market orders
	 */
	private double sharePrice;
	private double costOfTrade;
	
	/*
	 * Only for limit orders
	 */
	private double desiredPrice;
	private int durationDays;
	
	private int gameID;
	
	public String getTradeType() {
		return tradeType;
	}
	public void setTradeType(String tradeType) {
		this.tradeType = tradeType;
	}
	public String getBuyOrSell() {
		return buyOrSell;
	}
	public void setBuyOrSell(String buyOrSell) {
		this.buyOrSell = buyOrSell;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	public double getCostOfTrade() {
		return costOfTrade;
	}
	public void setCostOfTrade(double costOfTrade) {
		this.costOfTrade = costOfTrade;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public double getSharePrice() {
		return sharePrice;
	}
	public void setSharePrice(double sharePrice) {
		this.sharePrice = sharePrice;
	}
	public void calculateCostOfTrade() {
		
		costOfTrade = sharePrice*quantity;
		System.out.println("Total: "+costOfTrade);
		
	}

	public int getTradeID() {
		return tradeID;
	}
	public void setTradeID(int tradeID) {
		this.tradeID = tradeID;
	}
	
	public Trade getTradeObject(String email, int transactionID) {
		Trade trade = new Trade();
		trade.setSymbol(symbol);
		trade.setBuyOrSell(buyOrSell);
		trade.setTradeType(tradeType);
		trade.getTransaction().setTransactionID(transactionID);
		trade.setStatus("Executed");
		trade.setGameID(gameID);

		
		// create a sql date object so we can use it in our INSERT statement
	    Calendar calendar = Calendar.getInstance();
	    java.sql.Date timeOfTrade = new java.sql.Date(calendar.getTime().getTime());
	    
	    
		trade.setDate(timeOfTrade);
		trade.setEmail(email);
		//trade.setTransactionID(transactionID);

		//trade.printDetails();
		return trade;
	}
	public TradeTransaction getTransactionObject() {
		
		TradeTransaction tradeTransaction = new TradeTransaction();
		tradeTransaction.setSharePrice(sharePrice);
		tradeTransaction.setQuantity(quantity);
		tradeTransaction.setTotal(costOfTrade);
		return tradeTransaction;
	}
	public double getDesiredPrice() {
		return desiredPrice;
	}
	public void setDesiredPrice(double desiredPrice) {
		this.desiredPrice = desiredPrice;
	}
	public int getDurationDays() {
		return durationDays;
	}
	public void setDurationDays(int duration) {
		this.durationDays = duration;
	}
	public LimitOrder getLimitOrderObject() {

		LimitOrder lo = new LimitOrder();
		lo.setTradeID(tradeID);
		lo.setDesiredPrice(sharePrice);
		lo.setQuantity(quantity);
		lo.setDurationDays(durationDays);
		
		return lo;
	}
	
	public int getGameID() {
		return gameID;
	}
	public void setGameID(int gameID) {
		this.gameID = gameID;
	}

}
