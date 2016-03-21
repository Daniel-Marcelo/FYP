package bct.ct413.service;

import java.util.List;
import java.util.Map;
import java.util.Set;

import bct.ct413.model.DashboardUserDetails;
import bct.ct413.model.Game;
import bct.ct413.model.UserGameParticipation;

public interface GameService {

	public DashboardUserDetails getDashboardStats(String email, Game g);

	public List<Game> getPublicGames();

	public List<Game> getCreatedGamesByUser(String email);

	Game get(String joinCode);

	List<String> getAllJoinCodes();

	boolean hasUserCreatedGame(String email, int gameID);

	List<Integer> getCreatedGameIDs(String email);

	public void setGame(List<UserGameParticipation> participatingGames);

	public void setActiveGames(List<UserGameParticipation> participatingGames);

}
