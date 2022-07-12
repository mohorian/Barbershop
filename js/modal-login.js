// Open/close popup
let login = document.querySelector(".navigation-link-login");
let popup = document.querySelector(".modal-login");
let overlay = document.querySelector(".modal-overlay");
let modalClose = document.querySelector(".modal-close");
let loginUser = popup.querySelector(".login-user");

function openPopup() {
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
}

function closePopup() {
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
}

login.addEventListener("click", function (evt) {
    evt.preventDefault();
    openPopup();
    loginUser.focus();
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopup();
});

window.addEventListener("keydown", function (evt) {
    if(evt.key === 'Escape' && popup.classList.contains('modal-show')) {
        evt.preventDefault();
        closePopup();
    }
});