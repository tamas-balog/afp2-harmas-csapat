package io.github.eperatis.core.service;

import io.github.eperatis.core.model.OrderPizza;

import java.util.Collection;

public interface OrderPizzaManager {

    Collection<OrderPizza> listOrderPizzas();

    void recordOrderPizza(OrderPizza orderPizza);
}
