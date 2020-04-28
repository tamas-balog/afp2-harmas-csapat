package io.github.eperatis.dao;

import io.github.eperatis.core.model.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
