// Script to compile the correct content for the page

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const home = document.createElement("button");
    home.classList.add("navHome", "navItem");
    home.innerHTML = "Home";
    home.addEventListener("click", () => {
        loadHome();
    });

    const menu = document.createElement("button");
    menu.classList.add("navMenu", "navItem");
    menu.innerHTML = "Menu";
    menu.addEventListener("click", () => {
        loadMenu();
    });

    const about = document.createElement("button");
    about.classList.add("navAbout", "navItem");
    about.innerHTML = "About";
    about.addEventListener("click", () => {
        loadAbout();
    });

    const contact = document.createElement("button");
    contact.classList.add("navContact", "navItem");
    contact.innerHTML = "Contact";
    contact.addEventListener("click", () => {
        loadContact();
    });

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
    nav.appendChild(contact);

    return nav;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    footer.innerHTML = "Developed by Patrick Brebner";

    return footer;
}

function initializeSite() {
    const content = document.querySelector("div#content");

    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

initializeSite();
