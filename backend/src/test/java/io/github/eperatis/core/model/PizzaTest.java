package io.github.eperatis.core.model;

import io.github.eperatis.core.service.IngredientManager;
import io.github.eperatis.dao.IngredientRepository;
import io.github.eperatis.dao.PizzaRepository;
import io.github.eperatis.service.IngredientManagerImpl;
import io.github.eperatis.service.PizzaManagerImpl;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.*;

class PizzaTest {

    Pizza pizza;

    @BeforeEach
    public void setUp() {
        pizza = new Pizza();
    }

    @Test
    void getId() {

        Long idValue = 4L;

        pizza.setId(idValue);

        assertEquals(idValue, pizza.getId());
    }

    @Test
    void getName() {
    }

    @Test
    void getPrice() {
    }
}