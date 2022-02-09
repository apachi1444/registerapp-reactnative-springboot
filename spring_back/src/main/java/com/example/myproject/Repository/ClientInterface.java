package com.example.myproject.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.myproject.Model.Client;
//Now we can use JpaRepository’s methods: save(), findOne(),
//#findById(), findAll(), count(), delete(), deleteById()… without implementing these methods.
public interface ClientInterface extends JpaRepository<Client, Long> {

}
