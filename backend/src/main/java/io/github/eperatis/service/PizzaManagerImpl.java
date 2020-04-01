package io.github.eperatis.service;

import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.core.sevice.PizzaManager;
import io.github.eperatis.dao.PizzaRepository;

import java.util.ArrayList;
import java.util.Collection;

public class PizzaManagerImpl implements PizzaManager {

    private PizzaRepository repository;

    public PizzaManagerImpl(PizzaRepository repository) {
        this.repository = repository;
    }

    @Override
    public Collection<Pizza> listPizza() {
        return new ArrayList<Pizza>((Collection<? extends Pizza>) repository.findAll());
    }

    @Override
    public void recordPizza(Pizza pizza) {
        repository.save(pizza);
    }
}
