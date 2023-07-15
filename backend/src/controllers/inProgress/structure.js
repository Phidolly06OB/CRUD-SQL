import dbCnx from './dbCnx.js';

export default class methodsHTTP {

    constructor (tabla, idNombre) {
        this.tabla = tabla;
        this.idNombre = idNombre;
    }

    get(req, res) {
        try {
            dbCnx(res, [`SELECT * FROM ${this.tabla}`]);
        } catch (err) {
            res.status(500);
            res.send(err.message);
        }
    }
    
    post(req, res){
        try {
            const body = req.body;
            const nuevo = {...body};
            console.log(nuevo);
    
            dbCnx(res, [`INSERT INTO ${this.tabla} SET ?`, nuevo]);
        } catch (err) {
            res.status(500);
            res.send(err.message);
        }
    }

    getOne(req, res) {
        try {
            const {param} = req.params;
            dbCnx(res, [`SELECT * FROM ${this.tabla} WHERE ${this.idNombre} = ?`, param]);
        } catch (err) {
            res.status(500);
            res.send(err.message);
        }
    }

}
