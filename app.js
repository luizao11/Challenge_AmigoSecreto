let listaNombres = []; //arreglo que contiene a todos los amigos
let nombre = "";
const ul = document.getElementById("listaAmigos");
let nuevali = "";
let nuevaUl = document.getElementById("resultado"); 
let amigosSorteados = []; //Arreglo que contiene a los amigos ya sorteados

//limpia el imput con id "amigo"
function limpiarCampo (){
    document.getElementById("amigo").value = "";
}

//Función para tomar amigo del input y agregarlo al array y a la lista
function agregarAmigo(){
    nombre = document.getElementById("amigo").value;

    if(nombre.trim() === ""){
        alert("Por favor, inserte un nombre.");
    } else {
        listaNombres.push(nombre);
        agrearALista(nombre);
    }

    limpiarCampo();
}

    //Función para crear un nuevo elemento li
function funcionNuevaLi() {     
    nuevali = document.createElement("li");
}

    //Función para agregar li al ul 
function agrearALista(element){
    funcionNuevaLi();
    nuevali.textContent = element;
    ul.appendChild(nuevali); 
}

function sortearAmigo() {
    // Verificar si ya se sortearon todos los amigos
    if (amigosSorteados.length === listaNombres.length) {
        alert("¡Todos los nombres han sido sorteados! Añade uno nuevo o haz clic en Reiniciar.");
        document.getElementById('btnReiniciar').removeAttribute('disabled');
        return; // Salir sin hacer más sorteos
    }

    // Si no hay amigos agregados
    if (listaNombres.length === 0) {
        alert("Inserte un nombre, por favor");
        return;
    }

    let max = listaNombres.length - 1;
    let selecAmigo;

    // Seleccionar un amigo que aún no haya sido sorteado
    do {
        selecAmigo = Math.floor(Math.random() * (max + 1));
    } while (amigosSorteados.includes(listaNombres[selecAmigo]));

    const nombreSorteado = listaNombres[selecAmigo];

    // Agregar el nombre sorteado a la lista de resultados
    funcionNuevaLi();
    nuevali.textContent = nombreSorteado;
    nuevaUl.appendChild(nuevali);

    // Agregar a la lista de nombres ya sorteados
    amigosSorteados.push(nombreSorteado);

    // Ocultar el <li> correspondiente en la lista de amigos
    const items = ul.getElementsByTagName("li");
    for (let item of items) {
        if (item.textContent === nombreSorteado) {
            item.style.display = 'none';
        }
    }

    // Verificar nuevamente si ya se sortearon todos
    if (amigosSorteados.length === listaNombres.length) {
        alert("¡Todos los nombres han sido sorteados!");
        document.getElementById('btnReiniciar').removeAttribute('disabled');
    }
}


function reiniciarJuego() {
        // Limpiar arrays
        listaNombres = [];
        amigosSorteados = [];
    
        // Limpiar listas del DOM , lista de  amigos y lista de resultados
        ul.innerHTML = "";        // lista de amigos
        nuevaUl.innerHTML = "";   // lista de resultados
    
        // Deshabilitar nuevamente el botón
        btnReiniciar.disabled = true;
        limpiarCampo();
}