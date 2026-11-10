const button = document.querySelector("#toggle-nav");
const nav = document.querySelector("nav ul");

button.addEventListener("click", () => {
    button.classList.toggle("open");
    nav.classList.toggle("open");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        button.classList.remove("open");
        nav.classList.remove("open");
    }
});