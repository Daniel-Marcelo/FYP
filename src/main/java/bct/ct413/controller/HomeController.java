package bct.ct413.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.Interval;
import bct.ct413.dao.GameDAO;
import bct.ct413.dao.LimitOrderDetailsDAO;
import bct.ct413.dao.PersistentLoginsDAO;
import bct.ct413.dao.StockOnWatchDAO;
import bct.ct413.dao.StockOwnedDAO;
import bct.ct413.dao.TradeDAO;
import bct.ct413.dao.TradeTransactionDAO;
import bct.ct413.dao.UserDAO;
import bct.ct413.dao.UserGameAccountValHistoryDAO;
import bct.ct413.dao.UserGameParticipationDAO;
import bct.ct413.dao.UserRolesDAO;
import bct.ct413.model.Game;
import bct.ct413.model.LimitOrder;
import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;
import bct.ct413.model.TradeDetails;
import bct.ct413.model.TradeTransaction;
import bct.ct413.model.User;
import bct.ct413.model.UserGameAccountValHistory;
import bct.ct413.model.UserGameParticipation;
import bct.ct413.service.GameService;
import bct.ct413.service.StockOwnedService;
import bct.ct413.service.TradeService;
import bct.ct413.service.TradeTransactionService;
import bct.ct413.service.UserGameParticipationService;

import com.google.gson.Gson;

@Controller
public class HomeController {

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private TradeDAO tradeDAO;

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private GameDAO gameDAO;

	@Autowired
	private StockOwnedDAO stockOwnedDAO;

	@Autowired
	private StockOwnedService stockOwnedService;

	@Autowired
	private TradeTransactionDAO tradeTransactionDAO;

	@Autowired
	private StockOnWatchDAO stockOnWatchDAO;

	@Autowired
	private UserGameParticipationDAO userGameParticipationDAO;
	
	@Autowired
	private UserGameParticipationService userGameParticipationService;
	
	@Autowired
	private UserGameAccountValHistoryDAO userGameAccountValHistoryDAO;
	
	@Autowired 
	private	GameService gameService;
	
	@Autowired
	private UserRolesDAO userRolesDAO;
	
	@Autowired
	private PersistentLoginsDAO persistentLoginsDAO;
	
	@Autowired
	private LimitOrderDetailsDAO limitOrderDetailsDAO;
	
	@Autowired
	private TradeTransactionService tradeTransactionService;
	
	@Autowired
	private TradeService tradeService;
	
	
	
	
	
	
	
	
	@RequestMapping(value = "watchlist", method = RequestMethod.GET)
	public ModelAndView watchListView() {
		
		System.out.println("JVAVA "  +System.getProperty("java.runtime.version"));
		ModelAndView model = new ModelAndView("watchlist");
		List<Stock> stocksOnWatch = stockOnWatchDAO.getList(getActiveUserEmail());
		model.addObject("stocks", stocksOnWatch);
		return model;
	}
	
	@RequestMapping(value = "watchStock/{value}", method = RequestMethod.GET)
	public @ResponseBody String addingStockToWatchList(@PathVariable String value){

		String message = stockOnWatchDAO.insert(getActiveUserEmail(), value);
		return message;
		
	}
	
	@RequestMapping(value = "deleteStock/{value}", method = RequestMethod.GET)
	public @ResponseBody String removeFromWatchList(@PathVariable String value){

		String message = stockOnWatchDAO.remove(value, getActiveUserEmail());
		return message;
		
	}
	
/*	@RequestMapping(value = "portfolio", method = RequestMethod.GET)
	public ModelAndView portfolio() {

		ModelAndView model = new ModelAndView("portfolio");

		List<StockOwned> stocksForUserForGames = userDAO
				.getStocksOwned(getActiveUserEmail());
		List<Integer> gameIDs = userDAO.getGameIDsForUser(getActiveUserEmail());
		List<Game> gamesForUser = userDAO.getGamesForUser(getActiveUserEmail());
		List<Trade> myTransactions = tradeDAO
				.getPortfolioTransactionDetails(getActiveUserEmail());
				

		System.out.println("Number of games: " + gameIDs);

		model.addObject("stocksForUser",new Gson().toJson(stocksForUserForGames));
		model.addObject("gamesForUser", gamesForUser);
		model.addObject("gameIDsJSON", new Gson().toJson(gameIDs));
		model.addObject("myTransactions", new Gson().toJson(myTransactions));

		return model;

	}*/

