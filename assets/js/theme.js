const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('theme-light'); 
    document.body.classList.toggle('theme-dark');
});