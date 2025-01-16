/*    Crear mediante DOM y a partir del siguiente array de objetos expresado en formato JSON:
    [
        {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12", ...]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22", ...]},
        ...
    ]   */ 

    const jsonData = [
        {src: "img/perito1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src: "img/perito2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
    ];

    var titulo = document.createElement("h1");
    var texto= document.createTextNode("Subtitulo");
    titulo.appendChild(texto);

    todosviajes.appendChild(titulo);

    var elemento1_ul = document.createElement("ul");

    jsonData.forEach(item => {
        var elemento1_li = document.createElement("li");

        var imagen = document.createElement("img");
        imagen.src = item.src; 

        var elemento_p = document.createElement("p");
        elemento_p.textContent = item.desc;

        var elemento2_ul = document.createElement("ul");
        elemento2_ul.classList.add("specs");

        item.specs.forEach(spec => {
            var elemento2_li = document.createElement("li");
            elemento2_li.textContent = spec;
            elemento2_ul.appendChild(elemento2_li);
        });

        elemento1_li.appendChild(imagen);
        elemento1_li.appendChild(elemento_p);
        elemento1_li.appendChild(elemento2_ul);

        elemento1_ul.appendChild(elemento1_li);

    })

    todosviajes.appendChild(elemento1_ul);