window.addEventListener('load', inicializar);

function inicializar() {
    // Crear formulario dinámicamente
    const contenedor = document.createElement('div');
    contenedor.id = 'contenedor-formulario';
    contenedor.style.padding = '20px';
    contenedor.style.border = '1px solid #ccc';
    contenedor.style.borderRadius = '8px';
    contenedor.style.maxWidth = '400px';
    contenedor.style.margin = '20px auto';
    contenedor.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';

    const formulario = document.createElement('form');
    formulario.id = 'form-producto';

    // Crear campo de texto para código del producto
    const grupoCampo = document.createElement('div');
    grupoCampo.style.marginBottom = '15px';

    const etiqueta = document.createElement('label');
    etiqueta.textContent = 'Introduce el código del producto:';
    etiqueta.setAttribute('for', 'codigo-producto');
    etiqueta.style.display = 'block';
    etiqueta.style.marginBottom = '5px';

    const inputCodigo = document.createElement('input');
    inputCodigo.type = 'text';
    inputCodigo.id = 'codigo-producto';
    inputCodigo.placeholder = 'Ej: ABC-123';
    inputCodigo.style.width = '100%';
    inputCodigo.style.padding = '8px';
    inputCodigo.style.border = '1px solid #ccc';
    inputCodigo.style.borderRadius = '4px';

    grupoCampo.appendChild(etiqueta);
    grupoCampo.appendChild(inputCodigo);

    // Crear mensaje de validación
    const mensajeError = document.createElement('p');
    mensajeError.id = 'mensaje-error';
    mensajeError.style.color = 'red';
    mensajeError.style.display = 'none';
    mensajeError.style.marginTop = '5px';

    // Validar formato del código al salir del campo
    inputCodigo.addEventListener('blur', () => validarCodigo(inputCodigo, mensajeError));

    // Crear botón de envío
    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Enviar';
    botonEnviar.style.backgroundColor = '#007bff';
    botonEnviar.style.color = '#fff';
    botonEnviar.style.padding = '10px 15px';
    botonEnviar.style.border = 'none';
    botonEnviar.style.borderRadius = '4px';
    botonEnviar.style.cursor = 'pointer';
    botonEnviar.style.display = 'block';
    botonEnviar.style.width = '100%';
    botonEnviar.style.fontSize = '16px';

    botonEnviar.addEventListener('mouseover', () => {
        botonEnviar.style.backgroundColor = '#0056b3';
    });

    botonEnviar.addEventListener('mouseout', () => {
        botonEnviar.style.backgroundColor = '#007bff';
    });

    // Evitar envío si el código no es válido y almacenar en localStorage
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validarCodigo(inputCodigo, mensajeError)) {
            localStorage.setItem('codigoProducto', inputCodigo.value.trim()); // Guardar en localStorage
            alert('Código guardado correctamente en el navegador.');
            formulario.reset();
        }
    });

    // Añadir elementos al formulario
    formulario.appendChild(grupoCampo);
    formulario.appendChild(mensajeError);
    formulario.appendChild(botonEnviar);

    // Añadir formulario al contenedor
    contenedor.appendChild(formulario);

    // Añadir contenedor al cuerpo del documento
    document.body.appendChild(contenedor);

    // Mostrar código almacenado en localStorage (si existe)
    const codigoGuardado = localStorage.getItem('codigoProducto');
    if (codigoGuardado) {
        const mensajeGuardado = document.createElement('p');
        mensajeGuardado.textContent = `Código almacenado: ${codigoGuardado}`;
        mensajeGuardado.style.color = 'green';
        mensajeGuardado.style.fontWeight = 'bold';
        mensajeGuardado.style.marginTop = '15px';
        contenedor.appendChild(mensajeGuardado);
    }
}

// Función para validar el formato del código
function validarCodigo(input, mensajeError) {
    const regex = /^[A-Z]{3}-\d{1,5}$/; // Tres letras, guion y 1-5 números
    if (!regex.test(input.value.trim())) {
        mensajeError.textContent = 'El código debe tener el formato: tres letras, guión y de 1 a 5 números (Ej: ASX-23).';
        mensajeError.style.display = 'block';
        return false;
    } else {
        mensajeError.style.display = 'none';
        return true;
    }
}
