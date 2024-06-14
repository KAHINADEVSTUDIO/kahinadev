// SIDEBAR 

document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById("open-sidenav");
    const closeButton = document.getElementById("close-sidenav");
    const sidenav = document.getElementById("sidenav");

    openButton.addEventListener("click", () => {
        sidenav.classList.add("open");
    });

    closeButton.addEventListener("click", () => {
        sidenav.classList.remove("open");
    });

});

// HEADER

window.onscroll = function () { 
    scrollFunction(); 
};

var header = document.getElementById("header");
var sticky = header.offsetTop; 

function scrollFunction() {

    if(window.pageYOffset > sticky) {

        header.classList.add("fixed");

    } else {

        header.classList.remove("fixed");

    }

}