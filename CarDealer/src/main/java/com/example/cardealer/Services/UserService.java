package com.example.cardealer.Services;

import com.example.cardealer.Models.user;
import com.example.cardealer.Repos.UserRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepos userRepos;

    public List<user> getUser(){
        return userRepos.findAll();
    }

    public void AddUser (user user){
        userRepos.save(user);
    }

    public void UpdateUser (user user){
        userRepos.save(user);
    }

    public void DeleteUser (Integer id){
        userRepos.deleteById(id);
    }



}
