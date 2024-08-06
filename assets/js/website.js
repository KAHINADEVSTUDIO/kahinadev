// BURGER ANIMATION 

const btnMenu = document.querySelector("#button-menu"); 

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
});

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("button-menu");

const toggleSidebar = () => {

    const isClosed = sidebar.style.width === '0px' || !sidebar.style.width;
    sidebar.style.width = isClosed ? '380px' : '0px';

};

toggleBtn.addEventListener("click", toggleSidebar);

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