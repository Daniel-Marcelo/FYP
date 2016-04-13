package bct.ct413.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;

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
import bct.ct413.model.LimitOrder;
import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;
import bct.ct413.model.TradeDetails;
import bct.ct413.model.TradeTransaction;
import bct.ct413.model.User;
import bct.ct413.model.UserGameParticipation;
import bct.ct413.service.GameService;
import bct.ct413.service.StockOwnedService;
import bct.ct413.service.TradeService;
import bct.ct413.service.TradeTransactionService;
import bct.ct413.service.UserGameParticipationService;
import bct.ct413.service.UserService;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.Interval;

@Controller
public class HomeController {
	

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
	private UserService userService;
	
	@Autowired
	private TradeService tradeService;

	
	@RequestMapping(value = "/updating-user", method = RequestMethod.POST)
	public ModelAndView updatingUserDetails(@ModelAttribute User existingUser, HttpServletRequest request) {

		System.out.println("Updating user details");
		String currentEmail = getActiveUserEmail();
		System.out.println("Old: "+currentEmail+" - new: "+existingUser.getEmail());
		String newEmail = existingUser.getEmail();
		
		if(!currentEmail.equals(existingUser.getEmail())){

			System.out.println("Updating email in DB");
			User user = userDAO.get(currentEmail);
			user.setEmail(newEmail);
			System.out.println("Country: "+existingUser.getCountry());
			user.setCountry(existingUser.getCountry());
			user.setFirstName(existingUser.getFirstName());
			user.setLastName(existingUser.getLastName());
			
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
			
		}else{
		
			userDAO.update(existingUser);
		}
		
		currentEmail = getActiveUserEmail();
		System.out.println("AFTER - Old: "+currentEmail+" - new: "+existingUser.getEmail());
		newEmail = existingUser.getEmail();
		
		new SecurityContextLogoutHandler().logout(request, null, null);
		return new ModelAndView("redirect:/account?details-change");

	}
	
	@RequestMapping(value = "/symbol-lookup", method = RequestMethod.GET)
	public ModelAndView displayCharts(ModelAndView model) {
		model.addObject("trade", new TradeDetails());
		model.setViewName("symbol-lookup");
		return model;
	}
	
	@RequestMapping(value = "stock-price/{value}", method = RequestMethod.GET)
	public @ResponseBody String getStockPerice(@PathVariable String value){
		
		System.out.println("Value: "+value);
		Stock stock = YahooFinance.get(value);
		
		if(stock == null || stock.getName().equals("N/A")){
			
			System.out.println("Returning not valid");
			return "Not valid";
		}
		else
			return new Gson().toJson(stock.getQuote().getPrice());
		
	}
	 
    @RequestMapping(value = "stock-info/{value}", method = RequestMethod.GET)
	public @ResponseBody String test(@PathVariable String value){
		
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy MMM dd HH:mm:ss");		
		from.add(Calendar.YEAR, -6); 
		System.out.println("FROM: "+sdf.format(from.getTime()));
		System.out.println("TO: "+sdf.format(to.getTime()));
		
			Stock stock = YahooFinance.get(value, from, to,Interval.DAILY);
			stock.print();
			System.out.println(new Gson().toJson(stock.getHistory()));

			
			if(stock.getName().equals("N/A")){
				System.out.println("Returning not valid");
				return "Not valid";
			}
			else
				return new Gson().toJson(stock);
	}
	
	@RequestMapping(value = "watchlist", method = RequestMethod.GET)
	public ModelAndView watchListView() {
		
		ModelAndView model = new ModelAndView("watchlist");
		List<Stock> stocksOnWatch = stockOnWatchDAO.getList(getActiveUserEmail());
		model.addObject("stocks", stocksOnWatch);
		return model;
	}
	
