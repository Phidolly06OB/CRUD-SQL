import {nuevaCategoria} from "./API.js";

const formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', validarCateg);

function validarCateg(e){
    e.preventDefault();

    const CategoriaNombre = document.querySelector('#nombre').value
    const Descripcion = document.querySelector('#descripcion').value
    const Imagen = document.querySelector('#imagen').value

    const categoria = {
        CategoriaNombre,
        Descripcion,
        Imagen
    }

    if(validate(categoria)){
        alert("xxxx")
        return
    }

    nuevaCategoria(categoria);
    window.location.href = "categorias.html"
}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}