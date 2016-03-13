package bct.ct413.dao;

import bct.ct413.model.User;

public interface UserRolesDAO {

	void insert(User newUser);

	void update(String currentEmail, String newEmail);

}
