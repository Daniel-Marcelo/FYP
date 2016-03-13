package bct.ct413.service;

import bct.ct413.model.DashboardUserDetails;
import bct.ct413.model.Game;

public interface GameService {

	DashboardUserDetails getDashboardStats(String email, Game g);

}
