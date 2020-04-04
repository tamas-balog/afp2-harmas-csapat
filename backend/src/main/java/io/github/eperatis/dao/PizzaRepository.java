package io.github.eperatis.dao;

import io.github.eperatis.core.model.Pizza;
import org.springframework.data.repository.CrudRepository;

public interface PizzaRepository extends CrudRepository<Pizza, Long> {
}
