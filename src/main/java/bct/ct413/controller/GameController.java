package bct.ct413.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;

import bct.ct413.dao.GameDAO;
import bct.ct413.dao.LimitOrderDetailsDAO;
import bct.ct413.dao.StockOwnedDAO;
import bct.ct413.dao.TradeDAO;
import bct.ct413.dao.TradeTransactionDAO;
import bct.ct413.dao.UserDAO;
import bct.ct413.dao.UserGameAccountValHistoryDAO;
import bct.ct413.dao.UserGameParticipationDAO;
import bct.ct413.model.Game;
import bct.ct413.model.User;
import bct.ct413.model.UserGameAccountValHistory;
import bct.ct413.model.UserGameParticipation;
import bct.ct413.service.GameService;
import bct.ct413.service.StockOwnedService;
import bct.ct413.service.TradeService;
import bct.ct413.service.UserGameParticipationService;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.Interval;

@Controller
public class GameController {
	
	@Autowired
	private UserGameAccountValHistoryDAO userGameAccountValHistoryDAO;
	
	@Autowired
	private GameDAO gameDAO;
	
	@Autowired 
	private	GameService gameService;
	
	@Autowired
	private StockOwnedDAO stockOwnedDAO;
	
	@Autowired
	private StockOwnedService stockOwnedService;
	
	@Autowired
	private UserGameParticipationDAO userGameParticipationDAO;
	
	@Autowired
	private UserGameParticipationService userGameParticipationService;
	
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private TradeDAO tradeDAO;
	
	@Autowired
	private TradeService tradeService;
	
	@Autowired
	private TradeTransactionDAO tradeTransactionDAO;
	
	@Autowired
	private LimitOrderDetailsDAO limitOrderDetailsDAO;
	
	@RequestMapping(value = "joining-private-game", method = RequestMethod.POST)
	public ModelAndView joiningGame(@RequestParam("joinCode") String joinCode) {

		String email = getActiveUserEmail();
		Game game = gameService.get(joinCode);
		boolean isAlreadyInGame = userGameParticipationDAO.isInGame(email, game.getGameID());
		
		if(!isAlreadyInGame){
			userGameParticipationDAO.addToGame(game, email);
			userGameAccountValHistoryDAO.insert(game.getGameID(), game.getStartingCash(), email);
		}
		else
			System.out.println("User already in game");
		return new ModelAndView("redirect:/games");

	}
	
	@RequestMapping(value = "games", method = RequestMethod.GET)
	public ModelAndView gamesView() {
		ModelAndView model = new ModelAndView("game/games");
		
		List<UserGameParticipation> participatingGames = 
				userGameParticipationService.getParticipatingGames(getActiveUserEmail());
		gameService.setGame(participatingGames);
		
		
		model.addObject("participatingGames",participatingGames);

		return model;
		
	}
	
	@RequestMapping(value = "leave-game/{gameID}", method = RequestMethod.GET)
	public ModelAndView leavingGameView(@PathVariable int gameID) {
		
		ModelAndView model = new ModelAndView("/game/leave");
		Game game = gameDAO.get(gameID);
		model.addObject("game", game);
		return model;
		
	
	}
	
	@RequestMapping(value = "joining-public-game/{gameID}", method = RequestMethod.GET)
	public ModelAndView joiningPublicGame(@PathVariable int gameID) {
		
		String email =  getActiveUserEmail(); 
		Game game = gameDAO.get(gameID);
		
		if(!userGameParticipationDAO.isInGame(email, gameID)){
			userGameParticipationDAO.addToGame(game, email);
			userGameAccountValHistoryDAO.insert(game.getGameID(), game.getStartingCash(), email);
		}
		
		return new ModelAndView("redirect:/games");
	}
	
	@RequestMapping(value = "game-rankings/{gameID}", method = RequestMethod.GET)
	public ModelAndView gameRankingsView(@PathVariable int gameID) {

		ModelAndView model = new ModelAndView("/game/rankings");
		
		List<UserGameParticipation> participations = userGameParticipationDAO.getList(gameID);
		List<User> usersInGame = userDAO.getList(getEmailList(participations));
		userGameParticipationService.assignBalances(participations, usersInGame);
		stockOwnedService.calculateAccountValue(usersInGame, gameID);
		Game game = gameDAO.get(gameID);
		
		model.addObject("usersInGame", usersInGame);
		model.addObject("gameName",game.getGameName());

		return model;
	}
	
