package io.github.eperatis.core.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.github.eperatis.service.OrderDeserializer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity (name = "Order")
@Table(name = "orders")
@JsonDeserialize(using = OrderDeserializer.class)
@Getter @Setter @NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "id")
    private Customer customer;

    private boolean delivered;

    @OneToMany(
        mappedBy = "order",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private Collection<OrderPizza> pizzas;
}
