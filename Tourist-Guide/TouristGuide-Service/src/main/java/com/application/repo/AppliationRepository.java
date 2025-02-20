package com.application.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.application.model.User;

@Repository
public interface AppliationRepository extends JpaRepository<User, String> {

}
