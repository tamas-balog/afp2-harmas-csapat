package io.github.eperatis.controller;

import io.github.eperatis.core.model.Scheduler;
import io.github.eperatis.core.service.OrderPizzaManager;
import io.github.eperatis.core.service.PizzaManager;
import io.github.eperatis.dto.PreparationListDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(value = "/pizzas/preparation-lists")
public class PreparationController {

    private final OrderPizzaManager orderPizzaManager;

    public PreparationController(OrderPizzaManager pizzaManager) {
        this.orderPizzaManager = pizzaManager;
    }

    @RequestMapping(value = {""})
    public Collection<PreparationListDTO> listPredationOrder() {
        return orderPizzaManager.preparationOrder();
    }
}
