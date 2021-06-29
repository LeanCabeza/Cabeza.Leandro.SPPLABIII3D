

export async function traerAnuncios() {
    try {
        let res = await axios('http://localhost:3000/anuncios');
        return res.data;
    } catch (error) {
        console.log("Error");
    }
};




export async function altaAnuncio(nuevoAnuncio) {
    console.log(nuevoAnuncio);
    const config = {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        data: JSON.stringify(nuevoAnuncio) 
    }
    try {
        let res = await axios('http://localhost:3000/anuncios', config);
        console.log("Guardado exitosamente");
    }
    catch (error) {
        console.error(err.response.status, err.response.statusText);
    }
}

export async function modificarAnuncio(anuncioModificado) {

    let id = anuncioModificado.id;
    const config = {
        method: "PUT",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        data: JSON.stringify(anuncioModificado)
    }
    try {
        let res = await axios('http://localhost:3000/anuncios/'+id, config);
        console.log("ANUNCIO EDITADO");
    } catch (error) {
        console.log("ERROR");
        console.error(error.response.status, error.response.statusText);
    }
}

export async function bajaAnuncio(id) {
    const config = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
    }
    try {
        let res = await axios('http://localhost:3000/anuncios/'+id, config);
        console.log("ELIMINADO", res.data);
    } catch (error) {
        console.log("ERROR AL ELIMINAR");
    }

}