package com.example.cardealer.Controllers;

import com.example.cardealer.Models.CarSeller;
import com.example.cardealer.Repos.CarSellerRepos;
import com.example.cardealer.Services.CarSellerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarSellerController {

    @Autowired
    private CarSellerServices carSellerServices;

    @GetMapping("/carSeller")
    public List<CarSeller> getCar(){
        return carSellerServices.getSellerCarr();
    }

    @PostMapping("/carSeller/add")
    public void addCar(@RequestBody CarSeller carSeller){
        carSellerServices.AddSellerCar(carSeller);
    }
}
