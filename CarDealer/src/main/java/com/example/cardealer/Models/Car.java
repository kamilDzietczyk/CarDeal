package com.example.cardealer.Models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String brand;
    String model;
    int car_price;
    int year_of_prod;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getCar_price() {
        return car_price;
    }

    public void setCar_price(int car_price) {
        this.car_price = car_price;
    }

    public int getYear_of_prod() {
        return year_of_prod;
    }

    public void setYear_of_prod(int year_of_prod) {
        this.year_of_prod = year_of_prod;
    }
}
