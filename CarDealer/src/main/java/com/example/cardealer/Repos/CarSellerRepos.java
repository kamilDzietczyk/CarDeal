package com.example.cardealer.Repos;

import com.example.cardealer.Models.CarSeller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarSellerRepos extends JpaRepository<CarSeller,Integer> {

}
