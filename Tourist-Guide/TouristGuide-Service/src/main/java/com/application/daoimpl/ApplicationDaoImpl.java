package com.application.daoimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.dao.ApplicationDao;
import com.application.model.User;
import com.application.repo.AppliationRepository;

@Service
public class ApplicationDaoImpl implements ApplicationDao {

	@Autowired
	AppliationRepository appliationRepository;

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

}
