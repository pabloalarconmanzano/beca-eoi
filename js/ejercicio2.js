var alto = new Number(12);
var ancho = new Number(12.203004);
var altoporancho = alto*ancho;

console.log("Resultado sin redondear: " +altoporancho);
console.log("Resultado redondeando a 2 decimales: "+ altoporancho.toFixed(2));
