package io.github.eperatis.service;

import io.github.eperatis.core.model.Employee;
import io.github.eperatis.core.sevice.EmployeeManager;
import io.github.eperatis.dao.EmployeeRepository;

public class EmployeeManagerImpl implements EmployeeManager {

    private EmployeeRepository repository;

    public EmployeeManagerImpl(EmployeeRepository repository) { this.repository = repository;}

    @Override
    public void registerEmployee(Employee employee) { repository.save(employee); }
}
