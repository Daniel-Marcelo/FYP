package bct.ct413.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import yahoofinance.YahooFinance;
import bct.ct413.jdbc.UserRowMapper;
import bct.ct413.model.Game;
import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;
import bct.ct413.model.User;
import bct.ct413.model.UserGameParticipation;

public class UserDAOImpl implements UserDAO {

	private JdbcTemplate jdbcTemplate;

	@Autowired
	DataSource dataSource;

	/*
	 * public UserDAOImpl() { jdbcTemplate = new JdbcTemplate(dataSource); }
	 */

	/*
	 * private JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
	 */
	@Override
	public void updateBalance(String email, double total, int gameID) {

		// [1] Get existing balance
		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT balance FROM fyp_user_game_participation WHERE email = ? and game_id = ?");
			stmt1.setString(1, email);
			stmt1.setInt(2, gameID);
			ResultSet rs = stmt1.executeQuery();
			rs.next();
			double balance = rs.getDouble("balance");
			System.out.println("Existing balance: " + balance + " - " + total);

			double newBal = balance - total;
			System.out.println("New Balance: " + newBal);

			PreparedStatement stmt2 = conn
					.prepareStatement("UPDATE fyp_user_game_participation SET balance = ? WHERE email = ? AND game_id = ?");
			stmt2.setDouble(1, newBal);
			stmt2.setString(2, email);
			stmt2.setInt(3, gameID);

			stmt2.executeUpdate();

			stmt1.close();
			stmt2.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	@Override
	public void saveNewUser(User user) {
		jdbcTemplate = new JdbcTemplate(dataSource);

		String sql1 = "INSERT INTO fyp_user (email, password, enabled, first_name, last_name, country, balance) VALUES( ?, ?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql1, user.getEmail(), user.getPassword(), true,
				user.getFirstName(), user.getLastName(), user.getCountry(),
				250000);

		String sql2 = "INSERT INTO fyp_user_roles (email, role) VALUES (?, ?)";
		jdbcTemplate.update(sql2, user.getEmail(), "ROLE_USER");

	}

	@Override
	public int isEmailAlreadyInUse(String email) {
		jdbcTemplate = new JdbcTemplate(dataSource);

		String sql = "SELECT count(*) FROM fyp_user WHERE email = ?";
		int count = jdbcTemplate.queryForObject(sql, new Object[] { email },
				Integer.class);

		return count;
	}

	@Override
	public User getUserDetails(String email) {

		jdbcTemplate = new JdbcTemplate(dataSource);

		String sql = "Select * FROM fyp_user WHERE email = ?";
		User user = (User) jdbcTemplate.queryForObject(sql,
				new Object[] { email }, new UserRowMapper());
		return user;
	}

	@Override
	public void updateDetails(User user) {
		jdbcTemplate = new JdbcTemplate(dataSource);

		String sql = "UPDATE fyp_user SET email = ?, password = ?, first_name = ?, last_name = ?,  country=? WHERE email = ?";
		jdbcTemplate.update(sql, user.getEmail(), user.getPassword(),
				user.getFirstName(), user.getLastName(), user.getCountry(),
				user.getEmail());
	}

	@Override
	public void updateUserPassword(String emailAddress, String newPass) {

		jdbcTemplate = new JdbcTemplate(dataSource);

		String sql = "UPDATE fyp_user SET password = ? WHERE email = ?";
		jdbcTemplate.update(sql, newPass, emailAddress);
	}

	@Override
	public double getBalance(String email, int gameID) {

		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("Select balance FROM fyp_user_game_participation WHERE email = ? AND game_id = ?");
			stmt1.setString(1, email);
			stmt1.setInt(2, gameID);
			ResultSet rs = stmt1.executeQuery();

			rs.next();

			double balance = rs.getDouble(1);
			System.out.println("Being retrieved every X seconds: " + balance
					+ " from game: " + gameID + " for user: " + email);
			stmt1.close();
			conn.close();

			System.out.println("\n\nReturning balance for user: " + email
					+ ": " + balance);
			return balance;

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;

	}

