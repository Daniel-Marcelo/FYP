package bct.ct413.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

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

import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.HistoricalQuote;
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

import com.google.gson.Gson;

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
	
	@RequestMapping(value = "/symbol-lookup", method = RequestMethod.GET)
	public ModelAndView displayCharts(ModelAndView model) {
		model.addObject("trade", new TradeDetails());
		model.setViewName("symbol-lookup");
		return model;
	}
	
	@RequestMapping(value = "stock-price/{value}", method = RequestMethod.GET)
	public @ResponseBody String getStockPerice(@PathVariable String value){
		
		Stock stock = YahooFinance.get(value);
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
			System.out.println("SIZE OF OBJECT: "+stock.getHistory().size());
			System.out.println("CURRENCY: "+stock.getCurrency());
			System.out.println(stock.getSymbol()+" - Market: "+stock.getStockExchange());

/*			for(HistoricalQuote quote : stock.getHistory())
				System.out.println(quote);
			*/
			if(stock.getName().equals("N/A"))
				return "Not valid";
			else
				return new Gson().toJson(stock);
	}
	
	@RequestMapping(value = "watchlist", method = RequestMethod.GET)
	public ModelAndView watchListView() {
		
		System.out.println("JAVA "  +System.getProperty("java.runtime.version"));
		ModelAndView model = new ModelAndView("watchlist");
		List<Stock> stocksOnWatch = stockOnWatchDAO.getList(getActiveUserEmail());
		model.addObject("stocks", stocksOnWatch);
		return model;
	}
	
	@RequestMapping(value = "watch-stock", method = RequestMethod.POST)
	public ModelAndView addingStockToWatchList(@RequestParam("symbol") String symbol){

		System.out.println("The symbol is: "+symbol);
		String message = stockOnWatchDAO.insert(getActiveUserEmail(), symbol);
		return new ModelAndView("redirect:/watchlist");
		//return message;
		
	}
	
	@RequestMapping(value = "delete-stock", method = RequestMethod.POST)
	public ModelAndView  removeFromWatchList(@RequestParam("symbol") String symbol){
		System.out.println("DEleting from watchlist");
		String message = stockOnWatchDAO.remove(symbol, getActiveUserEmail());
		return new ModelAndView("redirect:/watchlist");

		//return message;
		
	}
	
/*	@RequestMapping(value = "portfolio", method = RequestMethod.GET)
	public ModelAndView portfolio() {

		ModelAndView model = new ModelAndView("game/portfolio");

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

		ModelAndView model = new ModelAndView("game/portfolioz");
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

	@RequestMapping(value = { "/account", "/" }, method = RequestMethod.GET)
	public ModelAndView homeView(ModelAndView model) throws IOException {

		User user = userDAO.get(getActiveUserEmail());

		model.setViewName("account");
		model.addObject("existingReg", user);

		return model;
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
		return new ModelAndView("symbol-lookup");
	}
	
	public String getActiveUserEmail() {

		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();
		return auth.getName();
	}

}
