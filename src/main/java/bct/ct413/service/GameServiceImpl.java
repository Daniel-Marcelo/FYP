package bct.ct413.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.joda.time.DateTime;
import org.joda.time.Days;
import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.dao.GameDAO;
import bct.ct413.model.DashboardUserDetails;
import bct.ct413.model.Game;
import bct.ct413.model.User;
import bct.ct413.model.UserGameParticipation;

public class GameServiceImpl implements GameService {

	@Autowired
	private GameDAO gameDAO;
	
	@Override
	public DashboardUserDetails getDashboardStats(String email, Game g) {

		Collections.sort(g.getUsersInGame());
		DashboardUserDetails board 	= new DashboardUserDetails();
		String name 				= null;
		double myAccVal 			= 0;
		double highestAccVal		= 0;
		int index 					= 0;

		for (User u : g.getUsersInGame()) {
			
			if (u.getCurAccVal() > highestAccVal) {
				highestAccVal = u.getCurAccVal();
				name = u.getFirstName() + " " + u.getLastName();
			}
			if (u.getEmail().equals(email)) {
				myAccVal = u.getCurAccVal();
				board.setUserPosition(index + 1);
				board.setCurBal(u.getBalance());
			}
			index++;
		}
		board.setTopPlayerName(name);
		board.setUserAccVal(myAccVal);

		DateTime today = new DateTime();
		DateTime end = new DateTime(g.getEndDate());
		int days = Days.daysBetween(today, end).getDays();

		if(days > 0)
			board.setDaysLeft(days);
		else
			board.setDaysLeft(0);
		return board;
	}

	
	@Override
	public List<Game> getPublicGames() {

		List<Game> publicGames = new ArrayList<Game>();
		List<Game> games = gameDAO.getList();
		
		for(Game game : games)
			if(game.getGameType().equals("Public"))
				publicGames.add(game);
		
		return publicGames;
		
	}
	
	@Override
	public List<Game> getCreatedGamesByUser(String email){
		
		List<Game> userGames = new ArrayList<Game>();
		List<Game> games = gameDAO.getList();
		
		for(Game game : games){
			if(game.getCreatorEmail().equals(email))
				userGames.add(game);
		}
		
		return userGames;
	}
	
	@Override
	public Game get(String joinCode){

		Game desiredGame = new Game();
		List<Game> games = gameDAO.getList();
		
		for(Game game : games){
			System.out.println("Game: "+game.getGameID());
			if(game.getJoinCode() != null && game.getJoinCode().equals(joinCode))
				desiredGame = game;
		}
		
		return desiredGame;
	}
	
	@Override
	public List<String> getAllJoinCodes(){
		
		List<String> joinCodes = new ArrayList<String>();
		List<Game> games = gameDAO.getList();
		
		for(Game game : games)
			joinCodes.add(game.getJoinCode());
		
		return joinCodes;
	}
	
	@Override
	public boolean hasUserCreatedGame(String email, int gameID){
		
		Game game = gameDAO.get(gameID);
		
		if(game.getCreatorEmail().equals(email))
			return true;
		else
			return false;
	}
	
	@Override
	public List<Integer> getCreatedGameIDs(String email){
		
		List<Integer> createdGameIDs = new ArrayList<Integer>();
		List<Game> games = gameDAO.getList();
		
		for(Game game : games)
			if(game.getCreatorEmail().equals(email))
				createdGameIDs.add(game.getGameID());
		
		return createdGameIDs;
	}


	@Override
	public void setGame(List<UserGameParticipation> participatingGames) {
		List<Game> games = gameDAO.getList();
		
		for(UserGameParticipation UGP : participatingGames)
			for(Game game: games)
				if(UGP.getGameID() == game.getGameID())
					UGP.setGame(game);
	}


	@Override
	public void setActiveGames(List<UserGameParticipation> participatingGames) {

		List<Game> games = gameDAO.getList();
		Iterator<UserGameParticipation> iterator = participatingGames.iterator();
		
		while(iterator.hasNext()){
			UserGameParticipation UGP = iterator.next();
			for(Game game: games)
				if(UGP.getGameID() == game.getGameID() && game.getStatus().equals("Ended"))
					iterator.remove();
				else if(UGP.getGameID() == game.getGameID() && game.getStatus().equals("Active"))
					UGP.setGame(game);	
		}
	}
	
}

	
	
