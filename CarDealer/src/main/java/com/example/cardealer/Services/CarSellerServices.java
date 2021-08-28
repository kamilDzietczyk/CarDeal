package com.example.cardealer.Services;

import com.example.cardealer.Models.CarSeller;
import com.example.cardealer.Repos.CarSellerRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CarSellerServices {

    @Autowired
    CarSellerRepos carSellerRepos;

    public List<CarSeller> getSellerCarr(){
        return carSellerRepos.findAll();
    }

    public void AddSellerCar (CarSeller carSeller){
        carSellerRepos.save(carSeller);
    }
}
