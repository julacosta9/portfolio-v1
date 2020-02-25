// function displayMobileMenu() {
//     var x = document.getElementById("mobile-nav-wrapper");
//     if (x.style.display !== "none") {
//         x.style.display = "none";
//         document
//             .querySelector("#mobile-menu-button")
//             .classList.remove("is-active");
//     } else {
//         x.style.display = "block";
//         document
//             .querySelector("#mobile-menu-button")
//             .classList.add("is-active");
//     }
// }

function showMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "visible";
    document.querySelector("#mobile-menu-button").classList.add("is-active");
}

function hideMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "hidden";
    document.querySelector("#mobile-menu-button").classList.remove("is-active");
}

function toggleMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    if (nav.style.visibility === "visible") {
        hideMobileMenu();
    } else {
        showMobileMenu();
    }
}

document
    .querySelector("#mobile-menu-button")
    .addEventListener("click", toggleMobileMenu);


let mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

mobileNavLinks.forEach(el => el.addEventListener("click", hideMobileMenu));