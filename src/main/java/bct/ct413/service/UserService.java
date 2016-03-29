package bct.ct413.service;

import java.util.Set;

public interface UserService {

	boolean isEmailAlreadyInUse(String email);

	Set<String> getOtherEmails(String email);

}
