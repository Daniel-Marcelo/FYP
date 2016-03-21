package bct.ct413.dao;

import java.util.List;

import bct.ct413.model.Game;

public interface GameDAO {

	// Create
	void create(Game newGame);
	
	//Read
	Game get(int gameID);
	List<Game> getList();
	int getLastInsertedGameID(String email, String gameName);
	
	// Update
	void update(Game game);
	void updateCreatorEmail(String currentEmail, String newEmail);

	// Delete
	void remove(int gameID);
	void remove(String email);
}
