const urlApi = 'http://localhost:4001/api/categorias'; 

export const obtainCategories = async () => {
    try {
        const respons = await fetch(urlApi);
        const result = await respons.json();
        return result;
        
    } catch (error) {
        console.log(error);    
    }
};


export const nuevaCategoria = async (categoria) => {
    try {
        await fetch(urlApi,{
            method: 'POST',
            body: JSON.stringify(categoria),
            headers: {
                'Content-Type' : 'Application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
};


export const deleteCategory = async id => {
    try {
        await fetch(`${urlApi}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        
    }
};




