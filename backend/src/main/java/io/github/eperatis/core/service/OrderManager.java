package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Order;

import java.util.Collection;

public interface OrderManager {

    Collection<Order> listOrders();

    void recordOrder(Order order);
}
