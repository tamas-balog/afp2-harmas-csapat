package io.github.eperatis.dto;

import io.github.eperatis.core.model.Customer;
import io.github.eperatis.core.model.Employee;

public class DeliveryListDTO {
    private Long id;

    private boolean delivered;

    private Customer customer;

    private Employee employee;
}
