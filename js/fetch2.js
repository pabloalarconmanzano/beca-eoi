let arrayUsuarios =[{
        "Apellidos":"Apellidos Usuario 1",
        "Direccion":"Direccion Usuario 1",
        "Nombre":"Usuario 1"
    },
    {
        "Apellidos":"Apellidos Usuario 2",
        "Direccion":"Direccion Usuario 2",
        "Nombre":"Usuario 2"
    },
    {
        "Apellidos":"Apellidos Usuario 3",
        "Direccion":"Direccion Usuario 3",
        "Nombre":"Usuario 3"
}]

let tabla = `<table> id="datatable">
<thead>
    <tr>
        <th>Apellidos</th>
        <th>Direccion</th>
        <th>Nombre</th>
    </tr>
</thead>
<tbody>`;

let fintabla=`</tbody>
    </table>`;
    
let filas=``;

arrayUsuarios.forEach(item => {
    filas+=`
    <tr>
        <td>${item.Apellidos}</td>
        <td>${item.Direccion}</td>
        <td>${item.Nombre}</td>
    </tr>`;
});

tabla+=filas+fintabla;
document.getElementById("resultado").innerHTML=tabla;