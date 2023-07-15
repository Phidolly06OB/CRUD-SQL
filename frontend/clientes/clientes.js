import { obtainClientes, deleteCliente } from "./API.js";

(function(){

    const formulario = document.querySelector(".det")

    document.addEventListener("DOMContentLoaded", showClientes);

    formulario.addEventListener('click', confirmar)

    async function showClientes(){
        const cliente = await obtainClientes()
        cliente.forEach(clt => {
            const {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = clt;
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
                    <th scope="row">${ClienteID}</th>
                    <td>${Compania}</td>
                    <td>${Contacto}</td>
                    <td>${Titulo}</td>
                    <td>${Direccion}</td>
                    <td>${Ciudad}</td>
                    <td>${Regiones}</td>
                    <td>${CodigoPostal}</td>
                    <td>${Pais}</td>
                    <td>${Telefono}</td>
                    <td>${Fax}</td>
                    <td><button class="btn btn-danger delete" data-cliente="${ClienteID}" >DELETE</button></td>
                    <td><button data-bs-toggle="modal" data-bs-target="#update  " class="btn btn-success">UPDATE</button></td>
                    <td><button class="btn btn-warning">DETALLE</button></td>
            `
    
            document.querySelector('.det').appendChild(tabla)
        });
    }

    function confirmar(e){
        if(e.target.classList.contains('delete')){
            const clientId = e.target.dataset.cliente;
            const conf = confirm("¿Desea Eliminarlo?")

            if(conf){
                deleteCliente(clientId)
                // window.location.href = "clientes.html"
            }
        }
    }

}())





