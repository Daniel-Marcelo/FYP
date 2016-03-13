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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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
	
	@RequestMapping(value = "watchlist", method = RequestMethod.GET)
	public ModelAndView watchList() {
		ModelAndView model = new ModelAndView("watchlist");
		List<Stock> stocksOnWatch = stockOnWatchDAO.getList(getActiveUserEmail());
		model.addObject("stocks", stocksOnWatch);
		return model;
	}
	
	@RequestMapping(value = "watchStock/{value}", method = RequestMethod.GET)
	public @ResponseBody String getStockPerice(@PathVariable String value){

		String message = stockOnWatchDAO.insert(getActiveUserEmail(), value);
		return message;
		
	}
	@RequestMapping(value = "deleteStock/{value}", method = RequestMethod.GET)
	public @ResponseBody String removeFromWatch(@PathVariable String value){

		System.out.println("Removing from watchlist");
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
	public ModelAndView portfolioz() {

		ModelAndView model = new ModelAndView("portfolioz");
		String email = getActiveUserEmail();
				
		List<StockOwned> stocksForUserForGames = stockOwnedService.stockOwnedPortfolioInfo(email);
		List<Game> gamesForUser = gameDAO.getGames(email);
		List<Trade> myTransactions = tradeDAO.getPortfolioTradeDetails(email);

		model.addObject("gamesForUser", gamesForUser);
		model.addObject("stocksForUser", new Gson().toJson(stocksForUserForGames));
		model.addObject("myTransactions", new Gson().toJson(myTransactions));

		return model;
	}

	@RequestMapping(value = "joinGame", method = RequestMethod.POST)
	public ModelAndView joinGame(@RequestParam("joinCode") String joinCode) {

		String email = getActiveUserEmail();
		Game game = gameDAO.getGameDetails(joinCode);
		userGameParticipationDAO.addToGame(game, email);
		userGameAccountValHistoryDAO.insert(game.getGameID(), game.getStartingCash(), email);
		return new ModelAndView("trade").addObject("trade", new TradeDetails());

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
	public ModelAndView listContact(ModelAndView model) throws IOException {


		User user = userDAO.getUser(getActiveUserEmail());

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
		
		List<Game> games = gameDAO.getGames(getActiveUserEmail());
		model.addObject("myGames",games);

		return model;
		
	}
	
	@RequestMapping(value = "leaveGame/{gameID}", method = RequestMethod.GET)
	public ModelAndView leavingGame(@PathVariable int gameID) {
		
		ModelAndView model = new ModelAndView("/leaveConfirmation");
		Game game = gameDAO.getGameName(gameID);
		model.addObject("game", game);
		return model;
		
	
	}
	
	@RequestMapping(value = "joinPublicGame/{gameID}", method = RequestMethod.GET)
	public ModelAndView joinGame(@PathVariable int gameID) {
		
		String email =  getActiveUserEmail(); 
		Game game = gameDAO.getGameDetails(gameID);
		
		if(!userGameParticipationDAO.isInGame(email, gameID)){
			userGameParticipationDAO.addToGame(game, email);
			userGameAccountValHistoryDAO.insert(game.getGameID(), game.getStartingCash(), email);
		}
		
		return new ModelAndView("redirect:/games");
	}
	
	@RequestMapping(value = "rankings/{gameID}", method = RequestMethod.GET)
	public ModelAndView gameRankings(@PathVariable int gameID) {
		
		ModelAndView model = new ModelAndView("/gameRankings");
	
		
		List<UserGameParticipation> participations = userGameParticipationDAO.getList(gameID);
		List<User> usersInGame = userDAO.getList(getEmails(participations));
		userGameParticipationService.assignBalances(participations, usersInGame);
		stockOwnedService.calculateAccountValue(usersInGame, gameID);
		Game game = gameDAO.getGameName(gameID);
		
		model.addObject("usersInGame", usersInGame);
		model.addObject("gameName",game.getGameName());

		return model;
	}
	
	private List<String> getEmails(List<UserGameParticipation> participations) {

		List<String> emails = new ArrayList<String>();
		for(UserGameParticipation UGP : participations)
			emails.add(UGP.getEmail());
		return emails;
	}

	@RequestMapping(value = "editGameRules/{gameID}", method = RequestMethod.GET)
	public ModelAndView gameRules(@PathVariable int gameID) {
		
		Game game = gameDAO.getGameDetails(gameID);
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
	public ModelAndView viewRules(@PathVariable int gameID) {
		
		Game game = gameDAO.getGameDetails(gameID);
		ModelAndView model = new ModelAndView("/viewGameRules");
		model.addObject(game);

		return model;
	}
	
	@RequestMapping(value = "joinPrivateGame", method = RequestMethod.GET)
	public ModelAndView joinPrivateGame() {
		
			ModelAndView model = new ModelAndView("joinPrivateGame");
			return model;
	}
	
	@RequestMapping(value = "createNewGame", method = RequestMethod.GET)
	public ModelAndView createNewGame() {
		
			ModelAndView model = new ModelAndView("createNewGame");
			model.addObject("newGame", new Game());
			return model;
	}
	
	@RequestMapping(value = "joinPublicGame", method = RequestMethod.GET)
	public ModelAndView joinPublicGame() {
		
			ModelAndView model = new ModelAndView("joinPublicGame");
			List<Game> publicGames = gameDAO.getPublicGames();
			model.addObject("publicGames",publicGames);
			return model;
	}
	
	@RequestMapping(value = "dashboard", method = RequestMethod.GET)
	public ModelAndView dashboardDetails(){
		
		String email = getActiveUserEmail(); 
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy MMM dd HH:mm:ss");		
		from.add(Calendar.YEAR, -1); 
		System.out.println("FROM: "+sdf.format(from.getTime()));
		System.out.println("TO: "+sdf.format(to.getTime()));
		
		//List<Game> games = userDAO.getGamesForUser(getActiveUserEmail());
		
		//This needs redoing
		List<Game> games = gameDAO.getGames(getActiveUserEmail());
		for(Game game : games){
			List<UserGameParticipation> participations = userGameParticipationDAO.getList(game.getGameID());
			List<User> usersInGame = userDAO.getList(getEmails(participations));
			game.setUsersInGame(usersInGame);
			userGameParticipationService.assignBalances(participations, usersInGame);
			stockOwnedService.calculateAccountValue(usersInGame, game.getGameID());
			game.setBoard(gameService.getDashboardStats(email, game));

		}
		String[] symbols = {"^DJI", "^GSPC"};
		Map<String, Stock> stocks = YahooFinance.get(symbols, from, to,Interval.DAILY);
		Stock dow = stocks.get("^DJI");
		Stock sAndP = stocks.get("^GSPC");
		
		List<UserGameAccountValHistory> balancesForGames = userGameAccountValHistoryDAO.get(email);
		Set<Integer> gameIDs = getGameIDs(games);

		
		ModelAndView model = new ModelAndView("dashboard");
		model.addObject("myGames", games);
		model.addObject("DOW", new Gson().toJson(dow));
		model.addObject("sAndP", new Gson().toJson(sAndP));
		model.addObject("balanceHistory", new Gson().toJson(balancesForGames));
		model.addObject("gameIDs", new Gson().toJson(gameIDs));

		return model;
	}
	
	@RequestMapping(value = "editUserEmailAdmin", method = RequestMethod.GET)
	public ModelAndView editUserEmailAdmin(){
		
		ModelAndView model = new ModelAndView("editUserEmail");
		model.addObject("allUsers", userDAO.get());
		
		return model;
		
	}
	
	@RequestMapping(value = "editEmailForm/{email:.+}", method = RequestMethod.GET)
	public ModelAndView editUserEmail(@PathVariable String email){
		
		ModelAndView model = new ModelAndView("editEmailForm");
		model.addObject("currentEmail", email);
		
		return model;
		
	}
	
	@RequestMapping(value = "/updateEmailDB", method = RequestMethod.GET)
	public ModelAndView joinGame(@RequestParam("currentEmail") String currentEmail, @RequestParam("newEmail") String newEmail) {

		User user = userDAO.getUser(currentEmail);
		user.setEmail(newEmail);
		userDAO.insert(user);
		gameDAO.updateCreatorEmail(currentEmail, newEmail);
		stockOwnedDAO.update(currentEmail, newEmail);
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
	
	
/*	@RequestMapping(value = "removeGame", method = RequestMethod.GET)
	public ModelAndView removeGameAdmin(){

		
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy MMM dd HH:mm:ss");		
		from.add(Calendar.YEAR, -1); 
		System.out.println("FROM: "+sdf.format(from.getTime()));
		System.out.println("TO: "+sdf.format(to.getTime()));
		
		List<Game> games = userDAO.getGamesAdmin();
		yahoofinance.Stock dow = YahooFinance.get("^DJI", from, to,Interval.DAILY);
		yahoofinance.Stock sAndP = YahooFinance.get("^GSPC", from, to,Interval.DAILY);
		
		List<UserGameAccountValHistory> balancesForGames = userDAO.getAllBalanceHistory(getActiveUserEmail());
		Set<Integer> gameIDs = getGameIDs(games);

		ModelAndView model = new ModelAndView("removegame");
		model.addObject("myGames", games);
		model.addObject("DOW", new Gson().toJson(dow));
		model.addObject("sAndP", new Gson().toJson(sAndP));
		model.addObject("balanceHistory", new Gson().toJson(balancesForGames));
		model.addObject("gameIDs", new Gson().toJson(gameIDs));


		return model;
	}*/
    @RequestMapping(value = "/deleteGame", method = RequestMethod.POST)
	public ModelAndView deleteGame(@RequestParam("gameID") int gameID){
    	System.out.println("in here");
    	gameDAO.removeGameFromStockOwned(gameID);
    	gameDAO.removeGameTrades(gameID);
    	gameDAO.removeFromGameAccountHistory(gameID);
    	gameDAO.removeFromUserGameParticipation(gameID);
    	gameDAO.removeFromGameTable(gameID);
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
	public ModelAndView updateUserDetails(@ModelAttribute User existingUser) {

		userDAO.updateDetails(existingUser);
		return new ModelAndView("symbolInfo");

	}

	@RequestMapping(value = "/trade", method = RequestMethod.GET)
	public ModelAndView trade() {

		String email = getActiveUserEmail();
		List<UserGameParticipation> games = userDAO.getRelevantGames(email);
		Gson gson = new Gson();
		String gamesForUserJSON = gson.toJson(games);

		ModelAndView model = new ModelAndView("trade");
		model.addObject("trade", new TradeDetails());
		model.addObject("jsonMap", tradeDAO.getSharesOwned(email));
		model.addObject("gamesForUser", games);
		model.addObject("gameBalanceHeaderJSON", gamesForUserJSON);

		return model;
	}

	@RequestMapping(value = "updatedBalance/{gameID}", method = RequestMethod.GET)
	public @ResponseBody String calculateUpdateFromLimitOrders(
			@PathVariable int gameID) {

		System.out.println("Controller successfully called");
		String email = getActiveUserEmail();

		if (!email.equals("anonymousUser")) {

			String balance = new Gson().toJson(userDAO
					.getBalance(email, gameID));
			return balance;
		} else {
			return "0";
		}

	}

	@RequestMapping(value = "executeTrade", method = RequestMethod.POST)
	public ModelAndView executeTrade(@ModelAttribute TradeDetails tradeDetails) {

		String email = getActiveUserEmail();
		tradeDetails.setSymbol(tradeDetails.getSymbol().toUpperCase());

		if (tradeDetails.getTradeType().equals("Limit")) {

			Trade trade = tradeDetails.getRelevantTradeDetails(email, 0);
			int tradeID = tradeDAO.addNewOrder(trade);

			LimitOrder limitOrder = tradeDetails.getRelevantLimitOrderDetails();
			limitOrder.setTradeID(tradeID);

			tradeDAO.addLimitOrderDetails(limitOrder);
		}

		if (tradeDetails.getTradeType().equals("Market")) {

			System.out.println("Executing market order: "+tradeDetails.getSymbol());
			TradeTransaction tradeTransaction = tradeDetails.getRelevantTradeTransactionDetails();
			int transactionID = tradeTransactionDAO.addNewTransaction(tradeTransaction);

			Trade trade = tradeDetails.getRelevantTradeDetails(email,transactionID);
			tradeDAO.addNewOrder(trade);

			if (trade.getBuyOrSell().equals("Sell")) {

				tradeTransaction.setTotal(-(tradeTransaction.getTotal()));
				tradeTransaction.setQuantity(-(tradeTransaction.getQuantity()));
			}

			userDAO.updateBalance(email, tradeTransaction.getTotal(),
					tradeDetails.getGameID());
			userDAO.updateStocksOwned(trade, tradeTransaction.getQuantity());
		}
		return new ModelAndView("symbolInfo");
	}

	@RequestMapping(value = "/createGame", method = RequestMethod.POST)
	public ModelAndView createGame(@ModelAttribute Game newGame) {

		if (newGame.getGameType().equals("Private")) {
			newGame.setJoinCode(generateJoinCode());
		}
		newGame.setCreatorEmail(getActiveUserEmail());

		int gameID = gameDAO.createGame(newGame);
		userDAO.addToAccValHistory(gameID,newGame.getStartingCash(), getActiveUserEmail());

		ModelAndView model = new ModelAndView("redirect:/home");

		model.addObject("messageFromHome", "GAME CREATED");

		return model;
	}
	@RequestMapping(value = "/editGame", method = RequestMethod.POST)
	public ModelAndView editGame(@ModelAttribute Game game) {

		gameDAO.updateGameDetails(game);
		ModelAndView model = new ModelAndView("games");


		return model;
	}

	@RequestMapping(value = "/leaveGame", method = RequestMethod.POST)
	public ModelAndView leave(@RequestParam("gameToLeaveID") String id) {

		int gameID = Integer.parseInt(id);
		gameDAO.removeFromStockOwned(gameID, getActiveUserEmail());
		gameDAO.removeTrades(gameID, getActiveUserEmail());
		gameDAO.removeUserGameAccountHistory(gameID, getActiveUserEmail());
		gameDAO.removeUserFromUserGameParticipation(gameID, getActiveUserEmail());
		//gameDAO.removeUserFromGame(gameID, getActiveUserEmail());
		
		if(gameDAO.hasUserCreatedGame(getActiveUserEmail(), gameID)){
			
			System.out.println("User created this game");
	    	gameDAO.removeGameFromStockOwned(gameID);
	    	gameDAO.removeGameTrades(gameID);
	    	gameDAO.removeFromGameAccountHistory(gameID);
	    	gameDAO.removeFromUserGameParticipation(gameID);
	    	gameDAO.removeFromGameTable(gameID);
		}
		//Check if user owns game, if so, remove all data from game
		return new ModelAndView("redirect:/home");
	}

	@RequestMapping(value = "/sendEmail", method = RequestMethod.POST)
	public ModelAndView sendEmail(@RequestParam("email") String emailAddress) {

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
