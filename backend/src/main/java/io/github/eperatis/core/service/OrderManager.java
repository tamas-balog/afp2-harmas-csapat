package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.dto.ListOrdersDTO;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.Collection;

public interface OrderManager {

    Collection<ListOrdersDTO> listOrders();

    void recordOrder(Order object) throws IOException;

    Collection<ListOrdersDTO> deliveryOrder();

    ResponseEntity<Object> updateDelivery(Long id);
}
