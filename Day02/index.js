function changeMode() {
    const loginBox = document.getElementById('login');
    const signupBox = document.getElementById('signup');
    
    // Troca entre as classes para "virar" os formulários
    loginBox.style.display = loginBox.style.display === 'none' ? 'flex' : 'none';
    signupBox.style.display = signupBox.style.display === 'none' ? 'flex' : 'none';

}
