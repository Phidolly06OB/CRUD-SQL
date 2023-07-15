import Categoria from "./structure.js";

const tabla = "categorias";
const id = "CategoriaID";
/* const columnas = {
    CategoriaNombre,
    Descripcion,
    Imagen
} */

const categorias = new Categoria(tabla, id);

const getCategorias = categorias.get();
const postCategorias = categorias.post();
const getOneCategoria = categorias.getOne();


export const categoriasMethods = {
    getCategorias,
    getOneCategoria,
    postCategorias
}