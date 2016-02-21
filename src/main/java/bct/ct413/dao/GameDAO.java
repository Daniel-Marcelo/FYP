package bct.ct413.dao;

import bct.ct413.model.Game;

public interface GameDAO {

	void createGame(Game newGame);

	void addUserToGame(String joinCode, String email);

	void removeUserFromGame(String id, String activeUserEmail);


}
