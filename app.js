

// Create a list to store the names of friends.
let listaDeAmigos = [];
const LIMITE_AMIGOS = 10; // Set a friend limit.

// Function to add and display friends.
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const amigo = inputAmigo.value.trim();

    // Check if the input is valid (new feature)
    if (!validacionTexto(amigo)) {
        return;
    }

    if (listaDeAmigos.length >= LIMITE_AMIGOS) {
        alert(`Lo siento, no es posible agregar más de ${LIMITE_AMIGOS} amigos.`);
        return;
    }

    if (listaDeAmigos.includes(amigo)) {
        alert(`${amigo} ya se encuentra en la lista!`);
        return;
    }

    listaDeAmigos.push(amigo);

    const lista = document.getElementById("listaAmigos");
    const nuevoAmigo = document.createElement("li"); // This allow us to add a new frind on the list
    nuevoAmigo.textContent = amigo;
    lista.appendChild(nuevoAmigo); // Efficiently adds new list item

    inputAmigo.value = "";
    inputAmigo.focus(); // Keep the cursor ready for the next name
}

// Function to validate text input 
function validacionTexto(nombreAmigo) {
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (nombreAmigo === "") {
        alert("Lo siento, el campo no puede estar vacío.");
        return false;
    }
    if (!soloLetras.test(nombreAmigo)) {
        alert("Lo siento, sólo se admiten letras, no caracteres especiales.");
        return false;
    }
    return true;
}

// Function to draw a random friend.
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Por favor, ingresa al menos 2 nombres para efectuar el sorteo.");
        return;
    }

    const seleccion = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[seleccion];

    const resultado = document.getElementById("resultado");
    resultado.textContent = `¡El amigo seleccionado es ${amigoSecreto}!`;
}

// Function to reset the game
function reiniciar() {
    listaDeAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("amigo").value = "";
    document.getElementById("resultado").textContent = "";
}

// Event listener to enable "Enter" key to add a friend 
const inputAmigo = document.getElementById("amigo");
if (inputAmigo) {
    inputAmigo.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default behavior
            agregarAmigo();
        }

    // Function to reset the game
function reiniciar() {
    // Empty the friends list array
    listaDeAmigos = [];
    
    // Clear the friends list displayed on the screen
    document.getElementById("listaAmigos").innerHTML = "";
    
    // Clear the input field
    document.getElementById("amigo").value = "";
    
    // Clear the result message
    document.getElementById("resultado").textContent = "";
}
    });
}