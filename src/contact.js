// Script for creating main section of the contact page
function createContact() {}

function loadContact() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createContact());
}

export default loadContact;
