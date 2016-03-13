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

	public void insert(User user);
	public int isEmailAlreadyInUse(String email);
	public User getUser(String email);
	public void updateDetails(User existingUser);
	public void update(String emailAddress, String newPass);
	public double getBalance(String email, int gameID);
	public void updateBalance(String email, double total, int gameID);
	public void updateStocksOwned(Trade trade, int quantity);
	public void addToDefaultGame(User newUser);
	public List<UserGameParticipation> getRelevantGames(String email);
	public List<Game> getGamesForUser(String email);
	public List<User> getGlobalRankings();
	public void addToAccValHistory(int gameID, double startingCash,String activeUserEmail);
	List<User> get();
	public void removeFromUserRoles(String email);
	public List<Game> getGamesAdmin();
	public List<UserGameAccountValHistory> getAllBalanceHistory();
	public List<Integer> getGameIDsCreatedByUser(String email);
	public void removeFromUserTable(String email);
	public void removeFromPersistentLogin(String email);
	public List<User> getList(List<String> emails);
	public void delete(String currentEmail);

}
