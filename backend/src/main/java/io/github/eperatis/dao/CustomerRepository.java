package io.github.eperatis.dao;

import io.github.eperatis.core.model.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
}
