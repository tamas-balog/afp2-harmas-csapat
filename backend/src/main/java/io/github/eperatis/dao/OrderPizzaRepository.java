package io.github.eperatis.dao;

import io.github.eperatis.core.model.OrderPizza;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;
import java.util.Optional;

public interface OrderPizzaRepository extends CrudRepository<OrderPizza, Long> {

//    Collection<OrderPizza> findAllByPizzaAndPreparedFalseOrderByOrderAsc();
//
//    Collection<OrderPizza> findAllByPizzaAndPreparedFalseOrderByPizzaAsc();
    Collection<OrderPizza> findAllByPreparedFalseOrderByOrder();

    Collection<OrderPizza> findAllByPreparedFalseOrderByPizza();

    Optional<OrderPizza> findById(Long id);
}
