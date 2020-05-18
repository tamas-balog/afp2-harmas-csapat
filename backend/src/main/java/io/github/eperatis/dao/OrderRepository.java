package io.github.eperatis.dao;

import io.github.eperatis.core.model.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface OrderRepository extends CrudRepository<Order, Long> {

    Collection<Order> findAllByDeliveredFalse();
}
