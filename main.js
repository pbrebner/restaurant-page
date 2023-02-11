/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
// Script to compile the correct content for the page






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
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    const menu = document.createElement("button");
    menu.classList.add("navMenu", "navItem");
    menu.innerHTML = "Menu";
    menu.addEventListener("click", () => {
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    const about = document.createElement("button");
    about.classList.add("navAbout", "navItem");
    about.innerHTML = "About";
    about.addEventListener("click", () => {
        (0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    const contact = document.createElement("button");
    contact.classList.add("navContact", "navItem");
    contact.innerHTML = "Contact";
    contact.addEventListener("click", () => {
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

initializeSite();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0J6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscVhBQXFYOztBQUVyWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQzVFeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVpQztBQUNBO0FBQ0U7QUFDSTs7QUFFdkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBUztBQUNqQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBVztBQUNuQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLG9EQUFRO0FBQ1o7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNjcmlwdCBmb3IgY3JlYXRpbmcgbWFpbiBzZWN0aW9uIG9mIHRoZSBhYm91dCBwYWdlXG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiQWJvdXRcIjtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgaHIuY2xhc3NMaXN0LmFkZChcIm1haW5MaW5lXCIpO1xuXG4gICAgY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWJvdXRQYXJhLmlubmVySFRNTCA9XG4gICAgICAgIFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2lhdCB0ZW1wb3JlIG5vYmlzIG5lbW8gY3VtLCBxdWFlcmF0IGFyY2hpdGVjdG8gdmVsaXQgaXRhcXVlIHZvbHVwdGFzIHZlcml0YXRpcyBlYXF1ZSBhdXRlbSB0ZW1wb3JhIHJlcGVsbGVuZHVzIGRlbGVuaXRpIG5paGlsLiBRdWFzaSBwZXJmZXJlbmRpcyBvYmNhZWNhdGkgbmVxdWUgbmVtby48YnI+PGJyPiBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRnVnaWF0IHRlbXBvcmUgbm9iaXMgbmVtbyBjdW0sIHF1YWVyYXQgYXJjaGl0ZWN0byB2ZWxpdCBpdGFxdWUgdm9sdXB0YXMgdmVyaXRhdGlzIGVhcXVlIGF1dGVtIHRlbXBvcmEgcmVwZWxsZW5kdXMgZGVsZW5pdGkgbmloaWwuIFF1YXNpIHBlcmZlcmVuZGlzIG9iY2FlY2F0aSBuZXF1ZSBuZW1vLjxicj48YnI+PGJyPk9wZW4gNmFtIC0gMnBtIERhaWx5XCI7XG5cbiAgICBhYm91dC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBhYm91dC5hcHBlbmRDaGlsZChocik7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhKTtcblxuICAgIHJldHVybiBhYm91dDtcbn1cblxuZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXQoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dDtcbiIsIi8vIFNjcmlwdCBmb3IgY3JlYXRpbmcgbWFpbiBzZWN0aW9uIG9mIHRoZSBjb250YWN0IHBhZ2VcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgaHIuY2xhc3NMaXN0LmFkZChcIm1haW5MaW5lXCIpO1xuXG4gICAgY29uc3QgY29udGFjdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0UGFyYS5pbm5lckhUTUwgPVxuICAgICAgICBcIkxvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdpYXQgdGVtcG9yZSBub2JpcyBuZW1vIGN1bSwgcXVhZXJhdCBhcmNoaXRlY3RvIHZlbGl0IGl0YXF1ZSB2b2x1cHRhcyB2ZXJpdGF0aXMgZWFxdWUgYXV0ZW0gdGVtcG9yYSByZXBlbGxlbmR1cyBkZWxlbml0aSBuaWhpbC4gUXVhc2kgcGVyZmVyZW5kaXMgb2JjYWVjYXRpIG5lcXVlIG5lbW8uXCI7XG5cbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hcC5jbGFzc0xpc3QuYWRkKFwibWFwXCIpO1xuICAgIG1hcC5pbm5lckhUTUwgPVxuICAgICAgICAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3MzYuOTk3NTA0Njc4MTI1NyEyZC03MS4wNTQzODA2NDUwNDY0NSEzZDQyLjM2NDA1MTk4NjkxMTc5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWUzNzA4OTIyYmJlNTA3JTNBMHg2NWU1OWZhNDVhYzczZTVmITJzMjk2JTIwSGFub3ZlciUyMFN0JTJDJTIwQm9zdG9uJTJDJTIwTUElMjAwMjExMyUyQyUyMFVTQSE1ZTAhM20yITFzZW4hMnNjYSE0djE2NzYxNTYxMDUxNjIhNW0yITFzZW4hMnNjYVwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT4nO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGhyKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RQYXJhKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsIi8vIFNjcmlwdCBmb3IgY3JlYXRpbmcgbWFpbiBzZWN0aW9uIG9mIHRoZSBob21lIHBhZ2VcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICAgIGNvbnN0IHJlc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHJlc3ROYW1lLmlubmVySFRNTCA9IFwiQm9zdG9uIEJydW5jaFwiO1xuICAgIHJlc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0TmFtZVwiKTtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQocmVzdE5hbWUpO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCIvLyBTY3JpcHQgZm9yIGNyZWF0aW5nIG1haW4gc2VjdGlvbiBvZiB0aGUgbWVudSBwYWdlXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcblxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgIGhyLmNsYXNzTGlzdC5hZGQoXCJtYWluTGluZVwiKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNcIik7XG5cbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJQYW5jYWtlc1wiLFxuICAgICAgICAgICAgXCJXaGF0IHdlJ3JlIGJlc3Qga25vd24gZm9yISBPdXQgZGVsaWNpb3VzIGxpZ2h0IGFuZCBmbHVmZnkgcGFuY2FrZXMuIEVuam95IHRoZW0gd2l0aCB2YXJpb3VzIHRvcHBpbmdzIG9mIHlvdXIgY2hvb3NpbmcuXCIsXG4gICAgICAgICAgICBcIiQxNVwiXG4gICAgICAgIClcbiAgICApO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIldhZmZsZXNcIixcbiAgICAgICAgICAgIFwiQmVsZ2l1bSBzdHlsZSB3YWZmbGVzLiBFbmpveSB0aGVtIHdpdGggdmFyaW91cyB0b3BwaW5ncyBvZiB5b3VyIGNob29zaW5nLlwiLFxuICAgICAgICAgICAgXCIkMTVcIlxuICAgICAgICApXG4gICAgKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJGcmVuY2ggVG9hc3RcIixcbiAgICAgICAgICAgIFwiRnJlbmNoIHRvYXN0IG1hZGUgd2l0aCBvdXIgb3duIGhvbWVtYWRlIGJyZWFkLiBFbmpveSB0aGVtIHdpdGggdmFyaW91cyB0b3BwaW5ncyBvZiB5b3VyIGNob29zaW5nLlwiLFxuICAgICAgICAgICAgXCIkMTVcIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChocik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIml0ZW1OYW1lXCIpO1xuICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IG5hbWU7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG5cbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIml0ZW1EZXNjcmlwdGlvblwiKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtUHJpY2VcIik7XG4gICAgaXRlbVByaWNlLmlubmVySFRNTCA9IHByaWNlO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgIGNvbnN0IGhyU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgaHJTbWFsbC5jbGFzc0xpc3QuYWRkKFwic21hbGxMaW5lXCIpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaHJTbWFsbCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU2NyaXB0IHRvIGNvbXBpbGUgdGhlIGNvcnJlY3QgY29udGVudCBmb3IgdGhlIHBhZ2VcblxuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdkhvbWVcIiwgXCJuYXZJdGVtXCIpO1xuICAgIGhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2TWVudVwiLCBcIm5hdkl0ZW1cIik7XG4gICAgbWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZChcIm5hdkFib3V0XCIsIFwibmF2SXRlbVwiKTtcbiAgICBhYm91dC5pbm5lckhUTUwgPSBcIkFib3V0XCI7XG4gICAgYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbG9hZEFib3V0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXZDb250YWN0XCIsIFwibmF2SXRlbVwiKTtcbiAgICBjb250YWN0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBcIkRldmVsb3BlZCBieSBQYXRyaWNrIEJyZWJuZXJcIjtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBsb2FkSG9tZSgpO1xufVxuXG5pbml0aWFsaXplU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9