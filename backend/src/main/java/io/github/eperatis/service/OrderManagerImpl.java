package io.github.eperatis.service;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.service.OrderManager;
import io.github.eperatis.dao.OrderRepository;

import java.util.ArrayList;
import java.util.Collection;

public class OrderManagerImpl implements OrderManager {

    private OrderRepository repository;

    public OrderManagerImpl(OrderRepository repository) {
        this.repository = repository;
    }

    @Override
    public Collection<Order> listOrders() {

        return new ArrayList<Order>((Collection<? extends Order>) repository.findAll());
    }

    @Override
    public void recordOrder(Order order) {
        repository.save(order);
    }
}
