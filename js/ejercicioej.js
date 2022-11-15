var nombre = "Sonia";
var obj = {
    nombre: "Sandra",
    saludo: function(){
        console.log("Hola " +this.nombre);
    }
}

var maria = {
    nombre: "Maria"
};

maria.saludo = obj.saludo;
maria.saludo();