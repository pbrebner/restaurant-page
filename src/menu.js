// Script for creating main section of the menu page
function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h2");
    heading.innerHTML = "Menu";
    heading.classList.add("heading");

    const hr = document.createElement("hr");
    hr.classList.add("mainLine");

    const menuItems = document.createElement("div");
    menuItems.classList.add("menuItems");

    menuItems.appendChild(
        createMenuItem(
            "Pancakes",
            "What we're best known for! Out delicious light and fluffy pancakes. Enjoy them with various toppings of your choosing.",
            "$15"
        )
    );
    menuItems.appendChild(
        createMenuItem(
            "Waffles",
            "Belgium style waffles. Enjoy them with various toppings of your choosing.",
            "$15"
        )
    );
    menuItems.appendChild(
        createMenuItem(
            "French Toast",
            "French toast made with our own homemade bread. Enjoy them with various toppings of your choosing.",
            "$15"
        )
    );

    menu.appendChild(heading);
    menu.appendChild(hr);
    menu.appendChild(menuItems);

    return menu;
}

function createMenuItem(name, description, price) {
    const item = document.createElement("div");
    item.classList.add("menuItem");

    const itemName = document.createElement("h3");
    itemName.classList.add("itemName");
    itemName.innerHTML = name;
    item.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("itemDescription");
    itemDescription.innerHTML = description;
    item.appendChild(itemDescription);

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("itemPrice");
    itemPrice.innerHTML = price;
    item.appendChild(itemPrice);

    const hrSmall = document.createElement("hr");
    hrSmall.classList.add("smallLine");
    item.appendChild(hrSmall);

    return item;
}

function loadMenu() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createMenu());
}

export default loadMenu;
