// Script to compile the correct content for the page

import loadHome from "./home.js";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const home = document.createElement("a");
    home.classList.add("navHome");
    home.innerHTML = "Home";
    home.setAttribute("href", home);

    const menu = document.createElement("a");
    menu.classList.add("navMenu");
    menu.innerHTML = "Menu";
    menu.setAttribute("href", menu);

    const about = document.createElement("a");
    about.classList.add("navAbout");
    about.innerHTML = "About";
    about.setAttribute("href", about);

    const contact = document.createElement("a");
    contact.classList.add("navContact");
    contact.innerHTML = "Contact";
    contact.setAttribute("href", contact);

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(about);
    header.appendChild(contact);

    return header;
}

function createNav() {}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");

    content.appendChild(main);

    loadHome();

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

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

initializeSite();
