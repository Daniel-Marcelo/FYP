package bct.ct413.service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.dao.UserGameParticipationDAO;
import bct.ct413.model.Game;
import bct.ct413.model.User;
import bct.ct413.model.UserGameParticipation;

public class UserGameParticipationServiceImpl implements UserGameParticipationService {
	
	@Autowired
	private UserGameParticipationDAO userGameParticipationDAO;
	
	@Override
	public void assignBalances(List<UserGameParticipation> participations, List<User> usersInGame) {

			for(UserGameParticipation UGP : participations)
				for(User u :usersInGame)
					if(u.getEmail().equals(UGP.getEmail())){
						u.setBalance(UGP.getBalance());
						break;
					}
	}

	@Override
	public Map<Game, Double> getBalances(List<Game> games, String email) {

		List<UserGameParticipation> UGPs = userGameParticipationDAO.get(email);
		Map<Game, Double> gameBalanceMap = new HashMap<Game, Double>();
		
		for(Game game : games){
			System.out.println("Current Game: "+game.getGameID()+" - "+game.getGameName());
			for(UserGameParticipation UGP : UGPs){
				System.out.println("Current Participation: "+UGP.getGameID()+ " - balance: "+UGP.getBalance());
				if(game.getGameID() == UGP.getGameID())
					gameBalanceMap.put(game, UGP.getBalance());
			}
		}
		
		return gameBalanceMap;
	}


	@Override
	public List<UserGameParticipation> getParticipatingGames(String email) {

		List<UserGameParticipation> gamesParticipations = userGameParticipationDAO.getList();
		List<UserGameParticipation> relevantGames = new LinkedList<UserGameParticipation>();
		
		for(UserGameParticipation UGP : gamesParticipations){
			if(UGP.getEmail().equals(email))
				relevantGames.add(UGP);
				
		}
		return relevantGames;
	}

}
