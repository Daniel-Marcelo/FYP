package bct.ct413.dao;

import java.util.List;

import bct.ct413.model.Game;

public interface GameDAO {

	public int createGame(Game newGame);

	void removeUserFromGame(int gameID, String activeUserEmail);

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

	public Game getGameName(int gameID);

	public boolean hasUserCreatedGame(String email, int gameID);

	public Game getGameDetails(int gameID);

	public void updateGameDetails(Game game);

	void removeTrades(int gameID, String email);

	void removeUserFromUserGameParticipation(int gameID, String activeUserEmail);

	public void removeFromStockOwned(int gameID, String email);

	void removeUserGameAccountHistory(int gameID, String email);

	public List<Game> getPublicGames();




}
