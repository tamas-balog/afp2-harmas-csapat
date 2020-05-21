package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Ingredient;

import java.util.Optional;

public interface IngredientManager {

    void recordIngredient(Ingredient ingredient);

    Optional<Ingredient> findById(Long id);

    Optional<Ingredient> findByName(String name);
}
