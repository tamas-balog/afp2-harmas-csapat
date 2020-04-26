package io.github.eperatis.controller;

import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.core.service.PizzaManager;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping(value = "/pizzas")
public class PizzaController {

    private PizzaManager pizzaManager;

    public PizzaController(PizzaManager pizzaManager) {
        this.pizzaManager = pizzaManager;
    }

    @RequestMapping(value = {""})
    public Collection<Pizza> listPizzas() {
        return pizzaManager.listPizza();
    }

    @RequestMapping(value = {"/record"}, method = RequestMethod.POST)
    public void recordPizza(@RequestBody Pizza pizza) {
        pizzaManager.recordPizza(pizza);
    }

    @RequestMapping(value = {"/{id}"})
    public Optional<Pizza> findPizza(@PathVariable Long id) {
        return pizzaManager.findById(id);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void deletePizza(@PathVariable Long id) {
        pizzaManager.deletePizza(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    void updatePizza(@RequestBody Pizza newPizza, @PathVariable Long id) {
        pizzaManager.updatePizza(newPizza, id);
    }
}
