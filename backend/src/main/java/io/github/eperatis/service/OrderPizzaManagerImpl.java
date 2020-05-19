package io.github.eperatis.service;

import io.github.eperatis.core.model.OrderPizza;
import io.github.eperatis.core.model.SchedulerMode;
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
    private final ModelMapper modelMapper = new ModelMapper();

    public OrderPizzaManagerImpl(OrderPizzaRepository repository, SchedulerManager schedulerManager) {
        this.repository = repository;
        this.schedulerManager = schedulerManager;
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
            return  new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
