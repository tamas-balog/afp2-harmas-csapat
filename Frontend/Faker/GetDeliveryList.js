const faker = require('faker');
const fs = require('fs');

function generatePizzas() {
    return faker.lorem.word();
}

function generateUser() {
    let user = {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        city : faker.address.city(),
        streetAddress : faker.address.streetAddress(),
        phoneNumber : faker.phone.phoneNumberFormat(),
        comments : faker.lorem.words(2)
    }
    return user;
}

function generateDelivery(){
    let delivery = {
        pizzaName : generatePizzas(),
        user : generateUser()
    }
    return delivery;
}

function generateDeliveryList() {
    let deliveries = [];
    const DELIVERIES_COUNT = 100;
    for (let i = 0; i < DELIVERIES_COUNT; i++) {
        deliveries[i] = generateDelivery()
        deliveries[i]['user']['id'] = i;
    }
    return deliveries;
}

console.log(generateDeliveryList());
fs.writeFileSync('D:/Faker/GetDeliveryList_database.json', JSON.stringify((generateDeliveryList())));