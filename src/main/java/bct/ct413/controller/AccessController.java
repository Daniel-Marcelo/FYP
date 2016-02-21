package bct.ct413.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import bct.ct413.dao.UserDAO;
import bct.ct413.model.User;

import com.google.gson.Gson;


@Controller
public class AccessController {
	
	
	@Autowired
	private UserDAO userDAO;
	
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,
	  @RequestParam(value = "logout", required = false) String logout, 
          HttpServletRequest request) {

		ModelAndView model = new ModelAndView();
		if (error != null) {
			model.addObject("error", "Invalid username and password!");

		}

		if (logout != null) {
			model.addObject("msg", "You've been logged out successfully.");
		}
		model.setViewName("LoginForm");
		User user = new User();
		model.addObject("user", user);
		return model;

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
		userDAO.saveNewUser(newUser);
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

}