	@RequestMapping(value = "game-rules-edit/{gameID}", method = RequestMethod.GET)
	public ModelAndView editGameRulesView(@PathVariable int gameID) {
		
		Game game = gameDAO.get(gameID);
		System.out.println("Date: "+game.getEndDate());
		
		ModelAndView model;
		if(getActiveUserEmail().equals(game.getCreatorEmail())){
			model = new ModelAndView("/game/edit-rules");
			model.addObject(game);
			model.addObject("privateType", "Private");

		}
		else{
			model = new ModelAndView("/403");
			model.addObject("errorMsg", "You do not have permission to edit the rules for this game, only the creator can do so.");
		}

		return model;
	}
	
	@RequestMapping(value = "game-rules-view/{gameID}", method = RequestMethod.GET)
	public ModelAndView GameRulesView(@PathVariable int gameID) {
		
		Game game = gameDAO.get(gameID);
		ModelAndView model = new ModelAndView("/game/view-rules");
		model.addObject(game);

		return model;
	}
	
	@RequestMapping(value = "join-private-game", method = RequestMethod.GET)
	public ModelAndView joinPrivateGameView() {
		
			List<String> joinCodes = gameService.getAllJoinCodes();
			System.out.println("Size: "+joinCodes.size());
			System.out.println(joinCodes);
			ModelAndView model = new ModelAndView("game/join-private");
			model.addObject("joinCodes", new Gson().toJson(joinCodes));
			return model;
	}
	
	@RequestMapping(value = "create-game", method = RequestMethod.GET)
	public ModelAndView createNewGameView() {
		
			ModelAndView model = new ModelAndView("game/create");
			model.addObject("newGame", new Game());
			return model;
	}
	
	@RequestMapping(value = "join-public-game", method = RequestMethod.GET)
	public ModelAndView joinPublicGameView() {
		
			ModelAndView model = new ModelAndView("game/join-public");
			List<Game> publicGames = gameService.getPublicGames();
			model.addObject("publicGames",publicGames);
			return model;
	}
	
	@RequestMapping(value = "game-dashboard", method = RequestMethod.GET)
	public ModelAndView dashboardView(){

		ModelAndView model = getDashboardModel();
		model.setViewName("game/dashboard");
		return model;
		
	}
	@RequestMapping(value = "temp-dashboard", method = RequestMethod.GET)
	public ModelAndView tempDashboardView(){

		ModelAndView model = getDashboardModel(); /*getDashboardModel();*/
		model.setViewName("game/temp-dashboard");
		return model;
		
	}
	
	@RequestMapping(value = "/creating-game", method = RequestMethod.POST)
	public ModelAndView creatingGame(@ModelAttribute Game newGame) {

		String email = getActiveUserEmail();
		
		if (newGame.getGameType().equals("Private")) 
			newGame.setJoinCode(generateJoinCode());
		
		newGame.setCreatorEmail(email);
		gameDAO.create(newGame);
		int gameID = gameDAO.getLastInsertedGameID(email, newGame.getGameName());
		
		newGame.setGameID(gameID);
		userGameParticipationDAO.addToGame(newGame, newGame.getCreatorEmail());
		userGameAccountValHistoryDAO.insert(gameID, newGame.getStartingCash(), email);

		ModelAndView model = new ModelAndView("redirect:/games");
		return model;
	}
	
	@RequestMapping(value = "editing-game/{gameID}", method = RequestMethod.POST)
	public ModelAndView editingGame(@ModelAttribute Game game, @PathVariable int gameID) {

		boolean isGameNowOpen = gameService.isGameStatusChangedToOpen(game);
		
		game.setGameID(gameID);
		if(isGameNowOpen)
			gameDAO.updateStatus(gameID, "Active");
		if (game.getGameType().equals("Private")) 
			game.setJoinCode(generateJoinCode());
		
		gameDAO.update(game);
		return new ModelAndView("redirect:/games");
	}
	
