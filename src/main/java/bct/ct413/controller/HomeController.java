package bct.ct413.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

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


@RequestMapping(value = "portfolio", method = RequestMethod.GET)
public ModelAndView portfolio(){


	ModelAndView model = new ModelAndView("portfolio");
	List<StockOwned> stocksForUser = userDAO.getStocksOwned(getActiveUserEmail());
	model.addObject("stocksForUser",stocksForUser);
	
	
	return model;
	
	
}

@RequestMapping(value = "joinGame", method = RequestMethod.POST)
public ModelAndView joinGame(@RequestParam("joinCode") String joinCode) {

	System.out.println("Join Code Entered: " + joinCode);
	String email = getActiveUserEmail();

	gameDAO.addUserToGame(joinCode, email);

	return new ModelAndView("trade").addObject("trade", new TradeDetails());

}


@RequestMapping(value = "globalRankings", method = RequestMethod.GET)
public ModelAndView rankings(){
	
	
	List<User> allUsers = userDAO.getGlobalRankings();
	
	ModelAndView model = new ModelAndView("globalRankings");
	model.addObject("allUsers", allUsers);
	return model;
	
	
	
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
	
	List<Game> games = userDAO.getGamesForUser(user);
	List<UserGameParticipation> headerGames = userDAO
			.getRelevantGames(getActiveUserEmail());
/*		Map<String, List<Integer>> gameIDs = getAllGameIDs(games);
*/
	Gson gson = new Gson();

	
	model.setViewName("home");
	model.addObject("existingReg", user);
	model.addObject("newGame", new Game());
	
	model.addObject("myGames", games);
	model.addObject("dataTableGamesJSON", gson.toJson(games));
	model.addObject("gameNamesForUser", headerGames);
	model.addObject("gameBalanceHeaderJSON", gson.toJson(headerGames));
	
	return model;
}

private Map<String, List<Integer>> getAllGameIDs(List<Game> games) {

	List<Integer> gameIDs = new ArrayList<Integer>();
	Map<String, List<Integer>> gameIDsMap = new HashMap<String, List<Integer>>();
	for(Game game: games){
		gameIDs.add(game.getGameID());
	}
	gameIDsMap.put("GameIDs", gameIDs);
	return gameIDsMap;
}

@RequestMapping(value = "games", method = RequestMethod.GET)
public ModelAndView gamesView() {

	return new ModelAndView("games");
}

@RequestMapping(value = "/updateUserDetails", method = RequestMethod.POST)
public ModelAndView updateUserDetails(@ModelAttribute User existingUser) {

	userDAO.updateDetails(existingUser);
	return new ModelAndView("symbolInfo");

}

@RequestMapping(value = "/trade", method = RequestMethod.GET)
public ModelAndView trade() {

	String email = getActiveUserEmail();
	/*
	 * String balance = Double.toString(userDAO.getBalance(email));
	 */List<UserGameParticipation> games = userDAO.getRelevantGames(email);
	Gson gson = new Gson();
	String gamesForUserJSON = gson.toJson(games);

	ModelAndView model = new ModelAndView();
	model.addObject("trade", new TradeDetails());
	model.addObject("jsonMap", tradeDAO.getSharesOwned(email));
	/*
	 * model.addObject("balance", balance);
	 */model.addObject("gamesForUser", games);
	model.addObject("gamesForUserJSON", gamesForUserJSON);

	System.out.println("GAMES: " + gamesForUserJSON);

	model.setViewName("trade");
	return model;
}

@RequestMapping(value = "updatedBalance/{gameID}", method = RequestMethod.GET)
public @ResponseBody String calculateUpdateFromLimitOrders(
		@PathVariable int gameID) {

	System.out.println("Controller successfully called");
	String email = getActiveUserEmail();

	if (!email.equals("anonymousUser")) {

		double bal = userDAO.getBalance(email, gameID);
		Gson gson = new Gson();
		String balance = gson.toJson(bal);
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
public ModelAndView createGame(@ModelAttribute Game newGame/*
															 * 
															 * ,
															 * BindingResult
															 * bindingResult
															 */) {

	System.out.println("Made it here");
	newGame.printGameDetails();
	StringBuilder str = new StringBuilder();
	if (newGame.getGameType().equals("Private")) {

		for (int i = 0; i < 16; i++) {
			System.out.println("Generating key code for game");
			Random r = new Random();
			int random = r.nextInt(9);
			System.out.println("Int: " + random);
			str.append(random);
		}
	}
	System.out.println("Key Code Generated is: " + str);
	newGame.setJoinCode(str.toString());
	newGame.setCreatorEmail(getActiveUserEmail());

	gameDAO.createGame(newGame);

	ModelAndView model = new ModelAndView("redirect:/home");
	String messageFromHome = "GAME CREATED";
	model.addObject("messageFromHome", messageFromHome);
	try {
		model = listContact(model);
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}

	return model;
}

@RequestMapping(value = "/leaveGame", method = RequestMethod.POST)
public ModelAndView leave(@RequestParam("gameToLeaveID") String id) {

	//2 Scenarios
	//If a user leaves the game and is the owner, the game is deleted
	//If the user is not the owner, only leave the game
	
	// [1] Owner
	gameDAO.removeUserFromGame(id, getActiveUserEmail());
	
	System.out.println("Game left: " + id);
	return new ModelAndView("redirect:/home");
}

/*
 * @InitBinder public void initBinder(WebDataBinder webDataBinder) {
 * SimpleDateFormat dateFormat = new SimpleDateFormat("dd==MM==yyyy");
 * dateFormat.setLenient(false);
 * webDataBinder.registerCustomEditor(Date.class, new
 * CustomDateEditor(dateFormat, true)); }
 */

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
}
