package bct.ct413.service;

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
}
