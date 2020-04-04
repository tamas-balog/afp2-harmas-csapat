package io.github.eperatis.controller;

import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.core.sevice.PizzaManager;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "/pizzas")
public class PizzaController {

    private PizzaManager pizzaManager;

    public PizzaController(PizzaManager pizzaManager) {
        this.pizzaManager = pizzaManager;
    }

    @RequestMapping(value = {""},method = RequestMethod.GET)
    public Collection<Pizza> listPizzas() {
        return pizzaManager.listPizza();
    }

    @RequestMapping(value = {"/record"}, method = RequestMethod.POST)
    public void recordPizza(@RequestBody Pizza pizza) {
        pizzaManager.recordPizza(pizza);
    }
}
