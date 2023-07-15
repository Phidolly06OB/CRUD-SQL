import getConnection from "../db/database.js";

const structure = async (res, sqlQuery) => {
    const connection = await getConnection();
    const result = await connection.query(...sqlQuery);
    res.json(result);
}

const getProductos = async (req, res) => {
    try {
        structure(res, ["SELECT * FROM productos"]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getUnicoProducto = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["SELECT * FROM productos WHERE ProductoID = ?", id]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const postProductos = async (req, res) => {
    try {
        const {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado} = req.body;
        const nuevo = {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado}
        structure(res, ["INSERT INTO productos SET ?", nuevo]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const updateProductos = async (req, res) => { 
    try {
        const {id} = req.params;
        const {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado} = req.body;
        const actualizado = {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado}
        structure(res, ["UPDATE productos SET ? WHERE ProductoID = ?", [actualizado, id]]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const deleteProducto = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["DELETE FROM productos WHERE ProductoID = ?", id]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getProductos,
    getUnicoProducto,
    postProductos,
    updateProductos,
    deleteProducto
}