	@RequestMapping(value = "watch-stock", method = RequestMethod.POST)
	public ModelAndView addingStockToWatchList(@RequestParam("symbol") String symbol){

		System.out.println("The symbol is: "+symbol);
		
		stockOnWatchDAO.insert(getActiveUserEmail(), symbol);
		
		
		return new ModelAndView("redirect:/watchlist");
		//return message;
		
	}
	
	@RequestMapping(value = "delete-stock", method = RequestMethod.POST)
	public ModelAndView  removeFromWatchList(@RequestParam("symbol") String symbol){
		
		stockOnWatchDAO.remove(symbol, getActiveUserEmail());
		
		return new ModelAndView("redirect:/watchlist");

		//return message;
		
	}

	@RequestMapping(value = "portfolio", method = RequestMethod.GET)
	public ModelAndView portfolioView() {

		ModelAndView model = new ModelAndView("game/portfolio");
		
		String email = getActiveUserEmail();
		List<UserGameParticipation> participatingGames = 
				userGameParticipationService.getParticipatingGames(email);
		gameService.setGame(participatingGames);
		List<StockOwned> stocksForUserForGames = stockOwnedService.stockOwnedPortfolioInfo(email);
		List<Trade> myTransactions = tradeDAO.getPortfolioTradeDetails(email);
		
		List<Trade> limitOrders	= tradeService.getAllLimitOrders(email);
		System.out.println("number of limit orders: "+limitOrders.size());
		for(Trade trade : limitOrders){
			LimitOrder lo = limitOrderDetailsDAO.get(trade.getTradeID());
			trade.setLimitOrder(lo);
		}
		model.addObject("participatingGamesJSON", new Gson().toJson(participatingGames));
		model.addObject("participatingGames", participatingGames);
		model.addObject("stocksForUser", new Gson().toJson(stocksForUserForGames));
		model.addObject("myTransactions", new Gson().toJson(myTransactions));
		model.addObject("limitOrders", new Gson().toJson(limitOrders));

		return model;
	}
/*	@RequestMapping(value = "portfolio", method = RequestMethod.GET)
	public ModelAndView portfolioiew() {

		ModelAndView model = new ModelAndView("game/portfolioz");
		String email = getActiveUserEmail();
		
		List<UserGameParticipation> participatingGames = userGameParticipationService.getParticipatingGames(email);
		gameService.setGame(participatingGames);
		List<StockOwned> stocksForUserForGames = stockOwnedService.stockOwnedPortfolioInfo(email);
		//List<Game> gamesForUser = gameService.getCreatedGamesByUser(email);
		List<Trade> myTransactions = tradeDAO.getPortfolioTradeDetails(email);

		model.addObject("gamesForUser", participatingGames);
		model.addObject("stocksForUser", new Gson().toJson(stocksForUserForGames));
		model.addObject("myTransactions", new Gson().toJson(myTransactions));

		return model;
	}*/

	@RequestMapping(value = { "/account", "/"}, method = RequestMethod.GET)
	public ModelAndView myAccountView(@RequestParam(value = "details-change", required = false) String detailsChange, 
			@RequestParam(value = "password-change", required = false) String passwordChange, @RequestParam(value = "password-error", required = false) String passwordError) throws IOException {
		
		ModelAndView model =  new ModelAndView("account");
		String email = getActiveUserEmail();
		User user = userDAO.get(email);
		Set<String> emails = userService.getOtherEmails(email);

		
		if (detailsChange != null) {
			System.out.println("DetailsChange: "+detailsChange);
			model.addObject("detailsConfirmation", "Changes Successfully Made.");
		}
		if (passwordChange != null) {
			System.out.println("PasswordChange: "+passwordChange);
			model.addObject("passwordConfirmation", "Password Change Successful.");
		}
		if (passwordError != null) {
			System.out.println("PasswordChange: "+passwordChange);
			model.addObject("passwordError", "Incorrect Password Entered");
		}
		
		
		
		model.addObject("existingReg", user);
		model.addObject("emailsJSON", new Gson().toJson(emails));

		return model;
	}
		