	@RequestMapping(value = "portfolioz", method = RequestMethod.GET)
	public ModelAndView portfolioView() {

		ModelAndView model = new ModelAndView("portfolioz");
		String email = getActiveUserEmail();
		
		List<UserGameParticipation> participatingGames = userGameParticipationService.getParticipatingGames(email);
		gameService.setGame(participatingGames);
		List<StockOwned> stocksForUserForGames = stockOwnedService.stockOwnedPortfolioInfo(email);
		//List<Game> gamesForUser = gameService.getCreatedGamesByUser(email);
		List<Trade> myTransactions = tradeDAO.getPortfolioTradeDetails(email);

		model.addObject("participatingGames", participatingGames);
		model.addObject("stocksForUser", new Gson().toJson(stocksForUserForGames));
		model.addObject("myTransactions", new Gson().toJson(myTransactions));

		return model;
	}

	@RequestMapping(value = "joinGame", method = RequestMethod.POST)
	public ModelAndView joiningGame(@RequestParam("joinCode") String joinCode) {

		String email = getActiveUserEmail();
		Game game = gameService.get(joinCode);
		boolean isAlreadyInGame = userGameParticipationDAO.isInGame(email, game.getGameID());
		
		if(!isAlreadyInGame){
			userGameParticipationDAO.addToGame(game, email);
			userGameAccountValHistoryDAO.insert(game.getGameID(), game.getStartingCash(), email);
			System.out.println("Adding user to game: "+email);

		}
		else
			System.out.println("User already in game");
		return new ModelAndView("redirect:/trade");

	}

/*	@RequestMapping(value = "globalRankings", method = RequestMethod.GET)
	public ModelAndView rankings() {
		return new ModelAndView("globalRankings").addObject("allUsers",
				userDAO.getGlobalRankings());
	}*/

	// for 403 access denied page
	@RequestMapping(value = "/403", method = RequestMethod.GET)
	public ModelAndView accesssDenied() {

		ModelAndView model = new ModelAndView();

		// check if user is login
		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();
		if (!(auth instanceof AnonymousAuthenticationToken)) {
			UserDetails userDetail = (UserDetails) auth.getPrincipal();
			model.addObject("username", userDetail.getUsername());
		}

		model.setViewName("403");
		return model;

	}

	@RequestMapping(value = { "/home", "/" }, method = RequestMethod.GET)
	public ModelAndView homeView(ModelAndView model) throws IOException {

		User user = userDAO.get(getActiveUserEmail());

		//List<Game> games = userDAO.getGamesForUser(user.getEmail());
		//List<UserGameParticipation> headerGames = userDAO.getRelevantGames(getActiveUserEmail());
		//List<String> joinCodes = gameDAO.getAllJoinCodes();

		model.setViewName("home");
		model.addObject("existingReg", user);
		//model.addObject("newGame", new Game());

	//	model.addObject("myGames", games);
	//	model.addObject("dataTableGamesJSON", new Gson().toJson(games));
	//	model.addObject("gameNamesForUser", headerGames);
	//	model.addObject("gameBalanceHeaderJSON", new Gson().toJson(headerGames));
	//	model.addObject("joinCodes", new Gson().toJson(joinCodes));

		return model;
	}

