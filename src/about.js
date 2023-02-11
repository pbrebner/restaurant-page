// Script for creating main section of the about page
function createAbout() {}

function loadAbout() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createAbout());
}

export default loadAbout;
