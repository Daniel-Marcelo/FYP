package bct.ct413.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.RememberMeAuthenticationToken;
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

import yahoofinance.YahooFinance;
import yahoofinance.histquotes.Interval;
import bct.ct413.dao.GameDAO;
import bct.ct413.dao.TradeDAO;
import bct.ct413.dao.TradeTransactionDAO;
import bct.ct413.dao.UserDAO;
import bct.ct413.model.Game;
import bct.ct413.model.LimitOrder;
import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;
import bct.ct413.model.TradeDetails;
import bct.ct413.model.TradeTransaction;
import bct.ct413.model.User;
import bct.ct413.model.UserGameAccountValHistory;
import bct.ct413.model.UserGameParticipation;

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
	private TradeTransactionDAO tradeTransactionDAO;

	
	
	@RequestMapping(value = "/admin**", method = RequestMethod.GET)
	public ModelAndView adminPage() {

		ModelAndView model = new ModelAndView();
		model.addObject("title", "Spring Security Remember Me");
		model.addObject("message", "This page is for ROLE_ADMIN only!");
		model.setViewName("admin");

		return model;

	}
	
	@RequestMapping(value = "/admin/update**", method = RequestMethod.GET)
	public ModelAndView updatePage(HttpServletRequest request) {

		ModelAndView model = new ModelAndView();

		if (isRememberMeAuthenticated()) {
			//send login for update
			setRememberMeTargetUrlToSession(request);
			model.addObject("loginUpdate", true);
			model.setViewName("redirect:/login");
			model.addObject("user", new User());

		} else {
			model.setViewName("update");
		}

		return model;

	}
	
	/**
	 * If the login in from remember me cookie, refer
	 * org.springframework.security.authentication.AuthenticationTrustResolverImpl
	 */
	private boolean isRememberMeAuthenticated() {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication == null) {
			return false;
		}

		return RememberMeAuthenticationToken.class.isAssignableFrom(authentication.getClass());
	}
	
	/**
	 * save targetURL in session
	 */
	private void setRememberMeTargetUrlToSession(HttpServletRequest request){
		HttpSession session = request.getSession(false);
		if(session!=null){
			session.setAttribute("targetUrl", "/admin/update");
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@RequestMapping(value = "portfolio", method = RequestMethod.GET)
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

	}

	@RequestMapping(value = "portfolioz", method = RequestMethod.GET)
	public ModelAndView portfolioz() {

		ModelAndView model = new ModelAndView("portfolioz");

		List<StockOwned> stocksForUserForGames = userDAO
				.getStocksOwned(getActiveUserEmail());
		List<Game> gamesForUser = userDAO.getGamesForUser(getActiveUserEmail());
		List<Trade> myTransactions = tradeDAO
				.getPortfolioTransactionDetails(getActiveUserEmail());

		model.addObject("gamesForUser", gamesForUser);
		model.addObject("stocksForUser",
				new Gson().toJson(stocksForUserForGames));
		model.addObject("myTransactions", new Gson().toJson(myTransactions));

		return model;

	}


	@RequestMapping(value = "joinGame", method = RequestMethod.POST)
	public ModelAndView joinGame(@RequestParam("joinCode") String joinCode) {

		
		userDAO.addUserToGame(joinCode, getActiveUserEmail());
		return new ModelAndView("trade").addObject("trade", new TradeDetails());

	}

	@RequestMapping(value = "globalRankings", method = RequestMethod.GET)
	public ModelAndView rankings() {
		return new ModelAndView("globalRankings").addObject("allUsers",
				userDAO.getGlobalRankings());
	}

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


		User user = userDAO.getUserDetails(getActiveUserEmail());

		List<Game> games = userDAO.getGamesForUser(user.getEmail());
		List<UserGameParticipation> headerGames = userDAO
				.getRelevantGames(getActiveUserEmail());

		model.setViewName("home");
		model.addObject("existingReg", user);
		model.addObject("newGame", new Game());

		model.addObject("myGames", games);
		model.addObject("dataTableGamesJSON", new Gson().toJson(games));
		model.addObject("gameNamesForUser", headerGames);
		model.addObject("gameBalanceHeaderJSON", new Gson().toJson(headerGames));

		return model;
	}

	@RequestMapping(value = "games", method = RequestMethod.GET)
	public ModelAndView gamesView() {

		return new ModelAndView("games");
	}
	
	@RequestMapping(value = "dashboard", method = RequestMethod.GET)
	public ModelAndView dashboardDetails(){
		
		
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy MMM dd HH:mm:ss");		
		from.add(Calendar.YEAR, -1); 
		System.out.println("FROM: "+sdf.format(from.getTime()));
		System.out.println("TO: "+sdf.format(to.getTime()));
		
		List<Game> games = userDAO.getGamesForUser(getActiveUserEmail());
		yahoofinance.Stock dow = YahooFinance.get("^DJI", from, to,Interval.DAILY);
		yahoofinance.Stock sAndP = YahooFinance.get("^GSPC", from, to,Interval.DAILY);
		
		List<UserGameAccountValHistory> balancesForGames = userDAO.getAllBalanceHistory(getActiveUserEmail());
		Set<Integer> gameIDs =getGameIDs(games);

		
		ModelAndView model = new ModelAndView("dashboard");
		model.addObject("myGames", games);
		model.addObject("DOW", new Gson().toJson(dow));
		model.addObject("sAndP", new Gson().toJson(sAndP));
		model.addObject("balanceHistory", new Gson().toJson(balancesForGames));
		model.addObject("gameIDs", new Gson().toJson(gameIDs));


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

			TradeTransaction tradeTransaction = tradeDetails
					.getRelevantTradeTransactionDetails();
			int transactionID = tradeTransactionDAO
					.addNewTransaction(tradeTransaction);

			Trade trade = tradeDetails.getRelevantTradeDetails(email,
					transactionID);
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

	@RequestMapping(value = "/leaveGame", method = RequestMethod.POST)
	public ModelAndView leave(@RequestParam("gameToLeaveID") String id) {

		gameDAO.removeUserFromGame(id, getActiveUserEmail());
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
		userDAO.updateUserPassword(emailAddress, newPass);

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
