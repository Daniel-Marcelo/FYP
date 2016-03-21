package bct.ct413.dao;

import java.util.List;

import bct.ct413.model.UserGameAccountValHistory;

public interface UserGameAccountValHistoryDAO {

	void insert(int gameID, double startingCash, String email);

	List<UserGameAccountValHistory> get(String email);

	void update(String currentEmail, String newEmail);

	void remove(int gameID);

	void remove(int gameID, String email);

	void remove(String email);

}
