package com.example.cardealer.Repos;

import com.example.cardealer.Models.CarSeller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarSellerRepos extends JpaRepository<CarSeller,Integer> {

}
