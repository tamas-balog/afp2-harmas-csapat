package io.github.eperatis.controller;

import io.github.eperatis.core.model.Employee;
import io.github.eperatis.core.service.EmployeeManager;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class EmployeeController {

    private final EmployeeManager employeeManager;

    public EmployeeController(EmployeeManager employeeManager) { this.employeeManager = employeeManager; }

    @RequestMapping(value = {"/staff/register"}, method = RequestMethod.POST)
    public void registerEmployee(@RequestBody Employee employee) { employeeManager.registerEmployee(employee);}

    @RequestMapping(value = {"/staff/login"}, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void login() {}

    @RequestMapping(value = {"/staff"}, method = RequestMethod.GET)
    public Collection<Employee> listStaff() { return employeeManager.listStaff(); }

    @RequestMapping(value = {"staff/{id}"}, method = RequestMethod.DELETE)
    public void deleteStaff(@PathVariable Long id) { employeeManager.deleteStaff(id);}
}
