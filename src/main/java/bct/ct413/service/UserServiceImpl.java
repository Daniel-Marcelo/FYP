package bct.ct413.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import bct.ct413.dao.UserDAO;
import bct.ct413.model.User;

public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;
	
	
	@Override
	public boolean isEmailAlreadyInUse(String email){
		User user = userDAO.get(email);
		if(user.getEmail() == null)
			return false;
		else 
			return true;
	}


	@Override
	public Set<String> getOtherEmails(String email) {

		Set<String> emails = new HashSet<String>();
		List<User> users = userDAO.get();
		
		for(User user : users){
			if(!email.equals(user.getEmail()))
				emails.add(user.getEmail());
		}
		return emails;
	}


	@Override
	public String getPassword(String email) {

		User user = userDAO.get(email);
		return user.getPassword();
	}
	
	
}
