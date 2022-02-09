package com.example.myproject.Controller;


import com.example.myproject.Model.Client;
import com.example.myproject.Service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:19006")
@RestController
@RequestMapping(value ="/api" ,  method = {RequestMethod.GET, RequestMethod.POST})
public class Controller {

    @Autowired
    private Service clientService;
    @PostMapping("/add")
    public String add(@RequestBody Client client){
        System.out.println(client.toString());
        if(clientService.saveClient(client) == null ) return "User Already Exists";
        return "Registration Done With Succes !";
    }

    @GetMapping("/getAll")
    public List<Client> getAllClients(){
        return clientService.getAllClients();
    }

    @PostMapping ("/getClient")
    public Client getClient( @RequestBody(required = true) Client client){
        return clientService.getClient(client);
    }

    @PutMapping("/updateProfile/{id}")
    public Client updateClient(@PathVariable Long id , @RequestBody Client client){
        return clientService.updateClient(id,client);
    }

    @PutMapping("/updatePassword/{id}")
    public Client updatePassword(@PathVariable Long id , @RequestBody Client client){
        return clientService.updateClient(id,client);
    }
}
