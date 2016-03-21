package bct.ct413.controller;


import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.RememberMeAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

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
import bct.ct413.service.GameService;
import bct.ct413.service.StockOwnedService;
import bct.ct413.service.TradeService;
import bct.ct413.service.TradeTransactionService;
import bct.ct413.service.UserGameParticipationService;
import bct.ct413.service.UserService;

import com.google.gson.Gson;


@Controller
public class AccessController {

	@Autowired
	private TradeDAO tradeDAO;

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private GameDAO gameDAO;

	@Autowired
	private StockOwnedDAO stockOwnedDAO;

	@Autowired
	private TradeTransactionDAO tradeTransactionDAO;

	@Autowired
	private StockOnWatchDAO stockOnWatchDAO;

	@Autowired
	private UserGameParticipationDAO userGameParticipationDAO;
	
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
	private UserService userService;
	
	@Autowired
	private TradeService tradeService;
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,
	  @RequestParam(value = "logout", required = false) String logout, HttpServletRequest request) {
		
		String targetUrl = getRememberMeTargetUrlFromSession(request);
		ModelAndView model = new ModelAndView("LoginForm");
		
		if (error != null) {
			model.addObject("error", "Invalid username and password!");
			
			//login form for update, if login error, get the targetUrl from session again.
			if(StringUtils.hasText(targetUrl)){
				System.out.println("IN THIS IF LOOP");
				model.addObject("targetUrl", targetUrl);
				model.addObject("loginUpdate", true);
			}
			
		}

		if(targetUrl.equals("/removeUserAdmin"))
			model.addObject("loginUpdate", true);

		if (logout != null) 
			model.addObject("msg", "You've been logged out successfully.");
		
		model.addObject("user", new User());
		return model;
	}
	
	@RequestMapping(value = "/admin**", method = RequestMethod.GET)
	public ModelAndView adminPage() {
		return new ModelAndView("admin");
	}
	
	@RequestMapping(value = "/removeUserAdmin", method = RequestMethod.GET)
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
			session.setAttribute("targetUrl", "/removeUserAdmin");
		}
	}
	
	/**
	 * get targetURL from session
	 */
	private String getRememberMeTargetUrlFromSession(HttpServletRequest request){
		String targetUrl = "";
		HttpSession session = request.getSession(false);
		if(session!=null){
			targetUrl = session.getAttribute("targetUrl")==null?"":session.getAttribute("targetUrl").toString();
		}
		return targetUrl;
	}
	
	@RequestMapping(value="/loginfailed", method = RequestMethod.GET)
	public String loginerror(ModelMap model) {
 
		model.addAttribute("error", "true");
		return "login";
 
	}
	
/*	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public String logout(ModelMap model) {
 
		return "LoginForm";
	}*/
	
/*	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView newUser(ModelAndView model) {

		model.addObject("newReg", new User());
		model.setViewName("RegistrationForm");
		return model;
	}*/
	
/*	@RequestMapping(value = "/loginForm", method = RequestMethod.GET)
	public ModelAndView userLogin(ModelAndView model) {

		
		model.addObject("newLogin", new User());
		model.setViewName("LoginForm");
		return model;
	}*/
	
	@RequestMapping(value = "/saveUser", method = RequestMethod.POST)
	public ModelAndView saveUser(@ModelAttribute User newUser) {
		
		Game game = gameDAO.get(1);

		userDAO.insert(newUser);
		userRolesDAO.insert(newUser);
		userGameParticipationDAO.addToGame(game, newUser.getEmail());
		userGameAccountValHistoryDAO.insert(game.getGameID(), game.getStartingCash(), newUser.getEmail());
		
		//userDAO.addToDefaultGame(newUser);
				
		return new ModelAndView("redirect:/home");
	}
	
    @RequestMapping(value = "checkIfEmailAlreadyUsed/{uemail:.+}", method = RequestMethod.GET)
    public @ResponseBody String getEmailsOfRegisteredUsers(@PathVariable String uemail) {
    	
    	int count = 0;
    	if(userService.isEmailAlreadyInUse(uemail) == true)
    		count = 1;
		return new Gson().toJson(count);
    }
    
    
    @RequestMapping(value = "deleteUser/{email:.+}", method = RequestMethod.GET)
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

}
