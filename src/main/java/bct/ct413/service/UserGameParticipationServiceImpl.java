package bct.ct413.service;

import java.util.List;

import bct.ct413.model.User;
import bct.ct413.model.UserGameParticipation;

public class UserGameParticipationServiceImpl implements UserGameParticipationService {
	
	@Override
	public void assignBalances(List<UserGameParticipation> participations, List<User> usersInGame) {

			for(UserGameParticipation UGP : participations)
				for(User u :usersInGame)
					if(u.getEmail().equals(UGP.getEmail())){
						u.setBalance(UGP.getBalance());
						break;
					}
	}

}
