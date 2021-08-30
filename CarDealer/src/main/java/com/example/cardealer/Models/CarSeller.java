package com.example.cardealer.Models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;


@Entity(name = "sellercar")
public class CarSeller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id_sller_car;
    String brand;
    String model;
    long price;
    long vin_number;
    String sale_date;
    int year_of_prod;
    int owner_id;

    public String getSale_date() {
        return sale_date;
    }

    public void setSale_date(String sale_date) {
        this.sale_date = sale_date;
    }

    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    public int getYear_of_prod() {
        return year_of_prod;
    }

    public void setYear_of_prod(int year_of_prod) {
        this.year_of_prod = year_of_prod;
    }

    public int getId_sller_car() {
        return id_sller_car;
    }

    public void setId_sller_car(int id_sller_car) {
        this.id_sller_car = id_sller_car;
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

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public long getVin_number() {
        return vin_number;
    }

    public void setVin_number(long vin_number) {
        this.vin_number = vin_number;
    }
}
