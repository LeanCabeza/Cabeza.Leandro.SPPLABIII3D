var checkedArray = [];
export function agregarEventListenerCheckbox() {
    var checkboxElems = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < checkboxElems.length; i++) {
        checkboxElems[i].addEventListener("change", actualizarTablaCheckbox);
    }
}

function actualizarTablaCheckbox(e) {
    if (e.target.checked) {
        checkedArray.forEach(element => {
            if (element == e.target.value) {
                var index = checkedArray.indexOf(e.target.value);
                mostrarElementos(element);
                checkedArray.splice(index, 1);
            }
        });
    }
    else {
        checkedArray.push(e.target.value);
        ocultarElementos(checkedArray);
    }

}

function mostrarElementos(claseIdentificacion) {
    var elementos = document.getElementsByClassName(claseIdentificacion);
    for (let el of elementos) {
        el.style.display = 'table-cell';
        if (el.classList.contains('hide')){
            {
                el.style.display = 'table-cell';
            }
        }
    }
}

function ocultarElementos(lista) {
    lista.forEach(tableElement => {
        var elementos = document.getElementsByClassName(tableElement);
        for (let e of elementos) {
            e.style.display = 'none'; 
        };
    });
}
