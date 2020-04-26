package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Ingredient;

import javax.swing.text.html.Option;
import java.util.Collection;
import java.util.Optional;

public interface IngredientManager {

    Collection<Ingredient> listIngredients();

    void recordIngredient(Ingredient ingredient);

    Optional<Ingredient> findById(Long id);

    Optional<Ingredient> findByName(String name);

    void updateIngredient(Ingredient ingredient, Long id);
}
