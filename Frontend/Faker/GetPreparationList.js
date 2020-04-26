const faker = require('faker');
const fs = require('fs');

function generatePizzas() {
    let pizzas = [];
    const PIZZAS_COUNT = Math.floor(Math.random() * 5) + 1; //1-5 között ad vissza egy számot
    for (let i = 0; i < PIZZAS_COUNT; i++) {
        let pizza = {
            sequentialNumber : null,
            id : faker.random.number(),
            name : faker.lorem.word(),
            preparedAt : faker.date.recent()
        }
        pizzas[i] = pizza;
        pizzas[i]['sequentialNumber'] = i + 1;
    }
    return pizzas;
}

console.log(generatePizzas());
fs.writeFileSync('./GetPreparationList_database.json', JSON.stringify((generatePizzas())));