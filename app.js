// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    const inputNombre = document.getElementById("amigo");
    if(inputNombre.value.trim() === ""){
        alert("Ingresa un nombre valido");
        return;
    }
    amigos.push(inputNombre.value);
    inputNombre.value = "";
    
    actualizarLista();
}

function actualizarLista(){
    const listAmigos = document.getElementById("listaAmigos");
    listAmigos.innerHTML = "";
    
    for(let i = 0 ; i < amigos.length ; i++){
        const nuevoElemento = document.createElement("li");    
        nuevoElemento.textContent = amigos[i];
        listaAmigos.appendChild(nuevoElemento);
    }
}

function sortearAmigo(){
    
    if( amigos.length == 0 ){
        alert("Por favor, ingrese nombres antes de sortear");
        return;
    }

    const resultado = document.getElementById("resultado");
    let i = Math.floor(Math.random() * amigos.length);
    
    
    resultado.innerHTML = "El amigo secreto sorteado es: " + amigos[i];
    amigos = [];
    actualizarLista();
}