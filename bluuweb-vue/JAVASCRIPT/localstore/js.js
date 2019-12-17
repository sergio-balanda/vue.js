const nombre = 'Juancito';
localStorage.setItem('nombreUsuario', nombre);
console.log(localStorage.getItem('nombreUsuario'));
localStorage.removeItem('nombreUsuario');