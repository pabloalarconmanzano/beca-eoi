// Crear dinámicamente un elemento <p> directamente dentro del <body> del documento, con el texto Párrafo1 y con el atributo id=“p1”

(function () {
    cuerpo = document.getElementById("cuerpo");
    newparrafo = document.createElement("p"),
    contenido = document.createTextNode("Parrafo 1");

    newparrafo.appendChild(contenido);
    newparrafo.id = "p1";
    cuerpo.appendChild(newparrafo);

}());

(function () {
    parrafo1 = document.getElementById("p1");

    newbutton = document.createElement("button"),
    contenido = document.createTextNode("Aplicar estilo a parrafo"),

    newpbutton.appendChild(contenido);
    newbutton.id = "boton1";
    newbutton.setAttribute("onclick", "asignarOnclick()")

    parrafo1.appendChild(newbutton);

}());


