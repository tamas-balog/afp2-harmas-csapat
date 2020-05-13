package io.github.eperatis.dao;

import io.github.eperatis.core.model.Pizza;
import org.springframework.data.repository.CrudRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface PizzaRepository extends CrudRepository<Pizza, Long> {

    Optional<Pizza> findById(Long id);

    void deleteById(Long id);
}
