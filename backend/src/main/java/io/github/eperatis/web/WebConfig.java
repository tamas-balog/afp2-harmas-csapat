package io.github.eperatis.web;

import io.github.eperatis.core.sevice.PizzaManager;
import io.github.eperatis.dao.PizzaRepository;
import io.github.eperatis.service.PizzaManagerImpl;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootConfiguration
public class WebConfig {

    @Bean
    public PizzaManager pizzaManager(PizzaRepository repository){
        return new PizzaManagerImpl(repository);
    }
}
