package io.github.eperatis.service;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.eperatis.core.model.Employee;
import io.github.eperatis.core.model.Order;
import io.github.eperatis.core.service.EmployeeManager;
import io.github.eperatis.core.service.OrderManager;
import io.github.eperatis.dao.OrderRepository;
import io.github.eperatis.dto.ListOrdersDTO;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Collection;

public class OrderManagerImpl implements OrderManager {

    private final OrderRepository repository;
    private final EmployeeManager employeeManager;
    private final ModelMapper modelMapper = new ModelMapper();

    public OrderManagerImpl(OrderRepository repository, EmployeeManager employeeManager) {
        this.employeeManager = employeeManager;
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
    public void assignDeliveries(Collection<Order> neededToDeliver) {
        if (neededToDeliver.size() >= 10){
            Employee employee = new Employee();
            Collection<Employee> employees = employeeManager.listStaff();
            for (int i = 0; i < employees.size(); i++) {
                Employee chosen = (Employee)employees.toArray()[i];
                if (chosen.getDeliveries().size() == 0 && chosen.getPositionCode() == 3){
                    employee = chosen;
                }
            }

            if (employee.getId() != null) {
                for (int i = 0; i < 10; i++) {
                    Order order1 = (Order)neededToDeliver.toArray()[i];
                    order1.setEmployee(employee);
                    repository.save(order1);
                }
            }
        }
    }

    @Override
    public Collection<ListOrdersDTO> deliveryOrder() {
        ArrayList<ListOrdersDTO> listOrdersDTOS = new ArrayList<>();
        repository.findAllByDeliveredFalseAndEmployeeIsNotNull().forEach(x -> listOrdersDTOS.add(modelMapper.map(x, ListOrdersDTO.class)));
        return listOrdersDTOS;
    }

    @Override
    public ResponseEntity<Object> updateDelivery(Long id) {
        if (repository.findById(id).isPresent()) {

            repository.findById(id).get().setDelivered(true);
            repository.findById(id).get().setEmployee(null);
            Order order = repository.findById(id).get();
            repository.save(order);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public Collection<Order> listNotDeliveredNotAssigned() {
        return repository.findAllByDeliveredFalseAndEmployeeIsNull();
    }
}
