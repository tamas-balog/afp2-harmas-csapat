package io.github.eperatis.core.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "staff")
@NoArgsConstructor
public class Employee {
    @Id
    @GeneratedValue
    private Integer id;

    private int positionCode;
    public int getPositionCode() { return positionCode; }
    public void setPositionCode(int positionCode) { this.positionCode = positionCode; }

    private String firstName;
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    private String lastName;
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    private String email;
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    private String phoneNumber;
    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    private String password;
    public void setPassword(String password) { this.password = password; }
    public String getPassword() { return this.password; }
}
