package io.github.eperatis.controller;

import io.github.eperatis.core.model.ErrorMessage;
import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.service.OrderManager;
import io.github.eperatis.dto.ListOrdersDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Object> recordOrder(@RequestBody Order object) {
        if (object.getCustomer().getFirstName().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("First name is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (object.getCustomer().getLastName().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Last name is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (object.getCustomer().getPostalCode() == 0) {
            ErrorMessage errorMessage = new ErrorMessage("Postal code is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (object.getCustomer().getStreet().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Street name is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (object.getCustomer().getStreetNumber() == 0) {
            ErrorMessage errorMessage = new ErrorMessage("Street number is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (object.getCustomer().getPhoneNumber().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Phone number is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!object.getPizzas().iterator().hasNext()) {
            ErrorMessage errorMessage = new ErrorMessage("At least one pizza is needed");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            orderManager.recordOrder(object);
        } catch (Exception e) {
            ErrorMessage errorMessage = new ErrorMessage(e.getMessage());
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("Order submitted successfully", HttpStatus.OK);
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
