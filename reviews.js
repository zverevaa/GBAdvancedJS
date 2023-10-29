const reviews = JSON.parse(localStorage.reviews);
const reviewsRenders = document.querySelector(".reviews");
let filteredReviews = reviews;

function renderReviews(reviews) {
    for (let i = 0; i < reviews.length; i++) {
        const node = document.createElement("div");
        node.classList = "review-body";
        node.innerHTML = `<p class="review-name">${reviews[i].name}</p><p class="review-text">${reviews[i].review}</p><button class="review-delete delete-${i}">Delete</button>`;
        reviewsRenders.appendChild(node);
    }
}

renderReviews(reviews);

function clearReviews() {
    while (reviewsRenders.firstChild) {
        reviewsRenders.removeChild(reviewsRenders.lastChild);
    }
}

function deleteReview() {
    reviewsRenders.addEventListener("click", (e) => {
        const target = e.target;
        if (target.textContent === "Delete") {
            let idx = [...reviewsRenders.children].indexOf(
                target.parentElement
            );
            reviews.splice(idx, 1);
            localStorage.setItem("reviews", JSON.stringify(reviews));
            clearReviews();
            renderReviews(reviews);
        }
    });
}
deleteReview();

function filterReviews() {
    reviewsRenders.addEventListener("click", (e) => {
        const target = e.target;

        if (target.classList[0] === "review-name") {
            const filteredReviews = reviews.filter(
                (review) => review.name === target.textContent
            );
            clearReviews();
            renderReviews(filteredReviews);
        }
    });
}
filterReviews();

const showAllBtn = document.querySelector(".show-all");
showAllBtn.addEventListener("click", () => {
    clearReviews();
    renderReviews(reviews);
});
