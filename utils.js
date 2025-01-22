function verificarInputVazio(input){
    input = String(input).trim()
    if (input == null || input == "") {
        window.alert("Por favor, insira um nome.");
    }
    else{
        return input
    }
}


function TirarDuplicidadeLista(lista){
    listaSemDuplicados = new Set(lista)
    return listaSemDuplicados
}


function CriarLista(array){
    let listaLI = []
    array.forEach(element => {
        let listaChild = document.createElement("li");
        listaChild.textContent = element;
        listaLI.push(listaChild);
    });
    return listaLI
}