	@RequestMapping(value = "games", method = RequestMethod.GET)
	public ModelAndView gamesView() {
		ModelAndView model = new ModelAndView("games");
		
		String email = getActiveUserEmail();
		List<UserGameParticipation> participatingGames = userGameParticipationService.getParticipatingGames(email);
		gameService.setGame(participatingGames);
	//	List<Game> games = gameService.getCreatedGamesByUser(email);
		
	//	System.out.println("Games For User: "+getActiveUserEmail()+" : "+games.size());
		model.addObject("participatingGames",participatingGames);

		return model;
		
	}
	
	@RequestMapping(value = "leaveGame/{gameID}", method = RequestMethod.GET)
	public ModelAndView leavingGameView(@PathVariable int gameID) {
		
		ModelAndView model = new ModelAndView("/leaveConfirmation");
		Game game = gameDAO.get(gameID);
		model.addObject("game", game);
		return model;
		
	
	}
	
	@RequestMapping(value = "joinPublicGame/{gameID}", method = RequestMethod.GET)
	public ModelAndView joiningPublicGame(@PathVariable int gameID) {
		
		String email =  getActiveUserEmail(); 
		Game game = gameDAO.get(gameID);
		
		if(!userGameParticipationDAO.isInGame(email, gameID)){
			userGameParticipationDAO.addToGame(game, email);
			userGameAccountValHistoryDAO.insert(game.getGameID(), game.getStartingCash(), email);
		}
		
		return new ModelAndView("redirect:/games");
	}
	
	@RequestMapping(value = "rankings/{gameID}", method = RequestMethod.GET)
	public ModelAndView gameRankingsView(@PathVariable int gameID) {

		ModelAndView model = new ModelAndView("/gameRankings");
		
		List<UserGameParticipation> participations = userGameParticipationDAO.getList(gameID);
		System.out.println("Number of participations: "+participations.size());
		List<User> usersInGame = userDAO.getList(getEmailList(participations));
		System.out.println("Number of users in this game: "+usersInGame.size());
		userGameParticipationService.assignBalances(participations, usersInGame);
		stockOwnedService.calculateAccountValue(usersInGame, gameID);
		Game game = gameDAO.get(gameID);
		
		model.addObject("usersInGame", usersInGame);
		model.addObject("gameName",game.getGameName());

		return model;
	}
	
	private List<String> getEmailList(List<UserGameParticipation> participations) {

		List<String> emails = new ArrayList<String>();
		for(UserGameParticipation UGP : participations)
			emails.add(UGP.getEmail());
		return emails;
	}

	@RequestMapping(value = "editGameRules/{gameID}", method = RequestMethod.GET)
	public ModelAndView editGameRulesView(@PathVariable int gameID) {
		
		Game game = gameDAO.get(gameID);
		ModelAndView model;
		if(getActiveUserEmail().equals(game.getCreatorEmail())){
			model = new ModelAndView("/editGameRules");
			model.addObject(game);

		}
		else{
			model = new ModelAndView("/403");
			model.addObject("errorMsg", "You do not have permission to edit the rules for this game, only the creator can do so.");
		}

		return model;
	}
	
	@RequestMapping(value = "viewGameRules/{gameID}", method = RequestMethod.GET)
	public ModelAndView GameRulesView(@PathVariable int gameID) {
		
		Game game = gameDAO.get(gameID);
		ModelAndView model = new ModelAndView("/viewGameRules");
		model.addObject(game);

		return model;
	}
	
	@RequestMapping(value = "joinPrivateGame", method = RequestMethod.GET)
	public ModelAndView joinPrivateGameView() {
		
			List<String> joinCodes = gameService.getAllJoinCodes();
			ModelAndView model = new ModelAndView("joinPrivateGame");
			model.addObject("joinCodes", joinCodes);
			return model;
	}
	
	@RequestMapping(value = "createNewGame", method = RequestMethod.GET)
	public ModelAndView createNewGameView() {
		
			ModelAndView model = new ModelAndView("createNewGame");
			model.addObject("newGame", new Game());
			return model;
	}
	
