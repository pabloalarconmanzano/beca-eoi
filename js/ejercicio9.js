function suma (a, b){
    return a+b;
}


function mult (a, b){
    return a*b;
}



function operaciones(){
    let n1 = prompt("Introduzca un número: ");
    let n2 = prompt("Introduzca otro número")
    let sum = suma(n1, n2);
    let multi = mult(n1, n2);
    let resultado=suma(sum, multi);
    document.getElementById("resultado").innerHTML=resultado;
    
}
