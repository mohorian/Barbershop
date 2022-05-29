let login = document.querySelector(".navigation-link-login");
let popup = document.querySelector(".modal-login");
let overlay = document.querySelector(".modal-overlay");
let modalClose = document.querySelector(".modal-close");
let loginUser = popup.querySelector(".login-user");

login.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
    loginUser.focus();
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
    }
});