// Script for creating main section of the menu page
function createMenu() {}

function loadMenu() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createMenu());
}

export default loadMenu;
