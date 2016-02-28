package bct.ct413.dao;

import bct.ct413.model.Game;

public interface GameDAO {

	public int createGame(Game newGame);

	void removeUserFromGame(String id, String activeUserEmail);



}
