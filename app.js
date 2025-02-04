let amigos = [];

function agregarAmigo() {
    
    let amigo = document.getElementById('amigo').value;

    
    if (amigo.trim() !== '') {
        amigos.push(amigo);  
        document.getElementById('amigo').value = ''; 
        mostrarAmigos(); 
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}


let amigo = [];

function agregarAmigo() {
    
    let amigo = document.getElementById('amigo').value;

    
    if (amigo.trim() !== '') {
        amigos.push(amigo);  
    
        document.getElementById('amigo').value = ''; 
    
        mostrarAmigos(); 
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
    

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer el sorteo.");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}

