package io.github.eperatis.core.sevice;

import io.github.eperatis.core.model.Pizza;

import java.util.Collection;

public interface PizzaManager {

    Collection<Pizza> listPizza();
    void recordPizza(Pizza pizza);
}
