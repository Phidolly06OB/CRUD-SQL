import getConnection from "../db/database.js";

const structure = async (res, sqlQuery) => {
    const connection = await getConnection();
    const result = await connection.query(...sqlQuery);
    res.json(result);
}

const getprovedores = async (req, res) => {
    try {
        structure(res, ["SELECT * FROM proveedores"]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCategorias = async (req, res) => {
    try {
        structure(res, ["SELECT * FROM proveedores"]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getUnicoProvedor = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["SELECT * FROM proveedores WHERE ProveedorID = ?", id]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const postProvedor = async (req, res) => {
    try {
        const {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina} = req.body;
        const nuevoProvedor = {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina}
        structure(res, ["INSERT INTO proveedores SET ?", nuevoProvedor]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const updateProvedor = async (req, res) => { 
    try {
        const {id} = req.params;
        const {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina} = req.body;
        const categoriaActualizada = {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina}
        structure(res, ["UPDATE proveedores SET ? WHERE ProveedorID = ?", [categoriaActualizada, id]]);
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const deleteProvedor = async (req, res) => {
    try {
        const {id} = req.params;
        structure(res, ["DELETE FROM proveedores WHERE ProveedorID = ?", id]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getprovedores,
    getprovedores,
    postProvedor,
    updateProvedor,
    deleteProvedor
}
