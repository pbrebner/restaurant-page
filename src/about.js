// Script for creating main section of the about page
function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");

    const heading = document.createElement("h2");
    heading.innerHTML = "About";
    heading.classList.add("heading");

    const hr = document.createElement("hr");
    hr.classList.add("mainLine");

    const aboutPara = document.createElement("p");
    aboutPara.innerHTML =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tempore nobis nemo cum, quaerat architecto velit itaque voluptas veritatis eaque autem tempora repellendus deleniti nihil. Quasi perferendis obcaecati neque nemo.<br><br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tempore nobis nemo cum, quaerat architecto velit itaque voluptas veritatis eaque autem tempora repellendus deleniti nihil. Quasi perferendis obcaecati neque nemo.<br><br><br>Open 6am - 2pm Daily";

    about.appendChild(heading);
    about.appendChild(hr);
    about.appendChild(aboutPara);

    return about;
}

function loadAbout() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createAbout());
}

export default loadAbout;
