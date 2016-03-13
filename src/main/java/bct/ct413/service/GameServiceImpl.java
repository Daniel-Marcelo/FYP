package bct.ct413.service;

import java.util.Collections;

import org.joda.time.DateTime;
import org.joda.time.Days;

import bct.ct413.model.DashboardUserDetails;
import bct.ct413.model.Game;
import bct.ct413.model.User;

public class GameServiceImpl implements GameService {

	@Override
	public DashboardUserDetails getDashboardStats(String email, Game g) {

		int index = 0;
		Collections.sort(g.getUsersInGame());

		DashboardUserDetails board = new DashboardUserDetails();
		String name = null;
		double myAccVal = 0;
		double highestAccVal = 0;
		for (User u : g.getUsersInGame()) {
			System.out.println("Comparing: "+u.getCurAccVal() +" " + highestAccVal);
			if (u.getCurAccVal() > highestAccVal) {
				highestAccVal = u.getCurAccVal();
				name = u.getFirstName() + " " + u.getLastName();
				System.out.println("Top player: "+name);
			}
			if (u.getEmail().equals(email)) {
				System.out.println(email + " was found at index: " + index);
				myAccVal = u.getCurAccVal();
				board.setUserPosition(index + 1);
				board.setCurBal(u.getBalance());

			}
			index++;

		}
		board.setTopPlayerName(name);
		board.setUserAccVal(myAccVal);

		DateTime today = new DateTime();

		System.out.println("GAME:" + g.getGameName() + " Today Date: " + today);
		DateTime end = new DateTime(g.getEndDate());

		System.out.println("GAME:" + g.getGameName() + " End Date: " + end);
		int days = Days.daysBetween(today, end).getDays();

		board.setDaysLeft(days);

		return board;
	}
}
