package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Pizza;

import java.util.Collection;
import java.util.Optional;

public interface PizzaManager {

    Collection<Pizza> listPizza();

    void recordPizza(Pizza pizza);

    Optional<Pizza> findById(Long id);

    void deletePizza(Long id);

    void updatePizza(Pizza pizza, Long id);
}
