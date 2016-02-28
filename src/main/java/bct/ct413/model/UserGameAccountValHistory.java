package bct.ct413.model;

public class UserGameAccountValHistory {
	
	private int balanceID, gameID;
	private String email, date; 
	private double closingAccVal, percentChange;

	public int getBalanceID() {
		return balanceID;
	}
	public void setBalanceID(int balanceID) {
		this.balanceID = balanceID;
	}
	public int getGameID() {
		return gameID;
	}
	public void setGameID(int gameID) {
		this.gameID = gameID;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public double getClosingAccVal() {
		return closingAccVal;
	}
	public void setClosingAccVal(double closingBal) {
		this.closingAccVal = closingBal;
	}
	public double getPercentChange() {
		return percentChange;
	}
	public void setPercentChange(double percentChange) {
		this.percentChange = percentChange;
	}

}
