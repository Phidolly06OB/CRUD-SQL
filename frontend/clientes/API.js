const urlApi = "http://localhost:4001/api/clientes"

export const obtainClientes = async () => {
    try {
        const respons = await fetch(urlApi);
        const result = await respons.json();
        return result;
        
    } catch (error) {
        console.log(error);    
    }
};


export const nuevoCliente = async (cliente) => {
    try {
        await fetch(urlApi,{
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type' : 'Application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
};


export const deleteCliente = async id => {
    try {
        //el delete solo funciona con las tablas creadas por la persona :/
        await fetch(`${urlApi}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        
    }
};