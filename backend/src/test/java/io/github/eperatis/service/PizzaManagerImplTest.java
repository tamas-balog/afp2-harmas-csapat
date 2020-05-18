package io.github.eperatis.service;

import io.github.eperatis.core.model.Ingredient;
import io.github.eperatis.core.model.Pizza;
import io.github.eperatis.dao.IngredientRepository;
import io.github.eperatis.dao.PizzaRepository;
import io.github.eperatis.dto.ListPizzasDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collection;
import java.util.HashSet;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PizzaManagerImplTest {

    PizzaManagerImpl pizzaManager;

    @Mock
    PizzaRepository pizzaRepository;

    IngredientManagerImpl ingredientManager;

    @Mock
    IngredientRepository ingredientRepository;

    @BeforeEach
    public void setUp() {

        MockitoAnnotations.initMocks(this);

        ingredientManager = new IngredientManagerImpl(ingredientRepository);
        pizzaManager = new PizzaManagerImpl(pizzaRepository,ingredientManager);
    }
    @Test
    void listPizza() {
        Pizza pizza = new Pizza();
        HashSet pizzaData = new HashSet();
        pizzaData.add(pizza);

        when(pizzaManager.listPizza()).thenReturn(pizzaData);

        Collection<ListPizzasDTO> ingredients = pizzaManager.listPizza();

        assertEquals(ingredients.size(), 1);
        verify(pizzaRepository, times(1)).findAll();
    }
}