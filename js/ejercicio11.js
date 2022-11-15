//A partir del código fuente del ejercicio10 realizar lo siguiente , invocar desde la función colorRojo a la función colorVerde

var funciones = {
    colorVerde: function(){
        console.log("VERDE");
    },
    colorRojo: function(){
        console.log("ROJO");
    }
}



funciones.colorRojo = funciones.colorVerde;
funciones.colorRojo();