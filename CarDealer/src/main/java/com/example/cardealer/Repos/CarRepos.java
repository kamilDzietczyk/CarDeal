package com.example.cardealer.Repos;


import com.example.cardealer.Models.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepos extends JpaRepository<Car,Integer> {

}
