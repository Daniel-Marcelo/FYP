package bct.ct413.controller;


import java.util.Random;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import bct.ct413.dao.GameDAO;
import bct.ct413.dao.UserDAO;
import bct.ct413.dao.UserGameAccountValHistoryDAO;
import bct.ct413.dao.UserGameParticipationDAO;
import bct.ct413.dao.UserRolesDAO;
import bct.ct413.model.Game;
import bct.ct413.model.User;
import bct.ct413.service.UserService;


@Controller
public class AccessController {

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private GameDAO gameDAO;

	@Autowired
	private UserGameParticipationDAO userGameParticipationDAO;
	
	@Autowired
	private UserGameAccountValHistoryDAO userGameAccountValHistoryDAO;
	
	@Autowired
	private UserRolesDAO userRolesDAO;
			
	@Autowired
	private UserService userService;
	
	@Autowired
	private JavaMailSender mailSender;
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,
	  @RequestParam(value = "logout", required = false) String logout, @RequestParam(value = "change-success", required = false) String passwordChange, HttpServletRequest request) {
		
		
//		/String targetUrl = getRememberMeTargetUrlFromSession(request);
		ModelAndView model = new ModelAndView("login");
		
		if (error != null) {
			model.addObject("error", "Invalid username and password!");
			
/*			//login form for update, if login error, get the targetUrl from session again.
			if(StringUtils.hasText(targetUrl)){
				model.addObject("targetUrl", targetUrl);
				model.addObject("loginUpdate", true);
			}*/
			
		}
		if(passwordChange!=null){
			model.addObject("passwordConfirmation", "Please Login With New Details");
		}

/*		if(targetUrl.equals("/admin-remove-user"))
			model.addObject("loginUpdate", true);*/

		if (logout != null) 
			model.addObject("msg", "You've been logged out successfully.");
		
		model.addObject("user", new User());
		return model;
	}
	
	@RequestMapping(value = "/updating-password", method = RequestMethod.POST)
	public ModelAndView updatingPassword(@RequestParam("oldPassword") String oldPassword, @RequestParam("newPassword") String newPassword, HttpServletRequest request){
		
		String email = getActiveUserEmail();
		String hashedOldPassword = userService.getPassword(email);
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		if(encoder.matches(oldPassword, hashedOldPassword)){
			System.out.println("Correct Password Entered");
			String hashedNewPassword = encoder.encode(newPassword);
			userDAO.updatePassword(email, hashedNewPassword);
		}else{
			return new ModelAndView("redirect:/account?password-error");		
		}
		
		new SecurityContextLogoutHandler().logout(request, null, null);
		
		ModelAndView model = new ModelAndView("redirect:/login?change-success");
		return model;
		
	}

	
	@RequestMapping(value = "/sending-password-email", method = RequestMethod.POST)
	public ModelAndView sendingEmail(@RequestParam("email") String emailAddress) {

		if(userDAO.get(emailAddress).getFirstName() == null){
			System.out.println("This is not a user");
			return new ModelAndView("redirect:/forgot-password?invalid-email");
		}else{
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
	
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			String hashedPassword = passwordEncoder.encode(newPass);
			
			// sends the e-mail
			mailSender.send(email);
			userDAO.update(emailAddress, hashedPassword);
	
			return new ModelAndView("redirect:/login");
		}
	}
		
/*	*//**
	 * get targetURL from session
	 *//*
	private String getRememberMeTargetUrlFromSession(HttpServletRequest request){
		String targetUrl = "";
		HttpSession session = request.getSession(false);
		if(session!=null){
			targetUrl = session.getAttribute("targetUrl")==null?"":session.getAttribute("targetUrl").toString();
		}
		return targetUrl;
	}*/
	
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView newUser(ModelAndView model, @RequestParam(value = "email-taken", required = false) String emailTaken) {

		if(emailTaken!=null)
			model.addObject("emailTaken", "This Email Is Already In Use");
		
		model.addObject("user", new User());
		model.setViewName("register");
		return model;
	}
	
	@RequestMapping(value = "/forgot-password", method = RequestMethod.GET)
	public ModelAndView forgotPass( @RequestParam(value = "invalid-email", required = false) String invalidEmail) {
		
		if(invalidEmail != null){
			System.out.println("Invalid email");
			return new ModelAndView("forgot-password").addObject("msg", "Invalid email entered");
		}
		return new ModelAndView("forgot-password");
	}
	
	@RequestMapping(value = "/save-user", method = RequestMethod.POST)
	public ModelAndView saveUser(@ModelAttribute User newUser) {
		
		Set<String> emails = userService.getOtherEmails(" ");
		boolean isInUse = false;
		
		for(String email: emails)
			if(newUser.getEmail().equals(email))
				isInUse = true;
		
		if(!isInUse){
			Game game = gameDAO.get(1);
			String password = newUser.getPassword();
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			String hashedPassword = passwordEncoder.encode(password);
			
			newUser.setPassword(hashedPassword);
			userDAO.insert(newUser);
			userRolesDAO.insert(newUser);
			userGameParticipationDAO.addToGame(game, newUser.getEmail());
			userGameAccountValHistoryDAO.insert(game.getGameID(), game.getStartingCash(), newUser.getEmail());
			
			//userDAO.addToDefaultGame(newUser);
					
			return new ModelAndView("redirect:/games");
		}else{
			
			return new ModelAndView("redirect:/register?email-taken");
		}
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
	}
	
	public String getActiveUserEmail() {

		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();
		return auth.getName();
	}
}
