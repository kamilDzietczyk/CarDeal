package com.example.cardealer.Services;

import com.example.cardealer.Models.TempId;
import com.example.cardealer.Models.user;
import com.example.cardealer.Repos.TempIdRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TempIdServices {

    @Autowired
    TempIdRepos tempIdRepos;

    public List<TempId> getTempId(){
        return tempIdRepos.findAll();
    }

    public void UpdateTempId (TempId tempId){
        tempIdRepos.save(tempId);
    }

}
