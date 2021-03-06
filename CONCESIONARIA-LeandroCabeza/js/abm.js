import { ObtenerAnuncio_Auto } from "../js/anuncio.js";
import { listaAnuncio, actualizarLista, } from "../js/scripts.js";
import { altaAnuncio, modificarAnuncio } from "../js/axiosABM.js";
import {bajaAnuncio} from "./apiXHR.js"

let formAnuncio;

export default function inicializarBotones() {

    const btnAlta = document.getElementById('btnAlta');
    btnAlta.addEventListener('click', function () {
        formAnuncio = document.forms[0];
        let lastId = listaAnuncio[listaAnuncio.length - 1].id;
        const nuevoAnuncio = ObtenerAnuncio_Auto(lastId + 1, formAnuncio);
        if (nuevoAnuncio) {
            altaAnuncio(nuevoAnuncio);
            formAnuncio.reset();
            divTabla.innerHTML = "";
            actualizarLista();
        }

    });

    const btnModificar = document.getElementById('btnModificar');
    btnModificar.addEventListener('click', function (e) {
        formAnuncio = document.forms[0];
        
        for (let i = 0; i < listaAnuncio.length; i++) {
            if (listaAnuncio[i].id == formAnuncio.id.value) {
                const anuncioModificado = ObtenerAnuncio_Auto(formAnuncio.id.value, formAnuncio);
                modificarAnuncio(anuncioModificado);
                formAnuncio.reset();
                actualizarLista();
            }
        }

    });

    const btnEliminar = document.getElementById('btnEliminar');
    btnEliminar.addEventListener('click', function () {
        formAnuncio = document.forms[0];
        for (let i = 0; i < listaAnuncio.length; i++) {
            if (listaAnuncio[i].id == formAnuncio.id.value) {
                bajaAnuncio(formAnuncio.id.value);
                formAnuncio.reset();
                actualizarLista();
            }
        }
    });

    const btnCancelar = document.getElementById('btnCancelar');
    btnCancelar.addEventListener('click', function () {
        document.getElementById("formulario").reset(); 
        ocultarBotones();
    })
}

function ocultarBotones() {
    document.getElementById('btnAlta').className = "btn mostrar-boton";
    document.getElementById('btnEliminar').className = "btn-opcional";
    document.getElementById('btnModificar').className = "btn-opcional";
    document.getElementById('btnCancelar').className = "btn-opcional";
}
