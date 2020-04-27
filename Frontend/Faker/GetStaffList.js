const faker = require('faker');
const fs = require('fs');

function generateEmployee() {
    let Employee = {
        id: null,
        positionCode : Math.floor(Math.random() * 3) + 1,
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.phoneNumberFormat(),
        password : faker.internet.password()
    }
    return Employee;
}


let employees = [];
const EMPLOYEES_COUNT = 100;
for (let i = 0; i < EMPLOYEES_COUNT; i++) {
    employees[i] = generateEmployee();
    employees[i]['id'] = i;
}


console.log(employees);
fs.writeFileSync('./GetOrderList_database.json', JSON.stringify({employees:employees}));