	@RequestMapping(value = "joinPublicGame", method = RequestMethod.GET)
	public ModelAndView joinPublicGameView() {
		
			ModelAndView model = new ModelAndView("joinPublicGame");
			List<Game> publicGames = gameService.getPublicGames();
			model.addObject("publicGames",publicGames);
			return model;
	}
	
	@RequestMapping(value = "dashboard", method = RequestMethod.GET)
	public ModelAndView dashboardView(){

		ModelAndView model = getDashboardModel();
		model.setViewName("dashboard");
		return model;
		
	}
	
	@RequestMapping(value = "editUserEmailAdmin", method = RequestMethod.GET)
	public ModelAndView editUserEmailAdminView(){

		ModelAndView model = new ModelAndView("editUserEmail");
		model.addObject("allUsers", userDAO.get());
		
		return model;
	}
	
	@RequestMapping(value = "editEmailForm/{email:.+}", method = RequestMethod.GET)
	public ModelAndView editUserEmailFormView(@PathVariable String email){

		ModelAndView model = new ModelAndView("editEmailForm");
		model.addObject("currentEmail", email);
		
		return model;
		
	}
	
	@RequestMapping(value = "/updateEmailDB", method = RequestMethod.GET)
	public ModelAndView updatingEmail(@RequestParam("currentEmail") String currentEmail, @RequestParam("newEmail") String newEmail) {

		User user = userDAO.get(currentEmail);
		user.setEmail(newEmail);
		userDAO.insert(user);
		gameDAO.updateCreatorEmail(currentEmail, newEmail);
		stockOwnedDAO.updateEmail(currentEmail, newEmail);
		stockOnWatchDAO.update(currentEmail, newEmail);
		tradeDAO.update(currentEmail, newEmail);
		userGameAccountValHistoryDAO.update(currentEmail, newEmail);
		userGameParticipationDAO.update(currentEmail, newEmail);
		userRolesDAO.update(currentEmail, newEmail);
		persistentLoginsDAO.delete(currentEmail);
		userDAO.delete(currentEmail);
		
		ModelAndView model = new ModelAndView("symbolInfo");

		return model;
	}
	
	@RequestMapping(value = "removeGame", method = RequestMethod.GET)
	public ModelAndView removeGameAdmin(){

		ModelAndView model = getDashboardModel();
		model.setViewName("removegame");

		return model;
	}
	
