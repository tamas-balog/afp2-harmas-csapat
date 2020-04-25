const faker = require('faker');
const fs = require('fs');

function generateIngredient() {
    return {
        name : faker.lorem.word()
    }
}

let ingredients = [];
const INGREDIENT_COUNT = 100;
for (let i = 0; i < INGREDIENT_COUNT; i++) {
    ingredients[i] = generateIngredient();
    ingredients[i]['id'] = i;
}

function PizzaSearch() {
    let ingredientsList = [];
    for (let i = 0; i < (Math.random() * 5) + 1; i++) {
        ingredientsList[i] = faker.random.arrayElement(ingredients);
    }

    let Pizza = {
        id : faker.random.uuid(),
        pizzaName : faker.lorem.word(),
        pizzaPrice : faker.random.number(50),
        ingredients : ingredientsList
    }
    return Pizza;
}

let pizzas = [];
const PIZZA_COUNT = 100;
for (let i = 0; i < PIZZA_COUNT; i++) {
    pizzas[i] = PizzaSearch();
}

console.log(pizzas);
fs.writeFileSync('./PizzaSearch_database.json', JSON.stringify({ pizzas:pizzas}));