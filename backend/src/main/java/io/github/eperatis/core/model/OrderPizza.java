package io.github.eperatis.core.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "OrderPizza")
@Getter @Setter @NoArgsConstructor
@Table(name = "order_pizza")
public class OrderPizza {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pizza_id", referencedColumnName = "id")
    private Pizza pizza;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    private Order order;

    private boolean prepared;
}
