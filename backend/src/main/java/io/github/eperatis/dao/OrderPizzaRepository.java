package io.github.eperatis.dao;

import io.github.eperatis.core.model.OrderPizza;
import org.springframework.data.repository.CrudRepository;

public interface OrderPizzaRepository extends CrudRepository<OrderPizza, Long> {
}
