let arrayejemplo =[{
        "id":"1",
        "tarjeta":"1111 2222 3333 4444",
        "propietario":"Propietario tarjeta 1"
    },
    {
        "id":"2",
        "tarjeta":"5555 6666 7777 8888",
        "propietario":"Propietario tarjeta 2"
    },
    {
        "id":"3",
        "tarjeta":"9999 1010 1111 1212",
        "propietario":"Propietario tarjeta 3"
    }];

let tabla = `<table> id="datatable">
<thead>
    <tr>
        <th>Id</th>
        <th>Tarjeta</th>
        <th>Propietario</th>
    </tr>
</thead>
<tbody>`;

let fintabla=`</tbody>
    </table>`;
    
let filas=``;

arrayejemplo.forEach(item => {
    filas+=`
    <tr>
        <td>${item.id}</td>
        <td>${item.tarjeta}</td>
        <td>${item.propietario}</td>
    </tr>`;
});

tabla+=filas+fintabla;
document.getElementById("resultado").innerHTML=tabla;