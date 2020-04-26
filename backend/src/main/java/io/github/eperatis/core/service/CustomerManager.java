package io.github.eperatis.core.service;

import io.github.eperatis.core.model.Customer;

import java.util.Collection;

public interface CustomerManager {

    Collection<Customer> listCustomers();

    void recordCustomer(Customer customer);
}
