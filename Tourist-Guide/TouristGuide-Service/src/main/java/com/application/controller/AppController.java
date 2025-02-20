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
import com.application.model.User;

@RestController
@RequestMapping("/app")
@CrossOrigin(origins = "http://localhost:4200")
public class AppController {

	private static final Logger logger = LoggerFactory.getLogger(AppController.class);

	@Autowired(required = true)
	ApplicationDao applicationDao;
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody User user) {

		System.out.println("user: " + user);
		logger.info("========user: " + user.toString());
		System.out.println("registerUser() :: Calliedd...!!!!!!");

		applicationDao.createUser(user);
		
		ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.OK);
		return responseEntity;
	}

	@GetMapping("/register")
	public String registerUser1() {

		System.out.println("registerUser() :: Calliedd...!!!!!!");

		return "Welcome..!!!";
	}
	
	

}
