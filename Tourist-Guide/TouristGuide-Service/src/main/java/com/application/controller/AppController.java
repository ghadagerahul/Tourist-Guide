package com.application.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.dao.ApplicationDao;
import com.application.model.LoginDomain;
import com.application.model.User;

@RestController
@RequestMapping("/app")
@CrossOrigin(origins = "http://localhost:4200")
public class AppController<flag> {

	private static final Logger logger = LoggerFactory.getLogger(AppController.class);

	@Autowired(required = true)
	ApplicationDao applicationDao;

	@SuppressWarnings("unchecked")
	@PostMapping("/register")
	public ResponseEntity<Boolean> registerUser(@RequestBody User user) {

		System.out.println("user: " + user);
		logger.info("========user: " + user.toString());
		System.out.println("registerUser() :: Calliedd...!!!!!!");

		User userFromDB = applicationDao.getUser(user.getUserName());
		Boolean flag = false;
		if (null == userFromDB) {
			flag = applicationDao.createUser(user);
		} else
			logger.error("user Already Created..!!!");

		return (ResponseEntity<Boolean>) new ResponseEntity<flag>(HttpStatus.OK);

	}

	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody LoginDomain loginDomain) {
		logger.warn("Login request username or password.");
		if (loginDomain == null || loginDomain.getUserName() == null || loginDomain.getPassword() == null) {
			logger.warn("Login request is missing username or password.");
			return ResponseEntity.badRequest().body("Invalid login credentials.");
		}

		logger.info("Attempting login for user: {}", loginDomain.getUserName());

		User user;
		try {
			user = applicationDao.getUser(loginDomain.getUserName());
		} catch (Exception e) {
			logger.error("Error retrieving user from database: {}", e.getMessage(), e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Server error during login.");
		}

		if (user == null) {
			logger.warn("User not found: {}", loginDomain.getUserName());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found.");
		}

		if (!user.getPassword().equals(loginDomain.getPassword())) {
			logger.warn("Invalid password for user: {}", loginDomain.getUserName());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
		}

		logger.info("Login successful for user: {}", loginDomain.getUserName());
		return ResponseEntity.ok("Login successful.");
	}

	@GetMapping("/registerTest")
	public String registerUser1() {

		System.out.println("registerUser() :: Calliedd...!!!!!!");

		return "Welcome..!!!";
	}

}
