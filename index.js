function Encriptar() {
let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("Titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");

let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (texto.length != 0) {
        document.getElementById ("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto Encriptado con éxito";
        parrafo.textContent = "";
        muñeco.scr = "./img/encriptado.png";
    }
    else {
        muñeco.scr = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function Desencriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("Titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");


    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length != 0) {
    document.getElementById ("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.scr = "./img/desencriptado.png";
    }
    else {
        muñeco.scr = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
        alert("Debes ingresar algún texto");
    }
}