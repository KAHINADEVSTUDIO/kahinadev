function checkPassword() {
    
    const password = document.getElementById('password').value;
    const correctPassword = 'project_password1585';

    if (password === correctPassword) {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        alert('Code incorrect. Veuillez réessayer.');
    }
    
}