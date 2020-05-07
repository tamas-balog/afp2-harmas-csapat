package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.dto.ListOrdersDTO;

import java.io.IOException;
import java.util.Collection;

public interface OrderManager {

    Collection<ListOrdersDTO> listOrders();

    void recordOrder(Order object) throws IOException;
}
