package io.github.eperatis.web;

import io.github.eperatis.core.service.*;
import io.github.eperatis.dao.*;
import io.github.eperatis.service.*;
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

    @Bean
    public OrderManager orderManager(OrderRepository repository) {
        return new OrderManagerImpl(repository);
    }

    @Bean
    public CustomerManager customerManager(CustomerRepository repository) {
        return new CustomerManagerImpl(repository);
    }

    @Bean
    public OrderPizzaManager orderPizzaManager(OrderPizzaRepository repository) {
        return new OrderPizzaManagerImpl(repository);
    }

}
