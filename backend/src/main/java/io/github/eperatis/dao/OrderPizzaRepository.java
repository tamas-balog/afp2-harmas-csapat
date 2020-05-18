package io.github.eperatis.dao;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.model.OrderPizza;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface OrderPizzaRepository extends CrudRepository<OrderPizza, Long> {

//    Collection<OrderPizza> findAllByPizzaAndPreparedFalseOrderByOrderAsc();
//
//    Collection<OrderPizza> findAllByPizzaAndPreparedFalseOrderByPizzaAsc();
    Collection<OrderPizza> findAllByPreparedFalseOrderByOrder();

    Collection<OrderPizza> findAllByPreparedFalseOrderByPizza();
}
