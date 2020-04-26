package io.github.eperatis.dao;

import io.github.eperatis.core.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
