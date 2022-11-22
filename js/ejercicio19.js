(function(){
    var doc = document,
    element = doc.createElement("p"),
    contenido = doc.createTextNode("<strong>Este texto está añadido dinámicamente</strong>"),
    pTres = doc.getElementById("texto");

    element.appendChild(contenido);
    element.id = "conAppendChild";

    pTres.parentNode.appendChild(element);
}());

(function(){
    var doc = document,
    element = doc.createElement("p"),
    contenido = doc.createTextNode("<strong>PARRAFO</strong>"),
    pTres = doc.getElementById("parrafo");

    element.appendChild(contenido);
    element.id = "parrajo";

    pTres.parentNode.appendChild(element);
})