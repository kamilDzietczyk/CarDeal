package com.example.cardealer.Repos;

import com.example.cardealer.Models.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepos extends JpaRepository<user, Integer> {

}
