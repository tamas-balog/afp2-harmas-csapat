package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.dto.PreparationListDTO;
import org.springframework.http.ResponseEntity;

import java.util.Collection;

public interface OrderPizzaManager {

    Collection<PreparationListDTO> preparationOrder();

    ResponseEntity<Object> updatePreparation(Long id);

    boolean allIsPrepared(Order order);
}
