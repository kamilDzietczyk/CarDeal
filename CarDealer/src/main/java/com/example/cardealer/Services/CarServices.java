package com.example.cardealer.Services;

import com.example.cardealer.Models.Car;
import com.example.cardealer.Models.user;
import com.example.cardealer.Repos.CarRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CarServices {

    @Autowired
    CarRepos carRepos;

    public List<Car> getCarr(){
        return carRepos.findAll();
    }

    public void AddCar (Car car){
        carRepos.save(car);
    }

    public void UpdateCar (Car car){
        carRepos.save(car);
    }

    public void DeleteCar (Integer id){
        carRepos.deleteById(id);
    }

}
