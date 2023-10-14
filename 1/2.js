"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

Отслеживать, какой повар готовит какое блюдо.
Записывать, какие блюда заказал каждый клиент.
Используйте коллекции Map для хранения блюд и их поваров, а также для хранения
заказов каждого клиента. В качестве ключей для поваров и клиентов используйте 
объекты.

Повара и их специализации:
Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

function Employee(name, specialization) {
    this.name = name;
    this.specialization = specialization;
}

function Client(name, order = []) {
    this.name = name;
    this.order = order;
}

const victor = new Employee("Виктор", "Пицца");
const olga = new Employee("Ольга", "Суши");
const dmitrii = new Employee("Дмитрий", "Десерты");

const menu = new Map([
    ["Пицца 'Маргарита'", victor],
    ["Пицца 'Пепперони'", victor],
    ["Суши 'Филадельфия'", olga],
    ["Суши 'Калифорния'", olga],
    ["Тирамису", dmitrii],
    ["Чизкейк", dmitrii],
]);

let order = ["Пицца 'Пепперони'", "Тирамису"];
const alexei = new Client("Алексей", order);

order = ["Суши 'Калифорния'", "Пицца 'Маргарита'"];
const maria = new Client("Мария", order);

order = ["Чизкейк"];
const irina = new Client("Ирина", order);

const ordersList = new Map();
Array.prototype.forEach.call([alexei, maria, irina], (client) =>
    ordersList.set(
        client.name,
        client.order.map((dish) => ({ [dish]: menu.get(dish).name }))
    )
);

function printOrders(orders) {
    let orderNum = 0;
    for (order of orders) {
        orderNum++;
        console.log(`Заказ № ${orderNum}`);
        console.log(`Клиент: ${order[0]}`);
        for (let i = 0; i < order[1].length; i++) {
            for (let [key, val] of Object.entries(order[1][i])) {
                console.log(`"${key}" - повар: ${val}`);
            }
        }
        console.log(`-----`);
    }
}
printOrders(ordersList);
