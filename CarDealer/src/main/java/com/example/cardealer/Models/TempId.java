package com.example.cardealer.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "temporaryid")
public class TempId {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int idtemporary_Id;
    int temp_Id;

    public int getIdtemporary_Id() {
        return idtemporary_Id;
    }

    public void setIdtemporary_Id(int idtemporary_Id) {
        this.idtemporary_Id = idtemporary_Id;
    }

    public int getTemp_Id() {
        return temp_Id;
    }

    public void setTemp_Id(int temp_Id) {
        this.temp_Id = temp_Id;
    }
}