	@Override
	public void updateStocksOwned(Trade trade, int quantity) {

		Connection conn;
		try {
			double avgPurchasePrice = updateAvgPurchasePrice(trade);
			
			conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("Select quantity FROM fyp_stock_owned WHERE email = ? AND symbol = ? ");
			stmt1.setString(1, trade.getEmail());
			stmt1.setString(2, trade.getSymbol());

			ResultSet rs = stmt1.executeQuery();

			if (rs.next() == false) {

				PreparedStatement stmt2 = conn
						.prepareStatement("INSERT INTO fyp_stock_owned VALUES (?, ?, ?, ?, ?)");
				stmt2.setInt(1, trade.getGameID());
				stmt2.setString(2, trade.getEmail());
				stmt2.setString(3, trade.getSymbol());
				stmt2.setInt(4, quantity);
				stmt2.setDouble(5, avgPurchasePrice);
				stmt2.execute();
				stmt2.close();
				conn.close();

			} else {
				int oldQuantity = rs.getInt("quantity");
				
				PreparedStatement stmt2 = conn
						.prepareStatement("UPDATE fyp_stock_owned SET quantity = ?, avg_purch_price = ? WHERE email = ? AND symbol = ? AND game_id = ?");
				stmt2.setInt(1, (oldQuantity + quantity));
				stmt2.setDouble(2, avgPurchasePrice);
				stmt2.setString(3, trade.getEmail());
				stmt2.setString(4, trade.getSymbol());
				stmt2.setInt(5, trade.getGameID());
				stmt2.executeUpdate();
				stmt2.close();
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	private double updateAvgPurchasePrice(Trade trade) {
		
		List<Integer> transactionIDs = new ArrayList<Integer>();
		double total = 0;
		int quantity = 0;
		
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn.prepareStatement("SELECT transaction_id FROM fyp_trade WHERE email = ? AND symbol = ? AND game_id = ?");
			stmt1.setString(1, trade.getEmail());
			stmt1.setString(2,  trade.getSymbol());
			stmt1.setInt(3, trade.getGameID());
			
			
			ResultSet rs = stmt1.executeQuery();
			
			while(rs.next())
				transactionIDs.add(rs.getInt("transaction_id"));
			
			
			for(int tID: transactionIDs){
				
				PreparedStatement stmt2 = conn.prepareStatement("SELECT quantity, total FROM fyp_trade_transaction WHERE transaction_id = ?");
				stmt2.setInt(1, tID);
				
				ResultSet rs2 = stmt2.executeQuery();
				
				while (rs2.next()){
					quantity += rs2.getInt("quantity");
					total += rs2.getDouble("total");
				}
			}
			System.out.println("Quantity: "+quantity);
			System.out.println("total: "+total);
			
			double avgPurchPrice = total/ (double)quantity;
			
			return avgPurchPrice;	
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;
	}

	@Override
	public void addToDefaultGame(User newUser) {

		int defaultGameID = 1;
		double defaultCash = 250000;

		Connection conn;
		try {
			conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("INSERT INTO fyp_user_game_participation VALUES (?, ?, ?)");
			stmt1.setInt(1, defaultGameID);
			stmt1.setString(2, newUser.getEmail());
			stmt1.setDouble(3, defaultCash);

			stmt1.execute();

			stmt1.close();
			conn.close();

		} catch (SQLException e) {	e.printStackTrace();
		}

	}

	@Override
	public List<UserGameParticipation> getRelevantGames(String email) {

		List<UserGameParticipation> list = new ArrayList<UserGameParticipation>();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT * FROM fyp_user_game_participation WHERE email = ?");
			stmt1.setString(1, email);

			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				UserGameParticipation details = new UserGameParticipation();
				details.setBalance(rs.getDouble("balance"));
				details.setEmail(rs.getString("email"));
				details.setGameID(rs.getInt("game_id"));

				System.out.println("GAME ID: " + details.getGameID());

				PreparedStatement stmt2 = conn
						.prepareStatement("SELECT game_name, status FROM fyp_game WHERE game_id = ?");
				stmt2.setInt(1, details.getGameID());

				ResultSet rs2 = stmt2.executeQuery();
				rs2.next();
				System.out.println("STATUS: " + rs2.getString("status"));
				if (!rs2.getString("status").equals("Ended")) {

					details.setGameName(rs2.getString("game_name"));
					System.out.println("GAME NAME: " + details.getGameName());
					list.add(details);
				}
			}

			System.out.println("Number of games for user: " + email + ": "
					+ list.size());

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public List<Game> getGamesForUser(User user) {

		List<Game> games = new ArrayList<Game>();
		try {
			Connection conn = dataSource.getConnection();

			PreparedStatement stmt2 = conn
					.prepareStatement("SELECT game_id FROM fyp_user_game_participation WHERE email = ?");
			stmt2.setString(1, user.getEmail());

			ResultSet rs2 = stmt2.executeQuery();

			while (rs2.next()) {
				
				int gameID = rs2.getInt("game_id");
				PreparedStatement stmt1 = conn
						.prepareStatement("SELECT * FROM fyp_game WHERE game_id = ?");
				stmt1.setInt(1, gameID);

				ResultSet rs = stmt1.executeQuery();

				while (rs.next()) {

					Game game = new Game();
					game.setGameID(rs.getInt("game_id"));
					game.setGameName(rs.getString("game_name"));
					game.setGameType(rs.getString("game_type"));
					game.setStartingCash(rs.getDouble("starting_cash"));
					game.setCreatorEmail(rs.getString("creator_email"));
					game.setStartDate((rs.getDate("start_date")).toString());
					game.setEndDate(rs.getDate("end_date").toString());
					game.setStatus(rs.getString("status"));

					if (game.getGameType().equals("Private")) {
						game.setJoinCode(rs.getString("join_code"));
					}
					System.out.println("Join Code: " + game.getJoinCode());
					games.add(game);

					List<User> usersInGame = getListOfUsersInThisGame(game);
					game.setUsersInGame(usersInGame);
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return games;
	}

	private List<User> getListOfUsersInThisGame(Game game) {

		List<User> users = new ArrayList<User>();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT email, balance FROM fyp_user_game_participation WHERE game_id = ?");
			stmt1.setInt(1, game.getGameID());

			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {

				double balance = rs.getDouble("balance");
				String email = rs.getString("email");
				User user = getPersonalDetais(email);
				user.setBalance(balance);
				users.add(user);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return users;
	}

	private User getPersonalDetais(String email) {
		User user = new User();
		try {
			Connection conn = dataSource.getConnection();
			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT first_name, last_name, country FROM fyp_user WHERE email = ?");
			stmt1.setString(1, email);

			ResultSet rs = stmt1.executeQuery();

			while (rs.next()) {
				user.setEmail(email);
				user.setFirstName(rs.getString("first_name"));
				user.setLastName(rs.getString("last_name"));
				user.setCountry(rs.getString("country"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return user;
	}

	@Override
	public List<User> getGlobalRankings() {
		List<User> allUsers = new ArrayList<User>();
		Connection conn;
		try {
			conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT email, balance FROM fyp_user_game_participation WHERE game_id = ?");
			stmt1.setInt(1, 1);
			ResultSet rs = stmt1.executeQuery();
			
			while(rs.next()){
				
				User user = new User();
				user.setEmail(rs.getString("email"));
				
				user = getPersonalDetais(user.getEmail());
				user.setBalance(rs.getDouble("balance"));
				allUsers.add(user);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return allUsers;
	}

	@Override
	public List<StockOwned> getStocksOwned(String activeUserEmail) {
		
		List<StockOwned> stocksOwned = new ArrayList<StockOwned>();
		
		try {
			Connection conn = dataSource.getConnection();
			
			PreparedStatement stmt1 = conn
					.prepareStatement("SELECT game_id, symbol, quantity, avg_purch_price FROM fyp_stock_owned WHERE email = ?");
			stmt1.setString(1, activeUserEmail);
			ResultSet rs = stmt1.executeQuery();
			
			while(rs.next()){
				StockOwned stockOwned = new StockOwned();
				stockOwned.setEmail(activeUserEmail);
				stockOwned.setGameID(rs.getInt("game_id"));
				stockOwned.setQuantity(rs.getInt("quantity"));
				stockOwned.setSymbol(rs.getString("symbol"));
				stockOwned.setAvgPurchPrice(rs.getDouble("avg_purch_price"));

				
				
				yahoofinance.Stock stock = YahooFinance.get(stockOwned.getSymbol());

				stockOwned.setCurrentPrice(stock.getQuote().getPrice().doubleValue());
				stockOwned.setTotal(stockOwned.getCurrentPrice() * (double) stockOwned.getQuantity());
				stockOwned.setGainOrLoss(stockOwned.getTotal()-stockOwned.getAvgPurchPrice()*(double)stockOwned.getQuantity());
				stockOwned.setCompanyName(stock.getName());

				
				System.out.println("Symbol: "+stockOwned.getCompanyName()+ "\nWith the current price: "+ stockOwned.getCurrentPrice()+" and quantity: "+stockOwned.getQuantity()+" the total is: "+stockOwned.getTotal());
				System.out.println("The avg purch price is: "+stockOwned.getAvgPurchPrice()+" with the same quantity equals a total of: "+(stockOwned.getAvgPurchPrice()*(double)stockOwned.getQuantity()));
				
				stocksOwned.add(stockOwned);
			}
		}catch(SQLException e){
			e.printStackTrace();
		}
		return stocksOwned;
	}

}
