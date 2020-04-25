const faker = require('faker');
const fs = require('fs');

function generateUser() {
    let user = {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        postalCode : faker.address.zipCode(),
        city : faker.address.city(),
        address : faker.address.streetName() + " " +  Math.floor(Math.random() * 99) + 1,
        phoneNumber : faker.phone.phoneNumberFormat(),
        comments : faker.lorem.words(5)
    }
    return user;
}

function generateDelivery(){
    let delivery = {
        id : faker.random.uuid(),
        name : faker.name.firstName() + " " + faker.name.lastName(),
        deliveredAt : faker.date.recent(),
        user : generateUser()
    }
    return delivery;
}

function generateDeliveryList() {
    let deliveries = [];
    const DELIVERIES_COUNT = 100;
    for (let i = 0; i < DELIVERIES_COUNT; i++) {
        deliveries[i] = generateDelivery();
    }
    return deliveries;
}

console.log(generateDeliveryList());
fs.writeFileSync('./GetDeliveryList_database.json', JSON.stringify((generateDeliveryList())));