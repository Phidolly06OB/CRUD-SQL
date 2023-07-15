const urlApi = "http://localhost:4001/api/productos"

export const obtainProductos = async () => {
    try {
        const respons = await fetch(urlApi);
        const result = await respons.json();
        return result;
        
    } catch (error) {
        console.log(error);    
    }
};


export const nuevoProducto = async (producto) => {
    try {
        await fetch(urlApi,{
            method: 'POST',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type' : 'Application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
};


export const deleteProducto = async id => {
    try {
        await fetch(`${urlApi}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        
    }
};


