package io.github.eperatis.service;

import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.model.OrderPizza;
import io.github.eperatis.core.model.SchedulerMode;
import io.github.eperatis.core.service.OrderManager;
import io.github.eperatis.core.service.OrderPizzaManager;
import io.github.eperatis.core.service.SchedulerManager;
import io.github.eperatis.dao.OrderPizzaRepository;
import io.github.eperatis.dto.PreparationListDTO;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Collection;

public class OrderPizzaManagerImpl implements OrderPizzaManager {

    private final OrderPizzaRepository repository;
    private final SchedulerManager schedulerManager;
    private final OrderManager orderManager;
    private final ModelMapper modelMapper = new ModelMapper();

    public OrderPizzaManagerImpl(OrderPizzaRepository repository, SchedulerManager schedulerManager, OrderManager orderManager) {
        this.repository = repository;
        this.schedulerManager = schedulerManager;
        this.orderManager = orderManager;
    }

    @Override
    public Collection<OrderPizza> listOrderPizzas() {

        return new ArrayList<>((Collection<? extends OrderPizza>) repository.findAll());
    }

    @Override
    public void recordOrderPizza(OrderPizza orderPizza) {

        repository.save(orderPizza);
    }

    @Override
    public Collection<PreparationListDTO> preparationOrder() {
        ArrayList<PreparationListDTO> preparationListDTOS = new ArrayList<>();
        if (schedulerManager.listChosen().isPresent()) {
            if (schedulerManager.listChosen().get().getChosen() == SchedulerMode.BYORDER) {
                repository.findAllByPreparedFalseOrderByOrder().forEach(x -> preparationListDTOS.add(modelMapper.map(x, PreparationListDTO.class)));
            }
            else {
                repository.findAllByPreparedFalseOrderByPizza().forEach(x -> preparationListDTOS.add(modelMapper.map(x, PreparationListDTO.class)));
            }
        }
        return preparationListDTOS;
    }

    @Override
    public ResponseEntity<Object> updatePreparation(Long id) {
        if (repository.findById(id).isPresent()) {

            repository.findById(id).get().setPrepared(true);
            OrderPizza orderPizza = repository.findById(id).get();
            repository.save(orderPizza);

            Collection<Order> temp = orderManager.listNotDeliveredNotAssigned();
            Collection<Order> neededToDeliver = new ArrayList<Order>();

            for (int i = 0; i < temp.size(); i++) {
                Order order = (Order)temp.toArray()[i];
                if (allIsPrepared(order)){
                    neededToDeliver.add(order);
                }
            }
            orderManager.assignDeliveries(neededToDeliver);
            return  new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public boolean allIsPrepared(Order order) {
        Collection<OrderPizza> valami = repository.findAllByOrderEquals(order);
        //OrderPizza[] containingOrder = (OrderPizza[]) repository.findAllByOrderContaining(order).toArray();
        for (int i = 0; i < valami.size(); i++) {
            OrderPizza orderPizza = (OrderPizza)valami.toArray()[i];
            if (!orderPizza.isPrepared()) {
                return false;
            }
        }
        return true;
    }
}