	@RequestMapping(value = { "/home" }, method = RequestMethod.GET)
	public ModelAndView homeView(ModelAndView model) throws IOException {
		return new ModelAndView("home");
	}



	@RequestMapping(value = "/trade", method = RequestMethod.GET)
	public ModelAndView tradeView() {


		String email = getActiveUserEmail();
		
		List<UserGameParticipation> participatingGames = userGameParticipationService.getParticipatingGames(email);
		gameService.setActiveGames(participatingGames);
		List<StockOwned> stocksOwned = stockOwnedService.getList(email);
		
		
		
/*		List<UserGameParticipation> gameParticipations = userGameParticipationDAO.get(email);
*/		
		
		ModelAndView model = new ModelAndView("trade");			
		model.addObject("trade", new TradeDetails());
		model.addObject("participatingGames", participatingGames);
		model.addObject("jsonMap", new Gson().toJson(stocksOwned));
		model.addObject("gameParticipationsJSON", new Gson().toJson(participatingGames));

		return model;
	}

	@RequestMapping(value = "update-balance/{gameID}", method = RequestMethod.GET)
	public @ResponseBody String ajaxFetchBalance(@PathVariable int gameID) {
		
		System.out.println("Ajax call ");
		String email = getActiveUserEmail();

		if (!email.equals("anonymousUser")) 
			return new Gson().toJson(userDAO.getBalance(email, gameID));
		 else 
			return "0";
	}

	@RequestMapping(value = "execute-trade", method = RequestMethod.POST)
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

			TradeTransaction tradeTransaction = tradeDetails.getTransactionObject();
			tradeTransactionDAO.insert(tradeTransaction);
			int transactionID = tradeTransactionDAO.getLastTransactionID();
			
			Trade trade = tradeDetails.getTradeObject(email,transactionID);
			tradeDAO.insert(trade);

			List<Integer> transactionIDs = tradeService
					.getPurchaseOrderTransactionIDs(trade.getEmail(), trade.getSymbol(), trade.getGameID());
			
			if (trade.getBuyOrSell().equals("Sell")) {
				
				tradeTransaction.setTotal(-(tradeTransaction.getTotal()));
				tradeTransaction.setQuantity(-(tradeTransaction.getQuantity()));
				userGameParticipationDAO.updateBalance(email, tradeTransaction.getTotal(), trade.getGameID());
				int oldQuantity = stockOwnedService.getQuantity(trade.getEmail(), trade.getSymbol(), trade.getGameID());
				int newQuantity = oldQuantity + tradeTransaction.getQuantity();
				stockOwnedDAO.updateQuantity(trade.getGameID(), trade.getSymbol(), trade.getEmail(), newQuantity);

			}else{
				userGameParticipationDAO.updateBalance(email, tradeTransaction.getTotal(), trade.getGameID());
				double avgPurchPrice = tradeTransactionService.calculateNewAvgPurchPrice(transactionIDs, trade);

				int oldQuantity = stockOwnedService.getQuantity(trade.getEmail(), trade.getSymbol(), trade.getGameID());
				
				//If in stock owned table
				if(oldQuantity != -1){
					int newQuantity = oldQuantity + tradeTransaction.getQuantity();
					System.out.println("New quantity = "+newQuantity);
					stockOwnedDAO.updateQuantity(trade.getGameID(), trade.getSymbol(), trade.getEmail(), newQuantity);
					stockOwnedDAO.updateAvgPurchPrice(trade.getGameID(), trade.getSymbol(), trade.getEmail(), avgPurchPrice);
				}
				else{
					stockOwnedDAO.insert(trade.getGameID(), trade.getSymbol(), trade.getEmail(), avgPurchPrice, tradeTransaction.getQuantity());
				}
			}
			//stockOwnedService.updateQuantity(trade, so);
		}
		return new ModelAndView("redirect:/portfolio");
	}
	
	public String getActiveUserEmail() {

		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();
		return auth.getName();
	}

}
