package bct.ct413.service;

import java.util.List;

import bct.ct413.model.User;
import bct.ct413.model.UserGameParticipation;

public interface UserGameParticipationService {

	void assignBalances(List<UserGameParticipation> participations, List<User> usersInGame);

}
