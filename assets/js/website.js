// Sidebar

const sidenav = document.getElementById("sidebar");

const openNav = () => {
  sidenav.style.width = "100%";
};

const closeNav = () => {
  sidenav.style.width = "0";
};


// BUTTON FIXED & TOP

let topButton = document.getElementById("top");
let sidebarButton = document.getElementById("button-menu"); 

let sidebarOffsetTop = sidebarButton.offsetTop; 

function handleScroll() {
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

    if (window.pageYOffset >= sidebarOffsetTop) {
        sidebarButton.style.position = "fixed";
        sidebarButton.style.top = "10px";
        sidebarButton.classList.add("button-fixed");

    } else {
        sidebarButton.style.position = "relative";
        sidebarButton.style.top = "";
        sidebarButton.classList.remove("button-fixed");
    }
}

window.onscroll = handleScroll;