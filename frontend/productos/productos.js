import {obtainProductos, deleteProducto} from "./API.js"
import { obtainProveedores } from "../provedores/API.js";
import { obtainCategories } from "../categorias/API.js";

(function(){

    const formulario = document.querySelector(".det")

    document.addEventListener("DOMContentLoaded", showPorductos);
    document.addEventListener('DOMContentLoaded', showProveedores)
    document.addEventListener('DOMContentLoaded', showCategorias)

    formulario.addEventListener('click', confirmar)

    async function showPorductos(){
        const prod = await obtainProductos()
        prod.forEach(pd => {
            const {ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado} = pd;
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
                    <th scope="row">${ProductoID}</th>
                    <td>${ProductoNombre}</td>
                    <td>${ProveedorID}</td>
                    <td>${CategoriaID}</td>
                    <td>${CantidadPorUnidad}</td>
                    <td>${PrecioUnitario}</td>
                    <td>${UnidadesStock}</td>
                    <td>${UnidadesPedidas}</td>
                    <td>${NivelReorden}</td>
                    <td>${Discontinuado}</td>
                    <td><button class="btn btn-danger delete" data-producto="${ProductoID}" >DELETE</button></td>
                    <td><button data-bs-toggle="modal" data-bs-target="#update  " class="btn btn-success">UPDATE</button></td>
                    <td><button class="btn btn-warning">DETALLE</button></td>
            `
    
            document.querySelector('.det').appendChild(tabla)
        });
    }

    function confirmar(e){
        if(e.target.classList.contains('delete')){
            const proId = e.target.dataset.producto;
            const conf = confirm("¿Seguro que quiere borrarlo?")

            if(conf){
                deleteProducto(proId)
                window.location.href = "productos.html"
            }
        }
    }

    async function showProveedores(){
        const emple = await obtainProveedores()
        emple.forEach(x =>{
            console.log(emple);
            const {ProveedorID, Compania} = x
            const option = document.createElement('option')
            option.value = ProveedorID
            option.textContent = Compania
            document.querySelector('#provedores').appendChild(option)
    })
    }

    async function showCategorias(){
        const emple = await obtainCategories()
        emple.forEach(x =>{
            console.log(emple);
            const {CategoriaID, CategoriaNombre} = x
            const option = document.createElement('option')
            option.value = CategoriaID
            option.textContent = CategoriaNombre
            document.querySelector('#categorias').appendChild(option)
    })
    }

}())




