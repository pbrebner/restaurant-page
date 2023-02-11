// Script for creating main section of the home page
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const restName = document.createElement("h1");
    restName.innerHTML = "Boston Brunch";
    restName.classList.add("restName");

    home.appendChild(restName);

    return home;
}

function loadHome() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createHome());
}

export default loadHome;
