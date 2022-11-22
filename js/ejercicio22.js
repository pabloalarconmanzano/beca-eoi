const form = document.getElementById("formulario");

form.addEventListener("submit", function(element){
    element.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
    var nombre = formData.get("nombre");
    console.log(nombre);
    console.log(formData.get("email"));
    document.getElementById("resultados").innerHTML=nombre;
});


const formulario = document.getElementById("formulario1");

formulario.addEventListener("submit", function(element){
    element.preventDefault();
    const formData = new FormData(formulario);
    var nombre = formData.get("nombre");
    var email = formData.get("email");
    var provincia = formData.get("provincia");
    validacion(nombre, email, provincia);
    
});

let ok = false;
let resultado = "Los datos del formulario son incorrectos";

function validacion (nombre, email, provincia){
    if (nombre.lenght > 20 || !nombre.startsWith("ANTONIO") || nombre == "" || email == ""){        
    } else {
        ok = true;
        resultado = "Nombre: " + nombre + "<br>Email: " + email + "<br>Provincia: " + provincia;
    }
    document.getElementById("resultado").innerHTML = resultado;
    return ok;
}