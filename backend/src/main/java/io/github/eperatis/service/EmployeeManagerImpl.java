package io.github.eperatis.service;

import io.github.eperatis.core.model.Employee;
import io.github.eperatis.core.service.EmployeeManager;
import io.github.eperatis.dao.EmployeeRepository;

import java.util.ArrayList;
import java.util.Collection;

public class EmployeeManagerImpl implements EmployeeManager {

    private EmployeeRepository repository;

    public EmployeeManagerImpl(EmployeeRepository repository) { this.repository = repository;}

    @Override
    public void registerEmployee(Employee employee) { repository.save(employee); }

    @Override
    public Collection<Employee> listStaff() {
        return new ArrayList<Employee>((Collection<? extends Employee>) repository.findAll());
    }

    @Override
    public void deleteStaff(Long l) { repository.deleteById(l);}
}
