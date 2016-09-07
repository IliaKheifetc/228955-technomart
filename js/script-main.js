var userLostButton = document.querySelector(".js-btn-lost"),
    writeUsForm = document.querySelector(".write-us"),
    overlay = document.querySelector(".js-modal-overlay"),
    formCloseButton = writeUsForm.querySelector(".js-modal-close"),
    userName = writeUsForm.querySelector("[name='userName']"),
    mapButton = document.querySelector(".js-btn-map"),
    modalMap = document.querySelector(".js-modal-map"),
    mapCloseButton = document.querySelector(".js-map-close");


var hideFormAndOverlay = function(event) {
    event.preventDefault();

    writeUsForm.classList.add("is-hidden");
    writeUsForm.classList.remove("modal-slide-right");
    overlay.classList.add("is-hidden");
}

var hideMap = function(event) {
    event.preventDefault();

    if (!modalMap.classList.contains("is-hidden")) {
        modalMap.classList.add("is-hidden");
        modalMap.classList.remove("modal-slide-down");
        overlay.classList.add("is-hidden");
    }
};

userLostButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (writeUsForm.classList.contains("is-hidden")) {
        writeUsForm.classList.remove("is-hidden");

        writeUsForm.classList.add("modal-slide-right");

        overlay.classList.remove("is-hidden");
        userName.focus();
    }
});


formCloseButton.addEventListener("click", hideFormAndOverlay);

overlay.addEventListener("click", function(event) {
    if (!writeUsForm.classList.contains("is-hidden")) {
        hideFormAndOverlay(event);
    }
    if (!modalMap.classList.contains("is-hidden")) {
        hideMap(event);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        event.preventDefault();
        if (!overlay.classList.contains("is-hidden")) {
            writeUsForm.classList.add("is-hidden");
            writeUsForm.classList.remove("modal-slide-right");
            overlay.classList.add("is-hidden");
        }
    }
});

mapButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (modalMap.classList.contains("is-hidden")) {
        modalMap.classList.remove("is-hidden");
        modalMap.classList.add("modal-slide-down");
        overlay.classList.remove("is-hidden");
    }
});

mapCloseButton.addEventListener("click", hideMap);
