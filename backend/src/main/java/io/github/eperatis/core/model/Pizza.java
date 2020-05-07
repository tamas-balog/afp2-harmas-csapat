package io.github.eperatis.core.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity(name = "Pizza")
@Table(name = "pizzas")
@Getter @Setter @NoArgsConstructor
public class Pizza {
    public Pizza(Long id) {
        this.id = id;
    }

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private int price;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
        name = "pizza_ingredient",
        joinColumns = @JoinColumn (name = "pizza_id"),
        inverseJoinColumns = @JoinColumn (name = "ingredient_id"))
    private Collection<Ingredient> ingredients;

    @OneToMany(
        mappedBy = "pizza",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    @JsonIgnore
    private Collection<OrderPizza> orders;
}
