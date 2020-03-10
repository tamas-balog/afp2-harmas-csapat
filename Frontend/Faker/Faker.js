const faker = require('faker');
const fs = require('fs');

function generateAuthor() {
    return {
        first_name : faker.name.firstName(),
        last_name : faker.name.lastName(),
        nationality : faker.address.country ()
    }
};


let authors = [];
const AUTHOR_COUNT = 100;
for (let i = 0; i < AUTHOR_COUNT; i++) {
    authors[i] = generateAuthor();
    authors[i]['id'] = i;
}

function generateBooks() {
    let book = {
        isbn : faker.helpers. replaceSymbolWithNumber('ISBN: ####-####'),
        title : faker.lorem.words(3),
        teaser : faker.lorem.paragraph(),
        language: [ faker.random.locale ()],
        published : faker.date.past(),
        authors : [faker.random.arrayElement(authors)]
    }
    return book;
};

console.log(authors);

let books = [];
const BOOK_COUNT = 100;
for (let i = 0; i < BOOK_COUNT; i++) {
    books[i] = generateBooks();
    books[i]['id'] = i;
}

console.log(books);

let db = (
    authors = authors,
        books = books
)

fs.writeFileSync('D:/Faker/database.json', JSON.stringify((db)));