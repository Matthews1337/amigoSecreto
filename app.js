let listaNomes = []


let adicionarAmigo = () => {
    let inputAddAmigo = document.querySelector("#amigo");
    let inputTratado = verificarInputVazio(inputAddAmigo.value);
    listaNomes.push(inputTratado)
    let novaLista = TirarDuplicidadeLista(listaNomes);
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    let NovaListaNomes = CriarLista(novaLista)
    NovaListaNomes.forEach(li => listaAmigos.appendChild(li));;
    inputAddAmigo.value = "";

}

let sortearAmigo = () =>{
    let indexSorteado = listaNomes[Math.floor((Math.random() * listaNomes.length))];
    const resultado = document.querySelector("#resultado");
    resultado.textContent = `O amigo sorteado foi: ${indexSorteado}`;
}



