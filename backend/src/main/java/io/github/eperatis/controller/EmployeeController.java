package io.github.eperatis.controller;

import io.github.eperatis.core.model.Employee;
import io.github.eperatis.core.sevice.EmployeeManager;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeController {

    private final EmployeeManager employeeManager;

    public EmployeeController(EmployeeManager employeeManager) { this.employeeManager = employeeManager; }

    @RequestMapping(value = {"/staff/register"}, method = RequestMethod.POST)
    public void registerEmployee(@RequestBody Employee employee) { employeeManager.registerEmployee(employee);}

    @RequestMapping(value = {"/staff/login"}, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void login() {}
}
