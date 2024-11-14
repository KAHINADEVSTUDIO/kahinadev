// Sidebar

const sidenav = document.getElementById("sidebar");

const openNav = () => {
    sidenav.style.width = "100%";
};

const closeNav = () => {
    sidenav.style.width = "0";
};


// BUTTON FIXED & TOP

window.onscroll = function () {
    const btnTop = document.getElementById("button-return");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

document.getElementById("button-return").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});