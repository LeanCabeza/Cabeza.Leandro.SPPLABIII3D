import { listaAnuncio } from "./scripts.js"

export default function crearTabla(lista) {
    const tabla = document.createElement('table');

    tabla.appendChild(crearCabecera(lista[0]));
    tabla.appendChild(crearCuerpoTabla(lista));

    return tabla;
}

function crearCabecera(item) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    for (const key in item) {
        if (key != "ClasePadre") {
            const th = document.createElement('th');
            const texto = document.createTextNode(key);
            th.className = key;
            th.appendChild(texto);
            tr.appendChild(th);
        }
    }
    thead.appendChild(tr);
    return thead;
}

function crearCuerpoTabla(lista) {
    const tbody = document.createElement('tbody');
    lista.forEach(element => {
        const tr = document.createElement('tr');
        for (const key in element) {
            if (key != "ClasePadre") {
                const td = document.createElement('td');
                const texto = document.createTextNode(element[key]);
                td.className = key;
                td.appendChild(texto);
                tr.appendChild(td);
            }
        }
        if (element.hasOwnProperty('id')) {
            tr.setAttribute('data-id', element['id']);
        }
        agregarManejadorTR(tr);
        tbody.appendChild(tr);
    });
    return tbody;
}


function agregarManejadorTR(tr) {
    tr.addEventListener('click', function (e) {
        document.getElementById('btnEliminar').className = "mostrar-boton btn btn-outline-success";
        document.getElementById('btnModificar').className = "mostrar-boton btn btn-outline-primary";
        document.getElementById('btnCancelar').className = "mostrar-boton btn btn-outline-primary";
        document.getElementById('btnAlta').className = "btn-opcional";
        llenarFormulario(e.target.parentNode.dataset.id);
    })
}

function llenarFormulario(id) {
    listaAnuncio.forEach(e => {
        if (e['id'] == id) {
            let form = document.forms[0];
            form.id.value = e['id'];
            form.titulo.value = e['titulo'];
            form.transaccion.value = e['transaccion'];
            form.descripcion.value = e['descripcion'];
            form.precio.value = e['precio'];
            form.Kms.value = e['num_kmh'];
            form.puertas.value = e['num_puertas'];
            form.potencia.value = e['potencia'];
        }
    });

}