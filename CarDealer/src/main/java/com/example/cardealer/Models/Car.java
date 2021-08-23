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
    long car_price;
    long year_of_prod;
    long vin_number;
    int owner_id;

    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    public long getCar_price() {
        return car_price;
    }

    public void setCar_price(long car_price) {
        this.car_price = car_price;
    }

    public long getYear_of_prod() {
        return year_of_prod;
    }

    public void setYear_of_prod(long year_of_prod) {
        this.year_of_prod = year_of_prod;
    }

    public long getVin_number() {
        return vin_number;
    }

    public void setVin_number(long vin_number) {
        this.vin_number = vin_number;
    }

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
}
