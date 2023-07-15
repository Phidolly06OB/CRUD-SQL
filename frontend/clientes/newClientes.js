import { nuevoCliente } from "./API.js";

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarCliente);

function validarCliente(e){
    e.preventDefault();

    const ClienteID = document.querySelector('id').value
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

    const clientes = {
        ClienteID,
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

    if(validate(clientes)){
        alert("xxxx")
        return
    }

    nuevoCliente(clientes);
    window.location.href = "provedores.html"
}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}