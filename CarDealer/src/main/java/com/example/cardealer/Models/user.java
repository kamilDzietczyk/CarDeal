package com.example.cardealer.Models;

import javax.persistence.*;

@Entity(name = "user")
public class user {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String login;
    String password;
    String email;
}
