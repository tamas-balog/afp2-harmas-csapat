const faker = require('faker');
const fs = require('fs');

function generateUser() {
    let user = {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        city : faker.address.city(),
        address : faker.address.zipCode() + " " + faker.address.streetName() + " " +  Math.floor(Math.random() * 99) + 1,
        phoneNumber : faker.phone.phoneNumberFormat(),
        comments : faker.lorem.words(5)
    }
    return user;
}

function generatePizza() {
    let pizzas = [];
    const PIZZAS_COUNT = Math.floor(Math.random() * 5) + 1; //1-5 között ad vissza egy számot
    for (let i = 0; i < PIZZAS_COUNT; i++) {
        let pizza = {
            pizzaName : faker.lorem.word(),
            preparedAt : faker.date.recent()
        }
        pizzas[i] = pizza;
        pizzas[i]['sequentialNumber'] = i + 1;
    }
    return pizzas;
}

function generateOrder(){
    let order = {
        user : generateUser(),
        deliveryAt : faker.date.future(0.01),
        pizzas : generatePizza()
    }
    return order;
}

let orders= [];
const ORDERS_COUNT = 100;
for (let i = 0; i < ORDERS_COUNT; i++) {
    orders[i] = generateOrder()
}


console.log(orders);
fs.writeFileSync('./GetOrderList_database.json', JSON.stringify({orders:orders}));
