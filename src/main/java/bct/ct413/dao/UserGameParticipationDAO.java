package bct.ct413.dao;

import java.util.List;

import bct.ct413.model.Game;
import bct.ct413.model.UserGameParticipation;

public interface UserGameParticipationDAO {

	List<UserGameParticipation> getList(int gameID);

	boolean isInGame(String email, int gameID);

	void addToGame(Game game, String email);

	void update(String currentEmail, String newEmail);

}
