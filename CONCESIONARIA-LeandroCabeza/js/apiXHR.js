
export async function traerAnuncios() {
    try {
        let res = await fetch("http://localhost:3000/anuncios");
        if(!res.ok)
        {
            let msj = res.statusText || "ERROR";
            throw Error(res.status + "-" +msj);
        }
        let data = await res.json();
        return data;

    } catch (err) {
        console.error(err);
    }
}


/* APLICO XHR POR ENUNCIADO*/ 


export async function traerAnunciosXHR() {
    // 4 PASOS PARA HACER UNA PETICION DE AJAX
        //Instanciamos el objeto httprequest
        const xhr = new XMLHttpRequest();
        //asignar un handler para la peticion
        xhr.onreadystatechange= ()=>{

            if(xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status <299){
                    data = JSON.parse(xhr.responseText);
                    console.log(data);
                }else{
                    
                    const statusText = xhr.statusText || "Ocurrio un error";
                    console.error(`Error : ${xhr.status} : ${statusText}`);
                }
            }  
        };
        //abrir la pticion , true == asincrono
        xhr.open("GET","http://localhost:3000/anuncios");
        // enviar la request
        xhr.send();
};


export async function bajaAnuncio(id) {

                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange= ()=>{

                    if(xhr.readyState == 4){
                        if(xhr.status >= 200 && xhr.status <299){
                            data = JSON.parse(xhr.responseText);
                            console.log(data);
                        }else{
                            
                            const statusText = xhr.statusText || "Ocurrio un error";
                            console.error(`Error : ${xhr.status} : ${statusText}`);
                        }
                    }  
                };
                //setteamos las cabeceras
                xhr.open("DELETE",`http://localhost:3000/anuncios/${id}`);
                xhr.send();
                
            };
