package io.github.eperatis.controller;

import io.github.eperatis.core.model.OrderPizza;
import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.core.service.OrderPizzaManager;
import io.github.eperatis.dto.PreparationListDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class OrderPizzaController {

    private final OrderPizzaManager orderPizzaManager;

    public OrderPizzaController(OrderPizzaManager pizzaManager) {
        this.orderPizzaManager = pizzaManager;
    }

    @RequestMapping(value = "/pizzas/preparation-lists")
    public Collection<PreparationListDTO> listPreparationOrder() {
        return orderPizzaManager.preparationOrder();
    }

    @RequestMapping(value = "/pizzas/preparation-lists/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updatePreparation(@PathVariable Long id) {
        return orderPizzaManager.updatePreparation(id);
    }
}
