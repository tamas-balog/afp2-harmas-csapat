package io.github.eperatis.dao;

import io.github.eperatis.core.model.OrderPizza;
import io.github.eperatis.core.model.Pizza;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface OrderPizzaRepository extends CrudRepository<OrderPizza, Long> {

//    Collection<OrderPizza> findAllByPizzaAndPreparedFalseOrderByOrderAsc();
//
//    Collection<OrderPizza> findAllByPizzaAndPreparedFalseOrderByPizzaAsc();
    Collection<OrderPizza> findAllByPreparedFalseOrderByOrder();

    Collection<OrderPizza> findAllByPreparedFalseOrderByPizza();
}
