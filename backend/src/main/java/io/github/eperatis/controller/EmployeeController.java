package io.github.eperatis.controller;

import io.github.eperatis.core.model.Employee;
import io.github.eperatis.core.model.ErrorMessage;
import io.github.eperatis.core.service.EmployeeManager;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class EmployeeController {

    private final EmployeeManager employeeManager;

    public EmployeeController(EmployeeManager employeeManager) { this.employeeManager = employeeManager; }

    @RequestMapping(value = {"/staff/register"}, method = RequestMethod.POST)
    public ResponseEntity<Object> registerEmployee(@RequestBody Employee employee) {

        if (employee.getPositionCode() < 1 || employee.getPositionCode() > 3) {
            ErrorMessage errorMessage = new ErrorMessage("Position code must be between 1 and 3");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (employee.getFirstName().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("First name is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (employee.getLastName().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Last name is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (employee.getEmail().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Email is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (employee.getPhoneNumber().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Phone number is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (employee.getPassword().equals("")) {
            ErrorMessage errorMessage = new ErrorMessage("Password is required");
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            employeeManager.registerEmployee(employee);
        } catch (Exception e) {
            ErrorMessage errorMessage = new ErrorMessage(e.getMessage());
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("Employee saved successfully", HttpStatus.OK);
    }

    @RequestMapping(value = {"/staff/login"}, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void login() {}

    @RequestMapping(value = {"/staff"}, method = RequestMethod.GET)
    public Collection<Employee> listStaff() { return employeeManager.listStaff(); }

    @RequestMapping(value = {"staff/{id}"}, method = RequestMethod.DELETE)
    public void deleteStaff(@PathVariable Long id) { employeeManager.deleteStaff(id);}
}
