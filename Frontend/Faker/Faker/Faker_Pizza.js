const faker = require('faker');
const fs = require('fs');

function generateIngredient() {
    return {
        name : faker.lorem.word(),
        amount : faker.random.number(1000)
    }
}

let ingredients = [];
const INGREDIENT_COUNT = 100;
for (let i = 0; i < INGREDIENT_COUNT; i++) {
    ingredients[i] = generateIngredient();
    ingredients[i]['id'] = i;
}

function generateAllergen() {
    let Allergen = {
        name : faker.lorem.word()
    }
    return Allergen;
}

let allergens = [];
const ALLERGEN_COUNT = 100;
for (let i = 0; i < ALLERGEN_COUNT; i++) {
    allergens[i] = generateAllergen();
    allergens[i]['code'] = i;
}

function PizzaSearch() {
    let Pizza = {
        pizzaName : faker.lorem.word(),
        pizzaPrice : faker.random.number(50),
        ingredients : [faker.random.arrayElement(ingredients)],
        allergens : [faker.random.arrayElement(allergens)]
    }
    return Pizza;
}

let pizzas = [];
const PIZZA_COUNT = 100;
for (let i = 0; i < PIZZA_COUNT; i++) {
    pizzas[i] = PizzaSearch();
    pizzas[i]['pizzaId'] = i;
}

function IngredientSearch() {
    return [faker.random.arrayElement(pizzas)];
}

let db = (
    pizzas = pizzas, ingredients = ingredients, allergens = allergens
)

console.log(IngredientSearch());
fs.writeFileSync('D:/Faker/pizza_database.json', JSON.stringify((db)));