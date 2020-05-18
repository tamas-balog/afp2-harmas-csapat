package io.github.eperatis.dao;

import io.github.eperatis.core.model.Ingredient;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IngredientRepository extends CrudRepository<Ingredient, Long> {

    Optional<Ingredient> findById(Long id);

    Optional<Ingredient> findByName(String name);
}
