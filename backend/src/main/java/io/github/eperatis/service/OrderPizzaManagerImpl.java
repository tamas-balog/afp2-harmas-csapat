package io.github.eperatis.service;

import io.github.eperatis.core.model.OrderPizza;
import io.github.eperatis.core.service.OrderPizzaManager;
import io.github.eperatis.dao.OrderPizzaRepository;

import java.util.ArrayList;
import java.util.Collection;

public class OrderPizzaManagerImpl implements OrderPizzaManager {

    private final OrderPizzaRepository repository;

    public OrderPizzaManagerImpl(OrderPizzaRepository repository) {
        this.repository = repository;
    }

    @Override
    public Collection<OrderPizza> listOrderPizzas() {

        return new ArrayList<>((Collection<? extends OrderPizza>) repository.findAll());
    }

    @Override
    public void recordOrderPizza(OrderPizza orderPizza) {

        repository.save(orderPizza);
    }
}
