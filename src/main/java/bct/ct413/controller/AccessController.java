package bct.ct413.controller;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
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
import bct.ct413.dao.TradeDAO;
import bct.ct413.dao.UserDAO;
import bct.ct413.dao.UserRolesDAO;
import bct.ct413.model.User;

import com.google.gson.Gson;


@Controller
public class AccessController {
	
	
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private GameDAO gameDAO;
	
	@Autowired
	private TradeDAO tradeDAO;
	
	@Autowired
	private UserRolesDAO userRolesDAO;
	
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,
	  @RequestParam(value = "logout", required = false) String logout, 
          HttpServletRequest request) {
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
		System.out.println("Target URL: "+targetUrl);

		if(targetUrl.equals("/removeUserAdmin"))
			model.addObject("loginUpdate", true);


		if (logout != null) 
			model.addObject("msg", "You've been logged out successfully.");
		

		model.addObject("user", new User());
		return model;

	}
	
	@RequestMapping(value = "/admin**", method = RequestMethod.GET)
	public ModelAndView adminPage() {

		ModelAndView model = new ModelAndView("admin");
/*		model.addObject("title", "Spring Security Remember Me");
		model.addObject("message", "This page is for ROLE_ADMIN only!");*/

		return model;

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
	
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	public String logout(ModelMap model) {
 
		return "LoginForm";
	}
	
	
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView newUser(ModelAndView model) {

		
		User newUser = new User();
		model.addObject("newReg", newUser);
		model.setViewName("RegistrationForm");
		return model;
	}
	
	@RequestMapping(value = "/loginForm", method = RequestMethod.GET)
	public ModelAndView userLogin(ModelAndView model) {
		
		User newUser = new User();
		model.addObject("newLogin", newUser);
		model.setViewName("LoginForm");
		return model;
	}
	
	
	@RequestMapping(value = "/saveUser", method = RequestMethod.POST)
	public ModelAndView saveUser(@ModelAttribute User newUser) {
		userDAO.insert(newUser);
		userRolesDAO.insert(newUser);
		userDAO.addToDefaultGame(newUser);
				
		return new ModelAndView("redirect:/home");
	}
	
    @RequestMapping(value = "checkIfEmailAlreadyUsed/{uemail:.+}", method = RequestMethod.GET)
    public @ResponseBody String getEmailsOfRegisteredUsers(@PathVariable String uemail) {
 
    	int count = userDAO.isEmailAlreadyInUse(uemail);
    	
		Gson gson = new Gson();
		String json = gson.toJson(count);
		return json;
    }
    
    
    @RequestMapping(value = "deleteUser/{email:.+}", method = RequestMethod.GET)
    public @ResponseBody String deleteUser(@PathVariable String email){
    	
    	userDAO.removeFromUserRoles(email);
    	List<Integer> gameIDs = userDAO.getGameIDsCreatedByUser(email);
    	
    	//Removing games created by user
    	for(int gameID: gameIDs){
	    	gameDAO.removeGameFromStockOwned(gameID);
	    	gameDAO.removeGameTrades(gameID);
	    	gameDAO.removeFromGameAccountHistory(gameID);
	    	gameDAO.removeFromUserGameParticipation(gameID);
	    	gameDAO.removeFromGameTable(gameID);
    	}
    	
    	gameDAO.removeGameFromStockOwned(email);
    	gameDAO.removeFromStocksOnWatch(email);
    	tradeDAO.removeTrades(email);
    	gameDAO.removeFromGameAccountHistory(email);
    	gameDAO.removeFromUserGameParticipation(email);
    	userDAO.removeFromUserTable(email);
    	userDAO.removeFromPersistentLogin(email);
    	
    	return email+ "removed from application";
    }

}
