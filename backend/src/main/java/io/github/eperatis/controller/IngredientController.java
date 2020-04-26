package io.github.eperatis.controller;

import io.github.eperatis.core.model.Ingredient;
import io.github.eperatis.core.service.IngredientManager;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

public class IngredientController {

    private IngredientManager ingredientManager;

    public IngredientController(IngredientManager ingredientManager) {
        this.ingredientManager = ingredientManager;
    }

    public Collection<Ingredient> listIngredients() {
        return ingredientManager.listIngredients();
    }

    public void recordIngredient(Ingredient ingredient) {
        ingredientManager.recordIngredient(ingredient);
    }
}
