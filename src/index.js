import "./style.css"
import home from "./home.js";
import menu from "./menu.js"
import contact from "./contact.js"

const nav = document.querySelector('nav');
const contentContainer = document.querySelector('#content');

home(contentContainer, nav, menu);

nav.addEventListener('click', (e) => {
    nav.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    if (e.target.classList.contains('home-btn')) {
        e.target.classList.toggle('active');
        home(contentContainer, nav, menu);
    } else if (e.target.classList.contains('menu-btn')) {
        e.target.classList.toggle('active');
        menu(contentContainer);
    } else if (e.target.classList.contains('about-btn')) {
        e.target.classList.toggle('active');
        contact(contentContainer);
    }
});

