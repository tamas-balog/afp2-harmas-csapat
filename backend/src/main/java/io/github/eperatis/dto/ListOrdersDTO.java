package io.github.eperatis.dto;

import io.github.eperatis.core.model.Customer;
import io.github.eperatis.core.model.OrderPizza;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collection;

@Getter @Setter @NoArgsConstructor
public class ListOrdersDTO {

    private Long id;

    private Customer customer;

    private boolean isDelivered;

    private Collection<OrderPizza> pizzas;
}
