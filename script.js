"use strict";

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const productName = document.querySelector(".product-name").value;
    const review = document.getElementById("review").value;

    if (localStorage.reviews !== undefined) {
        if (productName != "" && review != "") {
            const oldReviews = JSON.parse(localStorage.reviews);
            localStorage.setItem(
                "reviews",
                JSON.stringify([
                    ...oldReviews,
                    { name: productName, review: review },
                ])
            );
        } else {
            console.log("product name or review not found");
        }
    } else {
        localStorage.setItem(
            "reviews",
            JSON.stringify([{ name: productName, review: review }])
        );
    }

    document.querySelector(".product-name").value = "";
    document.getElementById("review").value = "";
});
