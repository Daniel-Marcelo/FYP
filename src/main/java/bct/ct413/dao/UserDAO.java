package bct.ct413.dao;


import java.util.List;

import bct.ct413.model.User;


public interface UserDAO {

	void insert(User user);
	List<User> get();
	User get(String email);
	void update(User existingUser);
	void update(String emailAddress, String newPass);
	void remove(String email);
	List<User> getList(List<String> emails);
	void delete(String currentEmail);
	
	double getBalance(String email, int gameID);


}
