package io.github.eperatis.core.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "ingredients")
@Getter @Setter @NoArgsConstructor
public class Ingredient {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "ingredients")
    @JsonIgnore
    private Collection<Pizza> pizzas;
}
