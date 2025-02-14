//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNomes = [];
let pessoas = document.getElementById("listaAmigos");
let limpar = document.querySelector('input');
let resultado = document.getElementById('resultado')

//adicionar com Enter
document.addEventListener('keypress', function (event) {

    const nome = document.querySelector('input').value;

    if (event.key === 'Enter') {

        if (nome == "" || nome == " ") {
            alert('POR FAVOR INSIRA UM NOME !!!')
        } else {
            listaNomes.push(nome);
            pessoas.innerHTML = listaNomes.join(" - ");

        }

        limpar.value = ''

    }


});


//adicionar com click
function adicionarAmigo() {

    const nome = document.querySelector('input').value;

    if (nome == '' || nome == ' ') {
        alert('POR FAVOR INSIRA UM NOME !!!')
    } else {

        listaNomes.push(nome);
        pessoas.innerHTML = listaNomes.join(" - ");

    }

    limpar.value = ''

}

function sortearAmigo() {
    const sorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)];
    resultado.innerHTML = sorteado;
    listaNomes = listaNomes.filter(item => item !== sorteado)

    if(listaNomes == ''){
        alert('TODOS FORAM SORTEADOS')
        window.location.reload()
    }
    
}



