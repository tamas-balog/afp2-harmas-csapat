package io.github.eperatis.service;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.service.OrderManager;
import io.github.eperatis.dao.OrderRepository;
import io.github.eperatis.dto.ListOrdersDTO;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.Collection;

public class OrderManagerImpl implements OrderManager {

    private final OrderRepository repository;
    private final ModelMapper modelMapper = new ModelMapper();

    public OrderManagerImpl(OrderRepository repository) {
        this.repository = repository;
    }

    @Override
    public Collection<ListOrdersDTO> listOrders() {
        ModelMapper modelMapper = new ModelMapper();
        ArrayList<ListOrdersDTO> listOrdersDto = new ArrayList<>();
        repository.findAll().forEach(x -> listOrdersDto.add(modelMapper.map(x, ListOrdersDTO.class)));
        return listOrdersDto;
    }

    @Override
    public void recordOrder(Order input) {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        repository.save(input);
    }

    @Override
    public Collection<ListOrdersDTO> deliveryOrder() {
        ArrayList<ListOrdersDTO> listOrdersDTOS = new ArrayList<>();
        repository.findAllByDeliveredFalse().forEach(x -> listOrdersDTOS.add(modelMapper.map(x, ListOrdersDTO.class)));;//.forEach(x -> deliveryListDTOS.add(modelMapper.map(x, Order.class)));
        return listOrdersDTOS;
    }
}
