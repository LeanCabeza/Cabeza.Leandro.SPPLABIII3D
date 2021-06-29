import crearTabla from "./tabla.js";
import inicializarBotones from "./abm.js";
import {llenarSeleccionados} from "./filtros.js"
import {agregarEventListenerCheckbox} from "./filtroCheck.js"
import {traerAnuncios} from "./apiXHR.js";

export let filtroPrecio = document.getElementById("filtroPrecio");
export let listaAnuncio;

let divTabla;

window.addEventListener('load', inicializarManejadores);


async function inicializarManejadores() {

  listaAnuncio = await traerAnuncios();

  divTabla = document.getElementById('divTabla');

  actualizarLista();
  llenarSeleccionados();

  inicializarBotones();
  agregarEventListenerCheckbox();
  filtroPrecio.value = "N/A";
}


export function guardarDatos() {
  localStorage.setItem('anuncios', JSON.stringify(listaAnuncio));
  localStorage.setItem('nextId', proximoId);
}

export function actualizarLista() {
  divTabla.innerHTML = "";
  const imgSource = document.createElement('img');
  imgSource.src = "./assets/spinner.gif";
  divTabla.appendChild(imgSource);
  setTimeout(() => {
    divTabla.innerHTML = "";
    divTabla.appendChild(crearTabla(listaAnuncio));
  }, 1000);
}

