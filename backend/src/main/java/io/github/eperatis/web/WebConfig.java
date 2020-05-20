package io.github.eperatis.web;


import io.github.eperatis.core.service.EmployeeManager;
import io.github.eperatis.core.service.PizzaManager;
import io.github.eperatis.dao.EmployeeRepository;
import io.github.eperatis.dao.PizzaRepository;
import io.github.eperatis.service.EmployeeManagerImpl;
import io.github.eperatis.service.PizzaManagerImpl;
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
    public OrderManager orderManager(OrderRepository repository, EmployeeManager employeeManager) {
        return new OrderManagerImpl(repository, employeeManager);
    }

    @Bean
    public CustomerManager customerManager(CustomerRepository repository) {
        return new CustomerManagerImpl(repository);
    }

    @Bean
    public OrderPizzaManager orderPizzaManager(OrderPizzaRepository repository, SchedulerManager schedulerManager) {
        return new OrderPizzaManagerImpl(repository, schedulerManager);
    }

    @Bean
    public SchedulerManager SchedulerManager(SchedulerRepository repository) {
        return new SchedulerManagerImpl(repository);
    }

    @Bean
    public EmployeeManager employeeManager(EmployeeRepository repository) { return new EmployeeManagerImpl(repository);
    }
}
