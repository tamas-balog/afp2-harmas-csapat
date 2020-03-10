const faker = require('faker');
const fs = require('fs');

function generatePizza() {
    let pizzas = [];
    const PIZZAS_COUNT = Math.floor(Math.random() * 5) + 1; //1-5 között ad vissza egy számot
    for (let i = 0; i < PIZZAS_COUNT; i++) {
        let pizza = {
            pizzaName : faker.lorem.word(),
            isDone : faker.random.boolean()
        }
        pizzas[i] = pizza;
        pizzas[i]['sequentialNumber'] = i + 1;
    }
    return pizzas;
}

function generateOrder(){
    let order = {
        listId : faker.random.uuid(),
        pizza : generatePizza()
    }
    return order;
}

function generateOrderList() {
    let orders= [];
    const ORDERS_COUNT = 100;
    for (let i = 0; i < ORDERS_COUNT; i++) {
        orders[i] = generateOrder()
    }
    return orders;
}

console.log(generateOrderList());
fs.writeFileSync('D:/Faker/GetOrderList_database.json', JSON.stringify((generateOrderList())));