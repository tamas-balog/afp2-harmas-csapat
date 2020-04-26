package io.github.eperatis.core.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.Collection;

@Entity
@Table(name = "pizzas")
@Transactional
@Getter @Setter @NoArgsConstructor
public class Pizza {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private int price;
    @ManyToMany(cascade = { CascadeType.MERGE })
    @JoinTable(
        name = "pizza_ingredient",
        joinColumns = @JoinColumn (name = "pizza_id"),
        inverseJoinColumns = @JoinColumn (name = "ingredient_id"))
    private Collection<Ingredient> ingredients;
    @ManyToMany(mappedBy = "pizzas")
    @JsonIgnore
    private Collection<Order> orders;
}
