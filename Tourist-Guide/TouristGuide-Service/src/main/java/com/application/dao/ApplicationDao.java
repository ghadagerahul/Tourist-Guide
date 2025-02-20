package com.application.dao;

import org.springframework.stereotype.Component;

import com.application.model.User;

@Component
public interface ApplicationDao {

	public boolean createUser(User user);

	public boolean updateUser(User user, String id);

}
