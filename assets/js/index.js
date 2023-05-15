var numeroContadorWrapper = document.getElementById('numeroContador')
var numeroContador = 0;

function incrementa() {
    numeroContador = numeroContador + 1;
    numeroContadorWrapper.innerHTML = numeroContador;
}

function decrementa() {
    numeroContador = numeroContador - 1;
    numeroContadorWrapper.innerHTML = numeroContador;
}