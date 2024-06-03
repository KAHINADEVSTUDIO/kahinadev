// SIDEBAR 

document.getElementById("toggleMenu").addEventListener("click", function () {

    var sidebar = document.getElementById("sidebar");

    if (sidebar.style.display == "none" || sidebar.style.display == "") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }

});

// THEME 

document.getElementById('theme-toggle').addEventListener('click', function () {

    const body = document.body;
    const icon = this.querySelector('i');

    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

})

// FIXED 

window.onscroll = function () {
    scrollFunction()
};

var header = document.getElementById('header');
var sticky = header.offsetTop;

function scrollFunction() {
    
    if (window.pageYOffset > sticky) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}