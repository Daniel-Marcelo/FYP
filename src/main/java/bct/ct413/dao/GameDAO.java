package bct.ct413.dao;

import java.util.List;

import bct.ct413.model.Game;

public interface GameDAO {

	public int createGame(Game newGame);

	void removeUserFromGame(String id, String activeUserEmail);

	public void removeGameFromStockOwned(int gameID);

	public void removeGameTrades(int gameID);

	public void removeFromGameAccountHistory(int gameID);

	public void removeFromUserGameParticipation(int gameID);

	public void removeFromGameTable(int gameID);

	public void removeGameFromStockOwned(String email);

	public void removeFromStocksOnWatch(String email);

	public void removeFromGameAccountHistory(String email);

	public void removeFromUserGameParticipation(String email);

	public List<String> getAllJoinCodes();




}
