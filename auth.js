// auth.js
function verificarSesion() {
    const username = localStorage.getItem('username');
    const userType = localStorage.getItem('userType');
    
    if (!username || !userType) {
        // Si no hay sesión, redirige a la página de login
        alert("Por favor, inicie sesión para acceder a esta página.");
        window.location.href = 'index.html';
    } else {
        // Opcional: Muestra información del usuario en la página
        const userInfoDiv = document.getElementById('user-info');
        if (userInfoDiv) {
            userInfoDiv.textContent = `Usuario: ${username} (${userType})`;
        }
    }
}

// Ejecuta la verificación de sesión al cargar la página
window.onload = verificarSesion;
