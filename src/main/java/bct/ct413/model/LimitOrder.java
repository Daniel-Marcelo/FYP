package bct.ct413.model;


public class LimitOrder {
	
	private int tradeID;
	private double desiredPrice;
	private int quantity;
	private int durationDays;
	
	
	public int getTradeID() {
		return tradeID;
	}
	public void setTradeID(int tradeID) {
		this.tradeID = tradeID;
	}
	
	public int getDurationDays() {
		return durationDays;
	}
	public void setDurationDays(int durationDays) {
		this.durationDays = durationDays;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getDesiredPrice() {
		return desiredPrice;
	}
	public void setDesiredPrice(double desiredPrice) {
		this.desiredPrice = desiredPrice;
	}

}
