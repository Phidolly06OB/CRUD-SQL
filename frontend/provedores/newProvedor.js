import {nuevoProveedor} from "./API.js"

const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', validarCateg);

function validarCateg(e){
    e.preventDefault();

    const Compania = document.querySelector('#compania').value
    const Contacto = document.querySelector('#contacto').value
    const Titulo = document.querySelector('#titulo').value
    const Direccion = document.querySelector('#direccion').value
    const Ciudad = document.querySelector('#ciudad').value
    const Regiones = document.querySelector('#regiones').value
    const CodigoPostal = document.querySelector('#codigoP').value
    const Pais = document.querySelector('#pais').value
    const Telefono = document.querySelector('#telefono').value
    const Fax = document.querySelector('#fax').value
    const Pagina = document.querySelector('#pagina').value

    const proveedor = {
        Compania,
        Contacto,
        Titulo,
        Direccion,
        Ciudad,
        Regiones,
        CodigoPostal,
        Pais,
        Telefono,
        Fax,
        Pagina
    }

    if(validate(proveedor)){
        alert("xxxx")
        return
    }

    console.log(proveedor);
    nuevoProveedor(proveedor);
    window.location.href = "provedores.html"
}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}