let amigos = [];
let inputAmigo = getElemento("amigo");
let listaAmigos = getElemento("listaAmigos");
let listaResultado = getElemento("resultado");
let indiceAleatorio = -1;

function getElemento(id) {
  return document.getElementById(id);
}

function agregarAmigo() {
  let nombreValido = validarNombre(inputAmigo.value);
  if (!nombreValido) {
    alert("Por favor, inserte un nombre.");
    limpiarInput();
    return;
  }
  if (listaResultado.childElementCount > 0) limpiarResultado();
  if (!validarAmigoDuplicado(inputAmigo.value)) {
    alert("El amigo ya se encuentra en la lista.");
    limpiarInput();
  }
  amigos.push(inputAmigo.value);
  actualizarListaAmigos();
  actualizarIndiceAleatorio();
  limpiarInput();
}

function validarNombre(nombre) {
  const REGEX = /^[a-zA-Z\s]+$/;
  let nombreValido = REGEX.test(nombre);
  return nombre === "" || !nombreValido ? false : true;
}
function validarAmigoDuplicado(nombre) {
  return amigos.some((amigo) => amigo.toLowerCase() === nombre.toLowerCase())
    ? false
    : true;
}
function actualizarListaAmigos() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let nuevoItemLista = document.createElement("li");
    nuevoItemLista.innerHTML = amigos[i];
    listaAmigos.appendChild(nuevoItemLista);
  }
}
function actualizarIndiceAleatorio() {
  indiceAleatorio = Math.floor(Math.random() * amigos.length);
  console.log(indiceAleatorio);
}

function limpiarInput() {
  inputAmigo.value = "";
  inputAmigo.focus();
}
function limpiarListaAmigos() {
  amigos = [];
  listaAmigos.innerHTML = "";
}
function limpiarResultado() {
  listaResultado.innerHTML = "";
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Lista de amigos vacia.");
    return;
  }
  if (amigos.length === 1) {
    alert("No hay suficientes amigos para sortear.");
    return;
  }
  let amigoSorteado = amigos[indiceAleatorio];
  let nuevoItemResultado = document.createElement("li");
  nuevoItemResultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
  listaResultado.appendChild(nuevoItemResultado);
  limpiarListaAmigos();
}
