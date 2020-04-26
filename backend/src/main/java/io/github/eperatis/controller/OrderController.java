package io.github.eperatis.controller;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.service.OrderManager;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    private OrderManager orderManager;

    public OrderController(OrderManager orderManager) {
        this.orderManager = orderManager;
    }

    @RequestMapping(value = "")
    public Collection<Order> listOrders() {
        return orderManager.listOrders();
    }

    @RequestMapping(value = "/record", method = RequestMethod.POST)
    public void recordOrder(@RequestBody Order order) {
        orderManager.recordOrder(order);
    }
}
