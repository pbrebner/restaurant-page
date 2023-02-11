// Script for creating main section of the home page
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.innerHTML = "The Restaurant Name";

    const para = document.createElement("p");
    para.innerHTML = "This place is amazing";

    home.appendChild(heading);
    home.appendChild(para);

    return home;
}

function loadHome() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createHome());
}

export default loadHome;
