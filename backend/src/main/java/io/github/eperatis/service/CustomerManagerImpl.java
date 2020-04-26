package io.github.eperatis.service;

import io.github.eperatis.core.model.Customer;
import io.github.eperatis.core.service.CustomerManager;
import io.github.eperatis.dao.CustomerRepository;

import java.util.ArrayList;
import java.util.Collection;

public class CustomerManagerImpl implements CustomerManager {

    private CustomerRepository repository;

    public CustomerManagerImpl(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public Collection<Customer> listCustomers() {
        return new ArrayList<Customer>((Collection<? extends Customer>) repository.findAll());
    }

    @Override
    public void recordCustomer(Customer customer) {
        repository.save(customer);
    }
}
