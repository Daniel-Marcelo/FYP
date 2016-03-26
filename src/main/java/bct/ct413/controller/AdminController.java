package bct.ct413.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.RememberMeAuthenticationToken;
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
import bct.ct413.model.User;
import bct.ct413.model.UserGameAccountValHistory;
import bct.ct413.model.UserGameParticipation;
import bct.ct413.service.GameService;
import bct.ct413.service.StockOwnedService;
import bct.ct413.service.TradeService;
import bct.ct413.service.UserGameParticipationService;

import com.google.gson.Gson;

@Controller
public class AdminController {
	
	@Autowired 
	private	GameService gameService;
	
	@Autowired
	private StockOwnedDAO stockOwnedDAO;
	
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private LimitOrderDetailsDAO limitOrderDetailsDAO;
	
	@Autowired
	private TradeTransactionDAO tradeTransactionDAO;
	
	@Autowired
	private UserGameAccountValHistoryDAO userGameAccountValHistoryDAO;
	
	@Autowired
	private UserGameParticipationDAO userGameParticipationDAO;
	
	@Autowired
	private GameDAO gameDAO;
	
	@Autowired
	private TradeDAO tradeDAO;
	
	@Autowired
	private PersistentLoginsDAO persistentLoginsDAO;
	
	@Autowired
	private StockOnWatchDAO stockOnWatchDAO;
	
	@Autowired
	private TradeService tradeService;
	
	@Autowired
	private UserRolesDAO userRolesDAO;
	
	@Autowired
	private UserGameParticipationService userGameParticipationService;
	
	@Autowired
	private StockOwnedService stockOwnedService;
	
	@RequestMapping(value = "/admin-deleting-game", method = RequestMethod.POST)
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

    @RequestMapping(value = "admin-deleting-user/{email:.+}", method = RequestMethod.GET)
    public @ResponseBody String deleteUser(@PathVariable String email){
    	
    	List<Integer> gameIDs = gameService.getCreatedGameIDs(email);
    	System.out.println("Number of created games: "+gameIDs.size());
    	//Removing games created by user
    	
    	
    	for(int gameID: gameIDs){
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
    	
    	gameDAO.remove(email);
    	stockOnWatchDAO.remove(email);

    	Map<Integer, Integer> tradeAndTransactionIDsForUser = tradeService.getTradeAndTransactionIDsForUser(email);

		if(tradeAndTransactionIDsForUser.keySet().size() != 0){
			
			limitOrderDetailsDAO.remove(tradeAndTransactionIDsForUser.keySet());
			tradeDAO.remove(email);
			tradeTransactionDAO.remove(tradeAndTransactionIDsForUser.values());
			
		}

    	stockOwnedDAO.remove(email);
    	userGameAccountValHistoryDAO.remove(email);
    	userGameParticipationDAO.remove(email);
    	persistentLoginsDAO.delete(email);
    	userRolesDAO.remove(email);
    	userDAO.remove(email);
    	
    	return email+ "removed from application";
    }
    
    @RequestMapping(value = "admin-edit-user/{email:.+}", method = RequestMethod.GET)
	public ModelAndView editUserEmailFormView(@PathVariable String email){

		ModelAndView model = new ModelAndView("admin/edit-email");
		model.addObject("currentEmail", email);
		
		return model;
		
	}
	
	@RequestMapping(value = "/admin-updating-user", method = RequestMethod.GET)
	public ModelAndView updatingEmail(@RequestParam("currentEmail") String currentEmail, @RequestParam("newEmail") String newEmail, HttpServletRequest request) {

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
		
		if(currentEmail.equals(getActiveUserEmail())){
			System.out.println("A user has edited their own details");
			new SecurityContextLogoutHandler().logout(request, null, null);

		}
		
		ModelAndView model = new ModelAndView("redirect:/");

		return model;
	}
	
	@RequestMapping(value = "admin-remove-game", method = RequestMethod.GET)
	public ModelAndView removeGameAdmin(){

		ModelAndView model = getDashboardModel();
		model.setViewName("admin/delete-game");

		return model;
	}
    

	@RequestMapping(value = "admin-all-users", method = RequestMethod.GET)
	public ModelAndView editUserEmailAdminView(){

		ModelAndView model = new ModelAndView("admin/edit-user");
		model.addObject("allUsers", userDAO.get());
		
		return model;
	}
	
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public ModelAndView adminPage() {
		return new ModelAndView("admin/admin");
	}
	
	@RequestMapping(value = "/admin-remove-user", method = RequestMethod.GET)
 	public ModelAndView updatePage(HttpServletRequest request) {

		ModelAndView model = new ModelAndView();

		if (isRememberMeAuthenticated()) {
			//send login for update
			setRememberMeTargetUrlToSession(request);
			model.addObject("loginUpdate", true);
			model.setViewName("redirect:/login");
			model.addObject("user", new User());

		} else {
			model.setViewName("admin/delete-user");
			List<User> allUsers = userDAO.get();
			model.addObject("allUsers", allUsers);
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
			session.setAttribute("targetUrl", "/admin-remove-user");
		}
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

		
		ModelAndView model = new ModelAndView();
		model.addObject("participatingGames", participatingGames);
		model.addObject("DOW", new Gson().toJson(dow));
		model.addObject("sAndP", new Gson().toJson(sAndP));
		model.addObject("balanceHistory", new Gson().toJson(balancesForGames));
		model.addObject("gameIDs", new Gson().toJson(gameIDs));

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
