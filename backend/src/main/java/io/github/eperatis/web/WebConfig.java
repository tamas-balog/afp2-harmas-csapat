package io.github.eperatis.web;

import io.github.eperatis.core.model.Ingredient;
import io.github.eperatis.core.service.IngredientManager;
import io.github.eperatis.core.service.PizzaManager;
import io.github.eperatis.dao.IngredientRepository;
import io.github.eperatis.dao.PizzaRepository;
import io.github.eperatis.service.IngredientManagerImpl;
import io.github.eperatis.service.PizzaManagerImpl;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootConfiguration
public class WebConfig {

    @Bean
    public PizzaManager pizzaManager(PizzaRepository repository, IngredientManager ingredientManager){
        return new PizzaManagerImpl(repository, ingredientManager);
    }

    @Bean
    public IngredientManager ingredientManager(IngredientRepository repository) {
        return new IngredientManagerImpl(repository);
    }

}
