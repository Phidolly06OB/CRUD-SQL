import {obtainCategories, deleteCategory} from "./API.js"

(function(){

    const formulario = document.querySelector(".det")

    document.addEventListener("DOMContentLoaded", showCategorias);

    formulario.addEventListener('click', confirmar)

    async function showCategorias(){
        const categ = await obtainCategories()
        categ.forEach(ctg => {
            const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = ctg;
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
                    <th scope="row">${CategoriaID}</th>
                    <td>${CategoriaNombre}</td>
                    <td>${Descripcion}</td>
                    <td>${Imagen}</td>
                    <td><button class="btn btn-danger delete" data-categoria="${CategoriaID}" >DELETE</button></td>
                    <td><button data-bs-toggle="modal" data-bs-target="#update  " class="btn btn-success">UPDATE</button></td>
                    <td><button class="btn btn-warning">DETALLE</button></td>
            `
    
            document.querySelector('.det').appendChild(tabla)
        });
    }

    function confirmar(e){
        if(e.target.classList.contains('delete')){
            const categId = e.target.dataset.categoria;
            const conf = confirm("¿Desea Eliminarlo?")

            if(conf){
                deleteCategory(categId)
                window.location.href = "categorias.html"
            }
        }
    }

}())






