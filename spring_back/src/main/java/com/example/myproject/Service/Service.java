package com.example.myproject.Service;
import com.example.myproject.Repository.ClientInterface;
import com.example.myproject.Model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.List;

@SpringBootApplication
public class Service implements ServiceInterface {
    @Autowired
    private ClientInterface clientRepository;

    @Override
    public Client saveClient(Client client) {
        List<Client> clients = clientRepository.findAll();
        for ( Client client_iterator : clients ){
            if ( client_iterator.equals(client)){
                return null;
            }
        }
        return clientRepository.save(client);
    }


    @Override
    public List<Client> getAllClients() {return clientRepository.findAll();
    }


    @Override
    public Client getClient(Client client) {
        List<Client> items = clientRepository.findAll();
        for ( Client iterator : items){
            if ( client.getPassword().equals(iterator.getPassword()) && client.getEmail().equals(iterator.getEmail())){
                iterator.setLoggedIn(true);
                return iterator;
            }
        }
        return null;
    }

    @Override
    public Client updateClient(Long id ,Client client){
        List<Client> items = clientRepository.findAll();
        for ( Client iterator : items){
            if ( client.getId()==iterator.getId() ){
                iterator.setLastname(client.getLastname());
                iterator.setName(client.getName());
                iterator.setPassword(client.getPassword());
                clientRepository.save(iterator);
                return iterator;
            }
        }
        return null;
    }
}
