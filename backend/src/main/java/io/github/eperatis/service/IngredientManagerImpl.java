package io.github.eperatis.service;

import io.github.eperatis.core.model.Ingredient;
import io.github.eperatis.core.service.IngredientManager;
import io.github.eperatis.dao.IngredientRepository;

import java.util.Optional;

public class IngredientManagerImpl implements IngredientManager {

    private final IngredientRepository repository;

    public IngredientManagerImpl(IngredientRepository repository) {
        this.repository = repository;
    }

    @Override
    public void recordIngredient(Ingredient ingredient) {
        repository.save(ingredient);
    }

    @Override
    public Optional<Ingredient> findById(Long id) {
        Optional<Ingredient> ingredientOptional = repository.findById(id);

        if (!ingredientOptional.isPresent()) {
            throw new RuntimeException("Ingredient Not Found!");
        }
        return ingredientOptional;
    }

    @Override
    public Optional<Ingredient> findByName(String name) {

        return repository.findByName(name);
    }

}
