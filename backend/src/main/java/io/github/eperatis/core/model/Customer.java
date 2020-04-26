package io.github.eperatis.core.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "customers")
@Getter @Setter @NoArgsConstructor
public class Customer {

    @Id
    @GeneratedValue
    private Long id;

    private String firstName;

    private String lastName;

//    @ManyToOne
//    @JoinColumn(name = "city_id")
//    private City city;

    private int postalCode;

    private String street;

    private String streetNumber;

    private String phoneNumber;

    private String comments;

    @OneToOne(cascade = CascadeType.PERSIST, mappedBy = "customer")
    @JsonIgnore
    private Order order;
}
