package io.github.eperatis.controller;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.service.OrderManager;
import io.github.eperatis.dto.ListOrdersDTO;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Collection;

@RestController
public class OrderController {

    private final OrderManager orderManager;

    public OrderController(OrderManager orderManager) {
        this.orderManager = orderManager;
    }

    @RequestMapping(value = "/orders")
    public Collection<ListOrdersDTO> listOrders() {

        return orderManager.listOrders();
    }

    @RequestMapping(value = "/orders/record", method = RequestMethod.POST)
    public void recordOrder(@RequestBody Order object) throws IOException {

        orderManager.recordOrder(object);
    }

    @RequestMapping(value = "/pizzas/delivery-lists")
    public Collection<ListOrdersDTO> listPredationOrder() {
        return orderManager.deliveryOrder();
    }
}