	public ModelAndView getDashboardModel(){
		Set<Integer> gameIDs = new HashSet<Integer>();
		String email = getActiveUserEmail(); 
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy MMM dd HH:mm:ss");		
		from.add(Calendar.YEAR, -1); 
		System.out.println("FROM: "+sdf.format(from.getTime()));
		System.out.println("TO: "+sdf.format(to.getTime()));
		
		//List<Game> games = userDAO.getGamesForUser(getActiveUserEmail());
		
		//This needs redoing
		List<UserGameParticipation> participatingGames = userGameParticipationService.getParticipatingGames(email);
		gameService.setGame(participatingGames);
		//List<Game> games = gameService.getCreatedGamesByUser(getActiveUserEmail());
		for(UserGameParticipation UGP : participatingGames){
			Game game = UGP.getGame();
			List<UserGameParticipation> participations = userGameParticipationDAO.getList(game.getGameID());
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
		//getGameIDs(games);

		
		ModelAndView model = new ModelAndView("dashboard");
		model.addObject("participatingGames", participatingGames);
		model.addObject("DOW", new Gson().toJson(dow));
		model.addObject("sAndP", new Gson().toJson(sAndP));
		model.addObject("balanceHistory", new Gson().toJson(balancesForGames));
		model.addObject("gameIDs", new Gson().toJson(gameIDs));

		return model;
	}
	   
	@RequestMapping(value = "/deleteGame", method = RequestMethod.POST)
	public ModelAndView deletingGame(@RequestParam("gameID") int gameID){

		Map<Integer, Integer> tradeTransactionIDs = tradeService.getTradeAndTransactionIDs(gameID);

		if(tradeTransactionIDs.keySet().size() != 0){
			stockOwnedDAO.remove(gameID);
			limitOrderDetailsDAO.remove(tradeTransactionIDs.keySet());
			tradeDAO.remove(gameID);
			tradeTransactionDAO.remove(tradeTransactionIDs.values());
		}
		
		userGameAccountValHistoryDAO.remove(gameID);
		userGameParticipationDAO.remove(gameID);
    	gameDAO.remove(gameID);
		ModelAndView model = new ModelAndView("redirect:/removeGame");
		return model;

    }

	private Set<Integer> getGameIDs(List<Game> games) {
		 Set<Integer> gameIDs = new HashSet<Integer>();
		 
		 for(Game g: games)
			 gameIDs.add(g.getGameID());
		 
		return gameIDs;
	}

	@RequestMapping(value = "/updateUserDetails", method = RequestMethod.POST)
	public ModelAndView updatingUserDetails(@ModelAttribute User existingUser, HttpServletRequest request) {

		System.out.println("Updating user details");
		String currentEmail = getActiveUserEmail();
		System.out.println("Old: "+currentEmail+" - new: "+existingUser.getEmail());
		String newEmail = existingUser.getEmail();
		
		if(!currentEmail.equals(existingUser.getEmail())){

			System.out.println("Updating email in DB");
			User user = userDAO.get(currentEmail);
			user.setEmail(newEmail);
			userDAO.insert(user);
			gameDAO.updateCreatorEmail(currentEmail, newEmail);
			stockOwnedDAO.updateEmail(currentEmail, newEmail);
			stockOnWatchDAO.update(currentEmail, newEmail);
			tradeDAO.update(currentEmail, newEmail);
			userGameAccountValHistoryDAO.update(currentEmail, newEmail);
			userGameParticipationDAO.update(currentEmail, newEmail);
			userRolesDAO.update(currentEmail, newEmail);
			persistentLoginsDAO.delete(currentEmail);
			userDAO.delete(currentEmail);
			
		}
		
		//userDAO.update(existingUser);
		
		currentEmail = getActiveUserEmail();
		System.out.println("AFTER - Old: "+currentEmail+" - new: "+existingUser.getEmail());
		newEmail = existingUser.getEmail();
		
		new SecurityContextLogoutHandler().logout(request, null, null);
		return new ModelAndView("redirect:/home");

	}

	@RequestMapping(value = "/trade", method = RequestMethod.GET)
	public ModelAndView tradeView() {


		String email = getActiveUserEmail();
		
		List<UserGameParticipation> participatingGames = userGameParticipationService.getParticipatingGames(email);
		gameService.setActiveGames(participatingGames);
			//List<Game> gamesForUser = gameService.getActiveGames(email);
			List<UserGameParticipation> gameParticipations = userGameParticipationDAO.get(email);
			List<StockOwned> stocksOwned = stockOwnedService.getList(email);
			ModelAndView model = new ModelAndView("trade");
			model.addObject("trade", new TradeDetails());
			model.addObject("participatingGames", participatingGames);
			model.addObject("jsonMap", new Gson().toJson(stocksOwned));
			model.addObject("gameParticipationsJSON", new Gson().toJson(gameParticipations));

		return model;
	}

	@RequestMapping(value = "updatedBalance/{gameID}", method = RequestMethod.GET)
	public @ResponseBody String ajaxFetchBalance(@PathVariable int gameID) {
		
		System.out.println("Ajax call ");
		String email = getActiveUserEmail();

		if (!email.equals("anonymousUser")) 
			return new Gson().toJson(userDAO.getBalance(email, gameID));
		 else 
			return "0";
	}

	@RequestMapping(value = "executeTrade", method = RequestMethod.POST)
	public ModelAndView executingTrade(@ModelAttribute TradeDetails tradeDetails) {

		String email = getActiveUserEmail();
		tradeDetails.setSymbol(tradeDetails.getSymbol().toUpperCase());

		if (tradeDetails.getTradeType().equals("Limit")) {

			Trade trade = tradeDetails.getTradeObject(email, 0);
			tradeDAO.insert(trade);
			int tradeID = tradeDAO.getLastTradeID(email, trade.getGameID());

			LimitOrder limitOrder = tradeDetails.getLimitOrderObject();
			limitOrder.setTradeID(tradeID);

			limitOrderDetailsDAO.insert(limitOrder);
		}

		if (tradeDetails.getTradeType().equals("Market")) {

			System.out.println("Inserting market order into database");
			TradeTransaction tradeTransaction = tradeDetails.getTransactionObject();
			tradeTransactionDAO.insert(tradeTransaction);
			System.out.println("Transaction inserted");
			int transactionID = tradeTransactionDAO.getLastTransactionID();
			
			System.out.println("Transaction ID FETHED: "+transactionID);

			Trade trade = tradeDetails.getTradeObject(email,transactionID);
			tradeDAO.insert(trade);
			System.out.println("Trade inserted");

			if (trade.getBuyOrSell().equals("Sell")) {

				tradeTransaction.setTotal(-(tradeTransaction.getTotal()));
				tradeTransaction.setQuantity(-(tradeTransaction.getQuantity()));
			}
			
			List<Integer> transactionIDs = tradeService.getTransactionIDs(trade.getEmail(), trade.getSymbol(), trade.getGameID());
			
			System.out.println("There are "+transactionIDs.size()+" transactions to be used in calculating the new Average Purchase Price");
			StockOwned so = tradeTransactionService.calculateNewAvgPurchPrice(transactionIDs, trade);
			System.out.println("New average purchase price");
			userGameParticipationDAO.updateBalance(email, tradeTransaction.getTotal(), trade.getGameID());
			//userDAO.updateStocksOwned(trade, tradeTransaction.getQuantity());
			stockOwnedService.updateQuantity(trade, so);
			//stockOwnedDAO.update(trade, tradeTransaction.getQuantity(), newAvgPurchasePrice);
		}
		return new ModelAndView("symbolInfo");
	}
	
	@RequestMapping(value = "/createGame", method = RequestMethod.POST)
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

		ModelAndView model = new ModelAndView("redirect:/home");
		model.addObject("messageFromHome", "GAME CREATED");

		return model;
	}
	
