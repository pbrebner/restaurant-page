// Script for creating main section of the contact page
function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const heading = document.createElement("h2");
    heading.innerHTML = "Contact";
    heading.classList.add("heading");

    const hr = document.createElement("hr");
    hr.classList.add("mainLine");

    const contactPara = document.createElement("p");
    contactPara.innerHTML =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tempore nobis nemo cum, quaerat architecto velit itaque voluptas veritatis eaque autem tempora repellendus deleniti nihil. Quasi perferendis obcaecati neque nemo.";

    const map = document.createElement("div");
    map.classList.add("map");
    map.innerHTML =
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.9975046781257!2d-71.05438064504645!3d42.36405198691179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708922bbe507%3A0x65e59fa45ac73e5f!2s296%20Hanover%20St%2C%20Boston%2C%20MA%2002113%2C%20USA!5e0!3m2!1sen!2sca!4v1676156105162!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    contact.appendChild(heading);
    contact.appendChild(hr);
    contact.appendChild(contactPara);
    contact.appendChild(map);

    return contact;
}

function loadContact() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createContact());
}

export default loadContact;
