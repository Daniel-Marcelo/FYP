package bct.ct413.service;

import java.util.List;
import java.util.Map;
import java.util.Set;

import bct.ct413.model.Game;
import bct.ct413.model.User;
import bct.ct413.model.UserGameParticipation;

public interface UserGameParticipationService {

	void assignBalances(List<UserGameParticipation> participations, List<User> usersInGame);

	Map<Game, Double> getBalances(List<Game> games, String email);

	List<UserGameParticipation> getParticipatingGames(String email);

}
