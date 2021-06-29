class Anuncio{
    constructor(id,titulo,transaccion,descripcion,precio){
        this.id = id ;
        this.titulo = titulo ;
        this.transaccion = transaccion ;
        this.descripcion = descripcion ;
        this.precio = precio ;    
    }
}


export default class Anuncio_Auto extends Anuncio {

    constructor(id,titulo,transaccion,descripcion,precio,num_puertas,num_kmh,potencia) {
        super(id,titulo,transaccion,descripcion,precio);
        this.num_puertas = num_puertas ;
        this.num_kmh = num_kmh ;
        this.potencia = potencia;
    }
}


export function ObtenerAnuncio_Auto( proxId, frm){
const anuncio = new Anuncio_Auto(
    proxId,
    frm.titulo.value,
    frm.transaccion.value,
    frm.descripcion.value,
    frm.precio.value,
    frm.puertas.value,
    frm.num_kmh.value,
    frm.potencia.value
    );
return anuncio;      
}