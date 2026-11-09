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

const year = document.querySelector("#year");
const lastModified = document.querySelector("#last-modified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;