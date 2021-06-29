import { listaAnuncio ,filtroPrecio} from "./scripts.js"
import crearTabla from "./tabla.js"

var transacciones = [];
let seleccion = 'Todos';

let select = document.getElementById("selectFiltros");

select.addEventListener('change', () => {
    
    filtroPrecio.value = "N/A";
    seleccion = select.options[select.selectedIndex].text;
    console.log(seleccion);
    console.log(seleccion);
    if (seleccion == 'Todos') {
        filtroPrecio.value = "N/A";
        divTabla.innerHTML = "";
        divTabla.appendChild(crearTabla(listaAnuncio));
    } else {
        var listaFiltrada = listaAnuncio.filter(anuncio => {
            return anuncio.transaccion === seleccion;
        });
        divTabla.innerHTML = "";
        divTabla.appendChild(crearTabla(listaFiltrada));
        filtroPrecio.value = filtrarPrecio(listaFiltrada);
    }
});

export function llenarSeleccionados() {
    var transacciones = Array.from(filtrarTransaccionesUnicas());
    transacciones.forEach(transaccion => {
        var option = document.createElement("option");
        option.text = transaccion;
        option.value = transaccion;
        select.appendChild(option);
    });
}

export function filtrarTransaccionesUnicas() {
    listaAnuncio.forEach(anuncio => {
        transacciones.push(anuncio.transaccion);
    });
    var transaccionesUnicas = new Set(transacciones);
    return transaccionesUnicas;
}

export function filtrarPrecio(lista) {
    let listaPrecios = lista.map(anuncio => anuncio.precio);
    let sumaPrecios = listaPrecios.reduce((prev, actual) => {
        return (parseInt(prev) + parseInt(actual))
    });
    let promedio = sumaPrecios / listaPrecios.length;
    return "$ "+promedio.toFixed(2);
}