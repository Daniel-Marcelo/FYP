package bct.ct413.model;

public class DashboardUserDetails {
	
	private String topPlayerName;
	private double userAccVal, curBal, percentChangeInLastDay;
	private int userPosition, daysLeft;
	private String joinDate;
	public String getTopPlayerName() {
		return topPlayerName;
	}
	public void setTopPlayerName(String topPlayerName) {
		this.topPlayerName = topPlayerName;
	}
	public double getUserAccVal() {
		return userAccVal;
	}
	public void setUserAccVal(double userAccVal) {
		this.userAccVal = userAccVal;
	}
	public double getPercentChangeInLastDay() {
		return percentChangeInLastDay;
	}
	public void setPercentChangeInLastDay(double percentChangeInLastDay) {
		this.percentChangeInLastDay = percentChangeInLastDay;
	}
	public int getUserPosition() {
		return userPosition;
	}
	public void setUserPosition(int userPosition) {
		this.userPosition = userPosition;
	}
	public int getDaysLeft() {
		return daysLeft;
	}
	public void setDaysLeft(int daysLeft) {
		this.daysLeft = daysLeft;
	}
	public String getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(String joinDate) {
		this.joinDate = joinDate;
	}
	public double getCurBal() {
		return curBal;
	}
	public void setCurBal(double curBal) {
		this.curBal = curBal;
	}

}
