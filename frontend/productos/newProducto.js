import {nuevoProducto} from "./API.js"; 

const formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', validarCateg);

function validarCateg(e){
    e.preventDefault();

    const ProductoNombre = document.querySelector('#nombre').value
    const ProveedorID = document.querySelector('#provedores').value
    const CategoriaID = document.querySelector('#categorias').value
    const CantidadPorUnidad = document.querySelector('#cantidadPU').value
    const PrecioUnitario = document.querySelector('#precioU').value
    const UnidadesStock = document.querySelector('#unidadesS').value
    const UnidadesPedidas = document.querySelector('#nivelOrden').value
    const NivelReorden = document.querySelector('#descontinuado').value
    const Discontinuado = document.querySelector('#unidadesS').value

    const producto = {
        ProductoNombre,
        ProveedorID,
        CategoriaID,
        CantidadPorUnidad,
        PrecioUnitario,
        UnidadesPedidas,
        UnidadesStock,
        NivelReorden,
        Discontinuado,
        
    }

    if(validate(producto)){
        alert("xxxx")
        return
    }

    nuevoProducto(producto);
    window.location.href = "productos.html"
}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}