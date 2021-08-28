package com.example.cardealer.Repos;

import com.example.cardealer.Models.TempId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TempIdRepos extends JpaRepository<TempId,Integer> {
}
