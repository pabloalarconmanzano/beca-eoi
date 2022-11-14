/*CREAR CADENA CON VALOR Y SIN VALOR */
var cadena1 = "CADENA1";
var cadena2;

/*MOSTRAR CADENA1*/
console.log(cadena1);

/*MOSTRAR CADENA2*/
console.log(typeof(cadena2));

/*SI ES UNDEFINED MOSTRAR "SIN DEFINIR"*/
if (typeof(cadena2) == "undefined") {
    console.log("SIN DEFINIR");
}

/*CREAR OBJETO CLIENTE CON PROPIEDADES*/
var cliente={
    nombre:'PEPITO',
    tel:'656666666',
}

/*AÑADIR AL CLIENTE OBJETO OTRA PROPIEDAD*/
cliente.direccion='C/Salud,21';

/*MOSTRAR OBJETO CLIENTE*/
console.log(cliente);