const urlApi = "http://localhost:4001/api/proveedores"

export const obtainProveedores = async () => {
    try {
        const respons = await fetch(urlApi);
        const result = await respons.json();
        return result;
        
    } catch (error) {
        console.log(error);    
    }
};


export const nuevoProveedor = async (proveedor) => {
    try {
        await fetch(urlApi,{
            method: 'POST',
            body: JSON.stringify(proveedor),
            headers: {
                'Content-Type' : 'Application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
};


export const deleteProveedor = async id => {
    try {
        await fetch(`${urlApi}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        
    }
};


