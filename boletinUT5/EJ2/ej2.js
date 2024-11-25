document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que se recargue la página

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value.toUpperCase();
    const apellidos = document.getElementById('apellidos').value.toUpperCase();
    const username = document.getElementById('username').value.toUpperCase();
    const password = document.getElementById('password').value.toUpperCase();
    const fechaNac = document.getElementById('fecha_nac').value.toUpperCase();
    const sexo = document.querySelector('input[name="sexo"]:checked').value.toUpperCase();
    const movil = document.getElementById('movil').value.toUpperCase();
    const email = document.getElementById('email').value.toUpperCase();
    const ubicacion = document.getElementById('ubicacion').value.toUpperCase();

    // Crear un mensaje con los datos ingresados
    const mensaje = `
        Nombre: ${nombre}\n
        Apellidos: ${apellidos}\n
        Nombre de usuario: ${username}\n
        Contraseña: ${password}\n
        Fecha de nacimiento: ${fechaNac}\n
        Sexo: ${sexo}\n
        Móvil: ${movil}\n
        Correo Electrónico: ${email}\n
        Ubicación: ${ubicacion}
    `;

    // Abrir una nueva ventana y mostrar los datos
    const nuevaVentana = window.open('', '_blank', 'width=400,height=600');
    nuevaVentana.document.write(`<pre>${mensaje}</pre>`);
    nuevaVentana.document.close(); // Asegurar que el contenido se renderice
});
