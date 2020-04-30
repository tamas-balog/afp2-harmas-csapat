package io.github.eperatis.core.sevice;

import io.github.eperatis.core.model.Employee;

import java.util.Collection;

public interface EmployeeManager {
    void registerEmployee(Employee employee);

    Collection<Employee> listStaff();
}
