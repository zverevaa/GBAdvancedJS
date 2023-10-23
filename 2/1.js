"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books;
    constructor(books) {
        this.#books = books;
    }

    get allBooks() {
        return this.#books.join(", ");
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            console.error("The book already exists");
        } else {
            this.#books.push(title);
        }
    }

    removeBook(title) {
        if (!this.#books.includes(title)) {
            console.error("There's no books with that title");
        } else {
            this.#books.splice(this.#books.indexOf(title), 1);
        }
    }

    hasBook(title) {
        return this.#books.includes(title) ? true : false;
    }
}

const books = ["Coraline", "American Gods"];

const lib1 = new Library(books);
console.log("Книги в библиотеке: " + lib1.allBooks);
console.log();
lib1.addBook("Good Omens");
console.log(lib1.allBooks);
console.log("Наличие книги Coraline: " + lib1.hasBook("Coraline"));
