var buyButtonArray = document.querySelectorAll(".js-btn-buy"),
    addedToCartForm = document.querySelector(".added-to-cart"),
    overlay = document.querySelector(".js-modal-overlay"),
    formCloseButtonArray = addedToCartForm.querySelectorAll(".js-modal-close"),
    cartProductsNumber = document.querySelector(".cart-products-number");

var showFormAndOverlay =  function(event) {
    event.preventDefault();

    if (addedToCartForm.classList.contains("is-hidden")) {
        addedToCartForm.classList.remove("is-hidden");
        overlay.classList.remove("is-hidden");

        incrementProductsNumber();
    }
};

var hideFormAndOverlay = function(event) {
    event.preventDefault();

    addedToCartForm.classList.add("is-hidden");
    overlay.classList.add("is-hidden");
};

var incrementProductsNumber = function() {
    cartProductsNumber.innerHTML = ((+cartProductsNumber.innerHTML) + 1).toString();
};

for (var i = 0; i < buyButtonArray.length; i++) {
    buyButtonArray[i].addEventListener("click", showFormAndOverlay);
}

for (i = 0; i < formCloseButtonArray.length; i++) {
    formCloseButtonArray[i].addEventListener("click", hideFormAndOverlay);
}

overlay.addEventListener("click", hideFormAndOverlay);

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        if (!addedToCartForm.classList.contains("is-hidden")) {
            addedToCartForm.classList.add("is-hidden");
            overlay.classList.add("is-hidden");
        }
    }
});
