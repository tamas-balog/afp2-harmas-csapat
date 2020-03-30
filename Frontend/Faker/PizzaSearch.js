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
    let ingredientsList = [];
    for (let i = 0; i < (Math.random() * 5) + 1; i++) {
        ingredientsList[i] = faker.random.arrayElement(ingredients);
    }
    let allergensList = [];
    for (let i = 0; i < (Math.random() * 5) + 1; i++) {
        allergensList[i] = faker.random.arrayElement(allergens);
    }

    let Pizza = {
        pizzaId : faker.random.uuid(),
        pizzaName : faker.lorem.word(),
        pizzaPrice : faker.random.number(50),
        ingredients : ingredientsList,
        allergens : allergensList
    }
    return Pizza;
}

let pizzas = [];
const PIZZA_COUNT = 100;
for (let i = 0; i < PIZZA_COUNT; i++) {
    pizzas[i] = PizzaSearch();
}


let db = (
    pizzas = pizzas
)

fs.writeFileSync('./pizza_search.json', JSON.stringify((db)));