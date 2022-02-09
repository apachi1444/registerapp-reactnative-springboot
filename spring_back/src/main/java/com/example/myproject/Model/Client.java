package com.example.myproject.Model;
//@Entity annotation indicates that the class is a persistent Java class.
//– @Table annotation provides the table that maps this entity.
//– @Id annotation is for the primary key.
//– @GeneratedValue annotation is used to define generation strategy for the primary key. GenerationType.AUTO means Auto Increment field.
//– @Column annotation is used to define the column in database that maps annotated field.
import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    private  boolean loggedIn;

    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }
    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Client)) return false;
        Client user = (Client) o;
        return Objects.equals(email, user.email) &&
                Objects.equals(password, user.password);
    }
    public boolean equalEmail(String email , String password){
        if ( this.email == email && this.password == password){
            return true ;
        }
        else return false;
    }

    @Override
    public String toString() {
        return "{" +
                "email='" + email+ '\'' +
                ", password='" + password + '\'' + "}";
    }

}
