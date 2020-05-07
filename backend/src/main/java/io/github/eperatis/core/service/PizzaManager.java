package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.dto.ListPizzasDTO;

import java.util.Collection;

public interface PizzaManager {

    Collection<ListPizzasDTO> listPizza();

    void recordPizza(Pizza pizza);

    ListPizzasDTO findById(Long id);

    void deletePizza(Long id);

    void updatePizza(Pizza pizza, Long id);
}
