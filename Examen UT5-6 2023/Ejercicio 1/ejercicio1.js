window.addEventListener('load', inicializar);

function inicializar() {
    const noticias = [
        { titular: "Noticia 1", resumen: "Resumen de la noticia 1", descripcion: "Esta es la noticia 1" },
        { titular: "Noticia 2", resumen: "Resumen de la noticia 2", descripcion: "Esta es la noticia 2" },
        { titular: "Noticia 3", resumen: "Resumen de la noticia 3", descripcion: "Esta es la noticia 3" }
    ];

    const contenedorNoticias = document.getElementById('noticias');

    for (let i = 0; i < noticias.length; i++) {
        const noticia = noticias[i];

        // Crear contenedor principal del artículo
        const articulo = document.createElement('article');
        articulo.classList.add('noticia');

        // Crear encabezado con el titular
        const encabezado = document.createElement('header');
        const titulo = document.createElement('h2');
        titulo.innerText = noticia.titular;
        encabezado.appendChild(titulo);

        // Crear sección con resumen
        const seccionResumen = document.createElement('section');
        seccionResumen.innerText = noticia.resumen;

        // Crear descripción (inicialmente oculta)
        const descripcion = document.createElement('div');
        descripcion.innerText = noticia.descripcion;
        descripcion.style.display = 'none';
        descripcion.classList.add('descripcion');

        // Crear botón con texto y funcionalidad
        const boton = document.createElement('button');
        boton.innerText = 'Mostrar más';
        boton.classList.add('boton-toggle');
        boton.addEventListener('click', () => {
            const visible = descripcion.style.display === 'block';
            descripcion.style.display = visible ? 'none' : 'block';
            boton.innerText = visible ? 'Mostrar más' : 'Mostrar menos';
        });

        // Agregar elementos al artículo
        articulo.appendChild(encabezado);
        articulo.appendChild(seccionResumen);
        articulo.appendChild(descripcion);
        articulo.appendChild(boton);

        // Agregar el artículo al contenedor
        contenedorNoticias.appendChild(articulo);
    }
}