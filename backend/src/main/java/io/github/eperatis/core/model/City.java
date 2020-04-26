package io.github.eperatis.core.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Getter @Setter @NoArgsConstructor
public class City {

    @Id
    private Long postalCode;

    private String name;

//    @OneToMany(mappedBy = "city")
//    @JsonIgnore
//    Collection<Customer> customers;
}
