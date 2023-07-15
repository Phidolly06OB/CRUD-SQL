import {obtainProveedores, deleteProveedor} from "./API.js"

(function(){

    const formulario = document.querySelector(".det")

    document.addEventListener("DOMContentLoaded", showCategorias);

    formulario.addEventListener('click', confirmar)

    async function showCategorias(){
        const categ = await obtainProveedores()
        categ.forEach(ctg => {
            const {ProveedorID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = ctg;
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
                    <th scope="row">${ProveedorID}</th>
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
                    <td><button class="btn btn-danger delete" data-proveedor="${ProveedorID}" >DELETE</button></td>
                    <td><button data-bs-toggle="modal" data-bs-target="#update  " class="btn btn-success">UPDATE</button></td>
                    <td><button class="btn btn-warning">DETALLE</button></td>
            `
    
            document.querySelector('.det').appendChild(tabla)
        });
    }

    function confirmar(e){
        if(e.target.classList.contains('delete')){
            const provId = e.target.dataset.proveedor;
            const conf = confirm("¿Seguro que quiere borrarlo?")

            if(conf){
                deleteProveedor(provId)
                window.location.href = "provedores.html"
            }
        }
    }

}())




