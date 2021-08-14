package com.example.cardealer.Controllers;

import com.example.cardealer.Models.Car;
import com.example.cardealer.Services.CarServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {

    @Autowired
    private CarServices carServices;

    @GetMapping("/car")
    public List<Car> getCar(){
        return carServices.getCarr();
    }

    @PostMapping("/car/add")
    public void addCar(@RequestBody Car car){
        carServices.AddCar(car);
    }

    @PutMapping("/car/{id}/edit")
    public void updateCar(@PathVariable("id") Integer id, @RequestBody Car car){
        carServices.UpdateCar(car);
    }

    @DeleteMapping("/car/{id}/delete")
    public void deleteCar(@PathVariable("id") Integer id){
        carServices.DeleteCar(id);
    }
}
