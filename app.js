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
    
    //console.log(amigos);
}
