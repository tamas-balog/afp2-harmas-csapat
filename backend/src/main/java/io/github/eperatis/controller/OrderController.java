package io.github.eperatis.controller;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.service.OrderManager;
import io.github.eperatis.dto.ListOrdersDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/pizzas/delivery-lists/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updateDelivery(@PathVariable Long id) {
        return orderManager.updateDelivery(id);
    }
}
