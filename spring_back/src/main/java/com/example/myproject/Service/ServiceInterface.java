package com.example.myproject.Service;

import com.example.myproject.Model.Client;
import java.util.List;




public interface ServiceInterface {
    public Client saveClient(Client client);
    public List<Client> getAllClients();
    public Client getClient(Client client);
    public Client updateClient(Long id ,Client client);
}
