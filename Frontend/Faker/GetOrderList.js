const faker = require('faker');
const fs = require('fs');

function generatePizzas() {
    return {
        sequentialNumber : faker.random.number(200),
        pizzaName : faker.lorem.word(),
        isDone : faker.random.boolean()
    }
}
let pizzas = [];
const PIZZA_COUNT = 100;
for (let i = 0; i < PIZZA_COUNT; i++) {
    pizzas[i] = generatePizzas();
    pizzas[i]['id'] = i;
}

function GetOrderList() {
    let Pizza = {
        listId : faker.random.uuid(),
    }
    return Pizza;
}

let db = (
    pizzas = pizzas
)
console.log(GerOrderList());
fs.writeFileSync('D:/Faker/getOrderList_database.json', JSON.stringify((db)));