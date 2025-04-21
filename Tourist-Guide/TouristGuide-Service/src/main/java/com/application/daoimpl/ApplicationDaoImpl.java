package com.application.daoimpl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.dao.ApplicationDao;
import com.application.model.User;
import com.application.repo.AppliationRepository;

@Service
public class ApplicationDaoImpl implements ApplicationDao {

	@Autowired
	AppliationRepository appliationRepository;
	
	
	private static final Logger logHelper = LoggerFactory.getLogger(ApplicationDaoImpl.class);


	@Override
	public boolean createUser(User user) {

		boolean flag = false;

		try {
			User save = appliationRepository.save(user);

			if (null != save)
				flag = true;
		} catch (Exception e) {

			e.printStackTrace();
			return false;
		}

		return flag;
	}

	@Override
	public boolean updateUser(User user, String id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public User getUser(String userName) {
		logHelper.info("============== userName" + userName);
		Optional<User> user = null;
		try {
			user = appliationRepository.findById(userName);

			if (user.isPresent())
				return user.get();
		} catch (Exception e) {
			logHelper.error("getUser || Data Not Found: " + e.getMessage());
			return null;
		}

		return null;
	}

}
