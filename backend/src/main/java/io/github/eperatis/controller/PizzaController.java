package io.github.eperatis.controller;

import io.github.eperatis.core.model.ErrorMessage;
import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.core.service.PizzaManager;
import io.github.eperatis.dto.ListPizzasDTO;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "/pizzas")
public class PizzaController {

    private final PizzaManager pizzaManager;

    public PizzaController(PizzaManager pizzaManager) {
        this.pizzaManager = pizzaManager;
    }

    @RequestMapping(value = {""})
    public Collection<ListPizzasDTO> listPizzas() {
        return pizzaManager.listPizza();
    }

    @RequestMapping(value = {"/record"}, method = RequestMethod.POST)
    public ResponseEntity<Object> recordPizza(@RequestBody Pizza pizza) {
        if (pizza.getName().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Pizza name is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.LENGTH_REQUIRED);
        }
        if (pizza.getPrice() <= 0) {
            ErrorMessage errorMessage = new ErrorMessage("Pizza price must be greater than 0");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (pizza.getIngredients().iterator().next().getName().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Pizza must have at least 1 ingredient");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        pizzaManager.recordPizza(pizza);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = {"/{id}"})
    public ListPizzasDTO findPizza(@PathVariable Long id) {
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
