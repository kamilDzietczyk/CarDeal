package com.example.cardealer.Controllers;
import com.example.cardealer.Models.user;
import com.example.cardealer.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<user> getUsers(){
        return userService.getUser();
    }

    @PostMapping("/users/add")
    public void addUser(@RequestBody user user){
        userService.AddUser(user);
    }

    @PutMapping("/users/{id}/edit")
    public void updateUser(@PathVariable("id") Integer id, @RequestBody user user){
        userService.UpdateUser(user);
    }

    @DeleteMapping("/users/{id}/delete")
    public void deleteUser(@PathVariable("id") Integer id){
        userService.DeleteUser(id);
    }


}
