var array1 = [1,2,3,4];

for(var i = 0; i= array1.length; i++){
    switch (array1) {
        case 1:
            console.log("UNO");
            break;
        case 2:
            console.log("DOS");
            break;
        case 3:
            console.log("TRES");
            break;
        case 4:
            console.log("CUATRO");
            break;
        default:
            console.error("ERROR");
    }
}

function Sumar (param1, param2){
    var resultado;

    resultado=param1+param2;
    console.log(resultado);

    return resultado;
}

var resultadoSuma=Sumar(12,12);

alert(resultadoSuma);