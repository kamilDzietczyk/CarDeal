package com.example.cardealer.Controllers;

import com.example.cardealer.Models.TempId;
import com.example.cardealer.Models.user;
import com.example.cardealer.Services.TempIdServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TempIdController {

    @Autowired
    private TempIdServices tempIdServices;

    @GetMapping("/tempId")
    public List<TempId> getUsers(){
        return tempIdServices.getTempId();
    }

    @PutMapping("/tempId/{id}/edit")
    public void updateUser(@PathVariable("id") Integer id, @RequestBody TempId tempId){
        tempIdServices.UpdateTempId(tempId);
    }
}
