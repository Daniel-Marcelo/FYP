package bct.ct413.dao;


import java.util.List;

import yahoofinance.Stock;
import bct.ct413.model.DashboardUserDetails;
import bct.ct413.model.Game;
import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;
import bct.ct413.model.User;
import bct.ct413.model.UserGameAccountValHistory;
import bct.ct413.model.UserGameParticipation;


public interface UserDAO {

	public void saveNewUser(User user);
	public int isEmailAlreadyInUse(String email);
	public User getUserDetails(String email);
	public void updateDetails(User existingUser);
	public void updateUserPassword(String emailAddress, String newPass);
	public double getBalance(String email, int gameID);
	public void updateBalance(String email, double total, int gameID);
	public void updateStocksOwned(Trade trade, int quantity);
	public void addToDefaultGame(User newUser);
	public List<UserGameParticipation> getRelevantGames(String email);
	public List<Game> getGamesForUser(String email);
	public List<User> getGlobalRankings();
	public List<StockOwned> getStocksOwned(String activeUserEmail);
	public List<Integer> getGameIDsForUser(String activeUserEmail);
	public void addToAccValHistory(int gameID, double startingCash,
			String activeUserEmail);
	void addUserToGame(String joinCode, String email);
	public List<UserGameAccountValHistory> getAllBalanceHistory(
			String activeUserEmail);
/*	List<String> getUsers();
*/	public DashboardUserDetails getDashboardStats(String activeUserEmail,
			Game g);
	List<User> getAllUsers();
	public void removeFromUserRoles(String email);
	public String addToWatchList(String activeUserEmail, String symbol);
	public List<Stock> getStocksOnWatch(String activeUserEmail);
	public String removeFromWatchList(String symbol, String activeUserEmail);
	public List<Game> getGamesAdmin();
	public List<UserGameAccountValHistory> getAllBalanceHistory();
	public List<Integer> getGameIDsCreatedByUser(String email);
	public void removeFromUserTable(String email);
	public void removeFromPersistentLogin(String email);
	public void updateUserEmail(String currentEmail, String newEmail);

}