	@RequestMapping(value = "editGame/{gameID}", method = RequestMethod.POST)
	public ModelAndView editingGame(@ModelAttribute Game game, @PathVariable int gameID) {

		game.setGameID(gameID);
		if (game.getGameType().equals("Private")) 
			game.setJoinCode(generateJoinCode());
		
		gameDAO.update(game);
		return new ModelAndView("redirect:/games");
	}
	
	@RequestMapping(value = "/leaveGame", method = RequestMethod.POST)
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
		return new ModelAndView("redirect:/home");
	}

	@RequestMapping(value = "/sendEmail", method = RequestMethod.POST)
	public ModelAndView sendingEmail(@RequestParam("email") String emailAddress) {

		String newPass = generateRandomPassword();
		String recipientAddress = emailAddress;
		String subject = "Password Reset";
		String message = "Requested Password Reset Successful\nNew Password: "
				+ newPass + "\n\nPlease login and change your password";

		// creates a simple e-mail object
		SimpleMailMessage email = new SimpleMailMessage();
		email.setTo(recipientAddress);
		email.setSubject(subject);
		email.setText(message);

		// sends the e-mail
		mailSender.send(email);
		userDAO.update(emailAddress, newPass);

		return new ModelAndView("redirect:/login");
	}
	
	private String generateRandomPassword() {

		StringBuilder newPass = new StringBuilder();
		String alphabet = "abcdefghijklmnopqrstuvwxyz";

		for (int i = 0; i < 8; i++) {

			Random r = new Random();
			int random = r.nextInt(25);
			newPass.append(alphabet.charAt(random));

		}
		return newPass.toString();
		// TODO Auto-generated method stub

	}

	
	public String getActiveUserEmail() {

		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();
		return auth.getName();
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
}