	@RequestMapping(value = "/leave-game", method = RequestMethod.POST)
	public ModelAndView leavingGame(@RequestParam("gameToLeaveID") String id) {

		int gameID = Integer.parseInt(id);
		String email = getActiveUserEmail();
		
		stockOwnedDAO.remove(gameID, email);
		Map<Integer, Integer> tradeAndTransactionIDs = tradeService.getTradeAndTransactionIDs(gameID, email);
		
		if(tradeAndTransactionIDs.keySet().size() != 0){

			limitOrderDetailsDAO.remove(tradeAndTransactionIDs.keySet());
			tradeDAO.remove(gameID, email);
			tradeTransactionDAO.remove(tradeAndTransactionIDs.values());
		}
		
		userGameAccountValHistoryDAO.remove(gameID, email);
		userGameParticipationDAO.remove(gameID, email);
		
		if(gameService.hasUserCreatedGame(email, gameID)){
			System.out.println("User has created game");
			stockOwnedDAO.remove(gameID);
			
			Map<Integer, Integer> tradeTransactionIDsForGame = tradeService.getTradeAndTransactionIDs(gameID);

			if(tradeTransactionIDsForGame.keySet().size() != 0){
				
				limitOrderDetailsDAO.remove(tradeTransactionIDsForGame.keySet());
				tradeDAO.remove(gameID);
				tradeTransactionDAO.remove(tradeTransactionIDsForGame.values());
			}
			    	
			userGameAccountValHistoryDAO.remove(gameID);
			
	    	userGameParticipationDAO.remove(gameID);
	    	
	    	gameDAO.remove(gameID);
		}
		//Check if user owns game, if so, remove all data from game
		return new ModelAndView("redirect:/games");
	}
	
	public String generateJoinCode() {
		StringBuilder str = new StringBuilder();

		for (int i = 0; i < 16; i++) {
			System.out.println("Generating key code for game");
			Random r = new Random();
			int random = r.nextInt(9);
			System.out.println("Int: " + random);
			str.append(random);
		}
		return str.toString();
	}
	
	public ModelAndView getDashboardModel(){
		
		Set<Integer> gameIDs = new HashSet<Integer>();
		String email = getActiveUserEmail(); 
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		from.add(Calendar.YEAR, -1); 
		
		
		List<UserGameParticipation> participatingGames = 
				userGameParticipationService.getParticipatingGames(email);
		gameService.setGame(participatingGames);
		
		for(UserGameParticipation UGP : participatingGames){
			
			Game game = UGP.getGame();
			List<UserGameParticipation> participations = 
					userGameParticipationDAO.getList(game.getGameID());
			List<User> usersInGame = userDAO.getList(getEmailList(participations));
			game.setUsersInGame(usersInGame);
			
			userGameParticipationService.assignBalances(participations, usersInGame);
			stockOwnedService.calculateAccountValue(usersInGame, game.getGameID());
			game.setBoard(gameService.getDashboardStats(email, game));
			gameIDs.add(game.getGameID());
		}
		
		String[] symbols = {"^DJI", "^GSPC"};
		Map<String, Stock> stocks = YahooFinance.get(symbols, from, to,Interval.DAILY);
		Stock dow = stocks.get("^DJI");
		Stock sAndP = stocks.get("^GSPC");
		
		List<UserGameAccountValHistory> balancesForGames = userGameAccountValHistoryDAO.get(email);

		
		ModelAndView model = new ModelAndView("dashboard");
		model.addObject("participatingGames", participatingGames);
		model.addObject("DOW", new Gson().toJson(dow));
		model.addObject("sAndP", new Gson().toJson(sAndP));
		model.addObject("balanceHistory", new Gson().toJson(balancesForGames));
		model.addObject("gameIDs", new Gson().toJson(gameIDs));
		model.addObject("active", "Active");

		
		return model;
	}
	
	public String getActiveUserEmail() {

		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();
		return auth.getName();
	}
	
	private List<String> getEmailList(List<UserGameParticipation> participations) {

		List<String> emails = new ArrayList<String>();
		for(UserGameParticipation UGP : participations)
			emails.add(UGP.getEmail());
		return emails;
	}

}
