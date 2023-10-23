"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для 
отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако 
если длина введенного отзыва менее 50 или более 500 символов, функция должна 
генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.
*/

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: 1,
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: 2,
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: 3,
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: 4,
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const form = document.getElementById("form");
const review = document.getElementById("review");
const reviews = document.getElementsByClassName("reviews")[0];
const phones = document.getElementById("phonesId");
let reviewLength = document.getElementsByClassName("review-length")[0];
reviewLength.textContent = review.value.length;
const errorMsg = document.getElementsByClassName("error")[0];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let review = document.getElementById("review");
    let reviewText = review.value;
    if (review.value.length >= 50 && review.value.length <= 500) {
        addReview(reviewText);
        review.value = "";
    } else {
        if (review.value.length < 50) {
            errorMsg.textContent = "The review should be over 50 characters";
        } else {
            errorMsg.textContent =
                "The review should be less than 500 characters";
        }
        throw new Error("Invalid review length");
    }
    reviewLength.textContent = review.value.length;
    errorMsg.textContent = "";
});

//Length of user's review
review.addEventListener("input", () => {
    reviewLength.textContent = review.value.length;
});

//Phone model options
for (let i = 0; i < initialData.length; i++) {
    const node = document.createElement("option");
    node.classList.add(`option`);
    node.appendChild(document.createTextNode(initialData[i].product));
    phones.appendChild(node);
}

//Reviews rendering
function renderReviews() {
    for (let i = 0; i < initialData.length; i++) {
        for (let j = 0; j < initialData[i].reviews.length; j++) {
            const node = document.createElement("div");
            node.classList.add("review-render");

            const phoneModel = document.createElement("p");
            phoneModel.classList.add("review-phone-model");
            phoneModel.appendChild(
                document.createTextNode(initialData[i].product)
            );

            const reviewBody = document.createElement("p");
            reviewBody.appendChild(
                document.createTextNode(initialData[i].reviews[j].text)
            );

            node.appendChild(phoneModel);
            node.appendChild(reviewBody);
            reviews.appendChild(node);
        }
    }
}

function addReview(text) {
    const node = document.createElement("div");
    node.classList.add("review-render");

    const phoneModel = document.createElement("p");
    phoneModel.classList.add("review-phone-model");
    phoneModel.appendChild(document.createTextNode(phones.value));

    const reviewBody = document.createElement("p");
    reviewBody.appendChild(document.createTextNode(text));

    node.appendChild(phoneModel);
    node.appendChild(reviewBody);

    reviews.appendChild(node, reviews.firstChild);
}

renderReviews();
